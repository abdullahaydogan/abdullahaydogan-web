import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Blocks,
  Braces,
  Database,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: readonly string[];
  evidence: string;
  accent: string;
  glow: string;
}

export const skills: readonly SkillItem[] = [
  {
    id: "backend-architecture",
    title: "Backend architecture",
    description:
      "Designing maintainable backend services with clear boundaries between domain, application and infrastructure layers.",
    icon: Layers3,
    highlights: [
      "Clean Architecture",
      "CQRS",
      "MediatR",
      "SOLID & DDD principles",
    ],
    evidence:
      "Applied across credit, debit, prepaid and customer-focused services.",
    accent: "#2563EB",
    glow: "rgba(37, 99, 235, 0.14)",
  },
  {
    id: "distributed-systems",
    title: "Distributed systems",
    description:
      "Building service-to-service communication flows with asynchronous messaging and resilient integration patterns.",
    icon: Network,
    highlights: [
      "Microservices",
      "Event-driven messaging",
      "RabbitMQ",
      "MassTransit",
    ],
    evidence:
      "Used in multi-domain card issuance and customer management workflows.",
    accent: "#7C3AED",
    glow: "rgba(124, 58, 237, 0.14)",
  },
  {
    id: "api-integrations",
    title: "API & integrations",
    description:
      "Creating strongly typed, federated APIs and integration layers for communication between backend services and client applications.",
    icon: Braces,
    highlights: [
      "GraphQL Federation",
      "HotChocolate & StrawberryShake",
      "REST APIs",
      "Service clients",
    ],
    evidence:
      "Developed federated GraphQL schemas and BFF integrations across multiple domains.",
    accent: "#DB2777",
    glow: "rgba(219, 39, 119, 0.13)",
  },
  {
    id: "data-persistence",
    title: "Data & persistence",
    description:
      "Designing data-access flows with attention to query behavior, entity tracking, consistency and performance.",
    icon: Database,
    highlights: [
      "Entity Framework Core",
      "LINQ",
      "PostgreSQL",
      "SQL Server",
    ],
    evidence:
      "Worked on tracked updates, complex queries and production data issues.",
    accent: "#0369A1",
    glow: "rgba(3, 105, 161, 0.14)",
  },
  {
    id: "observability",
    title: "Observability",
    description:
      "Instrumenting distributed systems for visibility into service behavior, request flow and failure points in production.",
    icon: Activity,
    highlights: [
      "Serilog",
      "Elasticsearch & Kibana",
      "OpenTelemetry",
      "Distributed tracing",
    ],
    evidence:
      "Set up centralized logging with the ELK Stack across microservices.",
    accent: "#0891B2",
    glow: "rgba(8, 145, 178, 0.14)",
  },
  {
    id: "frontend-engineering",
    title: "Frontend engineering",
    description:
      "Developing responsive and maintainable interfaces with reusable components and strongly typed application state.",
    icon: Blocks,
    highlights: [
      "React",
      "TypeScript",
      "Apollo Client",
      "Component architecture",
    ],
    evidence:
      "Built metadata-driven Rule Engine interfaces and full-stack application flows.",
    accent: "#059669",
    glow: "rgba(5, 150, 105, 0.14)",
  },
  {
    id: "delivery-devops",
    title: "Delivery & DevOps",
    description:
      "Supporting consistent, repeatable delivery through containerized environments and automated pipelines.",
    icon: GitBranch,
    highlights: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Azure DevOps",
    ],
    evidence:
      "Contributed to containerized deployment workflows across services.",
    accent: "#B45309",
    glow: "rgba(180, 83, 9, 0.14)",
  },
  {
    id: "production-support",
    title: "Production support",
    description:
      "Taking ownership beyond implementation through debugging, security review and cross-service root-cause analysis.",
    icon: ShieldCheck,
    highlights: [
      "Root-cause analysis",
      "Security review",
      "Performance optimization",
      "Cross-service debugging",
    ],
    evidence:
      "Investigated production failures and resolved cross-service data-consistency issues.",
    accent: "#BE123C",
    glow: "rgba(190, 18, 60, 0.13)",
  },
] as const;

export const capabilityTags = [
  "FinTech systems",
  "Card issuance platforms",
  "Production debugging",
  "Cross-domain development",
  "GraphQL federation",
  "Event-driven architecture",
  "Observability & monitoring",
] as const;