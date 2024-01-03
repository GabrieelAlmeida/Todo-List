import { Button } from "@atoms/Button";
import { ButtonContent } from "@atoms/Button/ButtonContent";
import { ButtonIcon } from "@atoms/Button/ButtonIcon";
import { Input } from "@atoms/Input";
import { InputControl } from "@atoms/Input/InputControl";
import { PlusCircle } from "lucide-react";
import { ComponentProps } from "react";

type FormProps = ComponentProps<"form">;

export function Form(props: FormProps) {
  function handleNewTask() {
    alert("oi");
  }

  return (
    <form className="flex gap-2" {...props}>
      <Input className="inline-flex flex-col">
        <InputControl
          placeholder="Adicione uma nova tarefa"
          className="h-14 w-[632px] rounded-lg bg-gray-500 p-4 text-gray-100 focus:border-[1px] focus:border-purple-dark focus:outline-none"
        />
      </Input>

      <Button onClick={handleNewTask} type="submit">
        <ButtonContent text="Criar" className="text-gray-100" />

        <ButtonIcon>
          <PlusCircle className="text-gray-100" size={16} />;
        </ButtonIcon>
      </Button>
    </form>
  );
}
