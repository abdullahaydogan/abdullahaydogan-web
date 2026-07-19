import { motion } from "motion/react";

import photo from "@/assets/photos/photo1.jpeg";

function AboutPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-panel border border-white/95 bg-surface/88 shadow-card backdrop-blur-2xl"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/4.5]">
        <img
          src={photo}
          alt="Abdullah Aydoğan"
          className="size-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/35 to-transparent"
        />
      </div>

      <div className="flex items-center justify-between border-t border-line bg-surface-soft/58 px-5 py-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">Abdullah Aydoğan</p>

          <p className="mt-0.5 text-xs text-ink-muted">
            Full stack developer
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.62rem] text-ink-muted">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Kocaeli, TR
        </span>
      </div>
    </motion.div>
  );
}

export default AboutPhoto;