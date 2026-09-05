<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Instructions

## Component organization

- Keep page and feature components focused on their domain behavior. Before
  adding a nested component, decide whether it is feature-specific or a
  reusable UI primitive.
- Colocate a component when it is meaningful only to its parent. Extract it
  when it has an independent responsibility, is generic enough for reuse, or
  is already used in more than one place. Do not extract solely because it is
  several lines long.
- Put reusable application components in `src/components/`. Put small,
  dependency-free UI primitives in `src/components/ui/` and reusable SVG icons
  in `src/components/icons/`. Use descriptive kebab-case filenames, such as
  `src/components/icons/speaker-icon.tsx`.
- Search for an existing component before creating a new one. Extend or compose
  an existing primitive when its semantics match; avoid near-duplicates.
- Give extracted components a small, typed API. Reusable icons should accept
  relevant SVG props (including `className`) instead of hard-coding placement
  or parent-specific styling.
- Keep reusable presentational components free of feature state and side
  effects. State, cookies, and event handling belong in the owning feature,
  hook, or provider.
- Preserve Server Component compatibility by adding `"use client"` only where
  browser APIs, state, effects, or event handlers require it.
- Use semantic HTML and accessible names at the interaction boundary.
  Decorative icons must use `aria-hidden="true"`; the containing control must
  provide its label.
- Import shared components directly from their files. Do not add barrel exports
  solely for convenience.
- During review, check touched components for extraction opportunities without
  expanding the change into unrelated refactoring.

## Code Style

- Use TypeScript for all new files
- Prefer functional components in React
- Use snake_case

## Architecture

- Follow the repository pattern
- Keep business logic in service layers
