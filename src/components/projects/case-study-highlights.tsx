"use client";

import { Typography } from "@/components/ui/typography";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyHighlightsProps {
  title: string;
  items: string[];
}

function CaseStudyHighlights({ title, items }: CaseStudyHighlightsProps) {
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
      aria-labelledby="engineering-highlights-heading"
    >
      <Typography variant="h2" id="engineering-highlights-heading">
        {title}
      </Typography>

      <ul className="mt-element-md max-w-3xl space-y-element-sm">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-element-sm rounded-lg border border-border bg-surface px-card py-element-sm"
          >
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
            />
            <Typography variant="body" className="text-text-secondary">
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export { CaseStudyHighlights };
