# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static personal portfolio site (vanilla HTML/CSS/JS, no build step, no package.json) deployed at **abhinaykotla.com** (see `CNAME`). The only "tool" is `serve.py`, a Python `http.server` wrapper that adds CORS headers and forces PDF downloads. Pages: `index.html` (main), `blog.html`, `blog-post.html`, `resume.html`.

## Running locally

```powershell
python serve.py            # serves on http://localhost:8000
# or:
.\start-server.bat
```

There is no build, no lint, no test suite. Editing a file = reloading the browser.

**Cache-busting:** script and stylesheet tags use `?v=NN` query strings (currently `v=20` in `index.html`). When you change a JS/CSS file referenced from HTML, bump the `?v=` number on its `<script>` / `<link>` tag, or browsers (and the service worker) may serve a stale copy. The version is per-tag, not global — `blog.html` and `blog-post.html` use older `v=12` / `v=10` and don't always need bumping when only `index.html` assets change.

## Architecture

### Data-driven rendering

All page content lives in `js/data/*.js` as plain `window.<name>Data = {...}` globals — there is no fetch, no JSON, no module system. Load order in `index.html` matters:

1. `js/data/personal.js`, `education.js`, `skills.js`, `experience.js`, `projects.js`, `blog.js`, `cli.js` — each defines one global (`personalData`, `educationData`, etc.)
2. `js/data-loader.js` — polls until all 7 modules are present, then merges them into `window.portfolioData` and dispatches the `portfolioDataLoaded` event.
3. `js/data-patch.js` — provides `window.safeDataAccess('path.to.field', default)` and a retry fallback in case the loader hasn't fired yet.
4. `js/web-interface.js` (`WebInterface` class) — reads `window.portfolioData` and injects HTML into the `Loading...` placeholder divs in `index.html` (`#about-summary`, `#skills-content`, `#timeline`, `#projects-grid`, `#blog-grid`, etc.).
5. `js/cli-interface.js` (`CLIInterface` class) — terminal emulator that consumes `portfolioData.cliCommands`.
6. `js/main.js` (`PortfolioApp` class) — orchestrates loading screen, view toggle, scroll/parallax/reveal animations, neural-network canvas, hero particle systems, hamburger menu.

When editing content (a new project, a job, a skill), change the corresponding `js/data/*.js` file — **do not** edit HTML or rendering code unless you also need to change layout.

### Dual-view (Web ↔ CLI) toggle

`index.html` contains two top-level containers: `#web-interface` and `#cli-interface`. `PortfolioApp.toggleView()` swaps the `active` class between them (Ctrl/Cmd+K shortcut, Escape exits CLI). The CLI is a real terminal emulation with history, tab completion, and easter eggs, driven by command definitions in `js/data/cli.js`. Preference is persisted in `localStorage.preferredView`.

### CSS structure

`css/main.css` is an `@import` manifest — actual styles split across `variables.css`, `animations.css`, `utilities.css`, `components/*.css` (buttons, nav, cli, footer, etc.), `sections/*.css` (hero, about, skills, etc.), plus `responsive.css` and `mobile-responsive.css`. The pitch-black + orange theme is centralized in `variables.css`. Page-specific overrides for blog live in `css/pages/blog.css` and `css/pages/blog-post.css`.

### Service worker

`sw.js` precaches a hardcoded list of URLs (`/`, `/index.html`, `/blog.html`, `/css/main.css`, `/js/main.js`, etc.) under `CACHE_NAME = 'abhinay-portfolio-v1'`. When you add a *new* top-level page or rename a cached asset, also bump `CACHE_NAME` (e.g. `v2`) or returning visitors will hit stale cache. The `?v=` query strings don't help here since the SW matches the URL including the query.

## Known cruft (don't be confused by it)

- `js/blog.js` is an **empty file**; `js/blog-new.js` is the real blog page script (loaded by `blog.html`).
- `js/data.js` (root of `js/`, 20KB) is the **legacy monolithic data file**, replaced by `js/data/*.js`. Nothing in any HTML references it — leave it alone unless asked to clean up.
- Resume PDF lives at `js/data/Abhinay's_CV.pdf` (note the apostrophe and underscore). `serve.py` has special-case logic to force `Content-Disposition: attachment` for `.pdf` requests so the download works locally.

## Conventions

- Vanilla JS only — no bundler, no TypeScript, no framework. Use `class`, `window.*` globals, and standard browser APIs (IntersectionObserver, Canvas, Web Audio).
- Commits in this repo use short prefixes (`fix:`, `refactor:`, `Enhance...`) — match the existing style when committing.
- Recent commits focus on visual polish (animations, responsiveness, premium styling). Treat the design as opinionated: pitch-black background, orange (`#ff8c42` / `#ff4757`) accents, JetBrains Mono + Inter fonts.
