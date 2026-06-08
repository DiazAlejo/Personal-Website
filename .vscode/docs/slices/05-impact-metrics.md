# Slice 05 — Impact Metrics Section

## Objective

Build the Impact Metrics section directly beneath the homepage hero.

This section exists to immediately validate credibility through measurable outcomes rather than skills, certifications, or technology buzzwords.

The goal is for visitors to quickly understand the scale and impact of Alejandro's work.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

This slice builds directly underneath the Hero section.

---

# Scope

Implement ONLY:

* Impact Metrics section
* Metric cards
* Metric animations
* Responsive layout

Do NOT implement:

* Featured Work
* Experience Timeline
* Contact CTA
* Any future homepage sections

---

# Section Purpose

Instead of saying:

```text id="bad-example"
Python
React
SQL
Machine Learning
```

the site should show outcomes.

This section should communicate:

```text id="goal-message"
This engineer delivers measurable results.
```

---

# Metrics

Display exactly:

## Metric 1

```text id="metric-1"
22M+

Records Processed
```

---

## Metric 2

```text id="metric-2"
98%

Processing Time Reduction
```

---

## Metric 3

```text id="metric-3"
56%

Forecasting Improvement
```

---

## Metric 4

```text id="metric-4"
3+

Years Industry Experience
```

---

# Layout Requirements

## Desktop

Display metrics in a horizontal grid.

Example:

```text id="desktop-layout"
22M+ | 98% | 56% | 3+
```

with appropriate spacing.

---

## Tablet

Two-by-two layout.

---

## Mobile

Single-column stack.

Must remain highly readable.

---

# Card Design

Each metric should appear inside a reusable card component.

Requirements:

* Consistent spacing
* Subtle border
* Dark surface styling
* Premium appearance

Avoid:

* Large shadows
* Flashy effects
* Heavy gradients

---

# Typography Requirements

Metric value:

Large and visually dominant.

Metric label:

Secondary emphasis.

Example hierarchy:

```text id="typography"
22M+

Records Processed
```

---

# Animation Requirements

## Initial Reveal

Metrics animate into view.

Allowed:

* Fade in
* Upward motion
* Staggered reveal

---

## Count-Up Animation

Allowed only when tasteful.

Examples:

```text id="countup"
22M+

98%

56%

3+
```

Animation must be smooth.

No gimmicks.

---

# Hover Behavior

Subtle interaction.

Allowed:

* Slight elevation
* Border highlight

Avoid:

* Large scaling
* Aggressive movement

---

# Accessibility Requirements

Each metric card must:

* Be keyboard accessible if interactive
* Maintain proper contrast
* Support screen readers

---

# Reusability

Metrics must come from:

```text id="metrics-source"
content/metrics.ts
```

Do not hardcode metric values directly inside the component.

---

# Deliverables

Create:

```text id="deliverables"
components/sections/ImpactMetrics.tsx

content/metrics.ts
```

if not already present.

Use typed content structures.

---

# Explicitly Out Of Scope

Do NOT build:

Featured Work

Experience Timeline

Contact CTA

Project pages

Resume page

Contact page

Architecture diagrams

Any future homepage section

---

# Acceptance Criteria

The slice is complete when:

* Metrics render from content layer.
* Responsive layouts work.
* Metric cards use design system.
* Animations are implemented.
* Accessibility requirements are met.
* Visual hierarchy is clear.
* Section matches master PRD direction.
