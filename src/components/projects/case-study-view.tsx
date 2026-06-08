"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { CaseStudyHero } from "@/components/projects/case-study-hero";
import { CaseStudyHighlights } from "@/components/projects/case-study-highlights";
import { CaseStudyNextNav } from "@/components/projects/case-study-next-nav";
import { CaseStudySection } from "@/components/projects/case-study-section";
import { CaseStudyTechStack } from "@/components/projects/case-study-tech-stack";
import { ImpactGrid } from "@/components/projects/impact-grid";
import type { CaseStudy } from "@/types/content";

interface CaseStudyViewProps {
  caseStudy: CaseStudy;
}

function CaseStudyTailSections({ caseStudy }: { caseStudy: CaseStudy }) {
  const order = caseStudy.sectionOrder ?? "impact-technologies-highlights";

  const impact = (
    <ImpactGrid
      title={caseStudy.impact.title}
      metrics={caseStudy.impact.metrics}
    />
  );

  const highlights = (
    <CaseStudyHighlights
      title={caseStudy.highlights.title}
      items={caseStudy.highlights.items}
    />
  );

  const technologies = (
    <CaseStudyTechStack
      title={caseStudy.technologies.title}
      items={caseStudy.technologies.items}
    />
  );

  switch (order) {
    case "impact-highlights-technologies":
      return (
        <>
          {impact}
          {highlights}
          {technologies}
        </>
      );
    case "highlights-technologies-impact":
      return (
        <>
          {highlights}
          {technologies}
          {impact}
        </>
      );
    default:
      return (
        <>
          {impact}
          {technologies}
          {highlights}
        </>
      );
  }
}

function CaseStudyView({ caseStudy }: CaseStudyViewProps) {
  return (
    <article>
      <Container>
        <CaseStudyHero hero={caseStudy.hero} />
      </Container>

      <Section>
        <Container className="flex flex-col gap-section-y">
          <CaseStudySection section={caseStudy.overview} />
          <CaseStudySection section={caseStudy.problem} />
          <CaseStudySection section={caseStudy.solution} />
          <ArchitectureDiagram
            title={caseStudy.architecture.title}
            steps={caseStudy.architecture.steps}
            ariaLabel={caseStudy.architecture.ariaLabel}
          />
          <CaseStudyTailSections caseStudy={caseStudy} />
          <CaseStudyNextNav nextCaseStudy={caseStudy.nextCaseStudy} />
        </Container>
      </Section>
    </article>
  );
}

export { CaseStudyView };
