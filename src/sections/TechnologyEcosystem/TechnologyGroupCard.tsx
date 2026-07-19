// import {
//   motion,
//   useReducedMotion,
// } from "motion/react";

// import TechnologyItem from "./TechnologyItem";
// import type { TechnologyGroup } from "./technology.data";

// interface TechnologyGroupCardProps {
//   group: TechnologyGroup;
//   index: number;
// }

// function TechnologyGroupCard({
//   group,
//   index,
// }: TechnologyGroupCardProps) {
//   const prefersReducedMotion = useReducedMotion();

//   return (
//     <motion.article
//       initial={{
//         opacity: 0,
//         y: prefersReducedMotion ? 0 : 32,
//         scale: prefersReducedMotion ? 1 : 0.985,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         scale: 1,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.2,
//       }}
//       transition={{
//         duration: 0.65,
//         delay: prefersReducedMotion
//           ? 0
//           : index * 0.07,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="h-full"
//     >
//       <div className="group relative flex h-full min-h-[20rem] overflow-hidden rounded-[1.6rem] border border-white/90 bg-surface/78 shadow-card backdrop-blur-2xl transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-brand-200/80 hover:shadow-glow sm:min-h-[21rem]">
//         <div
//           aria-hidden="true"
//           className={[
//             "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70",
//             group.accentClassName,
//           ].join(" ")}
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-[1px] rounded-[calc(1.6rem-1px)] bg-gradient-to-br from-white/65 via-white/20 to-transparent"
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -top-24 -right-20 size-60 rounded-full bg-brand-200/10 blur-3xl transition-transform duration-700 group-hover:scale-125"
//         />

//         <div className="relative flex w-full flex-col p-5 sm:p-6">
//           <div className="flex items-start justify-between gap-5">
//             <div className="min-w-0">
//               <p className="font-mono text-[0.64rem] font-medium tracking-[0.15em] text-brand-600 uppercase">
//                 {group.eyebrow}
//               </p>

//               <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-ink sm:text-[1.35rem]">
//                 {group.title}
//               </h3>
//             </div>

//             <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line bg-white/60 font-mono text-[0.65rem] text-ink-muted shadow-sm backdrop-blur-md">
//               {String(index + 1).padStart(2, "0")}
//             </span>
//           </div>

//           <p className="mt-4 max-w-lg text-sm leading-7 text-ink-soft">
//             {group.description}
//           </p>

//           <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
//             {group.technologies.map(
//               (technology) => (
//                 <TechnologyItem
//                   key={technology.id}
//                   technology={technology}
//                 />
//               ),
//             )}
//           </div>

//           <div
//             aria-hidden="true"
//             className="absolute inset-x-10 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand-400/65 to-transparent transition-transform duration-500 group-hover:scale-x-100"
//           />
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export default TechnologyGroupCard;