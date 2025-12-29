import { AddColumnIcon } from "./Icons";

interface AddColumnProps {
  handleOpenCreateColumn: () => void;
}

export function AddColumn({ handleOpenCreateColumn }: AddColumnProps) {
  return (
    <section className="w-full h-full text-gray-500 flex  items-start justify-center py-2">
      <button
        className="w-full flex gap-2 cursor-pointer text-nowrap items-center justify-center"
        onClick={handleOpenCreateColumn}
      >
        <AddColumnIcon />
        <p>Add column</p>
      </button>
    </section>
  );
}
