import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-[8px] text-xs font-medium whitespace-nowrap transition-all duration-150 outline-none select-none border-0 shadow-none disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-neutral-200 active:bg-neutral-300",
        secondary: "bg-[#2c2c2e] text-[#f5f5f7] hover:bg-[#3a3a3c] active:bg-[#48484a]",
        ghost: "bg-transparent text-[#f5f5f7] hover:bg-[#2c2c2e]/60 active:bg-[#2c2c2e]",
        destructive: "bg-[#ff453a]/20 text-[#ff453a] hover:bg-[#ff453a]/30 active:bg-[#ff453a]/40",
        link: "bg-transparent text-white underline-offset-4 hover:underline p-0 h-auto",
        pill: "rounded-full bg-[#2c2c2e] text-[#f5f5f7] hover:bg-[#3a3a3c] active:bg-[#48484a]",
      },
      size: {
        default: "h-8 px-3 gap-1.5",
        sm: "h-7 px-2.5 text-[0.75rem] gap-1",
        lg: "h-9 px-4 text-sm gap-2",
        icon: "size-8 p-0",
        "icon-sm": "size-7 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

