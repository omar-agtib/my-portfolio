"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // lightweight version

export const ParticlesBackground = () => {
  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={initParticles}
      options={{
        background: {
          color: "transparent",
        },
        fullScreen: {
          enable: false, // we position manually
        },
        particles: {
          number: { value: 60 },
          size: { value: { min: 3, max: 8 } },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          color: { value: "#3b82f6" },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    />
  );
};
