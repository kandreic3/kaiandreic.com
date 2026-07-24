export interface FormInputProps {
  className: string;

  text: string;
}

export const FormInput = ({
  className,
  text = "Text",
}: FormInputProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-[275px] h-11 items-center justify-center gap-2.5 px-3 py-0.5 relative top-[607px] left-[1100px] bg-grey-light rounded border-2 border-solid border-[#a4a4a4] ${className}`}
    >
      <div className="flex items-start justify-around gap-[181px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-grey-darkest text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
          {text}
        </div>
      </div>
    </div>
  );
};
