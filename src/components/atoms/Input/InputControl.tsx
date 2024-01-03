import { ComponentProps } from "react";

type InputControlProps = ComponentProps<"input">;

export function InputControl(props: InputControlProps) {
  return <input {...props} />;
}
