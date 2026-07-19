import {
  CheckCircle2,
  TerminalSquare,
} from "lucide-react";
import { motion } from "motion/react";

import { capabilityTags } from "./skills.data";

function SkillsFooter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 26,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mt-5 overflow-hidden rounded-[1.65rem] border border-line/80 bg-white/56 p-5 shadow-sm backdrop-blur-2xl sm:p-6 lg:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-100/18 via-transparent to-cyan-100/22"
      />

      <div className="relative grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-white/65 text-brand-600 shadow-sm">
              <TerminalSquare
                aria-hidden={true}
                size={19}
              />
            </span>

            <div>
              <p className="font-mono text-[0.64rem] tracking-[0.15em] text-brand-600 uppercase">
                Production capabilities
              </p>

              <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-ink">
                Experience connected to real systems.
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 lg:justify-end">
          {capabilityTags.map((capability) => (
            <span
              key={capability}
              className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/60 px-3.5 py-2 text-xs font-medium text-ink-soft shadow-sm"
            >
              <CheckCircle2
                aria-hidden={true}
                size={14}
                className="text-brand-600"
              />

              {capability}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsFooter;