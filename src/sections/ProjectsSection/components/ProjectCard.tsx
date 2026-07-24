import { Link } from "react-router-dom";

export type ProjectCardProps = {
  ariaLabel: string;
  className: string;
  imageSrc: string;
  href: string;
  linkText: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const isInternal = props.href.startsWith("/") && !props.href.startsWith("//");

  if (isInternal) {
    return (
      <div role="group" aria-label={props.ariaLabel} className={props.className}>
        <div className="box-border caret-transparent flex flex-col gap-y-2.5">
          <Link to={props.href} className="box-border caret-transparent min-h-[auto] min-w-[auto] overflow-hidden block">
            <img
              src={props.imageSrc}
              alt={props.linkText}
              className="aspect-[auto_1365_/_2048] box-border caret-transparent h-full max-w-full object-cover w-full hover:opacity-90 transition-opacity duration-200"
            />
          </Link>
          <Link
            to={props.href}
            className="self-start text-sm font-m border-b-2 border-transparent hover:border-black transition-colors duration-200"
          >
            {props.linkText}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div role="group" aria-label={props.ariaLabel} className={props.className}>
      <div className="box-border caret-transparent flex flex-col gap-y-2.5">
        <a href={props.href} className="box-border caret-transparent min-h-[auto] min-w-[auto] overflow-hidden block">
          <img
            src={props.imageSrc}
            alt={props.linkText}
            className="aspect-[auto_1365_/_2048] box-border caret-transparent h-full max-w-full object-cover w-full hover:opacity-90 transition-opacity duration-200"
          />
        </a>
        <a
          href={props.href}
          className="self-start text-sm font-m border-b-2 border-transparent hover:border-black transition-colors duration-200"
        >
          {props.linkText}
        </a>
      </div>
    </div>
  );
};
