import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import type { Project, ProjectLink } from "./projects.data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface ProjectLinkIconProps {
  link: ProjectLink;
  title: string;
}

function ProjectLinkIcon({ link, title }: ProjectLinkIconProps) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} — ${title}`} className="shrink-0 text-ink-muted transition-colors duration-300 hover:text-brand-600">
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex h-full flex-col justify-between gap-5 rounded-panel border border-white/95 bg-surface/88 p-5 shadow-card backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow sm:p-6"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
            {project.title}
          </h3>

          {project.link ? (
            <ProjectLinkIcon link={project.link} title={project.title} />
          ) : null}
        </div>

        <p className="mt-1 text-xs font-medium text-ink-muted">
          {project.category}
        </p>

        <p className="mt-4 text-sm leading-6 text-ink-soft">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line bg-surface-soft/80 px-2.5 py-1 font-mono text-[0.62rem] text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;