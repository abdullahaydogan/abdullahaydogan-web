import { motion, type Variants } from "motion/react";

import { aboutStats } from "./about.data";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function AboutStats() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={gridVariants}
      className="grid grid-cols-2 gap-3.5 sm:gap-4"
    >
      {aboutStats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={itemVariants}
          className="rounded-panel border border-white/95 bg-surface/88 p-5 shadow-card backdrop-blur-2xl"
        >
          <p className="font-mono text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
            {stat.value}
          </p>

          <p className="mt-1.5 text-xs font-medium text-ink-muted">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AboutStats;