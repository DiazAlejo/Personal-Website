"use client";

import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyTechStackProps {
  title: string;
  items: string[];
}

function CaseStudyTechStack({ title, items }: CaseStudyTechStackProps) {
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
      aria-labelledby="technology-stack-heading"
    >
      <Typography variant="h2" id="technology-stack-heading">
        {title}
      </Typography>

      <ul
        className="mt-element-md flex flex-wrap gap-element-sm"
        aria-label="Technologies used"
      >
        {items.map((item) => (
          <li key={item}>
            <Badge variant="tag">{item}</Badge>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export { CaseStudyTechStack };
