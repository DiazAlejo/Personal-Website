import { aiResumePipelineCaseStudy } from "@/content/case-studies/ai-resume-pipeline";
import { waterForecastingCaseStudy } from "@/content/case-studies/water-forecasting-platform";
import type { CaseStudy } from "@/types/content";

const caseStudies: Record<string, CaseStudy> = {
  [aiResumePipelineCaseStudy.slug]: aiResumePipelineCaseStudy,
  [waterForecastingCaseStudy.slug]: waterForecastingCaseStudy,
};

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
