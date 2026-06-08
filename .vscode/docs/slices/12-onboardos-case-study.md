# Slice 12 — OnboardOS Case Study

## Objective

Build the OnboardOS case study.

This project demonstrates:

* Full-Stack Engineering
* API Design
* Workflow Systems
* Healthcare Software
* Team Collaboration

Unlike the Jacobs projects, this case study highlights product engineering and application development.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

Reuse the case study architecture established in Slices 10 and 11.

---

# Scope

Implement ONLY:

* OnboardOS case study page
* Workflow architecture visualization
* Impact section
* Engineering highlights
* Technology stack section

Do NOT implement:

* Resume page
* Contact page
* Other project case studies

---

# Route

```text
/projects/onboardos
```

---

# Page Structure

```text
Hero
↓
Overview
↓
Problem
↓
Solution
↓
Workflow Architecture
↓
Engineering Highlights
↓
Technology Stack
↓
Project Outcomes
↓
Next Project Navigation
```

---

# Hero Section

## Title

```text
OnboardOS
```

## Subtitle

```text
Healthcare onboarding and workflow management platform.
```

## Metadata

Display badges:

```text
Full Stack

Healthcare

Capstone Project

2025
```

---

# Overview

Key points:

* Healthcare onboarding platform
* Workflow engine
* Role-based access control
* Audit logging
* Task lifecycle management
* Approval workflows
* Dashboard analytics

---

# Problem

Healthcare onboarding often involves:

* Manual approval chains
* Limited visibility
* Poor tracking
* Fragmented workflows
* Compliance concerns

Organizations need structured onboarding processes.

---

# Solution

Describe:

* Workflow engine
* Approval pipelines
* Role-based permissions
* Notifications
* Analytics dashboards
* Monitoring interfaces

Focus on software architecture and engineering decisions.

---

# Workflow Architecture

Build a reusable workflow visualization.

Flow:

```text
User Creation
      ↓
Task Assignment
      ↓
Approval Workflow
      ↓
Role Validation
      ↓
Audit Logging
      ↓
Completion
```

Must be built using reusable React components.

No image files.

---

# Project Outcomes

Display:

## Metric 1

```text
40+
REST APIs Delivered
```

---

## Metric 2

```text
Role-Based
Access Control
```

---

## Metric 3

```text
End-to-End
Workflow Engine
```

---

## Metric 4

```text
Cloud
Deployment
```

---

# Engineering Highlights

Examples:

* RBAC implementation
* Workflow orchestration
* API design
* Audit logging
* Dashboard analytics
* Automated testing

---

# Technology Stack

Display badges:

```text
Next.js

TypeScript

Go

PostgreSQL

REST APIs

Docker

Cloud Deployment
```

---

# Content Source

All content must come from:

```text
content/projects.ts
```

Expand project schema if necessary.

---

# Navigation

Bottom CTA:

```text
Next Case Study →
```

Destination:

```text
/projects/local-rag-assistant
```

---

# Animation Requirements

Reuse established animation patterns.

Consistency across all case studies is required.

---

# Accessibility Requirements

Requirements:

* Semantic HTML
* Accessible workflow diagram
* Proper heading hierarchy
* Keyboard support

---

# Deliverables

Create:

```text
app/projects/onboardos/page.tsx
```

Reuse:

```text
ArchitectureDiagram

ImpactGrid
```

or extend them into more generic components if needed.

---

# Explicitly Out Of Scope

Do NOT build:

Local RAG Assistant

Resume page

Contact page

Other projects

---

# Acceptance Criteria

The slice is complete when:

* Route renders correctly.
* Workflow diagram renders.
* Outcomes section renders.
* Content comes from content layer.
* Responsive behavior works.
* Accessibility requirements are met.
* Design remains consistent with previous case studies.
