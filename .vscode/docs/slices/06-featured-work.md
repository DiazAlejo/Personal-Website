# Slice 06 — Featured Work Section

## Objective

Build the Featured Work section on the homepage.

This section introduces Alejandro's most important engineering work and serves as the bridge between the homepage and detailed case studies.

The goal is to make visitors want to explore project details.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

This section appears directly below Impact Metrics.

---

# Scope

Implement ONLY:

* Featured Work section
* Featured project cards
* Project preview layout
* Navigation to project detail pages

Do NOT implement:

* Experience Timeline
* Contact CTA
* Full case study pages
* Resume page
* Contact page

---

# Section Purpose

Visitors should immediately recognize:

```text id="purpose"
These are real engineering systems
with measurable impact.
```

Not:

```text id="avoid"
School assignments
Toy projects
Tutorial projects
```

---

# Featured Projects

Display exactly four projects.

## Project 1

```text id="project-1"
AI Resume Pipeline
```

Subtitle:

```text id="project-1-subtitle"
Enterprise AI document transformation system
```

Impact:

```text id="project-1-impact"
98% reduction in processing time
```

---

## Project 2

```text id="project-2"
Water Forecasting Platform
```

Subtitle:

```text id="project-2-subtitle"
ML forecasting across 1,107 tanks and 22M+ records
```

Impact:

```text id="project-2-impact"
56% forecasting improvement
```

---

## Project 3

```text id="project-3"
OnboardOS
```

Subtitle:

```text id="project-3-subtitle"
Healthcare workflow and onboarding platform
```

Impact:

```text id="project-3-impact"
40+ production APIs delivered
```

---

## Project 4

```text id="project-4"
Local RAG Assistant
```

Subtitle:

```text id="project-4-subtitle"
Private document intelligence system
```

Impact:

```text id="project-4-impact"
Fully local retrieval-augmented generation
```

---

# Content Source

Projects must come from:

```text id="content-source"
content/projects.ts
```

Do not hardcode project information in components.

---

# Layout Requirements

## Desktop

Display in a clean vertical list.

Recommended structure:

```text id="desktop-structure"
Project Name

Description

Impact

Read Case Study →
```

Each item should feel substantial.

Avoid tiny cards.

Avoid Pinterest-style grids.

---

## Mobile

Stack vertically.

Maintain readability.

Maintain spacing.

---

# Card Requirements

Use design system card variants.

Each project preview should contain:

* Title
* Subtitle
* Impact
* CTA

Optional:

* Technology badges

---

# CTA Requirements

Display:

```text id="cta"
Read Case Study →
```

Destination:

```text id="route"
projects/[slug]
```

Project detail pages may be placeholders for now.

Routing structure must exist.

---

# Hover Behavior

Allowed:

* Border highlight
* Slight elevation
* Subtle motion

Avoid:

* Large movement
* Dramatic scaling

---

# Animation Requirements

Reveal on scroll.

Recommended:

* Fade in
* Upward motion
* Staggered appearance

Animations should feel premium.

---

# Featured Work Header

Display:

```text id="section-header"
Featured Work
```

Supporting text:

```text id="section-support"
A selection of production systems,
AI platforms, and engineering projects.
```

---

# Accessibility Requirements

Requirements:

* Semantic HTML
* Keyboard navigation
* Accessible links
* Proper heading structure

---

# Deliverables

Create:

```text id="deliverables"
components/sections/FeaturedWork.tsx

components/projects/FeaturedProjectCard.tsx
```

Update:

```text id="homepage-update"
Home page composition
```

to include:

Hero

↓

Impact Metrics

↓

Featured Work

---

# Explicitly Out Of Scope

Do NOT build:

Experience Timeline

Contact CTA

Full case study pages

Resume page

Contact page

Architecture diagrams

Any future homepage sections

---

# Acceptance Criteria

The slice is complete when:

* Featured Work section renders.
* Data comes from content layer.
* Project preview cards render correctly.
* Navigation routes exist.
* Responsive layouts work.
* Animations are implemented.
* Accessibility requirements are met.
* Visual quality aligns with master PRD.
