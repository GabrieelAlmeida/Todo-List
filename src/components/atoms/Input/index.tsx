import { ComponentProps } from "react";

type InputProps = ComponentProps<"div">;

export function Input(props: InputProps) {
  return <div {...props}></div>;
}
