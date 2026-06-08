"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { featuredWork } from "@/content/featured-work";
import { hoverPatterns } from "@/lib/hover";
import { getProjectPath } from "@/lib/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

interface FeaturedProjectCardProps {
  project: Project;
  variants?: Variants;
}

function FeaturedProjectCard({ project, variants }: FeaturedProjectCardProps) {
  const projectPath = getProjectPath(project.slug);

  return (
    <motion.article variants={variants}>
      <Link
        href={projectPath}
        className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-label={`${featuredWork.ctaLabel}: ${project.title}`}
      >
        <Card
          variant="interactive"
          className={cn("gap-element-md", hoverPatterns.cardInteractive)}
        >
          <CardContent className="flex flex-col gap-element-md">
            <div className="flex flex-col gap-element-sm">
              <Typography variant="h3" as="h3">
                {project.title}
              </Typography>
              <Typography variant="body" className="text-text-secondary">
                {project.subtitle}
              </Typography>
            </div>

            <Typography
              variant="small"
              as="p"
              className="font-medium text-text-primary"
            >
              {project.impact}
            </Typography>

            {project.tags.length > 0 ? (
              <ul
                className="flex flex-wrap gap-element-sm"
                aria-label={`${project.title} technologies`}
              >
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="tag">{tag}</Badge>
                  </li>
                ))}
              </ul>
            ) : null}

            <span className="inline-flex items-center gap-element-xs text-small font-medium text-primary transition-[gap] duration-normal ease-default group-hover:gap-element-sm">
              {featuredWork.ctaLabel}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-normal ease-default group-hover:translate-x-0.5"
              />
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.article>
  );
}

export { FeaturedProjectCard };
