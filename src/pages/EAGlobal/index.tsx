import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../sections/Navbar";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Matches the serif style object used in every other case-study footer
// (Chimu, Ocean Watch, Burke Museum, Recognize.app).
const serif = {
  fontFamily:
    "'PP Editorial Old','PPEditorialOld','PP Editorial Old Ultralight',Georgia,serif",
  fontStyle: "normal",
  fontWeight: 400,
  fontFeatureSettings: '"liga" 1,"calt" 1,"dlig" 1',
} as React.CSSProperties;

// EA.global's own accent for the footer's bottom bar — same family as the
// ".global" wordmark color, distinct from the other case studies' accents.
const EA_ACCENT = "#097c4a";

type Stage = {
  index: string;
  label: string;
  caption: string;
  img?: string;
  objectPosition?: string;
  ratio?: string;
};

const STAGE_RATIO = "16 / 9";
// Capped so the carousel never grows wider than a contained reading column,
// and small enough relative to the viewport that the peek of neighboring
// slides stays modest rather than spilling toward the page edge.
const SLIDE_WIDTH = "min(660px, 80vw)";

const STAGES: Stage[] = [
  {
    index: "01",
    label: "First",
    caption: "Where it started.",
    img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_2000,c_limit/eaglobal-first_ldi8kx.png",
    objectPosition: "top",
    // Native ratio, kept wider than the shared 16:9 frame so cover-cropping
    // only ever trims the bottom — never the sides.
    ratio: "2790 / 1368",
  },
  {
    index: "02",
    label: "Second",
    caption: "An iteration along the way.",
    img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_2000,c_limit/eaglobal-second_g3ctkh.png",
    objectPosition: "top",
  },
  {
    index: "03",
    label: "Current",
    caption: "Where it stands today.",
    img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_2000,c_limit/eaglobal-current_losuex.png",
    objectPosition: "top",
  },
];

// ─── Design system tokens ──────────────────────────────────────────────────
// Reproduced from the live product's computed styles — the dark theme is
// the real, shipped system. (A light variant exists only as an
// algorithmically-derived reference and isn't shown here.)
const DS = {
  bg: "#0F1419",
  paper: "#1A1F26",
  textPrimary: "#E6EAF0",
  textSecondary: "#A8B0BB",
  border: "rgba(255,255,255,0.16)",
  borderSubtle: "rgba(255,255,255,0.09)",
  hover: "rgba(255,255,255,0.08)",
};

const DS_TYPE_SCALE = [
  { name: "Page Heading", size: "25.5px", weight: 500 },
  { name: "Heading", size: "24px", weight: 600 },
  { name: "Input", size: "17px", weight: 400 },
  { name: "Body", size: "16px", weight: 400 },
  { name: "Body Small", size: "14px", weight: 400 },
];

const DS_SOURCE_PAGES = [
  "Home",
  "Storage",
  "Memories",
  "Automations",
  "Connectors",
  "Skills",
];

const DS_TILE_COLORS = ["#66BB6A", "#FFA726", "#29B6F6", "#F44336"];

const DS_SWATCHES = [
  { name: "Primary", hex: "#00FF95", on: DS.bg },
  { name: "Primary Dark", hex: "#72D864", on: DS.bg },
  { name: "Page", hex: "#0F1419" },
  { name: "Paper", hex: "#1A1F26" },
  { name: "Text Primary", hex: "#E6EAF0" },
  { name: "Text Secondary", hex: "#A8B0BB" },
  { name: "Success", hex: "#66BB6A" },
  { name: "Warning", hex: "#FFA726" },
  { name: "Error", hex: "#F44336" },
  { name: "Info", hex: "#29B6F6" },
];

const DS_RADII = [
  { name: "sm", value: "8px" },
  { name: "md", value: "10px" },
  { name: "lg", value: "14px" },
  { name: "xl", value: "24px" },
  { name: "full", value: "50%" },
];

