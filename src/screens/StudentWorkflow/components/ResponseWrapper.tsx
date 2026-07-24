import { FormRadio } from "./FormRadio";

export interface ResponseWrapperProps {
  className: string;
  text: string;
}

export const ResponseWrapper = ({
  className,
  text = "Members provide timely response to communications",
}: ResponseWrapperProps): JSX.Element => {
  return (
    <div className={`flex flex-col items-start gap-2 relative ${className}`}>
      <p className="relative self-stretch mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-[18px]">
        <span className="font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] font-body-1 [font-style:var(--body-1-font-style)] tracking-[var(--body-1-letter-spacing)] text-[length:var(--body-1-font-size)]">
          {text}
        </span>
      </p>
      <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
        <FormRadio
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="😔 Strongly disagree"
        />
        <FormRadio
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="🙁 Disagree"
        />
        <FormRadio
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="😐 Neutral"
        />
        <FormRadio
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="🙂 Agree"
        />
        <FormRadio
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="😃 Strongly agree"
        />
      </div>
    </div>
  );
};
