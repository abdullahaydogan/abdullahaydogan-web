// import type { CSSProperties } from "react";

// import type { TechnologyItem } from "./technology.data";

// interface TechnologyCardProps {
//   item: TechnologyItem;
// }

// function TechnologyCard({ item }: TechnologyCardProps) {
//   const Icon = item.icon;

//   const accentVars = {
//     "--tech-solid": item.solid,
//     "--tech-border": item.border,
//     "--tech-glow": item.glow,
//   } as CSSProperties;

//   return (
//     <div
//       style={accentVars}
//       className="group relative flex h-full flex-col justify-between gap-5 rounded-panel border border-line bg-surface/90 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[var(--tech-border)] hover:shadow-[0_10px_36px_-8px_var(--tech-glow)]"
//     >
//       <div
//         className="flex size-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300"
//         style={{
//           backgroundColor: "var(--tech-glow)",
//           borderColor: "var(--tech-border)",
//         }}
//       >
//         <Icon
//           aria-hidden="true"
//           size={22}
//           style={{ color: "var(--tech-solid)" }}
//         />
//       </div>

//       <div className="min-w-0">
//         <p className="text-sm font-semibold text-ink">{item.name}</p>

//         <p className="mt-1 text-[0.65rem] font-medium tracking-wider text-ink-muted uppercase">
//           {item.category}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default TechnologyCard;