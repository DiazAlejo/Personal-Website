"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import type { ContactPageContent } from "@/types/content";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { motion } from "framer-motion";

interface AvailabilitySectionProps {
  availability: ContactPageContent["availability"];
}

function AvailabilitySection({ availability }: AvailabilitySectionProps) {
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
      aria-labelledby="contact-availability-heading"
      className="rounded-xl border border-border bg-surface p-card shadow-soft"
    >
      <Typography variant="h2" id="contact-availability-heading">
        {availability.title}
      </Typography>

      <Typography variant="body" className="mt-element text-text-secondary">
        {availability.intro}
      </Typography>

      <ul
        className="mt-element-md flex flex-wrap gap-element-sm"
        aria-label="Open opportunities"
      >
        {availability.items.map((item) => (
          <li key={item}>
            <Badge variant="secondary">{item}</Badge>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export { AvailabilitySection };
