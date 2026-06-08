import { getSitemapEntries } from "@/lib/seo/routes";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries();
}
