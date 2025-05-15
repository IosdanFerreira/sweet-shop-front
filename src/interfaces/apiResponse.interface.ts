/* eslint-disable @typescript-eslint/no-explicit-any */
interface errorsInterface {
  property: string;
  message: string;
}

export interface ApiResponseInterface<T> {
  status_code: number;
  success: boolean;
  error_type: string;
  errors: errorsInterface[] | null;
  message: string;
  data: T | null;
  pagination: any | null;
}
