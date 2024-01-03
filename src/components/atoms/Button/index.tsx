import { ComponentProps } from "react";

//type ButtonProps = ComponentProps<"button">;
interface ButtonProps extends ComponentProps<"button"> {
  //text: string;
  //icon?: React.ReactNode //esse icon pode gerar muita especificação (qual icon, estilo do icon e etc) - Usar Composition Pattern;
}

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-button h-button inline-flex items-center justify-center gap-2 rounded-lg bg-blue-dark p-4 hover:bg-blue"
    ></button>
  );
}
