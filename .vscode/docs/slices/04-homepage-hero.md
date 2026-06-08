# Slice 04 — Homepage Hero Section

## Objective

Build the homepage hero section.

This is the first piece of actual user-facing content and will establish the first impression of the portfolio.

The hero should immediately communicate:

* Who Alejandro is
* What Alejandro does
* Why visitors should continue exploring

---

# Required Context

Read:

docs/master-prd.md

Read:

docs/slices/01-project-setup.md

Read:

docs/slices/02-design-system.md

Read:

docs/slices/03-layout-navigation.md

Follow all previously established architecture and design decisions.

---

# Scope

Implement ONLY:

* Homepage hero section
* Hero content
* Hero CTAs
* Hero responsive behavior
* Hero animations

Do NOT implement:

* Metrics
* Featured Work
* Timeline
* Contact CTA
* Any other homepage sections

---

# Hero Content

## Name

Display:

```text id="hero-name"
Alejandro Díaz
```

---

## Primary Headline

Display:

```text id="hero-headline"
Software Engineer building AI systems,
automation platforms, and data-driven products.
```

This is the most important text on the website.

Requirements:

* Visually dominant
* Excellent readability
* Strong typography hierarchy

---

## Supporting Statement

Display:

```text id="hero-supporting"
Currently developing production AI and ML solutions
at Jacobs Engineering.
```

Requirements:

* Secondary visual weight
* Clear and concise

---

# CTA Buttons

## Primary CTA

Text:

```text id="cta-primary"
View Projects
```

Destination:

```text id="cta-primary-route"
/projects
```

---

## Secondary CTA

Text:

```text id="cta-secondary"
Download Resume
```

Destination:

Temporary placeholder until Resume slice.

---

# Layout Requirements

Desktop:

```text id="hero-desktop"
Headline

Supporting Text

CTA Buttons
```

Clean vertical flow.

No unnecessary elements.

---

Mobile:

Fully responsive.

Maintain visual hierarchy.

No text overflow.

No cramped spacing.

---

# Visual Style

Requirements:

* Minimal
* Premium
* Professional
* Engineering-focused

Avoid:

* Marketing jargon
* Excessive decoration
* Large gradients
* Distracting visuals

---

# Hero Width

Do NOT allow the hero text to span the entire screen.

Use constrained readable width.

The headline should feel intentional and readable.

---

# Animation Requirements

Use subtle motion only.

Allowed:

### Initial Reveal

* Fade in
* Slight upward motion

### CTA Hover

* Subtle elevation
* Smooth transition

### Text Reveal

Optional staggered reveal.

Must remain tasteful.

---

# Background Requirements

Keep background simple.

Allowed:

* Subtle radial glow
* Soft gradient accents
* Minimal texture

Avoid:

* Particle effects
* Animated backgrounds
* 3D graphics
* Moving shapes

---

# Accessibility

Requirements:

* Proper heading hierarchy
* Keyboard accessible buttons
* Sufficient contrast
* Screen reader support

---

# SEO

Homepage hero headline should remain the primary H1.

Only one H1 on the page.

---

# Deliverables

Create:

```text id="deliverables"
Hero Section Component
```

Expected examples:

```text id="components"
components/sections/Hero.tsx
```

Homepage should render hero section.

---

# Explicitly Out Of Scope

Do NOT build:

Metrics section

Featured work

Timeline

Contact CTA

Resume viewer

Project pages

Contact form

Architecture diagrams

Any future homepage section

---

# Acceptance Criteria

The slice is complete when:

* Hero renders correctly.
* Typography hierarchy is clear.
* CTAs function correctly.
* Responsive behavior works.
* Accessibility requirements are met.
* Hero animations are implemented.
* Design matches master PRD direction.
