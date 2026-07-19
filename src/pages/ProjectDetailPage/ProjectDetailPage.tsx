import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";

import Container from "@/components/ui/Container";
import { getButtonClassName } from "@/components/ui/button.styles";

function formatProjectTitle(slug: string | undefined) {
  if (!slug) {
    return "Project detail";
  }

  return slug
    .split("-")
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}

function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const projectTitle = formatProjectTitle(slug);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-canvas pt-36 pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-48 right-[-12rem] size-[34rem] rounded-full bg-brand-200/35 blur-3xl" />

        <div className="absolute top-48 left-[-14rem] size-[30rem] rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <Link
          to="/#projects"
          className={getButtonClassName({
            variant: "ghost",
            size: "sm",
            className: "-ml-4",
          })}
        >
          <ArrowLeft aria-hidden="true" size={17} />
          Back to projects
        </Link>

        <div className="mt-16 max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.22em] text-brand-600 uppercase">
            Selected project
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
            {projectTitle}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
            The complete case study, architecture decisions,
            technologies and implementation details will be presented
            here.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ProjectDetailPage;