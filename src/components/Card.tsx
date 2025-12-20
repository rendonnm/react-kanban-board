import type { ReactNode } from "react";
import { CalendarIcon, CommentIcon, TaskIcon, LinkIcon } from "./Icons";
import type { Task } from "../types/task";
import { intl } from "../format/intl";
import { TASK_STATUS } from "../constants/tasks";

interface CardProps {
  title: Task["title"];
  description: Task["description"];
  status: Task["status"];
  date: Task["date"];
}

export function Card({ title, description, date, status }: CardProps) {
  return (
    <article className="flex flex-col bg-white rounded-lg p-3 w-full border border-gray-300 gap-2">
      <header className="flex justify-between items-center">
        <div className="flex bg-purple-100 px-2 py-1 rounded-lg items-center gap-2">
          <div className="size-2 rounded-full bg-purple-400"></div>
          <p className="text-xs text-purple-900 font-medium">
            {TASK_STATUS[status]}
          </p>
        </div>
        <aside>
          <button
            aria-label="Open details"
            type="button"
            className="flex items-center font-bold text-gray-500 cursor-pointer"
          >
            ⋯
          </button>
        </aside>
      </header>
      <div className="flex flex-col gap-2">
        <header>
          <h3 className="font-medium text-md">{title}</h3>
          <p className="text-sm font-light text-nowrap truncate text-gray-500">
            {description}
          </p>
        </header>
        <div className="flex justify-between items-centers">
          <p className="text-xs text-gray-500">Asignees:</p>
          <div className="flex items-center ">
            <div className="size-4 bg-yellow-400 rounded-full -ml-2 z-10"></div>
            <div className="size-4 bg-blue-400 rounded-full -ml-2 z-5"></div>
            <div className="size-4 bg-red-400 rounded-full -ml-2 z-0"></div>
          </div>
        </div>
        <div className="flex justify-between items-centers text-gray-500">
          <div className="flex gap-1 items-center">
            <CalendarIcon />
            <p className="text-xs font-light">{intl.format(date)}</p>
          </div>
          <PriorityChip label="Low" />
        </div>
      </div>
      <div>
        <div className="w-full bg-gray-200 h-px my-1"></div>
      </div>
      <footer className="flex gap-2 text-xs font-light text-gray-500">
        <FooterInfo icon={<CommentIcon />} label="5 comments" />
        <FooterInfo icon={<LinkIcon />} label="2 links" />
        <FooterInfo icon={<TaskIcon />} label="3/3" />
      </footer>
    </article>
  );
}

interface FooterInfoProps {
  icon: ReactNode;
  label: string;
}

function FooterInfo({ icon, label }: FooterInfoProps) {
  return (
    <div className="flex gap-1">
      {icon}
      <p>{label}</p>
    </div>
  );
}

interface PriorityChipProps {
  label: string;
}

function PriorityChip({ label }: PriorityChipProps) {
  return (
    <div className="flex gap-1 items-center">
      <p className="rounded-full text-xs bg-green-100 text-green-600 px-2 py-1">
        {label}
      </p>
    </div>
  );
}
