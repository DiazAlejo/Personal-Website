import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="main-content">
      <Section aria-label="Foundation verification">
        <Container>
          <p className="text-sm text-text-secondary">adiaz.dev</p>
          <h1 className="mt-2 text-2xl font-semibold text-text-primary">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            {site.description}
          </p>
        </Container>
      </Section>
    </main>
  );
}
