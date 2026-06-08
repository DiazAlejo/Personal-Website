# Slice 08 — Homepage Contact CTA

## Objective

Build the final homepage section that encourages visitors to take action.

This is not the full contact page.

This section serves as the closing statement of the homepage and funnels users toward:

* Contact page
* Resume page
* LinkedIn
* GitHub

The goal is to create a strong ending without feeling sales-oriented.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

This section appears directly below the Experience Timeline.

---

# Scope

Implement ONLY:

* Homepage Contact CTA section
* CTA buttons
* Social link previews
* Homepage completion

Do NOT implement:

* Contact form
* Resume page
* Contact page functionality

---

# Section Purpose

Visitors should leave with:

```text id="goal"
Let's connect.
```

Not:

```text id="avoid"
Hire me.
```

The tone should be professional and confident.

---

# Section Header

Display:

```text id="headline"
Let's build something meaningful.
```

---

# Supporting Text

Display:

```text id="support"
Interested in software engineering,
AI systems, data platforms,
or collaboration opportunities?

I'd love to connect.
```

---

# CTA Buttons

## Primary CTA

Text:

```text id="cta1"
Contact Me
```

Destination:

```text id="route1"
/contact
```

---

## Secondary CTA

Text:

```text id="cta2"
View Resume
```

Destination:

```text id="route2"
/resume
```

---

# Social Links

Display:

* GitHub
* LinkedIn
* Email

All values must come from:

```text id="social-source"
content/socials.ts
```

No hardcoded links.

---

# Layout Requirements

## Desktop

Centered layout.

Example:

```text id="desktop"
Headline

Supporting Text

Buttons

Social Links
```

---

## Mobile

Stack vertically.

Maintain generous spacing.

---

# Visual Design

Requirements:

* Strong but clean ending
* Consistent with design system
* Premium appearance

Avoid:

* Large gradients
* Overly flashy CTAs
* Marketing language

---

# Animation Requirements

Reveal on scroll.

Allowed:

* Fade in
* Upward motion
* Staggered button reveal

Keep motion subtle.

---

# Accessibility Requirements

Requirements:

* Accessible links
* Proper button labels
* Keyboard support
* Focus states

---

# Homepage Completion

After this slice, homepage structure becomes:

```text id="homepage-complete"
Hero
↓
Impact Metrics
↓
Featured Work
↓
Experience Timeline
↓
Contact CTA
```

This represents Version 1 of the homepage.

---

# Deliverables

Create:

```text id="deliverables"
components/sections/ContactCTA.tsx
```

Update homepage composition.

---

# Explicitly Out Of Scope

Do NOT build:

Contact page

Contact form

Resume page

Project pages

Architecture diagrams

Future sections

---

# Acceptance Criteria

The slice is complete when:

* CTA section renders.
* Social links come from content layer.
* Buttons navigate correctly.
* Responsive behavior works.
* Accessibility requirements are met.
* Homepage is fully composed.
* Visual quality matches master PRD.
