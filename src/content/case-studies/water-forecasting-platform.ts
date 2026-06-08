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
      "The Water Forecasting Platform is the flagship machine learning system I built for the PRASA infrastructure digitization initiative at Jacobs Engineering. It forecasts water tank levels across Puerto Rico's water utility infrastructure to improve operational visibility and proactive planning.",
      "The platform processed 22M+ historical SCADA records across 1,107 water tanks. I engineered a PySpark data pipeline with 30+ predictive features, trained AutoGluon time-series models with quantile forecasting, and deployed production predictions through operational dashboards.",
    ],
  },
  problem: {
    title: "Problem",
    paragraphs: [
      "Water utilities needed reliable, territory-wide forecasting of future tank levels to support proactive infrastructure management. Existing approaches lacked the scale, accuracy, and data quality rigor required for operational decision-making across 1,107 geographically diverse tanks.",
    ],
    bullets: [
      "22M+ historical SCADA records spanning years of sensor readings",
      "Sensor noise and data quality inconsistencies across regions",
      "Missing values and temporal gaps in time-series records",
      "Regional variation in tank behavior and consumption patterns",
      "Undetected data contamination undermining model reliability",
      "Forecast accuracy requirements for production operational use",
    ],
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "I engineered an end-to-end ML pipeline — from SCADA ingestion through PySpark processing, feature engineering, AutoGluon model training, and production deployment. A critical engineering contribution was discovering and resolving data contamination through systematic residual analysis and regional validation before models reached production.",
    ],
    bullets: [
      "Automated SCADA data ingestion from utility sensor networks",
      "PySpark processing pipeline for large-scale data transformation",
      "Feature engineering with 30+ predictive variables per tank",
      "AutoGluon time-series model training with quantile forecasting",
      "Residual analysis framework for model performance validation",
      "Data contamination detection and remediation across sensor networks",
      "Regional validation framework across geographically diverse tank groups",
      "Production deployment with operational dashboard integration",
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
      "Time-series forecasting across 1,107 water tanks at production scale",
      "Quantile prediction for uncertainty-aware operational forecasts",
      "Feature engineering pipeline with 30+ predictive variables",
      "Data contamination discovery through residual analysis and investigation",
      "Regional validation framework for geographically diverse tank behavior",
      "Production deployment with operational dashboard integration",
    ],
  },
  nextCaseStudy: {
    slug: "onboardos",
    label: "Next Case Study",
  },
  sectionOrder: "impact-highlights-technologies",
};
