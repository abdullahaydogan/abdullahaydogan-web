import {
  motion,
  useReducedMotion,
} from "motion/react";

import type {
  AboutMetric as AboutMetricType,
} from "./about.data";

interface AboutMetricProps {
  metric: AboutMetricType;
  index: number;
}

function AboutMetric({
  metric,
  index,
}: AboutMetricProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.58,
        delay: prefersReducedMotion
          ? 0
          : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[1.4rem] border border-line/80 bg-white/58 p-5 shadow-sm backdrop-blur-xl transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white/78 hover:shadow-soft"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 size-36 rounded-full bg-brand-100/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-100/40"
      />

      <div className="relative">
        <p className="text-3xl font-semibold tracking-[-0.04em] text-brand-600">
          {metric.value}
        </p>

        <h3 className="mt-4 text-sm font-semibold text-ink">
          {metric.label}
        </h3>

        <p className="mt-2 text-xs leading-6 text-ink-soft">
          {metric.description}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent transition-transform duration-300 group-hover:scale-x-100"
      />
    </motion.article>
  );
}

export default AboutMetric;