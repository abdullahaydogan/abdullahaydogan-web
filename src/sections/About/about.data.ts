import type { LucideIcon } from "lucide-react";
import { Boxes, ShieldCheck, Workflow } from "lucide-react";

export interface AboutStat {
  id: string;
  value: string;
  label: string;
}

export const aboutStats: readonly AboutStat[] = [
  { id: "experience", value: "2+", label: "Years in production" },
  { id: "domains", value: "3", label: "Card domains" },
  { id: "stack", value: "8+", label: "Core technologies" },
  { id: "degree", value: "2026", label: "Engineering graduate" },
] as const;

export interface AboutMetric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const aboutMetrics: readonly AboutMetric[] = [
  {
    id: "experience",
    value: "2+",
    label: "Years in production",
    description: "Working on a live, microservices-based platform.",
  },
  {
    id: "domains",
    value: "3",
    label: "Card domains",
    description: "Credit, debit and prepaid, each with its own rules.",
  },
  {
    id: "stack",
    value: "8+",
    label: "Core technologies",
    description: "From GraphQL federation to event-driven messaging.",
  },
  {
    id: "degree",
    value: "2026",
    label: "Engineering graduate",
    description: "Electronics and communication engineering, Kocaeli University.",
  },
] as const;

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

export const education: EducationEntry = {
  institution: "Kocaeli University",
  degree: "B.Sc. in Electronics and Communication Engineering",
  period: "",
};

export interface AboutPrinciple {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutPrinciples: readonly AboutPrinciple[] = [
  {
    id: "architecture",
    title: "Clear boundaries",
    description:
      "Keeping domain logic, use cases and infrastructure separated so systems stay easy to change.",
    icon: Boxes,
  },
  {
    id: "reliability",
    title: "Reliability first",
    description:
      "Treating failure paths and edge cases as part of the feature, not an afterthought.",
    icon: ShieldCheck,
  },
  {
    id: "communication",
    title: "Traceable systems",
    description:
      "Designing services so their behavior in production can actually be observed and understood.",
    icon: Workflow,
  },
] as const;