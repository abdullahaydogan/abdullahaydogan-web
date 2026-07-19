import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";

import SkillCard from "./SkillCard";
import SkillsFooter from "./SkillsFooter";
import { skills } from "./skills.data";
import skillsBg from "@/assets/photos/pexels-peaky-29459444.jpg";
import DramaticTransition from "@/components/motion/DramaticTransition";

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 92,
      damping: 28,
      mass: 0.55,
    },
  );

  const headingY = useTransform(
    smoothProgress,
    [0, 0.42, 1],
    prefersReducedMotion
      ? [0, 0, 0]
      : [42, 0, -14],
  );

  const gridY = useTransform(
    smoothProgress,
    [0, 0.48, 1],
    prefersReducedMotion
      ? [0, 0, 0]
      : [62, 0, -16],
  );

  const backgroundGridY = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion
      ? [0, 0]
      : [-45, 55],
  );

  const glowX = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion
      ? [0, 0]
      : [-140, 150],
  );

  return (
    <>
      <DramaticTransition
        imageSrc={skillsBg}
        eyebrow="how I build"
        title="Skills"
      />
      <section
        ref={sectionRef}
        id="skills"
        aria-labelledby="skills-title"
        className="relative isolate scroll-mt-20 overflow-hidden py-24 sm:py-28 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            style={{ x: glowX }}
            className="absolute top-[20%] left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-brand-100/38 blur-[110px]"
          />

          <div className="absolute top-[55%] -left-40 size-[28rem] rounded-full bg-violet-100/22 blur-[120px]" />

          <div className="absolute right-[-10rem] bottom-[5%] size-[26rem] rounded-full bg-cyan-100/24 blur-[120px]" />

          <motion.div
            style={{ y: backgroundGridY }}
            className="absolute inset-0 opacity-[0.18]"
          >
            <div
              className="size-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(148 163 184 / 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.14) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage:
                  "radial-gradient(ellipse 76% 68% at 50% 46%, black 16%, transparent 82%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 76% 68% at 50% 46%, black 16%, transparent 82%)",
              }}
            />
          </motion.div>

          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-canvas to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
        </div>

        <Container className="relative z-10">
          <motion.header
            style={{
              y: headingY,
              willChange: "transform",
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/55 px-3.5 py-2 shadow-sm backdrop-blur-xl">
              <span className="font-mono text-xs text-brand-500">
                {"//"}
              </span>

              <span className="text-[0.68rem] font-semibold tracking-[0.13em] text-ink-muted uppercase">
                Engineering capabilities
              </span>
            </div>

            <h2
              id="skills-title"
              className="mt-6 text-3xl leading-[1.08] font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl"
            >
              Technical depth beyond{" "}
              <span className="text-brand-600">
                the technology stack.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
              Skills developed while building and maintaining
              production-oriented systems across backend,
              integration, data, frontend and delivery layers.
            </p>
          </motion.header>

          <motion.div
            style={{
              y: gridY,
              willChange: "transform",
            }}
            className="relative mt-14 sm:mt-16 lg:mt-20"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-[7%] top-10 bottom-4 rounded-[3rem] bg-brand-200/10 blur-3xl"
            />

            <div className="relative grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>

            <SkillsFooter />
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default Skills;