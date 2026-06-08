import type { SeoConfig } from "@/types/seo";

export const seo: SeoConfig = {
  defaultTitle: "Alejandro Díaz | Software Engineer",
  description:
    "Software Engineer specializing in AI systems, machine learning, data engineering, and enterprise automation. Production experience building LLM applications, forecasting systems, and Palantir Foundry pipelines at Jacobs Engineering.",
  jobTitle: "Software Engineer",
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Engineer",
    "Palantir Foundry",
    "Enterprise Automation",
    "Forecasting Systems",
    "LLM Applications",
    "Python",
    "TypeScript",
    "PySpark",
    "AutoGluon",
    "Next.js",
    "Jacobs Engineering",
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
        "Software Engineer building AI systems, machine learning platforms, and data-driven automation solutions. Enterprise production experience at Jacobs Engineering with 98% processing time reduction and 22M+ records processed.",
    },
    projects: {
      title: "Projects",
      description:
        "Production AI systems, ML forecasting platforms, enterprise automation, and full-stack engineering case studies — AI Resume Pipeline, Water Forecasting Platform, OnboardOS, and more.",
    },
    resume: {
      title: "Resume",
      description:
        "Resume of Alejandro Díaz — Software Engineer specializing in AI systems, machine learning, data engineering, Palantir Foundry, and enterprise automation at Jacobs Engineering.",
    },
    contact: {
      title: "Contact",
      description:
        "Contact Alejandro Díaz for software engineering, AI systems, machine learning, data engineering, and technical collaboration opportunities.",
    },
  },
};
