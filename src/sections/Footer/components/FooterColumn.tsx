import React from "react";

export type FooterColumnLink = {
  href: string;
  label: string;
};

export type FooterColumnProps = {
  title: string;
  links: FooterColumnLink[];
  innerClassName?: string;
  linkClassName?: string;
  wrapperTag?: "div" | "p";
};

const neueStyle: React.CSSProperties = {
  fontFamily: "var(--font-neue)",
  fontWeight: 400,
};

export const FooterColumn = (props: FooterColumnProps) => {
  const {
    title,
    links,
    innerClassName = "box-border caret-transparent flex flex-col gap-y-1",
    linkClassName = "self-start box-border caret-transparent block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent hover:border-black",
    wrapperTag: WrapperTag,
  } = props;

  return (
    <div className="box-border caret-transparent gap-x-5 grid col-end-[span_12] col-start-[span_12] grid-cols-[repeat(3,minmax(0px,1fr))] min-h-[auto] min-w-[auto] md:col-end-[span_6] md:col-start-[span_6]">
      <div
        className="box-border caret-transparent col-end-[span_1] col-start-[span_1] min-h-[auto] min-w-[auto]"
        style={neueStyle}
      >
        {" "}
        {title} /
      </div>
      <div className="box-border caret-transparent col-end-[span_2] col-start-[span_2] min-h-[auto] min-w-[auto]">
        <div className={innerClassName}>
          {links.map((link) =>
            WrapperTag ? (
              <WrapperTag
                key={link.href}
                className="box-border caret-transparent min-h-[auto] min-w-[auto]"
              >
                <a href={link.href} className={linkClassName} style={neueStyle}>
                  {link.label}
                </a>
              </WrapperTag>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={linkClassName}
                style={neueStyle}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
