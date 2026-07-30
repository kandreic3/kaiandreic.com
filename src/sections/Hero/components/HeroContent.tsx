import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-[60px] px-5">
      <HeroHeading />
      <HeroDescription />
    </div>
  );
};
