# Slice 16 — SEO, Metadata & Social Sharing

## Objective

Transform the portfolio from a functioning website into a discoverable professional asset.

This slice focuses on:

* SEO
* Metadata
* Open Graph
* Social sharing
* Structured data
* Search engine visibility

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

The portfolio should already be feature-complete before this slice.

---

# Scope

Implement ONLY:

* Metadata improvements
* Open Graph support
* Twitter/X cards
* Structured data
* Sitemap
* Robots configuration
* Canonical URLs

Do NOT implement:

* Analytics
* Performance optimization
* Visual redesign

---

# Domain

Assume:

```text id="bkgwpr"
https://adiaz.dev
```

Create architecture that can easily change domains later.

---

# Global Metadata

Configure root metadata.

## Title

```text id="3eq1ei"
Alejandro Díaz | Software Engineer
```

---

## Description

```text id="0i4n0t"
Software Engineer building AI systems, machine learning platforms, automation workflows, and data-driven products.
```

---

## Keywords

Include:

```text id="a2jnhl"
Software Engineer

AI Engineer

Machine Learning Engineer

Data Engineer

Palantir Foundry

Python

TypeScript

Next.js

Portfolio
```

---

# Open Graph

Configure global Open Graph metadata.

Requirements:

## Title

```text id="hhkjv6"
Alejandro Díaz | Software Engineer
```

---

## Description

Use site description.

---

## URL

```text id="yikbju"
https://adiaz.dev
```

---

## Type

```text id="0kl9jk"
website
```

---

# OG Image

Create architecture for:

```text id="v4v6s9"
/api/og
```

Future dynamic generation supported.

Current implementation may use a static image.

---

# Twitter/X Cards

Configure:

```text id="8hn6n5"
summary_large_image
```

Use Open Graph image.

---

# Page-Level Metadata

Every major page should define metadata.

Pages:

```text id="6jz9we"
/

/projects

/resume

/contact
```

---

# Project Metadata

Every case study should have unique metadata.

Examples:

```text id="9phhxe"
AI Resume Pipeline

Water Forecasting Platform

OnboardOS

Local RAG Assistant
```

Use project content source where possible.

---

# Structured Data

Implement JSON-LD.

---

## Person Schema

Represent:

```text id="jlwmva"
Alejandro Díaz
```

Include:

* Name
* Job title
* Website
* GitHub
* LinkedIn

---

## Website Schema

Represent:

```text id="dy0lwe"
adiaz.dev
```

---

## Project Schema

Support project pages.

Future expansion friendly.

---

# Sitemap

Generate:

```text id="6lzwya"
/sitemap.xml
```

Include:

```text id="2wkktt"
/

/projects

/resume

/contact

/project routes
```

---

# Robots

Generate:

```text id="o5ubmn"
/robots.txt
```

Allow indexing.

---

# Canonical URLs

Configure canonical support.

Avoid duplicate indexing.

---

# Breadcrumb Support

Prepare breadcrumb metadata architecture.

UI implementation can wait.

---

# Accessibility Considerations

Metadata should support:

* Screen readers
* Social previews
* Search engines

---

# Deliverables

Create:

```text id="2wm8es"
app/sitemap.ts

app/robots.ts

lib/seo/
```

Examples:

```text id="k0q7c5"
generateMetadata

structuredData

openGraphConfig
```

---

# Explicitly Out Of Scope

Do NOT implement:

Analytics

Performance optimization

Design changes

A/B testing

Marketing integrations

---

# Acceptance Criteria

The slice is complete when:

* Metadata exists globally.
* Metadata exists per page.
* Metadata exists per project.
* Open Graph works.
* Twitter cards work.
* Sitemap generates.
* Robots generates.
* Structured data exists.
* SEO architecture is reusable.
