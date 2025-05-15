import Categories from "./pages/dashboard/Categories/Categories";
import HomeDashboard from "./pages/dashboard/HomeDashboard/HomeDashboard";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <HomeDashboard />,
  },
  {
    path: "/dashboard/categorias",
    element: <Categories />,
  },
]);

export default routes;
