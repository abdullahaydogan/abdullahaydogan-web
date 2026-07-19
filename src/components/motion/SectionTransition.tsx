import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import NetworkGraphArtwork from "./NetworkGraphArtwork";

function SectionTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.6,
  });

  const gridOpacity = useTransform(
    progress,
    [0, 0.5, 1],
    [0.03, 0.14, 0.06],
  );

  const glowPrimaryY = useTransform(
    progress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-40, 220],
  );
  const glowPrimaryX = useTransform(
    progress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -70],
  );
  const glowPrimaryScale = useTransform(progress, [0, 1], [1, 0.72]);
  const glowPrimaryOpacity = useTransform(
    progress,
    [0, 0.55, 1],
    [0.5, 0.36, 0.16],
  );

  const glowSecondaryY = useTransform(
    progress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [180, -50],
  );
  const glowSecondaryOpacity = useTransform(
    progress,
    [0, 0.4, 1],
    [0, 0.3, 0.4],
  );
  const glowSecondaryScale = useTransform(progress, [0, 1], [0.78, 1.05]);

  const networkOpacity = useTransform(
    progress,
    [0, 0.3, 0.7, 1],
    [0, 0.07, 0.07, 0],
  );

  const dividerWidth = useTransform(progress, [0.2, 0.8], ["20%", "100%"]);
  const dividerOpacity = useTransform(
    progress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );

  return (
    <div
      ref={sectionRef}
      aria-hidden="true"
      className="relative h-[46vh] w-full overflow-hidden sm:h-[54vh]"
    >
      <motion.div style={{ opacity: gridOpacity }} className="absolute inset-0">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(148 163 184 / 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.16) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 85% 90% at 50% 50%, black 35%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 90% at 50% 50%, black 35%, transparent 90%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{
          y: glowPrimaryY,
          x: glowPrimaryX,
          scale: glowPrimaryScale,
          opacity: glowPrimaryOpacity,
        }}
        className="absolute top-0 right-[8%] size-[26rem] rounded-full bg-brand-200 blur-3xl"
      />

      <motion.div
        style={{
          y: glowSecondaryY,
          scale: glowSecondaryScale,
          opacity: glowSecondaryOpacity,
        }}
        className="absolute bottom-0 left-[10%] size-[22rem] rounded-full bg-violet-200/70 blur-3xl"
      />

      <motion.div
        style={{ opacity: networkOpacity }}
        className="absolute inset-0"
      >
        <NetworkGraphArtwork className="size-full" />
      </motion.div>

      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center px-6">
        <motion.div
          style={{ width: dividerWidth, opacity: dividerOpacity }}
          className="h-px max-w-3xl bg-gradient-to-r from-transparent via-brand-300/70 to-transparent"
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-canvas to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}

export default SectionTransition;