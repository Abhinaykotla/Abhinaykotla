# CLAUDE.md

Personal instructions for Claude Code in this repository.

## Orientation

<!-- verified 2026-10-06 -->

Abhinay's personal portfolio, live at https://abhinaykotla.com and read by recruiters and hiring
managers. Static vanilla HTML/CSS/JS: no build step, no package.json, no framework. GitHub Pages
serves `main` from the repo root (legacy build, `CNAME` sets the domain), so **every push to `main`
is a production deploy**, live in about a minute. There is no staging and no other branch. The repo
is `Abhinaykotla/Abhinaykotla`, so `readme.md` is the public GitHub profile README, not project docs.

Run locally with `python serve.py` (or `start-server.bat`) on http://localhost:8000. `serve.py` adds
CORS headers and forces `Content-Disposition: attachment` on PDFs. Pages: `index.html` (main),
`blog.html`, `blog-post.html`, `resume.html`. The service worker serves cached copies first, so
before judging a change, open DevTools > Application > Service Workers and tick "Update on reload"
or unregister it.

## Environments

- **Local (`localhost:8000`) is the working target**: edit, reload and commit without asking.
- **`origin/main` is production.** It moves only by a push the owner approved in that message.
- No secrets live here. Never commit credentials, tokens or `.env` files.

### Approval required

State the exact command, effect and reversibility, then wait. Approval covers one run.

- Any `git push`, and separately any force-push.
- Renaming or deleting `js/data/Abhinay's_CV.pdf`: outside sites link to that exact URL.
- GitHub repo settings, Pages config, the custom domain and DNS are read-only.

## Git and delivery

- Work on the checked-out branch, which is `main`; committing to it locally is the normal flow
  here. Never create, switch or delete a branch, and never cut a worktree, unless the owner asks.
- Run `git status --short` before every edit and commit. A modified file you did not touch is the
  owner's (the resume PDF often is), so never edit, revert, stage or commit it. If your task needs
  it, ask.
- Commit only owned paths: `git add <new files> && git commit --only -F - -- <paths>`, message on
  stdin via a bash heredoc. Everything after `--` is a pathspec, so `-F` must precede it, and
  `--only` cannot name an untracked file.
- Never `git add -A`, `git add .`, `git stash`, `git reset --hard`, `git checkout -- <path>`, or
  `--no-verify`. There is no pre-commit hook.
- One commit per step, the moment that step is correct, never batched at the end.
- Conventional Commit subject (`feat:`, `fix:`, `refactor:`) plus a prose body: what changed, why,
  the detail worth knowing, how it was checked.
- Never push unless the owner asks in that message, and one approval covers exactly one push.

## Checks

<!-- verified 2026-10-06 -->

- There is no build, lint, test suite or CI. The browser is the only gate: load the changed page
  on localhost:8000, confirm a clean console, and screenshot the web view and the CLI view
  (Ctrl/Cmd+K) at desktop width and at ~390px. Playwright MCP is available for this.
- A stated reason a check cannot run is itself a claim. Test it before recording it as a
  constraint.

## Architecture and domain

<!-- verified 2026-10-06 -->

- **Content is data.** Everything lives in `js/data/*.js` as `window.<name>Data` globals (no
  fetch, no modules). Change content there, not in HTML or rendering code. Load order in
  `index.html` matters: the 7 data files, then `data-loader.js` (waits for all 7, builds
  `window.portfolioData`, fires `portfolioDataLoaded`), `data-patch.js` (`safeDataAccess`),
  `web-interface.js`, `cli-interface.js`, `main.js`.
- **Career facts are copied by hand into five places.** A new job, title or project must land in
  all of them: `js/data/{personal,experience,projects,skills,education}.js`; the hand-written
  response strings in `js/data/cli.js` (the CLI does not read the other data files); the
  brand subtitle at `index.html:43`; `readme.md` (GitHub profile); and the resume PDF.
- **Dual view.** `#web-interface` and `#cli-interface` swap an `active` class via
  `PortfolioApp.toggleView()` in `js/main.js` (Ctrl/Cmd+K, Escape exits). Preference persists in
  `localStorage.preferredView`.
- **Two caches, both must move.** (1) Script and stylesheet tags carry per-tag `?v=NN` (`v=20` in
  `index.html`, older on the blog pages); bump the tag of any JS/CSS file you change. (2) `sw.js`
  is cache-first and precaches `/`, `/index.html`, `/blog.html`, core JS/CSS and the resume PDF.
  Returning visitors get those cached copies, old `?v=` tags included, until `CACHE_NAME`
  changes. Bump `CACHE_NAME` (currently `abhinay-portfolio-v1`) whenever a precached file
  changes, the resume PDF included.
- **Resume PDF** is `js/data/Abhinay's_CV.pdf` (apostrophe, underscore), referenced from
  `index.html` (2), `resume.html` (2), `js/web-interface.js`, `js/cli-interface.js` and `sw.js`.
  Its LaTeX source is not in this repo; the owner compiles it.
- **CSS:** `css/main.css` is an `@import` manifest over `variables.css`, `animations.css`,
  `utilities.css`, `components/`, `sections/`, `responsive.css`, `mobile-responsive.css`. Theme
  tokens live in `variables.css`; blog overrides in `css/pages/`.
- **Cruft:** `js/blog.js` is empty (the blog script is `js/blog-new.js`); `js/data.js` is the
  unused legacy data file; `project-image-generation-prompts.md` is a prompt list, not loaded by
  the site. Leave them unless asked.

## UI and copy

- Never introduce an em dash or en dash into text a person reads, the resume included (in LaTeX
  that means no `--` or `---`).
- Keep internal detail out of visible text: no PR numbers, ticket refs, codenames or raw
  thresholds. Unshipped work says "coming soon", never a date.
- Never ship a blob of text: steps and collapsibles, and walk the reader through.
- Scope an existing control for a per-item variant instead of adding a parallel surface.
- Screenshot visual work and judge it before calling it done.
- Current design: pitch-black background, orange accents (`#ff8c42` / `#ff4757`), JetBrains Mono
  and Inter. Vanilla JS only: `class`, `window.*` globals, standard browser APIs.

## Working with the owner

- End every reply with a `Pending tasks` list, one line each, and a single `Next:` line.
- Never a bare question. State the problem, give concrete options with their consequences, and
  mark a recommendation. Batch what is open into one ask.
- Decide the small reversible ones yourself and say in the reply that you did.
- A settled question stays settled. Where the scope moved and the old answer no longer holds, say
  what changed rather than asking again from scratch.
- Plan before coding. Say what you are about to do, then do it.
- Report outcomes faithfully: if a check failed, show it; if a step was skipped, say so.

### Subagents

- Name the model on every dispatch. Never `fable`. `opus` for judgment such as multi-file
  reasoning, review, architecture and debugging; `sonnet` for mechanical work such as lookups,
  greps, extraction and bulk edits; `haiku` for pure lookups.
- Size each fan-out to the work in front of it. One agent is the usual answer, and more only
  where the work genuinely splits.
- Delegate to keep your own context clean or for parallelism. Everything else you do yourself,
  because briefing out a small change costs more than making it.

### What is not ours

- Ours is what the task named. Nothing else is.
- It does not block the task: it is a finding, not a task. List findings in their own short block
  at the end of the reply, one line each, naming where it is and roughly what it would cost.
- It blocks the task: make the smallest unblocking fix, in its own commit, and say so.
- A finding becomes work only when the owner takes it.
