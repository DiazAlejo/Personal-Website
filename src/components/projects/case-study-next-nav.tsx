"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Divider } from "@/components/ui/divider";
import { Typography } from "@/components/ui/typography";
import { getProjectPath } from "@/lib/projects";
import { caseStudyRevealTransition } from "@/lib/transitions";
import type { CaseStudyNavigation } from "@/types/content";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyNextNavProps {
  nextCaseStudy: CaseStudyNavigation;
}

function CaseStudyNextNav({ nextCaseStudy }: CaseStudyNextNavProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.item;

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-label="Case study navigation"
    >
      <Divider className="mb-element-xl" />

      <Link
        href={
          nextCaseStudy.href ??
          getProjectPath(nextCaseStudy.slug ?? "")
        }
        className="group inline-flex items-center gap-element-sm rounded-lg text-primary transition-[gap] duration-normal ease-default hover:gap-element-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Typography variant="body" className="font-medium text-primary">
          {nextCaseStudy.label}
        </Typography>
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-normal ease-default group-hover:translate-x-0.5"
        />
      </Link>
    </motion.nav>
  );
}

export { CaseStudyNextNav };
