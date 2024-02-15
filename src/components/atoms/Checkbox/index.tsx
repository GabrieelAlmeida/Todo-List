import { ComponentProps } from "react";

type CheckboxProps = ComponentProps<"input">;

export function Checkbox(props: CheckboxProps) {
  return (
    <input
      className="flex h-6 w-6 appearance-none justify-center rounded-full border-2 border-blue checked:border-none checked:bg-purple-dark checked:after:text-slate-100 checked:after:content-['\2713']"
      {...props}
      type="checkbox"
    />
  );
}
