import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

import { education } from "./about.data";

function AboutEducation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-3.5 flex items-center gap-4 rounded-panel border border-white/95 bg-surface/88 p-5 shadow-card backdrop-blur-2xl sm:mt-4"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-soft/80 text-brand-600">
        <GraduationCap aria-hidden="true" size={22} />
      </span>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink">
          {education.institution}
        </p>

        <p className="mt-0.5 text-xs leading-5 text-ink-muted">
          {education.degree}
        </p>

        <p className="mt-1 font-mono text-[0.65rem] text-ink-muted/70">
          {education.period}
        </p>
      </div>
    </motion.div>
  );
}

export default AboutEducation;