import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
  return (
    <header className="h-16 border-b px-4 flex items-center justify-between bg-background text-foreground">
      <h1 className="text-lg font-semibold">Painel de Controle</h1>
      <ModeToggle />
    </header>
  );
}
