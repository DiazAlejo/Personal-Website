"use client";

import { initAnalytics } from "@/lib/analytics/provider";
import { initMonitoring } from "@/lib/monitoring/sentry";
import { useEffect } from "react";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

function scheduleIdleTask(task: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(task, { timeout: 2000 });
    return;
  }

  window.setTimeout(task, 1);
}

function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    scheduleIdleTask(() => {
      void initAnalytics();
      void initMonitoring();
    });
  }, []);

  return children;
}

export { AnalyticsProvider };
