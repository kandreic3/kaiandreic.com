export interface FormTextboxProps {
  className: string;
}

export const FormTextbox = ({ className }: FormTextboxProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-[500px] h-[120px] items-start p-3 relative top-[693px] left-[393px] bg-grey-light rounded border-2 border-solid border-[#a4a4a4] ${className}`}
    >
      <div className="relative flex-1 self-stretch mt-[-2.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-grey-darkest text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
        Enter text
      </div>
    </div>
  );
};
