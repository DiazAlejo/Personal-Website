# adiaz.dev — Master Product Requirements Document (PRD)

## 1. Project Overview

### Project Name

adiaz.dev

### Purpose

Create a premium personal portfolio website that positions Alejandro Díaz as a Software Engineer who builds production AI systems, automation platforms, and data-driven products.

The website should communicate engineering impact through real-world systems, measurable outcomes, and technical case studies rather than through generic skills lists or personal branding content.

The portfolio should feel comparable in quality to modern engineering-focused websites such as Linear, Vercel, and Raycast.

---

## 2. Primary Goals

### Goal 1

Demonstrate professional software engineering experience.

### Goal 2

Showcase production AI and ML systems through detailed case studies.

### Goal 3

Provide recruiters and hiring managers with a clear path to:

* Learn about Alejandro
* Review engineering work
* View resume
* Download resume
* Contact Alejandro

### Goal 4

Establish a professional online presence under the domain:

adiaz.dev

---

## 3. Success Criteria

A visitor should understand the following within 30 seconds:

* Alejandro is a Software Engineer.
* Alejandro has professional industry experience.
* Alejandro builds AI-powered software systems.
* Alejandro has delivered measurable business impact.
* Alejandro has worked with enterprise-scale data systems.

A recruiter should be able to:

* Access resume in under 2 clicks.
* Download resume in under 2 clicks.
* Navigate to projects in under 1 click.
* Contact Alejandro in under 2 clicks.

---

## 4. Target Audience

### Primary Audience

Software Engineering Recruiters

### Secondary Audience

Engineering Managers

### Tertiary Audience

Technical Interviewers

### Additional Audience

AI/ML Teams

Startup Founders

Technical Collaborators

---

## 5. Brand Positioning

### Primary Headline

Software Engineer building AI systems, automation platforms, and data-driven products.

### Supporting Statement

Currently developing production AI and ML solutions at Jacobs Engineering.

### Positioning Statement

Alejandro is a Software Engineer focused on building practical systems that create measurable business value through software, AI, automation, and data engineering.

---

## 6. Design Philosophy

### Core Principles

Professional

Premium

Minimal

Technical

Modern

Trustworthy

### Emotional Response

Visitors should think:

"This engineer builds serious systems."

followed by:

"This website feels polished and intentional."

### Inspirations

Linear

Vercel

Raycast

### Explicit Non-Goals

Do not create:

* A flashy portfolio
* A gaming-themed website
* A cyberpunk website
* A heavily animated website
* A social media style website
* A personal blog
* A photo-centric website

---

## 7. Visual Design System

### Theme

Dark mode only.

### Color Palette

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

### Typography

Primary Font:
Geist

Fallback:
Inter

### UI Style

Subtle glass effects

Rounded corners

Soft shadows

Thin borders

Large spacing

Readable typography

---

## 8. Animation Standards

### Philosophy

Animations must support usability and perceived quality.

Animations must never distract from content.

### Approved Animations

Page transitions

Fade-in sections

Scroll reveal effects

Metric count-up animations

Hover elevation

Navigation transitions

Architecture diagram reveals

Smooth scrolling

### Prohibited Animations

Custom cursor

Particle systems

3D objects

Background videos

Spinning elements

Excessive parallax

Flashy effects

---

## 9. Site Architecture

### Home

Route:

/

Purpose:

Introduce Alejandro and highlight engineering impact.

Sections:

Hero

Impact Metrics

Featured Work

Experience Timeline

Contact CTA

---

### Projects

Route:

/projects

Purpose:

Display engineering case studies.

Contains:

Featured projects

Project summaries

Navigation to project detail pages

---

### Individual Project Pages

Examples:

/projects/ai-resume-pipeline

/projects/water-forecasting-platform

/projects/onboardos

/projects/local-rag-assistant

/projects/thriftuni

/projects/trolley-tracker

Purpose:

Present engineering work through structured case studies.

---

