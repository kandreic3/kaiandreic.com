export interface FormSelectProps {
  className: string;

  text: string;

  dropdownClassName: string;
}

export const FormSelect = ({
  className,
  text = "Select",
  dropdownClassName,
}: FormSelectProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-[275px] h-11 items-start justify-center gap-2.5 pl-4 pr-3 py-[5px] relative top-[701px] left-[1100px] bg-grey-light rounded border-2 border-solid border-[#a4a4a4] ${className}`}
    >
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-grey-darkest text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
          {text}
        </div>
        <img
          className={`relative w-[18.19px] h-[15.75px] ${dropdownClassName}`}
          alt="Dropdown"
          src="https://c.animaapp.com/mpln3dcglqoyJS/img/dropdown.svg"
        />
      </div>
    </div>
  );
};
