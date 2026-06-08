import { Hero } from "@/components/sections/hero";
import { SectionSkeleton } from "@/components/shared/section-skeleton";
import { seo } from "@/content/seo";
import { createPageMetadata } from "@/lib/seo/metadata";
import dynamic from "next/dynamic";

const ImpactMetrics = dynamic(
  () =>
    import("@/components/sections/impact-metrics").then(
      (mod) => mod.ImpactMetrics,
    ),
  { loading: () => <SectionSkeleton /> },
);

const FeaturedWork = dynamic(
  () =>
    import("@/components/sections/featured-work").then(
      (mod) => mod.FeaturedWork,
    ),
  { loading: () => <SectionSkeleton /> },
);

const ExperienceTimeline = dynamic(
  () =>
    import("@/components/timeline/experience-timeline").then(
      (mod) => mod.ExperienceTimeline,
    ),
  { loading: () => <SectionSkeleton /> },
);

const ContactCTA = dynamic(
  () =>
    import("@/components/sections/contact-cta").then((mod) => mod.ContactCTA),
  { loading: () => <SectionSkeleton /> },
);

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
