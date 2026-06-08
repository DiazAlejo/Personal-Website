import { seo } from "@/content/seo";
import { site } from "@/content/site";
import { getCanonicalUrl } from "@/lib/seo/constants";
import {
  buildOpenGraphConfig,
  buildTwitterConfig,
} from "@/lib/seo/open-graph";
import type { Metadata } from "next";

interface PageMetadataInput {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  imageTitle?: string;
  imageSubtitle?: string;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
  imageTitle,
  imageSubtitle,
}: PageMetadataInput): Metadata {
  const formattedTitle =
    title === seo.defaultTitle ? title : `${title} | ${site.name}`;

  return {
    title: formattedTitle,
    description,
    keywords: keywords ?? seo.keywords,
    alternates: {
      canonical: getCanonicalUrl(path),
    },
    openGraph: buildOpenGraphConfig({
      title: formattedTitle,
      description,
      path,
      imageTitle,
      imageSubtitle,
    }),
    twitter: buildTwitterConfig({
      title: formattedTitle,
      description,
      imageTitle,
      imageSubtitle,
    }),
  };
}

export function createRootMetadata(): Metadata {
  return {
    metadataBase: new URL(getCanonicalUrl()),
    title: {
      default: seo.defaultTitle,
      template: `%s | ${site.name}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: getCanonicalUrl(),
    },
    openGraph: buildOpenGraphConfig({
      title: seo.defaultTitle,
      description: seo.description,
      path: "",
    }),
    twitter: buildTwitterConfig({
      title: seo.defaultTitle,
      description: seo.description,
    }),
  };
}

export function createProjectMetadata({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}): Metadata {
  const path = `/projects/${slug}`;

  return createPageMetadata({
    title,
    description,
    path,
    imageTitle: title,
    imageSubtitle: description,
  });
}
