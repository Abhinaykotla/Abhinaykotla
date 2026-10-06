# CLAUDE.md

## Project

This one repo, `Abhinaykotla/Abhinaykotla`, does three public jobs at once, all read by
recruiters and hiring managers:

1. **The website**, live at https://abhinaykotla.com. GitHub Pages serves `main` from the repo
   root (`CNAME` sets the domain), so **every push to `main` is a production deploy**, with no
   staging.
2. **The GitHub profile page.** Because the repo name matches the username, `readme.md` renders
   at the top of github.com/Abhinaykotla. Writing in it is writing on the public profile, not in
   project docs.
3. **The resume download.** The PDF ships with the site (see Resume below).

Static vanilla HTML/CSS/JS: no build step, no package.json, no framework, no tests. Run locally
with `python serve.py` on http://localhost:8000 (it also forces PDFs to download).

### Layout

- `index.html`: the main page, holding two views: `#web-interface` and `#cli-interface`, a
  terminal emulator. Ctrl/Cmd+K swaps them.
- `js/data/`: all content, as `window.<name>Data` globals (`personal`, `education`, `skills`,
  `experience`, `projects`, `blog`, `cli`), plus `images/` and the resume PDF. Edit content here,
  not in HTML.
- `js/data-loader.js` merges the data into `window.portfolioData`; `js/web-interface.js` renders
  the web view; `js/cli-interface.js` runs the terminal; `js/main.js` runs the app shell,
  animations and service worker registration.
- `blog.html` lists posts (script: `js/blog-new.js`). `blog-post.html?slug=<slug>` renders one.
  Each post is a full HTML string in `js/data/blog.js`, with images in
  `js/data/images/blog/<slug>/`.
- `css/main.css` only `@import`s the rest; theme tokens live in `css/variables.css`.
- `resume.html` is a fallback download page. `serve.py` and `start-server.bat` are local only.
- Leftover files: `js/blog.js` is empty and `js/data.js` is unused. Leave them unless asked.

### Resume

- The LaTeX source lives outside this repo. The owner compiles it and overwrites
  `js/data/Abhinay's_CV.pdf` under the same name. Outside sites link to that exact URL, so never
  rename it.
- The web buttons fetch the PDF and save it as `Abhinay_Kotla_Resume.pdf`, falling back to
  `resume.html`. The CLI `resume` command downloads it directly under the same name.
- To ship a new resume: commit the PDF, bump `CACHE_NAME` in `sw.js`, then push. Without the bump,
  returning visitors keep downloading the old PDF from the service worker cache.

### Gotchas

- Career facts are hand-copied into five places, and a change must land in all of them:
  `js/data/*.js`, the CLI strings in `js/data/cli.js` (the CLI does not read the other data
  files), the subtitle at `index.html:43`, `readme.md`, and the resume PDF.
- Bump the `?v=NN` on the `<script>`/`<link>` tag of any JS/CSS file you change.
- `sw.js` serves its precached files first (`index.html`, core JS/CSS, the resume PDF), so
  returning visitors keep old copies until `CACHE_NAME` is bumped. Bump it whenever one of those
  changes. Locally, tick "Update on reload" in DevTools before judging a change.

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
