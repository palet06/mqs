"use client";

import * as React from "react";
import {
  Blocks,
  Calendar,
  MessageCircleQuestion,
  Settings2,
  Trash2,
} from "lucide-react";

import { NavMain } from "@/components/dashboardcomponents/nav-main";


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dışişleri Bakanlığı",
      url: "#",
      icon: "/logolar/disisleri-logo.png",
    },
    {
      title: "Milli Eğitim Bakanlığı",
      url: "#",
      icon: "/logolar/meb-logo.png",
      isActive:true
    },
    {
      title: "Ticaret Bakanlığı",
      url: "#",
      icon: "/logolar/ticaret-logo.png",
    },
    {
      title: "Turizm Bakanlığı",
      url: "#",
      icon: "/logolar/turizm-logo.png",
    },
    {
      title: "YTB",
      url: "#",
      icon: "/logolar/ytb-logo.png",
    },
    {
      title: "Gelir İdaresi Bakanlığı",
      url: "#",
      icon: "/logolar/gib-logo.png",
    },
    {
      title: "PTT",
      url: "#",
      icon: "/logolar/ptt-logo.png",
    },
    {
      title: "İşkur",
      url: "#",
      icon: "/logolar/iskur-logo.png",
    },
    
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href={"/dashboard"}>
                <div className="flex  items-center justify-center rounded-lg ">
                  <Image
                    src="/logolar/uigm-logo.svg"
                    height={50}
                    width={50}
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col gap-1 leading-none">
                  <span className="font-semibold">UIGM</span>
                  <span>Multiple Query System</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{avatar:"",email:"asd@asd.com",name:"deneme.user"}} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
