import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
interface SectionSkeletonProps {
  className?: string;
}

function SectionSkeleton({ className }: SectionSkeletonProps) {
  return (
    <Section aria-hidden="true" className={className}>
      <Container>
        <div className="animate-pulse space-y-element-md">
          <div className="h-8 w-40 max-w-full rounded-lg bg-surface-secondary/50" />
          <div className="h-4 w-full max-w-2xl rounded-md bg-surface-secondary/35" />
          <div className="h-4 w-[80%] max-w-xl rounded-md bg-surface-secondary/30" />
          <div className="grid grid-cols-1 gap-card pt-element md:grid-cols-2">
            <div className="h-32 rounded-xl bg-surface-secondary/25" />
            <div className="h-32 rounded-xl bg-surface-secondary/25" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { SectionSkeleton };
