import type { Task } from "../types/task";
import { Card } from "./Card";
import { AddIcon } from "./Icons";

interface ColumnProps {
  title: string;
  tasks: Task[];
}

export function Column({ title, tasks }: ColumnProps) {
  return (
    <article className="bg-[#F6F8FA] min-w-86 w-86 h-full rounded-lg overflow-y-hidden border border-gray-200">
      <header className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="size-2 bg-amber-300 rounded-full"></div>
          <h2 className="text-gray-800 text-nowrap">{title}</h2>
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
            <AddIcon />
          </button>
          <button
            aria-label="Add task"
            type="button"
            className="flex items-center font-bold text-gray-500 cursor-pointer"
          >
            ⋯
          </button>
        </aside>
      </header>
      <section className="h-full w-full overflow-y-hidden ">
        <div className="h-full w-full flex flex-col gap-3 p-3 pb-15 overflow-y-scroll">
          {tasks.map((task) => (
            <Card
              key={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
