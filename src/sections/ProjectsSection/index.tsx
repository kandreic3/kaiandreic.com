import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { ProjectsLink } from "@/sections/ProjectsSection/components/ProjectsLink";

export const ProjectsSection = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
      <div className="box-border caret-transparent mb-[-30px] overflow-hidden pb-[30px] px-5">
        <div className="relative items-end caret-transparent flex h-full w-full z-[1] mx-auto">
          <ProjectCard
            ariaLabel="1 / 4"
            className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(66.66%_-_10px)] mr-5 md:w-[calc(40%_-_13.3333px)]"
            imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050250/Burke_Museum_pzgb10.png"
            href="/burkemuseum"
            linkText="Burke Museum"
          />
          <ProjectCard
            ariaLabel="2 / 4"
            className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(66.66%_-_10px)] mr-5 md:w-[calc(40%_-_13.3333px)]"
            imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050021/Chimu_escc5h.png"
            href="/chimu"
            linkText="Chimu"
          />
          <ProjectCard
            ariaLabel="3 / 4"
            className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(66.66%_-_10px)] mr-5 md:w-[calc(40%_-_13.3333px)]"
            imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777049980/Recognize_w98sxb.png"
            href="#"
            linkText="Recognize.app"
          />
          <ProjectCard
            ariaLabel="4 / 4"
            className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[calc(66.66%_-_10px)] md:w-[calc(40%_-_13.3333px)]"
            imageSrc="https://res.cloudinary.com/dkdwqtlzz/image/upload/v1777050104/Ocean_Watch_Thumbnail_as4zjx.png"
            href="/oceanwatch"
            linkText="Ocean Watch"
          />
        </div>
        <span className="box-border caret-transparent"></span>
      </div>
      <ProjectsLink />
    </div>
  );
};
