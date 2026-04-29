"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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

const AboutPanel = () => (
  <section className="space-y-10 py-8 text-foreground md:py-12">
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-4"
    >
      <p className="text-base font-medium text-accent-light">Hi, I&apos;m</p>
      <div>
        <h1 className="text-4xl font-bold tracking-normal text-foreground md:text-6xl">
          Akeleojo Achor
        </h1>
        <p className="mt-2 text-xl font-semibold text-foreground/85 md:text-2xl">
          Frontend Developer
        </p>
      </div>

      <p className="max-w-2xl text-base leading-7 text-foreground/75">
        My work spans fintech, healthcare, commerce, and developer tooling. I
        have shipped payment integrations, real time applications, and
        production systems where performance and correctness matter.
        <br />
        I focus on accessibility, security, and long term maintainability. I
        care about systems that behave predictably under load and are
        straightforward to reason about.
        <br /> Outside of delivery, I try to solve problems more problems and
        read up on new technologies.
      </p>

      <div className="flex items-center gap-4 pt-3">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-accent-light transition hover:text-accent hover:scale-110"
          >
            <Icon size={23} />
          </a>
        ))}
      </div>
    </motion.div>

    <Projects />
  </section>
);

export default function PortfolioShell() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <section className="relative mx-auto min-h-[calc(100vh-72px)] w-full max-w-2xl px-5 py-8 md:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-20 h-105 rounded-full bg-background/55 blur-3xl" />
      <div className="relative z-10">
        <nav className="mb-7 flex items-center gap-5 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`transition ${
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "about" && <AboutPanel />}
            {activeTab === "blog" && <Blog />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
