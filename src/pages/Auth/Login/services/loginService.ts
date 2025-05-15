import type { ApiResponseInterface } from "@/interfaces/apiResponse.interface";
import type { User } from "../../interfaces/User.interface";
import { api } from "@/lib/axios";

type LoginParams = {
  email: string;
  password: string;
};

export async function login({
  email,
  password,
}: LoginParams): Promise<ApiResponseInterface<User>> {
  const response = await api.post<ApiResponseInterface<User>>("/user/login", {
    email,
    password,
  });
  return response.data;
}
