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

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          href="#main-content"
          className="wordmark"
          aria-label="Akeleojo Achor home"
        >
          AA<span>.</span>
        </a>
        <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="theme-toggle" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} disabled={!mounted}>
          {mounted && theme === "light" ? <MoonIcon size={17} aria-hidden="true" /> : <SunIcon size={17} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
