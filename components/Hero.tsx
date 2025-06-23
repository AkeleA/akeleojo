"use client";
import { motion, easeOut } from "framer-motion";

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
  const leftVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex flex-row items-center py-16 md:py-28">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left */}
        <div className="flex flex-col justify-start items-center md:items-start font-outfit w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.span
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-lg font-medium text-accent-light"
          >
            Hi, I&apos;m
          </motion.span>

          <motion.span
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            {name}
          </motion.span>

          <motion.span
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-2xl md:text-3xl font-semibold text-foreground"
          >
            {title}
          </motion.span>

          <motion.span
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-lg md:text-xl font-semibold text-foreground"
          >
            {subtitle}
          </motion.span>

          <motion.a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <button className="mt-6 px-6 py-2 btn-primary rounded-lg animate-button-hover animate-button-tap transition-transform duration-300">
              Schedule a Call
            </button>
          </motion.a>
        </div>

        {/* Right */}
        <motion.div
          className="flex flex-col gap-6 items-center justify-center w-full md:max-w-xs text-center md:text-left md:px-0 px-4.5"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base font-inter font-normal text-foreground">
            {description}
          </p>
          {techStack.length > 0 && (
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
