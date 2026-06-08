import type { ProjectCategory, ProjectsPageContent } from "@/types/content";

export const projectsPage: ProjectsPageContent = {
  title: "Projects",
  description:
    "A collection of production systems, AI platforms, automation tools, and software engineering projects.",
  ctaLabel: "View Case Study",
  emptyStateMessage: "No projects available.",
  filterAllLabel: "All",
};

export const projectCategories: ProjectCategory[] = [
  "Production Systems",
  "AI & ML",
  "Full Stack",
  "Data Engineering",
  "Personal Projects",
];
