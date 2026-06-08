import { CaseStudyView } from "@/components/projects/case-study-view";
import { aiResumePipelineCaseStudy } from "@/content/case-studies/ai-resume-pipeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${aiResumePipelineCaseStudy.hero.title} | Alejandro Díaz`,
  description: aiResumePipelineCaseStudy.hero.subtitle,
};

export default function AiResumePipelinePage() {
  return <CaseStudyView caseStudy={aiResumePipelineCaseStudy} />;
}
