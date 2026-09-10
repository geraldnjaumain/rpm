"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs as TabsPrimitive } from "radix-ui"

const TabsContext = React.createContext<{
  variant?: "underline" | "folder"
}>({ variant: "underline" })

function Tabs({
  className,
  orientation = "horizontal",
  variant = "underline",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & {
  variant?: "underline" | "folder"
}) {
  return (
    <TabsContext.Provider value={{ variant }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-orientation={orientation}
        data-variant={variant}
        className={cn("flex flex-col gap-4 w-full", className)}
        {...props}
      />
    </TabsContext.Provider>
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const { variant } = React.useContext(TabsContext)

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex items-center w-full select-none border-0",
        variant === "underline" &&
          "gap-6 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#2c2c2e]",
        variant === "folder" && "gap-1 items-end",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant } = React.useContext(TabsContext)

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex items-center justify-center text-xs font-medium transition-all duration-150 outline-none select-none border-0 cursor-pointer",
        variant === "underline" &&
          "pb-2.5 pt-1 px-0.5 text-[#8e8e93] hover:text-[#f5f5f7] data-[state=active]:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-white after:opacity-0 data-[state=active]:after:opacity-100 after:transition-opacity after:duration-150",
        variant === "folder" &&
          "rounded-t-[8px] px-4 py-2 bg-[#1c1c1e]/40 text-[#8e8e93] hover:text-[#f5f5f7] hover:bg-[#1c1c1e]/70 data-[state=active]:bg-[#1c1c1e] data-[state=active]:text-white",
        "disabled:pointer-events-none disabled:opacity-40",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("outline-none text-sm text-neutral-300", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }


