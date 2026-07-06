@/Users/alejo/Documents/internal_operating_system/.claude/PROJECT_BOOTSTRAP.md

# CLAUDE.md — Personal Website

## What this is

Alejandro Diaz's live portfolio site — Next.js, deployed publicly. **Maintenance mode** — only touch when roadmap items demand it or another project ships and needs a portfolio entry.

Public GitHub repo: `github.com/DiazAlejo/Personal-Website`, branch `main`.

## Commands

```bash
npm install
npm run dev      # local dev
npm run build    # production build
npm run lint
```

## Architecture notes

- Content in `src/content/` (projects, etc.)
- Planning docs (`next-actions.md`, `build-log.md`, `docs/`) are **gitignored** in this public deploy repo — they live locally as IOS overlay only
- Sentry for error monitoring — check dashboard periodically

## Rules

- No scope creep — this is not a new product build
- Treehouse lease before source edits if another agent may be active on this repo
- When stat-tap or idea-graveyard ship publicly, add them to `src/content/projects.ts`

See `roadmap.md` and vault `projects/personal-website/next-actions.md` for current tasks.
