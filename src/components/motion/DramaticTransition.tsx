import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

interface DramaticTransitionProps {
  imageSrc: string;
  eyebrow: string;
  title: string;
}

function DramaticTransition({
  imageSrc,
  eyebrow,
  title,
}: DramaticTransitionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.6,
  });

  // Layer 1 — background photo: slow drift + settle-in zoom
  const bgY = useTransform(
    progress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-70, 90],
  );
  const bgScale = useTransform(progress, [0, 0.5, 1], [1.22, 1.08, 1.16]);

  // Layer 2 — duotone tint, stays put, just for color cohesion
  const tintOpacity = useTransform(progress, [0, 0.5, 1], [0.55, 0.4, 0.55]);

  // Layer 3 — foreground text: fast, floats over the image, scales in
  const textY = useTransform(
    progress,
    [0, 0.5, 1],
    prefersReducedMotion ? [0, 0, 0] : [160, 0, -160],
  );
  const textOpacity = useTransform(
    progress,
    [0, 0.22, 0.5, 0.78, 1],
    [0, 1, 1, 1, 0],
  );
  const textScale = useTransform(progress, [0, 0.5, 1], [0.92, 1, 0.94]);

  return (
    <div
      ref={sectionRef}
      className="relative isolate h-[80vh] w-full overflow-hidden sm:h-[92vh]"
    >
      <motion.img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <motion.div
        style={{ opacity: tintOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/85"
      />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
          className="text-center"
        >
          <p className="font-mono text-xs font-semibold tracking-[0.3em] text-white/70 uppercase">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-5xl leading-[1.02] font-semibold tracking-[-0.03em] text-white sm:text-7xl lg:text-8xl">
            {title}
          </h2>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-canvas to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}

export default DramaticTransition;