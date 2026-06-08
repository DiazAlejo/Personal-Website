export {
  trackCaseStudyCompleted,
  trackContactClicked,
  trackEvent,
  trackExternalSocialClick,
  trackGitHubClicked,
  trackLinkedInClicked,
  trackProjectViewed,
  trackResumeDownload,
} from "@/lib/analytics/analytics";
export { isAnalyticsEnabled, getPostHogConfig } from "@/lib/analytics/config";
export { ANALYTICS_EVENTS } from "@/lib/analytics/events";
export { getAnalyticsClient, initAnalytics } from "@/lib/analytics/provider";
