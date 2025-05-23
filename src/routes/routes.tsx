import { Navigate, createBrowserRouter } from "react-router-dom";

import Categories from "@/pages/dashboard/categories/categories-page";
import { DashboardLayout } from "@/components/dashboard-layout";
import { HomeDashboard } from "@/pages/dashboard/home/home-dashboard";
import Login from "@/pages/Auth/Login/Login";
import MyAccount from "@/pages/dashboard/my-account/my-account";
import ProductsPage from "@/pages/dashboard/products/products-page";
import ProtectedRoute from "./protected-routes-layout";
import PublicRoute from "./public-routes-layout";
import Register from "@/pages/Auth/Register/Register";
import { RootLayout } from "./root-layout";
import Settings from "@/pages/dashboard/settings/settings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/login" />,
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/cadastro",
            element: <Register />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <HomeDashboard />,
              },
              {
                path: "products",
                element: <ProductsPage />,
              },
              {
                path: "categorias",
                element: <Categories />,
              },
              {
                path: "produtos",
                element: <ProductsPage />,
              },
              {
                path: "minha-conta",
                element: <MyAccount />,
              },
              {
                path: "configurações",
                element: <Settings />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default routes;
