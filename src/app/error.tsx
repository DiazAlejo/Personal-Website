"use client";

import { ErrorFallback } from "@/components/shared/error-fallback";
import { errorContent } from "@/content/ui-states";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <ErrorFallback
      title={errorContent.title}
      description={errorContent.description}
      retryLabel={errorContent.retryLabel}
      onRetry={reset}
      actions={errorContent.actions}
    />
  );
}
