import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Product } from "../data/schema";
import { SelectDropdown } from "@/components/select-dropdown";
import { showSubmittedData } from "@/utils/show-submitted-data";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRow?: Product;
}

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório."),
  description: z.string().min(1, "Descrição é obrigatória."),
  purchase_price: z.string().min(1, "Preço de compra é obrigatório."),
  selling_price: z.string().min(1, "Preço de venda é obrigatório."),
  stock: z.string().min(1, "Estoque é obrigatório."),
  category: z.string().min(1, "Categoria é obrigatória."),
  supplier: z.string().min(1, "Fornecedor é obrigatório."),
});

type ProductsForm = z.infer<typeof formSchema>;

export function ProductsMutateDrawer({
  open,
  onOpenChange,
  currentRow,
}: Props) {
  const isUpdate = !!currentRow;

  const form = useForm<ProductsForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: currentRow?.name ?? "",
      description: currentRow?.description ?? "",
      purchase_price: currentRow?.purchase_price.toString() ?? "",
      selling_price: currentRow?.selling_price.toString() ?? "",
      stock: currentRow?.stock.toString() ?? "",
      category: currentRow?.category.id.toString() ?? "",
      supplier: currentRow?.supplier.id.toString() ?? "",
    },
  });

  const onSubmit = (data: ProductsForm) => {
    onOpenChange(false);
    form.reset();
    showSubmittedData(data);
  };

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        form.reset();
      }}
    >
      <SheetContent className="flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle>{isUpdate ? "Atualizar" : "Criar"} Produto</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? "Atualize o produto fornecendo as informações necessárias."
              : "Adicione um novo produto fornecendo as informações necessárias."}
            Clique em salvar quando terminar.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id="products-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-5 px-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o nome do produto" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite a descrição" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purchase_price"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Preço de Compra</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="selling_price"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Preço de Venda</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Estoque</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" placeholder="0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Categoria</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder="Selecione uma categoria"
                    items={[
                      { label: "Bebidas", value: "1" },
                      { label: "Higiene", value: "2" },
                      { label: "Alimentos", value: "3" },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplier"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Fornecedor</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder="Selecione um fornecedor"
                    items={[
                      { label: "Distribuidora São João", value: "1" },
                      { label: "Água Pura Ltda", value: "2" },
                      { label: "HigieClean", value: "3" },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter className="gap-2">
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
          <Button form="products-form" type="submit">
            Salvar alterações
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
