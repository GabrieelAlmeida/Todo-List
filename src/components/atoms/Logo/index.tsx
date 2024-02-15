import { ComponentProps } from "react";

type LogoProps = ComponentProps<"img">;

export function Logo({ ...props }: LogoProps) {
  return <img {...props} className="mb-20 mt-[4.5rem]" />;
}
