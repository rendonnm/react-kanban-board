import { Column } from "./Column";
import { AddColumnIcon } from "./Icons";

export function Board() {
  return (
    <section className="w-full h-full p-6 flex gap-6 overflow-x-scroll overflow-y-hidden">
      <Column title="To do" tasks={[]} />
      <Column title="Doing" tasks={[]} />
      <Column title="Done" tasks={[]} />
      <article className="h-full text-gray-500">
        <button className="flex gap-1 cursor-pointer">
          <AddColumnIcon />
          <p>Add column</p>
        </button>
      </article>
    </section>
  );
}
