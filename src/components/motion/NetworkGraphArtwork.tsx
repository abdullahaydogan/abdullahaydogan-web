interface NetworkGraphArtworkProps {
  className?: string;
}

const edges = [
  "M90 90 Q220 40 340 110",
  "M340 110 Q460 60 560 130",
  "M90 90 Q160 220 300 240",
  "M300 240 Q400 280 470 220",
  "M470 220 Q560 190 560 130",
  "M300 240 Q280 340 380 380",
  "M380 380 Q470 400 540 340",
  "M540 340 Q580 260 470 220",
  "M90 90 Q40 200 120 300",
  "M120 300 Q220 340 300 240",
  "M120 300 Q200 380 380 380",
  "M560 130 Q630 180 600 260",
  "M600 260 Q580 320 540 340",
] as const;

const nodes = [
  { cx: 90, cy: 90, r: 5, tone: "brand" as const, ring: true },
  { cx: 340, cy: 110, r: 4, tone: "violet" as const, ring: false },
  { cx: 560, cy: 130, r: 6, tone: "brand" as const, ring: true },
  { cx: 300, cy: 240, r: 5, tone: "brand" as const, ring: false },
  { cx: 470, cy: 220, r: 4, tone: "violet" as const, ring: false },
  { cx: 120, cy: 300, r: 4, tone: "violet" as const, ring: false },
  { cx: 380, cy: 380, r: 5, tone: "brand" as const, ring: true },
  { cx: 540, cy: 340, r: 4, tone: "violet" as const, ring: false },
  { cx: 600, cy: 260, r: 3, tone: "brand" as const, ring: false },
] as const;

function NetworkGraphArtwork({ className }: NetworkGraphArtworkProps) {
  return (
    <svg
      viewBox="0 0 680 420"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="networkGlowBrand" cx="50%" cy="50%" r="50%">
          <stop offset="0%" className="text-brand-500" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" className="text-brand-500" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="networkGlowViolet" cx="50%" cy="50%" r="50%">
          <stop offset="0%" className="text-violet-500" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" className="text-violet-500" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="600" cy="230" r="90" fill="url(#networkGlowBrand)" />
      <circle cx="70" cy="360" r="90" fill="url(#networkGlowViolet)" />

      {edges.map((d, index) => (
        <path
          key={d}
          d={d}
          fill="none"
          className={index % 2 === 0 ? "stroke-brand-500" : "stroke-violet-500"}
          strokeWidth="1"
          strokeOpacity={0.3 + (index % 3) * 0.05}
        />
      ))}

      {nodes.map((node) => (
        <g key={`${node.cx}-${node.cy}`}>
          {node.ring ? (
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r + 5}
              fill="none"
              className="stroke-brand-500"
              strokeWidth="0.75"
              strokeOpacity="0.3"
            />
          ) : null}

          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            className={node.tone === "brand" ? "fill-brand-500" : "fill-violet-500"}
            fillOpacity="0.6"
          />
        </g>
      ))}
    </svg>
  );
}

export default NetworkGraphArtwork;