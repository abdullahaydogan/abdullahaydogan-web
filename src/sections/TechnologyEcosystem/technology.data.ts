// import type { ElementType } from "react";
// import { Database } from "lucide-react";
// import {
//   SiDocker,
//   SiDotnet,
//   SiElasticsearch,
//   SiGraphql,
//   SiKubernetes,
//   SiPostgresql,
//   SiRabbitmq,
//   SiReact,
//   SiSharp,
//   SiTypescript,
// } from "react-icons/si";

// export interface TechnologyItem {
//   id: string;
//   name: string;
//   icon: ElementType;
//   color: string;
//   glow: string;
// }

// export interface TechnologyGroup {
//   id: string;
//   eyebrow: string;
//   title: string;
//   description: string;
//   technologies: readonly TechnologyItem[];
//   accentClassName: string;
// }

// export interface EngineeringPrinciple {
//   id: string;
//   title: string;
//   description: string;
// }

// export const technologyGroups: readonly TechnologyGroup[] = [
//   {
//     id: "backend",
//     eyebrow: "Core expertise",
//     title: "Backend engineering",
//     description:
//       "Scalable services built with layered architecture, domain-focused use cases and reliable asynchronous communication.",
//     accentClassName:
//       "from-violet-500/16 via-purple-300/6 to-transparent",
//     technologies: [
//       {
//         id: "dotnet",
//         name: ".NET",
//         icon: SiDotnet,
//         color: "#512BD4",
//         glow: "rgba(81, 43, 212, 0.16)",
//       },
//       {
//         id: "csharp",
//         name: "C#",
//         icon: SiSharp,
//         color: "#68217A",
//         glow: "rgba(104, 33, 122, 0.14)",
//       },
//       {
//         id: "graphql",
//         name: "GraphQL",
//         icon: SiGraphql,
//         color: "#E10098",
//         glow: "rgba(225, 0, 152, 0.14)",
//       },
//       {
//         id: "rabbitmq",
//         name: "RabbitMQ",
//         icon: SiRabbitmq,
//         color: "#FF6600",
//         glow: "rgba(255, 102, 0, 0.14)",
//       },
//     ],
//   },
//   {
//     id: "frontend",
//     eyebrow: "Interface layer",
//     title: "Frontend engineering",
//     description:
//       "Maintainable interfaces developed with reusable components, typed data flows and responsive design principles.",
//     accentClassName:
//       "from-cyan-400/16 via-sky-300/6 to-transparent",
//     technologies: [
//       {
//         id: "react",
//         name: "React",
//         icon: SiReact,
//         color: "#087EA4",
//         glow: "rgba(8, 126, 164, 0.15)",
//       },
//       {
//         id: "typescript",
//         name: "TypeScript",
//         icon: SiTypescript,
//         color: "#3178C6",
//         glow: "rgba(49, 120, 198, 0.15)",
//       },
//     ],
//   },
//   {
//     id: "data",
//     eyebrow: "Persistence layer",
//     title: "Data & search",
//     description:
//       "Relational data modeling, query-oriented persistence and search infrastructure designed for production workloads.",
//     accentClassName:
//       "from-indigo-400/15 via-blue-300/6 to-transparent",
//     technologies: [
//       {
//         id: "postgresql",
//         name: "PostgreSQL",
//         icon: SiPostgresql,
//         color: "#336791",
//         glow: "rgba(51, 103, 145, 0.15)",
//       },
//       {
//         id: "sqlserver",
//         name: "SQL Server",
//         icon: Database,
//         color: "#CC2927",
//         glow: "rgba(204, 41, 39, 0.14)",
//       },
//       {
//         id: "elasticsearch",
//         name: "Elasticsearch",
//         icon: SiElasticsearch,
//         color: "#005571",
//         glow: "rgba(0, 85, 113, 0.14)",
//       },
//     ],
//   },
//   {
//     id: "infrastructure",
//     eyebrow: "Delivery layer",
//     title: "Infrastructure",
//     description:
//       "Containerized development environments and deployment workflows that support repeatable software delivery.",
//     accentClassName:
//       "from-sky-400/15 via-blue-300/6 to-transparent",
//     technologies: [
//       {
//         id: "docker",
//         name: "Docker",
//         icon: SiDocker,
//         color: "#2496ED",
//         glow: "rgba(36, 150, 237, 0.15)",
//       },
//       {
//         id: "kubernetes",
//         name: "Kubernetes",
//         icon: SiKubernetes,
//         color: "#326CE5",
//         glow: "rgba(50, 108, 229, 0.15)",
//       },
//     ],
//   },
// ] as const;

// export const ecosystemBadges = [
//   "Production experience",
//   "FinTech systems",
//   "Microservice architecture",
//   "Full stack delivery",
// ] as const;

// export const engineeringPrinciples: readonly EngineeringPrinciple[] = [
//   {
//     id: "architecture",
//     title: "Clean architecture",
//     description:
//       "Clear boundaries between domain logic, application use cases and infrastructure concerns.",
//   },
//   {
//     id: "messaging",
//     title: "Event-driven systems",
//     description:
//       "Reliable service communication through asynchronous messaging and domain events.",
//   },
//   {
//     id: "delivery",
//     title: "Production mindset",
//     description:
//       "Solutions designed with maintainability, observability and operational reliability in mind.",
//   },
// ] as const;