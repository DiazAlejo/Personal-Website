"use client";

import { ErrorFallback } from "@/components/shared/error-fallback";
import { errorContent } from "@/content/ui-states";
import { captureRouteError } from "@/lib/monitoring/sentry";
import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    void captureRouteError(error, window.location.pathname);
  }, [error]);

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
