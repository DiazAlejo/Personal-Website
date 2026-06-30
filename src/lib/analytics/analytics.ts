import { ANALYTICS_EVENTS } from "@/lib/analytics/events";
import { initAnalytics } from "@/lib/analytics/provider";
import type {
  AnalyticsEventName,
  AnalyticsEventProperties,
} from "@/types/analytics";

async function trackEvent<T extends AnalyticsEventName>(
  event: T,
  properties: AnalyticsEventProperties[T],
): Promise<void> {
  const client = await initAnalytics();

  if (!client) {
    return;
  }

  client.capture(event, properties);
}

export function trackResumeDownload(sourcePage: string): void {
  void trackEvent(ANALYTICS_EVENTS.RESUME_DOWNLOADED, {
    source_page: sourcePage,
  });
}

export function trackContactClicked(sourcePage: string): void {
  void trackEvent(ANALYTICS_EVENTS.CONTACT_CLICKED, {
    source_page: sourcePage,
  });
}

export function trackProjectViewed(projectSlug: string): void {
  void trackEvent(ANALYTICS_EVENTS.PROJECT_VIEWED, {
    project_slug: projectSlug,
  });
}

export function trackGitHubClicked(sourcePage: string): void {
  void trackEvent(ANALYTICS_EVENTS.GITHUB_CLICKED, {
    source_page: sourcePage,
  });
}

export function trackLinkedInClicked(sourcePage: string): void {
  void trackEvent(ANALYTICS_EVENTS.LINKEDIN_CLICKED, {
    source_page: sourcePage,
  });
}

export function trackCaseStudyCompleted(projectSlug: string): void {
  void trackEvent(ANALYTICS_EVENTS.CASE_STUDY_COMPLETED, {
    project_slug: projectSlug,
  });
}

export function trackExternalSocialClick(
  linkName: string,
  sourcePage: string,
): void {
  if (linkName === "GitHub") {
    trackGitHubClicked(sourcePage);
    return;
  }

  if (linkName === "LinkedIn") {
    trackLinkedInClicked(sourcePage);
  }
}

export { trackEvent };
