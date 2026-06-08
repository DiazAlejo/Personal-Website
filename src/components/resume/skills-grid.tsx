"use client";

import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import type { ResumeContent } from "@/types/content";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { motion, useReducedMotion } from "framer-motion";

interface SkillsGridProps {
  skills: ResumeContent["skills"];
}

function SkillsGrid({ skills }: SkillsGridProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : caseStudyRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.item;

  return (
    <section aria-labelledby="resume-skills-heading">
      <Typography variant="h2" id="resume-skills-heading">
        {skills.title}
      </Typography>

      <motion.div
        className="mt-element-md grid grid-cols-1 gap-card sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {skills.categories.map((category) => (
          <motion.article
            key={category.id}
            variants={itemVariants}
            aria-labelledby={`skill-category-${category.id}`}
            className="rounded-lg border border-border bg-surface p-card shadow-soft"
          >
            <Typography
              variant="h3"
              as="h3"
              id={`skill-category-${category.id}`}
              className="mb-element-sm"
            >
              {category.name}
            </Typography>

            <ul
              className="flex flex-wrap gap-element-sm"
              aria-label={`${category.name} skills`}
            >
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Badge variant="tag">{skill}</Badge>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export { SkillsGrid };
