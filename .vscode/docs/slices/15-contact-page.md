# Slice 15 — Contact Page

## Objective

Build a premium Contact page that feels professional, modern, and low-friction.

The goal is not to create a sales page.

The goal is to provide multiple ways for recruiters, hiring managers, engineers, and collaborators to reach Alejandro.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

---

# Scope

Implement ONLY:

* Contact page
* Contact form UI
* Social links section
* Availability section
* Contact success state UI

Do NOT implement:

* Analytics
* SEO enhancements
* Blog
* CMS

---

# Route

```text id="vfocvw"
/contact
```

---

# Purpose

Visitors should leave with:

```text id="u3eijq"
I know how to reach Alejandro.
```

within a few seconds.

---

# Header Section

## Title

```text id="i2hvjf"
Contact
```

## Subtitle

```text id="b6v02h"
Interested in software engineering,
AI systems, data platforms,
or collaboration opportunities?

Let's connect.
```

---

# Contact Methods

Display cards for:

## Email

Source:

```text id="c01mxq"
content/socials.ts
```

---

## LinkedIn

Source:

```text id="o2y9eq"
content/socials.ts
```

---

## GitHub

Source:

```text id="c7wbzj"
content/socials.ts
```

---

# Contact Form

Create a professional form UI.

Fields:

## Name

```text id="z6v88n"
text
```

---

## Email

```text id="sl7m2k"
email
```

---

## Subject

```text id="6z6j1n"
text
```

---

## Message

```text id="0z4trr"
textarea
```

---

## Submit

```text id="vw0kgj"
Send Message
```

---

# Form Behavior

For now:

Option A (recommended)

Use a serverless email provider later.

Current slice should:

* Validate fields
* Show success state
* Show loading state

Backend integration can come later.

---

# Success State

Display:

```text id="v41j9v"
Message received.

Thanks for reaching out.
I'll get back to you soon.
```

---

# Availability Section

Display:

```text id="6i5fsv"
Currently open to:

Software Engineering

AI Engineering

Machine Learning

Data Engineering

Technical Collaboration
```

Content should come from content layer.

---

# Layout Requirements

## Desktop

Recommended:

```text id="9hjlwm"
Contact Info | Form
```

two-column layout.

---

## Mobile

Stack vertically.

Maintain spacing.

---

# Visual Style

Requirements:

* Premium
* Minimal
* Professional

Avoid:

* Large illustrations
* Sales language
* Marketing graphics

---

# Animation Requirements

Reuse established patterns.

Allowed:

* Fade reveal
* Form state transitions

---

# Accessibility Requirements

Requirements:

* Proper labels
* Keyboard support
* Screen reader support
* Form validation messaging

---

# Content Source

Use:

```text id="8rt4u3"
content/socials.ts

content/site.ts
```

Expand if needed.

---

# Deliverables

Create:

```text id="n9j6wr"
app/contact/page.tsx

components/contact/
```

Examples:

```text id="uhm49w"
ContactForm

ContactMethods

AvailabilitySection
```

---

# Explicitly Out Of Scope

Do NOT implement:

Email backend

Analytics

SEO enhancements

Blog

CMS

---

# Acceptance Criteria

The slice is complete when:

* Contact page renders.
* Form validation works.
* Success state works.
* Social links come from content layer.
* Responsive behavior works.
* Accessibility requirements are met.
* Visual quality matches site standards.
