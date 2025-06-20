"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center p-4 backdrop-blur-sm header-bg">
      <div className="max-w-5xl w-full flex justify-between items-center px-4 py-2 rounded-full">
        {/* Center - Chat button */}
        <div className="rounded-full flex gap-2 items-center px-3 py-0.5">
          <h1 className="text-foreground font-medium transition-transform hover:scale-105">
            akeleojo.
          </h1>
          <a
            href="mailto:achorisaac@gmail.com?subject=Let's%20Chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-outline text-sm px-2.5 py-0.5 rounded-full flex items-center gap-1 hover:bg-muted transition-all duration-300">
              Let&apos;s Chat{" "}
              <MdArrowOutward className="hover:rotate-45 transition-transform" />
            </button>
          </a>
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/akeleojo-achor-1a8557172/",
            },
            { Icon: FaGithub, href: "https://github.com/AkeleA" },
            { Icon: FaTwitter, href: "https://twitter.com" },
            {
              Icon: CgFileDocument,
              href: "/Akeleojo_Achor_CV.pdf",
              download: true,
              text: "CV",
            },
          ].map(({ Icon, href, text, download }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : "_self"}
              rel={href.startsWith("http") ? "noopener noreferrer" : ""}
              download={download}
              className="text-accent-light hover:text-accent hover:scale-110 transition-all flex items-center gap-1"
            >
              <Icon />
              {text && <span className="text-sm">{text}</span>}
            </a>
          ))}

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-accent-light hover:text-accent transition-all hover:scale-110"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative z-30">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:text-muted transition-colors"
          >
            {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-8 right-0 py-4 bg-card border border-muted rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4">
              {[
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/akeleojo-achor-1a8557172/",
                },
                { Icon: FaGithub, href: "https://github.com/AkeleA" },
                { Icon: FaTwitter, href: "https://twitter.com" },
                {
                  Icon: CgFileDocument,
                  href: "/Akeleojo_Achor_CV.pdf",
                  download: true,
                },
              ].map(({ Icon, href, download }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                  download={download}
                  className="text-accent-light hover:text-accent transition-all"
                >
                  <Icon size={24} />
                </a>
              ))}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="text-accent-light hover:text-accent transition-all hover:scale-110"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <MoonIcon size={20} />
                ) : (
                  <SunIcon size={20} />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
