import { motion, type Variants } from "motion/react";

import Container from "@/components/ui/Container";
import DramaticTransition from "@/components/motion/DramaticTransition";
import projectsBg from "@/assets/photos/projects.jpg";

import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <DramaticTransition
        imageSrc={projectsBg}
        eyebrow="what I've built"
        title="Projects"
      />

      <section
        id="projects"
        className="relative scroll-mt-20 py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headingVariants}
            className="max-w-xl"
          >
            <p className="flex items-center gap-2 font-mono text-xs text-ink-muted">
              <span className="text-brand-500">{"//"}</span>
              projects
            </p>

            <h2 className="mt-5 text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Things I have built.
            </h2>
          </motion.div>

          <div className="mt-12 space-y-4">
            {featuredProject ? (
              <FeaturedProjectCard project={featuredProject} />
            ) : null}

            {otherProjects.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Projects;