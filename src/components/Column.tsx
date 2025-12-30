import type { Col, Color, Task } from "../types/task";
import { Card } from "./Card";
import { AddIcon } from "./Icons";

interface ColumnProps {
  id: Col["id"];
  title: string;
  tasks: Task[];
  color: Color;
  handleOpenCreateTask: () => void;
}

export function Column({
  id,
  title,
  tasks,
  color,
  handleOpenCreateTask,
}: ColumnProps) {
  const haveTasks = tasks.length > 0;
  return (
    <>
      <header className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className={`size-2 ${color.circleColor} rounded-full`}></div>
          <h2 className={`${color.textColor} text-nowrap font-semibold`}>
            {title}
          </h2>
          <p
            className={`px-2 py-1 ${color.circleColor} text-white rounded-full text-xs`}
          >
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
        <ul className="h-full w-full flex flex-col gap-3 px-3">
          {haveTasks &&
            tasks.map((task) => (
              <li key={task.id}>
                <Card
                  taskId={task.id}
                  title={task.title}
                  description={task.description}
                  date={task.date}
                  status={task.status}
                  columnId={id}
                />
              </li>
            ))}
        </ul>
      </section>
      <footer className="flex items-center w-full px-3 py-2">
        <button
          aria-label="Add task"
          type="button"
          className="text-sm
          flex items-center font-medium text-white cursor-pointer px-3 py-1 gap-1
          hover:bg-white/10 rounded-lg"
          onClick={handleOpenCreateTask}
        >
          <AddIcon />
          Add card
        </button>
      </footer>
    </>
  );
}
