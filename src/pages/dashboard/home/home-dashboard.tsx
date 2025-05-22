// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { useDeleteProduct, useProducts } from "@/hooks/useProducts";

// import { Button } from "@/components/ui/button";
// import type { QueryParams } from "@/hooks/interfaces/QueryParams.interface";

// import { useAuth } from "@/context/auth-context";

// import { useQueryClient } from "@tanstack/react-query";
// import { useState } from "react";

export default function HomeDashboard() {
  // const { logout } = useAuth();
  // const queryClient = useQueryClient();
  // const [queryParams, setQueryParams] = useState<QueryParams>({
  //   page: 1,
  //   limit: 10,
  //   orderBy: "name",
  //   orderDirection: "asc",
  // });

  // const { data, isLoading } = useProducts(queryParams);

  // const { mutate: deleteProduct } = useDeleteProduct({
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["products"] });
  //   },
  // });

  // const handleSearch = (search: string) => {
  //   setQueryParams((prev) => ({ ...prev, search, page: 1 }));
  // };

  // const handlePageChange = (page: number) => {
  //   setQueryParams((prev) => ({ ...prev, page }));
  // };

  // const handleSort = (orderBy: string) => {
  //   setQueryParams((prev) => ({
  //     ...prev,
  //     orderBy,
  //     orderDirection:
  //       prev.orderBy === orderBy && prev.orderDirection === "asc"
  //         ? "desc"
  //         : "asc",
  //   }));
  // };

  return (
    <div className="mt-5 px-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>

      <div className=" rounded-lg bg-background-secondary shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Produtos Recentes</h2>

        {/* Search */}
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div> */}

        {/* <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Preço de Compra</TableHead>
              <TableHead className="text-right">Preço de Venda</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((product) => (
              <TableRow key={product.name}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.purchase_price}</TableCell>
                <TableCell className="text-right">
                  {product.selling_price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}

        {/* Pagination */}
        {/* <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange((queryParams.page ?? 1) - 1)}
                className={
                  queryParams.page === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {data?.totalPages &&
              Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={page === queryParams.page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange((queryParams.page ?? 1) + 1)}
                className={
                  queryParams.page === data?.totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
      </div>
    </div>
  );
}
