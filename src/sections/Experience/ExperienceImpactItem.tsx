import {
  motion,
  useReducedMotion,
} from "motion/react";

import type {
  ExperienceImpact,
} from "./experience.data";

interface ExperienceImpactItemProps {
  impact: ExperienceImpact;
  index: number;
}

function ExperienceImpactItem({
  impact,
  index,
}: ExperienceImpactItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = impact.icon;

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
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
        delay: prefersReducedMotion
          ? 0
          : Math.min(index * 0.065, 0.28),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="relative grid gap-5 border-b border-line/75 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[auto_1fr] sm:gap-6">
        <div className="flex items-center gap-3 sm:block">
          <span className="font-mono text-[0.65rem] font-semibold tracking-[0.15em] text-ink-muted transition-colors duration-300 group-hover:text-brand-600">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="mt-0 flex size-10 items-center justify-center rounded-xl border border-line/80 bg-white/65 text-brand-600 shadow-sm backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-300 group-hover:scale-105 group-hover:border-brand-300 group-hover:shadow-soft sm:mt-4">
            <Icon
              aria-hidden={true}
              size={18}
              strokeWidth={1.8}
            />
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink sm:text-xl">
            {impact.title}
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-soft">
            {impact.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {impact.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-line/80 bg-white/55 px-3 py-1.5 text-xs font-medium text-ink-soft transition-[border-color,background-color,color] duration-300 group-hover:border-brand-200 group-hover:bg-white/80 group-hover:text-ink"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500/80 via-brand-300/45 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-[18%] h-24 w-52 -translate-y-1/2 rounded-full bg-brand-100/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-100/28"
        />
      </div>
    </motion.article>
  );
}

export default ExperienceImpactItem;