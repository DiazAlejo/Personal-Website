import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "ai-resume-pipeline",
    title: "AI Resume Pipeline",
    subtitle: "Enterprise AI document transformation system",
    impact: "98% reduction in processing time",
    summary:
      "Enterprise AI system that transforms resume documents through automated parsing, extraction, and generation.",
    category: "Production Systems",
    tags: ["Python", "Palantir Foundry", "Claude", "Automation"],
    featured: true,
  },
  {
    slug: "water-forecasting-platform",
    title: "Water Forecasting Platform",
    subtitle: "ML forecasting across 1,107 tanks and 22M+ records",
    impact: "56% forecasting improvement",
    summary:
      "Machine learning platform for water demand forecasting across large-scale tank infrastructure.",
    category: "Data Engineering",
    tags: ["Python", "ML", "Forecasting", "Data Engineering"],
    featured: true,
  },
  {
    slug: "onboardos",
    title: "OnboardOS",
    subtitle: "Healthcare workflow and onboarding platform",
    impact: "40+ production APIs delivered",
    summary:
      "Healthcare onboarding platform streamlining workflow automation and API-driven integrations.",
    category: "Production Systems",
    tags: ["Next.js", "TypeScript", "APIs", "Healthcare"],
    featured: true,
  },
  {
    slug: "local-rag-assistant",
    title: "Local RAG Assistant",
    subtitle: "Private document intelligence system",
    impact: "Fully local retrieval-augmented generation",
    summary:
      "Private RAG system for document intelligence with fully local inference and retrieval.",
    category: "AI & ML",
    tags: ["RAG", "LLM", "Python", "Local AI"],
    featured: true,
  },
  {
    slug: "thriftuni",
    title: "ThriftUni",
    subtitle: "University marketplace platform",
    impact: "End-to-end marketplace for campus commerce",
    summary:
      "Marketplace platform connecting university students for thrift commerce.",
    category: "Personal Projects",
    tags: ["Next.js", "TypeScript", "Marketplace"],
    featured: false,
  },
  {
    slug: "trolley-tracker",
    title: "Trolley Tracker",
    subtitle: "Real-time transit tracking application",
    impact: "Live location tracking for campus transit",
    summary:
      "Mobile tracking application for real-time trolley location updates.",
    category: "Personal Projects",
    tags: ["Mobile", "Tracking", "Real-time"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
