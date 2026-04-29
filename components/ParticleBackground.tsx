"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const color = resolvedTheme === "dark" ? "#b7c7d7" : "#74869a";

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      particles: {
        number: {
          value: 95,
          density: {
            enable: true,
            area: 900,
          },
        },
        color: { value: color },
        size: { value: { min: 1, max: 2.6 } },
        move: {
          enable: true,
          speed: 1.05,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: true,
          distance: 135,
          opacity: 0.13,
          color: color,
          width: 1,
        },
        opacity: {
          value: { min: 0.12, max: 0.34 },
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
            distance: 115,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    [color]
  );

  if (init && mounted) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
}
