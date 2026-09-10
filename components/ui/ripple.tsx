"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RippleEffect {
  x: number
  y: number
  size: number
  id: number
}

export function RippleContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [ripples, setRipples] = React.useState<RippleEffect[]>([])

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 1.5
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2
    const id = Date.now()

    setRipples((prev) => [...prev, { x, y, size, id }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 400)
  }

  return (
    <div
      onClick={addRipple}
      className={cn("relative overflow-hidden cursor-pointer select-none", className)}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 overflow-hidden">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
            className="absolute rounded-full bg-white/10 animate-out fade-out duration-300 pointer-events-none transition-transform"
          />
        ))}
      </span>
    </div>
  )
}
