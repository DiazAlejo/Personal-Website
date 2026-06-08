import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { ImpactMetrics } from "@/components/sections/impact-metrics";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <FeaturedWork />
    </>
  );
}
