# Slice 02 — Design System Foundation

## Objective

Build the reusable design system that will power the entire portfolio.

This slice establishes visual consistency and component standards before any page-specific implementation begins.

No homepage sections, project pages, timelines, contact forms, or resume functionality should be implemented.

---

# Required Context

Read:

docs/master-prd.md

Read:

docs/slices/01-project-setup.md

This slice inherits all requirements from previous documents.

---

# Scope

Implement:

* Design tokens
* Typography system
* Spacing system
* UI primitives
* Component variants
* Dark theme implementation
* Reusable visual patterns

Do NOT implement future slices.

---

# Design Philosophy

The design system should feel inspired by:

* Linear
* Vercel
* Raycast

Characteristics:

* Clean
* Premium
* Technical
* Minimal
* Professional

Avoid:

* Startup landing page gimmicks
* Neon effects
* Heavy gradients
* Excessive glassmorphism
* Gaming aesthetics

---

# Color System

Implement all colors through reusable tokens.

## Background

```css
#09090B
```

## Surface

```css
#111827
```

## Surface Secondary

```css
#1F2937
```

## Primary

```css
#1E3A8A
```

## Text Primary

```css
#F9FAFB
```

## Text Secondary

```css
#9CA3AF
```

## Border

```css
rgba(255,255,255,0.08)
```

---

# Typography System

## Font

Primary:

Geist

Fallback:

Inter

---

## Heading Scale

Create reusable typography classes.

### Hero

Largest marketing heading.

### H1

Page title.

### H2

Section title.

### H3

Card title.

### Body

Standard content.

### Small

Supporting text.

---

# Spacing System

Create consistent spacing tokens.

Examples:

```text
section spacing

container spacing

card spacing

element spacing
```

No magic numbers.

No arbitrary spacing values.

---

# Container Standards

Create reusable container patterns.

Requirements:

* Consistent max width
* Responsive behavior
* Centered layout

Must be reusable across all pages.

---

# Card System

Create a reusable Card component system.

Variants:

## Default

Standard content card.

## Elevated

Used for featured content.

## Interactive

Used for clickable content.

Requirements:

* Consistent borders
* Consistent radius
* Consistent hover behavior

---

# Button System

Create reusable button variants.

## Primary

Main CTA.

## Secondary

Supporting CTA.

## Ghost

Minimal CTA.

## Link

Text-based CTA.

Requirements:

* Accessible
* Keyboard navigable
* Consistent sizing

---

# Badge System

Create reusable badge component.

Use cases:

* Technologies
* Categories
* Tags

Examples:

```text
Python

TypeScript

AI

ML

Production System
```

---

# Divider System

Create reusable section dividers.

Must feel subtle and premium.

Avoid visually heavy separators.

---

# Motion Standards

Create reusable motion configuration.

Do not animate pages yet.

Create shared constants for:

* duration
* easing
* stagger timing

Future slices will consume these values.

---

# Hover Standards

Create reusable hover patterns.

Allowed:

* slight elevation
* subtle border highlight
* soft shadow increase

Avoid:

* aggressive scaling
* dramatic movement

---

# Accessibility

All components must support:

* keyboard navigation
* focus states
* screen readers
* proper contrast ratios

---

# Deliverables

Create:

```text
components/ui/
```

containing reusable primitives.

Examples:

```text
button

card

badge

divider
```

Use shadcn where appropriate.

Extend when necessary.

---

# Explicitly Out Of Scope

Do NOT build:

Navbar

Footer

Hero

Homepage

Timeline

Project pages

Resume page

Contact page

Architecture diagrams

Animations on actual pages

Any page-specific UI

---

# Acceptance Criteria

The slice is complete when:

* Design tokens exist.
* Typography system exists.
* Spacing system exists.
* Button variants exist.
* Card variants exist.
* Badge component exists.
* Motion configuration exists.
* Components are reusable.
* Components are accessible.
* No page-specific implementation exists.
