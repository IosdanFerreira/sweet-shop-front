import type { ApiResponseInterface } from "@/interfaces/apiResponse.interface";
import type { AxiosError } from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UseMutationPropsInterface<T> {
  mutationFn?: () => Promise<any>;
  onSuccess: (data: ApiResponseInterface<T>) => void;
  onError?: (error: AxiosError<ApiResponseInterface<null>>) => void;
}
