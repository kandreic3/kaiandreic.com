import { ShowroomCard } from "@/sections/ShowroomSection/components/ShowroomCard";

export const ShowroomGrid = () => {
  return (
    <div className="box-border caret-transparent mb-[-30px] overflow-x-auto overflow-y-hidden pb-[30px] hide-scrollbar scroll-row" style={{paddingLeft: '0', paddingRight: '20px'}}>
      <div className="relative items-end caret-transparent flex h-full w-max md:w-full z-[1]" style={{paddingLeft: '20px'}}>
        <ShowroomCard
          ariaLabel="1 / 7"
          imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050713/IMG_0108_zssptz.jpg"
          imageClassName="aspect-[auto_3_/_4]"
          linkHref="#"
          linkText="Flowers"
          containerClassName="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(55vw_-_10px)] mr-5 md:w-[calc(22.22%_-_16px)]"
        />
        <ShowroomCard
          ariaLabel="2 / 7"
          imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050673/IMG_0509_rkdyno.jpg"
          imageClassName="aspect-[auto_3_/_4]"
          linkHref="#"
          linkText="Friends"
          containerClassName="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(55vw_-_10px)] mr-5 md:w-[calc(22.22%_-_16px)]"
        />
        <ShowroomCard
          ariaLabel="3 / 7"
          imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050744/IMG_0256_wvvu7q.jpg"
          imageClassName="aspect-[auto_3_/_4]"
          linkHref="#"
          linkText="Pets"
          containerClassName="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(55vw_-_10px)] mr-5 md:w-[calc(22.22%_-_16px)]"
        />
        <ShowroomCard
          ariaLabel="4 / 7"
          imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050753/IMG_0035_ip3p91.jpg"
          imageClassName="aspect-[auto_3_/_4]"
          linkHref="#"
          linkText="Art"
          containerClassName="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(55vw_-_10px)] mr-5 md:w-[calc(22.22%_-_16px)]"
        />
        <ShowroomCard
          ariaLabel="5 / 7"
          imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050766/IMG_3372_mx8h5m.jpg"
          imageClassName="aspect-[auto_3_/_4]"
          linkHref="#"
          linkText="Fashion"
          containerClassName="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(55vw_-_10px)] mr-5 md:w-[calc(22.22%_-_16px)]"
        />
        <ShowroomCard
          ariaLabel="6 / 7"
          imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050760/IMG_2965_sdo4wt.jpg"
          imageClassName="aspect-[auto_3_/_4]"
          linkHref="#"
          linkText="Architecture"
          containerClassName="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(55vw_-_10px)] mr-5 md:w-[calc(22.22%_-_16px)]"
        />
        <ShowroomCard
          ariaLabel="7 / 7"
          imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050772/IMG_2922_mso2zj.jpg"
          imageClassName="aspect-[auto_3_/_4]"
          linkHref="#"
          linkText="Food"
          containerClassName="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(55vw_-_10px)] mr-5 md:w-[calc(22.22%_-_16px)]"
        />
      </div>
      <span className="box-border caret-transparent"></span>
    </div>
  );
};
