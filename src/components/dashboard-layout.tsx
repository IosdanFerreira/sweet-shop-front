import { AppSidebar } from "@/components/layouts/app-sidebar";
import { Header } from "./layouts/header";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
