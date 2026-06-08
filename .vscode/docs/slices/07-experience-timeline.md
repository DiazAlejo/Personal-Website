# Slice 07 — Experience Timeline Section

## Objective

Build the Experience Timeline section on the homepage.

This section should quickly communicate career progression and professional credibility.

The goal is to answer:

> "Has this person worked on real software in real organizations?"

within a few seconds.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

This section appears directly below Featured Work.

---

# Scope

Implement ONLY:

* Experience Timeline section
* Timeline component
* Timeline items
* Responsive timeline behavior

Do NOT implement:

* Contact CTA
* Resume page
* Contact page
* Project case studies

---

# Section Purpose

Visitors should immediately understand:

```text
Intern
↓
Intern
↓
Engineer
```

Career progression is more important than lengthy descriptions.

---

# Timeline Data Source

All content must come from:

```text
content/experience.ts
```

Do not hardcode experience information.

---

# Timeline Entries

## Entry 1

Company:

```text
Nagnoi
```

Role:

```text
Data & Software Engineering Intern
```

Date:

```text
May 2023 – Jul 2023
```

---

## Entry 2

Company:

```text
Jacobs Engineering
```

Role:

```text
Software Engineering Intern
```

Date:

```text
Jun 2024 – Aug 2024
```

---

## Entry 3

Company:

```text
Jacobs Engineering
```

Role:

```text
Software Engineering Intern
```

Date:

```text
May 2025 – Aug 2025
```

---

## Entry 4

Company:

```text
Jacobs Engineering
```

Role:

```text
Software Engineer
```

Date:

```text
Jan 2026 – Present
```

---

# Section Header

Display:

```text
Experience
```

Supporting text:

```text
Professional experience building software,
AI systems, and data platforms.
```

---

# Layout Requirements

## Desktop

Preferred layout:

Vertical timeline.

Example:

```text
2026
│
● Software Engineer
│ Jacobs Engineering
│

2025
│
● Software Engineering Intern
│ Jacobs Engineering
```

Clean.

Professional.

Easy to scan.

---

## Mobile

Stack vertically.

Maintain readability.

No horizontal scrolling.

---

# Timeline Item Structure

Each entry should display:

* Date
* Role
* Company

Optional:

Small summary line

Do not display long descriptions.

Those belong on the Resume page.

---

# Visual Design

Requirements:

* Thin timeline line
* Subtle node markers
* Consistent spacing
* Premium styling

Avoid:

* Large graphics
* Heavy illustrations
* Excessive decoration

---

# Animation Requirements

Reveal on scroll.

Allowed:

* Fade in
* Staggered item reveal
* Subtle line animation

Avoid:

* Dramatic motion
* Complex timeline effects

---

# Hover Behavior

Optional.

If interactive:

* Slight border emphasis
* Small elevation

Keep it subtle.

---

# Accessibility Requirements

Requirements:

* Semantic structure
* Screen-reader friendly
* Proper heading hierarchy
* Keyboard accessibility if interactive

---

# Deliverables

Create:

```text
components/timeline/ExperienceTimeline.tsx

components/timeline/TimelineItem.tsx
```

Update homepage composition:

```text
Hero
↓
Impact Metrics
↓
Featured Work
↓
Experience Timeline
```

---

# Explicitly Out Of Scope

Do NOT build:

Contact CTA

Resume page

Contact page

Project detail pages

Architecture diagrams

Future sections

---

# Acceptance Criteria

The slice is complete when:

* Timeline data comes from content layer.
* Timeline renders correctly.
* Responsive behavior works.
* Animations are implemented.
* Accessibility requirements are met.
* Visual quality matches master PRD.
* Homepage composition is updated.
