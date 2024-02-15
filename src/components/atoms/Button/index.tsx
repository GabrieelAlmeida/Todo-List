import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="inline-flex h-button w-button items-center justify-center gap-2 rounded-lg bg-blue-dark p-4 hover:cursor-pointer hover:bg-blue"
    ></button>
  );
}
