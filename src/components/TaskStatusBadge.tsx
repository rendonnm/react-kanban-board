import { TASK_STATUS, TASK_STATUS_COLORS } from "../constants/tasks";
import type { Task } from "../types/task";

interface TaskStatusBadgesProps {
  status: Task["status"];
}

export function TaskStatusBadges({ status }: TaskStatusBadgesProps) {
  const { textColor, backgroundColor, circleColor } =
    TASK_STATUS_COLORS[status];

  return (
    <div
      className={`flex px-2 py-1 rounded-lg items-center gap-2 ${backgroundColor}`}
    >
      <div className={`size-2 rounded-full ${circleColor}`}></div>
      <p className={`text-xs  font-medium ${textColor}`}>
        {TASK_STATUS[status]}
      </p>
    </div>
  );
}
