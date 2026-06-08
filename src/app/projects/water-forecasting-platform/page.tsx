import { CaseStudyView } from "@/components/projects/case-study-view";
import { waterForecastingCaseStudy } from "@/content/case-studies/water-forecasting-platform";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${waterForecastingCaseStudy.hero.title} | Alejandro Díaz`,
  description: waterForecastingCaseStudy.hero.subtitle,
};

export default function WaterForecastingPlatformPage() {
  return <CaseStudyView caseStudy={waterForecastingCaseStudy} />;
}
