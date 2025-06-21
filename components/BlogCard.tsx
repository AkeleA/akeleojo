"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  excerpt: string;
  link: string;
}

function truncate(text: string, max = 47): string {
  return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

export default function BlogCard({ title, excerpt, link }: Props) {
  const truncatedTitle = truncate(title);

  return (
    <motion.a
      href={link}
      className="group block rounded-xl overflow-hidden bg-card text-foreground border border-border shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6 w-full flex flex-col h-full space-y-2.5">
        <h3 className="text-lg font-semibold">{truncatedTitle}</h3>
        <p className="text-sm text-accent-light flex-grow">{excerpt}</p>
        <span className="text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Read Post →
        </span>
      </div>
    </motion.a>
  );
}
