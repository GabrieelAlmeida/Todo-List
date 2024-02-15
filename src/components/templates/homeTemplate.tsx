import { Checkbox } from "@atoms/Checkbox";
import { Header } from "@organisms/Header";
import { Task } from "@organisms/Task";
import { TaskContent } from "@organisms/Task/TaskContent";
import { TaskIcon } from "@organisms/Task/TaskIcon";
import { TaskListStatus } from "@organisms/TaskListStatus";
import { Trash2 } from "lucide-react";

const taskStatusList = [
  { label: "Lorem Ipsum", value: 0 },
  { label: "Lorem Ipsum", value: 0 },
];

export function HomeTemplate() {
  return (
    <main className="h-screen bg-gray-600">
      <Header />

      <div className="mt-20 flex flex-col items-center justify-center space-y-6">
        <TaskListStatus statusList={taskStatusList} />

        <Task>
          <Checkbox />

          <TaskContent text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />

          <TaskIcon className="text-gray-300 hover:text-danger">
            <Trash2 className="hover:bg-gray-400 hover:text-danger" />
          </TaskIcon>
        </Task>
      </div>
    </main>
  );
}
