import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-[8px] border-0 bg-[#193146] px-3 py-1 text-xs text-[#FAE1DF] placeholder:text-[#9EA3B0] transition-colors outline-none focus-visible:bg-[#203C55] focus-visible:ring-1 focus-visible:ring-[#E4C3AD]/40 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
