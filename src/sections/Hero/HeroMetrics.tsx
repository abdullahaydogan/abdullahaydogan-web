import { Layers, Sparkles, Timer } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { heroMetrics } from "./hero.data";

const iconMap = {
  timer: Timer,
  layers: Layers,
  sparkles: Sparkles,
} as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.9,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function HeroMetrics() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative z-10 grid grid-cols-3 divide-x divide-line border-t border-line bg-surface-soft/40 px-4 py-4 sm:px-5"
    >
      {heroMetrics.map((metric, index) => {
        const Icon = iconMap[metric.icon];
        const isFirst = index === 0;
        const isLast = index === heroMetrics.length - 1;

        return (
          <motion.div
            key={metric.id}
            variants={itemVariants}
            className={[
              "flex flex-col gap-1.5 px-2",
              isFirst
                ? "items-start pl-0 text-left"
                : isLast
                  ? "items-end pr-0 text-right"
                  : "items-center text-center",
            ].join(" ")}
          >
            <Icon aria-hidden="true" size={14} className="text-brand-500" />

            <p className="font-mono text-sm font-semibold text-ink sm:text-base">
              {metric.value}
            </p>

            <p className="text-[0.6rem] font-medium tracking-wide text-ink-muted uppercase sm:text-[0.65rem]">
              {metric.label}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default HeroMetrics;