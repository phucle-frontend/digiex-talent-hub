import {
  LayoutDashboard,
  Users,
  Briefcase,
  ChevronRight,
  BarChart3,
  LogOut,
  ChartPie,
  CircleUser,
  Layers,
  CopyCheck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SearchInput from "./SearchInput";

interface MenuItem {
  title: string;
  url: string;
  icon: any;
}

interface CollapsibleMenuItem extends MenuItem {
  subItems: MenuItem[];
}

const menuItems: (MenuItem | CollapsibleMenuItem)[] = [
  {
    title: "Dashboard",
    url: "#",
    icon: BarChart3,
    subItems: [
      { title: "Dashboard 1", url: "#", icon: LayoutDashboard },
      { title: "Dashboard 2", url: "#", icon: LayoutDashboard },
      { title: "Dashboard 3", url: "#", icon: LayoutDashboard },
    ],
  },
  {
    title: "Talent",
    url: "#",
    icon: Users,
  },
  {
    title: "Companies",
    url: "#",
    icon: Layers,
  },
  {
    title: "Jobs",
    url: "#",
    icon: CopyCheck,
    subItems: [
      { title: "Jobs 1", url: "#", icon: Briefcase },
      { title: "Jobs 2", url: "#", icon: Briefcase },
      { title: "Jobs 3", url: "#", icon: Briefcase },
    ],
  },
  {
    title: "Evaluation",
    url: "#",
    icon: ChartPie,
  },
  {
    title: "Talent Pool",
    url: "#",
    icon: CircleUser,
  },
];

function CollapsibleMenuItem({ item }: { item: CollapsibleMenuItem }) {
  return (
    <Collapsible asChild>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            <item.icon />
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.subItems.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild>
                  <a href={subItem.url}>
                    <subItem.icon />
                    <span>{subItem.title}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function RegularMenuItem({ item }: { item: MenuItem }) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild tooltip={item.title}>
        <a href={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function hasSubItems(
  item: MenuItem | CollapsibleMenuItem
): item is CollapsibleMenuItem {
  return "subItems" in item && Array.isArray(item.subItems);
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="gap-2 p-4">
          <SidebarGroupLabel className="text-xl font-bold">
            <img src="src/assets/favicon-96x96.png" className="w-8 h-8" />
            TALENTX
          </SidebarGroupLabel>
          <SearchInput />
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) =>
                hasSubItems(item) ? (
                  <CollapsibleMenuItem key={item.title} item={item} />
                ) : (
                  <RegularMenuItem key={item.title} item={item} />
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex justify-between items-center">
          <div className="flex gap-2">
            <SidebarMenuItem>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SidebarMenuItem>
            <div className="flex flex-col items-start">
              <span className="font-bold ">Tommy Le</span>
              <span className="text-xs -mt-1">tommyle1310@gmail.com</span>
            </div>
            <LogOut size={16} />
          </div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
