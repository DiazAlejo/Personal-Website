import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Typography } from "@/components/ui/typography";
import { projectsPage } from "@/content/projects-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${projectsPage.title} | Alejandro Díaz`,
  description: projectsPage.description,
};

export default function ProjectsPage() {
  return (
    <Section aria-labelledby="projects-heading">
      <Container>
        <header className="mb-element-xl max-w-2xl">
          <Typography variant="h1" id="projects-heading">
            {projectsPage.title}
          </Typography>
          <Typography variant="body" className="mt-element text-text-secondary">
            {projectsPage.description}
          </Typography>
        </header>

        <ProjectsGrid />
      </Container>
    </Section>
  );
}
