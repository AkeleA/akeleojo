"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "sonner";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const Contact = () => {
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

    if (honeypot) return; // spam
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
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="w-full mt-24 p-4 text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full mx-auto"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          Let’s Connect
        </h2>
        <p className="text-accent text-center mb-8">
          Fill out the form below to send me a message directly.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-5 flex flex-col items-center justify-center bg-card p-6 rounded-xl shadow"
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
            className="w-full px-4 py-2 rounded border border-border bg-input text-foreground"
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded border border-border bg-input text-foreground"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded border border-border bg-input text-foreground resize-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className="btn-primary max-w-lg mx-auto w-full py-2 rounded text-sm align-center font-medium"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
