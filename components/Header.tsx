import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const Header = () => {
  return (
    <div className="relative z-30 w-full flex justify-center p-4 bg-black">
      <div className="max-w-5xl w-full flex justify-between items-center px-4 py-2 opacity-80 rounded-full">
        {/* Center - Chat button */}
        <div className="rounded-full flex gap-2 items-center">
          <h1 className="text-white font-medium">akeleojo.</h1>
          <button className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded-full border border-gray-700 flex items-center gap-1">
            Let&apos;s Chat <span className="ml-1">→</span>
          </button>
        </div>

        {/* Right side - Social links */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/akeleojo-achor-1a8557172/"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <FaLinkedin />
            <span className="text-gray-400 text-sm">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/AkeleA"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <FaGithub />
            <span className="text-gray-400 text-sm">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <FaTwitter />
            <span className="text-gray-400 text-sm">Twitter</span>
          </Link>
          <Link
            href="/cv"
            className=" flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <CgFileDocument />
            <span className=" text-gray-400 text-sm">CV</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
