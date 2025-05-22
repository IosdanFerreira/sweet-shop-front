import type { ApiErrorsInterface } from "./apiErrors.interface";
import type { ApiPaginationInterface } from "./apiPagination.interface";

export interface ApiResponseInterface<T> {
  status_code: number;
  success: boolean;
  error_type: string | null;
  errors: ApiErrorsInterface[] | null;
  message: string;
  data: T | null;
  pagination: ApiPaginationInterface | null;
}
