export const FooterBrand = () => {
  return (
    <div className="relative box-border caret-transparent overflow-hidden my-28 px-5">
      <div className="relative text-[47.5px] box-border caret-transparent flex flex-wrap justify-between tracking-[-2.375px] leading-[47.5px] z-[1] py-12 md:text-[65.6px] md:tracking-[-3.28px] md:leading-[65.6px]">
        <div
          className="font-editorial text-[47.5px] box-border caret-transparent tracking-[-2.375px] leading-[47.5px] min-h-[auto] min-w-[auto] mr-2 md:text-[65.6px] md:tracking-[-3.28px] md:leading-[65.6px]"
          style={{
            fontFamily: "var(--font-editorial)",
            fontWeight: 400,
            fontFeatureSettings: '"liga" 1, "calt" 1, "dlig" 1',
            fontVariantLigatures:
              "common-ligatures discretionary-ligatures contextual",
          }}
        >
          Kai Andreic
        </div>
        <div
          className="font-editorial text-[47.5px] box-border caret-transparent tracking-[-2.375px] leading-[47.5px] min-h-[auto] min-w-[auto] md:text-[65.6px] md:tracking-[-3.28px] md:leading-[65.6px]"
          style={{
            fontFamily: "var(--font-editorial)",
            fontWeight: 400,
            fontFeatureSettings: '"liga" 1, "calt" 1, "dlig" 1',
            fontVariantLigatures:
              "common-ligatures discretionary-ligatures contextual",
          }}
        >
          {" "}
          Product Designer
        </div>
      </div>
      <div className="absolute box-border caret-transparent flex h-full justify-center pointer-events-none w-full z-0 left-0 top-0">
        <div className="relative aspect-[124_/_156] box-border caret-transparent min-h-[auto] min-w-[auto]">
          <div className="absolute aspect-[124_/_156] box-border caret-transparent opacity-0 left-0 top-0 md:opacity-100">
            <img
              src="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1784070460/IMG_0347_zot3zi.jpg"
              alt=""
              className="box-border caret-transparent h-full max-w-full w-full"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div className="absolute aspect-[124_/_156] box-border caret-transparent opacity-100 left-0 top-0 md:opacity-0">
            <img
              src="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1784070460/IMG_0347_zot3zi.jpg"
              alt=""
              className="box-border caret-transparent h-full max-w-full w-full"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
