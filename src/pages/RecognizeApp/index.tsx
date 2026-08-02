import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../sections/Navbar";

type VizData = {
  num: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
  flip: boolean;
};

// ─── Vertical Carousel ───────────────────────────────────────────────────────
// Smooth clip-contained vertical carousel.
// Total section height = count * 85vh + 20vh (much shorter than before).
// Per-card slot = totalScroll / count.
// Within each slot:
//   0 → 20%  : card enters from below (translateY +50px → 0, opacity 0 → 1)
//   20% → 75%: card dwells fully visible
//   75% → 100%: card exits upward (translateY 0 → -50px, opacity 1 → 0)
// Cards are absolutely layered inside a sticky overflow:hidden frame —
// the clip boundary makes it physically impossible for them to bleed outside.

const VizCarousel = ({
  vizList,
  serif,
  accent,
}: {
  vizList: VizData[];
  serif: React.CSSProperties;
  accent: string;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [activeProgress, setActiveProgress] = useState<number[]>(
    vizList.map(() => 0),
  );
  const [frameStyle, setFrameStyle] = useState<React.CSSProperties>({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100vh",
    overflow: "hidden",
  });
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const compute = () => {
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScroll = wrapper.offsetHeight - vh;
      if (totalScroll <= 0) {
        setFrameStyle({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          overflow: "hidden",
        });
        return;
      }

      const scrolled = Math.max(0, Math.min(totalScroll, -rect.top));
      const count = vizList.length;
      const slotSize = totalScroll / count;

      const next = vizList.map((_, i) => {
        const local = scrolled - i * slotSize;
        return Math.max(0, Math.min(1, local / slotSize));
      });
      setActiveProgress(next);

      let mode: "before" | "active" | "after" = "active";
      if (rect.top > 0) {
        mode = "before";
      } else if (rect.bottom <= vh) {
        mode = "after";
      }

      if (mode === "before") {
        setFrameStyle({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          overflow: "hidden",
        });
      } else if (mode === "after") {
        setFrameStyle({
          position: "absolute",
          top: `${totalScroll}px`,
          left: 0,
          right: 0,
          height: "100vh",
          overflow: "hidden",
        });
      } else {
        setFrameStyle({
          position: "fixed",
          top: 0,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: "100vh",
          overflow: "hidden",
        });
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(compute);
    };

    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    compute();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [vizList.length]);

  // Gentle ease-out curve — feels natural, not mechanical
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  // Each card occupies its full slot:
  //   0 → 10%  : enters from below (fast, barely noticeable)
  //   10% → 85%: full dwell — long, comfortable reading time
  //   85% → 100%: exits upward (quick fade)
  const ENTER_END = 0.1;
  const EXIT_START = 0.85;

  const getStyle = (p: number): React.CSSProperties => {
    let opacity = 1;
    let ty = 0;

    if (p < ENTER_END) {
      const t = easeOut(p / ENTER_END);
      opacity = t;
      ty = 28 * (1 - t);
    } else if (p > EXIT_START) {
      const t = easeOut((p - EXIT_START) / (1 - EXIT_START));
      opacity = 1 - t;
      ty = -28 * t;
    }

    return {
      opacity,
      transform: `translateY(${ty}px)`,
      willChange: "opacity, transform",
      pointerEvents: opacity < 0.02 ? "none" : "auto",
    };
  };

  // 80vh per card — enough room to read comfortably without excess whitespace
  const sectionVh = vizList.length * 80 + 10;

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", height: `${sectionVh}vh` }}
    >
      {/* Viewport frame — fixed while active, absolute before/after */}
      <div
        style={{
          ...frameStyle,
        }}
      >
        {vizList.map((viz, i) => {
          const isPie = viz.num === "04";
          const cardStyle = getStyle(activeProgress[i]);

          const textCol = (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                maxWidth: "380px",
                flexShrink: 0,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "'PP Neue Montreal',sans-serif",
                    color: accent,
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                  }}
                >
                  {viz.num} / 05
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "'PP Neue Montreal',sans-serif",
                    padding: "2px 8px",
                    backgroundColor: viz.tagBg,
                    color: viz.tagColor,
                    borderRadius: "3px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {viz.tag}
                </span>
              </div>
              <p
                style={{
                  ...serif,
                  fontSize: "clamp(20px,2.2vw,28px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                  color: "#1a1714",
                  margin: 0,
                }}
              >
                {viz.title}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: "'PP Neue Montreal',sans-serif",
                  lineHeight: 1.7,
                  opacity: 0.52,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{ __html: viz.desc }}
              />
              {/* Progress pips */}
              <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                {vizList.map((_, j) => (
                  <div
                    key={j}
                    style={{
                      width: j === i ? "20px" : "6px",
                      height: "3px",
                      borderRadius: "2px",
                      backgroundColor: j === i ? accent : "rgba(0,0,0,0.15)",
                      transition: "width 0.4s ease, background-color 0.4s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          );

          const imgCol = (
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                lineHeight: 0,
                flex: 1,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
          loading="lazy"
          decoding="async"
                src={viz.img}
                alt={viz.imgAlt}
                style={{
                  width: isPie ? "55%" : "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          );

          return (
            <div
              key={viz.num}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                ...cardStyle,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "clamp(28px,5vw,64px)",
                  width: "100%",
                }}
              >
                {viz.flip ? (
                  <>
                    {imgCol}
                    {textCol}
                  </>
                ) : (
                  <>
                    {textCol}
                    {imgCol}
                  </>
                )}
              </div>
            </div>
          );
        })}

        {/* Scroll hint — fades out once scrolling begins */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            opacity: activeProgress[0] > 0.15 ? 0 : 0.35,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontSize: "9px",
              fontFamily: "'PP Neue Montreal',sans-serif",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "24px",
              backgroundColor: "currentColor",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const RecognizeAppPage = () => {
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
  const r13 = useRef<HTMLDivElement>(null);
  const r14 = useRef<HTMLDivElement>(null);

  const vizSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [
      r0,
      r1,
      r2,
      r3,
      r4,
      r5,
      r6,
      r7,
      r8,
      r9,
      r10,
      r11,
      r12,
      r13,
      r14,
    ];
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

  const accent = "#4B2E83";
  const accentMid = "#B39DDB";
  const accentMuted = "#EDE7F6";

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
          src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_2000,c_limit/Recognize_w98sxb.png"
          alt="Recognize.app — cover"
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
          <span>Recognize.app</span>
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
            Recognize
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
            .app
          </span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-4 border-t border-black/15 pt-6 pb-2">
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Type
            </p>
            <p className="text-sm font-m">
              Data Viz · Brand &amp; Identity · Research
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Role
            </p>
            <p className="text-sm font-m">UX/UI Design + UX Research</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Team
            </p>
            <p className="text-sm font-m">5 People</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Duration
            </p>
            <p className="text-sm font-m">6 Months</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Software
            </p>
            <p className="text-sm font-m">Figma · React · Lambda · OpenAI</p>
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
              Recognize needed an AI-powered data visualization HUD so managers
              could gain real insight into how their teams are doing — without
              digging through raw data.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              The Goal
            </p>
            <p className="text-sm font-m leading-relaxed opacity-70">
              Build a HUD that puts qualitative insight over raw counts, aligns
              with Recognize&#39;s design system, and stays simple enough to use
              in under a minute.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              Services
            </p>
            <ul className="flex flex-col gap-1.5 text-sm font-m opacity-70">
              <li>UX Research</li>
              <li>UI / Data Visualization Design</li>
              <li>Brand Identity</li>
              <li>Prompt Engineering</li>
            </ul>
          </div>
        </div>

        <p
          className="mt-14 text-[clamp(26px,4vw,52px)] leading-[1.1] tracking-[-1px] select-none"
          style={{ ...serif, color: accent }}
        >
          How can we prioritize qualitative over
          quantitative&#8202;—&#8202;and&nbsp;still give managers deep insight?
        </p>
      </div>

      {/* ── What is Recognize? ── */}
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
            <p className="text-sm font-m opacity-80 mt-1">What is Recognize?</p>
          </div>
          <div className="max-w-[680px]">
            <p className="text-sm font-m leading-relaxed opacity-70">
              Recognize is a peer-to-peer employee recognition platform that
              lives inside Teams, Outlook, and Slack. Gamification, badges, and
              point rewards help companies track engagement and align
              recognition with company goals.
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
              Manager portal — two company sizes
            </p>
          </div>
          <p className="text-sm font-m leading-relaxed opacity-60 mb-5 max-w-[720px]">
            Manager-portal-only — two company sizes, one shared need: clarity
            without noise.
          </p>
          <div className="flex flex-col divide-y divide-black/8">
            {/* Persona 1 — Adam Johnson */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-6 py-8">
              <div>
                <p
                  className="text-[9px] font-m uppercase tracking-widest mb-1.5"
                  style={{ color: accent }}
                >
                  Mid-Sized Co.
                </p>
                <p
                  className="text-[clamp(16px,1.8vw,22px)] leading-tight tracking-tight mb-0.5"
                  style={{ ...serif }}
                >
                  Adam Johnson
                </p>
                <p className="text-[10px] font-m opacity-40">
                  Project Manager · Age 25
                </p>
              </div>
              <div>
                <p
                  className="text-[9px] font-m uppercase tracking-widest mb-2 opacity-50"
                  style={{ color: accent }}
                >
                  Goal
                </p>
                <p className="text-[11px] font-m opacity-60 leading-relaxed">
                  Clear, actionable view of how each member is contributing
                </p>
              </div>
              <div>
                <p
                  className="text-[9px] font-m uppercase tracking-widest mb-2 opacity-50"
                  style={{ color: "#b0a89e" }}
                >
                  Frustration
                </p>
                <p className="text-[11px] font-m opacity-60 leading-relaxed">
                  Can&#39;t identify team dynamics or performance issues early
                  without data
                </p>
              </div>
            </div>

            {/* Persona 2 — Karen Jefferson */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-6 py-8">
              <div>
                <p
                  className="text-[9px] font-m uppercase tracking-widest mb-1.5"
                  style={{ color: accent }}
                >
                  Small-Sized Co.
                </p>
                <p
                  className="text-[clamp(16px,1.8vw,22px)] leading-tight tracking-tight mb-0.5"
                  style={{ ...serif }}
                >
                  Karen Jefferson
                </p>
                <p className="text-[10px] font-m opacity-40">
                  Engineering Manager · Age 37
                </p>
              </div>
              <div>
                <p
                  className="text-[9px] font-m uppercase tracking-widest mb-2 opacity-50"
                  style={{ color: accent }}
                >
                  Goal
                </p>
                <p className="text-[11px] font-m opacity-60 leading-relaxed">
                  Concise data HUD that surfaces the <em>why</em> behind her
                  team&#39;s recognitions
                </p>
              </div>
              <div>
                <p
                  className="text-[9px] font-m uppercase tracking-widest mb-2 opacity-50"
                  style={{ color: "#b0a89e" }}
                >
                  Frustration
                </p>
                <p className="text-[11px] font-m opacity-60 leading-relaxed">
                  Leads 15 engineers — no time to track everyone without the
                  right tool
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Research */}
      <div className="px-6 max-w-[1100px] mx-auto mb-8">
        <div ref={r5} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-sm font-m" style={mono}>
              Market Research
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              Mental health &amp; HCM landscape
            </p>
          </div>

          {/* Editorial context prose — replaces stat boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-14">
            <p className="text-[13px] font-m leading-relaxed opacity-65">
              <span
                className="font-semibold opacity-100"
                style={{ color: accent }}
              >
                77%
              </span>{" "}
              of employees cite lack of support as a mental health driver.{" "}
              <span
                className="font-semibold opacity-100"
                style={{ color: accent }}
              >
                25,000+
              </span>{" "}
              companies use HCM software to address it. Recognition isn&#39;t
              decoration — it&#39;s infrastructure.
            </p>
            <p className="text-[13px] font-m leading-relaxed opacity-65">
              We built every visualization around a single composite wellbeing
              score. Surface the <em>why</em> — not just the numbers.
            </p>
          </div>

          {/* Competitive Analysis — staggered rows, no header */}
          <div className="mb-14">
            {[
              {
                name: "Workday",
                logo: "https://logo.clearbit.com/workday.com",
                type: "Enterprise HCM",
                desc: "Recognition is a bolt-on — peer feedback and gift card rewards sit outside Workday&#39;s core value prop.",
                tags: ["Peer feedback", "Gift cards", "Dashboards"],
                strength: "Scale & deep integration",
                weakness: "Recognition is an afterthought",
                color: "#4B2E83",
                lightBg: "#EDE7F6",
              },
              {
                name: "Oracle Celebrate",
                logo: "https://logo.clearbit.com/oracle.com",
                type: "Enterprise HCM",
                desc: "Baked into Oracle ME — recognition ties to core values and engagement scores with AI-assisted summaries.",
                tags: ["Values alignment", "Engagement scores", "AI insights"],
                strength: "AI narrative layer",
                weakness: "Locked to Oracle ecosystem",
                color: "#B45309",
                lightBg: "#FEF3E2",
              },
              {
                name: "Darwinbox",
                logo: "https://logo.clearbit.com/darwinbox.com",
                type: "Mobile-first HCM",
                desc: "Mobile-first with a unified reward catalogue and AI voice assistant (Darwin) for quick recognition sending.",
                tags: ["Points & redemption", "Mobile-first", "AI voice"],
                strength: "Mobile UX & gamification",
                weakness: "Desktop HUD is weak",
                color: "#166534",
                lightBg: "#DCFCE7",
              },
              {
                name: "Nector",
                logo: "https://logo.clearbit.com/nector.io",
                type: "SMB Recognition",
                desc: "Kudos feed, leaderboards, and gamification for small teams — built on social momentum over insight depth.",
                tags: ["Gamification", "Kudos feed", "Leaderboards"],
                strength: "Social engagement loop",
                weakness: "No qualitative insight",
                color: "#9D174D",
                lightBg: "#FCE7F3",
              },
              {
                name: "Emplus",
                logo: "https://logo.clearbit.com/emplus.io",
                type: "Rewards Platform",
                desc: "Employee perks, reward points, and milestone recognition — more benefits platform than insight tool.",
                tags: ["Reward points", "Milestones", "Perks catalog"],
                strength: "Reward catalog breadth",
                weakness: "No manager analytics",
                color: "#1E40AF",
                lightBg: "#DBEAFE",
              },
            ].map((comp, i) => (
              <div
                key={comp.name}
                className="flex items-stretch border-b border-black/8"
                style={{ minHeight: "88px" }}
              >
                {/* Left: coloured index + logo strip */}
                <div
                  className="flex flex-col items-center justify-center gap-2 shrink-0 px-5"
                  style={{
                    backgroundColor: comp.lightBg,
                    width: "88px",
                    borderRight: `2px solid ${comp.color}22`,
                  }}
                >
                  <img
          loading="lazy"
          decoding="async"
                    src={comp.logo}
                    alt={comp.name}
                    className="w-7 h-7 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                  <span
                    className="text-[9px] font-m font-semibold"
                    style={{
                      color: comp.color,
                      fontFamily: "'PP Neue Montreal',sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Middle: name + desc + tags */}
                <div className="flex flex-col justify-center gap-1.5 px-6 py-4 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p
                      className="text-[13px] font-m font-semibold leading-tight"
                      style={{
                        color: "#1a1714",
                        fontFamily: "'PP Neue Montreal',sans-serif",
                      }}
                    >
                      {comp.name}
                    </p>
                    <span
                      className="text-[8px] font-m uppercase tracking-widest px-2 py-0.5"
                      style={{
                        backgroundColor: comp.lightBg,
                        color: comp.color,
                        borderRadius: "3px",
                        fontFamily: "'PP Neue Montreal',sans-serif",
                      }}
                    >
                      {comp.type}
                    </span>
                  </div>
                  <p
                    className="text-[11px] font-m leading-relaxed opacity-50"
                    style={{ fontFamily: "'PP Neue Montreal',sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: comp.desc }}
                  />
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {comp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-m px-1.5 py-0.5 border border-black/10"
                        style={{
                          borderRadius: "2px",
                          color: "#7a6e63",
                          fontFamily: "'PP Neue Montreal',sans-serif",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: strength / weakness */}
                <div
                  className="hidden md:flex flex-col justify-center gap-2 px-6 py-4 shrink-0"
                  style={{
                    width: "220px",
                    borderLeft: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="text-[10px] mt-0.5"
                      style={{ color: comp.color }}
                    >
                      ▲
                    </span>
                    <p
                      className="text-[10px] font-m leading-snug opacity-70"
                      style={{ fontFamily: "'PP Neue Montreal',sans-serif" }}
                    >
                      {comp.strength}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] mt-0.5 opacity-30">▼</span>
                    <p
                      className="text-[10px] font-m leading-snug opacity-45"
                      style={{ fontFamily: "'PP Neue Montreal',sans-serif" }}
                    >
                      {comp.weakness}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Insights — open editorial grid, no box */}
          <div className="pt-8 border-t border-black/10">
            <div className="flex items-baseline justify-between mb-8">
              <p
                className="text-[clamp(18px,2vw,24px)] font-m font-semibold tracking-tight leading-tight"
                style={{
                  fontFamily: "'PP Neue Montreal',sans-serif",
                  color: "#1a1714",
                }}
              >
                Key Insights
              </p>
              <p className="text-[10px] font-m opacity-35 uppercase tracking-widest">
                What the landscape told us
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
              {[
                {
                  num: "01",
                  title: "Qualitative over quantitative",
                  body: "Leaderboards and tallies miss the meaning behind a recognition. That gap is Recognize&#39;s opening.",
                },
                {
                  num: "02",
                  title: "Cross-team visibility missing",
                  body: "No competitor shows who outside your team values your work. Managers told us this matters most.",
                },
                {
                  num: "03",
                  title: "AI unused for narrative",
                  body: "Competitors score with AI — nobody uses it to tell a plain-language story a manager can act on.",
                },
                {
                  num: "04",
                  title: "Desktop HUD is the right form",
                  body: "Monthly reviewers need calm, dense information — not a mobile feed. Nobody owns this.",
                },
                {
                  num: "05",
                  title: "Fewer, better charts",
                  body: "Users asked for fewer visualizations, not more. The gap is clarity, not coverage.",
                },
                {
                  num: "06",
                  title: "Integration is table stakes",
                  body: "Slack, Teams, Outlook are expected. Recognize already has them — a moat against new entrants.",
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
                  <p className="text-[11px] font-m leading-relaxed opacity-45 pl-6">
                    {ins.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ethical Considerations */}
      <div className="px-6 max-w-[1100px] mx-auto mb-8">
        <div ref={r6} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-sm font-m" style={mono}>
              Ethical Considerations
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              Three principles protecting employees
            </p>
          </div>
          <div className="flex flex-col divide-y divide-black/8">
            {[
              { num: "01", title: "Data Cannot be Weaponized" },
              { num: "02", title: "Highlight Every Employee" },
              { num: "03", title: "Psychological Safety First" },
            ].map((row) => (
              <div
                key={row.num}
                className="grid grid-cols-[56px_1fr] gap-6 py-6 items-center"
              >
                <span
                  className="text-[9px] font-m opacity-25 pt-0.5"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {row.num}
                </span>
                <p
                  className="text-[clamp(16px,1.8vw,22px)] leading-snug opacity-85 tracking-tight"
                  style={serif}
                >
                  {row.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Section 2 — Design                        */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r7}
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
              Design
            </h2>
            <span
              className="hidden md:inline text-[clamp(14px,2vw,22px)] tracking-[-0.5px] opacity-30"
              style={serif}
            >
              — System &amp; visual language
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      {/* Font Fixing */}
      <div className="px-6 max-w-[1100px] mx-auto mb-8">
        <div ref={r8} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-sm font-m" style={mono}>
              Font Fixing
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              Brand identity contribution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10">
            <div>
              <p className="text-sm font-m leading-relaxed opacity-70 mb-6">
                No primary typeface existed beyond the logo&#39;s{" "}
                <span style={{ fontFamily: "'Lato', sans-serif" }}>Lato</span>.
                I proposed{" "}
                <span style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Outfit
                </span>{" "}
                — type-matched for visual harmony. Recognize{" "}
                <span className="opacity-95 font-semibold">
                  shipped it straight to their website.
                </span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="border border-black/10 p-5"
                  style={{ borderRadius: "4px" }}
                >
                  <p className="text-[9px] font-m uppercase tracking-widest mb-4 opacity-40">
                    Before
                  </p>
                  <p
                    className="text-[clamp(28px,4vw,42px)] leading-tight tracking-tight opacity-50"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Lato
                  </p>
                  <p className="text-[11px] font-m opacity-40 mt-2 leading-relaxed">
                    Logo only — no primary typeface defined for brand text
                  </p>
                </div>
                <div
                  className="border p-5"
                  style={{ borderRadius: "4px", borderColor: accent }}
                >
                  <p
                    className="text-[9px] font-m uppercase tracking-widest mb-4"
                    style={{ color: accent }}
                  >
                    After
                  </p>
                  <div className="flex flex-col gap-2">
                    <div>
                      <p
                        className="text-[clamp(22px,3vw,32px)] leading-tight tracking-tight"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        Lato
                      </p>
                      <p className="text-[9px] font-m opacity-35 mt-0.5 uppercase tracking-widest">
                        Logo only
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[clamp(22px,3vw,32px)] leading-tight tracking-tight font-semibold"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Outfit
                      </p>
                      <p className="text-[9px] font-m opacity-35 mt-0.5 uppercase tracking-widest">
                        All brand text
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] font-m opacity-40 mt-3 leading-relaxed">
                    Type-matched to Lato — consistent metrics, clear role
                    separation
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div
                className="border border-black/8 p-5 flex-1 flex flex-col justify-between"
                style={{ borderRadius: "4px", backgroundColor: accentMuted }}
              >
                <p
                  className="text-[10px] font-m uppercase tracking-widest mb-3"
                  style={{ color: accent }}
                >
                  Impact
                </p>
                <p
                  className="text-[clamp(18px,2.2vw,24px)] leading-snug tracking-tight opacity-80"
                  style={serif}
                >
                  Shipped to production — live on the Recognize website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Feedback */}
      <div className="px-6 max-w-[1100px] mx-auto mb-8">
        <div ref={r9} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-sm font-m" style={mono}>
              User Feedback
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              10 managers surveyed — high-tech to small business
            </p>
          </div>
          <p className="text-sm font-m leading-relaxed opacity-60 mb-5 max-w-[680px]">
            Managers across high-tech and small business — testing whether the
            HUD delivers real, actionable insight.
          </p>

          {/* Stat inline into header */}
          <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-black/8">
            <span
              className="text-[clamp(42px,6vw,64px)] leading-none tracking-tight"
              style={{ ...serif, color: accent }}
            >
              85%
            </span>
            <p className="text-[12px] font-m opacity-50 leading-relaxed max-w-[320px]">
              of managers surveyed said they would use this in their monthly
              reports
            </p>
          </div>

          {/* Feedback — open editorial rows */}
          <div className="flex flex-col divide-y divide-black/8">
            {[
              {
                label: "Sentiment Chart",
                feedback:
                  "No unit values — I didn&#39;t understand what it was at first. I wanted to know how many recognitions are in each category.",
              },
              {
                label: "Summary Length",
                feedback: "AI summarizations are too long.",
              },
              {
                label: "Department Breakdown",
                feedback:
                  "I&#39;d love to see which teams recognitions are coming from — not just peer and manager.",
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

      {/* Data Visualizations — sticky scroll reveal */}
      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div ref={r10} className="border-t border-black/10 pt-8 mb-4">
          <div className="flex items-baseline justify-between mb-2">
            <p className="text-sm font-m" style={mono}>
              Data Visualizations
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              Managers surveyed — high-tech to small business
            </p>
          </div>
          <p className="text-sm font-m leading-relaxed opacity-60 max-w-[620px]">
            Five visualizations, refined from feedback, handed off to
            engineering.
          </p>
        </div>
      </div>

      {/* Viz carousel — one card per full viewport, no overlap */}
      <div className="px-6 max-w-[1100px] mx-auto">
        <VizCarousel
          serif={serif}
          accent={accent}
          vizList={[
            {
              num: "01",
              tag: "AI-Powered",
              tagBg: accentMuted,
              tagColor: accent,
              title: "AI Recognition Summary",
              desc: "A concise AI-generated summary of recognitions for a selected period. Core themes surface instantly — no manual reading.",
              img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/q_auto,f_auto,w_1200/Ai_Summarizations_orwkp9.png",
              imgAlt: "AI Recognition Summary",
              flip: false,
            },
            {
              num: "02",
              tag: "AI-Powered",
              tagBg: accentMuted,
              tagColor: accent,
              title: "Highly Valued Recognition",
              desc: "The single most impactful recognition in the period — surfaced by prompt engineering that finds genuine high-value contribution.",
              img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/q_auto,f_auto,w_1200/Highly_valued_u5r8b9.webp",
              imgAlt: "Highly Valued Recognition",
              flip: true,
            },
            {
              num: "03",
              tag: "AI-Powered",
              tagBg: accentMuted,
              tagColor: accent,
              title: "Recognition Sentiment Analysis",
              desc: "AI-categorized emotional tone — supportive, grateful, celebratory, motivational. Quality of recognition, not just volume.",
              img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/q_auto,f_auto,w_1200/Bar_Chart_1_bsvmrm.png",
              imgAlt: "Recognition Sentiment Analysis",
              flip: false,
            },
            {
              num: "04",
              tag: "Standard",
              tagBg: "#f0ece6",
              tagColor: "#7a6e63",
              title: "Recognitions Received",
              desc: "Recognition origin by department — see whether appreciation stays within the team or spans cross-functional partners.",
              img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/q_auto,f_auto,w_1200/New_pie_chart_bdx0bc.webp",
              imgAlt: "Recognitions Received pie chart",
              flip: true,
            },
            {
              num: "05",
              tag: "Standard",
              tagBg: "#f0ece6",
              tagColor: "#7a6e63",
              title: "Recognitions Over Time",
              desc: "Line chart per award type — Collaboration, Innovation, Leadership. Reveals patterns, spikes, and drops across any time window.",
              img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/q_auto,f_auto,w_1200/Bar_chart_engegk.webp",
              imgAlt: "Recognitions Over Time",
              flip: false,
            },
          ]}
        />
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Section 3 — Finalized Design               */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r11}
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
              Finalized Design
            </h2>
            <span
              className="hidden md:inline text-[clamp(14px,2vw,22px)] tracking-[-0.5px] opacity-30"
              style={serif}
            >
              — Delivered to engineering
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-10">
        <div className="border-t border-black/10 pt-6 mb-4">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-m" style={mono}>
              Final Deliverable
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              Handed off to Recognize&#39;s engineering team
            </p>
          </div>
        </div>
        <img
          loading="lazy"
          decoding="async"
          src="https://res.cloudinary.com/dkdwqtlzz/image/upload/q_auto,f_auto,w_2200/aoisdhosa_riuxtv.png"
          alt="Recognize.app — finalized data visualization HUD"
          className="w-full object-contain"
          style={{ borderRadius: "8px", backgroundColor: accentMuted }}
        />
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Achievements                               */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-10">
        <div ref={r12} className="border-t border-black/15 pt-10">
          <p
            className="text-[9px] font-m uppercase tracking-widest mb-8"
            style={{ color: accent, letterSpacing: "0.18em" }}
          >
            A C H I E V E M E N T S
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sponsor Appraisal */}
            <div
              className="border border-black/10 p-8 flex flex-col gap-6"
              style={{ borderRadius: "4px" }}
            >
              <p className="text-[10px] font-m uppercase tracking-widest opacity-40">
                Sponsor&#39;s Appraisal
              </p>
              <div
                className="border-l-2 pl-5 py-1"
                style={{ borderColor: accentMid }}
              >
                <p className="text-[12px] font-m leading-relaxed opacity-70 mb-4">
                  &#8220;Kai served as our lead UI/UX Designer on the Recognize
                  capstone at UW — responsible for all user research that shaped
                  our product direction and regularly ideating on features based
                  on CEO feedback.
                </p>
                <p className="text-[12px] font-m leading-relaxed opacity-70">
                  My team was thrilled with the final designs. It wouldn&#39;t
                  have been possible without Kai — his initiative and attitude
                  were a constant asset. I&#39;m confident he&#39;ll be an asset
                  wherever he goes next.&#8221;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-black/8 mt-auto">
                <img
          loading="lazy"
          decoding="async"
                  src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_200,c_limit/image-10de4f4b-1437-44b5-b59e-26482d4dcf3a_yuiw67.webp"
                  alt="Zach Grande"
                  className="w-8 h-8 rounded-full object-cover object-center shrink-0"
                  style={{ border: `1.5px solid ${accentMid}` }}
                />
                <div>
                  <p className="text-[12px] font-m opacity-80">Zach Grande</p>
                  <p className="text-[10px] font-m opacity-40">
                    Software Engineer II · Recognize
                  </p>
                </div>
              </div>
            </div>

            {/* Read our Article */}
            <a
              href="https://ischool.uw.edu/news/2025/05/students-develop-tool-track-kudos-among-co-workers"
              target="_blank"
              rel="noreferrer"
              className="border border-black/10 p-8 flex flex-col justify-between gap-6 no-underline transition-opacity hover:opacity-80"
              style={{
                borderRadius: "4px",
                backgroundColor: accentMuted,
                textDecoration: "none",
              }}
            >
              <p
                className="text-[10px] font-m uppercase tracking-widest"
                style={{ color: accent }}
              >
                Read our Article!
              </p>
              <p
                className="text-[clamp(24px,3vw,38px)] leading-snug tracking-tight opacity-80"
                style={{ ...serif, color: "#1a1714" }}
              >
                Students develop tool to track kudos among co-workers
              </p>
              <div className="flex items-end justify-between gap-4">
                <p className="text-[11px] font-m opacity-50 leading-relaxed max-w-[260px]">
                  Published by the UW iSchool — documenting our full research
                  and design process.
                </p>
                <span
                  className="text-[clamp(32px,4vw,48px)] leading-none shrink-0"
                  style={{ ...serif, color: accent }}
                >
                  ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Reflection                                 */}
      {/* ══════════════════════════════════════════ */}
      <div className="px-6 max-w-[1100px] mx-auto mb-0">
        <div
          ref={r13}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 border-t border-black/15 pt-8"
        >
          <div>
            <p
              className="text-[9px] font-m uppercase tracking-widest mb-1"
              style={{ color: accent, letterSpacing: "0.18em" }}
            >
              R E F L E C T I O N
            </p>
            <p className="text-sm font-m opacity-80 mt-1">
              Working With Others
            </p>
          </div>
          <div className="max-w-[620px] pb-20">
            <p
              className="text-[clamp(22px,2.5vw,32px)] leading-[1.2] tracking-[-0.5px] mb-6 opacity-80"
              style={serif}
            >
              A real-life look at cross-functional product work.
            </p>
            <p className="text-sm font-m leading-relaxed opacity-60 mb-4">
              I worked directly with Recognize&#39;s CFO Alex Grande and CTO
              Peter Phillips — aligning designs with their expectations while
              keeping scope achievable for my dev team. Heavy documentation made
              handoff frictionless.
            </p>
            <p className="text-sm font-m leading-relaxed opacity-60">
              I also carried the project manager role — presenting at events and
              speaking for the group. Thank you to Zach Grande (Sponsor) and
              Jeremy Zaretzky (Professor) for making it possible.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* Next project nav + footer                  */}
      {/* ══════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#1a1714" }}>
        <div className="px-6 max-w-[1100px] mx-auto">
          <div
            ref={r14}
            className="flex flex-col md:flex-row items-stretch gap-4 py-10"
          >
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
              to="/burkemuseum"
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
                  UX · Museum Redesign
                </p>
              </div>
              <span
                className="text-[clamp(52px,8vw,110px)] tracking-[-3px] leading-none"
                style={{ ...serif, color: "#fdfaf5" }}
              >
                Burke Museum ↗
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

export default RecognizeAppPage;
