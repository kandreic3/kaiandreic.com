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
        aria-label="Youngjoon in Korean"
        className="text-[40px] md:text-[48px] leading-[0.9] tracking-[-0.02em] cursor-pointer select-none transition-transform duration-200 hover:scale-[1.04] active:scale-[0.985]"
        style={{
          fontFamily:
            "'Jalnan2', 'PP Neue Montreal', 'PPNouveauMontreal', sans-serif",
          fontWeight: 800,
          color: "#111111",
          textShadow:
            "0 1px 0 rgba(255,255,255,0.35), 0 2px 6px rgba(0,0,0,0.08)",
          transform: "translateY(0.5px)",
        }}
      >
        영준
      </span>
    </div>
  );
};
