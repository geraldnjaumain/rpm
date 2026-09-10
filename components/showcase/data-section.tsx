"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { Skeleton } from "@/components/ui/skeleton"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from "@/components/ui/empty"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Calendar } from "@/components/ui/calendar"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis } from "recharts"
import { Button } from "@/components/ui/button"

const chartData = [
  { module: "core", latency: 18 },
  { module: "edge", latency: 12 },
  { module: "db", latency: 24 },
  { module: "auth", latency: 8 },
]

const chartConfig = {
  latency: { label: "latency (ms)", color: "#E4C3AD" },
}

export function DataSection() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>table & data listing</CardTitle>
          <CardDescription>borderless tabular dataset representation</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>service</TableHead>
                <TableHead>status</TableHead>
                <TableHead className="text-right">uptime</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-[#FAE1DF]">auth cluster</TableCell>
                <TableCell className="text-[#9EA3B0]">operational</TableCell>
                <TableCell className="text-right text-[#FAE1DF]">99.99%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-[#FAE1DF]">edge proxy</TableCell>
                <TableCell className="text-[#9EA3B0]">operational</TableCell>
                <TableCell className="text-right text-[#FAE1DF]">100.0%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-[#FAE1DF]">analytics queue</TableCell>
                <TableCell className="text-[#9EA3B0]">draining</TableCell>
                <TableCell className="text-right text-[#FAE1DF]">99.85%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>accordion & collapsible</CardTitle>
            <CardDescription>expandable content views</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>system SLA guarantee</AccordionTrigger>
                <AccordionContent>guaranteed 99.9% uptime with instant failover across 3 availability zones.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>data privacy & compliance</AccordionTrigger>
                <AccordionContent>zero persistent data tracking without explicit cryptographic handshake.</AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator className="my-2 bg-[#193146]" />

            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#FAE1DF]">extended telemetry details</span>
                <CollapsibleTrigger asChild>
                  <Button size="xs" variant="secondary">{isOpen ? "hide" : "show"}</Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="pt-2 text-xs text-[#9EA3B0]">
                host: node-edge-01.leethe.internal | ip: 10.0.4.12
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>calendar & date selector</CardTitle>
            <CardDescription>month view and date selection</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-[8px] bg-[#0D1F2D] p-2 select-none"
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>chart analytics</CardTitle>
            <CardDescription>latency benchmarks in monochrome</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-44 w-full">
              <BarChart data={chartData}>
                <XAxis dataKey="module" tickLine={false} axisLine={false} stroke="#9EA3B0" fontSize={11} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="latency" fill="#E4C3AD" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>scroll area & resizable panels</CardTitle>
            <CardDescription>scrollable containers and adjustable split layout</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <ScrollArea className="h-24 w-full rounded-[8px] bg-[#0D1F2D] p-3 text-xs text-[#9EA3B0]">
              <div className="flex flex-col gap-2">
                <div>log-001: connection verified</div>
                <div>log-002: payload dispatched</div>
                <div>log-003: handshake acknowledged</div>
                <div>log-004: stream active</div>
                <div>log-005: heartbeat confirmed</div>
              </div>
            </ScrollArea>

            <div className="h-20 w-full overflow-hidden rounded-[8px] bg-[#0D1F2D]">
              <ResizablePanelGroup orientation="horizontal">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-2 text-[11px] text-[#9EA3B0]">panel a</div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-2 text-[11px] text-[#9EA3B0]">panel b</div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>aspect ratio</CardTitle>
            <CardDescription>16:9 proportion container</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-[8px] bg-[#193146] text-xs text-[#9EA3B0]">
              16:9 container
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>skeleton placeholders</CardTitle>
            <CardDescription>static loading shapes (no pulse)</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Skeleton className="h-4 w-3/4 rounded-[4px] bg-[#193146]" />
            <Skeleton className="h-4 w-1/2 rounded-[4px] bg-[#193146]" />
            <Skeleton className="h-8 w-full rounded-[6px] bg-[#193146]" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>empty state</CardTitle>
            <CardDescription>zero state container</CardDescription>
          </CardHeader>
          <CardContent>
            <Empty className="p-4">
              <EmptyHeader>
                <EmptyTitle className="text-xs font-medium text-[#FAE1DF]">no records found</EmptyTitle>
                <EmptyDescription className="text-[11px] text-[#9EA3B0]">pipeline waiting for events</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>carousel</CardTitle>
          <CardDescription>horizontal slider carousel</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center px-12">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              <CarouselItem>
                <div className="flex h-20 items-center justify-center rounded-[8px] bg-[#193146] text-xs text-[#FAE1DF]">slide 1</div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex h-20 items-center justify-center rounded-[8px] bg-[#193146] text-xs text-[#FAE1DF]">slide 2</div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex h-20 items-center justify-center rounded-[8px] bg-[#193146] text-xs text-[#FAE1DF]">slide 3</div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
    </div>
  )
}
