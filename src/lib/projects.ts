import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectPath(slug: string): string {
  return `/projects/${slug}`;
}
