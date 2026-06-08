# Slice 09 — Projects Index Page

## Objective

Build the Projects Index page.

This page acts as the gateway to all project case studies and should showcase Alejandro's engineering work in a structured, professional way.

Unlike the homepage's Featured Work section, this page displays the complete project catalog.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

---

# Scope

Implement ONLY:

* Projects page
* Project listing system
* Project filtering structure (foundation only)
* Project navigation
* Project preview cards

Do NOT implement:

* Individual case study content
* Resume page
* Contact page

---

# Route

```text id="route"
/projects
```

---

# Purpose

Visitors should immediately understand:

```text id="purpose"
These are engineering projects,
not portfolio filler.
```

The page should feel closer to:

* Engineering case studies
* Product portfolio
* Technical showcase

than

* Gallery
* Blog
* Student portfolio

---

# Header Section

Display:

## Title

```text id="title"
Projects
```

---

## Supporting Text

```text id="subtitle"
A collection of production systems,
AI platforms, automation tools,
and software engineering projects.
```

---

# Content Source

All project information must come from:

```text id="content-source"
content/projects.ts
```

No hardcoded content.

---

# Project Categories

Support categories in data model.

Examples:

```text id="categories"
Production Systems

AI & ML

Full Stack

Data Engineering

Personal Projects
```

Filtering UI may be visually present but functionality can remain simple for now.

---

# Projects To Display

Include:

```text id="project-list"
AI Resume Pipeline

Water Forecasting Platform

OnboardOS

Local RAG Assistant

ThriftUni

Trolley Tracker
```

Future projects should be easy to add through content files.

---

# Project Card Requirements

Each card should display:

## Title

Example:

```text id="card-title"
AI Resume Pipeline
```

---

## Subtitle

Short project description.

---

## Category

Example:

```text id="category"
Production System
```

---

## Technologies

Display technology badges.

Examples:

```text id="tech"
Python

Palantir Foundry

Claude

Next.js
```

---

## CTA

Display:

```text id="cta"
View Case Study →
```

---

# Layout Requirements

## Desktop

Responsive grid.

Recommended:

```text id="desktop-grid"
2 columns
```

or

```text id="desktop-grid-alt"
3 columns
```

depending on visual quality.

---

## Tablet

Responsive reduction.

---

## Mobile

Single column.

---

# Hover Behavior

Allowed:

* Border emphasis
* Slight elevation
* Smooth transitions

Avoid:

* Large scaling
* Dramatic motion

---

# Empty State Support

Create reusable support for future cases:

```text id="empty-state"
No projects available.
```

Should never appear now but architecture should support it.

---

# Routing Requirements

Every card links to:

```text id="routing"
/projects/[slug]
```

Examples:

```text id="routes"
projects/ai-resume-pipeline

projects/water-forecasting-platform

projects/onboardos

projects/local-rag-assistant

projects/thriftuni

projects/trolley-tracker
```

Pages may temporarily contain placeholders until later slices.

---

# Animation Requirements

Reveal on scroll.

Allowed:

* Fade in
* Staggered cards
* Subtle hover motion

Must remain professional.

---

# Accessibility Requirements

Requirements:

* Semantic HTML
* Accessible links
* Keyboard navigation
* Proper heading structure

---

# Deliverables

Create:

```text id="deliverables"
app/projects/page.tsx

components/projects/ProjectCard.tsx

components/projects/ProjectsGrid.tsx
```

Update routing structure.

---

# Explicitly Out Of Scope

Do NOT build:

Case study content

Resume page

Contact page

Contact form

Architecture diagrams

Future project pages

---

# Acceptance Criteria

The slice is complete when:

* Projects page renders.
* Data comes from content layer.
* Responsive grid works.
* Cards link correctly.
* Accessibility requirements are met.
* Future case studies can plug into the architecture.
