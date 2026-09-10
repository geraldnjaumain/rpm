"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import { Kbd } from "@/components/ui/kbd"
import { RippleContainer } from "@/components/ui/ripple"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { PlayCircleIcon, PauseCircleIcon, SettingsIcon, CheckReadIcon } from "@s9-labs/solar-icons/line-duotone"

export function ActionsSection() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>button variants & sizes</CardTitle>
          <CardDescription>neutral monochrome button components with 8px radius or full pill</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Button variant="default">primary</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="outline">outline</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="destructive">destructive</Button>
          <Button variant="pill">pill button</Button>
          <Button variant="link">link style</Button>
        </CardContent>
        <CardContent className="flex flex-wrap items-center gap-3 pt-2">
          <Button size="xs" variant="secondary">xs size</Button>
          <Button size="sm" variant="secondary">sm size</Button>
          <Button size="default" variant="secondary">default</Button>
          <Button size="lg" variant="secondary">lg size</Button>
          <Button size="icon" variant="secondary" aria-label="settings">
            <SettingsIcon size={16} />
          </Button>
          <Button size="icon-sm" variant="secondary" aria-label="confirm">
            <CheckReadIcon size={14} />
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>button group & ripple container</CardTitle>
          <CardDescription>grouped controls and tactile ripple interaction</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <ButtonGroup>
            <Button variant="secondary" size="sm">left</Button>
            <Button variant="secondary" size="sm">middle</Button>
            <Button variant="secondary" size="sm">right</Button>
          </ButtonGroup>

          <RippleContainer className="inline-block rounded-[8px]">
            <Button variant="default" size="sm">
              click for ripple effect
            </Button>
          </RippleContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>toggles, badges & keyboard keys</CardTitle>
          <CardDescription>status indicators and compact toggles</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Toggle aria-label="toggle action">
            <PlayCircleIcon size={16} />
          </Toggle>

          <ToggleGroup type="single" defaultValue="a">
            <ToggleGroupItem value="a">a</ToggleGroupItem>
            <ToggleGroupItem value="b">b</ToggleGroupItem>
            <ToggleGroupItem value="c">c</ToggleGroupItem>
          </ToggleGroup>

          <div className="flex items-center gap-2">
            <Badge variant="default">active</Badge>
            <Badge variant="secondary">pending</Badge>
            <Badge variant="destructive">failed</Badge>
          </div>

          <div className="flex items-center gap-1 text-xs text-neutral-400">
            press <Kbd>⌘</Kbd> + <Kbd>k</Kbd>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
