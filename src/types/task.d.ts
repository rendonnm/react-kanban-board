import { TASK_STATUS } from "../constants/tasks";

export type Id = `${string}-${string}-${string}-${string}-${string}`;

export interface Task {
  id: Id;
  title: string;
  description: string;
  status: TaskStatus;
  asignees: string[];
  date: string;
  comments: string[];
  links: string[];
  subTasks: Task[];
}

interface Col {
  id: Id;
  title: string;
  tasks: Task[];
  color: Color;
}

export type TaskStatus = keyof typeof TASK_STATUS;

export interface Color {
  textColor: string;
  backgroundColor: string;
  circleColor: string;
}
