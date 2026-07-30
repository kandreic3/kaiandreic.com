export const ShowroomSection = () => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-[60px] px-5">
      <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] min-h-[auto] min-w-[auto]">
        <h2 className="text-[47.5px] box-border caret-transparent col-end-[span_12] col-start-[span_12] tracking-[-2.375px] leading-[47.5px] min-h-[auto] min-w-[auto] font-b md:text-[65.6px] md:col-end-[span_9] md:col-start-[span_9] md:tracking-[-3.28px] md:leading-[65.6px]" style={{fontFamily: "'PP Editorial Old', 'PPEditorialOld', Georgia, serif", fontWeight: 400, fontFeatureSettings: '"liga" 1, "calt" 1, "dlig" 1, "kern" 1', fontVariantLigatures: 'common-ligatures discretionary-ligatures contextual'}}>
          {" "}
          Here are some of my other passions outside&nbsp;of&nbsp;design
        </h2>
      </div>
    </div>
  );
};
