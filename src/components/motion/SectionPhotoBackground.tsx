import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

interface SectionPhotoBackgroundProps {
  imageSrc: string;
  children: ReactNode;
  tintClassName?: string;
}

function SectionPhotoBackground({
  imageSrc,
  children,
  tintClassName = "bg-ink/62",
}: SectionPhotoBackgroundProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-90, 90],
  );

  return (
    <div ref={sectionRef} className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          style={{ y: imageY }}
          className="absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover"
        />

        <div className={`absolute inset-0 ${tintClassName}`} />

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-canvas to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
      </div>

      {children}
    </div>
  );
}

export default SectionPhotoBackground;