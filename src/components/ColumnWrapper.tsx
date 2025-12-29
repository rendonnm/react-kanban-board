interface ColumnWrapperProps {
  children: React.ReactNode;
}

export function ColumnWrapper({ children }: ColumnWrapperProps) {
  return (
    <article
      className="
      flex flex-col
      h-fit
      bg-[#f6f8fa24] backdrop-blur-sm backdrop-brightness-115 min-w-86 w-86 
     max-h-full rounded-lg overflow-y-hidden shadow-md border border-transparent hover:border-white/50"
    >
      {children}
    </article>
  );
}
