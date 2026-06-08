import type { SkillCategory } from "@/types/content";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "SQL"],
  },
  {
    id: "ai-ml",
    name: "AI & ML",
    skills: ["LLMs", "RAG", "AutoGluon", "Prompt Engineering"],
  },
  {
    id: "data",
    name: "Data",
    skills: ["PySpark", "Palantir Foundry", "ETL Pipelines", "Forecasting"],
  },
  {
    id: "web",
    name: "Web",
    skills: ["Next.js", "React", "REST APIs", "FastAPI"],
  },
];
