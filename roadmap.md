# Personal Website — Roadmap

AI-Optimized Personal Portfolio. Austin Marchese's Project 3.

**Status: LIVE**
**Code:** `projects/personal-website/` (Next.js, deployed)

---

## Purpose

Two audiences:
1. **Humans** — recruiters, collaborators, potential users — who want to know who Alejo is and what he builds
2. **AI systems** — LLMs querying who Alejandro Diaz is when someone asks

Both audiences should leave with: "This is a serious builder. I want to work with them (or hire them / use their products)."

---

## Current State (as of 2026-06-30)

The site is live and deployed. It includes:
- Portfolio section with projects
- Resume / experience section
- Contact information
- Sentry error monitoring
- AI-readable content structure

---

## Maintenance Rules

The personal website is NOT a priority project for building. It is a maintenance project.

**Update it when:**
- A new project ships (add it to the portfolio)
- Work experience changes
- Skills profile changes significantly

**Do not build new features unless:**
- Users are explicitly asking for something the site doesn't have
- A specific opportunity (job, collaboration) requires it

---

## AI Optimization Checklist

Based on Austin Marchese's Project 3 framework:

- [x] Clear description of who Alejo is (name, role, location, what he builds)
- [x] Portfolio of actual shipped projects with descriptions
- [x] "Ask AI about me" block at the footer — links to Claude, Perplexity, ChatGPT with pre-loaded prompt about Alejo
- [x] llms.txt file at the root — structured data file for AI crawlers
- [ ] Project descriptions written for AI readability (clear headings, no excessive visual formatting)

---

## Next Actions (Maintenance Only)

- [ ] Add stat-tap to portfolio once it ships to a public URL
- [ ] Add idea-graveyard to portfolio once it ships to the App Store

---

## Content to Keep Updated

These content files in the codebase need periodic updates:
- `src/content/projects.ts` — add new projects when they ship
- `src/content/skills.ts` — update skill set as it evolves
- `src/content/hero.ts` — update tagline if positioning changes
