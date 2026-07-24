export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] pb-5 px-5">
      <div className="box-border caret-transparent col-end-[span_6] col-start-[span_6] min-h-[auto] min-w-[auto]">
      </div>
      <div className="box-border caret-transparent hidden col-end-[span_3] col-start-[span_3] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
        <a
          href="#"
          className="box-border caret-transparent border-b-2 border-solid border-transparent hover:border-black"
        >
          {" "}
          Back to top{" "}
        </a>
        ↑
      </div>
      <div className="box-border caret-transparent col-end-[span_6] col-start-[span_6] min-h-[auto] min-w-[auto] text-right md:col-end-[span_3] md:col-start-[span_3]">
        &#169; Kai Andreic
      </div>
    </div>
  );
};
