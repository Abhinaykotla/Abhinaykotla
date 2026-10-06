# CLAUDE.md

## Project

Abhinay's personal portfolio, live at https://abhinaykotla.com and read by recruiters and hiring
managers. Static vanilla HTML/CSS/JS: no build step, no package.json, no framework, no tests.

Run locally with `python serve.py` on http://localhost:8000.

- Every push to `main` is a production deploy: GitHub Pages serves `main` from the repo root, with
  no staging.
- `readme.md` is the public GitHub profile README (the repo is `Abhinaykotla/Abhinaykotla`), not
  project docs.
- Content lives in `js/data/*.js` as `window.<name>Data` globals. Edit it there, not in HTML.
- Career facts are hand-copied into five places, and a change must land in all of them:
  `js/data/*.js`, the CLI strings in `js/data/cli.js` (the CLI does not read the other data
  files), the subtitle at `index.html:43`, `readme.md`, and the resume PDF.
- Bump the `?v=NN` on the `<script>`/`<link>` tag of any JS/CSS file you change.
- `sw.js` serves its precached files first (`index.html`, core JS/CSS, the resume PDF), so
  returning visitors keep old copies until `CACHE_NAME` is bumped. Bump it whenever one of those
  changes. Locally, tick "Update on reload" in DevTools before judging a change.
- The resume is `js/data/Abhinay's_CV.pdf`, linked from `index.html`, `resume.html`,
  `js/web-interface.js`, `js/cli-interface.js` and `sw.js`. Outside sites link to that exact URL,
  so do not rename it. Its LaTeX source is not in this repo.
- `js/blog.js` is empty (the blog script is `js/blog-new.js`), and `js/data.js` is an unused
  legacy file.

## Working with me

- Short and plain by default; depth only when I ask. Commit messages and plans stay thorough.
- End every reply with a `Pending tasks` list (one line each, or "none") and a single `Next:`
  line with your recommendation.
- Never a bare question: give the problem, the options with their consequences, and your
  recommendation first. Batch open questions into one `AskUserQuestion`, recommended option first.
- Decide small, reversible calls yourself and say so. A settled question stays settled; if the
  scope moved, say what changed instead of asking again.
- I often dictate: infer the obvious word, and ask only where the readings change the work.
- Report outcomes as they are: show a failed check, name a skipped step.

## How work gets done

- You do the work yourself, start to finish: plan, build, test, deliver.
- A clear small fix: name the scope, do it, report. Bigger or multi-step work: plan each task
  (problem, files, what it leaves out) and get a nod before coding.
- Write code only where a caller needs it. A change that replaces an old path deletes it in the
  same commit: no commented-out code, no "legacy" branches.

## Subagents

- Only to keep your context clean (a wide search, a long doc) or when I ask for a fan-out. As few
  as the work needs, usually one.
- Pass `model` on every dispatch, and tell me which model each one runs:
  - `haiku` for small, cheap tasks: lookups, greps, pulling one fact from a file.
  - `sonnet` for almost everything else: research, review, multi-file work.
  - `opus` only when absolutely needed: sonnet tried and fell short, or a genuine dead end.
  - Never `fable`.
- Never `fork` delegated work: a fork always runs the session's model, whatever `model` says.

## Git

- The default branch is `main`, and that is usually where I work. Stay on the checked-out branch;
  never create, switch or delete a branch or worktree unless I ask.
- One commit per step, as soon as that step works. Never batch at the end.
- `git status --short` before committing, then stage the files you changed by name. Never
  `git add -A` / `.`, `git stash`, `git reset --hard` or `--no-verify`.
- Conventional Commit subject plus a prose body: what changed, why, and anything worth knowing.
  Pass the message on stdin through a bash heredoc (`git commit -F - <<'MSG'`), never a
  PowerShell here-string.
- Never push unless I ask in that message: one approval, one push. Force-push needs its own ask.

## UI and copy

- No em or en dashes in text a person reads (a numeric range is fine).
- No internal detail in user text: codenames, ticket refs, thresholds or raw metrics. Give a plain
  label and a next step. Unshipped features say "coming soon", never a date.
- Steps and collapsibles, never a blob of text. Walk the reader through.
- No layout shift on load, no scale or translate on hover, no skeleton loaders unless asked.
- Use the project's theme tokens (`css/variables.css`), not raw colors. Extend an existing control
  rather than adding a parallel one.
- Screenshot visual work and judge it before calling it done. Browser checks and screenshots run
  in Playwright, never in my own Chrome.
