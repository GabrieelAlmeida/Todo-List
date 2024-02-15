interface TaskStatus {
  label: string;
  value: string | number;
}

interface TaskListStatusProps {
  statusList: TaskStatus[];
}

export function TaskListStatus({ statusList }: TaskListStatusProps) {
  return (
    <div className="flex min-w-[730px] items-center justify-between text-purple">
      <div className="flex gap-2">
        <p className="text-sm font-bold text-blue">{statusList[0].label}:</p>
        <span className="flex h-[19px] w-[25px] items-center justify-center rounded-full bg-gray-400 p-[4px] text-xs font-bold text-gray-200">
          {statusList[0].value}
        </span>
      </div>

      <div className="flex gap-2">
        <p className="text-sm font-bold text-purple">{statusList[1].label}:</p>
        <span className="flex h-[19px] w-auto min-w-[25px] items-center justify-center rounded-full bg-gray-400 p-[4px] text-xs font-bold text-gray-200">
          {statusList[1].value === 0
            ? statusList[1].value
            : statusList[1].value + " de " + statusList[0].value}
        </span>
      </div>
    </div>
  );
}
