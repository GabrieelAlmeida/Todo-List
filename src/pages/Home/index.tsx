import { Checkbox } from "@atoms/Checkbox";
import { Form } from "@molecules/Form";
import { NoData } from "@molecules/NoData";
import { Header } from "@organisms/Header";
import { Task } from "@organisms/Task";
import { TaskContent } from "@organisms/Task/TaskContent";
import { TaskIcon } from "@organisms/Task/TaskIcon";
import { TaskListStatus } from "@organisms/TaskListStatus";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { TaskType } from "../../shared/models/Task";

export function Home() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const taskStatusList = [
    { label: "Tarefas criadas", value: 0 },
    { label: "Concluídas", value: 0 },
  ];

  taskStatusList[0].value = taskList?.length;

  taskStatusList[1].value =
    taskList?.filter((task: TaskType) => task.concluded === true).length ?? 0;

  function handleCreateTask(newTask: TaskType) {
    const hasDuplicate = taskList.findIndex(
      (task: TaskType) =>
        task.content.toLowerCase() === newTask.content.toLowerCase(),
    );

    if (hasDuplicate < 0) {
      setTaskList((prevState: TaskType[]) => [...prevState, newTask]);
      toast.success("A tarefa foi adicionada com sucesso!");
    } else {
      toast.error("A tarefa já existe!");
    }
  }

  function handleDeleteTask(task: TaskType) {
    const newTaskList = taskList;
    newTaskList.splice(newTaskList.indexOf(task), 1);

    setTaskList((prevState) => [...newTaskList]);
    toast.success("A tarefa foi removida com sucesso!");
  }

  function handleConcludedTask(task: TaskType) {
    const newTask = task;
    newTask.concluded = !newTask.concluded;

    const newTaskList = taskList;
    newTaskList.splice(newTaskList.indexOf(task), 1, newTask);

    setTaskList((prevState) => [...newTaskList]);
  }

  return (
    <main className="h-screen bg-gray-600">
      <Header />

      <div className="-mt-8 flex flex-col items-center justify-center gap-[53px]">
        <Form onCreateTask={handleCreateTask} />

        <div className="flex flex-col gap-6">
          <TaskListStatus statusList={taskStatusList} />

          {taskList.length === 0 && <NoData />}

          {taskList.map((task: TaskType) => {
            return (
              <Task
                key={task.id}
                data-concluded={task.concluded}
                className="flex min-h-[80px] items-center space-x-4 rounded-xl border-[0.1px] border-gray-300  bg-gray-500 pl-4 pr-4 data-[concluded=true]:border-none"
              >
                <Checkbox onChange={() => handleConcludedTask(task)} />

                <TaskContent
                  data-concluded={task.concluded}
                  text={task.content}
                  className="flex-1 text-sm text-gray-100 data-[concluded=true]:text-gray-300 data-[concluded=true]:line-through"
                />

                <TaskIcon
                  className="text-gray-300 hover:text-danger"
                  onClick={() => handleDeleteTask(task)}
                >
                  <Trash2 className="hover:bg-gray-400 hover:text-danger" />
                </TaskIcon>
              </Task>
            );
          })}
        </div>
      </div>
    </main>
  );
}
