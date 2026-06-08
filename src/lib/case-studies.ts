import { aiResumePipelineCaseStudy } from "@/content/case-studies/ai-resume-pipeline";
import { localRagAssistantCaseStudy } from "@/content/case-studies/local-rag-assistant";
import { onboardosCaseStudy } from "@/content/case-studies/onboardos";
import { waterForecastingCaseStudy } from "@/content/case-studies/water-forecasting-platform";
import type { CaseStudy } from "@/types/content";

const caseStudies: Record<string, CaseStudy> = {
  [aiResumePipelineCaseStudy.slug]: aiResumePipelineCaseStudy,
  [waterForecastingCaseStudy.slug]: waterForecastingCaseStudy,
  [onboardosCaseStudy.slug]: onboardosCaseStudy,
  [localRagAssistantCaseStudy.slug]: localRagAssistantCaseStudy,
};

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
