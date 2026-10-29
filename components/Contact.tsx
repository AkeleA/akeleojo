"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import Turnstile from "./Turnstile";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);
  const resetCaptcha = () => {
    setCaptchaToken(null);
    setCaptchaKey((key) => key + 1);
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const name = String(data.get("user_name") ?? "").trim();
    const email = String(data.get("user_email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (data.get("bot_field")) return;
    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!captchaToken) {
      toast.error("Please complete the captcha.");
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          token: captchaToken,
          website: data.get("bot_field"),
        }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };
      if (!response.ok || !result.success) {
        resetCaptcha();
        toast.error(
          response.status === 429
            ? "Too many attempts. Please wait a few minutes."
            : "Verification failed. Please try again.",
        );
        return;
      }
      toast.success("Thanks - your message is on its way.");
      form.reset();
      resetCaptcha();
    } catch (error) {
      console.error(error);
      resetCaptcha();
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
      <input
        type="text"
        name="bot_field"
        className="honeypot"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
      />
      <label>
        Your name
        <input
          name="user_name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
        />
      </label>
      <label>
        Email address
        <input
          name="user_email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
        />
      </label>
      <label>
        What can I help with?
        <textarea name="message" rows={5} maxLength={5000} required />
      </label>
      <Turnstile key={captchaKey} onTokenChange={setCaptchaToken} />
      <button
        className="button button-primary"
        type="submit"
        disabled={isSending || !captchaToken}
      >
        {isSending ? "Sending..." : "Send message"}
        {!isSending && <ArrowUpRight size={16} aria-hidden="true" />}
      </button>
    </form>
  );
}
