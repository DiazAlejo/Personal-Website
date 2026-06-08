import { seo } from "@/content/seo";
import { site } from "@/content/site";
import { getCanonicalUrl, getOgImageUrl } from "@/lib/seo/constants";
import type { Metadata } from "next";

interface OpenGraphConfigInput {
  title: string;
  description: string;
  path?: string;
  imageTitle?: string;
  imageSubtitle?: string;
}

export function buildOpenGraphConfig({
  title,
  description,
  path = "",
  imageTitle,
  imageSubtitle,
}: OpenGraphConfigInput): NonNullable<Metadata["openGraph"]> {
  const url = getCanonicalUrl(path);
  const imageUrl = getOgImageUrl({
    title: imageTitle ?? title,
    subtitle: imageSubtitle ?? description,
  });

  return {
    title,
    description,
    url,
    siteName: site.name,
    type: seo.openGraph.type,
    locale: "en_US",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: seo.openGraph.imageAlt,
      },
    ],
  };
}

export function buildTwitterConfig({
  title,
  description,
  imageTitle,
  imageSubtitle,
}: Omit<OpenGraphConfigInput, "path">): NonNullable<Metadata["twitter"]> {
  const imageUrl = getOgImageUrl({
    title: imageTitle ?? title,
    subtitle: imageSubtitle ?? description,
  });

  return {
    card: seo.twitter.card,
    title,
    description,
    images: [imageUrl],
  };
}
