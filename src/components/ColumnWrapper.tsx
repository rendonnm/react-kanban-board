import type { Col, Task } from "../types/task";
import { type HandleDropProps } from "../hooks/useBoard";

interface ColumnWrapperProps {
  id?: Col["id"];
  children: React.ReactNode;
  color?: string;
  handleDrop: ({ toColId, data }: HandleDropProps) => void;
}

export function ColumnWrapper({
  children,
  color = "",
  id,
  handleDrop,
}: ColumnWrapperProps) {
  return (
    <article
      className={`${color} flex flex-col h-fit backdrop-blur-xs backdrop-brightness-115 min-w-86 w-86 
     max-h-full rounded-lg overflow-y-hidden shadow-md border border-transparent hover:border-white/50`}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (!id) return;
        const rawData = e.dataTransfer.getData("card-info");
        const fromId = e.dataTransfer.getData("from-column-id") as Col["id"];

        if (id === fromId) return;

        const data: Task = JSON.parse(rawData);
        handleDrop({ fromColId: fromId, toColId: id, data });
      }}
    >
      {children}
    </article>
  );
}
