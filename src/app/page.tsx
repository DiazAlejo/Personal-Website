import { Hero } from "@/components/sections/hero";
import { seo } from "@/content/seo";
import { createPageMetadata } from "@/lib/seo/metadata";
import dynamic from "next/dynamic";

const ImpactMetrics = dynamic(
  () =>
    import("@/components/sections/impact-metrics").then(
      (mod) => mod.ImpactMetrics,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const FeaturedWork = dynamic(
  () =>
    import("@/components/sections/featured-work").then(
      (mod) => mod.FeaturedWork,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const ExperienceTimeline = dynamic(
  () =>
    import("@/components/timeline/experience-timeline").then(
      (mod) => mod.ExperienceTimeline,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const ContactCTA = dynamic(
  () =>
    import("@/components/sections/contact-cta").then((mod) => mod.ContactCTA),
  { loading: () => <SectionPlaceholder /> },
);

function SectionPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="min-h-[12rem] py-section-y md:min-h-[16rem]"
    />
  );
}

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
