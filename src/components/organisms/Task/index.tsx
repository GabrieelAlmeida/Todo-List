import { ComponentProps, ReactNode } from "react";

interface TaskProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function Task({ children, ...props }: TaskProps) {
  return (
    <div
      className="flex min-h-[80px] items-center space-x-4 rounded-xl bg-gray-500 pl-4 pr-4"
      {...props}
    >
      {children}
    </div>
  );
}
