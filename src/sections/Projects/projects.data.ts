export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
  link?: ProjectLink;
  featured?: boolean;
}

export const projects: readonly Project[] = [
  {
    id: "yenicag-crm",
    title: "YeniCağ CRM",
    category: "End-to-end CRM platform",
    description:
      "A full CRM application built from scratch, following the same architectural patterns used in production: Clean Architecture, CQRS and MediatR on the backend, React and TypeScript on the frontend.",
    highlights: [
      "Reusable, FormConfig-driven dynamic form engine that generates data-entry interfaces from configuration",
      "GraphQL data access with Apollo Client",
      "Data table views with Material React Table for efficient record management",
    ],
    stack: [
      "Clean Architecture",
      "CQRS",
      "MediatR",
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "MUI",
    ],
    link: {
      label: "View on GitHub",
      href: "https://github.com/abdullahaydogan",
    },
    featured: true,
  },
  {
    id: "yenicag-kurs",
    title: "Yeni Çağ Kurs",
    category: "Freelance project · Education platform",
    description:
      "A course platform built as freelance client work, covering the full experience from course discovery to enrollment with a responsive, component-driven frontend.",
    highlights: [],
    stack: ["React", "TypeScript"],
    link: {
      label: "View live site",
      href: "https://yenicagkurs-v2.vercel.app/",
    },
  },
{
  id: "welfare",
  title: "Welfare",
  category: "Google Solution Challenge · GDSC Team Project",

  description:
    "Founded and led the Web Development Team within Google Developer Student Clubs (GDSC) and contributed to Welfare, a team project developed for Google's Solution Challenge. Worked as the sole Backend Developer, designing and implementing the application's backend using Java and Spring Boot.",

  highlights: [
    "Founded and led the GDSC Web Development Team",
    "Sole Backend Developer responsible for backend development",
    "Developed for Google's Solution Challenge",
    "Designed and implemented RESTful backend services with Java and Spring Boot",
  ],

  stack: [
    "Java",
    "Spring Boot",
    "Spring Web",
    "REST API",
    "Git",
    "Agile",
  ],
},
  {
    id: "multi-vendor-ecommerce",
    title: "Multi-Vendor E-Commerce Platform",
    category: "Personal project",
    description:
      "Designed and developed a scalable multi-vendor e-commerce architecture supporting independent seller workflows.",
    highlights: [],
    stack: ["Architecture design", "Multi-tenant systems"],
    link: {
      label: "View on GitHub",
      href: "https://github.com/abdullahaydogan",
    },
  },
] as const;