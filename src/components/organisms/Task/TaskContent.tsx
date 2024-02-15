import { ComponentProps } from "react";

interface TaskContentProps extends ComponentProps<"p"> {
  text: string;
}
export function TaskContent({ text, ...props }: TaskContentProps) {
  return <p {...props}>{text}</p>;
}
