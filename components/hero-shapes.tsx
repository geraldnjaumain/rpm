"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Shape {
  x: number
  y: number
  w: number
  h: number
  r: number
  color: string
  opacity: number
}

// Each layout is an array of shape positions (percentages of container)
// These morph between each other as the software type rotates
const LAYOUTS: Shape[][] = [
  // 0: Dashboard (healthcare, fintech)
  [
    { x: 0, y: 0, w: 18, h: 100, r: 4, color: "#193146", opacity: 0.5 },
    { x: 22, y: 0, w: 78, h: 10, r: 3, color: "#193146", opacity: 0.35 },
    { x: 22, y: 14, w: 24, h: 18, r: 4, color: "#193146", opacity: 0.45 },
    { x: 49, y: 14, w: 24, h: 18, r: 4, color: "#193146", opacity: 0.45 },
    { x: 76, y: 14, w: 24, h: 18, r: 4, color: "#B96D3B", opacity: 0.5 },
    { x: 22, y: 36, w: 78, h: 62, r: 4, color: "#193146", opacity: 0.25 },
    { x: 28, y: 52, w: 4, h: 28, r: 2, color: "#9EA3B0", opacity: 0.35 },
    { x: 36, y: 58, w: 4, h: 22, r: 2, color: "#9EA3B0", opacity: 0.35 },
    { x: 44, y: 46, w: 4, h: 34, r: 2, color: "#B96D3B", opacity: 0.45 },
    { x: 52, y: 56, w: 4, h: 24, r: 2, color: "#9EA3B0", opacity: 0.35 },
    { x: 60, y: 50, w: 4, h: 30, r: 2, color: "#9EA3B0", opacity: 0.35 },
    { x: 4, y: 8, w: 10, h: 2, r: 1, color: "#9EA3B0", opacity: 0.3 },
    { x: 4, y: 14, w: 10, h: 2, r: 1, color: "#B96D3B", opacity: 0.4 },
    { x: 4, y: 20, w: 10, h: 2, r: 1, color: "#9EA3B0", opacity: 0.2 },
  ],
  // 1: Transaction list (banking, insurance)
  [
    { x: 10, y: 0, w: 80, h: 22, r: 4, color: "#193146", opacity: 0.5 },
    { x: 16, y: 5, w: 30, h: 5, r: 2, color: "#9EA3B0", opacity: 0.3 },
    { x: 55, y: 5, w: 28, h: 10, r: 3, color: "#B96D3B", opacity: 0.45 },
    { x: 10, y: 28, w: 80, h: 8, r: 3, color: "#193146", opacity: 0.35 },
    { x: 10, y: 40, w: 80, h: 8, r: 3, color: "#193146", opacity: 0.3 },
    { x: 10, y: 52, w: 80, h: 8, r: 3, color: "#193146", opacity: 0.35 },
    { x: 10, y: 64, w: 80, h: 8, r: 3, color: "#193146", opacity: 0.3 },
    { x: 10, y: 76, w: 80, h: 8, r: 3, color: "#193146", opacity: 0.25 },
    { x: 14, y: 30, w: 5, h: 4, r: 8, color: "#B96D3B", opacity: 0.4 },
    { x: 14, y: 42, w: 5, h: 4, r: 8, color: "#9EA3B0", opacity: 0.3 },
    { x: 14, y: 54, w: 5, h: 4, r: 8, color: "#9EA3B0", opacity: 0.3 },
    { x: 14, y: 66, w: 5, h: 4, r: 8, color: "#B96D3B", opacity: 0.35 },
    { x: 70, y: 30, w: 16, h: 4, r: 2, color: "#9EA3B0", opacity: 0.25 },
    { x: 70, y: 42, w: 16, h: 4, r: 2, color: "#9EA3B0", opacity: 0.2 },
  ],
  // 2: Card grid (retail, e-commerce, real estate)
  [
    { x: 2, y: 0, w: 30, h: 44, r: 4, color: "#193146", opacity: 0.45 },
    { x: 35, y: 0, w: 30, h: 44, r: 4, color: "#193146", opacity: 0.45 },
    { x: 68, y: 0, w: 30, h: 44, r: 4, color: "#193146", opacity: 0.45 },
    { x: 2, y: 50, w: 30, h: 44, r: 4, color: "#193146", opacity: 0.35 },
    { x: 35, y: 50, w: 30, h: 44, r: 4, color: "#193146", opacity: 0.35 },
    { x: 68, y: 50, w: 30, h: 44, r: 4, color: "#B96D3B", opacity: 0.4 },
    { x: 6, y: 30, w: 22, h: 4, r: 2, color: "#9EA3B0", opacity: 0.3 },
    { x: 39, y: 30, w: 22, h: 4, r: 2, color: "#9EA3B0", opacity: 0.3 },
    { x: 72, y: 30, w: 22, h: 4, r: 2, color: "#9EA3B0", opacity: 0.3 },
    { x: 6, y: 36, w: 14, h: 3, r: 2, color: "#9EA3B0", opacity: 0.2 },
    { x: 39, y: 36, w: 14, h: 3, r: 2, color: "#9EA3B0", opacity: 0.2 },
    { x: 72, y: 36, w: 14, h: 3, r: 2, color: "#9EA3B0", opacity: 0.2 },
    { x: 6, y: 80, w: 22, h: 4, r: 2, color: "#9EA3B0", opacity: 0.25 },
    { x: 39, y: 80, w: 22, h: 4, r: 2, color: "#9EA3B0", opacity: 0.25 },
  ],
  // 3: Gauges / monitoring (automotive, energy, telecom)
  [
    { x: 10, y: 8, w: 30, h: 50, r: 50, color: "#193146", opacity: 0.4 },
    { x: 14, y: 14, w: 22, h: 38, r: 50, color: "#0D1F2D", opacity: 0.8 },
    { x: 22, y: 26, w: 6, h: 12, r: 2, color: "#B96D3B", opacity: 0.5 },
    { x: 50, y: 8, w: 44, h: 24, r: 4, color: "#193146", opacity: 0.4 },
    { x: 50, y: 36, w: 44, h: 24, r: 4, color: "#193146", opacity: 0.35 },
    { x: 54, y: 13, w: 36, h: 3, r: 2, color: "#B96D3B", opacity: 0.4 },
    { x: 54, y: 19, w: 24, h: 3, r: 2, color: "#9EA3B0", opacity: 0.3 },
    { x: 54, y: 41, w: 36, h: 3, r: 2, color: "#9EA3B0", opacity: 0.3 },
    { x: 54, y: 47, w: 20, h: 3, r: 2, color: "#9EA3B0", opacity: 0.25 },
    { x: 10, y: 68, w: 26, h: 26, r: 4, color: "#193146", opacity: 0.35 },
    { x: 40, y: 68, w: 26, h: 26, r: 4, color: "#193146", opacity: 0.35 },
    { x: 70, y: 68, w: 26, h: 26, r: 4, color: "#193146", opacity: 0.3 },
    { x: 18, y: 76, w: 10, h: 10, r: 50, color: "#9EA3B0", opacity: 0.25 },
    { x: 48, y: 76, w: 10, h: 10, r: 50, color: "#B96D3B", opacity: 0.35 },
  ],
  // 4: Form / document (government, legal, education)
  [
    { x: 10, y: 0, w: 80, h: 12, r: 4, color: "#193146", opacity: 0.4 },
    { x: 10, y: 16, w: 38, h: 10, r: 3, color: "#193146", opacity: 0.35 },
    { x: 52, y: 16, w: 38, h: 10, r: 3, color: "#193146", opacity: 0.35 },
    { x: 10, y: 30, w: 80, h: 10, r: 3, color: "#193146", opacity: 0.3 },
    { x: 10, y: 44, w: 80, h: 10, r: 3, color: "#193146", opacity: 0.3 },
    { x: 10, y: 58, w: 80, h: 10, r: 3, color: "#193146", opacity: 0.25 },
    { x: 10, y: 72, w: 80, h: 10, r: 3, color: "#193146", opacity: 0.25 },
    { x: 10, y: 88, w: 24, h: 10, r: 3, color: "#B96D3B", opacity: 0.45 },
    { x: 38, y: 88, w: 24, h: 10, r: 3, color: "#193146", opacity: 0.3 },
    { x: 14, y: 3, w: 20, h: 5, r: 2, color: "#9EA3B0", opacity: 0.3 },
    { x: 70, y: 3, w: 16, h: 5, r: 2, color: "#B96D3B", opacity: 0.35 },
    { x: 14, y: 33, w: 50, h: 4, r: 2, color: "#9EA3B0", opacity: 0.2 },
    { x: 14, y: 47, w: 40, h: 4, r: 2, color: "#9EA3B0", opacity: 0.2 },
    { x: 14, y: 61, w: 55, h: 4, r: 2, color: "#9EA3B0", opacity: 0.2 },
  ],
  // 5: Media / content (media, hospitality)
  [
    { x: 5, y: 0, w: 60, h: 60, r: 4, color: "#193146", opacity: 0.45 },
    { x: 20, y: 22, w: 16, h: 16, r: 50, color: "#9EA3B0", opacity: 0.25 },
    { x: 68, y: 0, w: 28, h: 28, r: 4, color: "#193146", opacity: 0.4 },
    { x: 68, y: 32, w: 28, h: 28, r: 4, color: "#193146", opacity: 0.35 },
    { x: 5, y: 66, w: 18, h: 30, r: 4, color: "#193146", opacity: 0.35 },
    { x: 26, y: 66, w: 18, h: 30, r: 4, color: "#193146", opacity: 0.35 },
    { x: 47, y: 66, w: 18, h: 30, r: 4, color: "#B96D3B", opacity: 0.4 },
    { x: 68, y: 66, w: 28, h: 30, r: 4, color: "#193146", opacity: 0.3 },
    { x: 9, y: 50, w: 30, h: 4, r: 2, color: "#9EA3B0", opacity: 0.3 },
    { x: 9, y: 56, w: 20, h: 3, r: 2, color: "#9EA3B0", opacity: 0.2 },
    { x: 72, y: 6, w: 20, h: 3, r: 2, color: "#9EA3B0", opacity: 0.25 },
    { x: 72, y: 12, w: 14, h: 3, r: 2, color: "#9EA3B0", opacity: 0.2 },
    { x: 72, y: 38, w: 20, h: 3, r: 2, color: "#9EA3B0", opacity: 0.25 },
    { x: 72, y: 44, w: 14, h: 3, r: 2, color: "#9EA3B0", opacity: 0.2 },
  ],
]

// Map each software type index to a layout
const TYPE_TO_LAYOUT = [0, 1, 4, 3, 1, 3, 1, 2, 4, 2, 3, 5, 3, 4, 5]

const SHAPE_COUNT = 14

interface HeroShapesProps {
  typeIndex: number
  className?: string
}

export function HeroShapes({ typeIndex, className }: HeroShapesProps) {
  const layoutIndex = TYPE_TO_LAYOUT[typeIndex % TYPE_TO_LAYOUT.length]
  const shapes = LAYOUTS[layoutIndex]

  return (
    <div
      className={cn(
        "relative w-full aspect-[4/3] max-w-[400px]",
        className
      )}
    >
      {Array.from({ length: SHAPE_COUNT }).map((_, i) => {
        const shape = shapes[i]
        if (!shape) return null

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.w}%`,
              height: `${shape.h}%`,
              borderRadius: shape.r >= 50 ? "50%" : `${shape.r}px`,
              backgroundColor: shape.color,
              opacity: shape.opacity,
              transition: "all 500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          />
        )
      })}
    </div>
  )
}
