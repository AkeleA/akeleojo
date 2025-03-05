"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { MdArrowOutward, MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative z-30 w-full flex justify-center p-4">
      <div className="max-w-5xl w-full flex justify-between items-center px-4 py-2 rounded-full">
        {/* Center - Chat button */}
        <div className="rounded-full flex gap-2 items-center px-3 py-0.5">
          <h1 className="text-white font-medium transition-transform hover:scale-105">
            akeleojo.
          </h1>
          <button
            className="bg-none text-white text-sm px-2.5 py-0.5 rounded-full 
                       border border-gray-500 flex items-center gap-1
                       hover:bg-gray-800 transition-all duration-300"
          >
            Let&apos;s Chat{" "}
            <MdArrowOutward className="hover:rotate-45 transition-transform" />
          </button>
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
            { Icon: CgFileDocument, href: "/cv", text: "CV" },
          ].map(({ Icon, href, text }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-400 hover:text-white hover:scale-110 transition-all flex items-center gap-1"
            >
              <Icon />
              {text && <span className="text-sm">{text}</span>}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <MdMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-0 mt-2 mr-4 bg-black/90 rounded-lg shadow-lg md:hidden">
            <div className="flex flex-col space-y-2 p-4">
              {[
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/akeleojo-achor-1a8557172/",
                },
                { Icon: FaGithub, href: "https://github.com/AkeleA" },
                { Icon: FaTwitter, href: "https://twitter.com" },
                { Icon: CgFileDocument, href: "/cv", text: "CV" },
              ].map(({ Icon, href, text }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Icon />
                  {text && <span>{text}</span>}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
