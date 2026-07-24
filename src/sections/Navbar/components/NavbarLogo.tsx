type NavbarLogoProps = { onClick: () => void };

export const NavbarLogo = ({ onClick }: NavbarLogoProps) => {
  return (
    <div className="items-center box-border flex min-h-[auto] min-w-[auto]">
      <button
        onClick={onClick}
        aria-label="Kai Andreic"
        className="block min-h-[auto] min-w-[auto] cursor-pointer bg-transparent border-none p-0"
      >
        <span className="leading-[18px] border-b-2 border-solid border-transparent hover:border-black transition-colors duration-200 font-m text-[14px]">
          {" "}
          Kai Andreic{" "}
        </span>
      </button>
    </div>
  );
};
