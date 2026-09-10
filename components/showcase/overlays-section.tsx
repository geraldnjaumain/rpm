"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { InfoCircleIcon, DangerTriangleIcon } from "@s9-labs/solar-icons/line-duotone"

export function OverlaysSection() {
  const [spinProgress, setSpinProgress] = React.useState(75)

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>apple dot-activated spinners</CardTitle>
          <CardDescription>sequential revolving and determinate progress dot indicators</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#9EA3B0]">indeterminate (sm/md/lg)</span>
            <div className="flex items-center gap-4">
              <Spinner variant="indeterminate" size="sm" />
              <Spinner variant="indeterminate" size="md" />
              <Spinner variant="indeterminate" size="lg" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#9EA3B0]">determinate ({spinProgress}%)</span>
            <div className="flex items-center gap-4">
              <Spinner variant="determinate" value={spinProgress} size="sm" />
              <Spinner variant="determinate" value={spinProgress} size="md" />
              <Spinner variant="determinate" value={spinProgress} size="lg" />
              <Button
                size="xs"
                variant="secondary"
                onClick={() => setSpinProgress((p) => (p >= 100 ? 0 : p + 25))}
              >
                +25%
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>alerts & toasts</CardTitle>
          <CardDescription>dismissible toast notifications and inline alert states</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Alert>
            <InfoCircleIcon size={16} className="text-white" />
            <AlertTitle>system initialized</AlertTitle>
            <AlertDescription>all microservices operating at optimal latency.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <DangerTriangleIcon size={16} className="text-[#ff453a]" />
            <AlertTitle>rate limit warning</AlertTitle>
            <AlertDescription>api quota consumed by 85% this billing cycle.</AlertDescription>
          </Alert>

          <div className="flex items-center gap-3 pt-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => toast("system updated", { description: "deployment bundle verified successfully." })}
            >
              trigger toast notification
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>modals, dialogs & drawers</CardTitle>
          <CardDescription>modal action flows, sheets and responsive drawers</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="secondary">open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>client project details</DialogTitle>
                <DialogDescription>configure agency deployment parameters for client repository.</DialogDescription>
              </DialogHeader>
              <div className="py-2 text-xs text-[#9EA3B0]">
                all project settings are synced securely across production clusters.
              </div>
            </DialogContent>
          </Dialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="destructive">alert dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>confirm purge?</AlertDialogTitle>
                <AlertDialogDescription>this will clear the cached runtime deployment artifacts.</AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex justify-end gap-2 pt-4">
                <AlertDialogCancel>cancel</AlertDialogCancel>
                <AlertDialogAction>confirm</AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" variant="secondary">open sheet</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>inspection panel</SheetTitle>
                <SheetDescription>live connection stream metadata.</SheetDescription>
              </SheetHeader>
              <div className="py-4 text-xs text-[#9EA3B0]">
                side sheet content slides smoothly from the edge.
              </div>
            </SheetContent>
          </Sheet>

          <Drawer>
            <DrawerTrigger asChild>
              <Button size="sm" variant="secondary">open drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>bottom drawer</DrawerTitle>
                <DrawerDescription>pull-up drawer for touch interfaces.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 text-xs text-[#9EA3B0]">
                swipes down seamlessly to dismiss.
              </div>
            </DrawerContent>
          </Drawer>

          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" variant="secondary">popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 text-xs text-[#9EA3B0]">
              ambient popover overlay for contextual actions.
            </PopoverContent>
          </Popover>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="secondary">tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>instant contextual feedback</p>
            </TooltipContent>
          </Tooltip>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button size="sm" variant="ghost">hover card</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 text-xs text-[#9EA3B0]">
              hover over trigger to inspect extended agency information.
            </HoverCardContent>
          </HoverCard>
        </CardContent>
      </Card>
    </div>
  )
}
