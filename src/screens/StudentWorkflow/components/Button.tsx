export interface ButtonProps {
  className: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  className,
  text = "SUBMIT",
  onClick,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex w-[135px] items-center justify-center gap-2.5 px-8 py-2 relative top-[742px] left-[1100px] bg-[#eb7500] font-button font-[number:var(--button-font-weight)] text-white text-[length:var(--button-font-size)] text-center tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)] cursor-pointer disabled:opacity-50 border-none ${className}`}
    >
      {text}
    </button>
  );
};
