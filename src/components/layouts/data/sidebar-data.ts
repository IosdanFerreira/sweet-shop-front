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
          icon: Icons.Package,
        },
        {
          title: "Categorias",
          url: "/dashboard/categorias",
          icon: Icons.Tags,
        },
        {
          title: "Fornecedores",
          url: "/chats",
          icon: Icons.Truck,
        },
        {
          title: "Estoque",
          url: "/users",
          icon: Icons.Boxes,
        },
        
      ],
    },
    {
      title: "Financeiro",
      items: [
        {
          title: "Vendas",
          url: "/users",
          icon: Icons.ShoppingCart,
        },
        {
          title: "Relatórios",
          url: "/users",
          icon: Icons.ClipboardList,
        },
        {
          title: "Fluxo de caixa",
          url: "/users",
          icon: Icons.TrendingUp,
        },
      ],
    },
    {
      title: "Configurações",
      items: [
        {
          title: "Minha conta",
          url: "/dashboard/minha-conta",
          icon: Icons.User,
        },
        {
          title: "Configurações",
          url: "/dashboard/configurações",
          icon: Icons.Settings,
        },
      ],
    },
  ],
};
