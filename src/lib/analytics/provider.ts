"use client";

import { analyticsContent } from "@/content/analytics";
import { getPostHogConfig, isAnalyticsEnabled } from "@/lib/analytics/config";
import type { PostHog } from "posthog-js";

let posthogClient: PostHog | null = null;
let initPromise: Promise<PostHog | null> | null = null;

export async function initAnalytics(): Promise<PostHog | null> {
  if (!isAnalyticsEnabled()) {
    return null;
  }

  if (posthogClient) {
    return posthogClient;
  }

  if (!initPromise) {
    initPromise = import("posthog-js").then(({ default: posthog }) => {
      const config = getPostHogConfig();

      posthog.init(config.apiKey, {
        api_host: config.apiHost,
        autocapture: analyticsContent.privacy.autocaptureEnabled,
        capture_pageview: false,
        capture_pageleave: false,
        disable_session_recording:
          !analyticsContent.privacy.sessionRecordingEnabled,
        persistence: "localStorage+cookie",
        respect_dnt: analyticsContent.privacy.respectDoNotTrack,
        person_profiles: "never",
        loaded: (client) => {
          if (process.env.NODE_ENV === "development") {
            client.debug(false);
          }
        },
      });

      posthogClient = posthog;
      return posthog;
    });
  }

  return initPromise;
}

export function getAnalyticsClient(): PostHog | null {
  return posthogClient;
}
