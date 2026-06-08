import type { SkillCategory } from "@/types/content";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["TypeScript", "Python", "SQL"],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    skills: ["Next.js", "React", "FastAPI"],
  },
  {
    id: "ai-ml",
    name: "AI & ML",
    skills: ["LLM Integration", "RAG", "Model Evaluation"],
  },
  {
    id: "data",
    name: "Data",
    skills: ["ETL Pipelines", "Data Warehousing", "Forecasting"],
  },
];
