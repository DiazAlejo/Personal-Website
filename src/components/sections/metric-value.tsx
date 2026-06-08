"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { formatCountUpValue } from "@/lib/format-metric";
import { motion as motionConfig } from "@/lib/motion";
import type { Metric } from "@/types/content";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MetricValueProps {
  metric: Metric;
}

function MetricValue({ metric }: MetricValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(metric.value);

  useEffect(() => {
    if (!metric.countUp || prefersReducedMotion) {
      setDisplay(metric.value);
      return;
    }

    if (!isInView) {
      setDisplay(formatCountUpValue(metric.countUp.from, metric.countUp));
      return;
    }

    const controls = animate(metric.countUp.from, metric.countUp.to, {
      duration: motionConfig.duration.slower,
      ease: motionConfig.easing.smooth,
      onUpdate: (value) => {
        setDisplay(formatCountUpValue(value, metric.countUp!));
      },
    });

    return () => {
      controls.stop();
    };
  }, [isInView, metric, prefersReducedMotion]);

  return (
    <span
      ref={ref}
      className="text-h1 text-text-primary tabular-nums"
      aria-label={metric.value}
    >
      {display}
    </span>
  );
}

export { MetricValue };
