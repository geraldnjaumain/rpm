"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { DicebearAvatar } from "@/components/ui/avatar-dicebear"
import { ActionsSection } from "@/components/showcase/actions-section"
import { InputsSection } from "@/components/showcase/inputs-section"
import { OverlaysSection } from "@/components/showcase/overlays-section"
import { NavigationSection } from "@/components/showcase/navigation-section"
import { DataSection } from "@/components/showcase/data-section"
import { CustomSection } from "@/components/showcase/custom-section"

export default function Home() {
  return (
    <main className="min-h-screen p-6 sm:p-12 bg-[#0D1F2D] text-[#FAE1DF] overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium tracking-tight text-[#FAE1DF]">leethe</h1>
            <DicebearAvatar seed="leethe-agency" size="md" />
          </div>
          <p className="text-xs text-[#9EA3B0]">a software agency — component test suite</p>
        </header>

        <Tabs defaultValue="actions" variant="underline" className="w-full">
          <TabsList className="overflow-x-auto no-scrollbar">
            <TabsTrigger value="actions">actions</TabsTrigger>
            <TabsTrigger value="inputs">inputs</TabsTrigger>
            <TabsTrigger value="overlays">overlays</TabsTrigger>
            <TabsTrigger value="navigation">navigation</TabsTrigger>
            <TabsTrigger value="data">data & layout</TabsTrigger>
            <TabsTrigger value="custom">custom & media</TabsTrigger>
          </TabsList>

          <div className="pt-4">
            <TabsContent value="actions">
              <ActionsSection />
            </TabsContent>
            <TabsContent value="inputs">
              <InputsSection />
            </TabsContent>
            <TabsContent value="overlays">
              <OverlaysSection />
            </TabsContent>
            <TabsContent value="navigation">
              <NavigationSection />
            </TabsContent>
            <TabsContent value="data">
              <DataSection />
            </TabsContent>
            <TabsContent value="custom">
              <CustomSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  )
}

