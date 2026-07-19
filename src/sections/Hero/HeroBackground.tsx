import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 30,
    mass: 0.5,
  });

  const glowY = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 130],
  );

  const gridOpacity = useTransform(
    smoothProgress,
    [0, 0.7, 1],
    [0.16, 0.08, 0],
  );

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y: glowY }}
        className="absolute top-[-12rem] right-[-8rem] size-[34rem] rounded-full bg-brand-100/70 blur-3xl"
      />

      <motion.div style={{ opacity: gridOpacity }} className="absolute inset-0">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(148 163 184 / 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.16) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 15%, black 35%, transparent 88%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 15%, black 35%, transparent 88%)",
          }}
        />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}

export default HeroBackground;