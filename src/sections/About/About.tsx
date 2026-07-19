import { motion, type Variants } from "motion/react";

import Container from "@/components/ui/Container";
import DramaticTransition from "@/components/motion/DramaticTransition";
import aboutBg from "@/assets/photos/developer.jpg";

import AboutEducation from "./AboutEducation";
import AboutPhoto from "./AboutPhoto";
import AboutStats from "./AboutStats";

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function About() {
  return (
    <>
      <DramaticTransition imageSrc={aboutBg} eyebrow="who I am" title="About" />

      <section
        id="about"
        className="relative scroll-mt-20 py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 xl:grid-cols-[0.98fr_1.02fr] xl:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={contentVariants}
              className="max-w-xl"
            >
              <motion.p
                variants={itemVariants}
                className="flex items-center gap-2 font-mono text-xs text-ink-muted"
              >
                <span className="text-brand-500">{"//"}</span>
                about
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="mt-5 text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-ink sm:text-4xl"
              >
                Engineering mindset,{" "}
                <span className="text-brand-600">software focus.</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-base leading-8 text-ink-soft"
              >
                My background is in electronics and communication engineering,
                where courses spanning data structures and programming, logic
                design, and data communication gave me a foundation that turned
                out to map directly onto backend engineering. The same
                questions, how state is represented, how signals and messages
                propagate between independent parts, how noise and failure are
                handled, show up again in distributed systems and clean
                architecture.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="mt-5 text-base leading-8 text-ink-soft"
              >
                For the past two years I have worked on WeChip Issuer,
                a microservices-based card issuance platform spanning
                credit, debit and prepaid domains, owning features end
                to end, from GraphQL schema design at the BFF layer to
                root-cause analysis of distributed-systems issues in
                production.
              </motion.p>
            </motion.div>

            <div className="space-y-3.5">
              <AboutPhoto />
              <div className="space-y-3.5">
                <AboutStats />
                <AboutEducation />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;