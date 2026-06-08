import { ContactCTA } from "@/components/sections/contact-cta";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { ExperienceTimeline } from "@/components/timeline/experience-timeline";
import { seo } from "@/content/seo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: seo.pages.home.title,
  description: seo.pages.home.description,
  path: "",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <FeaturedWork />
      <ExperienceTimeline />
      <ContactCTA />
    </>
  );
}
