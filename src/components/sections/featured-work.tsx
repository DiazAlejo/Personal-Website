"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { Typography } from "@/components/ui/typography";
import { featuredWork } from "@/content/featured-work";
import { featuredProjects } from "@/content/projects";
import { featuredWorkRevealTransition } from "@/lib/transitions";
import { motion } from "framer-motion";

function FeaturedWork() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : featuredWorkRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : featuredWorkRevealTransition.item;

  const headerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : featuredWorkRevealTransition.header;

  return (
    <Section aria-labelledby="featured-work-heading">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.header
            variants={headerVariants}
            className="mb-element-xl max-w-2xl"
          >
            <Typography variant="h2" id="featured-work-heading">
              {featuredWork.title}
            </Typography>
            <Typography
              variant="body"
              className="mt-element text-text-secondary"
            >
              {featuredWork.description}
            </Typography>
          </motion.header>

          <div className="flex flex-col gap-card">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard
                key={project.slug}
                project={project}
                variants={itemVariants}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export { FeaturedWork };
