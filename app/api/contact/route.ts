import { NextResponse } from "next/server";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";

const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

const attempts = new Map<string, { count: number; resetAt: number }>();

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  token?: string;
  website?: string;
};

type TurnstileResult = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

function clientIp(request: Request): string {
  // Only trust these headers when your deployment proxy
  // controls or sanitises them.
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function rateLimited(ip: string): boolean {
  const now = Date.now();

  const entry = attempts.get(ip);

  if (!entry || entry.resetAt <= now) {
    attempts.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });

    return false;
  }

  entry.count += 1;

  return entry.count > MAX_ATTEMPTS;
}

function validEmail(email: string): boolean {
  return /^\S+@\S+\.\S+$/.test(email);
}

function validateHostname(hostname?: string): boolean {
  const configuredHosts = process.env.TURNSTILE_ALLOWED_HOSTNAMES;

  if (!configuredHosts) {
    // Hostname validation is optional until configured.
    return true;
  }

  if (!hostname) return false;

  const allowedHosts = configuredHosts
    .split(",")
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean);

  return allowedHosts.includes(hostname.toLowerCase());
}

export async function POST(request: Request) {
  const ip = clientIp(request);

  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please try again later.",
      },
      { status: 429 },
    );
  }

  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request body.",
      },
      { status: 400 },
    );
  }

  // Honeypot: silently accept suspected bot submissions.
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  if (
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    typeof body.token !== "string"
  ) {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid submission.",
      },
      { status: 400 },
    );
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();
  const token = body.token.trim();

  if (
    !name ||
    !email ||
    !message ||
    !token ||
    name.length > 100 ||
    email.length > 254 ||
    message.length > 5000 ||
    !validEmail(email)
  ) {
    return NextResponse.json(
      {
        success: false,
        error: "Please provide valid contact information.",
      },
      { status: 400 },
    );
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;

  const serviceId =
    process.env.EMAILJS_SERVICE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

  const templateId =
    process.env.EMAILJS_TEMPLATE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const publicKey =
    process.env.EMAILJS_PUBLIC_KEY ||
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!secret || !serviceId || !templateId || !publicKey) {
    console.error("Contact form environment variables are missing.");

    return NextResponse.json(
      {
        success: false,
        error: "Contact form is temporarily unavailable.",
      },
      { status: 503 },
    );
  }

  // Step 1: Verify Cloudflare Turnstile token.
  try {
    const verification = new FormData();

    verification.set("secret", secret);
    verification.set("response", token);

    if (ip !== "unknown") {
      verification.set("remoteip", ip);
    }

    const verifyResponse = await fetch(VERIFY_URL, {
      method: "POST",
      body: verification,
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!verifyResponse.ok) {
      throw new Error(`Turnstile returned HTTP ${verifyResponse.status}`);
    }

    const verifyResult = (await verifyResponse.json()) as TurnstileResult;

    if (!verifyResult.success) {
      console.warn(
        "Turnstile verification rejected:",
        verifyResult["error-codes"] ?? [],
      );

      return NextResponse.json(
        {
          success: false,
          error: "Captcha verification failed. Please retry.",
        },
        { status: 403 },
      );
    }

    if (!validateHostname(verifyResult.hostname)) {
      console.warn("Turnstile hostname validation failed.");

      return NextResponse.json(
        {
          success: false,
          error: "Captcha verification failed.",
        },
        { status: 403 },
      );
    }
  } catch (error) {
    console.error("Turnstile verification error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Verification service unavailable. Please retry.",
      },
      { status: 502 },
    );
  }

  // Step 2: Send verified contact message via EmailJS.
  try {
    const sendResponse = await fetch(SEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        ...(privateKey ? { accessToken: privateKey } : {}),
        template_params: {
          user_name: name,
          user_email: email,
          message,
        },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!sendResponse.ok) {
      console.error("EmailJS request failed:", sendResponse.status);

      throw new Error("Email delivery failed.");
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact email delivery error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send message. Please try again.",
      },
      { status: 502 },
    );
  }
}
