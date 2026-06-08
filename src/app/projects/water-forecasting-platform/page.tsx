import { CaseStudyView } from "@/components/projects/case-study-view";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { waterForecastingCaseStudy } from "@/content/case-studies/water-forecasting-platform";
import { createProjectMetadata } from "@/lib/seo/metadata";

export const metadata = createProjectMetadata({
  title: waterForecastingCaseStudy.hero.title,
  description: waterForecastingCaseStudy.hero.subtitle,
  slug: waterForecastingCaseStudy.slug,
});

export default function WaterForecastingPlatformPage() {
  return (
    <>
      <ProjectStructuredData slug={waterForecastingCaseStudy.slug} />
      <CaseStudyView caseStudy={waterForecastingCaseStudy} />
    </>
  );
}
