import { env } from "@/env";

export function isAnalyticsEnabled(): boolean {
  return (
    env.NEXT_PUBLIC_ANALYTICS_ENABLED !== "false" &&
    Boolean(env.NEXT_PUBLIC_POSTHOG_KEY)
  );
}

export function getPostHogConfig() {
  return {
    apiKey: env.NEXT_PUBLIC_POSTHOG_KEY ?? "",
    apiHost: env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
  };
}

export function isMonitoringEnabled(): boolean {
  return Boolean(env.NEXT_PUBLIC_SENTRY_DSN);
}

export function getSentryConfig() {
  return {
    dsn: env.NEXT_PUBLIC_SENTRY_DSN ?? "",
    environment: env.NODE_ENV,
  };
}
