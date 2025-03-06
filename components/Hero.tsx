const Hero = () => {
  return (
    <div className="relative z-20 w-full flex flex-row items-center py-16 md:py-28">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Content */}
        <div
          className="flex flex-col justify-start items-center md:items-start font-outfit 
                     w-full md:w-1/2 text-center md:text-left
                     opacity-0 animate-fade-slide-up mb-8 md:mb-0"
        >
          <h2
            className="font-bold flex flex-col items-center md:items-start space-y-3 
                       opacity-0 animate-fade-slide-up animation-delay-200"
          >
            <span className="text-lg font-medium text-gray-400">
              Hi, I&apos;m
            </span>
            <span className="text-4xl md:text-7xl font-bold text-white">
              Akeleojo
            </span>
            <span className="text-3xl md:text-6xl font-semibold text-white">
              Achor
            </span>
          </h2>
          <a
            href="https://calendly.com/achorisaac/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-6 px-6 py-2 border rounded-lg 
                       animate-button-hover animate-button-tap 
                       transition-transform duration-300"
            >
              Schedule a Call
            </button>
          </a>
        </div>

        {/* Right Content */}
        <div
          className="flex flex-col gap-6 items-center justify-center w-full md:max-w-xs
                     opacity-0 animate-fade-slide-right text-center md:text-left md:px-0 px-4.5"
        >
          <p className="text-sm font-inter font-normal text-white">
            Software Engineer, Frontend Developer, Collaborator. I&apos;m
            currently building{" "}
            <a
              href="https://vitalenex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline cursor-pointer"
            >
              vitalenex.com
            </a>
            , a platform for bridging the gap between users and healthcare using
            artificial intelligence.
          </p>
          <p className="text-sm text-white">
            I build with <b>Node.js</b>, <b>Postgres</b>, <b>TypeScript</b>,{" "}
            <b>Next.js</b>, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
