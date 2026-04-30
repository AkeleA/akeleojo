"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  title: string;
  excerpt: string;
  link: string;
}

function truncate(text: string, max = 72): string {
  return text.length > max ? `${text.slice(0, max - 3)}...` : text;
}

export default function BlogCard({ title, excerpt, link }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const truncatedTitle = truncate(title);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title}. Opens in a new tab`}
      className="group block overflow-hidden rounded-xl border border-border bg-card text-foreground shadow-md transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
    >
      <div className="flex h-full w-full flex-col space-y-2.5 p-6">
        <h3 className="text-lg font-semibold">{truncatedTitle}</h3>
        <p className="flex-grow text-sm text-accent-light">{excerpt}</p>
        <span className="text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Read post
        </span>
      </div>
    </motion.a>
  );
}
