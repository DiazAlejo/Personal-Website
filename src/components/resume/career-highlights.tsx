"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { MetricCard } from "@/components/sections/metric-card";
import { Typography } from "@/components/ui/typography";
import type { ResumeContent } from "@/types/content";
import { metricsRevealTransition } from "@/lib/transitions";
import { motion } from "framer-motion";

interface CareerHighlightsProps {
  highlights: ResumeContent["highlights"];
}

function CareerHighlights({ highlights }: CareerHighlightsProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : metricsRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : metricsRevealTransition.item;

  return (
    <section aria-labelledby="resume-highlights-heading">
      <Typography variant="h2" id="resume-highlights-heading">
        {highlights.title}
      </Typography>

      <motion.div
        className="mt-element-md grid grid-cols-1 gap-card sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {highlights.metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            metric={metric}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}

export { CareerHighlights };
