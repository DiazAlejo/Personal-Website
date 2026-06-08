"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CareerHighlights } from "@/components/resume/career-highlights";
import { EducationSection } from "@/components/resume/education-section";
import { ExperienceSummary } from "@/components/resume/experience-summary";
import { ResumeHeader } from "@/components/resume/resume-header";
import { ResumeSummary } from "@/components/resume/resume-summary";
import { SelectedProjects } from "@/components/resume/selected-projects";
import { SkillsGrid } from "@/components/resume/skills-grid";
import { resume } from "@/content/resume";

function ResumeView() {
  return (
    <article>
      <Container>
        <ResumeHeader header={resume.header} />
      </Container>

      <Section>
        <Container className="flex flex-col gap-section-y">
          <ResumeSummary summary={resume.summary} />
          <SelectedProjects
            title={resume.selectedProjects.title}
            entries={resume.selectedProjects.entries}
          />
          <ExperienceSummary experience={resume.experience} />
          <EducationSection education={resume.education} />
          <SkillsGrid skills={resume.skills} />
          <CareerHighlights highlights={resume.highlights} />
        </Container>
      </Section>
    </article>
  );
}

export { ResumeView };
