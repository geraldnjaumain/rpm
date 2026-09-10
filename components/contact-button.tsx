"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function ContactButton({ className, ...props }: ContactButtonProps) {
  return (
    <button
      type="button"
      aria-label="contact us"
      className={cn(
        "group relative inline-flex h-[38px] items-center justify-center rounded-full",
        "bg-[#193146] px-4 sm:px-5 font-sans text-xs sm:text-[13px] font-medium text-white",
        "transition-all duration-150 hover:bg-[#203C55] active:scale-[0.98]",
        "outline-none select-none border-0 cursor-pointer",
        "focus-visible:ring-2 focus-visible:ring-[#B96D3B]/70 focus-visible:ring-offset-0",
        className
      )}
      {...props}
    >
      <span
        className="select-none tracking-normal"
        style={{
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
          paintOrder: "stroke fill",
        }}
      >
        contact us
      </span>
    </button>
  )
}
