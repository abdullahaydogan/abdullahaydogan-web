import {
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import ExperienceImpactItem from "./ExperienceImpactItem";
import { experience } from "./experience.data";

function ExperienceCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 36,
        scale: prefersReducedMotion ? 1 : 0.985,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[1.8rem] border border-line/80 bg-white/58 shadow-card backdrop-blur-2xl"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/68 via-transparent to-brand-100/16"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-24 size-72 rounded-full bg-brand-100/30 blur-3xl"
      />

      <div className="relative border-b border-line/80 px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white/70 text-brand-600 shadow-sm">
                <Building2
                  aria-hidden={true}
                  size={20}
                  strokeWidth={1.8}
                />
              </span>

              <div>
                <p className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">
                  {experience.company}
                </p>

                <p className="mt-1 text-sm font-medium text-brand-600">
                  {experience.role}
                  <span className="text-ink-muted">
                    {" "}
                    · {experience.employmentType}
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-ink-soft sm:text-[0.95rem]">
              {experience.summary}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-48 sm:justify-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-3 py-1.5 font-mono text-[0.65rem] font-semibold text-brand-700">
              <CalendarDays
                aria-hidden={true}
                size={13}
              />

              {experience.period}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1.5 text-[0.68rem] font-medium text-ink-muted">
              <MapPin
                aria-hidden={true}
                size={13}
              />

              {experience.location}
            </span>
          </div>
        </div>
      </div>

      <div className="relative px-5 py-7 sm:px-7 lg:px-8">
        {experience.impacts.map((impact, index) => (
          <ExperienceImpactItem
            key={impact.id}
            impact={impact}
            index={index}
          />
        ))}
      </div>

      <div className="relative border-t border-line/80 bg-surface-soft/40 px-5 py-6 sm:px-7 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[0.64rem] font-semibold tracking-[0.15em] text-brand-600 uppercase">
              Domain exposure
            </p>

            <p className="mt-2 text-sm leading-6 text-ink-muted">
              Business and supporting service domains I worked
              across during the issuer platform development.
            </p>
          </div>

          {/* <div className="flex flex-wrap gap-2 lg:justify-end">
            {experience.domains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-line/80 bg-white/65 px-3 py-1.5 text-xs font-medium text-ink-soft shadow-sm"
              >
                {domain}
              </span>
            ))}
          </div> */}
        </div>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />

        <div>
          <p className="font-mono text-[0.64rem] font-semibold tracking-[0.15em] text-brand-600 uppercase">
            Technology environment
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-line/80 bg-white/60 px-2.5 py-1.5 font-mono text-[0.65rem] text-ink-muted transition-[border-color,background-color,color] duration-300 hover:border-brand-200 hover:bg-white hover:text-brand-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;