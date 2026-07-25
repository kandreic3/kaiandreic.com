import { Button } from "./components/Button";
import { FormCheckbox } from "./components/FormCheckbox";
import { FormInput } from "./components/FormInput";
import { FormSelect } from "./components/FormSelect";

export const StudentWorkflow = (): JSX.Element => {
  return (
    <div className="bg-[#444444] border border-solid border-[#ffffff1a] w-full min-w-[15000px] min-h-[6500px] relative">
      <div className="flex flex-col w-[1280px] h-[832px] items-center gap-6 pt-[100px] pb-[113px] px-[389px] absolute top-[454px] left-[653px] bg-[#d9d9d9]">
        <div className="relative w-fit mt-[-1.00px] font-h1 font-[number:var(--h1-font-weight)] text-[#1e1e1e] text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] whitespace-nowrap [font-style:var(--h1-font-style)]">
          Welcome to Chīmu
        </div>
        <div className="inline-flex flex-col items-center gap-8 pt-6 pb-10 px-10 relative flex-[0_0_auto] bg-[#ffffff] border-4 border-solid border-[#d9d9d9]">
          <div className="relative self-stretch mt-[-4.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#1e1e1e] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Login
          </div>
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-[120px] font-body-1 font-[number:var(--body-1-font-weight)] text-[#1e1e1e] text-[length:var(--body-1-font-size)] text-right tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
              Email
            </div>
            <FormInput className="!left-[unset] !top-[unset]" text="" />
          </div>
          <Button className="!left-[unset] !top-[unset]" text="SUBMIT" />
          <p className="relative self-stretch font-body-1 font-[number:var(--body-1-font-weight)] text-[#1e1e1e] text-[length:var(--body-1-font-size)] text-center tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
            If you do not have a login, talk to your course instructor.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[1280px] h-[832px] items-center gap-6 pt-[100px] pb-[113px] px-[389px] absolute top-[454px] left-[2183px] bg-[#d9d9d9]">
        <div className="relative w-fit mt-[-1.00px] font-h1 font-[number:var(--h1-font-weight)] text-[#1e1e1e] text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] whitespace-nowrap [font-style:var(--h1-font-style)]">
          Welcome to Chīmu
        </div>
        <div className="inline-flex items-center pt-6 pb-10 px-10 bg-[#ffffff] border-4 border-solid border-[#d9d9d9] flex-col gap-8 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-4.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#1e1e1e] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Login
          </div>
          <p className="relative self-stretch font-body-1 font-[number:var(--body-1-font-weight)] text-[#1e1e1e] text-[length:var(--body-1-font-size)] text-center tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
            A six-digit code has been sent to your email.
          </p>
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-[120px] font-body-1 font-[number:var(--body-1-font-weight)] text-[#1e1e1e] text-[length:var(--body-1-font-size)] text-right tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
              Enter code
            </div>
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <FormInput
                className="!h-[37px] !left-[unset] !w-[37px] !top-[unset]"
                text=""
              />
              <FormInput
                className="!h-[37px] !left-[unset] !w-[37px] !top-[unset]"
                text=""
              />
              <FormInput
                className="!h-[37px] !left-[unset] !w-[37px] !top-[unset]"
                text=""
              />
              <FormInput
                className="!h-[37px] !left-[unset] !w-[37px] !top-[unset]"
                text=""
              />
              <FormInput
                className="!h-[37px] !left-[unset] !w-[37px] !top-[unset]"
                text=""
              />
              <FormInput
                className="!h-[37px] !left-[unset] !w-[37px] !top-[unset]"
                text=""
              />
            </div>
          </div>
          <FormCheckbox
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            text="Keep me logged in for 4 weeks"
          />
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <Button
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              text="LOGIN"
            />
            <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#eb7500] text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] underline whitespace-nowrap [font-style:var(--link-font-style)]">
              Cancel
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[1280px] h-[832px] items-center gap-6 pt-[100px] pb-[113px] px-[390px] absolute top-[454px] left-[3713px] bg-[#d9d9d9]">
        <div className="relative w-fit mt-[-1.00px] font-h1 font-[number:var(--h1-font-weight)] text-[#1e1e1e] text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] whitespace-nowrap [font-style:var(--h1-font-style)]">
          Welcome to Chīmu
        </div>
        <div className="flex w-[400px] items-center pt-6 pb-10 px-10 bg-[#ffffff] border-4 border-solid border-[#d9d9d9] flex-col gap-8 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-4.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#1e1e1e] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Select course
          </div>
          <FormSelect
            className="!self-stretch !h-[37px] !left-[unset] !w-full !top-[unset]"
            dropdownClassName=""
          />
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <Button
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              text="SELECT"
            />
            <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#eb7500] text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] underline whitespace-nowrap [font-style:var(--link-font-style)]">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentWorkflow;
