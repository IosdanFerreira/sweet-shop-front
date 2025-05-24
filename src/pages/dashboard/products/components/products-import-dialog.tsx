import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductsImportDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Importar Produtos</DialogTitle>
          <DialogDescription>
            Faça upload de um arquivo CSV contendo os dados dos produtos.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="file">Arquivo CSV</Label>
            <Input id="file" type="file" accept=".csv" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button>Importar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
