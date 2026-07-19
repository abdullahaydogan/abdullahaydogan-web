import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 xl:grid-cols-[0.98fr_1.02fr] xl:gap-24">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

export default Hero;