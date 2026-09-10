import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-[8px] border-0 bg-[#193146] px-3 py-2 text-xs text-[#FAE1DF] transition-colors outline-none placeholder:text-[#9EA3B0] focus-visible:bg-[#203C55] focus-visible:ring-1 focus-visible:ring-[#E4C3AD]/40 disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
