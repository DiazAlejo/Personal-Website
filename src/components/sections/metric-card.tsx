"use client";

import { MetricValue } from "@/components/sections/metric-value";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { hoverPatterns } from "@/lib/hover";
import { cn } from "@/lib/utils";
import type { Metric } from "@/types/content";
import { motion, type Variants } from "framer-motion";

interface MetricCardProps {
  metric: Metric;
  variants?: Variants;
}

function MetricCard({ metric, variants }: MetricCardProps) {
  return (
    <motion.article
      variants={variants}
      aria-label={`${metric.value} ${metric.label}`}
    >
      <Card
        className={cn(
                "h-full",
                hoverPatterns.cardInteractive,
                hoverPatterns.borderHighlight,
        )}
      >
        <CardContent className="flex flex-col gap-element-sm">
          <MetricValue metric={metric} />
          <Typography variant="small" as="p" className="text-text-secondary">
            {metric.label}
          </Typography>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export { MetricCard };
