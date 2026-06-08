"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { projectsPage } from "@/content/projects-page";
import { getProjectPath } from "@/lib/projects";
import type { Project } from "@/types/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  variants?: Variants;
}

function ProjectCard({ project, variants }: ProjectCardProps) {
  const projectPath = getProjectPath(project.slug);

  return (
    <motion.article variants={variants}>
      <Link
        href={projectPath}
        className="group block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-label={`${projectsPage.ctaLabel}: ${project.title}`}
      >
        <Card
          variant="interactive"
          className="h-full gap-element-md transition-[transform,box-shadow,border-color] duration-normal ease-default"
        >
          <CardContent className="flex h-full flex-col gap-element-md">
            <div className="flex flex-col gap-element-sm">
              <Badge variant="secondary" className="w-fit">
                {project.category}
              </Badge>
              <Typography variant="h3" as="h3">
                {project.title}
              </Typography>
              <Typography variant="body" className="text-text-secondary">
                {project.subtitle}
              </Typography>
            </div>

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

            <span className="mt-auto inline-flex items-center gap-element-xs text-small font-medium text-primary transition-[gap] duration-normal ease-default group-hover:gap-element-sm">
              {projectsPage.ctaLabel}
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

export { ProjectCard };
