import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import type { Project, ProjectLink } from "./projects.data";

interface FeaturedProjectCardProps {
  project: Project;
}

interface ProjectLinkButtonProps {
  link: ProjectLink;
}

function ProjectLinkButton({ link }: ProjectLinkButtonProps) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className="group flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface-soft/80 px-3.5 py-2 text-xs font-medium text-ink-soft transition-colors duration-300 hover:border-brand-200 hover:text-brand-700">
      {link.label}
      <ArrowUpRight
        aria-hidden="true"
        size={13}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-panel border border-white/95 bg-surface/88 shadow-card backdrop-blur-2xl"
    >
      <div className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-wide text-brand-700 uppercase">
              Featured
            </span>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-[1.7rem]">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-ink-muted">{project.category}</p>
          </div>

          {project.link ? <ProjectLinkButton link={project.link} /> : null}
        </div>

        <p className="max-w-2xl text-sm leading-7 text-ink-soft">
          {project.description}
        </p>

        {project.highlights.length > 0 ? (
          <ul className="space-y-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-500" />
                <span className="text-sm leading-6 text-ink-soft">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex flex-wrap gap-2 border-t border-line pt-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-surface-soft/80 px-2.5 py-1 font-mono text-[0.65rem] text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedProjectCard;