# Alejandro Díaz — Portfolio

Production portfolio site for Alejandro Díaz, Software Engineer.

**Live:** [https://adiaz-dev.vercel.app](https://adiaz-dev.vercel.app)

Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- **Homepage** — hero, impact metrics, featured work, experience timeline, contact CTA
- **Projects** — filterable grid with 4 full case studies + university group projects overview
- **Resume** — fullscreen HTML resume viewer with PDF download
- **Contact** — form backed by [Resend](https://resend.com) with client-side validation
- **SEO** — metadata, Open Graph images (`/api/og`), sitemap, robots.txt, JSON-LD
- **Analytics** — optional PostHog explicit events (no autocapture)
- **Monitoring** — optional Sentry client + server error tracking
- **Security** — CSP, HSTS, and hardened response headers

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS v4, Radix UI, Framer Motion |
| Content | Typed content modules in `src/content/` |
| Email | Resend (`/api/contact`) |
| Analytics | PostHog |
| Monitoring | Sentry (`@sentry/nextjs`) |
| Hosting | Vercel |
| CI | GitHub Actions |

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
| `npm run format:check` | Prettier check |

## Environment Variables

Copy `.env.example` to `.env.local` for local development. Set the same values in **Vercel → Project → Settings → Environment Variables** for Production and Preview.

### Required (production)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, e.g. `https://adiaz-dev.vercel.app` |

### Contact form (Resend)

Server-only — never prefix with `NEXT_PUBLIC_`.

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `RESEND_FROM_EMAIL` | Sender address. Testing: `Alejandro Díaz <onboarding@resend.dev>`. Production: use a verified domain. |
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions |

Redeploy after adding or changing these variables.

### Analytics (optional)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | Ingest host, e.g. `https://us.i.posthog.com` |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | Set `false` to disable analytics |

If `NEXT_PUBLIC_POSTHOG_KEY` is set in production, `NEXT_PUBLIC_POSTHOG_HOST` is required.

### Monitoring (optional)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry browser DSN |
| `SENTRY_DSN` | Server-side fallback (same value) |
| `SENTRY_AUTH_TOKEN` | Optional. Enables source map uploads for readable stack traces in Sentry. |

Public env vars are validated at startup via `src/env.ts` (Zod).

## Deploy to Vercel

1. Import this repository in [Vercel](https://vercel.com) (Next.js preset).
2. Add environment variables from the tables above.
3. Deploy to get your `*.vercel.app` URL.
4. Set `NEXT_PUBLIC_SITE_URL` to that URL and redeploy.
5. Push to `main` to trigger automatic deployments.

Custom domain is optional: **Vercel → Project → Settings → Domains**.

## Content & Assets

### Resume (HTML)

The resume shown in the `/resume` popup is loaded from:

```
public/alejandro_diaz_resume.html
```

Edit this file and redeploy to update the in-browser resume. PDF download uses:

```
public/resume/alejandro-diaz-resume.pdf
```

### Site copy & links

| File | Purpose |
|---|---|
| `src/content/socials.ts` | Email, GitHub, LinkedIn |
| `src/content/projects.ts` | Project cards and categories |
| `src/content/case-studies/` | Full case study content |
| `src/content/resume.ts` | Resume page metadata and PDF path |
| `src/content/hero.ts` | Homepage hero copy and CTAs |

## Security

Production responses include security headers in `next.config.ts`:

- `Content-Security-Policy` (self, PostHog, Sentry)
- `Strict-Transport-Security` (production)
- `X-Frame-Options: DENY` (site pages; resume HTML allows same-origin embed)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

CSP is maintained in `src/lib/security/csp.ts`.

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`) runs on pull requests and pushes to `main`:

1. `npm run typecheck`
2. `npm run lint`
3. `npm run build` (with `NEXT_PUBLIC_SITE_URL` set for CI)

## Project Structure

```
public/
  alejandro_diaz_resume.html   # HTML resume (popup viewer)
  resume/                      # PDF resume download
src/
  app/                         # Next.js App Router (pages, API routes)
  components/                  # UI, layout, sections, projects, resume
  content/                     # Typed content layer
  lib/                         # Analytics, SEO, security, email, utilities
  env.ts                       # Zod validation for public env vars
```

## License

Private repository. All rights reserved.
