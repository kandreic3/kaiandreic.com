export interface ResponseProps {
  className: string;

  text: string;
}

export const Response = ({
  className,
  text = "What is your favorite holiday tradition?",
}: ResponseProps): JSX.Element => {
  return (
    <div className={`flex flex-col items-start gap-1 relative ${className}`}>
      <p className="relative self-stretch mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-[18px]">
        <span className="font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] font-body-1 [font-style:var(--body-1-font-style)] tracking-[var(--body-1-letter-spacing)] text-[length:var(--body-1-font-size)]">
          {text}
        </span>
      </p>
      <p className="relative self-stretch font-body-1 font-[number:var(--body-1-font-weight)] text-black text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};
