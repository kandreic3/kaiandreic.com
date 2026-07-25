# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and recruiters evaluating Kai Andreic for a product/UX design role. They land on the site from a link sent directly to them and are judging whether to move him forward in a hiring process.

## Product Purpose

A personal portfolio site for Kai Andreic, a product/UX designer who is currently open to work. Its job is to present his case study work in a way that gets him hired. Success means a hiring manager comes away convinced of his design ability and takes a next step (interview, callback, or outreach).

## Positioning

The portfolio's credibility rests on a two-tier body of work: real production case studies built while employed (RecognizeApp, Chimu), backed by earlier academic case studies (Burke Museum, OceanWatch) that show design range and process depth. The differentiator is proven employed design work, not just student projects — this distinction must stay visible and truthful, never blurred.

## Operating Context

Single-page React/Vite app using HashRouter. Home page (`/`) shows a Hero and a project showroom/list linking to individual case study pages: `/recognize`, `/chimu`, `/burkemuseum`, `/oceanwatch`. A separate live interactive prototype exists at `/studentworkflow` (a multi-step form workflow demo). Images are served from Cloudinary; fonts are loaded from cdnfonts.com and Google Fonts.

## Capabilities and Constraints

- Four case studies, split by evidence status:
  - **RecognizeApp** and **Chimu** — real professional work completed while employed. Employer name not yet recorded.
  - **Burke Museum** and **OceanWatch** — college/academic projects, not paid or professional work.
- This status distinction is a hard constraint: future copy or design must never present the academic projects as professional client/employer work, or vice versa.
- `/studentworkflow` is an interactive prototype linked from the Chimu case study. It is currently a fixed-size (15,000 × 6,500px) absolutely-positioned canvas showing 3 login/onboarding screens — not responsive, and will not fit a normal viewport. It needs design attention (rebuild as a responsive walkthrough, or scope down what it demonstrates); left unfixed pending a product decision on what it should show.
- Title convention (confirmed intentional, not a bug): "Product Designer" is the umbrella brand title (footer, page footers); each case study tags Kai's specific role on that project ("UX Designer", "UX Designer + Researcher"). Keep this distinction — it correctly signals a broader current title with project-specific role detail.

## Brand Commitments

- Name: Kai Andreic.
- Umbrella title: "Product Designer." Per-case-study role tags ("UX Designer", "UX Designer + Researcher") are intentionally more specific and should not be reconciled to a single title.

## Evidence on Hand

- Four case study pages with real project content (see Capabilities and Constraints for status split).
- The Chimu case study currently has an unfinished section ("Final design screens will be added here") — a real content gap, not something to fabricate. Needs real screens/assets from the user before it can be completed.
- An interactive prototype at `/studentworkflow` linked from Chimu, currently not viewport-responsive (see Capabilities and Constraints).
- No testimonials, employer name, resume/CV, or press mentions recorded yet — do not fabricate any of these.

## Product Principles

1. Never present academic work (Burke Museum, OceanWatch) with the same evidentiary weight as employed professional work (RecognizeApp, Chimu) — truthful labeling over impressive-sounding blur.
2. The site has one job: turn a hiring manager's visit into a positive hiring signal. Every design decision should serve scanability of real design ability, not decoration for its own sake.
3. Currently open to work — the site should read as available, not passive or purely archival.
4. Employed production work anchors credibility; academic work supports it with range and process, not the other way around.

