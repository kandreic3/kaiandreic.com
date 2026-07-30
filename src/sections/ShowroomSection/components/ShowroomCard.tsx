export type ShowroomCardProps = {
  ariaLabel: string;
  imageSrc: string;
  imageClassName: string;
  linkHref: string;
  linkText: string;
  containerClassName: string;
};

export const ShowroomCard = (props: ShowroomCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className={props.containerClassName}
    >
      <div className="box-border caret-transparent flex flex-col gap-y-2.5">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] overflow-hidden">
          <img
            src={props.imageSrc}
            alt=""
            className={`box-border caret-transparent h-full max-w-full object-cover w-full ${props.imageClassName}`}
          />
        </div>
        <a
          href={props.linkHref}
          className="self-start box-border caret-transparent block min-h-[auto] min-w-[auto] border-b-2 border-solid border-transparent before:accent-auto before:box-border before:caret-transparent before:text-black before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[16.1px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:mr-5 before:border-separate before:font-m hover:border-black"
        >
          {" "}
          {props.linkText}{" "}
        </a>
      </div>
    </div>
  );
};
