import { site } from "@/content/site";

/**
 * Resolves the public site URL. Override via NEXT_PUBLIC_SITE_URL for staging
 * or alternate domains without changing content files.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }

  return `https://${site.domain}`;
}

export function getCanonicalUrl(path: string = ""): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function getOgImageUrl(params?: {
  title?: string;
  subtitle?: string;
}): string {
  const base = `${getSiteUrl()}/api/og`;
  const searchParams = new URLSearchParams();

  if (params?.title) {
    searchParams.set("title", params.title);
  }

  if (params?.subtitle) {
    searchParams.set("subtitle", params.subtitle);
  }

  const query = searchParams.toString();
  return query ? `${base}?${query}` : base;
}
