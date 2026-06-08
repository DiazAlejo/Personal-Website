import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "ai-resume-pipeline",
    title: "AI Resume Pipeline",
    subtitle:
      "Enterprise AI document transformation system in Palantir Foundry",
    impact: "98% processing time reduction — 4+ hours to ~2 minutes",
    summary:
      "Flagship enterprise AI system that automates resume ingestion, Claude Sonnet extraction, PII governance, HR data enrichment, and document generation for Jacobs Engineering hiring workflows.",
    category: "Production Systems",
    tags: ["Python", "Palantir Foundry", "Claude Sonnet", "LLMs", "Automation"],
    featured: true,
  },
  {
    slug: "water-forecasting-platform",
    title: "Water Forecasting Platform",
    subtitle:
      "ML forecasting across 1,107 water tanks and 22M+ SCADA records",
    impact: "56% forecasting improvement with production deployment",
    summary:
      "Flagship machine learning platform for PRASA water infrastructure digitization — PySpark data engineering, 30+ engineered features, AutoGluon time-series models, and operational dashboards.",
    category: "Data Engineering",
    tags: ["PySpark", "AutoGluon", "Python", "ML", "Palantir Foundry"],
    featured: true,
  },
  {
    slug: "onboardos",
    title: "OnboardOS",
    subtitle: "Full-stack healthcare workflow and onboarding platform",
    impact: "40+ REST APIs with RBAC, audit logging, and cloud deployment",
    summary:
      "Full-stack engineering platform with a custom workflow engine, role-based access control, approval pipelines, and audit logging for healthcare onboarding operations.",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Go", "PostgreSQL", "REST APIs"],
    featured: true,
  },
  {
    slug: "local-rag-assistant",
    title: "Local RAG Assistant",
    subtitle: "Private document intelligence with local LLM inference",
    impact: "Fully local RAG pipeline with Docker and REST API",
    summary:
      "Supporting AI project demonstrating local RAG infrastructure — Docker, Ollama, vector retrieval, and REST API integration without hosted inference dependencies.",
    category: "AI & ML",
    tags: ["RAG", "Docker", "Ollama", "Python", "REST API"],
    featured: true,
  },
  {
    slug: "thriftuni",
    title: "ThriftUni",
    subtitle: "Campus marketplace for university students",
    impact: "End-to-end marketplace with listings, messaging, and search",
    summary:
      "Full-stack marketplace connecting university students for thrift commerce — user listings, search, messaging, and responsive web experience built with modern TypeScript tooling.",
    category: "Personal Projects",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Marketplace"],
    featured: false,
  },
  {
    slug: "trolley-tracker",
    title: "Trolley Tracker",
    subtitle: "Real-time campus transit tracking application",
    impact: "Live location updates for campus trolley routes",
    summary:
      "Mobile-first transit tracking application providing real-time trolley location updates, route visibility, and arrival estimates for campus transportation.",
    category: "Personal Projects",
    tags: ["React Native", "Real-time", "GPS", "Mobile"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
