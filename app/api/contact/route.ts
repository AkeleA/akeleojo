import { NextResponse } from "next/server";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";
const attempts = new Map<string, { count: number; resetAt: number }>();

type ContactBody = { name?: string; email?: string; message?: string; token?: string; website?: string };

function clientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || entry.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 5;
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (rateLimited(ip)) return NextResponse.json({ success: false, error: "Too many requests." }, { status: 429 });

  let body: ContactBody;
  try { body = await request.json() as ContactBody; }
  catch { return NextResponse.json({ success: false }, { status: 400 }); }

  // Bots commonly fill every field; return a fake success for the hidden one.
  if (body.website) return NextResponse.json({ success: true });

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  if (!name || !email || !message || !body.token || name.length > 100 || email.length > 254 || message.length > 5000 || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ success: false, error: "Invalid submission." }, { status: 400 });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Legacy fallbacks keep existing deployments working while variables are renamed.
  const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (!secret || !serviceId || !templateId || !publicKey) {
    console.error("Contact form environment variables are not configured.");
    return NextResponse.json({ success: false, error: "Contact form unavailable." }, { status: 503 });
  }

  try {
    const verification = new FormData();
    verification.set("secret", secret);
    verification.set("response", body.token);
    if (ip !== "unknown") verification.set("remoteip", ip);
    const verifyResponse = await fetch(VERIFY_URL, { method: "POST", body: verification, cache: "no-store" });
    const verifyResult = await verifyResponse.json() as { success?: boolean };
    if (!verifyResult.success) return NextResponse.json({ success: false, error: "Captcha verification failed." }, { status: 403 });

    const sendResponse = await fetch(SEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service_id: serviceId, template_id: templateId, user_id: publicKey, accessToken: process.env.EMAILJS_PRIVATE_KEY || undefined, template_params: { user_name: name, user_email: email, message } }),
      cache: "no-store",
    });
    if (!sendResponse.ok) throw new Error(`EmailJS returned ${sendResponse.status}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return NextResponse.json({ success: false, error: "Unable to send message." }, { status: 502 });
  }
}
