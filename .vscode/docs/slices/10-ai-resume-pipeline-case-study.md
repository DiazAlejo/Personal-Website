# Slice 10 — AI Resume Pipeline Case Study

## Objective

Build the flagship case study for the AI Resume Pipeline project.

This is the most important project page in the portfolio and should demonstrate:

* System design thinking
* AI engineering
* Data engineering
* Business impact
* Production experience

This page should feel like a professional engineering case study rather than a project showcase.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

This slice builds:

```text
/projects/ai-resume-pipeline
```

---

# Scope

Implement ONLY:

* AI Resume Pipeline case study page
* Architecture diagram
* Project narrative
* Impact section
* Technology section

Do NOT implement:

* Other case studies
* Resume page
* Contact page

---

# Route

```text
/projects/ai-resume-pipeline
```

---

# Page Structure

The page should follow:

```text
Hero
↓
Project Overview
↓
Problem
↓
Solution
↓
Architecture
↓
Impact
↓
Technology Stack
↓
Next Project Navigation
```

---

# Hero Section

## Project Name

Display:

```text
AI Resume Pipeline
```

---

## Subtitle

Display:

```text
Enterprise AI-powered resume transformation platform built in Palantir Foundry.
```

---

## Metadata

Display:

* Production System
* Jacobs Engineering
* 2026

Use badges from the design system.

---

# Overview Section

Describe the project at a high level.

Key points:

* Built in Palantir Foundry
* Processes PDF and DOCX resumes
* Supports documents up to 23 pages and 60K+ characters
* Uses Claude Sonnet
* Generates structured outputs
* Produces formatted resume documents

Keep concise.

---

# Problem Section

Explain:

HR teams were spending hours manually processing resumes.

Challenges included:

* Large document sizes
* Inconsistent formatting
* Manual data extraction
* PII handling
* Data enrichment requirements

---

# Solution Section

Describe the system:

* Automated ingestion
* Parsing
* LLM extraction
* PII scrubbing
* HR enrichment
* Document generation
* Scheduling and orchestration

Focus on engineering decisions.

---

# Architecture Diagram

Build a visual architecture component.

Flow:

```text
Resume Upload
      ↓
Document Parser
      ↓
Claude Sonnet Extraction
      ↓
PII Scrubbing
      ↓
HR Data Enrichment
      ↓
Document Generation
      ↓
Final Resume
```

---

# Diagram Requirements

Must be:

* Responsive
* Animated on reveal
* Built as reusable component
* Accessible

Avoid image files.

Build with React components and SVG/CSS.

---

# Impact Section

Display measurable outcomes.

## Metric 1

```text
98%
Processing Time Reduction
```

---

## Metric 2

```text
4+ Hours
Original Manual Process
```

---

## Metric 3

```text
~2 Minutes
Automated Processing
```

---

## Metric 4

```text
65+
Projects Extracted
```

---

# Technology Stack

Display badges.

Examples:

```text
Palantir Foundry

Python

Claude Sonnet

LLMs

Prompt Engineering

Data Pipelines

Automation
```

---

# Engineering Highlights

Create a section called:

```text
Engineering Highlights
```

Examples:

* Chunked document processing
* Few-shot prompt engineering
* Multi-format support
* Automated scheduling
* PII protection workflows

---

# Navigation

Bottom of page:

```text
Next Case Study →
```

Destination:

```text
/ projects / water-forecasting-platform
```

---

# Content Source

Move project content into:

```text
content/projects.ts
```

The page should consume typed data.

Avoid hardcoded content inside components where practical.

---

# Animation Requirements

Allowed:

* Section reveal
* Diagram reveal
* Metric reveal
* Smooth page transitions

Keep professional.

---

# Accessibility Requirements

Requirements:

* Semantic HTML
* Proper heading hierarchy
* Screen reader support
* Keyboard navigation

---

# Deliverables

Create:

```text
app/projects/ai-resume-pipeline/page.tsx

components/projects/ArchitectureDiagram.tsx

components/projects/ImpactGrid.tsx
```

Reuse existing design system.

---

# Explicitly Out Of Scope

Do NOT build:

Water Forecasting case study

Resume page

Contact page

Contact form

Other project pages

---

# Acceptance Criteria

The slice is complete when:

* Route renders correctly.
* Architecture diagram exists.
* Impact metrics render.
* Content comes from content layer.
* Responsive behavior works.
* Accessibility requirements are met.
* Page feels like a professional engineering case study.
