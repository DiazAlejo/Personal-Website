"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import type { ResumeHeader as ResumeHeaderContent } from "@/types/content";
import { hoverPatterns } from "@/lib/hover";
import { heroRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

interface ResumeHeaderProps {
  header: ResumeHeaderContent;
}

function ResumeHeader({ header }: ResumeHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : heroRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : heroRevealTransition.item;

  return (
    <header
      aria-labelledby="resume-heading"
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
        <motion.div variants={itemVariants}>
          <Typography variant="h1" id="resume-heading">
            {header.title}
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-element-md">
          <Typography variant="body" className="max-w-2xl text-text-secondary">
            {header.subtitle}
          </Typography>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-element-xl flex flex-col gap-element-sm sm:flex-row sm:items-center"
        >
          <Button
            asChild
            variant="primary"
            size="lg"
            className={hoverPatterns.elevation}
          >
            <a
              href={header.primaryAction.href}
              download={header.primaryAction.download}
            >
              <Download aria-hidden="true" />
              {header.primaryAction.label}
            </a>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className={hoverPatterns.elevation}
          >
            <Link href={header.secondaryAction.href}>
              {header.secondaryAction.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </header>
  );
}

export { ResumeHeader };
