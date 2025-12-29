import { type ReactNode } from "react";
import { RestartIcon, TrashIcon } from "./Icons";

export function Header() {
  return (
    <header
      className="px-6 py-3 flex justify-between
    bg-[#00000035]
    backdrop-blur-sm
    text-white
    "
    >
      <h1 className="text-2xl font-semibold">Tasks 📚</h1>
      <aside className="flex gap-2">
        <HeaderButton icon={<TrashIcon />} label="Clear board" />
        <HeaderButton icon={<RestartIcon />} label="Reset to initial state" />
      </aside>
    </header>
  );
}

interface HeaderButtonProps {
  icon: ReactNode;
  label: string;
}

function HeaderButton({ icon, label }: HeaderButtonProps) {
  return (
    <button className="flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 text-sm cursor-pointer">
      {icon}
      {label}
    </button>
  );
}
