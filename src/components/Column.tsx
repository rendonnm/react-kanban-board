import type { Task } from "../types/task";
import { Card } from "./Card";
import { ColumnWrapper } from "./ColumnWrapper";
import { AddIcon } from "./Icons";

interface ColumnProps {
  title: string;
  tasks: Task[];
  handleOpenCreateTask: () => void;
}

export function Column({ title, tasks, handleOpenCreateTask }: ColumnProps) {
  const haveTasks = tasks.length > 0;
  return (
    <ColumnWrapper>
      <header className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="size-2 bg-amber-300 rounded-full"></div>
          <h2 className="text-gray-800 text-nowrap font-medium">{title}</h2>
          <p className="px-2 py-1 bg-blue-700 text-white rounded-full text-xs">
            {tasks.length}
          </p>
        </div>
        <aside className="flex gap-3">
          <button
            aria-label="Add task"
            type="button"
            className="flex items-center font-bold text-gray-500 cursor-pointer"
          >
            ⋯
          </button>
        </aside>
      </header>
      <section className="h-full w-full overflow-y-auto">
        <div className="h-full w-full flex flex-col gap-3 px-3">
          {haveTasks &&
            tasks.map((task) => (
              <Card
                key={task.id}
                title={task.title}
                description={task.description}
                date={task.date}
                status={task.status}
              />
            ))}
        </div>
      </section>
      <footer className="flex items-center w-full px-3 py-2">
        <button
          aria-label="Add task"
          type="button"
          className=" text-sm
          flex items-center font-medium text-white cursor-pointer px-3 py-1 gap-1
          hover:bg-white/10 rounded-lg"
          onClick={handleOpenCreateTask}
        >
          <AddIcon />
          Add card
        </button>
      </footer>
    </ColumnWrapper>
  );
}
