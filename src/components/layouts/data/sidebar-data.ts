import * as Icons from "lucide-react";

import type { NavGroup } from "../nav-group";

interface SidebarData {
  navGroups: NavGroup[];
}

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: "Geral",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: Icons.Home,
        },
        {
          title: "Produtos",
          url: "/dashboard/produtos",
          icon: Icons.Box,
        },
        {
          title: "Categorias",
          url: "/dashboard/categorias",
          icon: Icons.ChartBarStacked,
        },
        {
          title: "Fornecedores",
          url: "/chats",
          icon: Icons.Users,
        },
        {
          title: "Estoque",
          url: "/users",
          icon: Icons.Boxes,
        },
        {
          title: "Vendas",
          url: "/users",
          icon: Icons.Handshake,
        },
        {
          title: "Relatórios",
          url: "/users",
          icon: Icons.ClipboardList,
        },
        {
          title: "Fluxo de caixa",
          url: "/users",
          icon: Icons.DollarSign,
        },
      ],
    },
  ],
};
