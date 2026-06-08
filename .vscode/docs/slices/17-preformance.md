# Slice 17 — Performance, Accessibility & Quality Audit

## Objective

Bring the portfolio to production-grade quality.

This slice focuses on:

* Core Web Vitals
* Accessibility
* Lighthouse scores
* Bundle optimization
* UX polish
* Technical excellence

The target is a portfolio that demonstrates engineering discipline, not just design skills.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

The site should be feature-complete before starting this slice.

---

# Scope

Implement ONLY:

* Performance improvements
* Accessibility improvements
* Code quality improvements
* Lighthouse optimization

Do NOT implement:

* Analytics
* Visual redesign
* New features

---

# Performance Targets

## Lighthouse

Target:

```text id="7rjlwm"
Performance ≥ 95

Accessibility ≥ 95

Best Practices ≥ 95

SEO ≥ 95
```

Desktop and mobile.

---

# Image Optimization

Requirements:

Use:

```text id="1h2i8l"
next/image
```

everywhere images are present.

Support:

* Responsive images
* Lazy loading
* Modern formats

---

# Font Optimization

Ensure:

* Proper font loading
* No layout shift
* Minimal blocking

Verify Geist implementation.

---

# Bundle Optimization

Requirements:

* Remove unused dependencies
* Tree-shake where possible
* Lazy load non-critical components

Examples:

```text id="mj1g3u"
animations

heavy diagrams

future blog modules
```

---

# Motion Optimization

Respect:

```text id="rwp8d6"
prefers-reduced-motion
```

Requirements:

* Disable heavy animations
* Maintain usability

---

# Accessibility Audit

Review:

* Headings
* Landmark regions
* Form labels
* Focus states
* Keyboard navigation
* Color contrast

---

# Keyboard Navigation

Verify:

```text id="1ghnsh"
Navbar

Mobile Menu

Project Cards

Buttons

Contact Form
```

fully accessible.

---

# Focus States

Requirements:

Every interactive element should have:

* Visible focus state
* Consistent styling

No hidden focus outlines.

---

# Screen Reader Audit

Verify:

* Semantic structure
* Diagram accessibility
* Form announcements
* Navigation labels

---

# Reduced Motion Support

Create reusable hook:

```text id="v1s35u"
usePrefersReducedMotion()
```

or equivalent.

All animations should respect user preferences.

---

# Error Boundaries

Implement application-level error boundaries.

Requirements:

Graceful failure.

Professional fallback UI.

---

# Not Found Page

Create:

```text id="1ydsgs"
app/not-found.tsx
```

Requirements:

Professional styling.

Links back to:

```text id="yowlnv"
Home

Projects
```

---

# Empty States

Review:

Projects

Case Studies

Resume Content

Future sections

Create reusable empty-state components.

---

# Code Quality

Review:

* Type safety
* Reusable components
* Duplication
* Accessibility compliance

Refactor if necessary.

---

# Deliverables

Create:

```text id="kgt2h0"
components/shared/

hooks/
```

Examples:

```text id="95iww2"
EmptyState

ErrorBoundary

useReducedMotion
```

---

# Testing Checklist

Verify:

```text id="7azlkh"
Mobile

Tablet

Desktop

Keyboard

Reduced Motion

Screen Reader

Lighthouse
```

---

# Explicitly Out Of Scope

Do NOT implement:

Analytics

SEO changes

New content

Visual redesign

---

# Acceptance Criteria

The slice is complete when:

* Lighthouse targets are met or approached.
* Accessibility issues are resolved.
* Reduced motion support exists.
* Error boundaries exist.
* Not-found page exists.
* Focus states are consistent.
* Code quality is production-ready.
