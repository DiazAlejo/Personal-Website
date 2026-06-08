import { getCanonicalUrl } from "@/lib/seo/constants";
import type { BreadcrumbItem } from "@/types/seo";

export function buildProjectBreadcrumbs(
  projectTitle: string,
  slug: string,
): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: projectTitle, path: `/projects/${slug}` },
  ];
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}
