// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "motion/react";
// import { useRef } from "react";

// import Container from "@/components/ui/Container";

// import EngineeringPrinciples from "./EngineeringPrinciples";
// import TechnologyGroupCard from "./TechnologyGroupCard";
// import {
//   ecosystemBadges,
//   technologyGroups,
// } from "./technology.data";

// function TechnologyEcosystem() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const prefersReducedMotion = useReducedMotion();

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const smoothProgress = useSpring(
//     scrollYProgress,
//     {
//       stiffness: 90,
//       damping: 28,
//       mass: 0.55,
//     },
//   );

//   const headingY = useTransform(
//     smoothProgress,
//     [0, 0.42, 1],
//     prefersReducedMotion
//       ? [0, 0, 0]
//       : [55, 0, -26],
//   );

//   const boardY = useTransform(
//     smoothProgress,
//     [0, 0.48, 1],
//     prefersReducedMotion
//       ? [0, 0, 0]
//       : [85, 0, -20],
//   );

//   const glowX = useTransform(
//     smoothProgress,
//     [0, 1],
//     prefersReducedMotion
//       ? [0, 0]
//       : [-160, 160],
//   );

//   const gridY = useTransform(
//     smoothProgress,
//     [0, 1],
//     prefersReducedMotion
//       ? [0, 0]
//       : [-50, 60],
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="technology"
//       aria-labelledby="technology-title"
// className="relative isolate scroll-mt-20 overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28"    >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0"
//       >
//         <motion.div
//           style={{ x: glowX }}
//           className="absolute top-[25%] left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-brand-100/40 blur-[100px]"
//         />

//         <div className="absolute top-[55%] -left-40 size-[28rem] rounded-full bg-indigo-100/24 blur-[115px]" />

//         <div className="absolute right-[-12rem] bottom-[4%] size-[28rem] rounded-full bg-cyan-100/28 blur-[120px]" />

//         <motion.div
//           style={{ y: gridY }}
//           className="absolute inset-0 opacity-[0.2]"
//         >
//           <div
//             className="size-full"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right, rgb(148 163 184 / 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.14) 1px, transparent 1px)",
//               backgroundSize: "56px 56px",
//               maskImage:
//                 "radial-gradient(ellipse 76% 68% at 50% 46%, black 18%, transparent 82%)",
//               WebkitMaskImage:
//                 "radial-gradient(ellipse 76% 68% at 50% 46%, black 18%, transparent 82%)",
//             }}
//           />
//         </motion.div>

//         <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-canvas to-transparent" />

//         <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-canvas" />
//       </div>

//       <Container className="relative z-10">
//         <motion.header
//           style={{
//             y: headingY,
//             willChange: "transform",
//           }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/55 px-3.5 py-2 shadow-sm backdrop-blur-xl">
//             <span className="font-mono text-xs text-brand-500">
//               {"//"}
//             </span>

//             <span className="text-[0.68rem] font-semibold tracking-[0.13em] text-ink-muted uppercase">
//               Technology ecosystem
//             </span>
//           </div>

//           <h2
//             id="technology-title"
//             className="mt-6 text-3xl leading-[1.08] font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl"
//           >
//             Technologies shaped by{" "}
//             <span className="text-brand-600">
//               real engineering experience.
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
//             A backend-focused technology ecosystem supported by
//             modern frontend, data and infrastructure tools used
//             throughout complete software delivery cycles.
//           </p>

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 16,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.8,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.15,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mt-7 flex flex-wrap justify-center gap-2"
//           >
//             {ecosystemBadges.map((badge) => (
//               <span
//                 key={badge}
//                 className="rounded-full border border-line/80 bg-white/55 px-3 py-1.5 text-xs font-medium text-ink-soft shadow-sm backdrop-blur-md"
//               >
//                 {badge}
//               </span>
//             ))}
//           </motion.div>
//         </motion.header>

//         <motion.div
//           style={{
//             y: boardY,
//             willChange: "transform",
//           }}
//           className="relative mt-14 sm:mt-16 lg:mt-18"
//         >
//           <div
//             aria-hidden="true"
//             className="absolute inset-x-[8%] top-8 bottom-0 rounded-[3rem] bg-brand-200/12 blur-3xl"
//           />

//           <div className="relative grid items-stretch gap-4 lg:grid-cols-2">
//             {technologyGroups.map(
//               (group, index) => (
//                 <TechnologyGroupCard
//                   key={group.id}
//                   group={group}
//                   index={index}
//                 />
//               ),
//             )}
//           </div>

//           <EngineeringPrinciples />
//         </motion.div>
//       </Container>
//     </section>
//   );
// }

// export default TechnologyEcosystem;