import { ArrowRight } from "lucide-react";

import { getButtonClassName } from "@/components/ui/button.styles";

function HeroButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href="#projects"
        className={getButtonClassName({ variant: "primary", size: "lg" })}
      >
        View projects
        <ArrowRight aria-hidden="true" size={18} />
      </a>
    </div>
  );
}

export default HeroButtons;
