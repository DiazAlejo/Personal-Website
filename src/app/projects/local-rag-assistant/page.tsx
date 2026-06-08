import { CaseStudyView } from "@/components/projects/case-study-view";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { localRagAssistantCaseStudy } from "@/content/case-studies/local-rag-assistant";
import { createProjectMetadata } from "@/lib/seo/metadata";

export const metadata = createProjectMetadata({
  title: localRagAssistantCaseStudy.hero.title,
  description: localRagAssistantCaseStudy.hero.subtitle,
  slug: localRagAssistantCaseStudy.slug,
});

export default function LocalRagAssistantPage() {
  return (
    <>
      <ProjectStructuredData slug={localRagAssistantCaseStudy.slug} />
      <CaseStudyView caseStudy={localRagAssistantCaseStudy} />
    </>
  );
}
