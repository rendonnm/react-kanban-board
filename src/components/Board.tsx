import { Column } from "./Column";
import { AddColumnIcon } from "./Icons";
import { Modal } from "./Modal";
import { CreateColumnForm } from "./CreateColumnForm";
import { CreateTaskForm } from "./CreateTaskForm";
import { useBoard } from "../hooks/useBoard";

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

      <section className="w-full h-full p-6 flex gap-6 overflow-x-auto overflow-y-hidden">
        {cols.map((col) => (
          <Column
            key={col.id}
            title={col.title}
            tasks={col.tasks}
            handleOpenCreateTask={() => handleOpenCreateTask(col.id)}
          />
        ))}
        <article className="h-full text-gray-500">
          <button
            className="flex gap-1 cursor-pointer"
            onClick={handleOpenCreateColumn}
          >
            <AddColumnIcon />
            <p>Add column</p>
          </button>
        </article>
      </section>
    </>
  );
}
