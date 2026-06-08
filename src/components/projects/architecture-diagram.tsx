"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Typography } from "@/components/ui/typography";
import { hoverPatterns } from "@/lib/hover";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import type { CaseStudyArchitectureStep } from "@/types/content";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ArchitectureDiagramProps {
  title: string;
  steps: CaseStudyArchitectureStep[];
  ariaLabel?: string;
}

function ArchitectureDiagram({
  title,
  steps,
  ariaLabel = "System architecture flow",
}: ArchitectureDiagramProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : caseStudyRevealTransition.diagramContainer;

  const stepVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.diagramStep;

  return (
    <div>
      <Typography variant="h2" className="mb-element-lg">
        {title}
      </Typography>

      <motion.ol
        className="mx-auto flex max-w-md list-none flex-col items-center"
        aria-label={ariaLabel}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {steps.map((step, index) => (
          <li key={step.id} className="flex w-full flex-col items-center">
            <motion.div
              variants={stepVariants}
              className={cn(
                "w-full rounded-lg border border-border bg-surface px-card py-element-md text-center shadow-soft",
                hoverPatterns.borderHighlight,
              )}
            >
              <Typography variant="body" className="font-medium">
                {step.label}
              </Typography>
            </motion.div>

            {index < steps.length - 1 ? (
              <div
                aria-hidden="true"
                className="flex h-10 items-center justify-center"
              >
                <ArrowDown className="size-4 text-text-secondary" />
              </div>
            ) : null}
          </li>
        ))}
      </motion.ol>
    </div>
  );
}

export { ArchitectureDiagram };
