"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { hoverPatterns } from "@/lib/hover";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import type { CaseStudyImpactMetric } from "@/types/content";
import { motion, useReducedMotion } from "framer-motion";

interface ImpactGridProps {
  title: string;
  metrics: CaseStudyImpactMetric[];
}

function ImpactGrid({ title, metrics }: ImpactGridProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : caseStudyRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.item;

  return (
    <div>
      <Typography variant="h2" className="mb-element-lg">
        {title}
      </Typography>

      <motion.div
        className="grid grid-cols-1 gap-card sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        role="list"
        aria-label="Project impact metrics"
      >
        {metrics.map((metric) => (
          <motion.article
            key={metric.id}
            variants={itemVariants}
            role="listitem"
            aria-label={`${metric.value} ${metric.label}`}
          >
            <Card
              className={cn(
                "h-full transition-[transform,box-shadow,border-color] duration-normal ease-default",
                hoverPatterns.borderHighlight,
                hoverPatterns.softShadow,
                "hover:-translate-y-px",
              )}
            >
              <CardContent className="flex flex-col gap-element-sm">
                <Typography
                  variant="h1"
                  as="p"
                  className="text-text-primary tabular-nums"
                >
                  {metric.value}
                </Typography>
                <Typography
                  variant="small"
                  as="p"
                  className="text-text-secondary"
                >
                  {metric.label}
                </Typography>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

export { ImpactGrid };
