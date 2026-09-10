"use client"

import * as React from "react"
import { Header } from "@/components/header"
import { ConcentricPattern } from "@/components/concentric-pattern"

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0D1F2D] text-white">
      {/* Top Header */}
      <Header />

      {/* Hero Section with Concentric Pattern Shader */}
      <section className="relative w-full h-[calc(100vh-80px)] min-h-[500px] overflow-hidden">
        <ConcentricPattern
          shape={0}
          ringCount={24}
          falloff={0.8}
          color={{ r: 185 / 255, g: 109 / 255, b: 59 / 255, a: 0.75 }}
          transform={{ x: 50, y: 50, radius: 50, angle: 0 }}
          className="w-full h-full"
        />
      </section>
    </main>
  )
}
