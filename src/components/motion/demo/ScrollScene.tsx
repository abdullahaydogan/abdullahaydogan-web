import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

interface ScrollSceneProps {
  imageSrc: string;
  eyebrow: string;
  title: string;
}

function ScrollScene({ imageSrc, eyebrow, title }: ScrollSceneProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Background photo — slowest layer, drifts and slowly zooms out
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -180],
  );
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.25, 1.05]);

  // Overlay darkens as the scene is about to release, easing into the next section
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0.45, 0.45, 0.5, 0.92],
  );

  // Text — fastest layer, moves opposite direction, arrives then exits early
  const textY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    prefersReducedMotion ? [0, 0, 0, 0] : [140, 0, 0, -220],
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.7, 0.9],
    [0, 1, 1, 0],
  );

  return (
    <div ref={wrapperRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-ink"
        />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
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
      </div>
    </div>
  );
}

export default ScrollScene;