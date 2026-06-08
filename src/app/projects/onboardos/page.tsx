import { CaseStudyView } from "@/components/projects/case-study-view";
import { onboardosCaseStudy } from "@/content/case-studies/onboardos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${onboardosCaseStudy.hero.title} | Alejandro Díaz`,
  description: onboardosCaseStudy.hero.subtitle,
};

export default function OnboardosPage() {
  return <CaseStudyView caseStudy={onboardosCaseStudy} />;
}
