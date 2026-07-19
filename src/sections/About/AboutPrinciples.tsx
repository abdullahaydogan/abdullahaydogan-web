import { motion } from "motion/react";

import { aboutPrinciples } from "./about.data";

function AboutPrinciples() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mt-5 overflow-hidden rounded-[1.65rem] border border-line/80 bg-white/56 p-5 shadow-card backdrop-blur-2xl sm:p-6 lg:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-100/18 via-transparent to-cyan-100/20"
      />

      <div className="relative">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[0.65rem] font-medium tracking-[0.15em] text-brand-600 uppercase">
              How I work
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">
              Principles behind the code.
            </h3>
          </div>

          <p className="max-w-md text-sm leading-7 text-ink-soft">
            My approach is shaped by production systems where
            clarity, ownership and reliability matter as much
            as implementation speed.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {aboutPrinciples.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.id}
                className="group relative overflow-hidden rounded-2xl border border-line/75 bg-white/56 p-5 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white/80 hover:shadow-soft"
              >
                <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-surface-soft/85 text-brand-600 shadow-sm">
                  <Icon
                    aria-hidden={true}
                    size={18}
                    strokeWidth={1.8}
                  />
                </span>

                <h4 className="mt-5 text-sm font-semibold text-ink">
                  {principle.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPrinciples;