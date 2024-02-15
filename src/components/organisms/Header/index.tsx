import logo from "@assets/Logo.svg";
import { Logo } from "@atoms/Logo";
import { ComponentProps, memo } from "react";

type HeaderProps = ComponentProps<"header">;

function HeaderComponent(props: HeaderProps) {
  return (
    <>
      <header
        className="flex h-[12.5rem] flex-col items-center justify-center bg-gray-700"
        {...props}
      >
        <Logo src={logo} alt="" />
      </header>
    </>
  );
}

export const Header = memo(HeaderComponent);
