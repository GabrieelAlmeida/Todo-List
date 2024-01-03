import { ComponentProps } from "react";

type ButtonIconProps = ComponentProps<"div">;

export function ButtonIcon({ ...props }: ButtonIconProps) {
  return <div {...props} className="flex items-center justify-center"></div>;
}
