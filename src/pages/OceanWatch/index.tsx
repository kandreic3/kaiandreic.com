import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../sections/Navbar";

const OceanWatchPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const r4 = useRef<HTMLDivElement>(null);
  const r5 = useRef<HTMLDivElement>(null);
  const r6 = useRef<HTMLDivElement>(null);
  const r7 = useRef<HTMLDivElement>(null);
  const r8 = useRef<HTMLDivElement>(null);
  const r9 = useRef<HTMLDivElement>(null);
  const r10 = useRef<HTMLDivElement>(null);
  const r11 = useRef<HTMLDivElement>(null);
  const r12 = useRef<HTMLDivElement>(null);

  const wireframes = [
    {
      src: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1000,c_limit/Low_1_fwouq6.webp",
      alt: "Low-fi screen 1",
    },
    {
      src: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1000,c_limit/Low_2_qvqo41.webp",
      alt: "Low-fi screen 2",
    },
    {
      src: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1000,c_limit/Low_3_z861wv.webp",
      alt: "Low-fi screen 3",
    },
    {
      src: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1000,c_limit/Low_4_nxf2lc.webp",
      alt: "Low-fi screen 4",
    },
    {
      src: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1000,c_limit/Low_5_g1bzu3.webp",
      alt: "Low-fi screen 5",
    },
  ];
  const [activeWireframe, setActiveWireframe] = useState(0);

  useEffect(() => {
    const refs = [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11];
    const observers: IntersectionObserver[] = [];
    refs.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, i * 30);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
      );
      el.classList.add("reveal");
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const serif = {
    fontFamily:
      "'PP Editorial Old', 'PPEditorialOld', 'PP Editorial Old Ultralight', Georgia, serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontFeatureSettings: '"liga" 1,"calt" 1,"dlig" 1',
  } as React.CSSProperties;

  const mono = {
    fontFamily:
      "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  } as React.CSSProperties;

  const accent = "#0077A8";
  const accentMid = "#5BB8D4";
  const accentMuted = "#E0F4FA";

  return (
    <div
      className="text-black font-m box-border"
      style={{ backgroundColor: "#fdfaf5", minHeight: "100vh" }}
    >
      <Navbar />

      {/* ── Hero image ── */}
      <div
        className="w-full overflow-hidden"
        style={{ paddingTop: "70px", height: "clamp(280px,45vw,560px)" }}
      >
        <img
          src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_2000,c_limit/Ocean_Watch_Thumbnail_as4zjx.png"
          alt="Ocean Watch — cover"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Title + meta ── */}
      <div className="px-6 max-w-[1100px] mx-auto pt-12 pb-6" ref={r0}>
        <div className="flex items-center gap-2 text-xs font-m opacity-40 mb-6">
          <Link to="/" className="hover:opacity-100 transition-opacity">
            Index
          </Link>
          <span>/</span>
          <span>Ocean Watch</span>
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
            Ocean
          </span>
          <span
            style={{
              color: accent,
              fontFamily:
                "'PP Editorial Old','PPEditorialOld','PP Editorial Old Ultralight',Georgia,serif",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            Watch
          </span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-4 border-t border-black/15 pt-6 pb-2">
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Type
            </p>
            <p className="text-sm font-m">UX/UI · Mobile · Research</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Role
            </p>
            <p className="text-sm font-m">UX Designer + Researcher</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Team
            </p>
            <p className="text-sm font-m">4 People</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Duration
            </p>
            <p className="text-sm font-m">10 Weeks</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Software
            </p>
            <p className="text-sm font-m">Figma · Maze · Miro</p>
          </div>
        </div>
      </div>

      {/* ── Overview ── */}
      <div className="px-6 max-w-[1100px] mx-auto mb-10">
        <div
          ref={r1}
          className="grid grid-cols-1 md:grid-cols-[1fr_1fr_260px] gap-10 border-t border-black/15 pt-10"
        >
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              The Problem
            </p>
            <p className="text-sm font-m leading-relaxed opacity-70">
              Ocean pollution data exists — but it&#39;s fragmented,
              inaccessible, and impossible for everyday people to act on.
              There&#39;s no unified tool that bridges awareness and action.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              The Goal
            </p>
            <p className="text-sm font-m leading-relaxed opacity-70">
              Design a mobile app that makes ocean health data approachable and
              actionable — helping users understand local ocean conditions and
              take meaningful steps to protect them.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              Services
            </p>
            <ul className="flex flex-col gap-1.5 text-sm font-m opacity-70">
              <li>UX Research</li>
              <li>Mobile UI Design</li>
              <li>Usability Testing</li>
              <li>Prototyping</li>
            </ul>
          </div>
        </div>

        <p
          className="mt-14 text-[clamp(26px,4vw,52px)] leading-[1.1] tracking-[-1px] select-none"
          style={{ ...serif, color: accent }}
        >
          How do we turn ocean data into action — for people who care but
          don&#39;t know where to start?
        </p>
      </div>

      {/* ── What is Ocean Watch? ── */}
      <div className="px-6 max-w-[1100px] mx-auto mb-8">
        <div
          ref={r2}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 border-t border-black/15 pt-10"
        >
          <div>
            <p
              className="text-[9px] font-m uppercase tracking-widest mb-1"
              style={{ color: accent, letterSpacing: "0.18em" }}
            >
              O V E R V I E W
            </p>
            <p className="text-sm font-m opacity-80 mt-1">
              What is Ocean Watch?
            </p>
          </div>
          <div className="max-w-[680px]">
            <p className="text-sm font-m leading-relaxed opacity-70">
              Ocean Watch is a mobile app concept that aggregates real-time
              ocean health data — water quality, marine debris, pollution
              hotspots — and presents it through an intuitive, map-driven
              interface. Users can explore conditions near them, log sightings,
              and discover local cleanup events.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Section 1 — Research                      */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r3}
          className="flex items-end justify-between border-t border-black/15 pt-6 mb-6"
        >
          <div className="flex items-baseline gap-5">
            <span
              className="text-[clamp(64px,10vw,130px)] leading-none tracking-[-4px] select-none"
              style={{ ...serif, color: accentMuted }}
            >
              1.
            </span>
            <h2
              className="text-[clamp(22px,3vw,36px)] tracking-[-0.8px]"
              style={{ ...serif, color: "#1a1714" }}
            >
              Research
            </h2>
            <span
              className="hidden md:inline text-[clamp(14px,2vw,22px)] tracking-[-0.5px] opacity-30"
              style={serif}
            >
              — Understanding the space
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      {/* Personas */}
      <div className="px-6 max-w-[1100px] mx-auto mb-8">
        <div ref={r4} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-sm font-m" style={mono}>
              Personas
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              Two user archetypes — different motivations, shared concern
            </p>
          </div>
          <p className="text-sm font-m leading-relaxed opacity-60 mb-5 max-w-[720px]">
            Research surfaced two distinct user types: the engaged activist who
            wants depth, and the curious newcomer who needs simplicity.
          </p>
          {/* ── Compact persona rows ── */}
          {[
            {
              id: "P01",
              name: "Maria Thompson",
              role: "Fisheries Scientist · Age 32 · Seattle, WA",
              color: accent,
              bg: accentMuted,
              needs: [
                "Real-time IUU fishing data for biodiversity research",
                "Satellite + drone surveillance integration",
                "Collaborative data sharing w/ intl. bodies",
              ],
              frustrations: [
                "Fragmented, unreliable fishing pattern data",
                "Slow regulatory response to detected violations",
                "No real-time comms across govts & researchers",
              ],
            },
            {
              id: "P02",
              name: "Alex Chen",
              role: "Fisheries Enforcement Officer · Age 45",
              color: accentMid,
              bg: "#E8F4F8",
              needs: [
                "Unified vessel tracking + cross-agency data",
                "Real-time alerts on flagged vessels",
                "Evidence trail for enforcement escalations",
              ],
              frustrations: [
                "Data siloed across agencies slows investigations",
                "Cross-referencing records takes weeks",
                "International coordination via email chains",
              ],
            },
          ].map((p) => (
            <div
              key={p.id}
              className="border border-black/10 overflow-hidden mb-3"
              style={{ borderRadius: "6px" }}
            >
              {/* Header row */}
              <div
                className="flex items-center gap-4 px-5 py-3"
                style={{ backgroundColor: p.bg }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0 text-white text-xs"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: p.color,
                    fontFamily: "'PP Editorial Old',Georgia,serif",
                  }}
                >
                  {p.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-[13px] font-m leading-tight mr-2"
                    style={{ ...serif }}
                  >
                    {p.name}
                  </span>
                  <span className="text-[10px] font-m opacity-40">
                    {p.role}
                  </span>
                </div>
                <span className="text-[9px] font-m uppercase tracking-widest opacity-30">
                  {p.id}
                </span>
              </div>
              {/* Two-column needs / frustrations */}
              <div className="grid grid-cols-2 divide-x divide-black/8">
                <div className="px-5 py-3">
                  <p
                    className="text-[8px] font-m uppercase tracking-widest mb-2"
                    style={{ color: p.color }}
                  >
                    Needs
                  </p>
                  <ul className="flex flex-col gap-1">
                    {p.needs.map((n) => (
                      <li key={n} className="flex items-start gap-1.5">
                        <span
                          className="text-[8px] mt-0.5 shrink-0"
                          style={{ color: p.color }}
                        >
                          →
                        </span>
                        <p className="text-[10px] font-m opacity-55 leading-snug">
                          {n}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-3">
                  <p className="text-[8px] font-m uppercase tracking-widest mb-2 opacity-35">
                    Frustrations
                  </p>
                  <ul className="flex flex-col gap-1">
                    {p.frustrations.map((f) => (
                      <li key={f} className="flex items-start gap-1.5">
                        <span className="text-[8px] mt-0.5 shrink-0 opacity-30">
                          ✕
                        </span>
                        <p className="text-[10px] font-m opacity-45 leading-snug">
                          {f}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <div className="px-6 max-w-[1100px] mx-auto mb-8">
        <div ref={r5} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-sm font-m" style={mono}>
              Key Insights
            </p>
            <p className="text-[10px] font-m opacity-35 uppercase tracking-widest">
              What the research told us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
            {[
              {
                num: "01",
                title: "Data is fragmented across agencies",
                body: "Ocean health data is abundant but siloed across government databases — there is no single place for civilians or researchers to find it.",
              },
              {
                num: "02",
                title: "Action is the missing layer",
                body: "Most existing tools are read-only. Users want to participate — log debris, join cleanups, alert others.",
              },
              {
                num: "03",
                title: "Location is the right anchor",
                body: "People care most about what&#39;s happening near them. A map-first approach makes data immediately personal and relevant.",
              },
              {
                num: "04",
                title: "Community multiplies impact",
                body: "Solo conservation feels futile. Shared sightings and group events give users a sense of collective momentum.",
              },
              {
                num: "05",
                title: "Simplicity over completeness",
                body: "Expert users want depth, but most people need a fast onramp. Progressive disclosure serves both without compromise.",
              },
              {
                num: "06",
                title: "Trust requires transparency",
                body: "Users distrust unofficial data. Surfacing credible sources like NOAA and university research is essential to adoption.",
              },
            ].map((ins) => (
              <div key={ins.num} className="py-5 border-t border-black/8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="text-[9px] font-m opacity-25 shrink-0"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {ins.num}
                  </span>
                  <p className="text-[12px] font-m leading-snug opacity-85">
                    {ins.title}
                  </p>
                </div>
                <p
                  className="text-[11px] font-m leading-relaxed opacity-45 pl-6"
                  dangerouslySetInnerHTML={{ __html: ins.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Affinity Diagram */}
      <div className="px-6 max-w-[1100px] mx-auto mb-12">
        <div className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-2">
            <p className="text-sm font-m" style={mono}>
              Affinity Diagram
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              6 themes · each sticky = one team member&#39;s note
            </p>
          </div>
          <p className="text-[11px] font-m opacity-40 mb-5 leading-relaxed">
            Each colored sticky represents a note written by a team member.
            Notes are grouped by theme. Color = author.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mb-6 pb-4 border-b border-black/8">
            {[
              { color: "#E3342F", label: "Member 1" },
              { color: "#3490DC", label: "Member 2" },
              { color: "#38A169", label: "Member 3" },
              { color: "#E67E22", label: "Member 4" },
              { color: "#9B59B6", label: "Member 5" },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <span
                  style={{
                    display: "inline-block",
                    width: "22px",
                    height: "16px",
                    borderRadius: "2px",
                    backgroundColor: m.color + "30",
                    border: `1.5px solid ${m.color}`,
                    flexShrink: 0,
                  }}
                />
                <span className="text-[10px] font-m opacity-55">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Affinity columns — consolidated recurring themes */}
          {(() => {
            const M: Record<
              string,
              { bg: string; border: string; text: string }
            > = {
              red: { bg: "#FDECEA", border: "#E3342F", text: "#991B1B" },
              blue: { bg: "#EBF5FB", border: "#3490DC", text: "#1E40AF" },
              green: { bg: "#EAFAF1", border: "#38A169", text: "#166534" },
              orange: { bg: "#FEF3E2", border: "#E67E22", text: "#92400E" },
              purple: { bg: "#F3EEF8", border: "#9B59B6", text: "#6B21A8" },
            };

            type Note = { text: string; member: keyof typeof M };
            type ColDef = { theme: string; themeColor: string; notes: Note[] };

            // Recurring themes merged — duplicates collapsed into single representative note
            const columns: ColDef[] = [
              {
                theme: "Community & Impact",
                themeColor: "#0D6E4B",
                notes: [
                  { text: "Making a positive impact", member: "red" },
                  { text: "Sustainability", member: "green" },
                  { text: "Budget constraints", member: "blue" },
                  { text: "Protect information", member: "blue" },
                ],
              },
              {
                theme: "Communication",
                themeColor: "#B45309",
                notes: [
                  { text: "Communicating between groups", member: "orange" },
                  { text: "User feedback loops", member: "red" },
                  { text: "Proposing improvements", member: "blue" },
                ],
              },
              {
                theme: "Data & Technology",
                themeColor: "#0077A8",
                notes: [
                  { text: "Data collection & analysis", member: "blue" },
                  { text: "Automated monitoring", member: "blue" },
                  { text: "Satellite / drone / ship", member: "green" },
                  { text: "Cloud-based infrastructure", member: "blue" },
                  { text: "Customized reporting", member: "orange" },
                ],
              },
              {
                theme: "Challenges",
                themeColor: "#6D28D9",
                notes: [
                  { text: "Data privacy & security", member: "green" },
                  { text: "Scalable infrastructure", member: "blue" },
                  { text: "Legal & regulatory compliance", member: "purple" },
                  { text: "Geospatial data complexity", member: "orange" },
                  { text: "Performance & availability", member: "blue" },
                ],
              },
              {
                theme: "Collaboration",
                themeColor: "#C2410C",
                notes: [
                  { text: "Work w/ NOAA & marine bodies", member: "orange" },
                  { text: "Cross-stakeholder coordination", member: "green" },
                  { text: "Support legal authorities", member: "orange" },
                ],
              },
              {
                theme: "Goals",
                themeColor: "#4A6741",
                notes: [
                  { text: "Secure & reliable system", member: "purple" },
                  { text: "Scalable & modular", member: "purple" },
                  { text: "Cost-effective & modern", member: "purple" },
                  { text: "Environmentally friendly", member: "purple" },
                ],
              },
            ];

            return (
              <div
                className="grid gap-3"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
                }}
              >
                {columns.map((col) => (
                  <div key={col.theme}>
                    <p
                      className="text-[9px] font-m font-semibold uppercase tracking-widest mb-2 pb-1.5 border-b"
                      style={{
                        color: col.themeColor,
                        borderColor: col.themeColor + "40",
                      }}
                    >
                      {col.theme}
                    </p>
                    <div className="flex flex-col gap-1">
                      {col.notes.map((note, ni) => (
                        <div
                          key={ni}
                          className="px-2 py-1.5"
                          style={{
                            backgroundColor: M[note.member].bg,
                            border: `1px solid ${M[note.member].border}55`,
                            borderRadius: "3px",
                          }}
                        >
                          <p
                            className="text-[9px] font-m leading-snug"
                            style={{ color: M[note.member].text }}
                          >
                            {note.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Section 2 — Low-Fidelity Wireframes       */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r9}
          className="flex items-end justify-between border-t border-black/15 pt-6 mb-6"
        >
          <div className="flex items-baseline gap-5">
            <span
              className="text-[clamp(64px,10vw,130px)] leading-none tracking-[-4px] select-none"
              style={{ ...serif, color: accentMuted }}
            >
              2.
            </span>
            <h2
              className="text-[clamp(22px,3vw,36px)] tracking-[-0.8px]"
              style={{ ...serif, color: "#1a1714" }}
            >
              Low-Fidelity Wireframes
            </h2>
            <span
              className="hidden md:inline text-[clamp(14px,2vw,22px)] tracking-[-0.5px] opacity-30"
              style={serif}
            >
              — Early sketches
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      {/* Low-fi content */}
      <div className="px-6 max-w-[1100px] mx-auto mb-16">
        <div ref={r12} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-sm font-m" style={mono}>
              Wireframe Screens
            </p>
            <p className="text-xs font-m opacity-40">
              Click any screen to enlarge
            </p>
          </div>
          <p className="text-sm font-m leading-relaxed opacity-60 max-w-[720px] mb-6">
            I collaborated closely with my data team to sketch low-fidelity
            wireframes — giving us a tangible visualization of key elements
            before committing to high-fidelity design.
          </p>
          {/* Featured / active wireframe */}
          <div
            className="w-full mb-4 overflow-hidden"
            style={{
              borderRadius: "6px",
              background: "rgba(0,0,0,0.02)",
              border: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <img
          loading="lazy"
          decoding="async"
              src={wireframes[activeWireframe].src}
              alt={wireframes[activeWireframe].alt}
              className="w-full h-auto object-contain transition-opacity duration-200"
              style={{ display: "block" }}
            />
          </div>
          {/* Thumbnail strip — same 3/5-col grid layout */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
            {wireframes.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setActiveWireframe(i)}
                className="overflow-hidden group relative"
                style={{
                  borderRadius: "4px",
                  border:
                    activeWireframe === i
                      ? `2px solid ${accent}`
                      : "2px solid rgba(0,0,0,0.07)",
                  cursor: "pointer",
                  padding: 0,
                  background: "rgba(0,0,0,0.025)",
                  transition: "border-color 0.15s",
                }}
              >
                <img
          loading="lazy"
          decoding="async"
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain transition-opacity duration-150"
                  style={{ opacity: activeWireframe === i ? 1 : 0.55 }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-150"
                  style={{
                    background:
                      activeWireframe === i ? "transparent" : "rgba(0,0,0,0)",
                    pointerEvents: "none",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Section 3 — Final Design                  */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r10}
          className="flex items-end justify-between border-t border-black/15 pt-6 mb-6"
        >
          <div className="flex items-baseline gap-5">
            <span
              className="text-[clamp(64px,10vw,130px)] leading-none tracking-[-4px] select-none"
              style={{ ...serif, color: accentMuted }}
            >
              3.
            </span>
            <h2
              className="text-[clamp(22px,3vw,36px)] tracking-[-0.8px]"
              style={{ ...serif, color: "#1a1714" }}
            >
              Final Design
            </h2>
            <span
              className="hidden md:inline text-[clamp(14px,2vw,22px)] tracking-[-0.5px] opacity-30"
              style={serif}
            >
              — Screens &amp; prototype
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-10">
        <div className="mb-10">
          {/* High-Fidelity: Classified View */}
          <div className="border-t border-black/10 pt-8 mb-10">
            <div className="flex items-baseline justify-between mb-6">
              <p className="text-sm font-m" style={mono}>
                High-Fidelity Design
              </p>
              <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
                Classified View
              </p>
            </div>
            <p className="text-[11px] font-m opacity-40 uppercase tracking-widest mb-6">
              For authenticated / restricted users
            </p>

            {/* Classified View — image with annotations overlaid on left/right edges */}
            <div className="hidden md:block relative mb-8">
              {/* Image — full width */}
              <div
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  overflow: "hidden",
                }}
              >
                <img
          loading="lazy"
          decoding="async"
                  src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1400,c_limit/Company_View_jy5kat.webp"
                  alt="Classified / Company View — high fidelity screen"
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Left annotations — absolute, anchored inside image left edge */}
              <div
                className="absolute top-0 bottom-0 flex flex-col justify-around py-12"
                style={{ left: "16px", width: "160px", zIndex: 2 }}
              >
                {[
                  {
                    tag: "01",
                    title: "Classification Tag",
                    body: "Easy-to-spot tag so users never accidentally leak info",
                  },
                  {
                    tag: "02",
                    title: "Written Insight",
                    body: "Explains exactly why each grade was received",
                  },
                ].map((item) => (
                  <div key={item.tag}>
                    <div
                      className="px-3 py-2.5"
                      style={{
                        background: "#ffffff",
                        borderRadius: "6px",
                        border: "1px solid rgba(0,0,0,0.10)",
                        borderLeft: `3px solid ${accent}`,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className="text-[7px] font-m tracking-widest"
                          style={{ color: accent, fontWeight: 700 }}
                        >
                          {item.tag}
                        </span>
                        <p
                          className="text-[11px] font-m leading-snug"
                          style={{ color: "#0d1b2a", fontWeight: 600 }}
                        >
                          {item.title}
                        </p>
                      </div>
                      <p
                        className="text-[9px] font-m leading-snug"
                        style={{ color: "#4a5568" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right annotations — absolute, anchored inside image right edge */}
              <div
                className="absolute top-0 bottom-0 flex flex-col justify-around py-12"
                style={{ right: "16px", width: "160px", zIndex: 2 }}
              >
                {[
                  {
                    tag: "03",
                    title: "Easy Export",
                    body: "One-click data export for internal reporting",
                  },
                  {
                    tag: "04",
                    title: "Clickable Grades",
                    body: "Drill into each grade for deeper reasoning",
                  },
                ].map((item) => (
                  <div key={item.tag}>
                    <div
                      className="px-3 py-2.5"
                      style={{
                        background: "#ffffff",
                        borderRadius: "6px",
                        border: "1px solid rgba(0,0,0,0.10)",
                        borderLeft: `3px solid ${accent}`,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className="text-[7px] font-m tracking-widest"
                          style={{ color: accent, fontWeight: 700 }}
                        >
                          {item.tag}
                        </span>
                        <p
                          className="text-[11px] font-m leading-snug"
                          style={{ color: "#0d1b2a", fontWeight: 600 }}
                        >
                          {item.title}
                        </p>
                      </div>
                      <p
                        className="text-[9px] font-m leading-snug"
                        style={{ color: "#4a5568" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile fallback — full width image + tags below */}
            <div
              className="md:hidden mb-8 overflow-hidden"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <img
          loading="lazy"
          decoding="async"
                src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1400,c_limit/Company_View_jy5kat.webp"
                alt="Classified / Company View — high fidelity screen"
                className="w-full h-auto object-contain block"
              />
              <div
                className="flex flex-wrap gap-2 p-3"
                style={{ background: "rgba(10,30,50,0.88)" }}
              >
                {[
                  { tag: "01", title: "Classification Tag" },
                  { tag: "02", title: "Written Insight" },
                  { tag: "03", title: "Easy Export" },
                  { tag: "04", title: "Clickable Grades" },
                ].map((item) => (
                  <div
                    key={item.tag}
                    className="flex items-center gap-1 px-2 py-1"
                    style={{
                      background: `${accent}22`,
                      borderRadius: "4px",
                      border: `1px solid ${accent}50`,
                    }}
                  >
                    <span
                      className="text-[7px] font-m"
                      style={{ color: accentMid }}
                    >
                      {item.tag}
                    </span>
                    <p
                      className="text-[9px] font-m"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* High-Fidelity: General Public View */}
          <div className="border-t border-black/10 pt-8 mb-2">
            <div className="flex items-baseline justify-between mb-6">
              <p className="text-sm font-m" style={mono}>
                General Public View
              </p>
              <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
                Public-facing transparency layer
              </p>
            </div>

            {/* General Public — image with annotations overlaid on left/right edges */}
            <div className="hidden md:block relative mb-2">
              {/* Image — full width */}
              <div
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  overflow: "hidden",
                }}
              >
                <img
          loading="lazy"
          decoding="async"
                  src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1400,c_limit/General_Public_h4hddj.webp"
                  alt="General Public View — high fidelity screen"
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Left annotation — inside image left edge */}
              <div
                className="absolute top-0 bottom-0 flex flex-col justify-around py-16"
                style={{ left: "16px", width: "160px", zIndex: 2 }}
              >
                {[
                  {
                    tag: "01",
                    title: "Fishing History",
                    body: "Basic company fishing history surfaces key context at a glance",
                  },
                ].map((item) => (
                  <div key={item.tag}>
                    <div
                      className="px-3 py-2.5"
                      style={{
                        background: "#ffffff",
                        borderRadius: "6px",
                        border: "1px solid rgba(0,0,0,0.10)",
                        borderLeft: `3px solid ${accent}`,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className="text-[7px] font-m tracking-widest"
                          style={{ color: accent, fontWeight: 700 }}
                        >
                          {item.tag}
                        </span>
                        <p
                          className="text-[11px] font-m leading-snug"
                          style={{ color: "#0d1b2a", fontWeight: 600 }}
                        >
                          {item.title}
                        </p>
                      </div>
                      <p
                        className="text-[9px] font-m leading-snug"
                        style={{ color: "#4a5568" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right annotations — inside image right edge */}
              <div
                className="absolute top-0 bottom-0 flex flex-col justify-around py-16"
                style={{ right: "16px", width: "160px", zIndex: 2 }}
              >
                {[
                  {
                    tag: "02",
                    title: "Overall Grade",
                    body: "At-a-glance company grade visible without authentication",
                  },
                  {
                    tag: "03",
                    title: "Public Transparency",
                    body: "Only public data shown — nothing private is ever surfaced",
                  },
                ].map((item) => (
                  <div key={item.tag}>
                    <div
                      className="px-3 py-2.5"
                      style={{
                        background: "#ffffff",
                        borderRadius: "6px",
                        border: "1px solid rgba(0,0,0,0.10)",
                        borderLeft: `3px solid ${accent}`,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className="text-[7px] font-m tracking-widest"
                          style={{ color: accent, fontWeight: 700 }}
                        >
                          {item.tag}
                        </span>
                        <p
                          className="text-[11px] font-m leading-snug"
                          style={{ color: "#0d1b2a", fontWeight: 600 }}
                        >
                          {item.title}
                        </p>
                      </div>
                      <p
                        className="text-[9px] font-m leading-snug"
                        style={{ color: "#4a5568" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile fallback */}
            <div
              className="md:hidden mb-2 overflow-hidden"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <img
          loading="lazy"
          decoding="async"
                src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_1400,c_limit/General_Public_h4hddj.webp"
                alt="General Public View — high fidelity screen"
                className="w-full h-auto object-contain block"
              />
              <div
                className="flex flex-wrap gap-2 p-3"
                style={{ background: "rgba(10,30,50,0.88)" }}
              >
                {[
                  { tag: "01", title: "Fishing History" },
                  { tag: "02", title: "Overall Grade" },
                  { tag: "03", title: "Public Transparency" },
                ].map((item) => (
                  <div
                    key={item.tag}
                    className="flex items-center gap-1 px-2 py-1"
                    style={{
                      background: `${accent}22`,
                      borderRadius: "4px",
                      border: `1px solid ${accent}50`,
                    }}
                  >
                    <span
                      className="text-[7px] font-m"
                      style={{ color: accentMid }}
                    >
                      {item.tag}
                    </span>
                    <p
                      className="text-[9px] font-m"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usability Testing */}
      {/* Usability Testing */}
      <div className="px-6 max-w-[1100px] mx-auto mb-10">
        <div ref={r11} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-sm font-m" style={mono}>
              Usability Testing
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              5 participants, unmoderated via Maze
            </p>
          </div>

          <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-black/8">
            <span
              className="text-[clamp(42px,6vw,64px)] leading-none tracking-tight"
              style={{ ...serif, color: accent }}
            >
              92%
            </span>
            <p className="text-[12px] font-m opacity-50 leading-relaxed max-w-[320px]">
              task completion rate on the core flow — find a local pollution
              event and log a sighting
            </p>
          </div>

          <div className="flex flex-col divide-y divide-black/8">
            {[
              {
                label: "Map Navigation",
                feedback:
                  "Incredibly intuitive — I knew where everything was without reading a single label.",
              },
              {
                label: "Filter System",
                feedback:
                  "The filters were a bit hidden at first. I&#39;d surface them earlier in the flow.",
              },
              {
                label: "Log a Sighting",
                feedback:
                  "I loved that I could take a photo and it auto-detected the location. That&#39;s smart.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[140px_1fr] gap-6 py-5 items-start"
              >
                <span
                  className="text-[9px] font-m uppercase tracking-widest pt-0.5"
                  style={{ color: accent, letterSpacing: "0.1em" }}
                >
                  {item.label}
                </span>
                <p
                  className="text-[12px] font-m leading-relaxed opacity-55"
                  dangerouslySetInnerHTML={{
                    __html: `&#8220;${item.feedback}&#8221;`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Reflection                                 */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-0">
        <div
          ref={r11}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 border-t border-black/15 pt-8"
        >
          <div>
            <p
              className="text-[9px] font-m uppercase tracking-widest mb-1"
              style={{ color: accent, letterSpacing: "0.18em" }}
            >
              R E F L E C T I O N
            </p>
            <p className="text-sm font-m opacity-80 mt-1">What I Learned</p>
          </div>
          <div className="max-w-[620px] pb-20">
            <p
              className="text-[clamp(22px,2.5vw,32px)] leading-[1.2] tracking-[-0.5px] mb-6 opacity-80"
              style={serif}
            >
              What I Learned
            </p>
            <p className="text-sm font-m leading-relaxed opacity-60 mb-4">
              Throughout this project, I gained valuable insights into project
              management, stakeholder collaboration, and the complexities of
              addressing real-world issues like illegal, unreported, and
              unregulated (IUU) fishing. Working with my team, I learned how to
              define project scope, prioritize key features, and translate
              data-driven insights into a user-friendly report card design.
            </p>
            <p className="text-sm font-m leading-relaxed opacity-60">
              Additionally, this experience deepened my understanding of
              balancing technological feasibility with stakeholder needs while
              considering global challenges such as regulatory enforcement and
              industry transparency. Ultimately, this project reinforced the
              importance of clear communication, iterative design, and strategic
              problem-solving in tackling large-scale issues.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Footer nav                                 */}
      {/* ══════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#1a1714" }}>
        <div className="px-6 max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-4 py-10">
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
                (e.currentTarget as HTMLElement).style.borderColor = "#2D2D2D";
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
                  style={{ color: "rgba(253,250,245,0.35)" }}
                >
                  Homepage
                </p>
                <p
                  className="text-[9px] font-m uppercase tracking-widest"
                  style={{ color: "rgba(253,250,245,0.18)" }}
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
            <Link
              to="/recognize"
              className="group flex flex-col justify-between gap-6 p-6 md:p-8 transition-all duration-300 border border-white/20 bg-transparent flex-1"
              style={{ borderRadius: "4px" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#2D2D2D";
                (e.currentTarget as HTMLElement).style.borderColor = "#2D2D2D";
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
                  style={{ color: "rgba(253,250,245,0.35)" }}
                >
                  Next Project
                </p>
                <p
                  className="text-[10px] font-m uppercase tracking-widest"
                  style={{ color: "rgba(253,250,245,0.20)" }}
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

        <div style={{ backgroundColor: accent }}>
          <div className="px-5 pt-5 pb-3 flex flex-wrap gap-x-16 gap-y-6">
            <div className="flex flex-col gap-2">
              <p
                className="text-[10px] uppercase tracking-widest"
                style={{
                  color: "rgba(253,250,245,0.45)",
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
                  color: "rgba(253,250,245,0.45)",
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
                  "'PP Editorial Old','PPEditorialOld','PP Editorial Old Ultralight',Georgia,serif",
                fontStyle: "normal",
                fontWeight: 400,
                color: "#fdfaf5",
                fontFeatureSettings: '"liga" 1,"calt" 1,"dlig" 1',
              }}
            >
              <span>Kai Andreic</span>
              <span>Product Designer</span>
            </div>
          </div>
          <div className="px-5 pb-5 flex justify-between items-center">
            <span
              className="text-xs"
              style={{
                color: "rgba(253,250,245,0.45)",
                fontFamily:
                  "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
              }}
            >
              &#169; 2025 Kai Andreic
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs transition-opacity hover:opacity-70 bg-transparent border-none cursor-pointer"
              style={{
                color: "rgba(253,250,245,0.6)",
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
  );
};

export default OceanWatchPage;
