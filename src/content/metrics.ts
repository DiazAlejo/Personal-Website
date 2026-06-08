import type { Metric } from "@/types/content";

export const metrics: Metric[] = [
  {
    id: "records-processed",
    value: "22M+",
    label: "Records Processed",
    countUp: { from: 0, to: 22, suffix: "M+" },
  },
  {
    id: "processing-time-reduction",
    value: "98%",
    label: "Processing Time Reduction",
    countUp: { from: 0, to: 98, suffix: "%" },
  },
  {
    id: "forecasting-improvement",
    value: "56%",
    label: "Forecasting Improvement",
    countUp: { from: 0, to: 56, suffix: "%" },
  },
  {
    id: "industry-experience",
    value: "3+",
    label: "Years Industry Experience",
    countUp: { from: 0, to: 3, suffix: "+" },
  },
];
