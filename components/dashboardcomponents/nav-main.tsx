"use client"


import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: string
    isActive?: boolean
  }[]
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem className="flex" key={item.title} >
          <SidebarMenuButton className="mb-2" asChild isActive={item.isActive}>
            <a href={item.url}>
              {/* <Image src={item.icon} height={50} width={50} alt="icon"/> */}
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
