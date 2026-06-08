"use client";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { ExperienceEntry } from "@/types/content";
import { motion, type Variants } from "framer-motion";

interface TimelineItemProps {
  entry: ExperienceEntry;
  variants?: Variants;
}

function TimelineItem({ entry, variants }: TimelineItemProps) {
  return (
    <motion.li
      variants={variants}
      className={cn(
        "relative pb-card pl-element-xl last:pb-0",
        "rounded-lg transition-[background-color,box-shadow] duration-normal ease-default",
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
        <Typography variant="small" as="p" className="text-text-secondary">
          {entry.company}
        </Typography>
      </div>
    </motion.li>
  );
}

export { TimelineItem };
