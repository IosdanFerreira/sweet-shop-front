import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import type { Product } from "../data/schema";
import { formatCurrency } from "../../../../utils/format-currency";

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
  },
  {
    accessorKey: "purchase_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Preço de Compra" />
    ),
    cell: ({ row }) => {
      const price = row.getValue("purchase_price") as number;
      return formatCurrency(price);
    },
  },
  {
    accessorKey: "selling_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Preço de Venda" />
    ),
    cell: ({ row }) => {
      const price = row.getValue("selling_price") as number;
      return formatCurrency(price);
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Estoque" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Categoria" />
    ),
    cell: ({ row }) => {
      const category = row.getValue("category") as { name: string };
      return category.name;
    },
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fornecedor" />
    ),
    cell: ({ row }) => {
      const supplier = row.getValue("supplier") as { name: string };
      return supplier.name;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
