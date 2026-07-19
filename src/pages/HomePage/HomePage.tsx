import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

function HomePage() {
  return (
    <>
      <Hero />

      {/* <SectionTransition /> */}

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default HomePage;