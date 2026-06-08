# Slice 01 — Project Setup & Foundation

## Objective

Initialize the adiaz.dev portfolio project and establish the technical foundation for all future development.

This slice focuses exclusively on project setup, tooling, architecture, and foundational configuration.

No homepage content, project pages, resume pages, contact forms, animations, or case studies should be implemented in this slice.

---

# Required Context

Before implementation, read:

docs/master-prd.md

This slice inherits all requirements from the master PRD.

---

# Scope

Implement only:

* Project initialization
* Tooling
* Design system foundation
* Folder structure
* Content architecture foundation
* Global configuration
* Theme setup

Do NOT implement future slices.

---

# Technical Requirements

## Framework

Use:

* Next.js 15 App Router
* React 19
* TypeScript

## Styling

Use:

* Tailwind CSS v4

## UI Library

Use:

* shadcn/ui

Install and configure correctly.

## Animation Library

Install:

* Framer Motion

Do not create animations yet.

Only prepare the dependency.

---

# Project Structure

The project must follow:

```text
src/

├── app/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── projects/
│   ├── timeline/
│   └── ui/
│
├── content/
│   ├── site.ts
│   ├── socials.ts
│   ├── metrics.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── projects.ts
│
├── lib/
│
├── types/
│
└── styles/
```

Create folders even if currently empty.

---

# Content Layer

Create placeholder content files:

site.ts

socials.ts

metrics.ts

skills.ts

experience.ts

projects.ts

Populate each file with strongly typed placeholder data.

Use exported TypeScript interfaces.

No JSON.

No hardcoded content inside components.

---

# Global Styling

Create foundational styling system.

Requirements:

## Typography

Primary Font:

Geist

Fallback:

Inter

Implement through Next.js font system.

---

## Color Tokens

Implement color variables matching:

Background:
#09090B

Surface:
#111827

Surface Secondary:
#1F2937

Primary:
#1E3A8A

Text Primary:
#F9FAFB

Text Secondary:
#9CA3AF

Border:
rgba(255,255,255,0.08)

These should exist as reusable design tokens.

---

# Layout Foundation

Create:

## Container Component

Reusable layout container.

Responsibilities:

* Max width
* Horizontal padding
* Responsive behavior

---

## Section Component

Reusable section wrapper.

Responsibilities:

* Vertical spacing
* Consistent section rhythm

---

# Metadata

Configure root metadata.

Temporary values:

Title:
Alejandro Díaz

Description:
Software Engineer building AI systems, automation platforms, and data-driven products.

Implement using Next.js metadata API.

---

# ESLint

Configure ESLint.

Ensure:

* No warnings
* No errors

---

# Formatting

Configure:

Prettier

Consistent formatting rules.

---

# Type Safety

Requirements:

Strict TypeScript enabled.

No usage of:

```ts
any
```

unless absolutely unavoidable.

---

# Accessibility Foundation

Ensure:

* Proper HTML language configuration
* Semantic root layout
* Accessible defaults

---

# Deliverables

By completion of this slice, the project should contain:

* Running Next.js application
* Tailwind configured
* shadcn configured
* Framer Motion installed
* Geist configured
* Folder structure created
* Content architecture created
* Design tokens configured
* Metadata configured
* Linting configured
* Formatting configured

---

# Explicitly Out Of Scope

Do NOT create:

Homepage

Navbar

Footer

Hero section

Project cards

Metrics section

Timeline

Resume page

Contact page

Animations

Forms

Project case studies

SEO enhancements

Anything defined in future slices

---

# Acceptance Criteria

The slice is complete when:

* Project builds successfully.
* No TypeScript errors exist.
* No ESLint errors exist.
* Tailwind styles render correctly.
* shadcn/ui is configured.
* Geist font is active.
* Folder structure matches requirements.
* Content files exist and are typed.
* Design tokens are configured.
* Future slices can build on this foundation.
