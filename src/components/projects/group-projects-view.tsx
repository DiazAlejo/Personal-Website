import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import type { GroupProjectsOverview, Project } from "@/types/content";

interface GroupProjectsViewProps {
  project: Project;
  overview: GroupProjectsOverview;
}

function GroupProjectsView({ project, overview }: GroupProjectsViewProps) {
  return (
    <>
      <Section className="page-header-accent border-b border-border py-section-y-md">
        <Container>
          <div className="flex max-w-3xl flex-col gap-element-md">
            <Badge variant="secondary" className="w-fit">
              {project.category}
            </Badge>
            <Typography variant="h1" id="group-projects-title">
              {project.title}
            </Typography>
            <Typography variant="body" className="text-lg text-text-secondary">
              {project.subtitle}
            </Typography>
            <Typography variant="body" className="text-text-secondary">
              {overview.intro}
            </Typography>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="flex max-w-3xl flex-col gap-section-y-sm">
          <div>
            <Typography variant="h2">What I worked on</Typography>
            <ul className="mt-element-md flex list-disc flex-col gap-element-sm pl-5 text-text-secondary">
              {overview.highlights.map((item) => (
                <li key={item}>
                  <Typography variant="body" as="span">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="h2">Selected examples</Typography>
            <div className="mt-element-md flex flex-col gap-element-lg">
              {overview.examples.map((example) => (
                <article
                  key={example.title}
                  className="rounded-xl border border-border bg-surface p-element-lg"
                >
                  <Typography variant="h3">{example.title}</Typography>
                  <Typography
                    variant="body"
                    className="mt-element-sm text-text-secondary"
                  >
                    {example.description}
                  </Typography>
                  <ul
                    className="mt-element-md flex flex-wrap gap-element-sm"
                    aria-label={`${example.title} technologies`}
                  >
                    {example.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="tag">{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export { GroupProjectsView };
