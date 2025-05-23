import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { Candy } from "lucide-react";
import { NavGroup } from "./nav-group";
import type { NavGroup as NavGroupType } from "./nav-group";
import { NavUser } from "./nav-user";
import { sidebarData } from "./data/sidebar-data";
import { useAuth } from "@/context/auth-context";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();

  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <div className="h-12 flex items-center justify-center p-2 gap-1">
          <div className="bg-gradient-to-r from-primary to-primary/70 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Candy className="size-4 stroke-white" />
          </div>

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold ">Sweet Shop</span>
            <span className="truncate text-xs ">Painel administrativo</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props: NavGroupType) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
