import type { Color } from "../types/task";
import type { Col } from "../types/task";

export const columnColors: Color[] = [
  {
    textColor: "text-blue-900",
    backgroundColor: "bg-blue-500/10",
    circleColor: "bg-blue-500",
  },
  {
    textColor: "text-yellow-900",
    backgroundColor: "bg-yellow-500/10",
    circleColor: "bg-yellow-500",
  },
  {
    textColor: "text-green-900",
    backgroundColor: "bg-green-500/10",
    circleColor: "bg-green-500",
  },
  {
    textColor: "text-purple-900",
    backgroundColor: "bg-purple-500/10",
    circleColor: "bg-purple-500",
  },
  {
    textColor: "text-pink-900",
    backgroundColor: "bg-pink-500/10",
    circleColor: "bg-pink-500",
  },
  {
    textColor: "text-red-900",
    backgroundColor: "bg-red-500/10",
    circleColor: "bg-red-500",
  },
  {
    textColor: "text-teal-900",
    backgroundColor: "bg-teal-500/10",
    circleColor: "bg-teal-500",
  },
  {
    textColor: "text-orange-900",
    backgroundColor: "bg-orange-500/10",
    circleColor: "bg-orange-500",
  },
];

export const columnsInitialState: Col[] = [
  {
    id: crypto.randomUUID(),
    title: "To do",
    tasks: [],
    color: columnColors[0],
  },
  {
    id: crypto.randomUUID(),
    title: "In Progress",
    tasks: [],
    color: columnColors[1],
  },
  {
    id: crypto.randomUUID(),
    title: "Done",
    tasks: [],
    color: columnColors[2],
  },
];
