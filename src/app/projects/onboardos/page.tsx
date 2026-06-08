import { CaseStudyView } from "@/components/projects/case-study-view";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { onboardosCaseStudy } from "@/content/case-studies/onboardos";
import { createProjectMetadata } from "@/lib/seo/metadata";

export const metadata = createProjectMetadata({
  title: onboardosCaseStudy.hero.title,
  description: onboardosCaseStudy.hero.subtitle,
  slug: onboardosCaseStudy.slug,
});

export default function OnboardosPage() {
  return (
    <>
      <ProjectStructuredData slug={onboardosCaseStudy.slug} />
      <CaseStudyView caseStudy={onboardosCaseStudy} />
    </>
  );
}
