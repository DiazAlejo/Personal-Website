import { aiResumePipelineCaseStudy } from "@/content/case-studies/ai-resume-pipeline";
import type { CaseStudy } from "@/types/content";

const caseStudies: Record<string, CaseStudy> = {
  [aiResumePipelineCaseStudy.slug]: aiResumePipelineCaseStudy,
};

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
