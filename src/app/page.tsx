import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Typography } from "@/components/ui/typography";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="main-content">
      <Section aria-label="Foundation verification">
        <Container>
          <Typography variant="small">{site.domain}</Typography>
          <Typography variant="h1" className="mt-element-sm">
            {site.name}
          </Typography>
          <Typography
            variant="body"
            className="mt-element max-w-2xl text-text-secondary"
          >
            {site.description}
          </Typography>
        </Container>
      </Section>
    </main>
  );
}
