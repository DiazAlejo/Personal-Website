import type { CaseStudy } from "@/types/content";

export const waterForecastingCaseStudy: CaseStudy = {
  slug: "water-forecasting-platform",
  hero: {
    title: "Water Forecasting Platform",
    subtitle:
      "Machine learning forecasting system for PRASA infrastructure digitization.",
    badges: [
      "Production System",
      "Machine Learning",
      "Jacobs Engineering",
      "2026",
    ],
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "The Water Forecasting Platform is a machine learning system built for the PRASA infrastructure digitization initiative at Jacobs Engineering. It forecasts water tank levels across Puerto Rico's water utility infrastructure to improve operational visibility and planning.",
      "The platform processed 22M+ historical records across 1,107 water tanks, using AutoGluon time-series forecasting to generate quantile predictions and deliver actionable insights through operational dashboards.",
    ],
  },
  problem: {
    title: "Problem",
    paragraphs: [
      "Water utilities needed improved visibility into future tank levels to support proactive infrastructure management. Existing approaches lacked the scale and accuracy required for territory-wide forecasting.",
    ],
    bullets: [
      "Massive historical datasets spanning years of SCADA sensor readings",
      "Sensor noise and data quality inconsistencies across regions",
      "Missing values and gaps in time-series records",
      "Regional variation in tank behavior and consumption patterns",
      "Forecast reliability requirements for operational decision-making",
    ],
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "I engineered an end-to-end ML pipeline that ingests SCADA data, processes it at scale with PySpark, engineers predictive features, trains AutoGluon forecasting models, and delivers quantile predictions through integrated operational dashboards.",
    ],
    bullets: [
      "Automated SCADA data ingestion from utility sensor networks",
      "PySpark processing for large-scale data transformation",
      "Feature engineering with 30+ predictive variables",
      "AutoGluon model training with quantile forecasting",
      "Residual analysis and data contamination detection",
      "Regional validation framework across tank groups",
      "Dashboard integration for operational teams",
    ],
  },
  architecture: {
    title: "Architecture",
    steps: [
      { id: "scada", label: "SCADA Data" },
      { id: "pyspark", label: "PySpark Processing" },
      { id: "features", label: "Feature Engineering" },
      { id: "autogluon", label: "AutoGluon Models" },
      { id: "forecast", label: "Forecast Generation" },
      { id: "dashboard", label: "Operational Dashboard" },
    ],
  },
  impact: {
    title: "Impact",
    metrics: [
      {
        id: "records-processed",
        value: "22M+",
        label: "Records Processed",
      },
      {
        id: "water-tanks",
        value: "1,107",
        label: "Water Tanks",
      },
      {
        id: "forecasting-improvement",
        value: "56%",
        label: "Forecasting Improvement",
      },
      {
        id: "predictive-features",
        value: "30+",
        label: "Predictive Features Engineered",
      },
    ],
  },
  technologies: {
    title: "Technology Stack",
    items: [
      "PySpark",
      "Python",
      "AutoGluon",
      "Machine Learning",
      "Time-Series Forecasting",
      "Palantir Foundry",
      "SCADA Data",
    ],
  },
  highlights: {
    title: "Engineering Highlights",
    items: [
      "Time-series forecasting across 1,107 water tanks",
      "Quantile prediction for uncertainty-aware forecasts",
      "Feature engineering pipeline with 30+ predictive variables",
      "Residual analysis for model performance validation",
      "Data contamination detection across sensor networks",
      "Regional validation framework for geographically diverse tanks",
    ],
  },
  nextCaseStudy: {
    slug: "onboardos",
    label: "Next Case Study",
  },
  sectionOrder: "impact-highlights-technologies",
};
