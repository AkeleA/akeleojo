const Hero = ({
  name,
  title,
  subtitle,
  description,
  techStack = [],
  ctaLink,
}: {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  techStack?: string[];
  ctaLink: string;
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-row items-center py-16 md:py-28">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left */}
        <div
          className="flex flex-col justify-start items-center md:items-start font-outfit 
                     w-full md:w-1/2 text-center md:text-left
                      animate-fade-slide-up mb-8 md:mb-0"
        >
          <h2
            className="font-bold flex flex-col items-center md:items-start space-y-2.5 
                       opacity-0 animate-fade-slide-up animation-delay-200"
          >
            <span className="text-lg font-medium text-muted">Hi, I&apos;m</span>
            <span className="text-4xl md:text-6xl font-bold text-foreground">
              {name}
            </span>
            <span className="text-2xl md:text-3xl font-semibold text-foreground">
              {title}
            </span>
            <span className="text-lg md:text-xl font-semibold text-foreground">
              {subtitle}
            </span>
          </h2>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <button className="mt-6 px-6 py-2 btn-primary rounded-lg animate-button-hover animate-button-tap transition-transform duration-300">
              Schedule a Call
            </button>
          </a>
        </div>

        {/* Right */}
        <div
          className="flex flex-col gap-6 items-center justify-center w-full md:max-w-xs
                     opacity-0 animate-fade-slide-right text-center md:text-left md:px-0 px-4.5"
        >
          <p className="text-base font-inter font-normal text-foreground">
            {description}
          </p>
          {techStack && techStack.length > 0 && (
            <p className="text-base text-accent font-inter">
              I build with{" "}
              {techStack.map((t, i) => (
                <span key={i}>
                  <b className="text-foreground">{t}</b>
                  {i !== techStack.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
