import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL || "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const { token } = parseCookies();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // logout automático, redirecionamento etc.
    }
    return Promise.reject(error);
  }
);
