import { Button } from "@atoms/Button";
import { ButtonContent } from "@atoms/Button/ButtonContent";
import { ButtonIcon } from "@atoms/Button/ButtonIcon";
import { Input } from "@atoms/Input";
import { InputControl } from "@atoms/Input/InputControl";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { ComponentProps } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { TaskType } from "../../../shared/models/Task";

const createTaskFormSchema = z.object({
  id: z.string().optional(),
  content: z.string().min(6, "Informe uma tarefa!"),
  concluded: z.boolean().default(false),
});

type createTaskFormData = z.infer<typeof createTaskFormSchema>;

interface FormProps extends ComponentProps<"form"> {
  onCreateTask: (task: TaskType) => void;
}

export function Form({ onCreateTask, ...props }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<createTaskFormData>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      concluded: false,
    },
  });

  function handleCreateTask(data: TaskType) {
    data.id = self.crypto.randomUUID();
    onCreateTask(data);
    reset();
  }

  return (
    <form
      className="flex gap-2"
      {...props}
      onSubmit={handleSubmit(handleCreateTask)}
    >
      <Input className=" inline-flex flex-col">
        <InputControl
          placeholder="Adicione uma nova tarefa"
          className="h-[54px] w-[632px] rounded-lg bg-gray-500 p-4 text-gray-100 focus:border-[1px] focus:border-purple-dark focus:outline-none"
          fieldRegister={register("content")}
        />

        {errors.content && (
          <span className="text-danger">{errors.content.message}</span>
        )}
      </Input>

      <Button type="submit" disabled={isSubmitting}>
        <ButtonContent text="Criar" className="text-gray-100" />

        <ButtonIcon>
          <PlusCircle className="text-gray-100" size={16} />;
        </ButtonIcon>
      </Button>
    </form>
  );
}
