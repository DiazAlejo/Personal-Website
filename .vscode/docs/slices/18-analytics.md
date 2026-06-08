# Slice 18 — Analytics, Monitoring & Recruiter Insights

## Objective

Add privacy-conscious analytics and monitoring to understand how visitors interact with the portfolio.

The goal is not marketing.

The goal is to answer:

* Which projects get viewed most?
* Which case studies keep attention longest?
* How often is the resume downloaded?
* Which CTA buttons are used?

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

Site should already be production-ready before this slice.

---

# Scope

Implement ONLY:

* Analytics
* Event tracking
* Monitoring
* Recruiter insight collection

Do NOT implement:

* Design changes
* New pages
* A/B testing

---

# Analytics Platform

Preferred:

### Option A

[PostHog](https://posthog.com?utm_source=chatgpt.com)

Reasons:

* Product analytics
* Event tracking
* Funnels
* Session recordings (optional)
* Developer friendly

---

### Option B

[Plausible Analytics](https://plausible.io?utm_source=chatgpt.com)

For simpler privacy-focused analytics.

---

# Events To Track

## Resume Download

Track:

```text id="d0r2so"
resume_downloaded
```

Properties:

```text id="u4y8qz"
source_page
```

---

## Contact CTA

Track:

```text id="otz5bh"
contact_clicked
```

---

## Project Opened

Track:

```text id="igwbjc"
project_viewed
```

Properties:

```text id="mm6hhw"
project_slug
```

---

## External Link Clicked

Track:

```text id="pbjlwm"
github_clicked

linkedin_clicked
```

---

# Optional Events

Track:

```text id="kgjlwm"
case_study_completed
```

when user reaches end of page.

Useful recruiter signal.

---

# Monitoring

Implement:

### Preferred

[Sentry](https://sentry.io?utm_source=chatgpt.com)

Track:

* Client errors
* Runtime exceptions
* Failed routes

---

# Event Architecture

Create centralized tracking utility.

Example:

```text id="pkqoz4"
lib/analytics/
```

Examples:

```text id="2r2rpn"
trackEvent()

trackProjectView()

trackResumeDownload()
```

Avoid analytics code scattered throughout components.

---

# Privacy Requirements

Requirements:

* No personal data collection
* No unnecessary tracking
* Respect privacy standards

---

# Recruiter Dashboard Thinking

Prepare architecture for future metrics such as:

```text id="l4n54w"
Most viewed project

Average session duration

Resume downloads

Contact clicks
```

No dashboard needed now.

---

# Performance Requirements

Analytics must not significantly impact performance.

Prefer lazy initialization.

---

# Deliverables

Create:

```text id="4xaw9i"
lib/analytics/

lib/monitoring/
```

Examples:

```text id="kgb93j"
analytics.ts

events.ts

sentry.ts
```

---

# Explicitly Out Of Scope

Do NOT build:

Custom dashboard

CRM integrations

Email marketing

A/B testing

---

# Acceptance Criteria

The slice is complete when:

* Analytics platform integrated.
* Core events tracked.
* Monitoring configured.
* Tracking utilities centralized.
* Privacy requirements met.
* Performance impact minimized.
