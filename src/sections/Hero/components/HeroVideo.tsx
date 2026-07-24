export const HeroVideo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden select-none" style={{backgroundColor: '#fdfaf5'}}>

      {/* Big editorial heading — left col fills width, right col has bio stacked below "Designer" */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-10 px-4 md:px-10">

        {/* Desktop: two-column grid so bio sits directly under "Designer" on the right */}
        <div className="hidden md:grid w-full" style={{gridTemplateColumns: '1fr auto'}}>
          {/* Left: Product + Designer */}
          <div className="flex flex-col">
            {/* "Product" — split coloring: the part overlapping the image = white, rest = black */}
            <div className="line-reveal-1 hero-editorial text-[16vw] pb-[0.18em] tracking-[-0.04em] whitespace-nowrap" style={{lineHeight: 1, color: '#1a1a1a'}}>
              Product
            </div>
            <div className="line-reveal-2 hero-editorial text-[16vw] pb-[0.22em] tracking-[-0.04em] text-[#1a1a1a] whitespace-nowrap" style={{lineHeight: 1}}>
              Designer
            </div>
          </div>

          {/* Right: empty space beside Product+Designer, then bio stacks BELOW Designer descender */}
          <div className="flex flex-col">
            {/* Spacer matching both Product + Designer lines so bio starts after the descender */}
            <div className="hero-editorial text-[16vw] pb-[0.18em] tracking-[-0.04em] whitespace-nowrap invisible" style={{lineHeight: 1}} aria-hidden="true">
              Product
            </div>
            <div className="hero-editorial text-[16vw] pb-[0.22em] tracking-[-0.04em] whitespace-nowrap invisible" style={{lineHeight: 1}} aria-hidden="true">
              Designer
            </div>
            {/* Bio sits fully below the Designer descender */}
            <div className="line-reveal-3 ml-10 max-w-[280px] text-[13px] leading-[1.6] tracking-normal font-m text-[#1a1a1a]/75 pointer-events-auto pt-4">
              With a passion for crafting intuitive and human-centered experiences, I design interfaces that feel effortless, meaningful, and memorable. My journey as a UX designer is rooted in empathy, research, and a deep love for how people interact with the&nbsp;world&nbsp;around&nbsp;them.
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col">
          <div className="line-reveal-1 hero-editorial text-[16vw] pb-[0.18em] tracking-[-0.04em] whitespace-nowrap" style={{lineHeight: 1, color: '#1a1a1a'}}>
            Product
          </div>
          <div className="line-reveal-2 hero-editorial text-[16vw] pb-[0.22em] tracking-[-0.04em] text-[#1a1a1a] whitespace-nowrap" style={{lineHeight: 1}}>
            Designer
          </div>
          <div className="line-reveal-3 mt-5 text-[13px] leading-[1.6] tracking-normal font-m text-[#1a1a1a]/75 pointer-events-auto">
            With a passion for crafting intuitive and human-centered experiences, I design interfaces that feel effortless, meaningful, and memorable.
          </div>
        </div>

      </div>
    </div>
  );
};
