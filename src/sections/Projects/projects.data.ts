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
    id: "google-dsc",
    title: "Sustainable Development Application",
    category: "Google Developer Student Clubs · Team project",
    description:
      "Worked within an Agile team to design and deliver an application addressing a UN Sustainable Development Goal.",
    highlights: [],
    stack: ["Agile", "Team collaboration"],
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