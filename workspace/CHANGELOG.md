<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>

## 2026-07-24 — Fix background color consistency
- Changed Tailwind `--background` token from pure white (`0 0% 100%`) to warm cream (`40 60% 98%` ≈ `#fdfaf5`) in `tailwind.css`
- This aligns `body` bg-background with the app wrapper and loader which already used `#fdfaf5`
- No layout or component changes made

## 2026-07-24 — Integrate Anima Playground React SDK
- Added `@animaapp/playground-react-sdk: 0.10.0` to `package.json` dependencies
- Wrapped app root in `AnimaProvider` inside `src/index.tsx`
- Wired `useAuth` into `src/screens/StudentWorkflow/components/Header.tsx` — LOGIN/LOGOUT buttons now call `login()`/`logout()`, user name shown when authenticated
- Updated `Button` component to accept optional `onClick` and `disabled` props
- No Zustand/store files were found in the project; no store migration needed

## 2026-07-24 — Unsupported Impeccable assumptions rejected
- Completed Step 5 by preserving the verified finding that no repo-visible Impeccable plugin workflow exists
- Rejected unsupported references to `/impeccable init`, `/impeccable shape`, or fabricated plugin output until real plugin files/actions are exposed
- Existing guidance remains in `workspace/CODER.md`; no portfolio source files were changed
- Files touched: `workspace/CHANGELOG.md`

## 2026-07-24 — Impeccable output application blocked
- Step 4 cannot apply Impeccable output because no verified plugin init/shape workflow has produced any repo-visible output
- Preserved existing portfolio sections and avoided fabricating plugin-generated direction or content
- Files touched: `workspace/CHANGELOG.md`

## 2026-07-24 — Impeccable shaping workflow blocked
- Re-searched repository for `[Ii]mpeccable|/impeccable`; only workspace notes exist
- Step 3 cannot run because no verified plugin command, source file, or documented shaping action is available in the repo
- Preserved prior rule: do not invent `/impeccable shape` behavior without real plugin exposure
- Files touched: `workspace/CHANGELOG.md`

## 2026-07-24 — Impeccable initialization workflow blocked
- Re-searched repository for `impeccable`, `/impeccable`, and `Impeccable`; only workspace notes exist
- Step 2 cannot run because no verified plugin command, source file, or documented initialization action is available in the repo
- Preserved prior rule: do not invent `/impeccable init` behavior without real plugin exposure
- Files touched: `workspace/CHANGELOG.md`

## 2026-07-24 — Verify Impeccable plugin source
- Searched repository for `impeccable`, `/impeccable`, and `Impeccable`; no downloaded plugin source, command docs, or executable workflow files are present
- Confirmed only prior workspace notes reference Impeccable, so `/impeccable init` and `/impeccable shape` remain unverified in this repo
- Removed temporary runtime debug console logs from project page hero images and Recognize carousel frame logic
- Files touched: `src/pages/BurkeMuseum/index.tsx`, `src/pages/Chimu/index.tsx`, `src/pages/OceanWatch/index.tsx`, `src/pages/RecognizeApp/index.tsx`, `workspace/CODER.md`

## 2026-07-24 — Recognize viz section scroll blank fix
- Replaced sticky-only carousel viewport with fixed/absolute frame mode logic tied to wrapper scroll range to avoid overflow-context sticky failures
- Files touched: `src/pages/RecognizeApp/index.tsx`
- Pattern noted: Data Visualization cards are absolutely layered and require a pinned viewport owner to stay visible through the section

## 2026-07-24 — AI upscale for project hero headers
- Updated project hero header Cloudinary transforms to higher fidelity with sharpening (`q_auto:best`, `dpr_3.0`, `w_3800`, `e_sharpen:120`) without changing rendered layout size
- Files touched: `src/pages/BurkeMuseum/index.tsx`, `src/pages/Chimu/index.tsx`, `src/pages/OceanWatch/index.tsx`, `src/pages/RecognizeApp/index.tsx`
- Pattern noted: blur risk is from source resolution/compression mismatch against large full-bleed hero containers

## 2026-07-24 — Improve project hero image clarity
- Upgraded top header image URLs on project pages to high-width Cloudinary transforms (`w_2600`, `dpr_auto`, `q_auto`, `f_auto`)
- Applied to hero banners in `src/pages/BurkeMuseum/index.tsx`, `src/pages/Chimu/index.tsx`, `src/pages/OceanWatch/index.tsx`, `src/pages/RecognizeApp/index.tsx`
- Pattern noted: project page hero images are full-bleed `object-cover` banners at fixed clamp height, so source resolution heavily impacts sharpness
- Files touched: those four page files + `workspace/CHANGELOG.md`

## 2026-07-24 — Update browser tab title
- Changed document title in `index.html` from default Anima text to `Kai Andreic`
- Existing custom favicon remains linked to the provided Cloudinary PNG
- Files touched: `index.html`, `workspace/CHANGELOG.md`

## 2026-07-24 — Set custom site icon
- Added favicon link in `index.html` pointing to the provided Cloudinary PNG URL
- This updates browser tab/bookmark icon branding without changing layout/components
- Files touched: `index.html`, `workspace/CHANGELOG.md`

## 2026-07-14 — Navbar center logo made bubblier
- Increased rounded/bouncy feel of the Korean center mark in `src/sections/Navbar/components/NavbarCenter.tsx`
- Slightly increased size and adjusted spacing/hover scale while preserving black fill and no border
- Added subtle soft highlight/shadow for plumper bubbly character without reintroducing outlines
- Files touched: `src/sections/Navbar/components/NavbarCenter.tsx`, `workspace/CHANGELOG.md`

## 2026-07-14 — Logo simplified to black fill + Chimu card disabled
- Removed stroke/outline from center Korean logo so it is pure black text in `src/sections/Navbar/components/NavbarCenter.tsx`
- Chimu project card now shows diagonal "UNDER CONSTRUCTION" tape and is non-clickable in `src/sections/Hero/index.tsx`
- Pattern noted: homepage project rail is currently rendered inline in `Hero/index.tsx` (not via shared ProjectCard)
- Files touched: `src/sections/Navbar/components/NavbarCenter.tsx`, `src/sections/Hero/index.tsx`, `workspace/CHANGELOG.md`

