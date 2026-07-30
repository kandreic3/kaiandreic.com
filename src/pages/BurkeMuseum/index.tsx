import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../sections/Navbar";
import { FooterLinks } from "../../sections/Footer/components/FooterLinks";
import { FooterBrand } from "../../sections/Footer/components/FooterBrand";
import { FooterBottom } from "../../sections/Footer/components/FooterBottom";

const BurkeMuseumPage = () => {
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

  useEffect(() => {
    const refs = [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12];
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

  return (
    <div
      className="text-black font-m box-border"
      style={{ backgroundColor: "#fdfaf5", minHeight: "100vh" }}
    >
      <Navbar />

      <div
        className="w-full overflow-hidden"
        style={{ paddingTop: "70px", height: "clamp(280px, 45vw, 560px)" }}
      >
        <img
          src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto:best,dpr_3.0,w_3800,c_limit,e_sharpen:120/Burke_Museum_pzgb10.png"
          alt="Burke Museum — laptop and phone mockup"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="px-6 max-w-[1100px] mx-auto pt-12 pb-6" ref={r0}>
        <div className="flex items-center gap-2 text-xs font-m opacity-40 mb-6">
          <Link to="/" className="hover:opacity-100 transition-opacity">
            Index
          </Link>
          <span>/</span>
          <span>Burke Museum</span>
        </div>
        <h1
          className="text-[clamp(52px,9vw,120px)] leading-[0.92] tracking-[-3px] mb-8 flex flex-wrap items-baseline gap-x-[0.25em]"
          style={{
            fontFamily:
              "'PP Editorial Old', 'PPEditorialOld', 'PP Editorial Old Ultralight', Georgia, serif",
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
            Burke
          </span>
          <span
            style={{
              color: "#B02030",
              fontFamily:
                "'PP Editorial Old','PPEditorialOld','PP Editorial Old Ultralight',Georgia,serif",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            Museum
          </span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 border-t border-black/15 pt-6 pb-2">
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Type
            </p>
            <p className="text-sm font-m">UX/UI · Brand · Design Systems</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Year
            </p>
            <p className="text-sm font-m">2025</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Role
            </p>
            <p className="text-sm font-m">UX Designer + Researcher</p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Team / Duration
            </p>
            <p className="text-sm font-m">4 people · 8 weeks</p>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-20">
        <div
          ref={r1}
          className="grid grid-cols-1 md:grid-cols-[1fr_1fr_260px] gap-10 border-t border-black/15 pt-10"
        >
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              Context
            </p>
            <p className="text-sm font-m leading-relaxed opacity-70">
              The Burke Museum is a Native American focused museum at the
              University of Washington. Their website has many flaws — my team
              was tasked to create a design system for a children&#39;s catered
              redesign of the entire website, with a focus on kids aged
              8&#8211;12.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              Objective
            </p>
            <p className="text-sm font-m leading-relaxed opacity-70">
              Redesign the Burke Museum website around the exhibits section,
              encouraging children to visit. We centered the experience on
              discovery, interactivity, and a sticker book feature.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-3">
              Services
            </p>
            <ul className="flex flex-col gap-1.5 text-sm font-m opacity-70">
              <li>UX Research</li>
              <li>UI Design</li>
              <li>Design Systems</li>
            </ul>
          </div>
        </div>

        <p
          className="mt-14 text-[clamp(26px,4vw,52px)] leading-[1.1] tracking-[-1px] select-none"
          style={{ ...serif, color: "#B02030" }}
        >
          Designing for children — every element earns its place.
        </p>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r2}
          className="flex items-end justify-between border-t border-black/15 pt-6 mb-12"
        >
          <div className="flex items-baseline gap-5">
            <span
              className="text-[clamp(64px,10vw,130px)] leading-none tracking-[-4px] select-none"
              style={{ ...serif, color: "#E8BCC0" }}
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
              — Understanding the audience
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-16">
        <div ref={r3} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-sm font-m" style={mono}>
              Design Principles
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              Three pillars guiding every decision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "Engaging",
                subtitle: "For Target Age",
                tags: ["Colorful", "Gamified", "Interactive", "Image-heavy"],
              },
              {
                num: "02",
                title: "Distinctive",
                subtitle: "& Promotional",
                tags: [
                  "Strong icons",
                  "Bouncy feel",
                  "Sticker book",
                  "Exhibits first",
                ],
              },
              {
                num: "03",
                title: "Accessible",
                subtitle: "Visually",
                tags: [
                  "AAA colors",
                  "Logical flow",
                  "Sans-serif",
                  "Simple language",
                ],
              },
            ].map((card) => (
              <div
                key={card.num}
                className="border border-black/10 p-7 flex flex-col gap-4"
                style={{ borderRadius: "4px" }}
              >
                <span
                  className="text-[11px] font-m uppercase tracking-widest"
                  style={{ color: "#C03040" }}
                >
                  {card.num}
                </span>
                <div>
                  <p
                    className="text-[clamp(28px,3vw,38px)] leading-none tracking-tight"
                    style={{ ...serif, color: "#1a1714" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[clamp(28px,3vw,38px)] leading-none tracking-tight"
                    style={{ ...serif, color: "#8a7e73" }}
                  >
                    {card.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-black/8">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-m border px-2.5 py-1"
                      style={{
                        borderRadius: "3px",
                        color: "#595144",
                        borderColor: "#c4b9ac",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-16">
        <div ref={r4} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-sm font-m" style={mono}>
              Market Research
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              Kids&#39; sites that get it right
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Met Kids",
                nameEl: (
                  <p className="text-[clamp(22px,2.5vw,30px)] leading-tight tracking-tight opacity-80 font-m">
                    Met <span style={{ color: "#eb0021" }}>K</span>
                    <span style={{ color: "#0099a9" }}>i</span>
                    <span style={{ color: "#d28805" }}>d</span>
                    <span style={{ color: "#007951" }}>s</span>
                  </p>
                ),
                tags: [
                  "Page-color system",
                  "Super interactive",
                  "Short text blocks",
                ],
              },
              {
                name: "PBS Kids",
                nameEl: (
                  <p className="text-[clamp(22px,2.5vw,30px)] leading-tight tracking-tight font-m">
                    <span style={{ color: "#99cf16" }}>PBS</span>{" "}
                    <span className="opacity-80">Kids</span>
                  </p>
                ),
                tags: [
                  "No nav bar",
                  "Full illustrations",
                  "Colorful + playful",
                ],
              },
              {
                name: "Nat Geo Kids",
                nameEl: (
                  <p className="text-[clamp(22px,2.5vw,30px)] leading-tight tracking-tight font-m">
                    <span className="opacity-80">Nat Geo</span>{" "}
                    <span style={{ color: "#ffd600" }}>Kids</span>
                  </p>
                ),
                tags: ["Easy vocabulary", "Heavy imagery", "Games + videos"],
              },
            ].map((item) => (
              <div
                key={item.name}
                className="border border-black/10 p-7 flex flex-col gap-5"
                style={{ borderRadius: "4px" }}
              >
                {item.nameEl}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-black/8">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-m border px-2.5 py-1"
                      style={{
                        borderRadius: "3px",
                        color: "#595144",
                        borderColor: "#c4b9ac",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-12">
        <div ref={r5} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-sm font-m" style={mono}>
              User Interviews
            </p>
            <p className="text-xs font-m" style={{ color: "#7a6e63" }}>
              8 participants — children &amp; parents
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-2">
              {[
                { stat: "8", label: "Participants" },
                { stat: "5", label: "Parents" },
                { stat: "3", label: "Children 8–12" },
                { stat: "20m", label: "Avg session" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-black/10 px-3 py-2.5 flex items-baseline gap-2"
                  style={{ borderRadius: "4px" }}
                >
                  <p
                    className="text-lg leading-none tracking-tight"
                    style={{ ...serif, color: "#FF3749" }}
                  >
                    {item.stat}
                  </p>
                  <p
                    className="text-[11px] font-m"
                    style={{ color: "#595144" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                {
                  quote: "She wants pictures, not text.",
                  speaker: "Parent, 38",
                },
                {
                  quote: "The website is confusing — too many buttons.",
                  speaker: "Child, 10",
                },
                {
                  quote: "Has to feel like a game, not homework.",
                  speaker: "Parent, 41",
                },
                {
                  quote: "Like Pok&#233;mon but for learning.",
                  speaker: "Child, 9",
                },
              ].map((q) => (
                <div
                  key={q.speaker}
                  className="border-l-2 pl-3 py-1"
                  style={{ borderColor: "#FF3749" }}
                >
                  <p
                    className="text-[11px] font-m leading-snug mb-1"
                    style={{ color: "#1a1714" }}
                  >
                    &#8220;
                    <span dangerouslySetInnerHTML={{ __html: q.quote }} />
                    &#8221;
                  </p>
                  <p
                    className="text-[10px] font-m"
                    style={{ color: "#7a6e63" }}
                  >
                    — {q.speaker}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {
                  heading: "Visual-first",
                  body: "Dense text dismissed instantly.",
                },
                {
                  heading: "Nav confusion",
                  body: "Kids got lost without landmarks.",
                },
                {
                  heading: "Gamification",
                  body: "Sticker book resonated at once.",
                },
                { heading: "Parent gate", body: "Parents screen for clarity." },
                {
                  heading: "Mobile-first",
                  body: "6 of 8 browse on tablet/phone.",
                },
                {
                  heading: "Color = trust",
                  body: "Bright palettes feel credible.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="p-2.5 border border-black/10"
                  style={{ borderRadius: "4px" }}
                >
                  <p
                    className="text-[11px] mb-0.5"
                    style={{ ...serif, color: "#1a1714" }}
                  >
                    {item.heading}
                  </p>
                  <p
                    className="text-[10px] font-m leading-relaxed"
                    style={{ color: "#595144" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-16">
        <div ref={r6} className="border-t border-black/10 pt-8">
          <div className="flex items-baseline justify-between mb-5">
            <p className="text-sm font-m" style={mono}>
              User Journey
            </p>
            <p
              className="text-[10px] font-m uppercase tracking-widest"
              style={{ color: "#595144" }}
            >
              Maya, age 10 · Curious explorer
            </p>
          </div>

          <div
            className="hidden md:grid border-b border-black/10 pb-2 mb-0"
            style={{ gridTemplateColumns: "76px 1fr 1fr 1fr" }}
          >
            {["Stage", "Action", "Feeling / Friction", "Opportunity"].map(
              (h) => (
                <p
                  key={h}
                  className="text-[10px] font-m uppercase tracking-widest"
                  style={{ color: "#7a6e63" }}
                >
                  {h}
                </p>
              ),
            )}
          </div>

          {[
            {
              stage: "Awareness",
              action: "Parent opens site on family iPad.",
              feeling: "Uncertain",
              painPoint: "Cluttered — unclear where to click.",
              opportunity: "Image hero + single CTA.",
            },
            {
              stage: "Discovery",
              action: "Maya taps Dinosaur exhibit.",
              feeling: "Excited",
              painPoint: "Small text breaks engagement.",
              opportunity: "Big visuals + sticker button.",
            },
            {
              stage: "Exploration",
              action: "Collects stickers across pages.",
              feeling: "Delighted",
              painPoint: "No progress indicator.",
              opportunity: "Visible sticker counter.",
            },
            {
              stage: "Planning",
              action: "Parent checks hours & tickets.",
              feeling: "Anticipating",
              painPoint: "Practical info buried deep.",
              opportunity: "&#39;Plan Your Visit&#39; anchor.",
            },
            {
              stage: "Visit",
              action: "Maya browses exhibits on phone.",
              feeling: "Engaged",
              painPoint: "Nav targets too small to tap.",
              opportunity: "Bottom nav + large targets.",
            },
            {
              stage: "Return",
              action: "Reviews &amp; shares sticker book.",
              feeling: "Proud",
              painPoint: "No share function exists.",
              opportunity: "Screenshot-ready sticker view.",
            },
          ].map((step, i) => (
            <div
              key={step.stage}
              className="grid grid-cols-1 md:grid-cols-[76px_1fr_1fr_1fr] border-b border-black/[0.06] py-3 gap-2 md:gap-0"
              style={{ alignItems: "start" }}
            >
              <div className="flex md:flex-col md:items-start items-center gap-2 md:gap-0.5 md:pr-3">
                <p
                  className="text-[10px] font-m tabular-nums"
                  style={{ color: "#C03040" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="text-[11px] font-m uppercase tracking-widest"
                  style={{ color: "#1a1714", letterSpacing: "0.07em" }}
                >
                  {step.stage}
                </p>
              </div>
              <div className="md:border-l md:border-black/[0.06] md:pl-4 md:pr-4">
                <p
                  className="text-[11px] font-m leading-snug"
                  style={{ color: "#1a1714" }}
                >
                  {step.action}
                </p>
              </div>
              <div className="md:border-l md:border-black/[0.06] md:pl-4 md:pr-4 flex gap-3">
                <div className="flex-1">
                  <p
                    className="text-[9px] font-m uppercase tracking-widest mb-0.5"
                    style={{ color: "#b0a89e" }}
                  >
                    Feel
                  </p>
                  <p
                    className="text-[11px] font-m"
                    style={{ color: "#595144" }}
                  >
                    {step.feeling}
                  </p>
                </div>
                <div className="flex-1">
                  <p
                    className="text-[9px] font-m uppercase tracking-widest mb-0.5"
                    style={{ color: "#b0a89e" }}
                  >
                    Friction
                  </p>
                  <p
                    className="text-[11px] font-m leading-snug"
                    style={{ color: "#595144" }}
                  >
                    {step.painPoint}
                  </p>
                </div>
              </div>
              <div className="md:border-l md:border-black/[0.06] md:pl-4">
                <p
                  className="text-[9px] font-m uppercase tracking-widest mb-0.5"
                  style={{ color: "#C03040" }}
                >
                  Opp.
                </p>
                <p
                  className="text-[11px] font-m leading-snug"
                  style={{ color: "#1a1714" }}
                  dangerouslySetInnerHTML={{ __html: step.opportunity }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r7}
          className="flex items-end justify-between border-t border-black/15 pt-6 mb-12"
        >
          <div className="flex items-baseline gap-5">
            <span
              className="text-[clamp(64px,10vw,130px)] leading-none tracking-[-4px] select-none"
              style={{ ...serif, color: "#E8BCC0" }}
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

      <div className="px-6 max-w-[1100px] mx-auto mb-16">
        <div
          ref={r8}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 border-t border-black/10 pt-8"
        >
          <div>
            <p className="text-sm font-m" style={mono}>
              Key Points
            </p>
            <p className="text-xs font-m opacity-40 mt-1 leading-relaxed">
              Six north stars that shaped every screen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Clean navigation",
                points: [
                  "One interaction deep",
                  "Color-coded pages",
                  "No nav bar",
                ],
              },
              {
                num: "2",
                title: "Simple layouts",
                points: [
                  "Only what&#39;s necessary",
                  "No distractions",
                  "Consistent across pages",
                ],
              },
              {
                num: "3",
                title: "Mobile + desktop parity",
                points: [
                  "No mouse-only functions",
                  "Keep text minimal",
                  "Easy to implement",
                ],
              },
              {
                num: "4",
                title: "Sticker book feature",
                points: [
                  "Showcases exhibits",
                  "Gives homepage purpose",
                  "Fun for kids",
                ],
              },
              {
                num: "5",
                title: "Fun without chaos",
                points: [
                  "Readable fonts",
                  "Simple imagery",
                  "Bright but balanced colors",
                ],
              },
              {
                num: "6",
                title: "Photos with inner nav",
                points: [
                  "Reduces clutter",
                  "Limits page scrolling",
                  "Keeps focus local",
                ],
              },
            ].map((item) => (
              <div key={item.num} className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span
                    className="text-[26px] leading-none shrink-0"
                    style={{ ...serif, color: "#C03040" }}
                  >
                    {item.num}
                  </span>
                  <p
                    className="text-sm font-m leading-snug pt-0.5 opacity-75"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
                <ul className="flex flex-col gap-1 text-xs font-m opacity-40">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      dangerouslySetInnerHTML={{ __html: `— ${p}` }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-16">
        <div ref={r9} className="border-t border-black/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 mb-14">
            <div>
              <p className="text-sm font-m" style={mono}>
                Design System
              </p>
              <p className="text-xs font-m opacity-40 mt-1 leading-relaxed">
                Color, type, spacing, and components.
              </p>
            </div>
            <div />
          </div>

          <div className="mb-14">
            <p className="text-[10px] font-m opacity-30 uppercase tracking-widest mb-6">
              Colors
            </p>
            <p className="text-xs font-m opacity-40 mb-3">Primary</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { hex: "#FF3749", label: "Primary Red" },
                { hex: "#E03040", label: "Red Dark" },
                { hex: "#992C36", label: "Red Deeper" },
                { hex: "#FFD86E", label: "Yellow" },
                { hex: "#000000", label: "Black" },
                { hex: "#FFFFFF", label: "White", border: true },
                { hex: "#F2F2F2", label: "Light Gray", border: true },
              ].map((c) => (
                <div
                  key={c.hex}
                  className="flex flex-col gap-1.5"
                  style={{ width: "clamp(70px,9vw,90px)" }}
                >
                  <div
                    style={{
                      backgroundColor: c.hex,
                      border: c.border
                        ? "1px solid rgba(0,0,0,0.1)"
                        : undefined,
                      borderRadius: "6px",
                      height: "60px",
                    }}
                  />
                  <p className="text-[10px] font-m opacity-60 leading-tight">
                    {c.label}
                  </p>
                  <p className="text-[10px] font-m opacity-30 tracking-wider">
                    {c.hex}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs font-m opacity-40 mb-3">Page Palettes</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: "Dino & History",
                  colors: [
                    { hex: "#61D5FF", label: "Sky Blue" },
                    { hex: "#005776", label: "Deep Teal" },
                  ],
                },
                {
                  name: "Arts & Culture",
                  colors: [
                    { hex: "#FF9E9E", label: "Soft Pink" },
                    { hex: "#B30000", label: "Deep Red" },
                  ],
                },
                {
                  name: "Life Science",
                  colors: [
                    { hex: "#E3C1FF", label: "Lavender" },
                    { hex: "#A537FF", label: "Violet" },
                  ],
                },
              ].map((palette) => (
                <div
                  key={palette.name}
                  className="border border-black/8 p-4"
                  style={{ borderRadius: "4px" }}
                >
                  <p className="text-[10px] font-m opacity-35 uppercase tracking-widest mb-3">
                    {palette.name}
                  </p>
                  <div className="flex gap-2 mb-3">
                    {palette.colors.map((c) => (
                      <div
                        key={c.hex}
                        className="flex-1 h-10 rounded"
                        style={{ backgroundColor: c.hex, borderRadius: "4px" }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {palette.colors.map((c) => (
                      <div key={c.hex} className="flex-1">
                        <p className="text-[10px] font-m opacity-50 leading-tight">
                          {c.label}
                        </p>
                        <p className="text-[10px] font-m opacity-25 tracking-wide">
                          {c.hex}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <p className="text-[10px] font-m opacity-30 uppercase tracking-widest mb-6">
              Typography
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className="border border-black/8 p-5 flex flex-col gap-2"
                style={{ borderRadius: "4px" }}
              >
                <p className="text-[10px] font-m opacity-30 uppercase tracking-widest">
                  Display / Headings
                </p>
                <p
                  className="leading-none my-1"
                  style={{
                    fontFamily: "'Baloo Bhai 2', cursive",
                    fontWeight: 700,
                    fontSize: "clamp(40px,6vw,56px)",
                  }}
                >
                  Aa
                </p>
                <p
                  className="text-sm opacity-80"
                  style={{
                    fontFamily: "'Baloo Bhai 2', cursive",
                    fontWeight: 700,
                  }}
                >
                  Baloo Bhai 2
                </p>
                <p className="text-[11px] font-m opacity-35 leading-relaxed">
                  Fun, rounded — hero headings and card titles.
                </p>
              </div>
              <div
                className="border border-black/8 p-5 flex flex-col gap-2"
                style={{ borderRadius: "4px" }}
              >
                <p className="text-[10px] font-m opacity-30 uppercase tracking-widest">
                  Body / UI
                </p>
                <p
                  className="leading-none my-1"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(40px,6vw,56px)",
                  }}
                >
                  Aa
                </p>
                <p
                  className="text-sm opacity-80"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  DM Sans
                </p>
                <p className="text-[11px] font-m opacity-35 leading-relaxed">
                  Clean, legible — body copy, labels, and buttons.
                </p>
              </div>
              <div
                className="border border-black/8 p-5 flex flex-col gap-2"
                style={{ borderRadius: "4px" }}
              >
                <p className="text-[10px] font-m opacity-30 uppercase tracking-widest">
                  Accent / Logo
                </p>
                <p
                  className="leading-none my-1"
                  style={{
                    fontFamily: "'Beach Day'",
                    fontWeight: 400,
                    fontSize: "clamp(40px,6vw,56px)",
                  }}
                >
                  Aa
                </p>
                <p
                  className="text-sm opacity-80"
                  style={{ fontFamily: "'Beach Day'" }}
                >
                  Beach Day
                </p>
                <p className="text-[11px] font-m opacity-35 leading-relaxed">
                  Playful script — logo and key brand moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-4">
        <div
          ref={r10}
          className="flex items-end justify-between border-t border-black/15 pt-6 mb-12"
        >
          <div className="flex items-baseline gap-5">
            <span
              className="text-[clamp(64px,10vw,130px)] leading-none tracking-[-4px] select-none"
              style={{ ...serif, color: "#E8BCC0" }}
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
              — Desktop &amp; mobile
            </span>
          </div>
          <span className="text-2xl opacity-20">↘</span>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-20">
        {/* ── Desktop stage — dino world ── */}
        <div className="mb-6">
          <div className="flex items-baseline justify-between mb-5">
            <p
              className="text-[10px] font-m uppercase tracking-widest"
              style={{ color: "#7a6e63", letterSpacing: "0.18em" }}
            >
              Big Screen
            </p>
            <p className="text-[10px] font-m opacity-20 tracking-wide">
              Full page layouts
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, #FFF9ED 0%, #FFF3D6 40%, #FFE8C8 100%)",
              border: "2px solid rgba(176,32,48,0.18)",
              padding:
                "clamp(56px,8vw,100px) clamp(24px,5vw,64px) clamp(40px,5vw,60px)",
            }}
          >
            {/* dino skull — top-left */}
            <img
              src="https://c.animaapp.com/mnnib5ym6YgLgh/img/uploaded-asset-1779843092193-0.png"
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none select-none"
              style={{
                top: 10,
                left: 16,
                width: "clamp(60px,8vw,120px)",
                opacity: 0.13,
              }}
            />

            {/* dino footprints — bottom-right */}
            <img
              src="https://c.animaapp.com/mnnib5ym6YgLgh/img/uploaded-asset-1779843092194-1.png"
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none select-none"
              style={{
                bottom: 8,
                right: 10,
                width: "clamp(80px,12vw,180px)",
                opacity: 0.11,
              }}
            />

            {/* leaf — bottom-left */}
            <img
              src="https://c.animaapp.com/mnnib5ym6YgLgh/img/uploaded-asset-1779843092199-2.png"
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none select-none"
              style={{
                bottom: 6,
                left: 10,
                width: "clamp(50px,7vw,100px)",
                opacity: 0.12,
              }}
            />

            {/* Image */}
            <div className="relative flex justify-center">
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  top: "12px",
                  left: "8px",
                  right: "-8px",
                  borderRadius: "10px",
                  background: "rgba(255,179,71,0.18)",
                  transform: "rotate(1.2deg)",
                  transformOrigin: "50% 100%",
                  zIndex: 0,
                }}
              />
              <div
                className="relative z-10 w-full"
                style={{
                  transform: "rotate(-1deg)",
                  transformOrigin: "50% 100%",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dkdwqtlzz/image/upload/Burke_Pages_ive2r8.webp"
                  alt="Burke Museum — final design desktop page layouts"
                  className="w-full object-contain block"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.14)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile stage — native culture ── */}
        <div>
          <div className="flex items-baseline justify-between mb-5 mt-14">
            <p
              className="text-[10px] font-m uppercase tracking-widest"
              style={{ color: "#7a6e63", letterSpacing: "0.18em" }}
            >
              On The Go
            </p>
            <p className="text-[10px] font-m opacity-20 tracking-wide">
              Responsive screens
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, #FFF0F0 0%, #FFE4E8 45%, #FFDDE8 100%)",
              border: "3px solid #FF3749",
              padding: "clamp(36px,5vw,56px) clamp(24px,5vw,64px) 0",
              minHeight: "clamp(200px,28vw,360px)",
            }}
          >
            {/* dino skull — top-left */}
            <img
              src="https://c.animaapp.com/mnnib5ym6YgLgh/img/uploaded-asset-1779843092193-0.png"
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none select-none"
              style={{
                top: 8,
                left: 12,
                width: "clamp(48px,6vw,90px)",
                opacity: 0.12,
              }}
            />

            {/* footprints — top-right */}
            <img
              src="https://c.animaapp.com/mnnib5ym6YgLgh/img/uploaded-asset-1779843092194-1.png"
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none select-none"
              style={{
                top: 6,
                right: 8,
                width: "clamp(70px,10vw,150px)",
                opacity: 0.1,
              }}
            />

            {/* leaf — bottom-right */}
            <img
              src="https://c.animaapp.com/mnnib5ym6YgLgh/img/uploaded-asset-1779843092199-2.png"
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none select-none"
              style={{
                bottom: 40,
                right: 12,
                width: "clamp(44px,6vw,80px)",
                opacity: 0.12,
              }}
            />

            {/* Two mobile screens */}
            <div
              className="relative flex justify-center items-end"
              style={{ gap: "clamp(16px,4vw,48px)" }}
            >
              {/* Screen 01 */}
              <div style={{ flexShrink: 0, width: "clamp(80px,11vw,160px)" }}>
                <div
                  style={{
                    transform: "rotate(-3deg)",
                    transformOrigin: "50% 100%",
                    paddingBottom: "clamp(36px,5vw,56px)",
                  }}
                >
                  <div
                    className="overflow-hidden shadow-2xl"
                    style={{
                      borderRadius: "10px 10px 0 0",
                      border: "2.5px solid #FF3749",
                      borderBottom: "none",
                      backgroundColor: "#fff0f2",
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dkdwqtlzz/image/upload/Mobile_-_Home_Page_guhadm.png"
                      alt="Burke Museum — mobile home page"
                      className="w-full object-contain block"
                    />
                  </div>
                </div>
              </div>

              {/* Screen 02 */}
              <div style={{ flexShrink: 0, width: "clamp(80px,11vw,160px)" }}>
                <div
                  style={{
                    transform: "rotate(2.5deg)",
                    transformOrigin: "50% 100%",
                    paddingBottom: "clamp(36px,5vw,56px)",
                  }}
                >
                  <div
                    className="overflow-hidden shadow-2xl"
                    style={{
                      borderRadius: "10px 10px 0 0",
                      border: "2.5px solid #FF3749",
                      borderBottom: "none",
                      backgroundColor: "#fff0f2",
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dkdwqtlzz/image/upload/Mobile_-_Arts_Culture_Page_sa4dra.png"
                      alt="Burke Museum — mobile arts &amp; culture page"
                      className="w-full object-contain block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-[1100px] mx-auto mb-0">
        <div
          ref={r11}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 border-t border-black/15 pt-8"
        >
          <div>
            <p className="text-[10px] font-m opacity-40 uppercase tracking-widest mb-1">
              Reflection
            </p>
            <p className="text-sm font-m opacity-80">Always Iterate</p>
          </div>
          <div className="max-w-[620px] pb-20">
            <p
              className="text-[clamp(22px,2.5vw,32px)] leading-[1.2] tracking-[-0.5px] mb-6 opacity-80"
              style={serif}
            >
              Constraint makes the work stronger.
            </p>
            <p className="text-sm font-m leading-relaxed opacity-60">
              We explored three distinct directions before landing on something
              we felt proud of. Designing for children was a first for all of us
              — our early ideas were either too complex or missed the audience
              entirely. We doubled down on research, kept simplifying, and found
              that constraint made the work stronger.
            </p>
            <p className="text-sm font-m leading-relaxed opacity-60 mt-4">
              The biggest takeaway: not everything needs to be complicated.
              Every element in the final design earns its place. That clarity
              made the experience better for kids — and for us.
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#1a1714" }}>
        <div className="px-6 max-w-[1100px] mx-auto">
          <div
            ref={r12}
            className="flex flex-col md:flex-row items-stretch gap-4 py-10"
          >
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
            {/* Chimu — large dominant button */}
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
                  UX · Mobile App
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

        <div style={{ backgroundColor: "#C0303A" }}>
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
                  "'PP Editorial Old', 'PPEditorialOld', 'PP Editorial Old Ultralight', Georgia, serif",
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
              &#169; Kai Andreic
            </span>
            <a
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{
                color: "rgba(253,250,245,0.6)",
                fontFamily:
                  "'PP Neue Montreal','PPNeueMontreal','Neue Montreal',sans-serif",
                textDecoration: "none",
              }}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurkeMuseumPage;
