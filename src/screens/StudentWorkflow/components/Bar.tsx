export interface BarProps {
  className: string;

  text: string;
}

export const Bar = ({ className, text = "Factor" }: BarProps): JSX.Element => {
  return (
    <div
      className={`flex w-[1000px] h-[50px] items-center gap-4 relative top-[397px] left-[1534px] ${className}`}
    >
      <div className="relative flex items-center justify-end self-stretch w-[200px] mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-grey-darkest text-[length:var(--h4-font-size)] text-right tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
        {text}
      </div>
      <div className="flex items-center relative flex-1 self-stretch grow">
        <div className="relative flex-1 self-stretch grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-[#008400] border-2 border-solid border-[#a4a4a4]" />
        <div className="relative flex-1 self-stretch grow mt-[-1.00px] mb-[-1.00px] bg-[#57d757] border-2 border-solid border-[#a4a4a4]" />
        <div className="relative flex-1 self-stretch grow mt-[-1.00px] mb-[-1.00px] bg-[#fff8df] border-2 border-solid border-[#a4a4a4]" />
        <div className="relative flex-1 self-stretch grow mt-[-1.00px] mb-[-1.00px] bg-[#ff9e42] border-2 border-solid border-[#a4a4a4]" />
        <div className="relative flex-1 self-stretch grow mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] bg-[#eb3a00] border-2 border-solid border-[#a4a4a4]" />
      </div>
    </div>
  );
};
