import { FormTextbox } from "./FormTextbox";

export interface FormInputWrapperProps {
  className: string;

  text: string;

  text1: string;
}

export const FormInputWrapper = ({
  className,
  text = "Team Norms",
  text1 = "What are norms that all members pledge to follow?",
}: FormInputWrapperProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-start gap-3 relative top-[84px] left-10 ${className}`}
    >
      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-black text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
          {text}
        </div>
        <p className="relative self-stretch font-body-1 font-[number:var(--body-1-font-weight)] text-black text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
          {text1}
        </p>
      </div>
      <FormTextbox className="!self-stretch !left-[unset] !w-full !top-[unset]" />
    </div>
  );
};
