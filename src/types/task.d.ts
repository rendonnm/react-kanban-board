export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  asignees: string[];
  date: Date;
  comments: string[];
  links: string[];
  subTasks: Task[];
}
