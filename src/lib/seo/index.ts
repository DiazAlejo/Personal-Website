export {
  getCanonicalUrl,
  getOgImageUrl,
  getSiteUrl,
} from "@/lib/seo/constants";
export {
  buildOpenGraphConfig,
  buildTwitterConfig,
} from "@/lib/seo/open-graph";
export {
  buildBreadcrumbJsonLd,
  buildProjectBreadcrumbs,
} from "@/lib/seo/breadcrumbs";
export {
  createPageMetadata,
  createProjectMetadata,
  createRootMetadata,
} from "@/lib/seo/metadata";
export {
  buildGlobalStructuredData,
  buildPersonSchema,
  buildProjectPageStructuredData,
  buildProjectSchema,
  buildWebsiteSchema,
} from "@/lib/seo/structured-data";
export { getSitemapEntries } from "@/lib/seo/routes";
