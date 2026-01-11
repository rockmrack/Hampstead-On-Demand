# AGENTS.md - Hampstead On-Demand

## Commands
- **Dev**: `npm run dev` | **Build**: `npm run build` | **Lint**: `npm run lint`
- **Test all**: `npm run test` | **Single test**: `npx vitest run path/to/file.test.ts`
- **E2E tests**: `npm run test:e2e` | **E2E UI**: `npm run test:e2e:ui`

## Architecture
- **Framework**: Next.js 14 (App Router) with TypeScript, deployed on Vercel
- **Database**: Supabase (PostgreSQL) - schema in `supabase/schema.sql`
- **Styling**: Tailwind CSS + shadcn/ui components in `src/components/ui/`
- **Monitoring**: Sentry for error tracking

## Structure
- `src/app/` - Next.js pages and API routes (App Router)
- `src/components/` - React components (UI primitives in `ui/`)
- `src/lib/` - Utilities: `supabase.ts`, `utils.ts`, `data.ts`, `rate-limit.ts`
- `src/__tests__/` - Vitest unit tests | `e2e/` - Playwright E2E tests

## Code Style
- Use `@/*` path alias for imports (maps to `src/*`)
- Use `cn()` from `@/lib/utils` for className merging
- Validate with Zod schemas; use react-hook-form for forms
- Components: PascalCase files, functional components with TypeScript
- Strict TypeScript enabled - no `any` types or error suppression
