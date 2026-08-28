import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Check,
  GitBranch,
  Minus,
  Square,
  X,
  Coffee,
  Search,
  Settings2,
  Bug,
  Play,
} from "lucide-react";
import type { MouseEvent, ReactNode } from "react";

import HeroMetrics from "./HeroMetrics";
import HeroReflection from "./HeroReflection";

interface CodeLine {
  number: number;
  content: ReactNode;
  mobileHidden?: boolean;
}

const codeLines: readonly CodeLine[] = [
  {
    number: 1,
    content: (
      <>
        <span className="text-violet-600">public</span>{" "}
        <span className="text-violet-600">final</span>{" "}
        <span className="text-violet-600">class</span>{" "}
        <span className="text-brand-700">AbdullahAydogan</span>
      </>
    ),
  },
  {
    number: 2,
    content: <span className="text-ink">{"{"}</span>,
  },
  {
    number: 3,
    content: null,
  },
  {
    number: 4,
    content: (
      <>
        <span className="text-violet-600">private</span>{" "}
        <span className="text-violet-600">final</span>{" "}
        <span className="text-sky-700">String</span>{" "}
        <span className="text-brand-700">role</span>{" "}
        <span className="text-ink">= </span>
        <span className="text-emerald-700">
          &quot;Backend &amp; Full Stack Software Engineer&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 5,
    content: null,
  },
  {
    number: 6,
    content: (
      <>
        <span className="text-violet-600">private</span>{" "}
        <span className="text-violet-600">final</span>{" "}
        <span className="text-sky-700">String</span>{" "}
        <span className="text-brand-700">backend</span>{" "}
        <span className="text-ink">= </span>
        <span className="text-emerald-700">
          &quot;Java / Spring Boot · C# / .NET&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        <span className="text-violet-600">private</span>{" "}
        <span className="text-violet-600">final</span>{" "}
        <span className="text-sky-700">String</span>{" "}
        <span className="text-brand-700">frontend</span>{" "}
        <span className="text-ink">= </span>
        <span className="text-emerald-700">
          &quot;React &amp; TypeScript&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 8,
    mobileHidden: true,
    content: (
      <>
        <span className="text-violet-600">private</span>{" "}
        <span className="text-violet-600">final</span>{" "}
        <span className="text-sky-700">String</span>{" "}
        <span className="text-brand-700">architecture</span>{" "}
        <span className="text-ink">= </span>
        <span className="text-emerald-700">
          &quot;Clean Architecture · CQRS · Microservices&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 9,
    mobileHidden: true,
    content: (
      <>
        <span className="text-violet-600">private</span>{" "}
        <span className="text-violet-600">final</span>{" "}
        <span className="text-sky-700">String</span>{" "}
        <span className="text-brand-700">messaging</span>{" "}
        <span className="text-ink">= </span>
        <span className="text-emerald-700">
          &quot;RabbitMQ · MassTransit · Event-Driven&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 10,
    content: null,
  },
  {
    number: 11,
    mobileHidden: true,
    content: (
      <>
        <span className="text-violet-600">private</span>{" "}
        <span className="text-violet-600">final</span>{" "}
        <span className="text-sky-700">String</span>
        <span className="text-ink">[]</span>{" "}
        <span className="text-brand-700">focus</span>{" "}
        <span className="text-ink">= {"{"}</span>
      </>
    ),
  },
  {
    number: 12,
    mobileHidden: true,
    content: (
      <span className="text-ink">
        <span className="text-emerald-700">&quot;Distributed Systems&quot;</span>,{" "}
        <span className="text-emerald-700">&quot;GraphQL Federation&quot;</span>,
      </span>
    ),
  },
  {
    number: 13,
    mobileHidden: true,
    content: (
      <span className="text-ink">
        <span className="text-emerald-700">&quot;REST APIs&quot;</span>,{" "}
        <span className="text-emerald-700">
          &quot;Scalable Backend Systems&quot;
        </span>{" "}
        {"}"};
      </span>
    ),
  },
  {
    number: 14,
    content: <span className="text-ink">{"}"}</span>,
  },
];

function HeroCodeCard() {
  const prefersReducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateXValue = useTransform(pointerY, [-0.5, 0.5], [5, -5]);
  const rotateYValue = useTransform(pointerX, [-0.5, 0.5], [-5, 5]);
  const translateXValue = useTransform(pointerX, [-0.5, 0.5], [-3, 3]);
  const translateYValue = useTransform(pointerY, [-0.5, 0.5], [-3, 3]);

  const rotateX = useSpring(rotateXValue, {
    stiffness: 170,
    damping: 24,
  });

  const rotateY = useSpring(rotateYValue, {
    stiffness: 170,
    damping: 24,
  });

  const x = useSpring(translateXValue, {
    stiffness: 170,
    damping: 24,
  });

  const y = useSpring(translateYValue, {
    stiffness: 170,
    damping: 24,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (
      prefersReducedMotion ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) / bounds.width - 0.5,
    );

    pointerY.set(
      (event.clientY - bounds.top) / bounds.height - 0.5,
    );
  }

  function resetPointerPosition() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full"
      style={{
        perspective: 1400,
      }}
    >
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          x: prefersReducedMotion ? 0 : x,
          y: prefersReducedMotion ? 0 : y,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetPointerPosition}
        className="group relative overflow-hidden rounded-card border border-white/95 bg-surface/90 shadow-card backdrop-blur-2xl transition-shadow duration-500 hover:shadow-glow sm:rounded-panel"
      >
        {!prefersReducedMotion ? (
          <HeroReflection
            pointerX={pointerX}
            pointerY={pointerY}
          />
        ) : null}

        {/* Top reflection */}

        <div
          aria-hidden="true"
          className="absolute inset-x-12 top-0 z-30 h-px bg-gradient-to-r from-transparent via-brand-300/80 to-transparent"
        />

        {/* IntelliJ IDEA top toolbar */}

        <div className="relative z-10 flex items-center justify-between border-b border-line bg-slate-950 px-3 py-2 text-white sm:px-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-gradient-to-br from-fuchsia-500 via-violet-600 to-sky-500 shadow-sm">
                <span className="absolute inset-[3px] rounded-[3px] bg-slate-950" />

                <span className="relative z-10 font-mono text-[0.55rem] font-black tracking-tight text-white">
                  IJ
                </span>
              </div>

              <span className="hidden text-[0.68rem] font-medium text-white/70 sm:inline">
                IntelliJ IDEA
              </span>
            </div>

            <span className="hidden h-4 w-px bg-white/10 sm:block" />

            <div className="flex min-w-0 items-center gap-1.5 text-[0.62rem] text-white/60 sm:text-[0.68rem]">
              <span className="hidden sm:inline">portfolio</span>
              <span className="hidden sm:inline">/</span>
              <span className="truncate text-white/80">
                AbdullahAydogan.java
              </span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 text-white/55">
            <Search
              aria-hidden="true"
              size={13}
              className="hidden sm:block"
            />

            <Settings2
              aria-hidden="true"
              size={13}
              className="hidden sm:block"
            />

            <span className="hidden h-4 w-px bg-white/10 sm:block" />

            <Minus
              aria-hidden="true"
              size={13}
            />

            <Square
              aria-hidden="true"
              size={11}
            />

            <X
              aria-hidden="true"
              size={14}
            />
          </div>
        </div>

        {/* Editor toolbar */}

        <div className="relative z-10 flex items-center justify-between border-b border-line bg-slate-900 px-3 py-1.5 text-white sm:px-4">
          <div className="flex min-w-0 items-center">
            <div className="relative flex items-center gap-2 border-x border-t border-white/10 bg-slate-800 px-3 py-2 sm:px-4">
              <Coffee
                aria-hidden="true"
                size={14}
                className="text-orange-400"
              />

              <span className="truncate font-mono text-[0.62rem] text-white/90 sm:text-xs">
                AbdullahAydogan.java
              </span>

              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-sky-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-white/60">
            <Play
              aria-hidden="true"
              size={13}
              className="text-emerald-400"
            />

            <Bug
              aria-hidden="true"
              size={13}
            />
          </div>
        </div>

        {/* Editor area */}

        <div className="relative z-10 bg-surface/95 px-3 py-5 sm:px-5 sm:py-7 lg:px-6 lg:py-8">
          <div className="font-mono text-[0.68rem] leading-6 sm:text-xs sm:leading-7 xl:text-[0.82rem]">
            {codeLines.map((line) => (
              <div
                key={line.number}
                className={
                  line.mobileHidden
                    ? "hidden grid-cols-[2.1rem_minmax(0,1fr)] sm:grid"
                    : "grid grid-cols-[2.1rem_minmax(0,1fr)]"
                }
              >
                <span className="select-none border-r border-slate-100 pr-2 text-right text-slate-300">
                  {line.number}
                </span>

                <span className="min-w-0 pl-3 whitespace-pre-wrap break-words">
                  {line.content ?? " "}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}

        <HeroMetrics />

        {/* IntelliJ-style bottom status bar */}

        <div className="relative z-10 flex items-center justify-between border-t border-white/10 bg-slate-950 px-4 py-2 text-white sm:px-5">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[0.62rem] font-medium text-white/85 sm:text-xs">
              <GitBranch
                aria-hidden="true"
                size={12}
              />
              main
            </span>

            <span className="flex items-center gap-1.5 text-[0.62rem] font-medium text-white/80 sm:text-xs">
              <Check
                aria-hidden="true"
                size={12}
                className="text-emerald-400"
              />
              No problems
            </span>
          </div>

          <div className="flex items-center gap-3 text-white/65">
            <span className="hidden font-mono text-xs md:inline">
              Ln 14, Col 2
            </span>

            <span className="hidden font-mono text-xs sm:inline">
              Java
            </span>

            <span className="hidden font-mono text-xs md:inline">
              CRLF
            </span>

            <span className="font-mono text-[0.62rem] sm:text-xs">
              UTF-8
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroCodeCard;