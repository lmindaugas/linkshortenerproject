# Agent Instructions — Link Shortener Project

This file is the entry point for LLM agents working in this codebase. All detailed coding standards and conventions are split into separate documents in the `/docs` directory. ALWAYS **refer to the relevant .md file BEFORE generating any code:**

---

## Docs Reference

| Domain | File |
|--------|------|
| Authentication | [`/docs/auth.md`](/docs/auth.md) |
| UI Components | [`/docs/ui.md`](/docs/ui.md) |

## Quick Reference

- **Framework:** Next.js 16 App Router (RSC-first)
- **Language:** TypeScript 5 — strict mode enforced
- **Database:** Neon PostgreSQL via Drizzle ORM
- **Auth:** Clerk
- **UI:** shadcn/ui (base-nova style) + Tailwind CSS v4
- **Icons:** lucide-react
- **Package manager:** npm

## Core Rules

1. Always read the relevant `/docs` document before implementing a feature in that domain.
2. Never disable TypeScript strict checks or add `@ts-ignore` without an explicit comment explaining why.
3. Prefer Server Components. Only add `"use client"` when browser APIs or React hooks are required.
4. All database access goes through `db/index.ts`. Never instantiate Drizzle directly in components or route handlers.
5. All UI components must use the `cn()` utility from `@/lib/utils` for conditional class merging.
6. Run `npm run lint` and resolve all errors before considering a task complete.
