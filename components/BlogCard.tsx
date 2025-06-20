"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  excerpt: string;
  link: string;
}

function truncate(text: string, max = 25): string {
  return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

export default function BlogCard({ title, excerpt, link }: Props) {
  const truncatedTitle = truncate(title);

  return (
    <motion.a
      href={link}
      className="group block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-5 w-full flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2">{truncatedTitle}</h3>
        <p className="text-gray-600 dark:text-gray-300 flex-grow">{excerpt}</p>
        <span className="mt-4 text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Read Post →
        </span>
      </div>
    </motion.a>
  );
}
