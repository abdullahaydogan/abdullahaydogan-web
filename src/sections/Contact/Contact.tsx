import { Mail } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { getButtonClassName } from "@/components/ui/button.styles";
import Container from "@/components/ui/Container";


import ContactCard from "./ContactCard";
import { contactChannels } from "./contact.data";
import DramaticTransition from "@/components/motion/DramaticTransition";
import contactBg from "@/assets/photos/michael-stevanus-hartono-fyGFD3-gD5g-unsplash.jpg";


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

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const emailButtonClassName = getButtonClassName({
  variant: "primary",
  size: "lg",
});

function Contact() {
  return (
    <>
      <DramaticTransition
        imageSrc={contactBg}
        eyebrow="let's talk"
        title="Contact"
      />      <section
        id="contact"
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
                contact
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="mt-5 text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-ink sm:text-4xl"
              >
                Let&apos;s build something{" "}
                <span className="text-brand-600">reliable.</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-base leading-8 text-ink-soft"
              >
                Open to full-time backend or full stack
                roles. If you are building something that needs someone
                who cares about clean architecture and production
                reliability, reach out.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href="mailto:abdullahaydgn0@gmail.com" className={emailButtonClassName}>
                  Email me
                  <Mail aria-hidden="true" size={18} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={gridVariants}
              className="grid grid-cols-2 gap-3.5 sm:gap-4"
            >
              {contactChannels.map((channel) => (
                <motion.div key={channel.id} variants={cardVariants}>
                  <ContactCard channel={channel} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;