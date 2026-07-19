import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Braces,
  CreditCard,
  Layers3,
  MonitorSmartphone,
  Network,
  ShieldCheck,
} from "lucide-react";

export interface ExperienceImpact {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: readonly string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  summary: string;
  impacts: readonly ExperienceImpact[];
  stack: readonly string[];
}

export const experience: ExperienceEntry = {
  company: "WeChip Payment Technologies",

  role: "Full Stack Software Engineer",

  employmentType: "Part-Time",

  period: "2024 — 2026",

  location: "FinTech · Card Issuance Platform",

  summary:
    "Worked on a production-grade microservice-based card issuance platform used in the FinTech domain. Contributed across backend services, GraphQL federation, BFF integrations and React applications while developing features for Credit, Debit, Prepaid, Customer and Rule Engine domains.",

  impacts: [
    {
      id: "backend-development",

      title: "Backend service development",

      description:
        "Developed backend use cases and business logic using Clean Architecture, CQRS and MediatR while implementing new features and maintaining existing production services.",

      icon: Layers3,

      highlights: [
        "ASP.NET Core services",
        "CQRS + MediatR",
        "Entity Framework Core",
        "REST & GraphQL APIs",
      ],
    },

    {
      id: "issuer-platform",

      title: "Card Issuance Platform",

      description:
        "Implemented business features for a distributed issuer platform covering customer management and card lifecycle processes across multiple financial domains.",

      icon: CreditCard,

      highlights: [
        "Credit domain",
        "Debit domain",
        "Prepaid domain",
        "Customer domain",
        "Card lifecycle management",
      ],
    },

    {
      id: "rule-engine",

      title: "Metadata-driven Rule Engine",

      description:
        "Developed both backend services and React management screens for a Rule Engine microservice that enables business users to configure operational rules without requiring software deployments.",

      icon: Braces,

      highlights: [
        "Annual Fee profiles",
        "Spending Limit profiles",
        "Transaction Restriction profiles",
        "Dynamic metadata-driven UI",
        "GraphQL integrations",
      ],
    },

    {
      id: "cross-domain",

      title: "Cross-domain feature implementation",

      description:
        "Delivered features that required coordinated development across Customer, Credit, Debit, Prepaid and shared microservices while preserving business consistency between domains.",

      icon: Boxes,

      highlights: [
        "Customer Default Card",
        "Executive Person card operations",
        "Shared client integrations",
        "Multi-service validation flows",
      ],
    },

    {
      id: "distributed",

      title: "Microservice integrations",

      description:
        "Worked with synchronous and asynchronous communication patterns between services through GraphQL Federation, typed service clients and message-based architectures.",

      icon: Network,

      highlights: [
        "GraphQL Federation",
        "Hot Chocolate",
        "MassTransit",
        "RabbitMQ",
        "BFF architecture",
      ],
    },

    {
      id: "frontend",

      title: "Frontend development",

      description:
        "Built React and TypeScript interfaces for internal business applications including management panels and metadata-driven configuration screens.",

      icon: MonitorSmartphone,

      highlights: [
        "React",
        "TypeScript",
        "MUI",
        "Reusable Components",
        "GraphQL UI",
      ],
    },

    {
      id: "production",

      title: "Production support & debugging",

      description:
        "Analyzed production issues by tracing requests across services, inspecting database state and identifying root causes before implementing maintainable solutions.",

      icon: ShieldCheck,

      highlights: [
        "Root cause analysis",
        "EF Core tracking",
        "Database debugging",
        "Integration troubleshooting",
      ],
    },
  ],

  stack: [
    ".NET",
    "ASP.NET Core",
    "C#",
    "Entity Framework Core",
    "Clean Architecture",
    "CQRS",
    "MediatR",
    "GraphQL",
    "MassTransit",
    "RabbitMQ",
    "PostgreSQL",
    "MySQL",
    "React",
    "TypeScript",
    "Material UI",
    "Docker",
    "Kubernetes",
    "Azure DevOps",
    "Git",
    "GitHub",
  ],
};