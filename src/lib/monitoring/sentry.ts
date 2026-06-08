"use client";

import { getSentryConfig, isMonitoringEnabled } from "@/lib/analytics/config";

let initialized = false;

export async function initMonitoring(): Promise<void> {
  if (!isMonitoringEnabled() || initialized || typeof window === "undefined") {
    return;
  }

  const Sentry = await import("@sentry/react");
  const config = getSentryConfig();

  Sentry.init({
    dsn: config.dsn,
    environment: config.environment,
    tracesSampleRate: 0,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    beforeSend(event) {
      if (event.user) {
        delete event.user;
      }

      return event;
    },
  });

  initialized = true;
}

export async function captureException(
  error: unknown,
  context?: Record<string, string>,
): Promise<void> {
  if (!isMonitoringEnabled()) {
    return;
  }

  await initMonitoring();
  const Sentry = await import("@sentry/react");

  Sentry.captureException(error, {
    extra: context,
  });
}

export async function captureRouteError(
  error: Error,
  route: string,
): Promise<void> {
  await captureException(error, { route });
}
