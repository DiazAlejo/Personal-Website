import type { CaseStudy } from "@/types/content";

export const aiResumePipelineCaseStudy: CaseStudy = {
  slug: "ai-resume-pipeline",
  hero: {
    title: "AI Resume Pipeline",
    subtitle:
      "Enterprise AI-powered resume transformation platform built in Palantir Foundry.",
    badges: ["Production System", "Jacobs Engineering", "2026"],
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "The AI Resume Pipeline is an enterprise document transformation system built in Palantir Foundry for Jacobs Engineering. It automates the end-to-end processing of candidate resumes — from ingestion through structured extraction to formatted document generation.",
      "The system processes PDF and DOCX resumes up to 23 pages and 60,000+ characters, using Claude Sonnet to extract structured data and produce standardized, enriched resume documents ready for HR workflows.",
    ],
  },
  problem: {
    title: "Problem",
    paragraphs: [
      "HR teams were spending hours manually processing resumes. Each document required careful review, data extraction, formatting corrections, and enrichment before it could enter downstream hiring workflows.",
    ],
    bullets: [
      "Large document sizes exceeding manual review capacity",
      "Inconsistent formatting across resume sources",
      "Manual data extraction prone to errors and delays",
      "PII handling requirements across processing stages",
      "HR data enrichment needed before final document output",
    ],
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "I designed and built a fully automated pipeline that orchestrates ingestion, parsing, AI extraction, data protection, enrichment, and document generation within Palantir Foundry.",
    ],
    bullets: [
      "Automated ingestion from HR document sources",
      "Multi-format document parsing for PDF and DOCX",
      "Claude Sonnet LLM extraction with few-shot prompting",
      "PII scrubbing workflows before data enrichment",
      "HR data enrichment against internal datasets",
      "Automated document generation with standardized templates",
      "Scheduled orchestration for continuous processing",
    ],
  },
  architecture: {
    title: "Architecture",
    steps: [
      { id: "upload", label: "Resume Upload" },
      { id: "parser", label: "Document Parser" },
      { id: "extraction", label: "Claude Sonnet Extraction" },
      { id: "pii", label: "PII Scrubbing" },
      { id: "enrichment", label: "HR Data Enrichment" },
      { id: "generation", label: "Document Generation" },
      { id: "output", label: "Final Resume" },
    ],
  },
  impact: {
    title: "Impact",
    metrics: [
      {
        id: "time-reduction",
        value: "98%",
        label: "Processing Time Reduction",
      },
      {
        id: "manual-process",
        value: "4+ Hours",
        label: "Original Manual Process",
      },
      {
        id: "automated-process",
        value: "~2 Minutes",
        label: "Automated Processing",
      },
      {
        id: "projects-extracted",
        value: "65+",
        label: "Projects Extracted",
      },
    ],
  },
  technologies: {
    title: "Technology Stack",
    items: [
      "Palantir Foundry",
      "Python",
      "Claude Sonnet",
      "LLMs",
      "Prompt Engineering",
      "Data Pipelines",
      "Automation",
    ],
  },
  highlights: {
    title: "Engineering Highlights",
    items: [
      "Chunked document processing for large resume files",
      "Few-shot prompt engineering for consistent extraction",
      "Multi-format support across PDF and DOCX inputs",
      "Automated scheduling and pipeline orchestration",
      "PII protection workflows integrated at each stage",
    ],
  },
  nextCaseStudy: {
    slug: "water-forecasting-platform",
    label: "Next Case Study",
  },
};
