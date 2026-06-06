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

**State**: No global React Context — tab-local state lives in each tab component. Dark mode is handled via a `useDarkMode` hook (watches `prefers-color-scheme`).

**Data**: Static content in `src/data/` as TypeScript objects/arrays. Types defined in `src/types/`.

**Path alias**: `@/` → `src/`.

## Components

- **Footer** (`src/components/Footer/`) — simple copyright footer, rendered by `App.tsx`.
- **WorldMap** (`src/components/WorldMap/`) — interactive world map using `react-simple-maps` + Natural Earth projection. Renders visited countries as hatched overlays. Supports dark mode. Used in `PersonalTab`.
- **DarkModeToggle** (`src/components/DarkModeToggle/`) — toggle in the NavBar.

## In-Progress / Experimental

- **Career2Tab** (`src/tabs/Career2Tab/`) — experimental Gantt-chart timeline view of career history (education, teaching, work rows) using pure CSS positioned `div` bars. Accessible at `/#career2` but not in the NavBar yet. Lane-assignment logic handles overlapping roles. Intended as a potential replacement or supplement to `CareerTab`.

## Favicons

Two favicon variants exist in `public/`: `favicon-frog.png` (default) and `favicon-frog-horns.png` (dark mode / alt). These mirror the profile photo variants (`profile.jpg` / `profile-horns.png`).

## Personal Data Shape

`src/data/personal.ts` exports a `PersonalInfo` object with: `name`, `pronouns`, `bio`, `photo`, `photoDark`, `links`, `interestsIntro`, `interests` (books/music/etc. with grouped entries and inline links), `visitedCountries` (ISO alpha-2 codes), `travelIntro`, `travelNote`.
