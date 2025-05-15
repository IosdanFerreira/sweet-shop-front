import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { createRoot } from "react-dom/client";
import routes from "./routes.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={routes} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
