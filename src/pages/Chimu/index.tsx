import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../sections/Navbar";

const ChimuPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const r4 = useRef<HTMLDivElement>(null);
  const r4b = useRef<HTMLDivElement>(null);
  const r5 = useRef<HTMLDivElement>(null);
  const r6 = useRef<HTMLDivElement>(null);
  const r7 = useRef<HTMLDivElement>(null);
  const r8 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [r0, r1, r2, r3, r4, r4b, r5, r6, r7, r8];
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

  const accent = "#0028B4";
  const accentMuted = "#EEF1FB";

  return (
    <div
      className="text-black font-m box-border"
      style={{ backgroundColor: "#fdfaf5", minHeight: "100vh" }}
    >
      <Navbar />

      {/* ── Hero image ── */}
      <div
        className="w-full overflow-hidden"
        style={{
          paddingTop: "70px",
          height: "clamp(280px,45vw,560px)",
        }}
      >
        <img
          src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_2000,c_limit/Chimu_escc5h.png"
          alt="Chimu cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Title + meta ── */}
      <div className="px-6 max-w-[1100px] mx-auto pt-12 pb-6" ref={r0}>
        <div className="flex items-center gap-2 text-xs font-m opacity-40 mb-6">
          <Link to="/" className="hover:opacity-100 transition-opacity">
            Index
          </Link>
          <span>/</span>
          <span>Chimu</span>
        </div>

        <h1
          className="text-[clamp(52px,9vw,120px)] leading-[0.92] tracking-[-3px] mb-8 flex flex-wrap items-baseline gap-x-[0.25em]"
          style={serif}
        >
          <span style={serif}>Chi</span>
          <span style={{ ...serif, color: accent }}>mu</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-4 border-t border-black/15 pt-6 pb-2">
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Type
            </p>
            <p className="text-sm font-m">UX/UI · — · —</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Role
            </p>
            <p className="text-sm font-m">UX Designer</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Team
            </p>
            <p className="text-sm font-m">— People</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Duration
            </p>
            <p className="text-sm font-m">— Weeks</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Software
            </p>
            <p className="text-sm font-m">Figma · —</p>
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
              Students in group projects often struggle with engagement,
              accountability, and keeping track of each other&#39;s
              contributions — leaving professors with little visibility into
              group dynamics until it&#39;s too late.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              The Goal
            </p>
            <p className="text-sm font-m leading-relaxed opacity-70">
              Redesign and rebuild an existing capstone proposal into a
              fully-realized platform that fosters healthy group collaboration
              through lightweight, habit-forming features for both students and
              professors.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              Services
            </p>
            <ul className="flex flex-col gap-1.5 text-sm font-m opacity-70">
              <li>UX Research</li>
              <li>UI Design</li>
              <li>Figma Make</li>
            </ul>
          </div>
        </div>

        <p
          className="mt-14 text-[clamp(26px,4vw,52px)] leading-[1.1] tracking-[-1px] select-none"
          style={{ ...serif, color: accent }}
        >
          How do you make group work actually work — for students and the
          professors guiding them?
        </p>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Section 1 — Research & Background         */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r2}
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
              — Background &amp; understanding the space
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      {/* ── Background: Origin + What + Why + Use Cases (condensed) ── */}
      <div className="px-6 max-w-[1100px] mx-auto mb-14" ref={r3}>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 border-t border-black/15 pt-10">
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-[9px] font-m uppercase tracking-widest mb-1"
                style={{ color: accent, letterSpacing: "0.18em" }}
              >
                B A C K G R O U N D
              </p>
              <p className="text-sm font-m opacity-80 mt-1">
                Origin &amp; platform
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Icebreakers",
                "Team Agreements",
                "Weekly Surveys",
                "Survey Results",
              ].map((f) => (
                <span
                  key={f}
                  className="text-xs font-m px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: accentMuted,
                    color: accent,
                    letterSpacing: "0.04em",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="max-w-[680px] flex flex-col gap-6">
            <p className="text-sm font-m leading-relaxed opacity-70">
              Chīmu started as an internship collaboration with my professor —
              together we took an old capstone concept and turned it into a real
              platform. It&#39;s designed to surface the group dynamics that
              usually stay invisible: icebreakers and team agreements help
              students connect early, while weekly pulse surveys track
              contributions and give professors visibility into group health
              before problems escalate.
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-5 border-t border-black/8 pt-5">
              <div>
                <p
                  className="text-[10px] font-m uppercase tracking-widest mb-3"
                  style={{ color: accent, opacity: 0.7 }}
                >
                  For Students
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    {
                      label: "Icebreakers",
                      desc: "Connect before the work begins.",
                    },
                    {
                      label: "Team Agreements",
                      desc: "Set shared expectations.",
                    },
                    {
                      label: "Weekly Surveys",
                      desc: "Rate each other&#39;s contributions.",
                    },
                    {
                      label: "Survey Results",
                      desc: "See how you&#39;re showing up.",
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex items-baseline gap-2">
                      <span
                        className="text-[11px] font-m flex-shrink-0"
                        style={{ color: accent }}
                      >
                        →
                      </span>
                      <span className="text-[11px] font-m opacity-60 leading-snug">
                        <b
                          className="font-m opacity-90"
                          style={{ color: "#1a1714" }}
                        >
                          {item.label}
                        </b>{" "}
                        —{" "}
                        <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="text-[10px] font-m uppercase tracking-widest mb-3"
                  style={{ color: accent, opacity: 0.7 }}
                >
                  For Professors
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    {
                      label: "Icebreakers",
                      desc: "Know your students deeper.",
                    },
                    {
                      label: "Team Agreements",
                      desc: "Mediate disputes fairly.",
                    },
                    {
                      label: "Pulse Surveys",
                      desc: "Track all group contributions.",
                    },
                    {
                      label: "Pulse Results",
                      desc: "Catch group issues early.",
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex items-baseline gap-2">
                      <span
                        className="text-[11px] font-m flex-shrink-0"
                        style={{ color: accent }}
                      >
                        →
                      </span>
                      <span className="text-[11px] font-m opacity-60 leading-snug">
                        <b
                          className="font-m opacity-90"
                          style={{ color: "#1a1714" }}
                        >
                          {item.label}
                        </b>{" "}
                        — {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── App Workflow Diagram ── */}
      <div className="px-6 max-w-[1100px] mx-auto mb-16" ref={r4b}>
        <div className="border-t border-black/10 pt-8 mb-8">
          <p
            className="text-[9px] font-m uppercase tracking-widest mb-1"
            style={{ color: accent, letterSpacing: "0.18em" }}
          >
            A P P &nbsp; W O R K F L O W
          </p>
          <p className="text-sm font-m opacity-40 mt-1">
            How Chīmu works, step by step
          </p>
          <Link
            to="/studentworkflow"
            className="inline-flex items-center gap-2 text-[12px] font-m mt-4 px-4 py-2.5 rounded transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: accent,
              color: "#fdfaf5",
              fontWeight: 600,
              letterSpacing: "0.04em",
              boxShadow: "0 2px 8px rgba(0,40,180,0.25)",
              textDecoration: "none",
            }}
          >
            View low fidelity designs
            <span style={{ fontSize: "13px" }}>↗</span>
          </Link>
        </div>

        {/* Student flow */}
        <div className="mb-10">
          <p
            className="text-[10px] font-m uppercase tracking-widest mb-5"
            style={{ color: accent, opacity: 0.7 }}
          >
            Student Journey
          </p>
          <div className="flex items-stretch gap-0 overflow-x-auto pb-2">
            {[
              {
                step: "01",
                icon: "✦",
                label: "Join Group",
                sub: "Professor creates the team & sends invite",
              },
              {
                step: "02",
                icon: "◎",
                label: "Icebreaker",
                sub: "Answer 10 questions to introduce yourself",
              },
              {
                step: "03",
                icon: "◈",
                label: "Team Agreement",
                sub: "Co-write shared norms & expectations",
              },
              {
                step: "04",
                icon: "◑",
                label: "Weekly Survey",
                sub: "Rate each member\'s contributions",
              },
              {
                step: "05",
                icon: "◆",
                label: "See Results",
                sub: "View your own pulse & how you\'re perceived",
              },
            ].map((node, i, arr) => (
              <div key={node.step} className="flex items-center flex-shrink-0">
                <div
                  className="flex flex-col gap-2 p-4"
                  style={{
                    width: "clamp(130px, 16vw, 180px)",
                    border: "1px solid rgba(0,40,180,0.12)",
                    borderRadius: "6px",
                    backgroundColor: accentMuted,
                    position: "relative",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-m uppercase tracking-widest opacity-40">
                      {node.step}
                    </span>
                    <span style={{ color: accent, fontSize: "14px" }}>
                      {node.icon}
                    </span>
                  </div>
                  <p
                    className="text-[13px] font-m leading-tight"
                    style={{ color: "#1a1714", fontWeight: 600 }}
                  >
                    {node.label}
                  </p>
                  <p className="text-[11px] font-m leading-snug opacity-55">
                    {node.sub}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex items-center mx-1 flex-shrink-0">
                    <div
                      style={{
                        width: "24px",
                        height: "1px",
                        backgroundColor: "rgba(0,40,180,0.25)",
                      }}
                    />
                    <span
                      style={{
                        color: accent,
                        opacity: 0.4,
                        fontSize: "10px",
                        marginLeft: "-1px",
                      }}
                    >
                      ▶
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Professor flow */}
        <div>
          <p
            className="text-[10px] font-m uppercase tracking-widest mb-5"
            style={{ color: accent, opacity: 0.7 }}
          >
            Professor Journey
          </p>
          <div className="flex items-stretch gap-0 overflow-x-auto pb-2">
            {[
              {
                step: "01",
                icon: "✦",
                label: "Create Course",
                sub: "Set up classes, assign groups & students",
              },
              {
                step: "02",
                icon: "◎",
                label: "Review Icebreakers",
                sub: "Read student intros to know each team",
              },
              {
                step: "03",
                icon: "◈",
                label: "View Agreements",
                sub: "See what norms each group committed to",
              },
              {
                step: "04",
                icon: "◑",
                label: "Monitor Surveys",
                sub: "Track weekly contribution data per group",
              },
              {
                step: "05",
                icon: "◆",
                label: "Intervene Early",
                sub: "Spot struggling teams before issues escalate",
              },
            ].map((node, i, arr) => (
              <div key={node.step} className="flex items-center flex-shrink-0">
                <div
                  className="flex flex-col gap-2 p-4"
                  style={{
                    width: "clamp(130px, 16vw, 180px)",
                    border: "1px solid rgba(0,40,180,0.12)",
                    borderRadius: "6px",
                    backgroundColor: "#f5f3ff",
                    position: "relative",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-m uppercase tracking-widest opacity-40">
                      {node.step}
                    </span>
                    <span style={{ color: accent, fontSize: "14px" }}>
                      {node.icon}
                    </span>
                  </div>
                  <p
                    className="text-[13px] font-m leading-tight"
                    style={{ color: "#1a1714", fontWeight: 600 }}
                  >
                    {node.label}
                  </p>
                  <p className="text-[11px] font-m leading-snug opacity-55">
                    {node.sub}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex items-center mx-1 flex-shrink-0">
                    <div
                      style={{
                        width: "24px",
                        height: "1px",
                        backgroundColor: "rgba(0,40,180,0.25)",
                      }}
                    />
                    <span
                      style={{
                        color: accent,
                        opacity: 0.4,
                        fontSize: "10px",
                        marginLeft: "-1px",
                      }}
                    >
                      ▶
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Literature Review ── */}
      <div className="px-6 max-w-[1100px] mx-auto mb-16" ref={r4}>
        <div className="border-t border-black/10 pt-8 mb-8">
          <p
            className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1"
            style={mono}
          >
            Literature Review
          </p>
          <p
            className="text-[clamp(13px,1.1vw,15px)] font-m opacity-30 mt-1"
            style={{
              fontFamily: "'PP Neue Montreal','PPNeueMontreal',sans-serif",
            }}
          >
            University of Washington &nbsp;·&nbsp; Prof. Namho Park
            &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; By Kai Andreic
          </p>
        </div>

        {/* 3-column article grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10 divide-y md:divide-y-0 md:divide-x divide-black/10"
          style={{ borderRadius: "4px", overflow: "hidden" }}
        >
          {/* Article 01 */}
          <div className="p-6 flex flex-col gap-5" ref={r5}>
            <div>
              <p
                className="text-[9px] font-m uppercase tracking-widest mb-1"
                style={{ color: accent, letterSpacing: "0.18em" }}
              >
                Article 01
              </p>
              <p className="text-xs font-m opacity-80 leading-snug mb-0.5">
                Bridging the Gap in Team Collaboration
              </p>
              <p className="text-[11px] font-m opacity-35">Rima Rafiq</p>
            </div>
            <p className="text-[11px] font-m leading-relaxed opacity-60">
              Unbalanced workloads, poor communication, and misaligned
              expectations break group work. Personal connection led to a 50%+
              increase in communication. Psychological safety lets people share
              honestly without blame.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                {
                  label: "Meet the Team",
                  desc: "10 icebreaker questions to build early connection.",
                },
                {
                  label: "Team Agreement",
                  desc: "A shared contract for expectations.",
                },
                {
                  label: "Pulse Survey",
                  desc: "Weekly check-ins on collaboration.",
                },
              ].map((item) => (
                <li key={item.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[10px] font-m"
                    style={{ color: accent }}
                  >
                    {item.label}
                  </span>
                  <span className="text-[11px] font-m opacity-50 leading-snug">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] font-m opacity-40 italic leading-snug border-t border-black/8 pt-4">
              "Chīmu is a tool — its value lives in the data it surfaces." —
              Nam-ho
            </p>
          </div>

          {/* Article 02 */}
          <div className="p-6 flex flex-col gap-5" ref={r6}>
            <div>
              <p
                className="text-[9px] font-m uppercase tracking-widest mb-1"
                style={{ color: accent, letterSpacing: "0.18em" }}
              >
                Article 02
              </p>
              <p className="text-xs font-m opacity-80 leading-snug mb-0.5">
                Who are the Players?
              </p>
              <p className="text-[11px] font-m opacity-35">Joyce Kim</p>
            </div>
            <p className="text-[11px] font-m leading-relaxed opacity-60">
              30% of students are first-generation. Commuters struggle to
              connect outside class. Students arrive with vastly different goals
              — degrees, skills, networks, exploration. Leadership often becomes
              a social negotiation rather than an assigned role.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Informatics students bring wide skill diversity.",
                "Goals vary: technical, social, philosophical.",
                "Commuters face real barriers to group bonding.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span
                    className="mt-[4px] flex-shrink-0 w-[5px] h-[5px] rounded-full"
                    style={{ backgroundColor: accent, opacity: 0.4 }}
                  />
                  <span className="text-[11px] font-m opacity-55 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] font-m opacity-40 italic leading-snug border-t border-black/8 pt-4">
              Diverse backgrounds make it inherently hard to build a
              consistently productive group.
            </p>
          </div>

          {/* Article 03 */}
          <div className="p-6 flex flex-col gap-5" ref={r7}>
            <div>
              <p
                className="text-[9px] font-m uppercase tracking-widest mb-1"
                style={{ color: accent, letterSpacing: "0.18em" }}
              >
                Article 03
              </p>
              <p className="text-xs font-m opacity-80 leading-snug mb-0.5">
                Unique Challenges of Academic Teamwork
              </p>
              <p className="text-[11px] font-m opacity-35">Joyce Kim</p>
            </div>
            <p className="text-[11px] font-m leading-relaxed opacity-60">
              Academic teams are temporary and lack professional hierarchy.
              Groups form through social ties, random assignment, or strangers —
              each with its own friction. Grades are the only accountability
              lever, which diligent students resent when others don&#39;t pull
              weight.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "No clear leader → teams go directionless.",
                "Cultural gaps: individual vs. collective achievement.",
                "Skill resentment between strong and weaker members.",
                "Jobs, family, and course load add external pressure.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span
                    className="mt-[4px] flex-shrink-0 w-[5px] h-[5px] rounded-full"
                    style={{ backgroundColor: accent, opacity: 0.4 }}
                  />
                  <span className="text-[11px] font-m opacity-55 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] font-m opacity-40 italic leading-snug border-t border-black/8 pt-4">
              Addressing motivation gaps and skill disparities is the first step
              toward building tools that help.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Section 2 — Design                        */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r8}
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
              Final Design
            </h2>
            <span
              className="hidden md:inline text-[clamp(14px,2vw,22px)] tracking-[-0.5px] opacity-30"
              style={serif}
            >
              — Screens &amp; vibe-coded prototype
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      {/* Placeholder final design area */}
      <div className="px-6 max-w-[1100px] mx-auto mb-16">
        <div className="border-t border-black/10 pt-8">
          <div
            className="w-full flex items-center justify-center py-24"
            style={{
              border: "1.5px dashed rgba(0,0,0,0.12)",
              borderRadius: "6px",
              backgroundColor: "rgba(0,0,0,0.015)",
            }}
          >
            <p className="text-sm font-m opacity-25 tracking-wide">
              Final design screens will be added here
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Reflection                                 */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-0">
        <div
          ref={r6}
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
            <p className="text-sm font-m leading-relaxed opacity-60">
              Reflection copy will be added here once the project content is
              provided.
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
              to="/oceanwatch"
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
                  Mobile · Ocean Health
                </p>
              </div>
              <span
                className="text-[clamp(52px,8vw,110px)] tracking-[-3px] leading-none"
                style={{ ...serif, color: "#fdfaf5" }}
              >
                Ocean Watch ↗
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

export default ChimuPage;
