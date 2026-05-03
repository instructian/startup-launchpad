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

## Project Goal

Complete pitch asset package for **Startup Launchpad** — a four-semester university innovation program at the Smith Center for Entrepreneurship.

**Program URL**: `launchpad.ixdia.org`

## Artifacts (7 total — at limit)

### 1. Startup Launchpad Pitch Website (`artifacts/launchpad`)
- **Preview path**: `/`
- **Type**: react-vite, static frontend
- **Purpose**: Main public-facing marketing site for the program

### 2. Startup Launchpad Deck (`artifacts/launchpad-deck`)
- **Preview path**: `/launchpad-deck/`
- **Type**: slides (20-slide pitch deck)
- **Purpose**: 20-slide stakeholder pitch deck

### 3. Startup Launchpad 60-Second Trailer (`artifacts/launchpad-video`)
- **Preview path**: `/launchpad-video/`
- **Type**: video (animated React/Framer Motion)
- **Purpose**: 60-second animated trailer for the program
- **URL**: All scenes use `launchpad.ixdia.org`

### 4. Startup Launchpad Program Diagrams (`artifacts/launchpad-diagrams`)
- **Preview path**: `/launchpad-diagrams/`
- **Type**: web (React-Vite, Framer Motion, Shadcn)
- **Tabs**:
  - Diagram A: The Journey (blueprint / infographic / narrative styles)
  - Diagram B: Entry Points (blueprint / infographic / narrative styles)
  - 📅 Calendar — 4-view interactive calendar (Gantt timeline, Semester Cards, Event Milestones, Design Challenges)

### 5. Startup Launchpad Proposal (`artifacts/launchpad-proposal`)
- **Preview path**: `/launchpad-proposal/`
- **Type**: web (React-Vite, wouter routing)
- **Routes**:
  - `/` or `/proposal` — 12-section program proposal with sticky TOC
  - `/faq` — 43-question FAQ (5 sections: Students, Teams, Faculty & Mentors, Judges, Sponsors & Administrators)
  - `/resources` — Required Resources Manifest (40 resources across 8 categories, Essential/Recommended/Stretch, filterable, pilot budget table)
- **Design**: Navy #0D2240, Gold #D4882A, Barlow Condensed / Barlow fonts

### 6. Startup Launchpad FAQ (`artifacts/mockup-sandbox`)
- **Preview path**: `/launchpad-faq/`
- **Type**: web (repurposed from mockup-sandbox; kind="design" in artifact.toml)
- **Port**: 8081
- **Purpose**: Standalone FAQ page with 43 questions across 5 audience sections
- **Features**: Real-time search, accordion expand/collapse, sticky TOC sidebar, print-friendly (all answers in DOM, hidden via CSS so print can reveal)

### 7. API Server (`artifacts/api-server`)
- **Preview path**: `/api`
- **Type**: Express 5 API server

## Key Commands

```bash
# Install all workspace packages
pnpm install

# Run all workflows
# Each artifact has its own workflow managed by Replit

# Run a specific artifact
pnpm --filter @workspace/launchpad run dev
pnpm --filter @workspace/launchpad-proposal run dev
pnpm --filter @workspace/launchpad-diagrams run dev
pnpm --filter @workspace/mockup-sandbox run dev
```

## Design System (shared across all artifacts)

- **Primary**: Navy `#0D2240`
- **Accent**: Gold `#D4882A`
- **Background**: Off-white `#F7F5F0`
- **Dark**: `#071628`
- **Muted**: `#8A99AA`
- **Fonts**: Barlow Condensed (display/headings), Barlow (body)
- **Print**: All artifacts have print stylesheets; accordion answers always in DOM (hidden via CSS, revealed via `display: block !important` in print)

## Navigation Cross-Links

- Proposal header → Resources, FAQ
- FAQ header → Proposal
- Resources header → Proposal, FAQ
- All footers → `launchpad.ixdia.org`
