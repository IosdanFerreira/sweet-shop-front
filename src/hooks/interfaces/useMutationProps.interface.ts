
export interface UseMutationPropsInterface<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}
