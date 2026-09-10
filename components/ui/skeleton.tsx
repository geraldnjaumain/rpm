import { cn } from "cn"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("rounded-[6px] bg-[#193146]", className)}
      {...props}
    />
  )
}

export { Skeleton }
