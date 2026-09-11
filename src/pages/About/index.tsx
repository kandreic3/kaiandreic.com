import { useEffect, useState } from "react";
import type { MutableRefObject, Ref } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../sections/Navbar";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useScrollProgress } from "../../hooks/useScrollProgress";

function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(node);
      else (ref as MutableRefObject<T | null>).current = node;
    });
  };
}

export default function About() {
  const navigate = useNavigate();
  const heroRef = useScrollReveal();
  const bioRef = useScrollReveal();
  const { ref: bioProgressRef, progress: bioProgress } = useScrollProgress();
  const closingRef = useScrollReveal();
  const [contactMounted, setContactMounted] = useState(false);

  const goToProjects = () => {
    navigate("/");
    setTimeout(() => {
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setContactMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setContactOpen(true));
    });
  };

  const closeContact = () => {
    setContactOpen(false);
    setTimeout(() => setContactMounted(false), 450);
  };

  useEffect(() => {
    if (!contactMounted) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [contactMounted]);

  return (
    <div
      className="text-black text-sm not-italic normal-nums font-normal box-border tracking-[normal] pointer-events-auto font-m"
      style={{ backgroundColor: "#fdfaf5" }}
    >
      <Navbar />

      <main className="box-border">
        {/* Hero identity — centered stacked name, portrait reveals lower on scroll */}
        <div className="box-border pt-[130px] md:pt-[160px] pb-[10px] px-5 overflow-hidden flex flex-col items-center text-center">
          <h1 className="font-b select-none" style={{ lineHeight: 0.92 }}>
            <span className="font-b block text-[19vw] md:text-[13.5vw] tracking-[-0.04em]">
              Kai
            </span>
            <span className="font-b block text-[19vw] md:text-[13.5vw] tracking-[-0.04em]">
              Andreic
            </span>
          </h1>
          <div
            ref={heroRef}
            className="reveal -mt-[1.6vw] md:-mt-[1vw] relative overflow-hidden img-zoom z-10"
            style={{
              width: "clamp(160px, 32vw, 380px)",
              aspectRatio: "124 / 156",
            }}
          >
            <img
              loading="lazy"
              decoding="async"
              src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_600,c_limit/IMG_0347_zot3zi.jpg"
              alt="Portrait of Kai Andreic"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>
          <span className="mt-6 md:mt-8 block font-m text-sm tracking-wide text-[#7a6e63]">
            Product Designer / Open to new roles
          </span>
        </div>

        {/* Background / bio — separation from the hero comes from scroll-linked
            motion (fade + rise, tied to scroll position like Apple's product
            pages) rather than a fixed block of whitespace */}
        <div
          ref={mergeRefs(bioRef, bioProgressRef)}
          className="box-border gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-y-[30px] pt-[10px] pb-[60px] px-5"
          style={{
            opacity: bioProgress,
            transform: `translateY(${(1 - bioProgress) * 48}px)`,
          }}
        >
          <div className="box-border col-end-[span_12] col-start-[span_12] text-center">
            <span className="font-m text-sm text-[#1a1714]"> Background / </span>
          </div>
          <p className="font-b col-end-[span_12] col-start-[span_12] md:col-start-3 md:col-end-11 text-center text-[28px] tracking-[-1.26px] leading-[33.6px] md:text-[38px] md:tracking-[-1.71px] md:leading-[45.6px]">
            I'm a Product Designer whose eye for design was shaped long
            before I ever opened a design tool.
          </p>
          <div className="col-end-[span_12] col-start-[span_12] md:col-start-3 md:col-end-11 flex flex-col gap-y-5 font-m text-[18px] leading-[150%] text-[#1a1714]/85 max-w-[65ch] mx-auto">
            <p>
              I was born 영준 — Youngjoon — in Suwon, South Korea, and
              adopted by Serbian parents. I grew up speaking Serbian
              fluently, moving between two cultures and two ways of seeing
              the world from an early age.
            </p>
            <p>
              That in-between vantage point showed up early as a pull toward
              design that didn't play it safe — abstract, a little
              unexpected, first in fashion, then in architecture, long
              before either had anywhere professional to land.
            </p>
            <div className="reveal grid grid-cols-2 gap-x-5 -mx-0 my-2">
              <div className="overflow-hidden img-zoom">
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_3372_mx8h5m.jpg"
                  alt="Fashion"
                  className="aspect-[3/4] w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden img-zoom">
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_2965_sdo4wt.jpg"
                  alt="Architecture"
                  className="aspect-[3/4] w-full h-full object-cover"
                />
              </div>
            </div>
            <p>
              I hold an AA in Arts from Bellevue College and a BA in
              Informatics from the University of Washington, where I made
              the Dean's List every term. Since then, my path has moved
              between UX Design and Product Management — two disciplines
              that, together, taught me to care as much about why
              something works as how it looks.
            </p>
            <p>
              What eventually pulled me fully into design was the overlap
              of technology and fashion. Design gave my eye and my
              restless creative process an actual problem to solve.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div
          ref={closingRef}
          className="reveal box-border gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-y-[30px] py-[90px] px-5"
        >
          <div className="col-end-[span_12] col-start-[span_12] md:col-start-3 md:col-end-11 text-center font-m text-[18px] leading-[150%] text-[#1a1714]/85">
            Currently open to any design/product roles. If any of this
            resonates, I'd love to hear from you.
          </div>
          <div className="col-end-[span_12] col-start-[span_12] md:col-start-3 md:col-end-11 flex flex-wrap justify-center gap-x-10 gap-y-4">
            <button
              type="button"
              onClick={openContact}
              className="text-[37.625px] box-border tracking-[-1.88125px] leading-[45.15px] border-b-4 border-solid font-b hover:border-transparent transition-colors duration-300 md:text-[51.2px] md:tracking-[-2.56px] md:leading-[61.44px] md:border-b-[6px] cursor-pointer bg-transparent"
            >
              Get in Touch
            </button>
            <button
              type="button"
              onClick={goToProjects}
              className="text-[37.625px] box-border tracking-[-1.88125px] leading-[45.15px] border-b-4 border-solid font-b hover:border-transparent transition-colors duration-300 md:text-[51.2px] md:tracking-[-2.56px] md:leading-[61.44px] md:border-b-[6px] cursor-pointer bg-transparent"
            >
              See the Work
            </button>
            <a
              href="/files/Kai-Andreic-Resume.pdf"
              download="Kai-Andreic-Resume.pdf"
              className="text-[37.625px] box-border tracking-[-1.88125px] leading-[45.15px] border-b-4 border-solid font-b hover:border-transparent transition-colors duration-300 md:text-[51.2px] md:tracking-[-2.56px] md:leading-[61.44px] md:border-b-[6px]"
            >
              Resume
            </a>
          </div>
        </div>
      </main>

      {contactMounted && (
        <div
          className={`modal-backdrop fixed inset-0 z-[100] flex items-center justify-center px-5 ${contactOpen ? "open" : ""}`}
          style={{ backgroundColor: "rgba(26,23,20,0.5)" }}
          onClick={closeContact}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(e) => e.stopPropagation()}
            className={`modal-panel relative w-full max-w-[440px] rounded-2xl ${contactOpen ? "open" : ""}`}
            style={{ backgroundColor: "#fdfaf5" }}
          >
            <button
              type="button"
              onClick={closeContact}
              aria-label="Close"
              className="absolute top-4 right-4 font-m text-sm border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 py-[9px] -my-[9px] cursor-pointer bg-transparent"
            >
              Close
            </button>
            <div className="p-8 md:p-10 pt-12 md:pt-14 flex flex-col items-center text-center">
              <span
                id="contact-modal-title"
                className="font-m text-sm text-[#1a1714] block mb-6"
              >
                {" "}
                Contact /
              </span>
              <div className="flex flex-col items-center gap-y-5">
                <a
                  href="mailto:kandreic3@gmail.com"
                  className="font-b text-[28px] tracking-[-1.26px] leading-[1.1] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200"
                >
                  kandreic3@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/kai-andreic-107074193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-m text-sm border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 py-[9px] -my-[9px]"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
