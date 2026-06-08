"use client";

import { Typography } from "@/components/ui/typography";
import { caseStudyRevealTransition } from "@/lib/transitions";
import type { CaseStudyNarrativeSection } from "@/types/content";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudySectionProps {
  section: CaseStudyNarrativeSection;
}

function CaseStudySection({ section }: CaseStudySectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.item;

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-labelledby={`${section.title.toLowerCase().replace(/\s+/g, "-")}-heading`}
    >
      <Typography
        variant="h2"
        id={`${section.title.toLowerCase().replace(/\s+/g, "-")}-heading`}
      >
        {section.title}
      </Typography>

      {section.paragraphs?.map((paragraph) => (
        <Typography
          key={paragraph}
          variant="body"
          className="mt-element max-w-3xl text-text-secondary"
        >
          {paragraph}
        </Typography>
      ))}

      {section.bullets && section.bullets.length > 0 ? (
        <ul className="mt-element-md max-w-3xl list-disc space-y-element-sm pl-element-lg text-text-secondary">
          {section.bullets.map((bullet) => (
            <li key={bullet}>
              <Typography variant="body" as="span">
                {bullet}
              </Typography>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.section>
  );
}

export { CaseStudySection };
