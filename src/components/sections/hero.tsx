"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { hero } from "@/content/hero";
import { site } from "@/content/site";
import { hoverPatterns } from "@/lib/hover";
import { heroRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute top-1/3 left-1/2 h-[28rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute top-1/2 right-0 h-[20rem] w-[20rem] translate-x-1/3 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
    </div>
  );
}

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : heroRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : heroRevealTransition.item;

  return (
    <Section
      aria-labelledby="hero-headline"
      className={cn(
        "relative overflow-hidden",
        "py-section-y-md md:min-h-[calc(100vh-3.5rem)] md:py-section-y-md",
        "md:flex md:items-center",
      )}
    >
      <HeroBackground />

      <Container>
        <motion.div
          className="relative max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="small"
              as="p"
              className="font-medium tracking-wide text-text-secondary uppercase"
            >
              {site.name}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-element-md">
            <Typography variant="hero" id="hero-headline">
              {site.headline}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-element-lg">
            <Typography
              variant="body"
              className="max-w-2xl text-text-secondary"
            >
              {site.supportingStatement}
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
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className={hoverPatterns.elevation}
            >
              <Link href={hero.secondaryCta.href}>
                <Download aria-hidden="true" />
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

export { Hero };
