export function isAnalyticsEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== "false" &&
    Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY)
  );
}

export function getPostHogConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "",
    apiHost:
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
  };
}

export function isMonitoringEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN);
}

export function getSentryConfig() {
  return {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "",
    environment: process.env.NODE_ENV ?? "development",
  };
}
