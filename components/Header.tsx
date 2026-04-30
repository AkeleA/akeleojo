"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center py-2">
      <div className="max-w-2xl w-full flex justify-between items-center">
        <a
          href="#main-content"
          className="relative flex items-center gap-1 select-none rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          aria-label="Akeleojo Achor home"
        >
          <div className="absolute -top-1 left-1/4 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-(--accent) z-10" />
          <span className="text-lg font-extrabold tracking-tight font-outfit leading-none bg-linear-to-r from-(--accent-light) to-(--accent) bg-clip-text text-transparent">
            akeleojo
          </span>
        </a>

        <button
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/70 text-accent-light transition hover:border-accent hover:text-accent hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? (
            <MoonIcon size={17} aria-hidden="true" />
          ) : (
            <SunIcon size={17} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
