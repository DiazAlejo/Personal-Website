import { ContactCTA } from "@/components/sections/contact-cta";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { ExperienceTimeline } from "@/components/timeline/experience-timeline";

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
