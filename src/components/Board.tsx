import { Column } from "./Column";
import { Modal } from "./Modal";
import { CreateColumnForm } from "./CreateColumnForm";
import { CreateTaskForm } from "./CreateTaskForm";
import { useBoard } from "../hooks/useBoard";
import { AddColumn } from "./AddColumn";
import { ColumnWrapper } from "./ColumnWrapper";

export function Board() {
  const {
    actualColum,
    cols,
    isOpenCreateColumn,
    isOpenCreateTask,
    handleAddCol,
    handleAddTask,
    handleOpenCreateColumn,
    handleOpenCreateTask,
  } = useBoard();

  return (
    <>
      <Modal isOpen={isOpenCreateColumn} handleOpen={handleOpenCreateColumn}>
        <CreateColumnForm
          handleAddCol={handleAddCol}
          handleOpenModal={handleOpenCreateColumn}
        />
      </Modal>

      <Modal isOpen={isOpenCreateTask} handleOpen={handleOpenCreateTask}>
        <CreateTaskForm
          handleOpenModal={handleOpenCreateTask}
          handleAddTask={handleAddTask}
          actualColumn={actualColum}
        />
      </Modal>

      <section className="w-full h-full p-3 flex gap-3 overflow-x-auto overflow-y-hidden">
        {cols.map((col) => (
          <Column
            key={col.id}
            title={col.title}
            tasks={col.tasks}
            handleOpenCreateTask={() => handleOpenCreateTask(col.id)}
          />
        ))}
        <ColumnWrapper>
          <AddColumn handleOpenCreateColumn={handleOpenCreateColumn} />
        </ColumnWrapper>
      </section>
    </>
  );
}
