import { seo } from "@/content/seo";
import { socials } from "@/content/socials";
import { site } from "@/content/site";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumbs";
import { getCanonicalUrl } from "@/lib/seo/constants";
import { getProjectBySlug } from "@/lib/projects";
import type { BreadcrumbItem } from "@/types/seo";

export function buildPersonSchema() {
  const sameAs = socials.links
    .map((link) => link.url)
    .filter((url) => !url.startsWith("mailto:"));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: seo.jobTitle,
    url: getCanonicalUrl(),
    sameAs,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: getCanonicalUrl(),
    description: seo.description,
    author: {
      "@type": "Person",
      name: site.name,
    },
  };
}

export function buildProjectSchema(slug: string) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: getCanonicalUrl(`/projects/${slug}`),
    author: {
      "@type": "Person",
      name: site.name,
      url: getCanonicalUrl(),
    },
    keywords: project.tags.join(", "),
  };
}

export function buildProjectPageStructuredData(
  slug: string,
): Record<string, unknown>[] {
  const project = getProjectBySlug(slug);

  if (!project) {
    return [];
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${slug}` },
  ];

  const projectSchema = buildProjectSchema(slug);
  const schemas: Record<string, unknown>[] = [
    buildBreadcrumbJsonLd(breadcrumbs),
  ];

  if (projectSchema) {
    schemas.unshift(projectSchema);
  }

  return schemas;
}

export function buildGlobalStructuredData(): Record<string, unknown>[] {
  return [buildPersonSchema(), buildWebsiteSchema()];
}
