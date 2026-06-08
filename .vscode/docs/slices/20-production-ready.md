# Slice 20 — Production Launch Readiness

## Objective

Prepare the portfolio for a real-world production launch.

After this slice, the site should be:

* Deployable
* Maintainable
* Secure
* Observable
* Professional

This slice is the final engineering pass before publishing to:

```text
https://adiaz.dev
```

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

The portfolio should be fully implemented before starting.

---

# Scope

Implement ONLY:

* Deployment readiness
* Security improvements
* Environment configuration
* CI/CD
* Launch verification

Do NOT implement:

* New features
* Design changes
* Additional content

---

# Deployment Platform

Primary target:

[Vercel](https://vercel.com?utm_source=chatgpt.com)

Architecture should support future migration if needed.

---

# Environment Variables

Create:

```text
.env.example
```

Document:

```text
NEXT_PUBLIC_SITE_URL

NEXT_PUBLIC_POSTHOG_KEY

NEXT_PUBLIC_POSTHOG_HOST

SENTRY_DSN
```

Include comments and usage documentation.

---

# Runtime Validation

Create typed environment validation.

Recommended:

```text
zod
```

Example:

```text
env.ts
```

Requirements:

* Fail fast
* Clear error messages
* Type-safe access

---

# Security Headers

Configure security headers.

Examples:

```text
X-Frame-Options

X-Content-Type-Options

Referrer-Policy

Permissions-Policy
```

Implement through:

```text
next.config.ts
```

or middleware.

---

# Content Security Policy

Create CSP architecture.

Keep maintainable.

Support:

* Vercel
* PostHog
* Sentry

Avoid overly permissive policies.

---

# Error Monitoring Verification

Verify:

```text
Sentry
```

captures:

* Client errors
* Route errors
* Unexpected exceptions

Document testing procedure.

---

# Analytics Verification

Verify:

```text
PostHog
```

tracks:

* Resume downloads
* Contact clicks
* Project views

Document validation process.

---

# Build Verification

Ensure:

```text
npm run build
```

passes.

No TypeScript errors.

No ESLint failures.

---

# CI/CD

Create:

```text
.github/workflows/
```

Workflow requirements:

## Pull Requests

Run:

* Type check
* Lint
* Build

---

## Main Branch

Verify production build.

---

# Performance Verification

Record final:

```text
Lighthouse

Core Web Vitals
```

Document results.

Target:

```text
95+
```

where practical.

---

# Domain Configuration

Prepare documentation for:

```text
adiaz.dev
```

Include:

* DNS records
* Vercel setup
* HTTPS verification

---

# Social Preview Verification

Verify:

* Open Graph image
* Twitter/X card
* Metadata rendering

---

# Final QA Checklist

Verify:

## Navigation

```text
Home

Projects

Resume

Contact
```

---

## Project Pages

All routes work.

---

## Forms

Validation works.

---

## Mobile

Responsive.

---

## Accessibility

Keyboard navigation works.

---

## Analytics

Events fire.

---

## Monitoring

Errors captured.

---

# Documentation

Create:

```text
README.md
```

Include:

## Local Development

```bash
npm install
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Deploy

Vercel deployment instructions.

---

# Deliverables

Examples:

```text
env.ts

.env.example

security headers

github workflow

launch docs
```

---

# Explicitly Out Of Scope

Do NOT implement:

New pages

New sections

Marketing features

CMS

Blog

---

# Acceptance Criteria

The slice is complete when:

* Production build succeeds.
* Environment variables validated.
* Security headers configured.
* CI/CD exists.
* Monitoring verified.
* Analytics verified.
* Documentation exists.
* Launch checklist completed.
