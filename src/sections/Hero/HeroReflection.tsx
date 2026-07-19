import {
  motion,
  useTransform,
  type MotionValue,
} from "motion/react";

interface HeroReflectionProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}

function HeroReflection({ pointerX, pointerY }: HeroReflectionProps) {
  const reflectionX = useTransform(pointerX, [-0.5, 0.5], ["-35%", "35%"]);
  const reflectionY = useTransform(pointerY, [-0.5, 0.5], ["-30%", "30%"]);

  const reflectionOpacity = useTransform(
    pointerX,
    [-0.5, 0, 0.5],
    [0.18, 0.08, 0.18],
  );

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: reflectionX,
        y: reflectionY,
        opacity: reflectionOpacity,
      }}
      className="pointer-events-none absolute -top-1/2 -left-1/3 z-20 h-[170%] w-[70%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/55 to-transparent blur-2xl"
    />
  );
}

export default HeroReflection;