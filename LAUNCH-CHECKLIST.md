# Launch Checklist

Small list of keys, tokens, and manual changes before going live.

---

## 1. Environment variables

Copy `.env.example` → `.env.local` for local dev. Set the same values in **Vercel → Project → Settings → Environment Variables** (Production + Preview).

| Variable | Required? | What to set |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Yes (prod)** | Your Vercel URL, e.g. `https://personal-website-xxx.vercel.app` |
| `NEXT_PUBLIC_POSTHOG_KEY` | Optional | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | With PostHog key | `https://us.i.posthog.com` (or your region) |
| `NEXT_PUBLIC_SENTRY_DSN` | Optional | Sentry browser DSN |
| `SENTRY_DSN` | Optional | Same DSN as fallback (server/build) |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | Optional | `true` or `false` to force off |

**Where to get keys**

- **PostHog:** [posthog.com](https://posthog.com) → Project → Settings → Project API Key
- **Sentry:** [sentry.io](https://sentry.io) → Project → Settings → Client Keys (DSN)

**Note:** If you set `NEXT_PUBLIC_POSTHOG_KEY` in production, you must also set `NEXT_PUBLIC_POSTHOG_HOST` or the build will fail validation.

After the first Vercel deploy, copy the assigned `*.vercel.app` URL into `NEXT_PUBLIC_SITE_URL` and redeploy so SEO, sitemap, and Open Graph use the correct canonical URL.

---

## 2. Content you must verify

Confirm `src/content/socials.ts` has your real email, GitHub, and LinkedIn links.

---

## 3. Resume PDF

Ensure your final resume is at:

```
public/resume/alejandro-diaz-resume.pdf
```

---

## 4. Vercel deploy

1. Import repo to [Vercel](https://vercel.com) (Next.js preset).
2. Add env vars from section 1.
3. Deploy — Vercel assigns a `*.vercel.app` URL automatically.
4. Set `NEXT_PUBLIC_SITE_URL` to that URL and redeploy.

Custom domain is optional. Skip DNS setup if you are using the default Vercel URL.

---

## 5. GitHub (CI)

No secrets required for the current workflow. CI runs on PRs and `main`:

- `npm run typecheck`
- `npm run lint`
- `npm run build`

Push to `main` after env vars are set in Vercel to deploy.

---

## 6. Optional post-launch verification

**PostHog** (if configured): visit site → DevTools → Network → filter `posthog` → confirm events (`project_viewed`, `resume_downloaded`, etc.).

**Sentry** (if configured): confirm errors appear in Sentry Issues from route/error boundaries.

**SEO:** open `/sitemap.xml`, `/robots.txt`, and `/api/og` after deploy.

---

## 7. Known gap (not blocking deploy)

The contact form is **UI-only** — it shows success but does not send email yet. Recruiters can still reach you via email/GitHub/LinkedIn from the Contact page.

---

## Quick pre-flight

- [ ] `NEXT_PUBLIC_SITE_URL` set to your Vercel URL in production
- [ ] Real email + GitHub + LinkedIn in `src/content/socials.ts`
- [ ] Final PDF in `public/resume/alejandro-diaz-resume.pdf`
- [ ] PostHog + Sentry keys added in Vercel (or left empty to skip)
- [ ] `npm run build` passes locally
- [ ] Deploy `main` and open your `*.vercel.app` URL
