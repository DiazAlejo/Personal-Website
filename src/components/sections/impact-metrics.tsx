"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MetricCard } from "@/components/sections/metric-card";
import { metrics } from "@/content/metrics";
import { metricsRevealTransition } from "@/lib/transitions";
import { motion, useReducedMotion } from "framer-motion";

function ImpactMetrics() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : metricsRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : metricsRevealTransition.item;

  return (
    <Section aria-label="Impact metrics">
      <Container>
        <motion.div
          className="grid grid-cols-1 gap-card sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {metrics.map((metric) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export { ImpactMetrics };
