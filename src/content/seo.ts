import type { SeoConfig } from "@/types/seo";

export const seo: SeoConfig = {
  defaultTitle: "Alejandro Díaz | Software Engineer",
  description:
    "Software Engineer building AI systems, machine learning platforms, automation workflows, and data-driven products.",
  jobTitle: "Software Engineer",
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Engineer",
    "Palantir Foundry",
    "Python",
    "TypeScript",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    imageAlt: "Alejandro Díaz — Software Engineer",
  },
  twitter: {
    card: "summary_large_image",
  },
  pages: {
    home: {
      title: "Alejandro Díaz | Software Engineer",
      description:
        "Software Engineer building AI systems, machine learning platforms, automation workflows, and data-driven products.",
    },
    projects: {
      title: "Projects",
      description:
        "Production systems, AI platforms, automation tools, and software engineering case studies by Alejandro Díaz.",
    },
    resume: {
      title: "Resume",
      description:
        "Resume of Alejandro Díaz — Software Engineer specializing in AI systems, automation platforms, and data-driven products.",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with Alejandro Díaz for software engineering, AI systems, data platforms, and collaboration opportunities.",
    },
  },
};
