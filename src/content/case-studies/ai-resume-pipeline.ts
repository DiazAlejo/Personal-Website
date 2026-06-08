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
      "The AI Resume Pipeline is the flagship enterprise AI system I built at Jacobs Engineering. Deployed in Palantir Foundry, it automates the complete lifecycle of candidate resume processing — from document ingestion through structured AI extraction to standardized document generation.",
      "The system handles PDF and DOCX resumes up to 23 pages and 60,000+ characters, using Claude Sonnet with a chunked extraction strategy to reliably parse complex documents. It extracts 65+ projects per resume, applies PII governance, enriches data against internal HR datasets, and produces formatted outputs ready for downstream hiring workflows.",
    ],
  },
  problem: {
    title: "Problem",
    paragraphs: [
      "HR teams were spending 4+ hours per resume on manual processing. Each document required careful review, data extraction, formatting corrections, PII handling, and enrichment before entering hiring workflows — a bottleneck that did not scale with hiring volume.",
    ],
    bullets: [
      "Large document sizes (60K+ characters) exceeding manual review capacity",
      "Inconsistent formatting across resume sources and file types",
      "Manual data extraction prone to errors, delays, and inconsistent outputs",
      "PII governance requirements across every processing stage",
      "HR data enrichment needed before final document generation",
      "No automated path from raw upload to standardized enterprise resume",
    ],
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "I designed and built a fully automated pipeline orchestrating ingestion, parsing, AI extraction, data protection, enrichment, and document generation within Palantir Foundry. Key engineering decisions centered on chunked extraction for large documents, few-shot prompt engineering for consistent structured outputs, and PII scrubbing integrated before any enrichment step.",
    ],
    bullets: [
      "Automated ingestion from HR document sources with format detection",
      "Multi-format document parsing for PDF and DOCX inputs",
      "Claude Sonnet LLM extraction with chunked processing for 60K+ character resumes",
      "Few-shot prompt engineering for consistent structured data extraction",
      "PII scrubbing workflows enforced before HR data enrichment",
      "HR data enrichment against internal enterprise datasets",
      "Automated document generation with standardized enterprise templates",
      "Scheduled orchestration for continuous batch processing",
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
        label: "Projects Extracted per Resume",
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
      "Chunked document processing strategy for 60K+ character resume files",
      "Few-shot prompt engineering achieving consistent structured extraction",
      "Multi-format support across PDF and DOCX with unified parsing pipeline",
      "PII governance workflows integrated at every processing stage",
      "HR data enrichment pipeline connecting AI outputs to enterprise datasets",
      "Automated scheduling and orchestration for production batch workloads",
    ],
  },
  nextCaseStudy: {
    slug: "water-forecasting-platform",
    label: "Next Case Study",
  },
};
