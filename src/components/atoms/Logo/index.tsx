import { ComponentProps } from "react";

//interface logoProps extends ComponentProps<"img"> {}
type LogoProps = ComponentProps<"img">;

export function Logo({ ...props }: LogoProps) {
  return (
    <>
      <img {...props} />
    </>
  );
}
