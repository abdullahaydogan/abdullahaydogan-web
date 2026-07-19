import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "motion/react";
import { useRef, type ReactNode } from "react";

import { cn } from "@/utils/cn";

type ParallaxProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  distance?: number;
  direction?: "up" | "down";
  scaleFrom?: number;
  scaleTo?: number;
  opacityFrom?: number;
  opacityTo?: number;
};

function Parallax({
  children,
  distance = 80,
  direction = "up",
  scaleFrom = 1,
  scaleTo = 1,
  opacityFrom = 1,
  opacityTo = 1,
  className,
  ...props
}: ParallaxProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const movement =
    direction === "up"
      ? [distance, -distance]
      : [-distance, distance];

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : movement,
  );

  const rawScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion
      ? [1, 1]
      : [scaleFrom, scaleTo],
  );

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion
      ? [1, 1]
      : [opacityFrom, opacityTo],
  );

  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 24,
    mass: 0.5,
  });

  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 24,
    mass: 0.5,
  });

  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 24,
    mass: 0.5,
  });

  return (
    <motion.div
      ref={targetRef}
      style={{
        y,
        scale,
        opacity,
        willChange: "transform",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Parallax;