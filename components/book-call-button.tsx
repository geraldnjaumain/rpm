"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RippleEffect {
  x: number
  y: number
  size: number
  id: number
}

export interface BookCallButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function BookCallButton({ className, onClick, ...props }: BookCallButtonProps) {
  const [ripples, setRipples] = React.useState<RippleEffect[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2.2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const newRipple: RippleEffect = {
      x,
      y,
      size,
      id: Date.now(),
    }

    setRipples((prev) => [...prev.slice(-3), newRipple])
    onClick?.(e)
  }

  return (
    <button
      type="button"
      aria-label="book a call"
      onClick={handleClick}
      className={cn(
        "group relative inline-flex h-[40px] sm:h-[42px] items-center justify-center overflow-hidden rounded-[4px]",
        "bg-[#546A7B] px-5 sm:px-6 font-sans text-xs sm:text-[14px] font-medium text-white",
        "transition-all duration-200 ease-out cursor-pointer select-none border-0 outline-none",
        "hover:bg-[#5f778a] active:scale-[0.98] active:bg-[#4a5e6e]",
        "focus-visible:ring-2 focus-visible:ring-[#B96D3B]/70 focus-visible:ring-offset-0",
        className
      )}
      style={{
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 0 rgba(0, 0, 0, 0.25)",
      }}
      {...props}
    >
      {/* Subtle depth gradient overlay */}
      <span
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(0, 0, 0, 0.12) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle tactile micro-texture overlay */}
      <span
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
        aria-hidden="true"
      />

      {/* Ripple elements */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute z-10 rounded-full bg-white/25 animate-ripple"
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

      {/* Text with 20% opacity stroke */}
      <span
        className="relative z-20 select-none tracking-normal"
        style={{
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
          paintOrder: "stroke fill",
        }}
      >
        book a call
      </span>
    </button>
  )
}
