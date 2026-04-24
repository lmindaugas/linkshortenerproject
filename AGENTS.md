# Agent Instructions — Link Shortener Project

> ⚠️ **MANDATORY — NON-NEGOTIABLE REQUIREMENT** ⚠️
> Before writing **any** code, you **MUST** read the relevant `/docs` instruction file(s) for the domain(s) you are working in. This is not optional. Generating code without first reading the applicable `/docs` file is a violation of these instructions.

This file is the entry point for LLM agents working in this codebase. All detailed coding standards and conventions are split into separate documents in the `/docs` directory.

---

## Docs Reference

**REQUIRED ACTION:** Identify which domain(s) your task touches, then call `read_file` on every matching file below **before producing any code output.**

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

1. **BLOCKING RULE — Read the relevant `/docs` file(s) FIRST, before writing a single line of code.** If you have not read the applicable doc, stop and read it now. No exceptions.
2. Never disable TypeScript strict checks or add `@ts-ignore` without an explicit comment explaining why.
3. Prefer Server Components. Only add `"use client"` when browser APIs or React hooks are required.
4. All database access goes through `db/index.ts`. Never instantiate Drizzle directly in components or route handlers.
5. All UI components must use the `cn()` utility from `@/lib/utils` for conditional class merging.
6. Run `npm run lint` and resolve all errors before considering a task complete.
