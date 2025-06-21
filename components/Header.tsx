"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Disable body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center p-4 backdrop-blur-sm header-bg">
      <div className="max-w-5xl w-full flex justify-between items-center px-4 py-2 rounded-full">
        {/* Left: Logo + CTA */}
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-[1px] select-none">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-xl font-extrabold tracking-tight font-outfit text-foreground leading-none">
              <span className="text-accent-light">A</span>
              <span className="text-accent -ml-0.5">K</span>
            </span>
            <div className="w-2 h-2 border-t-2 border-accent rotate-[37deg]" />
          </div>
          <a href="#contact">
            <button
              className="btn-outline text-sm px-3 py-1 rounded-full flex items-center gap-1 hover:bg-muted transition-all duration-300"
              aria-label="Scroll to contact section"
            >
              Let&apos;s Chat{" "}
              <MdArrowOutward className="transition-transform group-hover:rotate-45" />
            </button>
          </a>
        </div>

        {/* Desktop: Socials + Theme */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/akeleojo-achor-1a8557172/",
            },
            { Icon: FaGithub, href: "https://github.com/AkeleA" },
            {
              Icon: FaInstagram,
              href: "https://www.instagram.com/e.ne.ke.le/",
            },
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

        {/* Mobile Menu */}
        <div className="md:hidden relative z-30">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:text-muted transition-colors"
          >
            {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>

          {mobileMenuOpen && (
            <div className="absolute top-8 right-0 py-4 px-5 bg-card border border-muted rounded-lg shadow-lg flex flex-col items-center space-y-4">
              {[
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/akeleojo-achor-1a8557172/",
                },
                { Icon: FaGithub, href: "https://github.com/AkeleA" },
                {
                  Icon: FaInstagram,
                  href: "https://www.instagram.com/e.ne.ke.le/",
                },
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
