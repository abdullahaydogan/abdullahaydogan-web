import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { Check, GitBranch, Minus, Square, X } from "lucide-react";
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
        <span className="text-violet-600">sealed</span>{" "}
        <span className="text-violet-600">class</span>{" "}
        <span className="text-brand-700">AbdullahAydoğan</span>
      </>
    ),
  },
  {
    number: 2,
    content: <span className="text-ink">{"{"}</span>,
  },
  {
    number: 3,
    content: (
      <>
        <span className="text-violet-600">public</span>{" "}
        <span className="text-sky-700">string</span>{" "}
        <span className="text-brand-700">Role</span>{" "}
        <span className="text-ink">{"=> "}</span>
        <span className="text-emerald-700">
          &quot;Full Stack Software Engineer&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 4,
    content: null,
  },
  {
    number: 5,
    content: (
      <>
        <span className="text-violet-600">public</span>{" "}
        <span className="text-sky-700">string</span>{" "}
        <span className="text-brand-700">Backend</span>{" "}
        <span className="text-ink">{"=> "}</span>
        <span className="text-emerald-700">
          &quot;.NET &amp; ASP.NET Core&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        <span className="text-violet-600">public</span>{" "}
        <span className="text-sky-700">string</span>{" "}
        <span className="text-brand-700">Frontend</span>{" "}
        <span className="text-ink">{"=> "}</span>
        <span className="text-emerald-700">
          &quot;React &amp; TypeScript&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 7,
    mobileHidden: true,
    content: (
      <>
        <span className="text-violet-600">public</span>{" "}
        <span className="text-sky-700">string</span>{" "}
        <span className="text-brand-700">Architecture</span>{" "}
        <span className="text-ink">{"=> "}</span>
        <span className="text-emerald-700">
          &quot;Clean Architecture &amp; CQRS&quot;
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
        <span className="text-violet-600">public</span>{" "}
        <span className="text-sky-700">string</span>{" "}
        <span className="text-brand-700">Messaging</span>{" "}
        <span className="text-ink">{"=> "}</span>
        <span className="text-emerald-700">
          &quot;MassTransit &amp; RabbitMQ&quot;
        </span>
        <span className="text-ink">;</span>
      </>
    ),
  },
  {
    number: 9,
    content: null,
  },
  {
    number: 10,
    mobileHidden: true,
    content: (
      <>
        <span className="text-violet-600">public</span>{" "}
        <span className="text-sky-700">string</span>
        <span className="text-ink">[]</span>{" "}
        <span className="text-brand-700">Focus</span>{" "}
        <span className="text-ink">{"=> "}</span>
        <span className="text-violet-600">new</span>
        <span className="text-ink">[]</span>
      </>
    ),
  },
  {
    number: 11,
    mobileHidden: true,
    content: (
      <span className="text-ink">
        {"{"}{" "}
        <span className="text-emerald-700">&quot;Microservices&quot;</span>,{" "}
        <span className="text-emerald-700">&quot;GraphQL Federation&quot;</span>,
      </span>
    ),
  },
  {
    number: 12,
    mobileHidden: true,
    content: (
      <span className="text-ink">
        <span className="text-emerald-700">&quot;Event-Driven Design&quot;</span>,{" "}
        <span className="text-emerald-700">&quot;Distributed Systems&quot;</span>,
      </span>
    ),
  },
  {
    number: 13,
    mobileHidden: true,
    content: (
      <span className="text-ink">
        <span className="text-emerald-700">&quot;Observability&quot;</span>{" "}
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

  const rotateX = useSpring(rotateXValue, { stiffness: 170, damping: 24 });
  const rotateY = useSpring(rotateYValue, { stiffness: 170, damping: 24 });
  const x = useSpring(translateXValue, { stiffness: 170, damping: 24 });
  const y = useSpring(translateYValue, { stiffness: 170, damping: 24 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (
      prefersReducedMotion ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointerPosition() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full"
      style={{ perspective: 1400 }}
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
        className="group relative overflow-hidden rounded-card border border-white/95 bg-surface/88 shadow-card backdrop-blur-2xl transition-shadow duration-500 hover:shadow-glow sm:rounded-panel"
      >
        {!prefersReducedMotion ? (
          <HeroReflection pointerX={pointerX} pointerY={pointerY} />
        ) : null}

        <div
          aria-hidden="true"
          className="absolute inset-x-12 top-0 z-30 h-px bg-gradient-to-r from-transparent via-brand-300/80 to-transparent"
        />

        <div className="relative z-10 flex items-center justify-between border-b border-line bg-surface-soft/58 px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-2 rounded-t-md border-x border-t border-line bg-surface px-3 py-1.5">
            <span className="flex size-3.5 shrink-0 items-center justify-center rounded-[3px] bg-[#68217A] font-mono text-[0.5rem] font-bold text-white">
              C#
            </span>

            <p className="font-mono text-[0.65rem] font-medium text-ink-soft sm:text-xs">
              AbdullahAydoğan.cs
            </p>
          </div>

          <div className="flex items-center gap-3.5 text-ink-muted">
            <Minus aria-hidden="true" size={13} />
            <Square aria-hidden="true" size={11} />
            <X aria-hidden="true" size={14} />
          </div>
        </div>

        <div className="relative z-10 px-3 py-5 sm:px-5 sm:py-7 lg:px-6 lg:py-8">
          <div className="font-mono text-[0.68rem] leading-6 sm:text-xs sm:leading-7 xl:text-[0.82rem]">
            {codeLines.map((line) => (
              <div
                key={line.number}
                className={
                  line.mobileHidden
                    ? "hidden grid-cols-[1.5rem_minmax(0,1fr)] sm:grid"
                    : "grid grid-cols-[1.5rem_minmax(0,1fr)]"
                }
              >
                <span className="select-none pr-2 text-right text-slate-300">
                  {line.number}
                </span>

                <span className="min-w-0 whitespace-pre-wrap break-words">
                  {line.content ?? " "}
                </span>
              </div>
            ))}
          </div>
        </div>

        <HeroMetrics />

        <div className="relative z-10 flex items-center justify-between bg-[#68217A] px-4 py-2 sm:px-5">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[0.62rem] font-medium text-white/90 sm:text-xs">
              <GitBranch aria-hidden="true" size={12} />
              main
            </span>

            <span className="flex items-center gap-1.5 text-[0.62rem] font-medium text-white/90 sm:text-xs">
              <Check aria-hidden="true" size={12} />
              Ready
            </span>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <span className="hidden font-mono text-xs sm:inline">
              Ln 14, Col 2
            </span>

            <span className="font-mono text-[0.62rem] sm:text-xs">
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