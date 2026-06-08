import { projects } from "@/content/projects";
import { getCanonicalUrl } from "@/lib/seo/constants";
import type { MetadataRoute } from "next";

const STATIC_ROUTES = ["/", "/projects", "/resume", "/contact"] as const;

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: getCanonicalUrl(path === "/" ? "" : path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: getCanonicalUrl(`/projects/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
