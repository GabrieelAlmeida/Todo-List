import { BookText } from "lucide-react";

export function NoData() {
  return (
    <div className="flex min-w-[730px] flex-col items-center justify-center space-y-4 border-t-2 border-t-gray-300 pt-20 text-base text-gray-300">
      <BookText size={56} />
      <div>
        <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
