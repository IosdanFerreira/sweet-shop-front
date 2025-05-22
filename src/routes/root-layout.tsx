import { AuthProvider } from "@/context/auth-context";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "@/context/search-context";

export const RootLayout = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <Outlet />
      </SearchProvider>
    </AuthProvider>
  );
};
