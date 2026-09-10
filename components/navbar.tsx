"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavItem {
  id: string
  label: string
  href?: string
  flexRatio?: number
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: "about-us", label: "about us", href: "#about-us", flexRatio: 28 },
  { id: "our-services", label: "our services", href: "#our-services", flexRatio: 38 },
  { id: "blog", label: "blog", href: "#blog", flexRatio: 26 },
]

export interface NavbarProps {
  items?: NavItem[]
  activeId?: string
  defaultActiveId?: string
  onSelect?: (id: string) => void
  className?: string
}

export function Navbar({
  items = DEFAULT_NAV_ITEMS,
  activeId: controlledActiveId,
  defaultActiveId = "about-us",
  onSelect,
  className,
}: NavbarProps) {
  const [internalActiveId, setInternalActiveId] = React.useState(defaultActiveId)
  const activeId = controlledActiveId ?? internalActiveId

  const handleSelect = (item: NavItem) => {
    if (!controlledActiveId) {
      setInternalActiveId(item.id)
    }
    onSelect?.(item.id)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      const nextIndex = (index + 1) % items.length
      handleSelect(items[nextIndex])
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      const prevIndex = (index - 1 + items.length) % items.length
      handleSelect(items[prevIndex])
    }
  }

  return (
    <nav
      role="tablist"
      aria-label="main navigation"
      style={{
        // Proportional compact height, slant, and gap
        ["--nav-h" as any]: "38px",
        ["--slant" as any]: "calc(var(--nav-h) * 0.5612)",
        ["--gap" as any]: "calc(var(--nav-h) * 0.35)",
      }}
      className={cn(
        "relative flex select-none items-stretch overflow-hidden bg-[#0D1F2D]",
        "h-[var(--nav-h)] w-full max-w-[340px] sm:max-w-[400px]",
        className
      )}
    >
      {items.map((item, index) => {
        const isActive = activeId === item.id
        const isFirst = index === 0
        const isLast = index === items.length - 1

        // Precise polygon coordinates for each segment type:
        // First segment: straight left edge, slanted right edge
        // Middle segments: slanted left edge, slanted right edge (parallelogram)
        // Last segment: slanted left edge, straight right edge
        let clipPath = ""
        let marginLeft = "0px"
        let paddingAdjust = ""

        if (isFirst) {
          clipPath = "polygon(0 0, 100% 0, calc(100% - var(--slant)) 100%, 0 100%)"
          marginLeft = "0px"
          paddingAdjust = "pr-[calc(var(--slant)*0.2)]"
        } else if (isLast) {
          clipPath = "polygon(var(--slant) 0, 100% 0, 100% 100%, 0 100%)"
          marginLeft = "calc(var(--gap) - var(--slant))"
          paddingAdjust = "pl-[calc(var(--slant)*0.2)]"
        } else {
          clipPath = "polygon(var(--slant) 0, 100% 0, calc(100% - var(--slant)) 100%, 0 100%)"
          marginLeft = "calc(var(--gap) - var(--slant))"
          paddingAdjust = ""
        }

        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => handleSelect(item)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              flex: item.flexRatio ?? 1,
              clipPath,
              marginLeft,
            }}
            className={cn(
              "relative flex h-full items-center justify-center border-0 font-sans outline-none",
              "text-xs sm:text-[13px] font-medium tracking-normal",
              "transition-colors duration-150 cursor-pointer select-none",
              paddingAdjust,
              isActive
                ? "bg-[#B96D3B] text-[#0D1F2D] hover:bg-[#c87a46]"
                : "bg-[#9EA3B0] text-[#FFFFFF] hover:bg-[#adb2bd]",
              "focus-visible:ring-2 focus-visible:ring-[#B96D3B]/70 focus-visible:ring-offset-0",
              "active:scale-[0.99]"
            )}
          >
            <span className="relative z-10 truncate px-2 sm:px-3">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
