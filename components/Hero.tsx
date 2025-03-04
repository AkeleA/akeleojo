const Hero = () => {
  return (
    <div className="relative z-30 w-full flex flex-row items-center py-28">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex flex-col justify-start items-center">
          <h2 className="font-bold flex flex-col items-center space-y-3">
            <span className="text-sm text-gray">Hi, I&apos;m</span>
            <span className="text-5xl text-white">Akeleojo</span>
            <span className="text-5xl text-white">Achor</span>
          </h2>
          <button className="mt-6 px-6 py-2 border rounded-lg">
            Schedule a Call
          </button>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center max-w-xs">
          <p className="text-sm text-gray-500">
            Software Engineer, Frontend Developer, Collaborator. I&apos;m
            currently building <a>vitalenex.com</a> a platform for bridging the
            gap between users and healthcare using artificial intelligence.
          </p>
          <p className="text-sm text-gray-500">
            I build with Node.js, Postgres, TypeScript, NextJs and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
