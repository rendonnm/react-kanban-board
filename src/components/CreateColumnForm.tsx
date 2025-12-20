import { useState } from "react";

interface CreateColumnFormProps {
  handleAddCol: (colName: string) => void;
  handleOpenModal: () => void;
}

export function CreateColumnForm({
  handleAddCol,
  handleOpenModal,
}: CreateColumnFormProps) {
  const [columnName, setColumnName] = useState("");

  function handleColumNameChange(newName: string) {
    setColumnName(newName);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddCol(columnName);
    handleOpenModal();
  }

  function closeModal() {
    handleColumNameChange("");
    handleOpenModal();
  }

  return (
    <form
      className="flex flex-col max-w-2xl min-h-56 m-auto bg-white p-6 rounded-lg justify-between"
      action=""
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <p className="text-3xl font-semibold text-center">Add column</p>
      <div className="flex gap-5 items-center">
        <label className="" htmlFor="column-name">
          Column name:
        </label>
        <input
          type="text"
          id="column-name"
          name="column-name"
          value={columnName}
          onChange={(e) => handleColumNameChange(e.target.value)}
          className="border border-gray-300 rounded-lg text-xl"
          required
        />
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
          Create column
        </button>
      </footer>
    </form>
  );
}
