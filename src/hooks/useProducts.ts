import { useMutation, useQuery } from "@tanstack/react-query";

import type { Product } from "./interfaces/Product.interface";
import type { QueryParams } from "./interfaces/QueryParams.interface";
import type { UseMutationPropsInterface } from "./interfaces/useMutationProps.interface";
import { api } from "@/api/lib/axios";

interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Services
const getProducts = async (params: QueryParams = {}): Promise<ProductsResponse> => {
  const { page = 1, limit = 10, orderBy, orderDirection, search } = params;
  
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(orderBy && { orderBy }),
    ...(orderDirection && { orderDirection }),
    ...(search && { search }),
  });

  const { data } = await api.get<ProductsResponse>(`/products?${queryParams.toString()}`);
  return data;
};

const createProduct = async (product: Omit<Product, "id">): Promise<Product> => {
  const { data } = await api.post<Product>("/products", product);
  return data;
};

const updateProduct = async ({ id, ...product }: Product): Promise<Product> => {
  const { data } = await api.put<Product>(`/products/${id}`, product);
  return data;
};

const deleteProduct = async (id: string): Promise<Product> => {
  const { data } = await api.delete<Product>(`/products/${id}`);
  return data;
};

// Hooks
export function useProducts(params: QueryParams = {}) {
  return useQuery<ProductsResponse>({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
  });
}

export function useCreateProduct({
  onSuccess,
  onError,
}: UseMutationPropsInterface<Product>) {
  return useMutation<Product, Error, Omit<Product, "id">>({
    mutationFn: createProduct,
    onSuccess,
    onError,
  });
}

export function useUpdateProduct({
  onSuccess,
  onError,
}: UseMutationPropsInterface<Product>) {
  return useMutation<Product, Error, Product>({
    mutationFn: updateProduct,
    onSuccess,
    onError,
  });
}

export function useDeleteProduct({
  onSuccess,
  onError,
}: UseMutationPropsInterface<Product>) {
  return useMutation<Product, Error, string>({
    mutationFn: deleteProduct,
    onSuccess,
    onError,
  });
} 