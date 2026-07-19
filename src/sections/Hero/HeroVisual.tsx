import Parallax from "@/components/motion/Parallax";

import HeroCodeCard from "./HeroCodeCard";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
      <div className="absolute inset-[12%] rounded-[3.5rem] bg-brand-300/12 blur-3xl" />

      <Parallax
        distance={44}
        direction="up"
        scaleFrom={0.985}
        scaleTo={1.015}
        className="relative z-20"
      >
        <HeroCodeCard />
      </Parallax>
    </div>
  );
}

export default HeroVisual;