interface BuildContentSecurityPolicyOptions {
  posthogHost?: string;
  isDevelopment?: boolean;
}

/**
 * Builds a maintainable Content Security Policy for the portfolio.
 * Supports self-hosted assets, PostHog, and Sentry ingest endpoints.
 */
export function buildContentSecurityPolicy({
  posthogHost = "https://us.i.posthog.com",
  isDevelopment = process.env.NODE_ENV === "development",
}: BuildContentSecurityPolicyOptions = {}): string {
  const posthogOrigin = new URL(posthogHost).origin;
  const posthogAppOrigin = posthogOrigin.replace("i.posthog", "posthog");

  const scriptSrc = ["'self'", "'unsafe-inline'"];

  if (isDevelopment) {
    scriptSrc.push("'unsafe-eval'");
  }

  const connectSrc = [
    "'self'",
    posthogOrigin,
    posthogAppOrigin,
    "https://*.ingest.sentry.io",
    "https://*.ingest.us.sentry.io",
  ];

  const directives: Record<string, string[]> = {
    "default-src": ["'self'"],
    "base-uri": ["'self'"],
    "form-action": ["'self'"],
    "frame-ancestors": ["'none'"],
    "frame-src": ["'self'"],
    "object-src": ["'none'"],
    "script-src": scriptSrc,
    "style-src": ["'self'", "'unsafe-inline'"],
    "img-src": ["'self'", "data:", "blob:"],
    "font-src": ["'self'"],
    "connect-src": connectSrc,
    "worker-src": ["'self'", "blob:"],
  };

  return Object.entries(directives)
    .map(([directive, values]) => `${directive} ${values.join(" ")}`)
    .join("; ");
}

/** CSP for the static HTML resume when embedded in the /resume iframe viewer. */
export function buildResumeEmbedContentSecurityPolicy(): string {
  const directives: Record<string, string[]> = {
    "default-src": ["'self'"],
    "base-uri": ["'self'"],
    "frame-ancestors": ["'self'"],
    "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    "font-src": ["'self'", "https://fonts.gstatic.com"],
    "img-src": ["'self'", "data:"],
  };

  return Object.entries(directives)
    .map(([directive, values]) => `${directive} ${values.join(" ")}`)
    .join("; ");
}
