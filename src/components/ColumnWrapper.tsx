interface ColumnWrapperProps {
  children: React.ReactNode;
  color?: string;
}

export function ColumnWrapper({ children, color = "" }: ColumnWrapperProps) {
  return (
    <article
      className={`${color} flex flex-col h-fit backdrop-blur-xs backdrop-brightness-115 min-w-86 w-86 
     max-h-full rounded-lg overflow-y-hidden shadow-md border border-transparent hover:border-white/50`}
    >
      {children}
    </article>
  );
}
