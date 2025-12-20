import type { ReactNode } from "react";
import { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  handleOpen: () => void;
}

export function Modal({ isOpen, children, handleOpen }: ModalProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent<HTMLDialogElement, MouseEvent>) {
    if (e.target === elementRef.current) {
      handleOpen();
    }
  }

  return (
    <dialog
      open={isOpen}
      className="absolute w-full h-full top-0 bg-black/30 z-999"
      onClick={handleClick}
    >
      <div ref={elementRef} className="flex h-full w-full">
        {children}
      </div>
    </dialog>
  );
}
