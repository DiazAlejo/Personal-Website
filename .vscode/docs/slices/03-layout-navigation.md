# Slice 03 — Layout & Navigation System

## Objective

Build the global application shell and navigation framework that all pages will use.

This slice establishes:

* Root layout structure
* Navigation system
* Footer system
* Responsive behavior
* Page containers
* Global page transitions foundation

No homepage content should be implemented yet.

---

# Required Context

Read:

docs/master-prd.md

Read:

docs/slices/01-project-setup.md

Read:

docs/slices/02-design-system.md

Follow all existing architectural decisions.

---

# Scope

Implement:

* Global layout
* Navbar
* Footer
* Mobile navigation
* Navigation links
* Layout wrappers
* Page transition framework

Do NOT implement homepage sections.

Do NOT implement project pages.

Do NOT implement resume content.

Do NOT implement contact forms.

---

# Navigation Requirements

## Desktop Navigation

Links:

```text id="4mgdxw"
Home

Projects

Resume

Contact
```

Brand:

```text id="v2ev9u"
adiaz.dev
```

---

## Navigation Behavior

Initial State:

* Transparent background

Scrolled State:

* Glass blur effect
* Subtle border
* Slight background opacity

Requirements:

* Smooth transition
* Responsive
* Accessible

---

# Navbar Positioning

Sticky top navigation.

Must remain visible while scrolling.

Should feel similar to:

* Linear
* Vercel

Avoid:

* Large navigation bars
* Heavy shadows
* Excessive effects

---

# Mobile Navigation

Implement mobile menu.

Requirements:

* Accessible
* Keyboard navigable
* Smooth open/close animation
* Overlay support

Behavior:

```text id="wmh8z7"
Tap menu
↓
Open navigation panel
↓
Navigate
↓
Auto close
```

---

# Layout Components

Create:

## AppShell

Responsibilities:

* Page wrapper
* Layout consistency

---

## Navbar

Responsibilities:

* Branding
* Navigation
* Mobile menu

---

## Footer

Responsibilities:

* Site navigation
* Copyright
* Social links placeholder

---

# Footer Requirements

Simple.

Professional.

Include:

```text id="jv6u9q"
Alejandro Díaz

Software Engineer building AI systems,
automation platforms, and data-driven products.
```

Social links may use placeholders.

Final content comes later.

---

# Route Structure

Create placeholder routes:

```text id="bj22rn"
/

/projects

/resume

/contact
```

Pages may contain placeholders.

Do not implement actual content.

---

# Page Layout Pattern

Every page should use:

```text id="vghnwb"
Navbar
↓
Page Content
↓
Footer
```

through shared layout architecture.

Avoid duplication.

---

# Page Transition Framework

Install foundation only.

Requirements:

* Framer Motion integration
* Shared transition configuration
* Route transition wrapper

Do not create elaborate animations yet.

Future slices will consume this system.

---

# Active Navigation State

Requirements:

Current page should be visually highlighted.

Must work on:

* Desktop
* Mobile

---

# Accessibility Requirements

Navbar:

* Keyboard accessible
* Screen reader friendly

Mobile menu:

* Focus management
* Escape key support

Navigation:

* Semantic HTML
* Proper aria attributes

---

# Styling Requirements

Must consume design system.

Do not hardcode styles.

Use:

* design tokens
* typography system
* spacing system

from previous slices.

---

# Deliverables

Create:

```text id="u7d97t"
components/layout/

components/navigation/
```

Expected examples:

```text id="6v5a4w"
AppShell

Navbar

MobileMenu

Footer
```

---

# Explicitly Out Of Scope

Do NOT build:

Hero

Metrics

Featured work

Timeline

Resume viewer

Contact form

Project case studies

Architecture diagrams

Any homepage content

---

# Acceptance Criteria

The slice is complete when:

* Sticky navbar exists.
* Mobile navigation exists.
* Footer exists.
* Active route highlighting works.
* Placeholder routes exist.
* Layout system is reusable.
* Responsive behavior works.
* Accessibility requirements are satisfied.
* Future slices can build on this framework.
