import { ComponentProps } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputControlProps extends ComponentProps<"input"> {
  fieldRegister: UseFormRegisterReturn;
}

export function InputControl({ fieldRegister, ...props }: InputControlProps) {
  return <input {...props} {...fieldRegister} />;
}
