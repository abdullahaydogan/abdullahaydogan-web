export const heroTechnologies = [
  ".NET",
  "React",
  "GraphQL",
  "RabbitMQ",
  "PostgreSQL",
  "TypeScript",
] as const;

export interface HeroMetric {
  id: string;
  icon: "timer" | "layers" | "sparkles";
  value: string;
  label: string;
}

export const heroMetrics: readonly HeroMetric[] = [
  {
    id: "experience",
    icon: "timer",
    value: "2+ Yrs",
    label: "Production",
  },
  {
    id: "domains",
    icon: "layers",
    value: "3",
    label: "Card Domains",
  },
  {
    id: "architecture",
    icon: "sparkles",
    value: "Event-Driven",
    label: "Architecture",
  },
] as const;