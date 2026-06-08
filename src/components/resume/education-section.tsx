"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import type { ResumeContent } from "@/types/content";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { hoverPatterns } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

interface EducationSectionProps {
  education: ResumeContent["education"];
}

function EducationSection({ education }: EducationSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.item;

  const { entry } = education;

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-labelledby="resume-education-heading"
    >
      <Typography variant="h2" id="resume-education-heading">
        {education.title}
      </Typography>

      <Card
        className={cn(
          "mt-element-md max-w-2xl transition-[transform,box-shadow,border-color] duration-normal ease-default",
          hoverPatterns.borderHighlight,
          hoverPatterns.softShadow,
        )}
      >
        <CardContent className="flex flex-col gap-element-sm">
          <Typography variant="h3" as="h3">
            {entry.institution}
          </Typography>
          <Typography variant="body" className="text-text-secondary">
            {entry.degree}
          </Typography>
          {entry.minor ? (
            <Typography variant="small" className="text-text-secondary">
              {entry.minor}
            </Typography>
          ) : null}
        </CardContent>
      </Card>
    </motion.section>
  );
}

export { EducationSection };
