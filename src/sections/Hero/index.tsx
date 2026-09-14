import { Link } from "react-router-dom";
import { HeroVideo } from "./components/HeroVideo";
import { Footer } from "../Footer";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Hero = () => {
  const projectsRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <div className="relative box-border">
      {/* Full-viewport editorial hero */}
      <div className="relative box-border h-[100svh] min-h-[500px] w-full overflow-hidden">
        <HeroVideo />
      </div>

      <div className="box-border flex flex-col gap-y-[60px] py-[60px]">
        {/* Projects section */}
        <div
          id="projects"
          ref={projectsRef}
          className="section-blur-wrapper box-border flex flex-col min-h-[auto] min-w-[auto] gap-y-[60px]"
        >
          <div className="box-border flex flex-col min-h-[auto] min-w-[auto] gap-y-[60px] px-5">
            <div className="reveal box-border gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] min-h-[auto] min-w-[auto]">
              <h2
                className="text-[47.5px] box-border col-end-[span_12] col-start-[span_12] tracking-[-2.375px] leading-[47.5px] min-h-[auto] min-w-[auto] font-b md:text-[65.6px] md:col-end-[span_9] md:col-start-[span_9] md:tracking-[-3.28px] md:leading-[65.6px]"
                style={{
                  fontFamily:
                    "'PP Editorial Old', 'PPEditorialOld', Georgia, serif",
                  fontWeight: 400,
                  fontFeatureSettings: '"liga" 1, "calt" 1, "dlig" 1, "kern" 1',
                  fontVariantLigatures:
                    "common-ligatures discretionary-ligatures contextual",
                }}
              >
                {" "}
                Take a deep dive into&nbsp;my&nbsp;projects
              </h2>
            </div>
          </div>
          <div
            className="box-border mb-[-30px] overflow-x-auto overflow-y-hidden pb-[30px] scroll-row hide-scrollbar"
            style={{ paddingLeft: "0", paddingRight: "20px" }}
          >
            <div
              className="relative items-end flex h-full w-max md:w-full z-[1]"
              style={{ paddingLeft: "20px", alignItems: "flex-end" }}
            >
              {[
                {
                  label: "1 / 5",
                  img: "/images/eaglobal-cover.png",
                  href: "/eaglobal",
                  text: "EA.global",
                  tier: "Professional",
                  forceAspect: true,
                  bg: "#122f08",
                  bgSize: "140% auto",
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)] mr-5",
                },
                {
                  label: "2 / 5",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_900,c_limit/Burke_Museum_pzgb10.png",
                  href: "/burkemuseum",
                  text: "Burke Museum",
                  tier: "Academic",
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)] mr-5",
                },
                {
                  label: "3 / 5",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_900,c_limit/Recognize_w98sxb.png",
                  href: "/recognize",
                  text: "Recognize.app",
                  tier: "Professional",
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)] mr-5",
                },
                {
                  label: "4 / 5",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_900,c_limit/Ocean_Watch_Thumbnail_as4zjx.png",
                  href: "/oceanwatch",
                  text: "Ocean Watch",
                  tier: "Academic",
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)] mr-5",
                },
                {
                  label: "5 / 5",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_900,c_limit/Chimu_escc5h.png",
                  href: "#",
                  text: "Chimu",
                  tier: "Professional",
                  disabled: true,
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)]",
                },
              ].map((card, i) => {
                const imageEl = card.bgSize ? (
                  <div
                    role="img"
                    aria-label={card.text}
                    className="bg-zoom box-border h-full max-w-full w-full bg-no-repeat bg-center"
                    style={{
                      aspectRatio: "1365 / 2048",
                      backgroundColor: card.bg,
                      backgroundImage: `url(${card.img})`,
                      backgroundSize: card.bgSize,
                    }}
                  />
                ) : (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={card.img}
                    alt={card.text}
                    className={`${card.forceAspect ? "aspect-[1365/2048]" : "aspect-[auto_1365_/_2048]"} box-border h-full max-w-full w-full object-cover`}
                  />
                );
                return (
                <div
                  key={card.label}
                  role="group"
                  aria-label={card.label}
                  className={`reveal reveal-delay-${i + 1} relative box-border shrink-0 h-full min-h-[auto] min-w-[auto] ${card.cls}`}
                >
                  <div className="box-border flex flex-col gap-y-2.5">
                    {card.disabled ? (
                      <div className="relative box-border min-h-[auto] min-w-[auto] overflow-hidden img-zoom">
                        {imageEl}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[#fdfaf5]/90 backdrop-blur-[2px] px-4 py-3 font-m text-sm text-[#1a1714]">
                          Case study in progress — check back soon
                        </div>
                      </div>
                    ) : card.href.startsWith("/") ? (
                      <Link
                        to={card.href}
                        className="box-border min-h-[auto] min-w-[auto] overflow-hidden img-zoom block"
                      >
                        {imageEl}
                      </Link>
                    ) : (
                      <div className="box-border min-h-[auto] min-w-[auto] overflow-hidden img-zoom">
                        {imageEl}
                      </div>
                    )}
                    <span className="self-start box-border block min-h-[auto] min-w-[auto] font-m text-sm tracking-wide text-[#7a6e63]">
                      {card.tier} /
                    </span>
                    {card.disabled ? (
                      <span className="self-start box-border block min-h-[auto] min-w-[auto] font-m text-sm text-black/70 cursor-not-allowed">
                        {" "}
                        {card.text}{" "}
                      </span>
                    ) : card.href.startsWith("/") ? (
                      <Link
                        to={card.href}
                        className="self-start box-border block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 font-m text-sm py-[10px] -my-[10px]"
                      >
                        {" "}
                        {card.text}{" "}
                      </Link>
                    ) : (
                      <a
                        href={card.href}
                        className="self-start box-border block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 font-m text-sm py-[10px] -my-[10px]"
                      >
                        {" "}
                        {card.text}{" "}
                      </a>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Learn more link */}
        <div className="box-border pt-5 pb-[30px] px-5">
          <Link
            to="/about"
            className="text-[37.625px] box-border tracking-[-1.88125px] leading-[45.15px] border-b-4 border-solid font-b hover:border-transparent transition-colors duration-300 md:text-[51.2px] md:tracking-[-2.56px] md:leading-[61.44px] md:border-b-[6px]"
          >
            Learn More About Me
          </Link>
        </div>

        {/* Contact CTA Banner */}
        <div
          id="contact"
          ref={contactRef}
          className="section-blur-wrapper relative aspect-[1500_/_716] box-border flex flex-col justify-between mb-[-150px] min-h-[auto] min-w-[auto] w-full overflow-hidden px-5 py-[60px]"
        >
          <div className="absolute box-border h-full pointer-events-none w-full overflow-hidden left-0 top-0">
            <img
          loading="lazy"
          decoding="async"
              src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_2000,c_limit/IMG_0335_tbne9p.jpg"
              alt=""
              className="aspect-[auto_1500_/_716] box-border h-full max-w-full object-cover w-full scale-110"
            />
            <div className="absolute backdrop-blur-[6px] box-border h-full w-full left-0 top-0" />
          </div>
          <div
            className="absolute box-border h-full opacity-30 w-full z-10 left-0 top-0"
            style={{ backgroundColor: "#fdfaf5" }}
          />
          <div className="reveal relative box-border gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] min-h-[auto] min-w-[auto] z-10 pb-40 md:pb-0">
            <div className="box-border col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] md:col-end-[span_6] md:col-start-[span_6]">
              <span className="box-border pr-5"> Contact / </span>
              I&#39;m currently open to product design roles. If you&#39;d like
              to talk about an opportunity, ask about any of the work above, or
              just say hello, I&#39;d love to hear from you.
            </div>
          </div>
          <div className="reveal reveal-delay-2 relative box-border min-h-[auto] min-w-[auto] z-10">
            <a
              href="mailto:kandreic3@gmail.com"
              className="text-[37.625px] box-border tracking-[-1.88125px] leading-[45.15px] border-b-4 border-solid font-b hover:border-transparent transition-colors duration-300 md:text-[51.2px] md:tracking-[-2.56px] md:leading-[61.44px] md:border-b-[6px]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="box-border mt-[90px]">
        <Footer />
      </div>
    </div>
  );
};
