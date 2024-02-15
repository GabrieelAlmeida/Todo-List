import { ComponentProps, ReactNode } from "react";

interface TaskIconProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function TaskIcon({ children, ...props }: TaskIconProps) {
  return <div {...props}>{children}</div>;
}
