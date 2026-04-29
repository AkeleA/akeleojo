"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact = ({ isOpen, onClose }: ContactProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const name = form["user_name"].value.trim();
    const email = form["user_email"].value.trim();
    const message = form["message"].value.trim();
    const honeypot = form["bot_field"].value;

    if (honeypot) return;
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      form.reset();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8 text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
        >
          <button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 bg-background/70 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-xl rounded-2xl border border-border bg-card/95 p-5 shadow-2xl"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id="contact-title" className="text-2xl font-semibold">
                  Let&apos;s Connect
                </h2>
                <p className="mt-1 text-sm text-accent">
                  Send me a message directly.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-border p-2 text-foreground transition hover:border-accent hover:text-accent"
                aria-label="Close contact form"
              >
                <X size={18} />
              </button>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4 flex flex-col items-center justify-center"
            >
              <input
                type="text"
                name="bot_field"
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground outline-none transition focus:border-accent"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground outline-none transition focus:border-accent"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground outline-none transition resize-none focus:border-accent"
              />

              <button
                type="submit"
                disabled={isSending}
                className="btn-primary max-w-lg mx-auto w-full py-3 rounded-lg text-sm align-center font-medium disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
