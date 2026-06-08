"use client";

import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";

interface AnalyticsShellProps {
  children: React.ReactNode;
}

function AnalyticsShell({ children }: AnalyticsShellProps) {
  return (
    <AnalyticsProvider>
      <PageViewTracker />
      {children}
    </AnalyticsProvider>
  );
}

export { AnalyticsShell };
