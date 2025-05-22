import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center justify-center bg-background-primary")}
    >
      <div className={cn("container overflow-hidden", className)}>
        {children}
      </div>
    </div>
  );
}
