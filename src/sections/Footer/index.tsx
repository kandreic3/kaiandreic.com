import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <div className="bg-red-200 box-border caret-transparent mt-[90px]">
      <FooterLinks />
      <FooterBrand />
      <FooterBottom />
    </div>
  );
};
