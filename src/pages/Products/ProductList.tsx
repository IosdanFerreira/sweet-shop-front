import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDeleteProduct, useProducts } from "@/hooks/useProducts";

import type { QueryParams } from "@/hooks/interfaces/QueryParams.interface";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function ProductList() {
  const queryClient = useQueryClient();
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 1,
    limit: 10,
    orderBy: "name",
    orderDirection: "asc",
  });

  const { data, isLoading } = useProducts(queryParams);

  const { mutate: deleteProduct } = useDeleteProduct({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleSearch = (search: string) => {
    setQueryParams((prev) => ({ ...prev, search, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setQueryParams((prev) => ({ ...prev, page }));
  };

  const handleSort = (orderBy: string) => {
    setQueryParams((prev) => ({
      ...prev,
      orderBy,
      orderDirection:
        prev.orderBy === orderBy && prev.orderDirection === "asc"
          ? "desc"
          : "asc",
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Products List */}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name{" "}
              {queryParams.orderBy === "name" &&
                (queryParams.orderDirection === "asc" ? "↑" : "↓")}
            </th>
            <th onClick={() => handleSort("price")}>
              Price{" "}
              {queryParams.orderBy === "price" &&
                (queryParams.orderDirection === "asc" ? "↑" : "↓")}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination className="mt-4">
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
      </Pagination>
    </div>
  );
}
