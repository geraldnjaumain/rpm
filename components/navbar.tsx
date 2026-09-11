"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home2Icon } from "@s9-labs/solar-icons/bold"

export interface NavItem {
  id: string
  label: string
  href: string
  flexRatio?: number
  icon?: React.ReactNode
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "home",
    href: "/",
    flexRatio: 26,
    icon: <Home2Icon className="size-4 shrink-0" />,
  },
  { id: "our-services", label: "our services", href: "/our-services", flexRatio: 38 },
  { id: "blog", label: "blog", href: "/blog", flexRatio: 26 },
]

interface TabRipple {
  x: number
  y: number
  size: number
  id: number
  tabId: string
}

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
  defaultActiveId = "home",
  onSelect,
  className,
}: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [internalActiveId, setInternalActiveId] = React.useState(defaultActiveId)
  const [ripples, setRipples] = React.useState<TabRipple[]>([])

  // Automatically determine active ID from current pathname if not controlled
  const routeActiveId = React.useMemo(() => {
    if (pathname === "/") return "home"
    if (pathname.startsWith("/our-services")) return "our-services"
    if (pathname.startsWith("/blog")) return "blog"
    return defaultActiveId
  }, [pathname, defaultActiveId])

  const activeId = controlledActiveId ?? (pathname ? routeActiveId : internalActiveId)

  const handleSelect = (item: NavItem, e?: React.MouseEvent<HTMLButtonElement>) => {
    if (!controlledActiveId) {
      setInternalActiveId(item.id)
    }
    if (e) {
      const rect = e.currentTarget.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 2.2
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      setRipples((prev) => [
        ...prev.slice(-4),
        { x, y, size, id: Date.now(), tabId: item.id },
      ])
    }
    onSelect?.(item.id)
    if (item.href && item.href !== pathname) {
      router.push(item.href)
    }
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
        // Vertical height preserved exactly
        ["--nav-h" as any]: "clamp(38px, 4vw, 42px)",
        ["--slant" as any]: "calc(var(--nav-h) * 0.5612)",
        ["--gap" as any]: "calc(var(--nav-h) * 0.35)",
      }}
      className={cn(
        "relative flex select-none items-stretch overflow-hidden bg-transparent",
        "h-[var(--nav-h)] w-full max-w-[320px] sm:max-w-[540px] md:max-w-[580px]",
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

        if (isFirst) {
          clipPath = "polygon(0 0, 100% 0, calc(100% - var(--slant)) 100%, 0 100%)"
          marginLeft = "0px"
        } else if (isLast) {
          clipPath = "polygon(var(--slant) 0, 100% 0, 100% 100%, 0 100%)"
          marginLeft = "calc(var(--gap) - var(--slant))"
        } else {
          clipPath = "polygon(var(--slant) 0, 100% 0, calc(100% - var(--slant)) 100%, 0 100%)"
          marginLeft = "calc(var(--gap) - var(--slant))"
        }

        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={(e) => handleSelect(item, e)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              flex: item.flexRatio ?? 1,
              clipPath,
              marginLeft,
              boxShadow:
                "inset 0 1px 0 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 0 rgba(0, 0, 0, 0.20)",
            }}
            className={cn(
              "relative flex min-w-0 h-full items-center justify-center border-0 font-sans outline-none overflow-hidden",
              "text-xs sm:text-[14px] md:text-[15px] font-medium tracking-normal",
              "transition-all duration-200 ease-out cursor-pointer select-none",
              "px-4 sm:px-8 md:px-10",
              // Orange tab has white text, Blueish tabs have black text
              isActive
                ? "bg-[#B96D3B] text-[#FFFFFF] hover:bg-[#c87a46]"
                : "bg-[#9EA3B0] text-[#0D1F2D] hover:bg-[#a9aeb9]",
              "focus-visible:ring-2 focus-visible:ring-[#B96D3B]/70 focus-visible:ring-offset-0",
              "active:scale-[0.985]"
            )}
          >
            {/* Subtle depth gradient overlay */}
            <span
              className="pointer-events-none absolute inset-0 z-0 opacity-80"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(0, 0, 0, 0.10) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Subtle micro-texture overlay */}
            <span
              className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "4px 4px",
              }}
              aria-hidden="true"
            />

            {/* Ripple effect */}
            {ripples
              .filter((r) => r.tabId === item.id)
              .map((ripple) => (
                <span
                  key={ripple.id}
                  className={cn(
                    "pointer-events-none absolute z-10 rounded-full animate-ripple",
                    isActive ? "bg-white/30" : "bg-black/20"
                  )}
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: ripple.size,
                    height: ripple.size,
                  }}
                  onAnimationEnd={() => {
                    setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
                  }}
                  aria-hidden="true"
                />
              ))}

            <span
              className={cn(
                "relative z-20 inline-flex items-center gap-1.5 whitespace-nowrap",
                isFirst && "-translate-x-2 sm:-translate-x-3",
                isLast && "translate-x-2 sm:translate-x-3"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </span>
          </button>
        )
      })}
    </nav>
  )
}
