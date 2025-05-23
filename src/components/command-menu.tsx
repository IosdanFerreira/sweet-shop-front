import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import type { NavGroup, NavItem } from "./layouts/nav-group";

import { ArrowRight } from "lucide-react";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { sidebarData } from "./layouts/data/sidebar-data";
import { useNavigate } from "react-router-dom";
import { useSearch } from "@/context/search-context";

export function CommandMenu() {
  const navigate = useNavigate();
  const { open, setOpen } = useSearch();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <CommandDialog modal open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="O que você procura?" />
      <CommandList>
        <ScrollArea type="hover" className="h-72 pr-1">
          <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
          {sidebarData.navGroups.map((group: NavGroup) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem: NavItem, i: number) => {
                if (navItem.url)
                  return (
                    <CommandItem
                      key={`${navItem.url}-${i}`}
                      value={navItem.title}
                      onSelect={() => {
                        runCommand(() => navigate(navItem.url));
                      }}
                    >
                      <div className="mr-2 flex h-4 w-4 items-center justify-center">
                        <ArrowRight className="text-muted-foreground/80 size-2" />
                      </div>
                      {navItem.title}
                    </CommandItem>
                  );

                return navItem.items?.map((subItem: NavItem, i: number) => (
                  <CommandItem
                    key={`${subItem.url}-${i}`}
                    value={subItem.title}
                    onSelect={() => {
                      if (subItem.url) {
                        runCommand(() => navigate(subItem.url));
                      }
                    }}
                  >
                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                      <ArrowRight className="text-muted-foreground/80 size-2" />
                    </div>
                    {subItem.title}
                  </CommandItem>
                ));
              })}
            </CommandGroup>
          ))}
          <CommandSeparator />
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  );
}
