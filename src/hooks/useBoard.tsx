import { useState } from "react";
import type { Task, Col, Id } from "../types/task";
import { columnColors, columnsInitialState } from "../constants/columns";

export interface HandleDropProps {
  fromColId: Col["id"];
  toColId: Col["id"];
  data: Task;
}

export function useBoard() {
  const [cols, setCols] = useState<Col[]>(columnsInitialState);
  const [isOpenCreateColumn, setIsOpenCreateColumn] = useState(false);
  const [isOpenCreateTask, setIsOpenCreateTask] = useState(false);
  const [actualColum, setActualColumn] = useState<Id | null>(null);

  function handleAddCol(colName: string) {
    if (colName.trim() === "") return;
    setCols((prev) => {
      const newArray = prev.map((col) => ({ ...col }));
      newArray.push({
        id: crypto.randomUUID(),
        title: colName,
        color: columnColors[newArray.length % columnColors.length],
        tasks: [],
      });
      return newArray;
    });
  }

  function handleAddTask(task: Task) {
    setCols((prev) => {
      const newArray = structuredClone(prev);
      const col = newArray.find((column) => column.id === actualColum);
      if (col) {
        const index = newArray.indexOf(col);
        newArray[index].tasks.push(task);
      }
      return newArray;
    });
  }

  function handleOpenCreateColumn() {
    setIsOpenCreateColumn((prev) => !prev);
  }

  function handleOpenCreateTask(id?: Id) {
    setIsOpenCreateTask((prev) => !prev);
    if (id == null) {
      setActualColumn(null);
    } else {
      setActualColumn(id);
    }
  }

  function handleDrop({ fromColId, toColId, data }: HandleDropProps) {
    const task = {
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      status: data.status,
      asignees: [],
      date: data.date,
      links: [],
      subTasks: [],
      comments: [],
    };

    setCols((prev) => {
      const newArray = structuredClone(prev);
      const toCol = newArray.find((column) => column.id === toColId);
      const fromCol = newArray.find((column) => column.id === fromColId);

      if (fromCol) {
        const index = newArray.indexOf(fromCol);
        newArray[index].tasks = newArray[index].tasks.filter(
          (task) => task.id !== data.id
        );
      }

      if (toCol) {
        const index = newArray.indexOf(toCol);
        newArray[index].tasks.push(task);
      }
      return newArray;
    });
  }

  return {
    actualColum,
    cols,
    isOpenCreateColumn,
    isOpenCreateTask,
    handleAddCol,
    handleAddTask,
    handleOpenCreateColumn,
    handleOpenCreateTask,
    handleDrop,
  };
}
