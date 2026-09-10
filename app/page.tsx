"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { DicebearAvatar } from "@/components/ui/avatar-dicebear"
import { RippleContainer } from "@/components/ui/ripple"
import { ShaderCanvas } from "@/components/ui/shader-canvas"
import { CodeCircleIcon, CpuIcon, LayersIcon } from "@s9-labs/solar-icons/line-duotone"

export default function Home() {
  const [progress, setProgress] = React.useState(60)

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-black text-[#f5f5f7] overflow-hidden">
      <ShaderCanvas intensity={0.08} />

      <div className="relative z-10 flex w-full max-w-md flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium tracking-tight text-white">leethe</h1>
            <DicebearAvatar seed="leethe-agency" size="sm" />
          </div>
          <p className="text-xs text-[#8e8e93]">a software agency</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">overview</TabsTrigger>
            <TabsTrigger value="systems">systems</TabsTrigger>
            <TabsTrigger value="status">status</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="flex flex-col gap-3 pt-2">
            <Card>
              <CardHeader>
                <CodeCircleIcon size={22} className="text-white" />
                <CardTitle>engineering</CardTitle>
                <CardDescription>software architecture and digital systems</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <RippleContainer className="inline-block">
                  <Button size="sm" variant="secondary">
                    inquire
                  </Button>
                </RippleContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="systems" className="flex flex-col gap-3 pt-2">
            <Card>
              <CardHeader>
                <CpuIcon size={22} className="text-white" />
                <CardTitle>infrastructure</CardTitle>
                <CardDescription>minimal, resilient runtime environments</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <RippleContainer className="inline-block">
                  <Button size="sm" variant="secondary">
                    view specs
                  </Button>
                </RippleContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="flex flex-col gap-3 pt-2">
            <Card>
              <CardHeader>
                <LayersIcon size={22} className="text-white" />
                <CardTitle>runtime status</CardTitle>
                <CardDescription>activity indicators and live progress</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 pt-2">
                <div className="flex items-center justify-between text-xs text-[#8e8e93]">
                  <span>indeterminate indicator</span>
                  <Spinner variant="indeterminate" size="sm" />
                </div>
                <div className="flex items-center justify-between text-xs text-[#8e8e93]">
                  <span>determinate ({progress}%)</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setProgress((p) => (p >= 100 ? 0 : p + 20))}
                      className="text-[10px] text-white hover:text-neutral-300"
                    >
                      step
                    </button>
                    <Spinner variant="determinate" value={progress} size="sm" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
