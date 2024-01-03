import { Logo } from "@atoms/Logo";
import { Form } from "@molecules/Form";
import logo from "@assets/Logo.svg";
import { ComponentProps } from "react";

type HeaderProps = ComponentProps<"header">;

export function Header(prop: HeaderProps) {
  return (
    <header className="h-[12.5rem] bg-gray-700">
      <Logo src={logo} alt="" />

      <Form />
    </header>
  );
}
