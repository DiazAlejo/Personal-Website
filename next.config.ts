import { withSentryConfig } from "@sentry/nextjs";
import { getSecurityHeaders } from "./src/lib/security/headers";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: getSecurityHeaders(),
      },
    ];
  },
};

const hasSentryAuthToken = Boolean(process.env.SENTRY_AUTH_TOKEN);

export default withSentryConfig(nextConfig, {
  org: "adiaz-dev",
  project: "adiaz-dev",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  widenClientFileUpload: hasSentryAuthToken,
  tunnelRoute: "/monitoring",
  sourcemaps: {
    disable: !hasSentryAuthToken,
  },
  webpack: {
    automaticVercelMonitors: false,
    treeshake: {
      removeDebugLogging: true,
    },
  },
});
