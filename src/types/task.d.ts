import { TASK_STATUS } from "../constants/tasks";

export type Id = `${string}-${string}-${string}-${string}-${string}`;

export interface Task {
  id: Id;
  title: string;
  description: string;
  status: TaskStatus;
  asignees: string[];
  date: Date;
  comments: string[];
  links: string[];
  subTasks: Task[];
}

interface Col {
  id: Id;
  title: string;
  tasks: Task[];
}

export type TaskStatus = keyof typeof TASK_STATUS;
