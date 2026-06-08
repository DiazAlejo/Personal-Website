import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Typography } from "@/components/ui/typography";

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
          <Typography
            variant="body"
            className="mt-element max-w-2xl text-text-secondary"
          >
            {description}
          </Typography>
        ) : null}
      </Container>
    </Section>
  );
}

export { PagePlaceholder };
