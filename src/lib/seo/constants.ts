import { env } from "@/env";

/**
 * Resolves the public site URL. Set NEXT_PUBLIC_SITE_URL in production
 * (e.g. your Vercel deployment URL).
 */
export function getSiteUrl(): string {
  if (env.NEXT_PUBLIC_SITE_URL) {
    return env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  return "http://localhost:3000";
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
