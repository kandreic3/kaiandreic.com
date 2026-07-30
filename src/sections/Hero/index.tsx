import { Link } from "react-router-dom";
import { HeroVideo } from "./components/HeroVideo";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Hero = () => {
  const projectsRef = useScrollReveal();
  const showroomTitleRef = useScrollReveal();
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
                  label: "1 / 4",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_900,c_limit/Burke_Museum_pzgb10.png",
                  href: "/burkemuseum",
                  text: "Burke Museum",
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)] mr-5",
                },
                {
                  label: "2 / 4",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_900,c_limit/Chimu_escc5h.png",
                  href: "#",
                  text: "Chimu",
                  disabled: true,
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)] mr-5",
                },
                {
                  label: "3 / 4",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_900,c_limit/Recognize_w98sxb.png",
                  href: "/recognize",
                  text: "Recognize.app",
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)] mr-5",
                },
                {
                  label: "4 / 4",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_900,c_limit/Ocean_Watch_Thumbnail_as4zjx.png",
                  href: "/oceanwatch",
                  text: "Ocean Watch",
                  cls: "w-[66.66vw] md:w-[calc(40%_-_13.3333px)]",
                },
              ].map((card, i) => (
                <div
                  key={card.label}
                  role="group"
                  aria-label={card.label}
                  className={`reveal reveal-delay-${i + 1} relative box-border shrink-0 h-full min-h-[auto] min-w-[auto] ${card.cls}`}
                >
                  <div className="box-border flex flex-col gap-y-2.5">
                    {card.disabled ? (
                      <div className="relative box-border min-h-[auto] min-w-[auto] overflow-hidden img-zoom">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={card.img}
                          alt={card.text}
                          className="aspect-[auto_1365_/_2048] box-border h-full max-w-full object-cover w-full"
                        />
                        <div
                          className="pointer-events-none absolute left-[-20%] top-1/2 w-[140%] -translate-y-1/2 -rotate-[18deg] bg-black/90 py-2 text-center text-[12px] font-semibold tracking-[0.18em] text-white"
                          style={{
                            fontFamily:
                              "'PP Neue Montreal', 'NeueMontreal', 'Neue Montreal', sans-serif",
                          }}
                        >
                          UNDER CONSTRUCTION
                        </div>
                      </div>
                    ) : card.href.startsWith("/") ? (
                      <Link
                        to={card.href}
                        className="box-border min-h-[auto] min-w-[auto] overflow-hidden img-zoom block"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={card.img}
                          alt={card.text}
                          className="aspect-[auto_1365_/_2048] box-border h-full max-w-full object-cover w-full"
                        />
                      </Link>
                    ) : (
                      <div className="box-border min-h-[auto] min-w-[auto] overflow-hidden img-zoom">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={card.img}
                          alt={card.text}
                          className="aspect-[auto_1365_/_2048] box-border h-full max-w-full object-cover w-full"
                        />
                      </div>
                    )}
                    {card.disabled ? (
                      <span className="self-start box-border block min-h-[auto] min-w-[auto] font-m text-sm text-black/70 cursor-not-allowed">
                        {" "}
                        {card.text}{" "}
                      </span>
                    ) : card.href.startsWith("/") ? (
                      <Link
                        to={card.href}
                        className="self-start box-border block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 font-m text-sm"
                      >
                        {" "}
                        {card.text}{" "}
                      </Link>
                    ) : (
                      <a
                        href={card.href}
                        className="self-start box-border block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 font-m text-sm"
                      >
                        {" "}
                        {card.text}{" "}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Showroom section */}
        <div
          id="showroom"
          ref={showroomTitleRef}
          className="section-blur-wrapper box-border flex flex-col min-h-[auto] min-w-[auto] gap-y-[60px] px-5 mt-[80px]"
        >
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
              Here are some of my other passions outside&nbsp;of&nbsp;design
            </h2>
          </div>
        </div>

        {/* Showroom scroll grid */}
        <div className="box-border min-h-[auto] min-w-[auto]">
          <div
            className="box-border mb-[-30px] overflow-x-auto overflow-y-hidden pb-[30px] scroll-row hide-scrollbar"
            style={{ paddingLeft: "0", paddingRight: "20px" }}
          >
            <div
              className="relative items-end flex h-full w-max md:w-full z-[1]"
              style={{ paddingLeft: "20px" }}
            >
              {[
                {
                  label: "1/10",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_0108_zssptz.jpg",
                  aspect: "aspect-[auto_3_/_4]",
                  href: "#",
                  text: "Flowers",
                },
                {
                  label: "2/10",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_0509_rkdyno.jpg",
                  aspect: "aspect-[auto_3_/_4]",
                  href: "#",
                  text: "Friends",
                },
                {
                  label: "3/10",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_0256_wvvu7q.jpg",
                  aspect: "aspect-[auto_3_/_4]",
                  href: "#",
                  text: "Pets",
                },
                {
                  label: "4/10",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_0035_ip3p91.jpg",
                  aspect: "aspect-[auto_3_/_4]",
                  href: "#",
                  text: "Art",
                },
                {
                  label: "5/10",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_3372_mx8h5m.jpg",
                  aspect: "aspect-[auto_3_/_4]",
                  href: "#",
                  text: "Fashion",
                },
                {
                  label: "6/10",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_2965_sdo4wt.jpg",
                  aspect: "aspect-[auto_3_/_4]",
                  href: "#",
                  text: "Architecture",
                },
                {
                  label: "7/10",
                  img: "https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_700,c_limit/IMG_2922_mso2zj.jpg",
                  aspect: "aspect-[auto_3_/_4]",
                  href: "#",
                  text: "Food",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  role="group"
                  aria-label={card.label}
                  className="relative box-border shrink-0 h-full min-h-[auto] min-w-[auto] w-[55vw] mr-5 md:w-[calc(22.22%_-_16px)] last:mr-0"
                >
                  <div className="box-border flex flex-col gap-y-2.5">
                    <div className="box-border min-h-[auto] min-w-[auto] overflow-hidden img-zoom">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={card.img}
                        alt=""
                        className={`${card.aspect} box-border h-full max-w-full object-cover w-full`}
                      />
                    </div>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start box-border block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 font-m text-sm"
                    >
                      {" "}
                      {card.text}{" "}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="box-border pt-[60px] pb-[90px] px-5">
            <a
              href="https://www.linkedin.com/in/kai-andreic-107074193"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[37.625px] box-border tracking-[-1.88125px] leading-[45.15px] border-b-4 border-solid font-b hover:border-transparent transition-colors duration-300 md:text-[51.2px] md:tracking-[-2.56px] md:leading-[61.44px] md:border-b-[6px]"
            >
              Learn More About Me
            </a>
          </div>
        </div>

        {/* Contact CTA Banner */}
        <div
          id="contact"
          ref={contactRef}
          className="section-blur-wrapper relative aspect-auto box-border flex flex-col justify-between mb-[-150px] min-h-[auto] min-w-[auto] w-full overflow-hidden px-5 py-[60px] md:aspect-[1500_/_600]"
        >
          <div className="absolute box-border h-full pointer-events-none w-full overflow-hidden left-0 top-0">
            <img
              src="https://res.cloudinary.com/dkdwqtlzz/image/upload/IMG_0335_tbne9p.jpg"
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
              If you&#39;re ready to start a project, have any questions, or
              simply want to learn more, feel free to reach out. I look forward
              to hearing from you and discussing how we can create something
              great together.
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
      <div
        className="box-border mt-[90px]"
        style={{ backgroundColor: "#fdfaf5" }}
      >
        <FooterInline />
      </div>
    </div>
  );
};

const FooterInline = () => {
  const ref = useScrollReveal();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div
        ref={ref}
        className="font-neue box-border gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-y-[60px] pt-5 px-5"
      >
        {/* Menu */}
        <div className="reveal reveal-delay-1 box-border gap-x-5 grid col-end-[span_12] col-start-[span_12] grid-cols-[repeat(3,minmax(0px,1fr))] min-h-[auto] min-w-[auto] md:col-end-[span_6] md:col-start-[span_6]">
          <div className="box-border col-end-[span_1] col-start-[span_1] min-h-[auto] min-w-[auto]">
            {" "}
            Menu /
          </div>
          <div className="box-border col-end-[span_2] col-start-[span_2] min-h-[auto] min-w-[auto]">
            <div className="box-border flex flex-col gap-y-1">
              {[
                ["Index", "#top"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="self-start box-border block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Socials */}
        <div className="reveal reveal-delay-2 box-border gap-x-5 grid col-end-[span_12] col-start-[span_12] grid-cols-[repeat(3,minmax(0px,1fr))] min-h-[auto] min-w-[auto] md:col-end-[span_6] md:col-start-[span_6]">
          <div className="box-border col-end-[span_1] col-start-[span_1] min-h-[auto] min-w-[auto]">
            {" "}
            Socials /
          </div>
          <div className="box-border col-end-[span_2] col-start-[span_2] min-h-[auto] min-w-[auto]">
            <div className="box-border flex flex-col gap-y-1">
              <a
                href="https://www.instagram.com/kaiandreic/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start box-border block border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200"
              >
                @kaiandreic
              </a>
              <a
                href="https://www.linkedin.com/in/kai-andreic-107074193"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start box-border block border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="reveal reveal-delay-1 box-border gap-x-5 grid col-end-[span_12] col-start-[span_12] grid-cols-[repeat(3,minmax(0px,1fr))] min-h-[auto] min-w-[auto] md:col-end-[span_6] md:col-start-[span_6]">
          <div className="box-border col-end-[span_1] col-start-[span_1] min-h-[auto] min-w-[auto]">
            {" "}
            Contact /
          </div>
          <div className="box-border col-end-[span_2] col-start-[span_2] min-h-[auto] min-w-[auto]">
            <div className="box-border flex flex-col gap-y-1.5">
              <p>
                <a
                  href="mailto:kandreic3@gmail.com"
                  className="box-border border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200"
                >
                  kandreic3@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:4253507163"
                  className="box-border border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200"
                >
                  425-350-7163
                </a>
              </p>
              <p>
                <a
                  href="https://maps.google.com/?q=Seattle,Washington"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-border border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200"
                >
                  Seattle, Washington
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="relative box-border overflow-hidden my-28 px-5">
        <div className="relative text-[47.5px] box-border flex flex-wrap justify-between tracking-[-2.375px] leading-[47.5px] z-[1] py-12 font-b md:text-[65.6px] md:tracking-[-3.28px] md:leading-[65.6px]">
          <div
            className="text-[47.5px] box-border tracking-[-2.375px] leading-[47.5px] min-h-[auto] min-w-[auto] mr-2 md:text-[65.6px] md:tracking-[-3.28px] md:leading-[65.6px]"
            style={{
              fontWeight: 400,
              fontFamily:
                "'PP Editorial Old', 'PPEditorialOld', Georgia, serif",
            }}
          >
            Kai Andreic
          </div>
          <div
            className="text-[47.5px] box-border tracking-[-2.375px] leading-[47.5px] min-h-[auto] min-w-[auto] md:text-[65.6px] md:tracking-[-3.28px] md:leading-[65.6px]"
            style={{
              fontWeight: 400,
              fontFamily:
                "'PP Editorial Old', 'PPEditorialOld', Georgia, serif",
            }}
          >
            Product Designer
          </div>
        </div>
        <div className="absolute box-border flex h-full justify-center pointer-events-none w-full z-0 left-0 top-0">
          <div className="relative aspect-[124_/_156] box-border min-h-[auto] min-w-[auto]">
            <img
              src="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1784070460/IMG_0347_zot3zi.jpg"
              alt=""
              className="box-border h-full max-w-full w-full"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="box-border gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] pb-5 px-5">
        <div className="box-border col-end-[span_6] col-start-[span_6] min-h-[auto] min-w-[auto]"></div>
        <div className="box-border hidden col-end-[span_3] col-start-[span_3] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          <button
            onClick={scrollToTop}
            className="box-border border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 cursor-pointer bg-transparent font-m text-sm"
          >
            Back to top
          </button>
          ↑
        </div>
        <div className="box-border col-end-[span_6] col-start-[span_6] min-h-[auto] min-w-[auto] text-right md:col-end-[span_3] md:col-start-[span_3]">
          &#169; Kai Andreic
        </div>
      </div>
    </>
  );
};
