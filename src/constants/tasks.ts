export const TASK_STATUS = {
  new: "New",
  active: "Active",
  resolved: "Resolved",
  closed: "Closed",
} as const;

export const TASK_STATUS_COLORS = {
  new: {
    textColor: "text-purple-900",
    backgroundColor: "bg-purple-100",
    circleColor: "bg-purple-400",
  },
  active: {
    textColor: "text-blue-900",
    backgroundColor: "bg-blue-100",
    circleColor: "bg-blue-500",
  },
  resolved: {
    textColor: "text-green-900",
    backgroundColor: "bg-green-100",
    circleColor: "bg-green-500",
  },
  closed: {
    textColor: "text-slate-700",
    backgroundColor: "bg-slate-100",
    circleColor: "bg-slate-400",
  },
} as const;
