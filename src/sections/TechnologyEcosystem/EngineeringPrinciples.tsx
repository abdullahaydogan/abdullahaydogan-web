// import {
//   Boxes,
//   Network,
//   Workflow,
// } from "lucide-react";
// import { motion } from "motion/react";

// import {
//   engineeringPrinciples,
// } from "./technology.data";

// const principleIcons = [
//   Boxes,
//   Network,
//   Workflow,
// ] as const;

// function EngineeringPrinciples() {
//   return (
//     <motion.section
//       initial={{
//         opacity: 0,
//         y: 28,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.25,
//       }}
//       transition={{
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       aria-labelledby="engineering-approach-title"
//       className="relative mt-5 overflow-hidden rounded-[1.75rem] border border-line/80 bg-white/58 p-5 shadow-card backdrop-blur-2xl sm:p-7"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-100/20 via-white/10 to-cyan-100/20"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -top-28 right-[-6rem] size-64 rounded-full bg-cyan-100/30 blur-3xl"
//       />

//       <div className="relative">
//         <div className="grid gap-5 lg:grid-cols-[1fr_0.6fr] lg:items-end">
//           <div>
//             <p className="font-mono text-[0.65rem] font-medium tracking-[0.15em] text-brand-600 uppercase">
//               Engineering approach
//             </p>

//             <h3
//               id="engineering-approach-title"
//               className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink"
//             >
//               More than a list of technologies.
//             </h3>
//           </div>

//           <p className="max-w-md text-sm leading-7 text-ink-soft lg:justify-self-end">
//             The tools change, but the engineering principles
//             behind maintainable and reliable systems remain
//             consistent.
//           </p>
//         </div>

//         <div className="mt-7 grid gap-4 md:grid-cols-3">
//           {engineeringPrinciples.map(
//             (principle, index) => {
//               const Icon = principleIcons[index];

//               return (
//                 <article
//                   key={principle.id}
//                   className="group relative min-h-40 overflow-hidden rounded-2xl border border-line/75 bg-white/62 p-5 transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white/85 hover:shadow-soft"
//                 >
//                   <div
//                     aria-hidden="true"
//                     className="pointer-events-none absolute -top-12 -right-12 size-28 rounded-full bg-brand-100/0 blur-2xl transition-colors duration-300 group-hover:bg-brand-100/35"
//                   />

//                   <span className="relative flex size-10 items-center justify-center rounded-xl border border-line bg-surface-soft/85 text-brand-600 shadow-sm">
//                     <Icon
//                       aria-hidden={true}
//                       size={18}
//                     />
//                   </span>

//                   <h4 className="relative mt-5 text-sm font-semibold text-ink">
//                     {principle.title}
//                   </h4>

//                   <p className="relative mt-2 text-sm leading-6 text-ink-soft">
//                     {principle.description}
//                   </p>
//                 </article>
//               );
//             },
//           )}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export default EngineeringPrinciples;