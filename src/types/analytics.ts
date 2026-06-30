export type AnalyticsEventName =
  | "resume_downloaded"
  | "contact_clicked"
  | "project_viewed"
  | "github_clicked"
  | "linkedin_clicked"
  | "case_study_completed"
  | "ask_ai_clicked";

export interface AnalyticsEventProperties {
  resume_downloaded: {
    source_page: string;
  };
  contact_clicked: {
    source_page: string;
  };
  project_viewed: {
    project_slug: string;
  };
  github_clicked: {
    source_page: string;
  };
  linkedin_clicked: {
    source_page: string;
  };
  case_study_completed: {
    project_slug: string;
  };
  ask_ai_clicked: {
    provider: string;
    source_page: string;
  };
}

export type AnalyticsEventPayload<T extends AnalyticsEventName> = {
  event: T;
  properties: AnalyticsEventProperties[T];
};
