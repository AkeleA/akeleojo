"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Badge {
  label: string;
  logo: {
    name: string;
    color: string;
  };
}

interface Props {
  title: string;
  description: string;
  link: string;
  badges: Badge[];
}

export default function ProjectCard({
  title,
  description,
  link,
  badges = [],
}: Props) {
  const tiltRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      import("vanilla-tilt").then(({ default: VanillaTilt }) => {
        VanillaTilt.init(tiltRef.current!, {
          max: 8,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      });
    }
  }, []);

  return (
    <motion.a
      ref={tiltRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden bg-card text-foreground border border-border shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <div className="flex flex-col w-full p-6 h-full space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-accent-light flex-grow">{description}</p>
        <div className="flex flex-col items-start justify-start space-x-2 space-y-2">
          {badges.map((b) => (
            <Image
              key={b.label}
              src={`https://img.shields.io/badge/-${encodeURIComponent(
                b.label
              )}-${b.logo.color.replace(
                "#",
                ""
              )}?style=flat-square&logo=${encodeURIComponent(
                b.logo.name
              )}&logoColor=white`}
              alt={b.label}
              height={40}
              width={80}
              unoptimized={true}
              className="transition-transform duration-200 hover:scale-110 object-contain"
            />
          ))}
        </div>
        <span className="text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View Project →
        </span>
      </div>
    </motion.a>
  );
}
