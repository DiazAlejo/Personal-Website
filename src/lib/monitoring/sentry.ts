"use client";

import * as Sentry from "@sentry/nextjs";
import { isMonitoringEnabled } from "@/lib/analytics/config";

export async function captureException(
  error: unknown,
  context?: Record<string, string>,
): Promise<void> {
  if (!isMonitoringEnabled()) {
    return;
  }

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
