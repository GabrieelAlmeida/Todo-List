import { ComponentProps } from "react";

interface ButtonContentProps extends ComponentProps<"p"> {
  text?: string;
}

export function ButtonContent({ text, ...props }: ButtonContentProps) {
  return <p {...props}>{text}</p>;
}
