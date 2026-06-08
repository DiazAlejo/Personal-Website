"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Typography } from "@/components/ui/typography";
import type { ResumeContent } from "@/types/content";
import { timelineRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ExperienceSummaryProps {
  experience: ResumeContent["experience"];
}

function ExperienceSummary({ experience }: ExperienceSummaryProps) {
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-labelledby="resume-experience-heading"
    >
      <motion.header variants={headerVariants} className="mb-element-xl">
        <Typography variant="h2" id="resume-experience-heading">
          {experience.title}
        </Typography>
      </motion.header>

      <div className="relative max-w-3xl">
        <motion.div
          aria-hidden="true"
          variants={lineVariants}
          className="absolute top-1.5 bottom-0 left-0 w-px origin-top bg-border"
        />

        <motion.ol className="relative list-none" aria-label="Work experience">
          {experience.entries.map((entry) => (
            <motion.li
              key={entry.id}
              variants={itemVariants}
              className={cn(
                "relative pb-card pl-element-xl last:pb-0",
                "rounded-lg transition-[background-color] duration-normal ease-default",
                "hover:bg-surface-secondary/30",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-1.5 left-0 z-10 size-2.5 -translate-x-1/2 rounded-full",
                  "border-2 border-primary bg-background",
                )}
              />

              <div className="flex flex-col gap-element-xs">
                <Typography
                  variant="small"
                  as="p"
                  className="font-medium text-text-secondary"
                >
                  {entry.period}
                </Typography>
                <Typography variant="h3" as="h3">
                  {entry.role}
                </Typography>
                <Typography
                  variant="small"
                  as="p"
                  className="text-text-secondary"
                >
                  {entry.company}
                </Typography>
              </div>

              <ul className="mt-element-md max-w-2xl list-disc space-y-element-sm pl-element-lg text-text-secondary">
                {entry.achievements.map((achievement) => (
                  <li key={achievement}>
                    <Typography variant="body" as="span">
                      {achievement}
                    </Typography>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </motion.section>
  );
}

export { ExperienceSummary };
