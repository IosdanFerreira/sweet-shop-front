import { ConfirmDialog } from "@/components/layouts/confirm-dialog";
import { ProductsImportDialog } from "./products-import-dialog";
import { ProductsMutateDrawer } from "./products-mutate-drawer";
import { showSubmittedData } from "@/utils/show-submitted-data";
import { useProducts } from "../context/products-context";

export function ProductsDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useProducts();
  return (
    <>
      <ProductsMutateDrawer
        key="product-create"
        open={open === "create"}
        onOpenChange={() => setOpen("create")}
      />

      <ProductsImportDialog
        key="products-import"
        open={open === "import"}
        onOpenChange={() => setOpen("import")}
      />

      {currentRow && (
        <>
          <ProductsMutateDrawer
            key={`product-update-${currentRow.id}`}
            open={open === "update"}
            onOpenChange={() => {
              setOpen("update");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          />

          <ConfirmDialog
            key="product-delete"
            destructive
            open={open === "delete"}
            onOpenChange={() => {
              setOpen("delete");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            handleConfirm={() => {
              setOpen(null);
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
              showSubmittedData(currentRow, "O seguinte produto foi excluído:");
            }}
            className="max-w-md"
            title={`Excluir este produto: ${currentRow.id} ?`}
            desc={
              <>
                Você está prestes a excluir um produto com o ID{" "}
                <strong>{currentRow.id}</strong>. <br />
                Esta ação não pode ser desfeita.
              </>
            }
            confirmText="Excluir"
          />
        </>
      )}
    </>
  );
}
