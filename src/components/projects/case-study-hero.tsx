"use client";

import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { heroRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types/content";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyHeroProps {
  hero: CaseStudy["hero"];
}

function CaseStudyHero({ hero }: CaseStudyHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : heroRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : heroRevealTransition.item;

  return (
    <div
      aria-labelledby="case-study-title"
      className={cn(
        "relative overflow-hidden border-b border-border",
        "py-section-y-md",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 h-[24rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-3xl" />
      </div>

      <motion.div
        className="max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.ul
          variants={itemVariants}
          className="flex flex-wrap gap-element-sm"
          aria-label="Project metadata"
        >
          {hero.badges.map((badge) => (
            <li key={badge}>
              <Badge variant="secondary">{badge}</Badge>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={itemVariants} className="mt-element-md">
          <Typography variant="h1" id="case-study-title">
            {hero.title}
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-element-lg">
          <Typography variant="body" className="max-w-2xl text-text-secondary">
            {hero.subtitle}
          </Typography>
        </motion.div>
      </motion.div>
    </div>
  );
}

export { CaseStudyHero };
