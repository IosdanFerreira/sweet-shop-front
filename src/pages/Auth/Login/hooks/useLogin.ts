import type { UseMutationPropsInterface } from "@/hooks/interfaces/useMutationProps.interface";
import type { User } from "../../interfaces/User.interface";
import { login } from "../services/loginService";
import { useMutation } from "@tanstack/react-query";

export function useLogin({
  onSuccess,
  onError,
}: UseMutationPropsInterface<User>) {
  return useMutation({
    mutationFn: login,
    onSuccess,
    onError,
  });
}
