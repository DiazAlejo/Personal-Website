import type { AnalyticsEventName } from "@/types/analytics";

export const ANALYTICS_EVENTS = {
  RESUME_DOWNLOADED: "resume_downloaded",
  CONTACT_CLICKED: "contact_clicked",
  PROJECT_VIEWED: "project_viewed",
  GITHUB_CLICKED: "github_clicked",
  LINKEDIN_CLICKED: "linkedin_clicked",
  CASE_STUDY_COMPLETED: "case_study_completed",
} as const satisfies Record<string, AnalyticsEventName>;
