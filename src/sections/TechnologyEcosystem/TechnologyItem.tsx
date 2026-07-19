// import type { CSSProperties } from "react";

// import type {
//   TechnologyItem as TechnologyItemType,
// } from "./technology.data";

// interface TechnologyItemProps {
//   technology: TechnologyItemType;
// }

// interface TechnologyAccentStyles extends CSSProperties {
//   "--technology-color": string;
//   "--technology-glow": string;
// }

// function TechnologyItem({
//   technology,
// }: TechnologyItemProps) {
//   const Icon = technology.icon;

//   const accentStyles: TechnologyAccentStyles = {
//     "--technology-color": technology.color,
//     "--technology-glow": technology.glow,
//   };

//   return (
//     <div
//       style={accentStyles}
//       className="group/item relative flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-line/80 bg-white/58 px-3.5 py-3 backdrop-blur-md transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--technology-color)] hover:bg-white/90 hover:shadow-[0_10px_26px_var(--technology-glow)]"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -top-8 -left-8 size-20 rounded-full bg-[var(--technology-glow)] opacity-0 blur-2xl transition-opacity duration-300 group-hover/item:opacity-100"
//       />

//       <span className="relative flex size-9 shrink-0 items-center justify-center rounded-lg border border-line/70 bg-surface-soft/80 transition-[transform,border-color,background-color] duration-300 group-hover/item:scale-105 group-hover/item:border-[var(--technology-color)] group-hover/item:bg-white">
//         <Icon
//           aria-hidden={true}
//           size={18}
//           className="text-ink-muted transition-[color,transform] duration-300 group-hover/item:scale-110 group-hover/item:text-[var(--technology-color)]"
//         />
//       </span>

//       <span className="relative min-w-0 truncate text-sm font-medium text-ink-soft transition-colors duration-300 group-hover/item:text-ink">
//         {technology.name}
//       </span>

//       <span
//         aria-hidden="true"
//         className="absolute inset-x-5 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-[var(--technology-color)] to-transparent opacity-70 transition-transform duration-300 group-hover/item:scale-x-100"
//       />
//     </div>
//   );
// }

// export default TechnologyItem;