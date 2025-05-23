import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearch } from "@/context/search-context";

interface Props {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export function Search({ className = "", placeholder = "Buscar" }: Props) {
  const { setOpen } = useSearch();
  return (
    <Button
      variant="outline"
      className={cn(
        "bg-white text-muted-foreground hover:bg-muted/50 relative h-8 w-full flex-1 justify-start rounded-md text-sm font-normal shadow-none sm:pr-12 md:w-40 md:flex-none lg:w-56 xl:w-64",
        className
      )}
      onClick={() => setOpen(true)}
    >
      <SearchIcon
        aria-hidden="true"
        className="absolute top-1/2 left-1.5 -translate-y-1/2"
      />
      <span className="ml-4">{placeholder}</span>
    </Button>
  );
}
