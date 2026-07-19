import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

type SectionProps = ComponentPropsWithoutRef<"section">;

function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-24 lg:py-32",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;