"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { type KeyboardEvent, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Blog from "@/components/Blog";
import Projects from "@/components/Projects";

type Tab = "about" | "blog";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "about" },
  { id: "blog", label: "blog" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AkeleA",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akeleojo-achor-1a8557172/",
    Icon: FaLinkedin,
  },
  // {
  //   label: "Instagram",
  //   href: "https://www.instagram.com/e.ne.ke.le/",
  //   Icon: FaInstagram,
  // },
];

const AboutPanel = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="space-y-10 py-5.5 text-foreground md:py-8"
      aria-labelledby="intro-heading"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
        className="space-y-4"
      >
        <p className="text-base font-medium text-accent-light">Hi, I&apos;m</p>
        <div className="flex flex-col items-start justify-start space-y-8.5">
          <h1
            id="intro-heading"
            className="text-4xl font-bold tracking-normal text-foreground md:text-6xl"
          >
            Akeleojo Achor
          </h1>
          <div className="flex">
            <p className="text-xl font-semibold tracking-normal text-foreground/85 md:text-2xl">
              Software Engineer
            </p>
          </div>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-foreground/75">
          My work spans fintech, healthcare, commerce, and developer tooling. I
          have shipped payment integrations, real time applications, and
          production systems where performance and correctness matter, mostly
          with TypeScript, React, Next.js, Node.js, and PostgreSQL.
          <br />
          I focus on accessibility, security, and long term maintainability. I
          care about systems that behave predictably under load and are
          straightforward to reason about.
          <br /> Outside of delivery, I try to solve problems and read up on new
          technologies.
        </p>

        <nav className="flex items-center gap-4 pt-3" aria-label="Social links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile, opens in a new tab`}
              className="rounded-sm text-accent-light transition hover:text-accent hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <Icon size={23} aria-hidden="true" focusable="false" />
            </a>
          ))}
        </nav>
      </motion.div>

      <Projects />
    </section>
  );
};

export default function PortfolioShell() {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const shouldReduceMotion = useReducedMotion();
  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const focusTab = (index: number) => {
    const nextTab = tabs[index];
    setActiveTab(nextTab.id);
    document.getElementById(`${nextTab.id}-tab`)?.focus();
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab((activeTabIndex + 1) % tabs.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab((activeTabIndex - 1 + tabs.length) % tabs.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <section
      className="relative mx-auto min-h-[calc(100vh-72px)] w-full max-w-2xl px-5 py-4.5 md:py-6.5"
      aria-label="Portfolio content"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-20 h-105 rounded-full bg-background/55 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <nav
          className="mb-2.5 flex items-center gap-5 text-sm font-medium"
          aria-label="Portfolio sections"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`${tab.id}-tab`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={handleTabKeyDown}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`rounded-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-4 focus-visible:ring-offset-background ${
                activeTab === tab.id
                  ? "text-accent"
                  : "text-foreground/55 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`${activeTab}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeTab}-tab`}
            tabIndex={-1}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            {activeTab === "about" && <AboutPanel />}
            {activeTab === "blog" && <Blog />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
