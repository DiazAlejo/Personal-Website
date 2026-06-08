import { CaseStudyView } from "@/components/projects/case-study-view";
import { localRagAssistantCaseStudy } from "@/content/case-studies/local-rag-assistant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${localRagAssistantCaseStudy.hero.title} | Alejandro Díaz`,
  description: localRagAssistantCaseStudy.hero.subtitle,
};

export default function LocalRagAssistantPage() {
  return <CaseStudyView caseStudy={localRagAssistantCaseStudy} />;
}
