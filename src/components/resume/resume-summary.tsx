"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Typography } from "@/components/ui/typography";
import type { ResumeContent } from "@/types/content";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { motion } from "framer-motion";

interface ResumeSummaryProps {
  summary: ResumeContent["summary"];
}

function ResumeSummary({ summary }: ResumeSummaryProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.item;

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-labelledby="resume-summary-heading"
    >
      <Typography variant="h2" id="resume-summary-heading">
        {summary.title}
      </Typography>

      {summary.paragraphs.map((paragraph) => (
        <Typography
          key={paragraph}
          variant="body"
          className="mt-element max-w-3xl text-text-secondary"
        >
          {paragraph}
        </Typography>
      ))}
    </motion.section>
  );
}

export { ResumeSummary };
