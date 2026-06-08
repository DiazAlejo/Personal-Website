# adiaz.dev

Personal portfolio for Alejandro Díaz — Software Engineer building AI systems, automation platforms, and data-driven products.

Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run format:check
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure as needed.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical URL (`https://adiaz.dev`) |
| `NEXT_PUBLIC_POSTHOG_KEY` | Optional | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | Optional | PostHog ingest host |
| `NEXT_PUBLIC_SENTRY_DSN` | Optional | Sentry browser DSN |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | Optional | Set `false` to disable analytics |

Environment variables are validated at startup via `src/env.ts` (Zod). Invalid values fail fast with clear error messages.

## Deploy to Vercel

1. Import the repository in [Vercel](https://vercel.com).
2. Framework preset: **Next.js** (auto-detected).
3. Set environment variables from `.env.example` in Project Settings.
4. Deploy.

### Domain Configuration (`adiaz.dev`)

1. In Vercel → Project → Settings → Domains, add `adiaz.dev` and `www.adiaz.dev`.
2. At your DNS provider, configure:
   - **Apex (`adiaz.dev`)**: A record → `76.76.21.21` (Vercel)
   - **WWW**: CNAME → `cname.vercel-dns.com`
3. Verify HTTPS is active (automatic via Vercel).
4. Set `NEXT_PUBLIC_SITE_URL=https://adiaz.dev` in production environment.

## Security

Production responses include security headers configured in `next.config.ts`:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera, microphone, geolocation disabled)
- `Content-Security-Policy` (self, PostHog, Sentry ingest)
- `Strict-Transport-Security` (production only)

CSP is built in `src/lib/security/csp.ts` for maintainability.

## Analytics Verification (PostHog)

Prerequisites: `NEXT_PUBLIC_POSTHOG_KEY` configured in environment.

1. Deploy or run production build locally with PostHog key set.
2. Open browser DevTools → Network, filter by `posthog` or your ingest host.
3. Verify events fire:

| Action | Expected Event |
|---|---|
| Visit `/projects/ai-resume-pipeline` | `project_viewed` |
| Download resume PDF on `/resume` | `resume_downloaded` |
| Click "Contact Me" on homepage | `contact_clicked` |
| Click GitHub/LinkedIn link | `github_clicked` / `linkedin_clicked` |
| Scroll to end of case study | `case_study_completed` |

4. Confirm in PostHog → Activity that events appear with correct properties.

## Monitoring Verification (Sentry)

Prerequisites: `NEXT_PUBLIC_SENTRY_DSN` configured in environment.

1. Deploy with Sentry DSN set.
2. Trigger a test error (development only): temporarily add `throw new Error("Sentry test")` in a client component, load page, confirm error appears in Sentry Issues.
3. Remove test error before deploying.
4. Verify production errors are captured from:
   - `app/error.tsx` (route errors)
   - `app/global-error.tsx` (root errors)
   - `ErrorBoundary` (client render errors)

## Performance Baseline

Lighthouse scores (production build, post-optimization):

| Route | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Home (desktop) | 98 | 100 | 100 | 100 |
| Home (mobile) | 98 | 100 | 100 | 100 |
| Contact | 95 | 100 | 100 | 100 |

Target: **95+** across all categories where practical.

## Launch Checklist

### Navigation
- [ ] Home, Projects, Resume, Contact routes load
- [ ] Active page indicator works
- [ ] Mobile menu opens, traps focus, closes on Escape

### Project Pages
- [ ] All 6 project routes resolve
- [ ] 4 case studies render full content
- [ ] Placeholder pages render for ThriftUni, Trolley Tracker

### Forms
- [ ] Contact form validation works
- [ ] Success state displays

### Mobile & Accessibility
- [ ] Responsive layout on mobile, tablet, desktop
- [ ] Keyboard navigation and focus states work
- [ ] Skip link reaches main content

### SEO & Social
- [ ] `/sitemap.xml` and `/robots.txt` accessible
- [ ] Open Graph image renders at `/api/og`
- [ ] Twitter card metadata present

### Analytics & Monitoring
- [ ] PostHog events fire (if configured)
- [ ] Sentry captures errors (if configured)

### Production
- [ ] `npm run build` passes in CI
- [ ] Environment variables set in Vercel
- [ ] `adiaz.dev` domain configured with HTTPS

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on pull requests and pushes to `main`:

1. Typecheck (`npm run typecheck`)
2. Lint (`npm run lint`)
3. Production build (`npm run build`)

## Project Structure

```
src/
  app/              # Next.js App Router pages
  components/       # UI and section components
  content/          # Typed content layer
  lib/              # Analytics, SEO, security, utilities
  env.ts            # Zod environment validation
```
