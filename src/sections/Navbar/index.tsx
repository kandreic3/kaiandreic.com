import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarCenter } from "@/sections/Navbar/components/NavbarCenter";

const NAV_LINKS = [
  { label: "Index", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#top") {
      if (!isHome) {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="top"
      className={`fixed box-border w-full z-50 left-0 top-0 transition-all duration-500 ${scrolled ? "nav-scrolled" : "bg-transparent"}`}
    >
      <div className="mx-auto w-full px-[clamp(12px,2.4vw,30px)]">
        <div className="relative grid grid-cols-[1fr_auto_1fr] items-center animate-slide-down py-4 md:py-5">
          <NavbarLogo onClick={() => handleNavClick("#top")} />
          <NavbarCenter onClick={() => handleNavClick("#top")} />

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-end gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-m border-b-2 border-transparent hover:border-black transition-colors duration-200 leading-[16.8px] cursor-pointer bg-transparent"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 flex flex-col gap-[5px] group cursor-pointer"
            >
              <span
                className={`block w-5 h-[1.5px] bg-black transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-black transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-black transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-0 z-40 flex flex-col mobile-menu-enter"
          style={{ backgroundColor: "#fdfaf5" }}
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-black/10">
            <button
              onClick={() => handleNavClick("#top")}
              className="text-sm font-m"
            >
              Kai Andreic
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 flex flex-col gap-[5px] cursor-pointer"
            >
              <span className="block w-5 h-[1.5px] bg-black rotate-45 translate-y-[3.5px]" />
              <span className="block w-5 h-[1.5px] bg-black -rotate-45 -translate-y-[3.5px]" />
            </button>
          </div>
          <nav className="flex flex-col px-5 pt-10 gap-6">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{ animationDelay: `${i * 0.07}s` }}
                className="animate-slide-up-menu text-left text-[32px] font-b tracking-[-1.5px] leading-none border-b border-black/10 pb-4 hover:opacity-60 transition-opacity duration-200 cursor-pointer bg-transparent"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
