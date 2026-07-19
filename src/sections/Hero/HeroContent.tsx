import { motion, type Variants } from "motion/react";

import HeroButtons from "./HeroButtons";
import HeroTechStack from "./HeroTechStack";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted"
      >
        <span className="text-brand-500">{"//"}</span>
        <span>full stack developer</span>

        <span className="mx-1 hidden h-3 w-px bg-line sm:block" />

        <span className="inline-flex items-center gap-1.5">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          open to work
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mt-7 text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]"
      >
        I build the infrastructure{" "}
        <span className="text-brand-600">reliable web applications</span> run on.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-lg text-base leading-8 text-ink-soft sm:text-lg"
      >
        Full stack developer with two years of experience building
        microservice-based platforms — working across backend
        services, GraphQL APIs, and the React interfaces that bring
        them together.
      </motion.p>

      <motion.div variants={itemVariants} className="mt-9">
        <HeroButtons />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-12">
        <HeroTechStack />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;