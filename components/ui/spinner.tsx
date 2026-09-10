"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Mode: 'indeterminate' (rotating sequential activation) or 'determinate' (progress-based)
   */
  variant?: "indeterminate" | "determinate"
  /**
   * Progress value from 0 to 100 for determinate mode
   */
  value?: number
  /**
   * Total number of dots in the circular indicator (default: 8)
   */
  dotCount?: number
  /**
   * Size presets
   */
  size?: "sm" | "md" | "lg"
}

export function Spinner({
  variant = "indeterminate",
  value = 0,
  dotCount = 8,
  size = "md",
  className,
  ...props
}: SpinnerProps) {
  const [activeDot, setActiveDot] = React.useState(0)

  React.useEffect(() => {
    if (variant !== "indeterminate") return
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % dotCount)
    }, 120)
    return () => clearInterval(interval)
  }, [variant, dotCount])

  const sizeDimensions = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  }[size]

  const dotSize = {
    sm: "size-1",
    md: "size-1.5",
    lg: "size-2",
  }[size]

  const clampedProgress = Math.min(100, Math.max(0, value))
  const filledCount = Math.round((clampedProgress / 100) * dotCount)

  return (
    <div
      role="status"
      aria-label={variant === "determinate" ? `loading ${clampedProgress}%` : "loading"}
      aria-valuenow={variant === "determinate" ? clampedProgress : undefined}
      aria-valuemin={variant === "determinate" ? 0 : undefined}
      aria-valuemax={variant === "determinate" ? 100 : undefined}
      className={cn(
        "relative inline-flex items-center justify-center select-none",
        sizeDimensions,
        className
      )}
      {...props}
    >
      {Array.from({ length: dotCount }).map((_, index) => {
        const angle = (index * 360) / dotCount
        // Radius offset in percent
        const radius = 40
        const radians = (angle - 90) * (Math.PI / 180)
        const x = 50 + radius * Math.cos(radians)
        const y = 50 + radius * Math.sin(radians)

        let opacity = 0.2
        if (variant === "indeterminate") {
          const diff = (index - activeDot + dotCount) % dotCount
          // sequential fade trail
          opacity = diff === 0 ? 1 : diff === 1 ? 0.7 : diff === 2 ? 0.45 : 0.18
        } else {
          opacity = index < filledCount ? 1 : 0.18
        }

        return (
          <span
            key={index}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              opacity,
              transition: "opacity 120ms ease-out",
            }}
            className={cn(
              "absolute rounded-full bg-[#E4C3AD]",
              dotSize
            )}
          />
        )
      })}
    </div>
  )
}

