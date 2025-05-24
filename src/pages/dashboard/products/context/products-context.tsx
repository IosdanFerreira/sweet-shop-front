import React, { useMemo, useState } from "react";

import type { Product } from "../data/schema";
import useDialogState from "@/hooks/use-dialog-state";

type ProductsDialogType = "create" | "update" | "delete" | "import";

interface ProductsContextType {
  open: ProductsDialogType | null;
  setOpen: (str: ProductsDialogType | null) => void;
  currentRow: Product | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Product | null>>;
}

const ProductsContext = React.createContext<ProductsContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function ProductsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<ProductsDialogType>(null);
  const [currentRow, setCurrentRow] = useState<Product | null>(null);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      currentRow,
      setCurrentRow,
    }),
    [open, setOpen, currentRow, setCurrentRow]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
  const productsContext = React.useContext(ProductsContext);

  if (!productsContext) {
    throw new Error("useProducts has to be used within <ProductsContext>");
  }

  return productsContext;
};
