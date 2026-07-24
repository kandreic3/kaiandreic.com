<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## 2026-07-24 — Impeccable plugin source verification
- Searched repository for `impeccable`, `/impeccable`, and `Impeccable`; no downloaded plugin source, command docs, or executable workflow files are present in the project.
- Only existing references are workspace memory notes: `workspace/CODER.md` and `workspace/CHANGELOG.md`.
- Do not claim `/impeccable init` or `/impeccable shape` are available until real plugin files/actions are provided or exposed by the environment.

## 2026-07-11 — Impeccable extract snapshot
- App entry: `src/index.tsx` mounts `<App />` and imports global styles from `tailwind.css`.
- Routing currently uses `HashRouter` in `src/App.tsx` with routes: `/`, `/burkemuseum`, `/recognize`, `/oceanwatch`, `/chimu`, `/studentworkflow`, plus `*`.
- Home page composition is primarily in `src/sections/Hero/index.tsx` (projects rail, passions rail, contact banner, inline footer).
- Navbar anchors (`#top`, `#projects`, `#contact`) are handled via `handleNavClick`; sub-pages navigate home first, then scroll.
- Main visual system pattern: warm background `#fdfaf5`, serif editorial headings (`PP Editorial Old`) + sans utility typography (`font-m`).
</coder>
