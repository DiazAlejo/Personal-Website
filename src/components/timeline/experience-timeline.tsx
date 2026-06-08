"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TimelineItem } from "@/components/timeline/timeline-item";
import { Typography } from "@/components/ui/typography";
import { experience, experienceSection } from "@/content/experience";
import { timelineRevealTransition } from "@/lib/transitions";
import { motion } from "framer-motion";

function ExperienceTimeline() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : timelineRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : timelineRevealTransition.item;

  const headerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : timelineRevealTransition.header;

  const lineVariants = prefersReducedMotion
    ? { hidden: { scaleY: 1 }, visible: { scaleY: 1 } }
    : timelineRevealTransition.line;

  return (
    <Section aria-labelledby="experience-heading">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.header
            variants={headerVariants}
            className="mb-element-xl max-w-2xl"
          >
            <Typography variant="h2" id="experience-heading">
              {experienceSection.title}
            </Typography>
            <Typography
              variant="body"
              className="mt-element text-text-secondary"
            >
              {experienceSection.description}
            </Typography>
          </motion.header>

          <div className="relative max-w-2xl">
            <motion.div
              aria-hidden="true"
              variants={lineVariants}
              className="absolute top-2 bottom-0 left-[3px] w-px origin-top bg-gradient-to-b from-primary/40 via-border to-transparent"
            />

            <motion.ol
              className="relative list-none"
              aria-label="Career timeline"
            >
              {experience.map((entry) => (
                <TimelineItem
                  key={entry.id}
                  entry={entry}
                  variants={itemVariants}
                />
              ))}
            </motion.ol>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export { ExperienceTimeline };
