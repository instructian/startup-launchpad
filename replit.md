# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Startup Launchpad Pitch Website (`artifacts/launchpad`)
- **Type**: react-vite, static frontend only (no backend)
- **Preview path**: `/`
- **Purpose**: Multi-page university pitch package for the Startup Launchpad program
- **Pages**:
  - `/` — Program Pathway: interactive four-semester diagram with core loop, entry tracks, event ladder
  - `/proposal` — Structured Proposal: full internal university proposal document with tables, callout boxes, executive summary
  - `/resources` — Resources Manifest: searchable/filterable table of all program resources with Essential/Recommended/Stretch classification
  - `/calendar` — Calendar & Timeline: Gantt and monthly views of the two-year academic program schedule
  - `/faq` — Program FAQ: accordion FAQ organized by audience (Students, Teams, Faculty, Mentors, Judges, Sponsors, Administrators)
- **Design**: Navy/blue university palette, Merriweather serif headings, Open Sans body, print-friendly

### API Server (`artifacts/api-server`)
- Express 5 API server, runs at `/api`

### Canvas (`artifacts/mockup-sandbox`)
- Design mockup sandbox, runs at `/__mockup`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/launchpad run dev` — run Launchpad pitch website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
