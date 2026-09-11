type NavbarCenterProps = { onClick: () => void };

export const NavbarCenter = ({ onClick }: NavbarCenterProps) => {
  return (
    <div className="items-center box-border flex justify-center min-h-[auto] min-w-[auto]">
      <span
        role="link"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        aria-label="Youngjoon — Kai's Korean name"
        title="영준 — Kai's Korean name"
        className="text-[28px] md:text-[34px] leading-[0.9] tracking-[-0.02em] cursor-pointer select-none px-2 py-1 transition-opacity duration-200 hover:opacity-60"
        style={{
          fontFamily:
            "'Jalnan2', 'PP Neue Montreal', 'PPNouveauMontreal', sans-serif",
          fontWeight: 800,
          color: "#1a1714",
        }}
      >
        영준
      </span>
    </div>
  );
};
