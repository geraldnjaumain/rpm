"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu"
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function NavigationSection() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>conventional tabs (underline vs folder)</CardTitle>
          <CardDescription>traditional horizontal tab bars with zero shadcn pill box styling</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-neutral-400">underline tab bar (standard conventional)</span>
            <Tabs defaultValue="alpha" variant="underline">
              <TabsList>
                <TabsTrigger value="alpha">alpha module</TabsTrigger>
                <TabsTrigger value="beta">beta runtime</TabsTrigger>
                <TabsTrigger value="gamma">gamma cluster</TabsTrigger>
              </TabsList>
              <TabsContent value="alpha" className="pt-2">active alpha telemetry panel</TabsContent>
              <TabsContent value="beta" className="pt-2">active beta runtime cluster</TabsContent>
              <TabsContent value="gamma" className="pt-2">active gamma analytics stream</TabsContent>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs text-neutral-400">folder tab bar (docked tabs)</span>
            <Tabs defaultValue="tab1" variant="folder">
              <TabsList>
                <TabsTrigger value="tab1">design</TabsTrigger>
                <TabsTrigger value="tab2">code</TabsTrigger>
                <TabsTrigger value="tab3">deploy</TabsTrigger>
              </TabsList>
              <div className="rounded-[8px] bg-[#1c1c1e] p-4 text-xs text-neutral-300">
                <TabsContent value="tab1">design systems and typography specifications</TabsContent>
                <TabsContent value="tab2">typescript, react and next.js app router</TabsContent>
                <TabsContent value="tab3">edge networks, serverless infrastructure</TabsContent>
              </div>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>breadcrumbs & pagination</CardTitle>
          <CardDescription>hierarchical navigation and page indexing</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#agency">agency</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#projects">projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>leethe</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>menus: dropdown, context & menubar</CardTitle>
          <CardDescription>keyboard accessible overlay menus</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="secondary">dropdown menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>edit configuration</DropdownMenuItem>
              <DropdownMenuItem>clone project</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-[#ff453a]">archive project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ContextMenu>
            <ContextMenuTrigger className="flex h-12 w-48 items-center justify-center rounded-[8px] bg-[#2c2c2e] text-xs text-neutral-300 select-none">
              right click this surface
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>inspect element</ContextMenuItem>
              <ContextMenuItem>copy link</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>file</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>new file</MenubarItem>
                <MenubarItem>save as</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>view</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>toggle sidebar</MenubarItem>
                <MenubarItem>zoom 100%</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-1.5 text-xs text-neutral-300 hover:text-white" href="#">
                  services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-1.5 text-xs text-neutral-300 hover:text-white" href="#">
                  work
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>command palette</CardTitle>
          <CardDescription>fuzzy command search and action execution</CardDescription>
        </CardHeader>
        <CardContent>
          <Command className="rounded-[8px] bg-[#121214] max-w-sm">
            <CommandInput placeholder="type a command or search..." />
            <CommandList>
              <CommandEmpty>no results found.</CommandEmpty>
              <CommandGroup heading="suggestions">
                <CommandItem>launch staging build</CommandItem>
                <CommandItem>refresh dependencies</CommandItem>
                <CommandItem>generate api keys</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
      </Card>
    </div>
  )
}
