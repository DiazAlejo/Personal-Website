"use client";

import { trackCaseStudyCompleted } from "@/lib/analytics/analytics";
import { useEffect, useRef } from "react";

interface CaseStudyCompletionTrackerProps {
  projectSlug: string;
}

function CaseStudyCompletionTracker({
  projectSlug,
}: CaseStudyCompletionTrackerProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel || hasTracked.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasTracked.current) {
          return;
        }

        hasTracked.current = true;
        trackCaseStudyCompleted(projectSlug);
        observer.disconnect();
      },
      { threshold: 0.75 },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [projectSlug]);

  return (
    <div
      ref={sentinelRef}
      aria-hidden="true"
      className="pointer-events-none h-px w-full"
    />
  );
}

export { CaseStudyCompletionTracker };
