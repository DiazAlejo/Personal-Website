# Slice 14 — Resume Page

## Objective

Build a premium Resume page that complements—not replaces—the case studies.

The Resume page should be optimized for recruiters and hiring managers who want a quick overview of experience, education, skills, and achievements.

It should also provide easy access to download the PDF resume.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

---

# Scope

Implement ONLY:

* Resume page
* Resume download functionality
* Experience summary
* Education section
* Skills section
* Achievement highlights

Do NOT implement:

* Contact page
* Analytics
* SEO enhancements

---

# Route

```text
/resume
```

---

# Purpose

The page should answer:

```text
Who is Alejandro professionally?
```

within 30–60 seconds.

The detailed project stories remain in the case studies.

---

# Header Section

## Title

```text
Resume
```

## Subtitle

```text
Software Engineer building AI systems,
automation platforms, and data-driven products.
```

---

# Resume Actions

Display prominently:

## Primary Button

```text
Download PDF Resume
```

Downloads latest resume PDF.

---

## Secondary Button

```text
View Projects
```

Links to:

```text
/projects
```

---

# Professional Summary

Source from:

```text
content/resume.ts
```

Display a concise professional summary.

Use the latest resume content you provide later.

Do NOT hardcode text.

---

# Experience Section

Display experience in a clean timeline/card layout.

Show:

* Company
* Role
* Dates
* Key achievements

Use abbreviated bullet points.

Full details remain in the downloadable resume.

---

# Experience Entries

Support:

```text
Jacobs Engineering

Nagnoi
```

Architecture should allow future additions.

---

# Education Section

Display:

```text
University of Puerto Rico – Mayagüez

B.S. Software Engineering

Minor Certificate in Project Management
```

Use content layer.

---

# Skills Section

Group skills by category.

Examples:

## Languages

```text
Python
TypeScript
JavaScript
Go
SQL
Java
C++
```

## AI / ML

```text
LLMs
RAG
AutoGluon
TensorFlow
scikit-learn
Prompt Engineering
```

## Data

```text
PySpark
Palantir Foundry
PostgreSQL
Oracle
Power BI
```

## Web

```text
Next.js
React
Node.js
REST APIs
Tailwind
```

---

# Highlight Section

Create a section:

```text
Career Highlights
```

Display metrics such as:

```text
22M+ Records Processed

98% Time Reduction

56% Forecasting Improvement

40+ APIs Delivered
```

Reuse existing metric components if possible.

---

# Layout Requirements

## Desktop

Readable multi-section layout.

Avoid long walls of text.

---

## Mobile

Stack sections vertically.

Maintain readability.

---

# Animation Requirements

Subtle section reveals only.

Consistency with rest of site.

---

# Accessibility Requirements

Requirements:

* Semantic structure
* Accessible buttons
* Keyboard navigation
* Proper heading hierarchy

---

# Content Source

Create:

```text
content/resume.ts
```

All resume content should be typed and sourced from here.

No hardcoded resume data in components.

---

# Deliverables

Create:

```text
app/resume/page.tsx

components/resume/
```

Examples:

```text
ResumeHeader

ExperienceSummary

SkillsGrid

EducationSection
```

---

# Explicitly Out Of Scope

Do NOT build:

Contact page

Analytics

SEO improvements

---

# Acceptance Criteria

The slice is complete when:

* Resume page renders.
* PDF download works.
* Content comes from content layer.
* Responsive behavior works.
* Accessibility requirements are met.
* Resume feels premium and recruiter-friendly.
