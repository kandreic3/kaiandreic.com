import { useNavigate, useLocation } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const MENU_LINKS: [string, string][] = [
  ["Index", "#top"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export const Footer = () => {
  const ref = useScrollReveal();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleMenuClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === "#top" && isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        if (href === "#top") return;
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="box-border" style={{ backgroundColor: "#fdfaf5" }}>
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
              {MENU_LINKS.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleMenuClick(e, href)}
                  className="self-start box-border block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 py-[9px] -my-[9px]"
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
                className="self-start box-border block border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 py-[9px] -my-[9px]"
              >
                @kaiandreic
              </a>
              <a
                href="https://www.linkedin.com/in/kai-andreic-107074193"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start box-border block border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 py-[9px] -my-[9px]"
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
                  className="box-border border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 py-[9px] -my-[9px] inline-block"
                >
                  kandreic3@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:4253507163"
                  className="box-border border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 py-[9px] -my-[9px] inline-block"
                >
                  425-350-7163
                </a>
              </p>
              <p>
                <a
                  href="https://maps.google.com/?q=Seattle,Washington"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-border border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 py-[9px] -my-[9px] inline-block"
                >
                  Seattle, Washington
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="relative box-border overflow-hidden my-28 px-5 col-start-[span_12] col-end-[span_12] w-full">
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
            UX Designer
          </div>
        </div>
        <div className="absolute box-border flex h-full justify-center pointer-events-none w-full z-0 left-0 top-0">
          <div className="relative aspect-[124_/_156] box-border min-h-[auto] min-w-[auto]">
            <img
              loading="lazy"
              decoding="async"
              src="https://res.cloudinary.com/dkdwqtlzz/image/upload/f_auto,q_auto,w_600,c_limit/IMG_0347_zot3zi.jpg"
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
            className="box-border border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 cursor-pointer bg-transparent font-m text-sm py-[11px] -my-[11px]"
          >
            Back to top
          </button>
          ↑
        </div>
        <div className="box-border col-end-[span_6] col-start-[span_6] min-h-[auto] min-w-[auto] text-right md:col-end-[span_3] md:col-start-[span_3]">
          &#169; Kai Andreic
        </div>
      </div>
    </div>
  );
};
