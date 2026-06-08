export const analyticsContent = {
  privacy: {
    description:
      "Privacy-conscious analytics with explicit event tracking only. No personal data is collected.",
    respectDoNotTrack: true,
    sessionRecordingEnabled: false,
    autocaptureEnabled: false,
  },
  recruiterMetrics: {
    description:
      "Architecture supports future recruiter insights such as most viewed projects, resume downloads, and contact engagement.",
    plannedMetrics: [
      "Most viewed project",
      "Average session duration",
      "Resume downloads",
      "Contact clicks",
    ],
  },
} as const;
