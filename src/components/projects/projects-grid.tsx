"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { emptyStateContent } from "@/content/ui-states";
import { projects } from "@/content/projects";
import { projectCategories, projectsPage } from "@/content/projects-page";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { projectsGridRevealTransition } from "@/lib/transitions";
import type { ProjectCategory } from "@/types/content";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type ProjectFilter = "all" | ProjectCategory;

function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const prefersReducedMotion = usePrefersReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : projectsGridRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : projectsGridRevealTransition.item;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-element-xl flex flex-wrap gap-element-sm"
      >
        <Button
          type="button"
          variant={activeFilter === "all" ? "secondary" : "ghost"}
          size="sm"
          aria-pressed={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        >
          {projectsPage.filterAllLabel}
        </Button>

        {projectCategories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={activeFilter === category ? "secondary" : "ghost"}
            size="sm"
            aria-pressed={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <EmptyState
          title={emptyStateContent.projects.title}
          description={projectsPage.emptyStateMessage}
        />
      ) : (
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 gap-card md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export { ProjectsGrid };
