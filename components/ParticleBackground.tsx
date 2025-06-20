"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const color = resolvedTheme === "dark" ? "#60a5fa" : "#3b82f6";

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      particles: {
        number: { value: 120 },
        color: { value: color },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 1.8,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: true,
          distance: 150,
          opacity: 0.3,
          color: color,
          width: 1,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    [color]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
