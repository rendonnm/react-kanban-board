import { useState } from "react";
import type { Task, Id, TaskStatus } from "../types/task";
import { TASK_STATUS } from "../constants/tasks";

interface CreateColumnFormProps {
  handleAddTask: (task: Task) => void;
  handleOpenModal: () => void;
  actualColumn: Id | null;
}

export function CreateTaskForm({
  handleAddTask,
  handleOpenModal,
}: CreateColumnFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<TaskStatus>("new");

  function handleTitle(newTitle: string) {
    setTitle(newTitle);
  }

  function handleDescription(newDescription: string) {
    setDescription(newDescription);
  }

  function handleDate(newDate: string) {
    const formatDate = new Date(newDate);
    setDate(formatDate);
  }

  function handleStatus(newStatus: TaskStatus) {
    setStatus(newStatus);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddTask({
      id: crypto.randomUUID(),
      title,
      description,
      status,
      asignees: [],
      date,
      links: [],
      subTasks: [],
      comments: [],
    });
    handleOpenModal();
  }

  function closeModal() {
    handleTitle("");
    handleDescription("");
    handleDate("");
    handleStatus("new");
    handleOpenModal();
  }

  return (
    <form
      className="flex flex-col gap-5 w-2xl h-auto m-auto bg-white p-6 rounded-lg justify-between"
      action="submit"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <p className="text-3xl font-semibold text-center">Create Task</p>

      <div className="flex gap-5 items-center">
        <label className="" htmlFor="task-title">
          Title
        </label>
        <input
          type="text"
          id="task-title"
          name="task-title"
          value={title}
          onChange={(e) => handleTitle(e.target.value)}
          className="border border-gray-300 rounded-lg text-xl w-full"
          required
        />
      </div>

      <div className="flex gap-5 items-center">
        <label className="" htmlFor="task-description">
          Description
        </label>
        <textarea
          name="task-description"
          id="task-description"
          value={description}
          onChange={(e) => handleDescription(e.target.value)}
          className="border border-gray-300 rounded-lg text-xl w-full field-sizing-content max-h-40"
          required
        />
      </div>

      <div className="flex gap-5 items-center">
        <label className="" htmlFor="task-date">
          Date
        </label>
        <input
          name="task-date"
          id="task-date"
          type="date"
          onChange={(e) => handleDate(e.target.value)}
        />
      </div>

      <div className="flex gap-5 items-center">
        <label className="" htmlFor="column-name">
          Status
        </label>
        <select
          name="task-status"
          id="task-status"
          value={status}
          onChange={(e) => handleStatus(e.target.value as TaskStatus)}
        >
          {Object.entries(TASK_STATUS).map(([key, value]) => {
            return (
              <option key={key} value={key}>
                {value}
              </option>
            );
          })}
        </select>
      </div>

      <footer className="flex gap-4 justify-center">
        <button
          type="button"
          className="py-2 px-3 w-fit bg-gray-500 rounded-lg text-white self-center cursor-pointer"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 px-3 w-fit bg-blue-500 rounded-lg text-white self-center cursor-pointer"
        >
          Create task
        </button>
      </footer>
    </form>
  );
}
