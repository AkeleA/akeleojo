"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="sticky z-20 w-full flex justify-center p-4">
      <div className="max-w-5xl w-full flex justify-between items-center px-4 py-2 rounded-full">
        {/* Center - Chat button */}
        <div className="rounded-full flex gap-2 items-center px-3 py-0.5">
          <h1 className="text-white font-medium transition-transform hover:scale-105">
            akeleojo.
          </h1>
          <a
            href="mailto:achorisaac@gmail.com?subject=Let's%20Chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-none text-white text-sm px-2.5 py-0.5 rounded-full 
                       border border-gray-500 flex items-center gap-1
                       hover:bg-gray-800 transition-all duration-300"
            >
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
              className="text-gray-400 hover:text-white hover:scale-110 transition-all flex items-center gap-1"
            >
              <Icon />
              {text && <span className="text-sm">{text}</span>}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative z-30">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>

          {/* Mobile Dropdown Menu (Static, No Animations) */}
          {mobileMenuOpen && (
            <div className="absolute top-8 right-0 py-4 bg-black/5 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4">
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
                  className="text-gray-400 hover:text-white transition-all"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
