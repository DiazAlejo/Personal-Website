import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { EmptyState } from "@/components/shared/empty-state";
import { Typography } from "@/components/ui/typography";
import { emptyStateContent } from "@/content/ui-states";

interface PagePlaceholderProps {
  title: string;
  description?: string;
}

function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <Section>
      <Container>
        <Typography variant="h1">{title}</Typography>
        {description ? (
          <EmptyState
            title={emptyStateContent.caseStudy.title}
            description={description}
            className="mt-element-xl max-w-2xl"
          />
        ) : null}
      </Container>
    </Section>
  );
}

export { PagePlaceholder };