### Resume

Route:

/resume

Purpose:

Provide online resume viewing and downloading.

Contains:

Embedded PDF

Resume metadata

Download button

Contact links

---

### Contact

Route:

/contact

Purpose:

Allow visitors to contact Alejandro.

Contains:

Contact form

Email

GitHub

LinkedIn

---

## 10. Navigation

### Navigation Structure

Home

Projects

Resume

Contact

### Behavior

Sticky navigation

Transparent initially

Glass blur after scrolling

Responsive mobile navigation

Accessible keyboard navigation

---

## 11. Homepage Requirements

### Hero Section

Display:

Name

Primary headline

Supporting statement

Primary CTA

Secondary CTA

Buttons:

View Projects

Download Resume

---

### Impact Metrics

Display:

22M+ Records Processed

98% Processing Time Reduction

56% Forecasting Improvement

3+ Years Industry Experience

Requirements:

Responsive

Animated count reveal

Accessible

---

### Featured Work

Display:

AI Resume Pipeline

Water Forecasting Platform

OnboardOS

Local RAG Assistant

Requirements:

Case study previews

Project tags

Navigation to full case studies

---

### Experience Timeline

Display:

Nagnoi

Jacobs Internship 2024

Jacobs Internship 2025

Jacobs Engineer 2026

Requirements:

Chronological

Responsive

Animated on reveal

---

### Contact CTA

Purpose:

Encourage outreach.

Requirements:

Simple

Professional

Clear next action

---

## 12. Project Case Study Requirements

Every project page must contain:

### Overview

Project summary.

### Problem

Challenge being solved.

### Solution

Implementation approach.

### Architecture

System design visualization.

### Impact

Business or technical outcomes.

### Technologies

Tools and frameworks used.

---

## 13. Architecture Diagram Requirements

Diagrams should be:

Simple

Clean

Readable

Responsive

Animated on reveal

### Example

AI Resume Pipeline

Resume Upload

↓

Document Parser

↓

Claude Sonnet Extraction

↓

PII Scrubbing

↓

HR Data Enrichment

↓

Document Generation

↓

Final Resume

---

## 14. Content Architecture

All content must be managed through TypeScript files.

No hardcoded content inside page components.

### Content Directory

/content

site.ts

socials.ts

metrics.ts

skills.ts

experience.ts

projects.ts

### Requirement

Pages consume typed content objects.

Components remain reusable and presentation-focused.

---

## 15. Technical Stack

Framework:

Next.js 15

Language:

TypeScript

Styling:

Tailwind CSS v4

UI:

shadcn/ui

Animations:

Framer Motion

Icons:

Lucide React

Deployment:

Vercel

Forms:

Resend

Validation:

Zod

---

## 16. Accessibility Requirements

Keyboard accessible

Semantic HTML

Proper heading hierarchy

Color contrast compliance

Visible focus states

Screen reader compatibility

ARIA usage where required

---

## 17. Performance Requirements

Lighthouse Performance:
95+

Lighthouse Accessibility:
95+

Lighthouse Best Practices:
95+

Lighthouse SEO:
95+

Requirements:

Image optimization

Code splitting

Lazy loading

Minimal client-side JavaScript

Fast page transitions

---

## 18. SEO Requirements

Unique metadata per page

Open Graph support

Twitter cards

Structured data

Sitemap generation

Robots configuration

Canonical URLs

Domain:

adiaz.dev

---

## 19. Quality Standards

Every feature must satisfy:

Professional appearance

Responsive design

Accessibility compliance

Type safety

Clean architecture

Production readiness

No placeholder content in final production build

---

## 20. Definition of Done

The project is complete when:

* All pages are implemented.
* All project case studies are complete.
* Resume can be viewed and downloaded.
* Contact form is operational.
* Mobile experience is polished.
* Lighthouse scores exceed targets.
* Site is deployed to adiaz.dev.
* Design aligns with the brand and design philosophy defined in this document.
