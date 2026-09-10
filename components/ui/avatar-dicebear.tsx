"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface DicebearAvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  /**
   * Seed identifier for the avatar (username, email, id, etc.)
   */
  seed: string
  /**
   * Dicebear avatar style. Default is "shapes"
   */
  avatarStyle?: "shapes" | "bottts-neutral" | "identicon" | "thumbs"
  /**
   * Inline CSS properties
   */
  style?: React.CSSProperties
  /**
   * Size presets or pixel number
   */
  size?: "sm" | "md" | "lg" | number
  /**
   * Alt text
   */
  alt?: string
}

export function DicebearAvatar({
  seed,
  avatarStyle = "shapes",
  size = "md",
  alt = "user avatar",
  className,
  style,
  ...props
}: DicebearAvatarProps) {
  const pixelSize = typeof size === "number" ? size : size === "sm" ? 24 : size === "lg" ? 40 : 32
  const avatarUrl = `https://api.dicebear.com/9.x/${avatarStyle}/svg?seed=${encodeURIComponent(seed)}`

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-[#1c1c1e] select-none border-0",
        size === "sm" && "size-6",
        size === "md" && "size-8",
        size === "lg" && "size-10",
        className
      )}
      style={{
        ...(typeof size === "number" ? { width: pixelSize, height: pixelSize } : {}),
        ...style,
      }}
      {...props}
    >
      <img
        src={avatarUrl}
        alt={alt}
        width={pixelSize}
        height={pixelSize}
        className="size-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
