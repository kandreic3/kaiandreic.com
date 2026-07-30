export interface FormRadioProps {
  className: string;

  text: string;
}

export const FormRadio = ({
  className,
  text = "Text",
}: FormRadioProps): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-3 relative top-[801px] left-[1220px] ${className}`}
    >
      <div className="relative w-[18px] h-[18px] bg-grey-light rounded-[20px] border-2 border-solid border-[#a4a4a4]" />
      <div className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-[#1e1e1e] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] whitespace-nowrap [font-style:var(--body-1-font-style)]">
        {text}
      </div>
    </div>
  );
};
