import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { SkillItem } from "./skills.data";

interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

interface SkillAccentStyles extends CSSProperties {
  "--skill-accent": string;
  "--skill-glow": string;
}

function SkillCard({
  skill,
  index,
}: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = skill.icon;

  const accentStyles: SkillAccentStyles = {
    "--skill-accent": skill.accent,
    "--skill-glow": skill.glow,
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 30,
        scale: prefersReducedMotion ? 1 : 0.985,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: prefersReducedMotion
          ? 0
          : Math.min(index * 0.065, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      style={accentStyles}
      className="group h-full"
    >
      <div className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[1.65rem] border border-line/80 bg-white/58 p-5 shadow-card backdrop-blur-2xl transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-1 hover:border-[var(--skill-accent)] hover:bg-white/72 hover:shadow-[0_20px_55px_var(--skill-glow)] sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-20 size-56 rounded-full bg-[var(--skill-glow)] opacity-55 blur-3xl transition-[opacity,transform] duration-700 group-hover:scale-125 group-hover:opacity-100"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[1px] rounded-[calc(1.65rem-1px)] bg-gradient-to-br from-white/65 via-white/10 to-transparent"
        />

        <div className="relative flex items-start justify-between gap-5">
          <span className="flex size-11 items-center justify-center rounded-xl border border-line/80 bg-white/65 text-[var(--skill-accent)] shadow-sm backdrop-blur-xl transition-transform duration-300 group-hover:scale-105">
            <Icon
              aria-hidden={true}
              size={20}
              strokeWidth={1.8}
            />
          </span>

          <span className="flex items-center gap-1 font-mono text-[0.65rem] text-ink-muted">
            {String(index + 1).padStart(2, "0")}

            <ArrowUpRight
              aria-hidden={true}
              size={13}
              className="transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--skill-accent)]"
            />
          </span>
        </div>

        <div className="relative mt-6">
          <h3 className="text-xl font-semibold tracking-[-0.025em] text-ink">
            {skill.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-ink-soft">
            {skill.description}
          </p>
        </div>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {skill.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-line/80 bg-white/55 px-3 py-1.5 text-xs font-medium text-ink-soft transition-[border-color,background-color,color] duration-300 group-hover:border-[var(--skill-accent)] group-hover:bg-white/80 group-hover:text-ink"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="relative mt-auto pt-7">
          <div className="h-px bg-gradient-to-r from-line via-line-strong to-transparent" />

          <p className="mt-4 text-xs leading-6 text-ink-muted">
            {skill.evidence}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-10 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-[var(--skill-accent)] to-transparent transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>
    </motion.article>
  );
}

export default SkillCard;