export default function EAGlobal() {
  const titleRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const teamRef = useScrollReveal();
  const workRef = useScrollReveal();
  const stagesRef = useScrollReveal();
  const designSystemRef = useScrollReveal();
  const learningsRef = useScrollReveal();
  const closingRef = useScrollReveal();

  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const activeStage = STAGES[current];

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(STAGES.length - 1, i));
    setCurrent(clamped);
    const track = trackRef.current;
    const slide = track?.children[clamped] as HTMLElement | undefined;
    if (track && slide) {
      const delta = slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
      track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
    }
  };

  const handleTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(
        (child as HTMLElement).getBoundingClientRect().left - trackLeft,
      );
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setCurrent((prev) => (prev === closest ? prev : closest));
  };

  return (
    <div
      className="text-black text-sm not-italic normal-nums font-normal box-border tracking-[normal] pointer-events-auto font-m"
      style={{ backgroundColor: "#fdfaf5" }}
    >
      <Navbar />

      <main className="box-border">
        {/* Hero cover image — same treatment as the other case studies */}
        <div
          className="w-full overflow-hidden"
          style={{ paddingTop: "70px", height: "clamp(280px,45vw,560px)" }}
        >
          <img
            loading="eager"
            decoding="async"
            src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_2000,c_limit/eaglobal-cover_u14djn.png"
            alt="EA.global"
            className="w-full h-full object-cover object-center"
            style={{ backgroundColor: "#122f08" }}
          />
        </div>

        {/* Title + breadcrumb + meta — matches Chimu / Ocean Watch / Burke Museum */}
        <div
          ref={titleRef}
          className="reveal px-6 max-w-[1100px] mx-auto pt-12 pb-6"
        >
          <div className="flex items-center gap-2 text-xs font-m opacity-40 mb-6">
            <Link to="/" className="hover:opacity-100 transition-opacity">
              Index
            </Link>
            <span>/</span>
            <span>EA.global</span>
          </div>
          <h1
            className="text-[clamp(52px,9vw,120px)] leading-[0.92] tracking-[-3px] mb-8 flex flex-wrap items-baseline gap-x-[0.25em]"
            style={{
              fontFamily:
                "'PP Editorial Old','PPEditorialOld','PP Editorial Old Ultralight',Georgia,serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontFeatureSettings: '"liga" 1,"calt" 1,"dlig" 1',
            }}
          >
            <span
              style={{
                fontFamily:
                  "'PP Editorial Old','PPEditorialOld','PP Editorial Old Ultralight',Georgia,serif",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              EA
            </span>
            <span
              style={{
                color: "#067a4a",
                fontFamily:
                  "'PP Editorial Old','PPEditorialOld','PP Editorial Old Ultralight',Georgia,serif",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              .global
            </span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 border-t border-black/15 pt-6 pb-2">
            <div>
              <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
                Type
              </p>
              <p className="text-sm font-m">Professional</p>
            </div>
            <div>
              <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
                Role
              </p>
              <p className="text-sm font-m">
                UX Design &amp; Product Management Intern
              </p>
            </div>
            <div>
              <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
                Team
              </p>
              <p className="text-sm font-m">2 — with Namho, Design Lead</p>
            </div>
            <div>
              <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
                Since
              </p>
              <p className="text-sm font-m">October 2025</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div
          ref={aboutRef}
          className="reveal box-border grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-x-5 gap-y-5 py-[50px] px-5 border-t border-black/10"
        >
          <div className="col-span-12 md:col-span-3">
            <span className="font-m text-sm text-[#1a1714]"> About / </span>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-5 flex flex-col gap-y-5">
            <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
              EA Global builds an AI agent platform for teams — workspaces,
              document automation, and an assistant that can read a
              company&#39;s own documents, fill out forms, and answer
              questions across email and WhatsApp.
            </p>
            <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
              This page isn&#39;t a deep case study. It&#39;s a look at
              interface work I was invited to help shape alongside the EA
              Global product and design team during my internship — a record
              of where the product started and where it stands today.
            </p>
          </div>
        </div>

        {/* Team */}
        <div
          ref={teamRef}
          className="reveal box-border grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-x-5 gap-y-5 py-[50px] px-5 border-t border-black/10"
        >
          <div className="col-span-12 md:col-span-3">
            <span className="font-m text-sm text-[#1a1714]"> Team / </span>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-5">
            <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
              I joined the team in October 2025. Design at EA Global is a
              two-person effort — myself and Namho, the design lead —
              working closely alongside product and engineering.
            </p>
          </div>
        </div>

        {/* Progress — one-at-a-time carousel */}
        <div
          ref={stagesRef}
          className="reveal box-border py-[50px] border-t border-black/10"
        >
          <div className="flex items-center justify-between px-5">
            <span className="font-m text-sm text-[#1a1714]"> Progress / </span>
            <div className="flex items-center gap-x-4">
              <span className="font-m text-sm text-[#7a6e63]">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(STAGES.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-x-1">
                <button
                  type="button"
                  onClick={() => goTo(current - 1)}
                  disabled={current === 0}
                  aria-label="Previous"
                  className="font-b text-[18px] leading-none w-9 h-9 flex items-center justify-center text-[#1a1714] hover:opacity-60 transition-opacity disabled:opacity-20 disabled:pointer-events-none"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => goTo(current + 1)}
                  disabled={current === STAGES.length - 1}
                  aria-label="Next"
                  className="font-b text-[18px] leading-none w-9 h-9 flex items-center justify-center text-[#1a1714] hover:opacity-60 transition-opacity disabled:opacity-20 disabled:pointer-events-none"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          <div
            ref={trackRef}
            onScroll={handleTrackScroll}
            className="mt-5 flex gap-x-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{
              paddingLeft: `max(20px, calc((100% - ${SLIDE_WIDTH}) / 2))`,
              paddingRight: `max(20px, calc((100% - ${SLIDE_WIDTH}) / 2))`,
            }}
          >
            {STAGES.map((stage, i) => (
              <div
                key={stage.index}
                className="shrink-0 snap-center transition-opacity duration-300"
                style={{
                  width: SLIDE_WIDTH,
                  opacity: i === current ? 1 : 0.45,
                }}
              >
                {stage.img ? (
                  <div className="overflow-hidden border border-black/10">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={stage.img}
                      alt={`EA.global interface — ${stage.label.toLowerCase()}`}
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: stage.ratio ?? STAGE_RATIO,
                        objectPosition: stage.objectPosition ?? "center",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="w-full flex items-center justify-center border border-dashed border-black/15"
                    style={{ aspectRatio: STAGE_RATIO }}
                  >
                    <span className="font-m text-sm text-[#7a6e63]">
                      Screenshot pending
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="px-5 mt-5 flex items-baseline gap-x-3">
            <span className="font-m text-sm text-[#7a6e63]">
              {activeStage.index}
            </span>
            <span className="font-b text-[18px] tracking-[-0.3px]">
              {activeStage.label}
            </span>
            <span className="font-m text-sm text-[#7a6e63]">
              — {activeStage.caption}
            </span>
          </div>

          <div className="px-5 mt-4 flex items-center gap-x-2">
            {STAGES.map((stage, i) => (
              <button
                key={stage.index}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${stage.label}`}
                className="w-6 h-[2px] transition-colors duration-200"
                style={{
                  backgroundColor: i === current ? "#1a1714" : "rgba(26,23,20,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* The Work */}
        <div
          ref={workRef}
          className="reveal box-border grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-x-5 gap-y-10 py-[50px] px-5 border-t border-black/10"
        >
          <div className="col-span-12 md:col-span-3">
            <span className="font-m text-sm text-[#1a1714]"> The Work / </span>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-5 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                Plugin Workflows
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                I helped design the workflows behind EA Global&#39;s browser
                plugin — the surface most users touch first, and where the
                product&#39;s core value actually gets delivered. That meant
                rethinking how documents get uploaded, matched to the right
                form, filled, reviewed, and approved, end to end.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                A Product Direction Shift
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                Alongside Namho, I helped guide a real shift in what EA
                Global is: from a tool built primarily around autofilling
                documents for companies, toward a more direct, personal AI
                assistant. That&#39;s a fundamentally different product to
                design for, with a different relationship to the user, and I
                helped shape what that shift actually looked like in the
                interface.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                Simplifying the Plugin
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                The plugin used to ask a lot of the user before it delivered
                any value. I led the effort to simplify that workflow —
                cutting steps, clarifying what the plugin was actually doing
                at each stage, and redirecting the flow so it felt more
                direct instead of like a form to fill out.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                An In-Product Tutorial
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                Before we made major changes to the UI, I built a tutorial
                inside the website itself — a guided walkthrough teaching
                people how to navigate the product as it existed then. I
                built the entire flow myself and presented it to the team.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                A Design System for the Website
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                I also built out a design system for the website — a shared
                set of components and patterns the team designs and builds
                from today. The full breakdown is below.
              </p>
            </div>
          </div>
        </div>

        {/* Design System — documented in the portfolio's own Ink on Paper
            system; real EA Global tokens shown as content, not chrome */}
        <div
          ref={designSystemRef}
          className="reveal box-border grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-x-5 gap-y-12 py-[50px] px-5 border-t border-black/10"
        >
          <div className="col-span-12 md:col-span-3">
            <span className="font-m text-sm text-[#1a1714]">
              {" "}
              Design System /{" "}
            </span>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-5 flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-2">
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                The visual foundation behind EA Global&#39;s interface —
                reproduced here from the live product&#39;s own computed
                styles. Dark, focused, and built around one loud accent
                color.
              </p>
              <span className="font-m text-xs text-[#7a6e63]">
                Extracted from agent.eaglobal.ai — {DS_SOURCE_PAGES.join(", ")}.
              </span>
            </div>

            {/* Typography */}
            <div className="flex flex-col gap-y-5">
              <span className="font-m text-sm tracking-wide text-[#7a6e63]">
                Typography — Geist
              </span>
              <div className="flex flex-col gap-y-4">
                {DS_TYPE_SCALE.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-baseline gap-x-4 pb-4 border-b border-black/10"
                  >
                    <span
                      className="text-[#1a1714]"
                      style={{
                        fontSize: t.size,
                        fontWeight: t.weight,
                        fontFamily:
                          "'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
                      }}
                    >
                      {t.name}
                    </span>
                    <span className="font-m text-sm text-[#7a6e63]">
                      {t.size} / {t.weight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="flex flex-col gap-y-5">
              <span className="font-m text-sm tracking-wide text-[#7a6e63]">
                Color
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {DS_SWATCHES.map((s) => (
                  <div key={s.name} className="flex flex-col gap-y-2">
                    <div
                      className="aspect-square w-full border border-black/10"
                      style={{
                        backgroundColor: s.hex,
                        borderRadius: "10px",
                      }}
                    />
                    <span className="font-m text-sm text-[#1a1714]">
                      {s.name}
                    </span>
                    <span className="font-m text-xs text-[#7a6e63]">
                      {s.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Radius */}
            <div className="flex flex-col gap-y-5">
              <span className="font-m text-sm tracking-wide text-[#7a6e63]">
                Radius
              </span>
              <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                {DS_RADII.map((r) => (
                  <div
                    key={r.name}
                    className="flex flex-col items-center gap-y-2"
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: r.value,
                        backgroundColor: DS.paper,
                      }}
                    />
                    <span className="font-m text-xs text-[#7a6e63]">
                      {r.name} · {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Components + Applied — grouped in a dark specimen panel,
                since these are live pieces of the real (dark) product */}
            <div className="flex flex-col gap-y-5">
              <span className="font-m text-sm tracking-wide text-[#7a6e63]">
                Components
              </span>
              <div
                className="flex flex-col gap-y-8 p-6 md:p-8"
                style={{ backgroundColor: DS.bg, borderRadius: "14px" }}
              >
                <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                  <div className="flex flex-col items-center gap-y-2">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        backgroundColor: "#00FF95",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke={DS.bg}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      className="font-m text-xs"
                      style={{ color: DS.textSecondary }}
                    >
                      Primary button
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-y-2">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "8px",
                        backgroundColor: DS.hover,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke={DS.textPrimary}
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span
                      className="font-m text-xs"
                      style={{ color: DS.textSecondary }}
                    >
                      Icon button
                    </span>
                  </div>

                  <div
                    className="flex-1 min-w-[220px] max-w-[360px] px-5 py-4"
                    style={{
                      backgroundColor: "rgba(26,31,38,0.92)",
                      borderRadius: "24px",
                      border: "1px solid rgba(230,234,240,0.06)",
                    }}
                  >
                    <span
                      className="font-m text-sm"
                      style={{ color: DS.textSecondary }}
                    >
                      Ask anything
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-y-2">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        backgroundColor: DS.textPrimary,
                        color: DS.paper,
                        borderRadius: "10px",
                        padding: "6px 16px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      + New
                    </div>
                    <span
                      className="font-m text-xs"
                      style={{ color: DS.textSecondary }}
                    >
                      Secondary button
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-y-2">
                    <div
                      style={{
                        border: `1px solid ${DS.border}`,
                        borderRadius: "10px",
                        padding: "8.5px 14px",
                        fontSize: "13px",
                        fontWeight: 300,
                        color: DS.textSecondary,
                      }}
                    >
                      Search
                    </div>
                    <span
                      className="font-m text-xs"
                      style={{ color: DS.textSecondary }}
                    >
                      Search input
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-y-2">
                    <div className="flex items-center gap-x-4">
                      <span
                        style={{
                          color: DS.textPrimary,
                          fontWeight: 500,
                          fontSize: "14px",
                        }}
                      >
                        Active
                      </span>
                      <span
                        style={{ color: DS.textSecondary, fontSize: "14px" }}
                      >
                        Inactive
                      </span>
                    </div>
                    <span
                      className="font-m text-xs"
                      style={{ color: DS.textSecondary }}
                    >
                      Tab nav
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-y-2">
                    <span
                      style={{
                        color: DS.textSecondary,
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      See all →
                    </span>
                    <span
                      className="font-m text-xs"
                      style={{ color: DS.textSecondary }}
                    >
                      Muted link
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-y-2">
                    <div className="flex items-center gap-x-2">
                      {DS_TILE_COLORS.map((c) => (
                        <div
                          key={c}
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "10px",
                            backgroundColor: c,
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className="font-m text-xs"
                      style={{ color: DS.textSecondary }}
                    >
                      Connector / skill tiles
                    </span>
                  </div>
                </div>

                {/* Applied — workspace card composite */}
                <div className="flex flex-col gap-y-3">
                  <span
                    className="font-m text-xs tracking-wide"
                    style={{ color: DS.textSecondary }}
                  >
                    Applied — Workspace Card
                  </span>
                  <div
                    className="flex flex-col gap-y-3"
                    style={{
                      width: "min(280px, 100%)",
                      backgroundColor: "rgba(230,234,240,0.05)",
                      borderRadius: "8px",
                      padding: "16px",
                    }}
                  >
                    <div className="flex items-center gap-x-3">
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: "16px",
                          backgroundColor: "rgb(48,166,148)",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "18px",
                        }}
                      >
                        EA
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 500,
                            color: DS.textPrimary,
                          }}
                        >
                          Green Element Group
                        </span>
                        <span
                          className="flex items-center gap-x-1.5"
                          style={{ fontSize: "13px", color: DS.textSecondary }}
                        >
                          <span
                            style={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              backgroundColor: "#00FF95",
                              display: "inline-block",
                            }}
                          />
                          Active
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "4px",
                        borderRadius: "9990px",
                        backgroundColor: "rgba(230,234,240,0.18)",
                      }}
                    >
                      <div
                        style={{
                          width: "40%",
                          height: "100%",
                          borderRadius: "9990px",
                          backgroundColor: "#00FF95",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Learned */}
        <div
          ref={learningsRef}
          className="reveal box-border grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-x-5 gap-y-10 py-[50px] px-5 border-t border-black/10"
        >
          <div className="col-span-12 md:col-span-3">
            <span className="font-m text-sm text-[#1a1714]">
              {" "}
              What I Learned /{" "}
            </span>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-5 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                Designing With AI
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                A huge part of how I worked changed once I started leaning
                heavily on AI — for prototyping fast, quick-fixing small UI
                issues on the spot, and even making direct changes to the
                website through conversation instead of always going file by
                file by hand. It didn&#39;t replace the thinking; it changed
                how quickly I could get from idea to something real.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                Presenting in Professional Settings
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                I learned what it actually takes to present design work
                professionally — not just showing screens, but explaining
                decisions clearly to people who weren&#39;t in the room for
                the process, and doing it with enough confidence to get a
                room to say yes.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                Working on a Small, Cross-Functional Team
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                EA Global&#39;s team is small and tight: two developers, a
                product manager, two senior analysts, and two designers —
                myself included. Being one of two designers on a team that
                size meant I couldn&#39;t hide behind process; I had to
                communicate clearly and stay closely looped in with everyone
                building alongside me.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="font-b text-[18px] tracking-[-0.3px]">
                Shipping at a Fast Pace
              </span>
              <p className="font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch]">
                The pace was real — new features shipped nearly every week,
                which meant constantly revisiting and reworking things
                I&#39;d just finished. I learned to design for change
                instead of a single finished state, and to stay comfortable
                iterating quickly rather than getting attached to one
                version.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer — same next-project nav + contact bar as every other
          case study (Chimu, Ocean Watch, Burke Museum, Recognize.app) */}
      <div ref={closingRef} className="reveal">
        <div style={{ backgroundColor: "#1a1714" }}>
          <div className="px-6 max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row items-stretch gap-4 py-10">
              {/* Home — compact arrow button */}
              <Link
                to="/"
                className="group flex flex-col justify-between gap-4 p-5 md:p-6 transition-all duration-300 border border-white/20 bg-transparent"
                style={{
                  borderRadius: "4px",
                  minWidth: "clamp(120px,16vw,180px)",
                  flex: "0 0 auto",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#2D2D2D";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#2D2D2D";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.2)";
                }}
              >
                <div>
                  <p
                    className="text-[9px] font-m uppercase tracking-widest mb-0.5"
                    style={{ color: "rgba(253,250,245,0.6)" }}
                  >
                    Homepage
                  </p>
                  <p
                    className="text-[9px] font-m uppercase tracking-widest"
                    style={{ color: "rgba(253,250,245,0.5)" }}
                  >
                    Return to index
                  </p>
                </div>
                <span
                  className="text-[clamp(28px,3vw,42px)] tracking-[-1.5px] leading-none"
                  style={{ ...serif, color: "#fdfaf5" }}
                >
                  ←
                </span>
              </Link>

              {/* Recognize.app — next project */}
              <Link
                to="/recognize"
                className="group flex flex-col justify-between gap-6 p-6 md:p-8 transition-all duration-300 border border-white/20 bg-transparent flex-1"
                style={{ borderRadius: "4px" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#2D2D2D";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#2D2D2D";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.2)";
                }}
              >
                <div>
                  <p
                    className="text-[10px] font-m uppercase tracking-widest mb-1"
                    style={{ color: "rgba(253,250,245,0.6)" }}
                  >
                    Next Project
                  </p>
                  <p
                    className="text-[10px] font-m uppercase tracking-widest"
                    style={{ color: "rgba(253,250,245,0.5)" }}
                  >
                    Data Viz · Recognition Platform
                  </p>
                </div>
                <span
                  className="text-[clamp(52px,8vw,110px)] tracking-[-3px] leading-none"
                  style={{ ...serif, color: "#fdfaf5" }}
                >
                  Recognize.app ↗
                </span>
              </Link>
            </div>
          </div>

          <div style={{ backgroundColor: EA_ACCENT }}>
            <div className="px-5 pt-5 pb-3 flex flex-wrap gap-x-16 gap-y-6">
              <div className="flex flex-col gap-2">
                <p
                  className="text-[10px] uppercase tracking-widest"
                  style={{
                    color: "#fdfaf5",
                    fontFamily:
                      "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
                  }}
                >
                  Contact
                </p>
                <a
                  href="mailto:kandreic3@gmail.com"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: "#fdfaf5",
                    fontFamily:
                      "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
                    textDecoration: "none",
                  }}
                >
                  kandreic3@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p
                  className="text-[10px] uppercase tracking-widest"
                  style={{
                    color: "#fdfaf5",
                    fontFamily:
                      "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
                  }}
                >
                  Socials
                </p>
                <a
                  href="https://www.linkedin.com/in/kai-andreic-107074193"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: "#fdfaf5",
                    fontFamily:
                      "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
                    textDecoration: "none",
                  }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden my-12 px-5">
              <div
                className="relative flex flex-wrap justify-between items-end z-[1]"
                style={{
                  fontSize: "clamp(38px,8vw,66px)",
                  lineHeight: 1,
                  letterSpacing: "-3px",
                  fontFamily:
                    "'PP Editorial Old', 'PPEditorialOld', 'PP Editorial Old Ultralight', Georgia, serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "#fdfaf5",
                  fontFeatureSettings: '"liga" 1,"calt" 1,"dlig" 1',
                }}
              >
                <span className="font-editorial">Kai Andreic</span>
                <span className="font-editorial">Product Designer</span>
              </div>
            </div>
            <div className="px-5 pb-5 flex justify-between items-center">
              <span
                className="text-xs"
                style={{
                  color: "#fdfaf5",
                  fontFamily:
                    "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
                }}
              >
                &#169; Kai Andreic
              </span>
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="text-xs transition-opacity hover:opacity-70 bg-transparent border-none cursor-pointer"
                style={{
                  color: "#fdfaf5",
                  fontFamily:
                    "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
                }}
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