## 2026-07-14 — Navbar center logo darkened and slightly downsized
- Updated center typography logo in `src/sections/Navbar/components/NavbarCenter.tsx` from blue outline to near-black outline/shadow while preserving bubbly feel
- Reduced logo size from `42/52px` to `38/46px` for a subtler visual weight
- Preserved existing interaction behavior (click + Enter/Space) and non-button typography treatment
- Files touched: `src/sections/Navbar/components/NavbarCenter.tsx`, `workspace/CHANGELOG.md`

## 2026-07-14 — Header spacing, bubbly logo style, route loading, and type scale tuning
- Increased navbar vertical spacing and improved fullscreen edge consistency in `src/sections/Navbar/index.tsx` + `src/sections/Navbar/components/NavbarLogo.tsx`
- Restyled center mark to a bubbly outlined typography logo in `src/sections/Navbar/components/NavbarCenter.tsx`
- Added lazy route loading fallback screen in `src/App.tsx` for slower project-page loads
- Introduced global 2px-step type scale tokens from 12px and overflow/layout guards in `tailwind.css`

## 2026-07-14 — Navbar center converted from button CTA to typography logo
- Removed button/badge treatment in `src/sections/Navbar/components/NavbarCenter.tsx` and kept center mark as plain clickable text
- Retained top scroll behavior via existing `onClick` handler and keyboard accessibility with Enter/Space
- Styling now focuses on bold, bubbly logo typography only (no border, no button chrome)
- Files touched: `src/sections/Navbar/components/NavbarCenter.tsx`, `workspace/CHANGELOG.md`

## 2026-07-14 — Navbar center text made bold and logo-like
- Updated Korean center text styling in `src/sections/Navbar/components/NavbarCenter.tsx` to feel more like a visual mark
- Increased weight/size and added rounded badge treatment, stronger border, and tactile hover/press motion
- Pattern noted: center nav mark remains a button and routes to `#top` through existing Navbar click handler
- Files touched: `src/sections/Navbar/components/NavbarCenter.tsx`, `workspace/CHANGELOG.md`

## 2026-07-14 — Footer image updated to new Cloudinary URL
- Replaced footer brand image URL with `https://res.cloudinary.com/dkdwqtlzz/image/upload/v1784070460/IMG_0347_zot3zi.jpg`
- Updated occurrences in `src/sections/Footer/components/FooterBrand.tsx` and inline footer in `src/sections/Hero/index.tsx`
- Pattern noted: footer brand image is duplicated in standalone Footer component and homepage inline footer
- Files touched: `src/sections/Footer/components/FooterBrand.tsx`, `src/sections/Hero/index.tsx`, `workspace/CHANGELOG.md`

## 2026-07-11 — Impeccable: extract + document project state
- Added fresh codebase intelligence to `workspace/CODER.md` (entry points, routes, section ownership, nav behavior, style conventions)
- Confirmed active routing implementation is `HashRouter` in `src/App.tsx` with six case-study/workflow paths + fallback
- Captured homepage composition ownership in `src/sections/Hero/index.tsx` for faster future targeted edits
- Files touched: `workspace/CODER.md`, `workspace/CHANGELOG.md`

