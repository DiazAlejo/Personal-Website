import { GroupProjectsView } from "@/components/projects/group-projects-view";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { groupProjectsOverview } from "@/content/group-projects-overview";
import { projects } from "@/content/projects";
import { createProjectMetadata } from "@/lib/seo/metadata";
import { getProjectBySlug } from "@/lib/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return createProjectMetadata({
    title: project.title,
    description: project.subtitle,
    slug,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (project.hasCaseStudy === false && slug === groupProjectsOverview.slug) {
    return (
      <>
        <ProjectStructuredData slug={slug} />
        <GroupProjectsView project={project} overview={groupProjectsOverview} />
      </>
    );
  }

  return (
    <>
      <ProjectStructuredData slug={slug} />
      <PagePlaceholder title={project.title} description={project.summary} />
    </>
  );
}
