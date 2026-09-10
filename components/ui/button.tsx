import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-[8px] text-xs font-medium whitespace-nowrap transition-all duration-150 outline-none select-none border-0 shadow-none disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#B96D3B] text-[#0D1F2D] font-medium hover:bg-[#c87a46] active:bg-[#a85f31]",
        outline: "bg-[#193146] text-[#FFFFFF] hover:bg-[#203C55] active:bg-[#284966]",
        secondary: "bg-[#193146] text-[#FFFFFF] hover:bg-[#203C55] active:bg-[#284966]",
        ghost: "bg-transparent text-[#FFFFFF] hover:bg-[#193146]/60 active:bg-[#193146]",
        destructive: "bg-[#ff453a]/20 text-[#ff6961] hover:bg-[#ff453a]/30 active:bg-[#ff453a]/40",
        link: "bg-transparent text-[#B96D3B] underline-offset-4 hover:underline p-0 h-auto",
        pill: "rounded-full bg-[#193146] text-[#FFFFFF] hover:bg-[#203C55] active:bg-[#284966]",
      },
      size: {
        default: "h-8 px-3 gap-1.5",
        xs: "h-6 px-2 text-[0.7rem] gap-1 rounded-[6px]",
        sm: "h-7 px-2.5 text-[0.75rem] gap-1",
        lg: "h-9 px-4 text-sm gap-2",
        icon: "size-8 p-0",
        "icon-xs": "size-6 p-0 rounded-[6px] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 p-0",
        "icon-lg": "size-9 p-0",
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

