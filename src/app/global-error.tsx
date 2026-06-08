"use client";

import { ErrorFallback } from "@/components/shared/error-fallback";
import { errorContent } from "@/content/ui-states";
import "@/styles/globals.css";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ErrorFallback
          title={errorContent.title}
          description={errorContent.description}
          retryLabel={errorContent.retryLabel}
          onRetry={reset}
          actions={errorContent.actions}
        />
      </body>
    </html>
  );
}
