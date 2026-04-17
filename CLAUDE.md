# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal site built with React + TypeScript + Vite. Four top-level tabs, each with a distinct layout and feature set:

- **Personal** — personal info, about me, etc.
- **Career** — work history, projects, skills
- **Teaching** — courses, students, materials
- **Writing** — blog posts, essays, publications

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # type-check + build (tsc --noEmit && vite build)
npm run preview   # preview production build
npm run lint      # TypeScript type-check (tsc --noEmit)
```

## Architecture

**Stack**: React 18 + TypeScript + Vite. No external router — hash-based tab navigation via `window.location.hash` (e.g. `/#career`). No CSS-in-JS — CSS Modules per component + shared design tokens in `src/styles/tokens.css`.

**Tab structure**: Each tab is a top-level route rendered by `App.tsx` based on the current hash. Tabs live in `src/tabs/` (e.g. `PersonalTab.tsx`, `CareerTab.tsx`). Each tab owns its own layout and subcomponents under `src/components/<tab>/`.

**State**: React Context for global UI state (active tab). Tab-local state lives in each tab component.

**Data**: Static content in `src/data/` as TypeScript objects/arrays. Types defined in `src/types/`.

**Path alias**: `@/` → `src/`.
