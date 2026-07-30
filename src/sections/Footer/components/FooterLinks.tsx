import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-y-[60px] pt-5 px-5">
      <FooterColumn
        title="Menu"
        links={[
          { href: "#top", label: "Index" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <FooterColumn
        title="Socials"
        links={[
          {
            href: "https://www.instagram.com/kaiandreic/",
            label: "@kaiandreic",
          },
          { href: "https://www.linkedin.com/in/kai-andreic-107074193", label: "LinkedIn" },
        ]}
      />
      <FooterColumn
        title="Contact"
        links={[
          {
            href: "mailto:kandreic3@gmail.com",
            label: "kandreic3@gmail.com",
          },
          { href: "tel:4253507163", label: "425-350-7163" },
          {
            href: "https://maps.google.com/?q=Seattle,Washington",
            label: "Seattle, Washington",
          },
        ]}
        innerClassName="box-border caret-transparent flex flex-col gap-y-1.5"
        linkClassName="box-border caret-transparent border-b-2 border-solid border-transparent hover:border-black"
        wrapperTag="p"
      />
    </div>
  );
};
