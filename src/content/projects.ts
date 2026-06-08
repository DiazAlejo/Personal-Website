import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "ai-resume-pipeline",
    title: "AI Resume Pipeline",
    subtitle: "Enterprise AI document transformation system",
    impact: "98% reduction in processing time",
    summary:
      "Enterprise AI system that transforms resume documents through automated parsing, extraction, and generation.",
    tags: ["AI", "Automation", "Document Processing"],
    featured: true,
  },
  {
    slug: "water-forecasting-platform",
    title: "Water Forecasting Platform",
    subtitle: "ML forecasting across 1,107 tanks and 22M+ records",
    impact: "56% forecasting improvement",
    summary:
      "Machine learning platform for water demand forecasting across large-scale tank infrastructure.",
    tags: ["ML", "Forecasting", "Data Engineering"],
    featured: true,
  },
  {
    slug: "onboardos",
    title: "OnboardOS",
    subtitle: "Healthcare workflow and onboarding platform",
    impact: "40+ production APIs delivered",
    summary:
      "Healthcare onboarding platform streamlining workflow automation and API-driven integrations.",
    tags: ["Platform", "Healthcare", "APIs"],
    featured: true,
  },
  {
    slug: "local-rag-assistant",
    title: "Local RAG Assistant",
    subtitle: "Private document intelligence system",
    impact: "Fully local retrieval-augmented generation",
    summary:
      "Private RAG system for document intelligence with fully local inference and retrieval.",
    tags: ["RAG", "LLM", "Local AI"],
    featured: true,
  },
  {
    slug: "thriftuni",
    title: "ThriftUni",
    subtitle: "University marketplace platform",
    impact: "End-to-end marketplace for campus commerce",
    summary:
      "Marketplace platform connecting university students for thrift commerce.",
    tags: ["Web", "Marketplace"],
    featured: false,
  },
  {
    slug: "trolley-tracker",
    title: "Trolley Tracker",
    subtitle: "Real-time transit tracking application",
    impact: "Live location tracking for campus transit",
    summary:
      "Mobile tracking application for real-time trolley location updates.",
    tags: ["Mobile", "Tracking"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
