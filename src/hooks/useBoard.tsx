import { useState } from "react";
import type { Task, Col, Id } from "../types/task";
import { columnsInitialState } from "../constants/columns";

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
        tasks: [],
      });
      return newArray;
    });
  }

  function handleAddTask(task: Task) {
    setCols((prev) => {
      const newArray = structuredClone(prev);
      const col = newArray.find((task) => task.id === actualColum);
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

  return {
    actualColum,
    cols,
    isOpenCreateColumn,
    isOpenCreateTask,
    handleAddCol,
    handleAddTask,
    handleOpenCreateColumn,
    handleOpenCreateTask,
  };
}
