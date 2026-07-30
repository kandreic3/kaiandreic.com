export const ContactBanner = () => {
  return (
    <div className="relative aspect-auto box-border caret-transparent flex flex-col justify-between mb-[-150px] min-h-[auto] min-w-[auto] w-full overflow-hidden px-5 py-[60px] md:aspect-[1500_/_600]">
      <div className="absolute box-border caret-transparent h-full pointer-events-none w-full overflow-hidden left-0 top-0">
        <img
          src="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050043/IMG_0335_tbne9p.jpg"
          alt=""
          className="aspect-[auto_1500_/_716] box-border caret-transparent h-full max-w-full object-cover w-full scale-110"
        />
        <div className="absolute backdrop-blur-sm box-border caret-transparent h-full w-full left-0 top-0"></div>
      </div>
      <div className="absolute bg-orange-50 box-border caret-transparent h-full opacity-30 w-full z-10 left-0 top-0"></div>
      <div className="relative box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] min-h-[auto] min-w-[auto] z-10 pb-40 md:pb-0">
        <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] md:col-end-[span_6] md:col-start-[span_6]">
          <span className="box-border caret-transparent pr-5"> Contact / </span>
          If you&#39;re ready to start a project, have any questions, or simply
          want to learn more, feel free to reach out. I look forward to hearing
          from you and discussing how we can bring your vision to life.
        </div>
      </div>
      <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] z-10">
        <a
          href="https://farahgorayeb.com/contact/"
          className="text-[37.625px] box-border caret-transparent tracking-[-1.88125px] leading-[45.15px] border-b-4 border-solid font-b md:text-[51.2px] md:tracking-[-2.56px] md:leading-[61.44px] md:border-b-[6px] hover:border-transparent"
        >
          Book a Consultation
        </a>
      </div>
    </div>
  );
};
