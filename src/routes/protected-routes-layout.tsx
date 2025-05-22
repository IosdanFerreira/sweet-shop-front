import { Navigate, Outlet, useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import { SearchProvider } from "@/context/search-context";
import { SidebarProvider } from "@/components/ui/sidebar";
import loginAnimation from "@/assets/lotties/loading.json";
import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>
    );
  }

  return isAuthenticated ? (
    <SearchProvider>
      <SidebarProvider>
        <Outlet />
      </SidebarProvider>
    </SearchProvider>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
