import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import DramaticTransition from "@/components/motion/DramaticTransition";
import experienceBg from "@/assets/photos/pexels-cookiecutter-1148820.jpg";

import ExperienceCard from "./ExperienceCard";

function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 92,
    damping: 28,
    mass: 0.55,
  });

  const headingY = useTransform(
    smoothProgress,
    [0, 0.42, 1],
    prefersReducedMotion ? [0, 0, 0] : [42, 0, -14],
  );

  const cardY = useTransform(
    smoothProgress,
    [0, 0.48, 1],
    prefersReducedMotion ? [0, 0, 0] : [70, 0, -16],
  );

  const glowX = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-160, 180],
  );

  const gridY = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-50, 60],
  );

  return (
    <>
      <DramaticTransition
        imageSrc={experienceBg}
        eyebrow="what I've done"
        title="Experience"
      />

      <section
        ref={sectionRef}
        id="experience"
        aria-labelledby="experience-title"
        className="relative isolate scroll-mt-20 overflow-hidden py-24 sm:py-28 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            style={{ x: glowX }}
            className="absolute top-[18%] left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-brand-100/34 blur-[110px]"
          />

          <div className="absolute top-[54%] -left-40 size-[28rem] rounded-full bg-violet-100/20 blur-[120px]" />

          <div className="absolute right-[-11rem] bottom-[6%] size-[28rem] rounded-full bg-cyan-100/23 blur-[120px]" />

          <motion.div
            style={{ y: gridY }}
            className="absolute inset-0 opacity-[0.15]"
          >
            <div
              className="size-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(148 163 184 / 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.14) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage:
                  "radial-gradient(ellipse 76% 72% at 50% 46%, black 15%, transparent 82%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 76% 72% at 50% 46%, black 15%, transparent 82%)",
              }}
            />
          </motion.div>

          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-canvas to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
        </div>

        <Container className="relative z-10">
          <motion.header
            style={{ y: headingY, willChange: "transform" }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/55 px-3.5 py-2 shadow-sm backdrop-blur-xl">
              <span className="font-mono text-xs text-brand-500">{"//"}</span>

              <span className="text-[0.68rem] font-semibold tracking-[0.13em] text-ink-muted uppercase">
                Professional experience
              </span>
            </div>

            <h2
              id="experience-title"
              className="mt-6 text-3xl leading-[1.08] font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl"
            >
              Two years inside a{" "}
              <span className="text-brand-600">
                real production ecosystem.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
              Rather than moving between disconnected projects,
              I worked deeply within a multi-domain FinTech
              platform and learned how features, data and
              services behave together under real production
              constraints.
            </p>
          </motion.header>

          <motion.div
            style={{ y: cardY, willChange: "transform" }}
            className="relative mt-14 sm:mt-16 lg:mt-20"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-[8%] top-12 bottom-8 rounded-[3rem] bg-brand-200/12 blur-3xl"
            />

            <ExperienceCard />
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default Experience;