## 2026-05-28 — OceanWatch: high-contrast white annotation cards
- Switched all annotation cards from dark navy (rgba(10,30,50,0.88)) to solid white (#ffffff)
- Added accent-coloured left border (3px solid #0077A8) + drop shadow for clear separation
- Tag numbers now use accent blue + bold weight; titles dark (#0d1b2a); body text slate (#4a5568)
- Cards now stand out clearly against both the dark design images and the cream page background

## 2026-05-28 — OceanWatch: fix horizontal scroll bleed on Final Design annotations
## 2026-05-28 — OceanWatch: high-contrast white annotation cards
- Switched all annotation cards from dark navy (rgba(10,30,50,0.88)) to solid white (#ffffff)
- Added accent-coloured left border (3px solid #0077A8) + drop shadow for clear separation
- Tag numbers now use accent blue + bold weight; titles dark (#0d1b2a); body text slate (#4a5568)
- Cards now stand out clearly against both the dark design images and the cream page background

## 2026-05-28 — OceanWatch: fix horizontal scroll bleed on Final Design annotations
- Removed negative margin bleed (`margin: 0 -180px`) that caused horizontal overflow on both screens
- Annotation cards now absolutely positioned INSIDE the image (left/right: 16px) — no overflow
- Image stays full-width; cards float over the left/right edges of the image content itself
- Connector dots/lines removed (no longer needed with inset overlay approach)

## 2026-05-27 — OceanWatch: annotations moved outside image edges (peek-out style)
- Annotation cards now sit fully outside the image (left/right margin bleed via negative margin -180px)
- Image takes the central column (margin 170px each side), annotations occupy the flanks
- Dark navy bg (rgba(10,30,50,0.82)) + accentMid color numbers make cards clearly readable
- Connector dot+line bridges the gap between card and image edge
- Mobile: full-width image + compact tag bar below (no overlay blocking design)

## 2026-05-27 — OceanWatch: annotations now overlay on full-width Final Design images
## 2026-05-27 — OceanWatch: annotations now overlay on full-width Final Design images
- Both Classified View and General Public View images are now full-width (flex layout removed)
- Annotations sit as absolute-positioned frosted-glass pill cards over the left/right edges of the image
- Connector dot + line extends from each pill toward the image content
- Mobile: gradient-fade bottom strip with compact tag pills overlaying the bottom of the image
- Images no longer compete with sidebar text for width — they fill the full container

## 2026-05-27 — OceanWatch: side annotations with connector dots on Final Design screens
## 2026-05-27 — OceanWatch: annotations now overlay on full-width Final Design images
- Both Classified View and General Public View images are now full-width (flex layout removed)
- Annotations sit as absolute-positioned frosted-glass pill cards over the left/right edges of the image
- Connector dot + line extends from each pill toward the image content
- Mobile: gradient-fade bottom strip with compact tag pills overlaying the bottom of the image
- Images no longer compete with sidebar text for width — they fill the full container
- Classified View and General Public View now use left/right side annotation columns
- Each annotation has a small dot + horizontal line connector pointing toward the image
- On mobile, annotations gracefully fall back to a compact stacked list below the image
- Captions no longer sit below the image in a plain list format

## 2026-05-27 — Burke Museum: remove mobile captions, restore desktop border
- Removed "01 Home Page" and "02 Arts & Culture" caption labels under each mobile screen
- Added subtle `2px solid rgba(176,32,48,0.18)` border back to desktop stage container
- Desktop image itself has no border — border is on the outer stage wrapper only
- Uploaded skull/footprints/leaf images remain in both stage backgrounds

## 2026-05-27 — Burke Museum: replace SVG doodles with uploaded dino/leaf/footprint images
- Desktop stage: dino skull (top-left), footprints (bottom-right), leaf (bottom-left) as `<img>` at 0.11–0.13 opacity
- Mobile stage: skull (top-left), footprints (top-right), leaf (bottom-right) at 0.10–0.12 opacity
- Removed "Dino Land" and "Native Stories" pill badges entirely
- Removed orange border on desktop stage (border removed, shadow-only image)
- Stage labels simplified to "Big Screen" / "On The Go" (no emoji)

## 2026-05-27 — Burke Museum: fun dino + native american SVG illustrations in viz stages
- Desktop stage: warm amber/orange gradient bg (#FFF9ED→#FFE8C8), orange border (#FFB347), dino footprint + bone + feather + stars + arrow SVG doodles, pill reads "🦴 Dino Land"
- Mobile stage: warm pink gradient bg (#FFF0F0→#FFDDE8), red border (#FF3749), feather + bone + sun-wheel + color stars SVG doodles, pill reads "🪶 Native Stories"
- All doodles are inline SVG at low opacity (0.16–0.22) — no text watermarks, no generic AI patterns
- Ghost shadow on desktop image now uses amber, mobile screen borders now solid red (not dashed)

## 2026-05-26 — Burke Museum: replace desktop/mobile watermarks + labels with playful kids doodles
- Ghosted "desktop" / "mobile" serif watermark text → subtle ✦ star + dash doodle pattern at 15% opacity
- Pill badges updated from "Burke Museum — Desktop/Mobile" → "Burke Museum ✦"
- Section labels above each stage: "Desktop" → "Big Screen ✦", "Mobile" → "On The Go ✦"
- Same warm red color (#B02030) kept for doodles to match the existing palette

## 2026-05-26 — Burke Museum: unify desktop & mobile stage vibes
- Both stages now use same warm #f0ece4 cream background (mobile lost the red gradient)
- Matching dashed red border (rgba(176,32,48,0.22)) on both containers for a playful/fun feel
- Both stages share identical dot-grid decoration, same pill badge style, same ghost watermark
- Mobile screen borders switched from white solid → dashed red to match the container border
- Caption badges use same red-tinted bg (rgba(176,32,48,0.12)) with dark text on both stages

## 2026-05-26 — Burke Museum: fix captions, desktop bleed, remove dark bg
## 2026-05-26 — Burke Museum: unify desktop & mobile stage vibes
- Both stages now use same warm #f0ece4 cream background (mobile lost the red gradient)
- Matching dashed red border (rgba(176,32,48,0.22)) on both containers for a playful/fun feel
- Both stages share identical dot-grid decoration, same pill badge style, same ghost watermark
- Mobile screen borders switched from white solid → dashed red to match the container border
- Caption badges use same red-tinted bg (rgba(176,32,48,0.12)) with dark text on both stages

## 2026-05-26 — Burke Museum: fix captions, desktop bleed, remove dark bg
- Caption divs moved OUTSIDE the tilt wrapper — only the image rotates, captions are always flat
- Both 01 and 02 captions now share the same baseline regardless of screen size
- Desktop stage: added paddingBottom so image no longer bleeds off the bottom
- Desktop stage: background changed from dark #1a1714 → warm #f0ece4 (no more heavy dark feel)
- Desktop diagonal stripe opacity lowered to 0.12 so it's subtle, not dominant

## 2026-05-26 — Burke Museum: desktop stage bigger, mobile stage smaller
- Desktop top padding bumped to clamp(56px,8vw,100px) so it feels more spacious and dramatic
- Mobile screens shrunk from clamp(100px,16vw,220px) → clamp(80px,11vw,160px)
- Mobile stage minHeight reduced from clamp(220px,32vw,420px) → clamp(160px,22vw,300px)
- Mobile stage top padding reduced from clamp(48px,6vw,72px) → clamp(36px,5vw,56px)
- Desktop now clearly larger/heavier than mobile in the Final Design section

## 2026-05-26 — Burke Museum: dark editorial desktop stage + shrink mobile screens
- Desktop stage now uses dark #1a1714 bg with diagonal red stripe, ghost shadow layer behind image, ✦ icon, subtle white border glow
- Ghost red tinted duplicate behind main image gives a fun stacked/offset effect
- Mobile screens shrunk to clamp(100px,16vw,220px) to match desktop image visual weight
- Mobile minHeight reduced from clamp(260px,40vw,520px) → clamp(220px,32vw,420px)

## 2026-05-26 — Burke Museum: unified editorial stage sizing (prev)
- Both Desktop and Mobile stages now share identical anatomy: tall top padding, 3px white border, no bottom border (bleeds into floor)
- Decorative dot grid added top-right of both backdrops for visual texture
- Mobile screens resized to clamp(140px,22vw,280px) to match desktop image visual weight
- Desktop image gains matching white border + stronger drop shadow + -1.5deg tilt

## 2026-05-26 — Burke Museum: editorial mobile showcase redesign
- Two mobile screens now sit on a red diagonal backdrop with tilt/rotation for a fun, designed feel
- Screen 01 rotated -3deg left, Screen 02 rotated +2.5deg right, both with white border + drop shadow
- Red gradient blob behind, ghosted "mobile" type in background, pill badge at bottom
- minHeight uses clamp so it scales naturally from 480px mobile → 820px desktop

## 2026-05-25 — Chimu: Collapse Origin/What/Why/Use Cases into single compact background block
- 4 separate stacked rows → 1 two-column row with a merged paragraph + inline use-case grid
- Feature tags kept; student/professor lists now inline "→ Label — desc" format
- Vertical space cut by ~60%

## 2026-05-25 — Chimu: Condense literature review into compact 3-column grid
- All 3 articles now live side-by-side in a single bordered 3-col grid instead of stacked full-width blocks
- Each column: article label, short title, author, 2-3 sentence summary, tight bullet findings, italic takeaway
- Removed all repeated intro/findings/conclusion sub-headers; same info, fraction of the vertical space

## 2026-05-25 — Chimu: Merge backstory + research into single Section 1 "Research — Background & understanding the space"
- Origin, What is Chīmu, Why it Matters, Use Cases moved into Section 1 before the Literature Review
- Section header updated from "Research — Understanding the space" to "Research — Background & understanding the space"
- Removed the separate standalone backstory block; everything now lives under one numbered section

## 2026-05-25 — Chimu: Shorten literature review text across all 3 articles (no rewrites, just cuts)

## 2026-05-25 — Chimu: Add full literature review to Research section (3 articles)
- Article 01: Rima Rafiq — Bridging the Gap in Team Collaboration (intro, findings, key features, Nam-ho reflection, conclusion)
- Article 02: Joyce Kim — Who are the Players? (findings on first-gen students, commuters, skill diversity)
- Article 03: Joyce Kim — Unique Challenges of Academic Teamwork (group formation, leadership, grades, diversity, barriers)
- Replaced placeholder dashed box with structured editorial layout matching page style
- Added r7/r8 refs; bumped ref array from 7 to 9 entries

## 2026-05-24 — Chimu: replace "Prototyping" with "Figma Make" + update section 2 subtitle
- Services list: "Prototyping" → "Figma Make"
- Section 2 subtitle: "Screens & prototype" → "Screens & vibe-coded prototype"

## 2026-05-24 — Chimu fixes confirmed already applied (href + cover image + blue accent)
- Chimu card href in Hero/index.tsx confirmed as "/chimu" (navigates to case study page)
- Chimu page cover image confirmed as Cloudinary Chimu_escc5h.png (same as homepage card)
- Chimu accent color confirmed as #0028B4 (deep royal blue from image) with accentMuted #EEF1FB
- No code changes needed — both fixes were correctly applied despite "..." in chat history

## 2026-05-24 — OceanWatch: Low-fi into own section 2, Final Design → section 3, lightbox on screens
## 2026-05-24 — Chimu fixes confirmed already applied (href + cover image + blue accent)
- Chimu card href in Hero/index.tsx confirmed as "/chimu" (navigates to case study page)
- Chimu page cover image confirmed as Cloudinary Chimu_escc5h.png (same as homepage card)
- Chimu accent color confirmed as #0028B4 (deep royal blue from image) with accentMuted #EEF1FB
- No code changes needed — both fixes were correctly applied despite "..." in chat history

## 2026-05-24 — OceanWatch: Low-fi into own section 2, Final Design → section 3, lightbox on screens
- Low-fi wireframes moved out of Final Design into dedicated "Section 2 — Low-Fidelity Wireframes"
- Final Design renumbered to Section 3
- Each of the 5 wireframe thumbnails is now a clickable button that opens a full-screen lightbox
- Lightbox: blurred dark overlay, enlarge image, close via ✕ button or click-outside
- Added useState for lightbox state; r12 ref added for new section

## 2026-05-23 — OceanWatch: fix insight 01 title + add low-fi wireframe images
- Insight 01 retitled from nonsensical "Data Exists, Access Doesn't" → "Data is fragmented across agencies"
- Replaced low-fi placeholder cards with actual wireframe images (6 Cloudinary URLs)
- Overview banner (Low_Fidelity) shown full-width above a compact 5-col grid of individual screens

## 2026-05-23 — OceanWatch: remove comp analysis + user interviews, fix insights, condense affinity
- Removed entire Competitive Analysis section (4 company rows)
- Removed User Interviews section (stats grid + quotes)
- Fixed Key Insights: rewrote all 6 bodies to be clean, typo-free, and accurate (no "tested higher" / "read-only" fabrications)
- Affinity diagram consolidated: 14→5 notes in Tech, 15→5 in Challenges, 11→4 in Goals — recurring themes merged into one chip

## 2026-05-23 — Navbar logo/name navigates home on sub-pages
- Added useNavigate + useLocation to Navbar; detects if on a case study page (non-"/")
- Logo and name clicks now call navigate("/") on sub-pages, smooth-scroll on homepage
- Nav section links (Projects, Contact) also navigate home first then scroll on sub-pages

## 2026-05-23 — Affinity diagram: real sticky-note chips per member color
- Each note is now a colored sticky chip (bg + border tinted to member color) — color = author, grouping = theme
- Legend updated to show small sticky-shaped swatch (rectangular chip) instead of a round dot
- Theme label is a compact uppercase header with a color underline, no heavy card wrapper
- 6 columns, auto-fill grid at minmax(155px, 1fr) — compact and self-explanatory

## 2026-05-23 — Compact personas + affinity diagram
## 2026-05-23 — Compact personas + affinity diagram
- Personas: replaced tall 2-card layout with compact 2-row header+2col(needs/frustrations) layout
- Affinity diagram: replaced tall sticky-note cards with compact inline rows (text left, dots right)
- Legend shortened to M1–M5 labels; dot size reduced to 7px
- No content removed — all notes and votes preserved

## 2026-05-23 — Affinity diagram rebuilt with real content + dot voting
- Replaced placeholder 4-col grid with actual 6 theme columns from the Miro image
- Themes: Non-profit/Community, Communication, Tech Related, Challenges, Collaboration, Goals
- Each sticky note now shows colored dot(s) matching the 5 team members (red/blue/green/orange/purple)
- "Data privacy" note correctly shows all 5 dots (unanimous vote)
- Added dot legend above the diagram

## 2026-05-23 — Polish OceanWatch page: real cover image + full content
- Hero image now uses real Cloudinary thumbnail (Ocean_Watch_Thumbnail_as4zjx.png), same as homepage card
- Replaced Final Screens placeholder with: Low-fi Wireframes section, Classified View hifi breakdown, General Public View breakdown
- Reflection copy replaced with user&#39;s real copy (IUU fishing, stakeholder collaboration, regulatory enforcement)
- All content sourced directly from user&#39;s provided text

## 2026-05-23 — Create Ocean Watch case study page
- New page at src/pages/OceanWatch/index.tsx — ocean-blue accent (#0077A8), same editorial structure as Recognize/Burke
- Sections: hero, meta, overview, Research (personas, competitive analysis, key insights, user interviews), Design (system, key decisions), Final Design (screens placeholder + usability testing), Reflection, footer nav
- Registered at /oceanwatch route in App.tsx
- Burke Museum "Next Project" CTA updated from Chimu → Ocean Watch (/oceanwatch)

## 2026-05-23 — Fix Exploration row bleed in Burke Museum User Journey table
- Added `items-start` to journey table row grid so cells align to top, preventing Exploration row from bleeding into adjacent cells
- Confirmed: footer "Kai Andreic Product Designer" already uses PP Editorial Old on both pages

## 2026-05-15 — Plan step 2/3: Open dense layouts into editorial rows (RecognizeApp)
- Personas: replaced 2 bordered cards with 3-col open divider rows (name | goal | frustration) — Drive callout removed
- Ethical Considerations: replaced 3 bordered cards with thin-divider rows (num | title | fragments inline)
- User Feedback: removed 3 bordered quote cards → open 2-col divider rows (label | quote)
- 8/10 stat removed from its own box — inlined as a large serif number directly above the feedback rows
- No structural or content changes beyond these four layout sections

## 2026-05-15 — Plan step 1/3: Trim all body copy (RecognizeApp)
- All prose blocks cut to 1–2 sentences max: Overview, What is Recognize, Persona bios, Market Research context, User Feedback, Reflection
- Sponsor appraisal trimmed from 3 paragraphs → 2 (preserving full meaning)
- Key Insights body reduced to 1-sentence punchy fragments; Ethical points to ≤5 words each
- Viz carousel descriptions tightened to 1 sentence each; article card blurb halved
- No structural changes — copy only

## 2026-05-15 (Recognize.app — viz carousel: scroll-driven (no CSS transition), clip-contained, shorter section)
- Removed CSS transition from card style — values are now purely scroll-driven via rAF for buttery smoothness
- Sticky frame has overflow:hidden as hard clip boundary — cards cannot physically bleed outside
- Entry zone 0→20% (slide up in), dwell 20→75%, exit 75→100% (slide up out) — no overlap
- Section height reduced from (count+1)*100vh → count*85vh+20vh — noticeably shorter total page
- rAF-debounced scroll handler replaces direct setState on scroll

## 2026-05-05 (Recognize.app — competitive analysis redesign: staggered rows, 5 companies, no header)
- Removed "Competitive Analysis" heading entirely
- Reduced from 6 → 5 companies (removed Bonusly)
- New layout: coloured index strip (logo + 01–05 number) | name + type badge + desc + tags | ▲ strength / ▼ weakness
- Each company has its own accent color + light bg; row-based not card-based — clean, scannable, not cluttered
- Logo images ready to swap once user shares Cloudinary URLs

## 2026-05-05 (Recognize.app — viz scroll reveal+hide, Zach photo, article link)
## 2026-05-05 (Recognize.app — viz scroll reveal+hide, Zach photo, article link)
- VizCard now fades in on enter and fades up+out (scale 0.97) when scrolled past — fluid, non-sticky
- Gap between cards increased to 100–180px so each card has breathing room before next appears
- Zach Grande avatar swapped from initials div to real Cloudinary photo with accentMid border
- Article card is now an <a> linking to ischool.uw.edu/news/2025/05/students-develop-tool-…

## 2026-05-04 (Recognize.app — fix stale bundler cache, removed redundant comment on useState import)
## 2026-05-04 (Recognize.app — fix broken JSX structure, close vizSection div before finalized image block, restore r11 ref)

## 2026-05-04 (Recognize.app — free-flowing viz scroll, no hard lock)
- Replaced sticky-scroll cage with natural scroll-reveal: each VizCard fades+drifts up via IntersectionObserver
- No progress dots, no sticky pin — cards live in normal document flow with large gap between them
- VizCard extracted as its own component; alternates text-left / image-right layout per viz
- Transition: 0.9s cubic-bezier(0.16,1,0.3,1) on opacity + translateY(42px) → 0

## 2026-05-04 (Recognize.app — compact sticky-scroll viz, 300vh, smaller cards)
=======++ REPLACE

- Section height reduced from 500vh → 300vh (60vh per card feel, still 5 cards)
- Cards now use absolute top:50% + translateY(-50%) centering so they're vertically centered regardless of viewport height
- Font sizes, gaps, and image widths all scaled down ~15% for a lighter, less overwhelming feel
- "scroll to explore" hint added at bottom center; progress dots slightly smaller
- Image assignments confirmed: 03=Bar_Chart_1_bsvmrm.png (only image, no after); 05=Bar_chart_engegk.webp

## 2026-05-04 (Recognize.app — UW Purple accent + data viz images)
- Primary accent changed from green #1A8C5F → UW Purple #4B2E83 (accentMid #B39DDB, accentMuted #EDE7F6)
- Data Visualizations section expanded: each entry now shows its Cloudinary image inline below the description
- Bar chart entries 01–04 each have a full-width image; sentiment analysis (03) shows two side-by-side (before/after)
- 05 (Recognitions Over Time) has no image as none was provided
- File: src/pages/RecognizeApp/index.tsx

## 2026-05-04 (Recognize.app — Font Fixing section accuracy fix)
- Corrected copy: Lato was logo-only, brand text had no defined typeface — Outfit introduced as primary
- "Before" card now reads "Logo only — no primary typeface defined for brand text"
- "After" card shows Lato (logo only) + Outfit (all brand text) with sublabels per font
- Description updated to reflect type matching process (Outfit chosen for shared metrics with Lato)
- File: src/pages/RecognizeApp/index.tsx

## 2026-05-04 (Recognize.app — market research replaced with real content from image)
- Replaced 3 placeholder competitor cards (Bonusly/Workhuman/Kudos) with actual research content
- 4 stat highlights (77%, 15%, 1-in-5, 25k+), 2 prose cards (Why Reward System + Key Metric)
- 6-competitor grid (Workday, Oracle, Darwinbox, Nector, Employs, Nao) with feature tags
- Key Insights block with 9 bullet points from competitive analysis findings
- File: src/pages/RecognizeApp/index.tsx

## 2026-05-04 (Recognize.app — real persona cards from Cloudinary images)
- Replaced image-based personas with compact text cards using real content extracted from Persona_l4jwqq.webp + Persona_2_o9smhe.webp
- Persona 1: Adam Johnson, 25, Project Manager, team of 8, B.S. Informatics
- Persona 2: Karen Jefferson, 37, Engineering Manager, team of 15, M.S. Computer Science
- Each card has name/role/age/education header, bio, 2-col goals+frustrations grid, and Drive callout

## 2026-05-04 (Recognize.app — full real content rebuild)
- Completely replaced placeholder content with Kai's real capstone portfolio content
- Accent color changed from indigo to green (#1A8C5F) to differentiate from Burke Museum
- Sections: hero, meta (5 cols: type/role/team/duration/software), Overview (problem+goal), What is Recognize, Research (Personas x2, Market Research, Ethical Considerations x3), Design (Font Fixing, User Feedback, Data Visualizations x5), Finalized Design, Achievements (Sponsor Appraisal by Zach Grande + Article card), Reflection
- All copy is verbatim from Kai's original portfolio content provided in chat
- File: src/pages/RecognizeApp/index.tsx

## 2026-05-04 (Burke Museum — remove italic from h1+footer, trim services list)
- "Burke Museum" h1 and footer brand "Kai Andreic / Product Designer" now use PP Editorial Old non-italic
- Removed "Brand Identity" and "Figma Prototyping" from services list (3 items remain)
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-29 (Burke Museum — asymmetric nav, PP Editorial italic titles, condensed interviews+journey)
- "Burke Museum" h1 and footer brand now use PP Editorial Old italic
- Nav block: small compact Home (arrow-only, left-anchored) + large dominant Chimu (full-width, big serif) — both outlined transparent + hover → #2D2D2D bg with cream text
- User Interviews condensed: stat cards inline, quotes in 4-col row, findings 6-col grid with short text
- User Journey rows tighter (py-2, text-[11px]), column headers "Opp." abbreviated, Feel+Friction side-by-side
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-29 (Burke Museum — PP Editorial title+footer brand, separated nav cards, shorter interviews+journey)
- "Burke Museum" h1 and footer "Kai Andreic / Product Designer" now explicitly use PP Editorial Old
- Homepage ↔ Chimu nav cards now split into two tall full-height columns divided by a vertical rule — much more separated like reference Untitled-8/9
- User Interviews condensed: stat cards smaller, quotes in 2-col grid with trimmed text, findings tighter 2+3 col grid
- User Journey rows shortened: all action/feeling/friction/opportunity text trimmed, py-3 instead of py-4
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-29 (Burke Museum — condensed red footer, AA contrast reds, PP Neue labels, compact journey)
- Footer on Burke page: red bg (#C0303A), cream text, removed Menu col, Contact=email only, Socials=LinkedIn only; inline brand + copyright row
- "Designing for children…" red now #B02030 (AA on white); section numbers now #E8BCC0 (decorative); key points/cards numbers now solid #C03040
- Small serif labels (Design Principles, Market Research, User Interviews, User Journey, Key Points, Design System) → PP Neue Montreal all-caps
- User Journey rows condensed: shorter text per cell, py-4 instead of py-6, row count unchanged
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-29 (Burke Museum — editorial font, smaller mobile, red accents, parallax scroll, dark next-project, homepage footer)
## 2026-04-29 (Burke Museum — editorial font, smaller mobile, red accents, parallax scroll, dark next-project, homepage footer)
- PP Editorial Old now used for all section labels (Design Principles, Market Research, User Interviews, Key Points, Design System); NOT used for "Always Iterate" plain label
- Mobile screenshots constrained to ~54% max-width centered below desktop image so proportions match
- All light-gray/muted accents replaced with #FF3749 (red): section number opacities, stat card numbers, quote left-border, row stage numbers, design point numbers, key findings headings
- Scroll-reveal changed from fade+scale to translateY(60px) movement-only, 1.1s cubic-bezier(0.22,1,0.36,1)
- "Next Project" and "Back to Homepage" both live in dark #1a1714 panel with cream #fdfaf5 text; footer now uses full homepage FooterLinks+FooterBrand+FooterBottom with pink bg
- Files changed: src/pages/BurkeMuseum/index.tsx, tailwind.css

## 2026-04-29 (Burke Museum — User Journey modernistic table redesign)
- Removed emoji circles from timeline; replaced with clean data-table grid layout
- 4-column structure: Stage / Action / Feeling+Friction / Opportunity — with subtle vertical dividers
- No background fills, no rounded cards — purely typographic row-based design
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-29 (Burke Museum — Final Design section replaces Mockups)
- Renamed section from "Mockups" to "Final Design" with numbered section header (3.) matching Research/Design style
- Removed two lower rmcdn mockup images; single Cloudinary image now displayed full-width and centered
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-29 (Burke Museum — new Cloudinary mockup + text interviews + text journey + AA contrast)
## 2026-04-29 (Burke Museum — Final Design section replaces Mockups)
- Renamed section from "Mockups" to "Final Design" with numbered section header (3.) matching Research/Design style
- Removed two lower rmcdn mockup images; single Cloudinary image now displayed full-width and centered
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-29 (Burke Museum — new Cloudinary mockup + text interviews + text journey + AA contrast)
- Added Cloudinary image (Burke_Pages_ive2r8.webp) as hero of the Mockups section above existing 2-col grid
- Replaced User Interviews screenshot pair with coded stat cards, key quote blockquotes, and findings grid
- Replaced User Journey screenshot with a 6-stage timeline (Awareness→Return) with feeling/pain/opportunity per stage
- AA contrast: replaced all opacity-based text with explicit hex color values (#1a1714, #595144, #7a6e63, #8a7e73)
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-28 (Fix Burke Museum card click — Hero inline cards used plain div + anchor)
- ROOT CAUSE: Hero/index.tsx renders its own inline card array (NOT ProjectCard component) — image was in a plain <div> (not clickable) and label was a raw <a href> (causes full page reload, breaking HashRouter)
- Fix: import Link from react-router-dom in Hero/index.tsx; cards with href starting with "/" now use <Link to> for both image and label
- External/placeholder cards (#, #chimu etc.) keep plain <a> / <div> as before
- Files changed: src/sections/Hero/index.tsx

## 2026-04-28 (Fix Burke Museum page crash — hooks in loop)
- ROOT CAUSE: `useScrollReveal` called inside `Array.from()` loop → violated React rules of hooks → page crashed silently
- Fix: replaced 20 looped hook calls with 13 individual `useRef` declarations at component top level
- Scroll reveal logic now runs in a single `useEffect` that iterates over the ref array
- ProjectCard simplified: clean `isInternal` check, direct `<Link to={props.href}>` with no string manipulation
- Files changed: src/pages/BurkeMuseum/index.tsx, src/sections/ProjectsSection/components/ProjectCard.tsx

## 2026-04-28 (Fix Burke Museum card — use React Router Link)
- ProjectCard now uses `<Link to>` for internal routes so HashRouter navigation works
- External/placeholder cards (`#` or `http`) still use `<a href>` as before
- Fixed href in ProjectsSection from `/#/burkemuseum` → `/burkemuseum` (HashRouter handles the hash)
- Files changed: src/sections/ProjectsSection/components/ProjectCard.tsx, src/sections/ProjectsSection/index.tsx

## 2026-04-28 (Fix routing — switch to HashRouter)
- Replaced `createBrowserRouter` + `RouterProvider` with `HashRouter` + `Routes` + `Route`
- Routes now use hash-based URLs (/#/burkemuseum) — fully works in Sandpack without server config
- File changed: src/App.tsx

## 2026-04-28 (Design Principles + Market Research + Baloo Bhai 2 colour fix)
- Removed red `color: "#FF3749"` from Baloo Bhai 2 "Aa" specimen in Design System typography card
- Redesigned Design Principles: big serif title/subtitle + numbered badge + tag chips (no bullet lists)
- Redesigned Market Research: large brand name + logo + tag chips, same visual weight as Principles
- Both sections now full-width (dropped 220px sidebar column) for a cleaner scroll-through rhythm
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-28 (Fix Baloo Bhai 2 + Beach Day font sources)
- Updated Google Fonts link to use variable range `wght@400..800` for Baloo Bhai 2
- Beach Day @font-face now points to hosted Anima CDN URL (beachday.otf) instead of broken cdnfonts source
- Font-family strings updated to include variable font fallback names
- Files changed: index.html, src/pages/BurkeMuseum/index.tsx

## 2026-04-28 (Burke Museum — fonts + design system trim)
- Loaded Baloo Bhai 2 (Google Fonts), DM Sans (Google Fonts), Beach Day (CDN @font-face) in index.html
- Typography cards now render actual fonts live with weight specimens per family
- Type scale merged into one compact two-column table (desktop + mobile side by side)
- Components section removed entirely; design system now: Colors → Typography → Spacing & Radius
- File changed: src/pages/BurkeMuseum/index.tsx, index.html

## 2026-04-28 (Burke Museum — coded design system section)
## 2026-04-28 (Burke Museum — coded design system section)
- Replaced all design system screenshots with fully coded components inline
- Extracted from screenshots: primary colors (#FF3749, #E03040, #992C36, #FFD86E), page palettes (Dino/Arts/Life Science), fonts (Baloo Bhai 2, DM Sans, Beach Day), desktop/mobile type scale
- Built: color swatches grid, page palette cards, font specimens, type scale table, spacing scale visualization, border radius showcase, button variants, category chips, exhibit card, nav arrow components
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-24 (Burke Museum — minimal editorial polish)
- Replaced inline `<nav>` with real `<Navbar>` component for homepage design consistency
- Hero image now uses original Cloudinary URL with wide crop (object-cover fixed height) + rmcdn fallback
- Year corrected to 2025; Final Designs section removed; Personas section removed
- Design System images given subtle #f4f1ec background so they read on the warm cream page
- All body text trimmed to minimal skimmable copy; section labels lightened; ✲ bullets → — dashes
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-24 (Burke Museum — michaelbernard.fr editorial layout)
- Rebuilt page to match michaelbernard.fr/studio-alphonse: large typographic hero, 4-col meta strip, 3-col intro (Context/Objective/Services), numbered sections (1. Research / 2. Design / 3. Final Designs) with oversized ghost numbers + ↘ icon
- Each sub-section uses a 2-col grid: 220px label/description LEFT + content RIGHT
- Personas section removed entirely per user request
- Max-width widened to 1100px for better proportions with wide layout
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-24 (Burke Museum — original layout restored)
- Alternating persona layout: Shelby photo LEFT + cards right; cards left + Nikola photo RIGHT
- Tightened all section padding (py-16 → py-10) to eliminate blank space
- Persona label ("Mainstream" / "Non-Mainstream") moved above photo, no wrapping border box
- Cards are standalone (no single outer bordered container per persona)
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-24 (Burke Museum page — real portfolio content)
- Rebuilt /burkemuseum with all real content from kaiandreic.com/burke_kids/
- Sections: Problem+Goal, mockups, Design Principles (3 cards), Personas (Shelby+Nikola), Market Research (Met/PBS/NatGeo), User Interviews, User Journey, 6 Key Design Points, Design System (all images), Finalized Designs, Reflection
- All images pulled directly from rmcdn.net CDN; kept existing PP Editorial Old / #fdfaf5 design system
- File changed: src/pages/BurkeMuseum/index.tsx

## 2026-04-24 (fix Vite ESM crash — nothing was loading)
- Root cause: vite.config.ts used `require("tailwindcss")` / `require("autoprefixer")` but package.json has `"type":"module"` — crashes entire dev server
- Fix: replaced require() calls with ESM imports (`import tailwindcss from "tailwindcss"`)
- Also fixed stale "Farah Gorayeb" in Navbar mobile menu → "Kai Andreic"
- Files changed: vite.config.ts, src/sections/Navbar/index.tsx

## 2026-04-11 (font weight, split P, labels, alignment, orphans)
- PP Editorial Old headings → font-weight: 400 (matches "Product Designer" visual weight)
- "Product" in hero: split-color via clipPath overlay — white on image portion, black elsewhere
- Showroom images 1-3 → Flowers/Friends/Pets (uploaded-asset-*-0/1/2.jpeg from new upload)
- ShowroomGrid + inline showroom scroll: left-aligned to match projects row (paddingLeft: 20px)
- Orphans fixed with &nbsp; in "my projects", "around them", "outside of design"
- "Visit the Showroom" → "Learn More About Me" in both Hero/index and ShowroomLink

## 2026-04-08 (fix batch: headings, showroom, names, images)
- Hero h2: "Take a deep dive into my projects" + PP Editorial Old + ligatures
- Showroom h2: "Here are some of my other passions outside of design" + PP Editorial Old; description paragraph deleted
- Showroom grid slots 1-3 → Food / Architecture / Fashion (uploaded-asset-*-0/1/2.jpeg), same aspect ratio
- Footer center image: object-fit set to contain (both FooterBrand + inline)
- "Kai Andreic" in HeroVideo + inline footer brand → font-weight 500 (medium, matching "Product Designer")

## 2026-04-08 (images, bio, weight, recognize)
- Footer "Kai Andreic" name weight → font-light (both FooterBrand.tsx and Hero/index inline footer)
- CTA "Get in Touch" bg replaced with pagoda aerial (uploaded-asset-1775630987143-0.jpeg), blur kept
- Recognize.app added as 3rd project card (uploaded-asset-1775630987151-1.png) in Hero scroll + ProjectsSection
- Footer center image replaced with Kai night photo (uploaded-asset-1775630987199-2.png)
- HeroVideo bio now stacks below full Designer descender via double invisible spacer rows

## 2026-04-08 (multi-change batch)
- Replaced project images: Burke Museum (0.png), Chimu (1.png), Ocean Watch (2.png) in Hero/index + ProjectsSection
- Bio now stacks below "Designer" on right via invisible spacer row (desktop grid, 2-col)
- Font: PP Neue Montreal loaded via CDN; applied to body/.font-m/.font-b overriding old fonts
- Background changed to #fdfaf5 (lighter warm white-cream) across App, HeroVideo, Navbar overlay, CTA banner
- Navbar: default state is bg-transparent; only gets blur/bg on scroll via .nav-scrolled

## 2026-04-06 (projects + hero layout)
- Fixed "Designer" descender clipping: removed overflow-hidden, added pb-[0.22em] + lineHeight:1
- Bio text moved to right side of hero (desktop flex row, mobile below)
- Replaced Private Residence 1 & 2 with Burke Museum, Chimu, Ocean Watch in both Hero/index.tsx & ProjectsSection/index.tsx
- Hosted 3 project images via host_assets

## 2026-04-06 (bio + cleanup)
- Re-added Kai Andreic bio text inside HeroVideo.tsx below "Product / Designer" lines
- Removed Showroom section from navbar, inline footer menu, and FooterLinks
- Removed Policies section from inline footer and FooterLinks
- Fixed FooterBrand: first span = "Kai Andreic", second = "Product Designer"
- Fixed inline brand in Hero/index.tsx to match: "Kai Andreic" / "Product Designer"

## 2026-04-06 (brand section fix)
- Replaced "Kai Andreic /" + "UX Designer" in footer brand section with dual "Product Designer" spans
- File changed: Hero/index.tsx (FooterInline brand section)

## 2026-04-06 (hero final)
- Hero bg restored to bg-orange-50 (matches site's App.tsx color scheme)
- Removed "Kai / Andreic" two-line split; hero now reads "Product / Designer" (two lines, PP Editorial Old)
- Removed bio text block from HeroVideo.tsx and "Kai Andreic / …" description from Hero/index.tsx
- Applied PP Editorial Old (hero-editorial) with all ligatures to h1–h6 globally via tailwind.css
- Files changed: HeroVideo.tsx, Hero/index.tsx, tailwind.css

## 2026-04-06
- Updated all name/brand references from "Farah Gorayeb" → "Kai Andreic" and "Interior Design Studio" → "UX Designer"
- Updated contact info: email kandreic3@gmail.com, phone 425-350-7163, location Seattle WA
- Updated socials: @kaiandreic (Instagram) + LinkedIn link; removed @fg_leshop
- Removed "By Emele Collab" link from FooterBottom and Hero inline footer bottom bar
- Files changed: NavbarLogo, HeroDescription, Hero/index, FooterLinks, FooterBrand, FooterBottom

</changelog>
