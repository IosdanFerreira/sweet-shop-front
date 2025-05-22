import { Navigate, Outlet } from "react-router-dom";

import Lottie from "lottie-react";
import loginAnimation from "@/assets/lotties/loading.json";
import { useAuth } from "@/context/auth-context";

const PublicRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  console.log(isAuthenticated);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>
    );
  }

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
