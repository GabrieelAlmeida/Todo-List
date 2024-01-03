import { ComponentProps } from "react";

interface InputLabelProps extends ComponentProps<"label"> {
  text: string;
}
export function Label({ text, ...props }: InputLabelProps) {
  return <label {...props}>{text}</label>;
}
