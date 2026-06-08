import type { Metric } from "@/types/content";

export const metrics: Metric[] = [
  {
    id: "processing-time-reduction",
    value: "98%",
    label: "Processing Time Reduction",
    countUp: { from: 0, to: 98, suffix: "%" },
  },
  {
    id: "records-processed",
    value: "22M+",
    label: "Records Processed",
    countUp: { from: 0, to: 22, suffix: "M+" },
  },
  {
    id: "forecasting-improvement",
    value: "56%",
    label: "Forecasting Improvement",
    countUp: { from: 0, to: 56, suffix: "%" },
  },
  {
    id: "apis-delivered",
    value: "40+",
    label: "REST APIs Delivered",
    countUp: { from: 0, to: 40, suffix: "+" },
  },
];
