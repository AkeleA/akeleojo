"use client";

import { ArrowUpRight } from "lucide-react";

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
  role?: string;
  badges: Badge[];
}

export default function ProjectCard({
  title,
  description,
  link,
  role,
  badges = [],
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} project, ${role ? `${role}, ` : ""}${description}. Opens in a new tab`}
      className="group block border-t border-border py-5 text-foreground transition last:border-b hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0 space-y-2">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-foreground/68">
              {role ? `${role} - ${description}` : description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Technologies used">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="rounded-full bg-card/55 px-2.5 py-1 text-xs text-foreground/62 ring-1 ring-border"
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="mt-1 shrink-0 text-foreground/38 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
    </a>
  );
}
