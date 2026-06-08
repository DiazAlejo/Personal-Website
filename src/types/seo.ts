export interface SeoPageMetadata {
  title: string;
  description: string;
}

export interface SeoConfig {
  defaultTitle: string;
  description: string;
  jobTitle: string;
  keywords: string[];
  openGraph: {
    type: "website";
    imageAlt: string;
  };
  twitter: {
    card: "summary_large_image";
  };
  pages: {
    home: SeoPageMetadata;
    projects: SeoPageMetadata;
    resume: SeoPageMetadata;
    contact: SeoPageMetadata;
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
