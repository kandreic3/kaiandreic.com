import { useAuth } from "@animaapp/playground-react-sdk";
import { Button } from "./Button";
import { FormSelect } from "./FormSelect";

export interface HeaderProps {
  className: string;
  visible: boolean;
}

export const Header = ({
  className,
  visible = true,
}: HeaderProps): JSX.Element => {
  const { user, isAnonymous, login, logout } = useAuth();

  return (
    <div
      className={`flex w-[1280px] h-[120px] items-center justify-center gap-2.5 px-20 py-1.5 relative top-[83px] left-[1534px] bg-[#d9d9d9] ${className}`}
    >
      <div className="justify-around gap-[773px] flex-1 grow flex items-center relative">
        <div className="justify-center w-fit mt-[-1.00px] font-h1 font-[number:var(--h1-font-weight)] text-black text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] whitespace-nowrap flex items-center relative [font-style:var(--h1-font-style)]">
          LOGO
        </div>
      </div>
      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        {visible && (
          <FormSelect
            className="!h-[37px] !left-[unset] !w-80 !top-[unset]"
            text="Select Course"
            dropdownClassName=""
          />
        )}
        {!isAnonymous && user && (
          <span className="font-body-1 text-[length:var(--body-1-font-size)] text-[#1e1e1e]">
            {user.name}
          </span>
        )}
        {isAnonymous ? (
          <Button
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            text="LOGIN"
            onClick={login}
          />
        ) : (
          <>
            <Button
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              text="PROFILE"
            />
            <Button
              className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
              text="LOGOUT"
              onClick={logout}
            />
          </>
        )}
      </div>
    </div>
  );
};
