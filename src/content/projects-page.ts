import type { ProjectCategory, ProjectsPageContent } from "@/types/content";

export const projectsPage: ProjectsPageContent = {
  title: "Projects",
  description:
    "Production systems, AI platforms, ML forecasting pipelines, and full-stack engineering — built for enterprise scale and measurable business impact.",
  ctaLabel: "View Case Study",
  overviewCtaLabel: "View Overview",
  emptyStateMessage: "No projects available.",
  filterAllLabel: "All",
};

export const projectCategories: ProjectCategory[] = [
  "Production Systems",
  "AI & ML",
  "Full Stack",
  "Data Engineering",
  "Group Projects",
];
