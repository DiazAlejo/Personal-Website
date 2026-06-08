import { CaseStudyView } from "@/components/projects/case-study-view";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { aiResumePipelineCaseStudy } from "@/content/case-studies/ai-resume-pipeline";
import { createProjectMetadata } from "@/lib/seo/metadata";

export const metadata = createProjectMetadata({
  title: aiResumePipelineCaseStudy.hero.title,
  description: aiResumePipelineCaseStudy.hero.subtitle,
  slug: aiResumePipelineCaseStudy.slug,
});

export default function AiResumePipelinePage() {
  return (
    <>
      <ProjectStructuredData slug={aiResumePipelineCaseStudy.slug} />
      <CaseStudyView caseStudy={aiResumePipelineCaseStudy} />
    </>
  );
}
