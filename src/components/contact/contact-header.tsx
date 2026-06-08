"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Typography } from "@/components/ui/typography";
import type { ContactPageContent } from "@/types/content";
import { heroRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContactHeaderProps {
  header: ContactPageContent["header"];
}

function ContactHeader({ header }: ContactHeaderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : heroRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : heroRevealTransition.item;

  return (
    <header
      aria-labelledby="contact-heading"
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
          <Typography variant="h1" id="contact-heading">
            {header.title}
          </Typography>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-element-md flex flex-col gap-element-sm"
        >
          {header.subtitleLines.map((line) => (
            <Typography
              key={line}
              variant="body"
              className="max-w-2xl text-text-secondary"
            >
              {line}
            </Typography>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}

export { ContactHeader };
