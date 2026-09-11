"use client"

import * as React from "react"
import { Header } from "@/components/header"

const SOFTWARE_TYPES = [
  "healthcare systems",
  "banking software",
  "government platforms",
  "automotive software",
  "fintech products",
  "logistics solutions",
  "insurance platforms",
  "retail software",
  "education platforms",
  "real estate tools",
  "telecom systems",
  "hospitality software",
  "energy solutions",
  "legal tech",
  "media platforms",
]

export default function Home() {
  const [visible, setVisible] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isSwapping, setIsSwapping] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapping(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SOFTWARE_TYPES.length)
        setIsSwapping(false)
      }, 200)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0D1F2D] text-white">
      {/* Hero Background Image */}
      <div 
        className="absolute top-0 left-0 right-0 h-[66vh] z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      {/* Top Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[66vh] min-h-[400px] z-10 flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
          {/* Headline */}
          <h1
            className="text-[clamp(28px,5vw,48px)] font-semibold leading-[1.15] tracking-tight text-white"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            we build{" "}
            <span
              className="inline-block text-[#B96D3B]"
              style={{
                opacity: isSwapping ? 0 : 1,
                transform: isSwapping ? "translateY(8px)" : "translateY(0)",
                transition: "opacity 200ms ease-out, transform 200ms ease-out",
              }}
            >
              {SOFTWARE_TYPES[currentIndex]}
            </span>
            <br />
            that people love to use
          </h1>

          {/* Subtext */}
          <p
            className="text-[clamp(14px,2vw,18px)] leading-relaxed text-[#9EA3B0] max-w-lg"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 600ms cubic-bezier(0.25, 0.1, 0.25, 1) 150ms, transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1) 150ms",
            }}
          >
            from idea to launch, we design and engineer software that works beautifully and scales with your business.
          </p>

          {/* CTA Button */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 600ms cubic-bezier(0.25, 0.1, 0.25, 1) 300ms, transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1) 300ms",
            }}
          >
            <button
              type="button"
              className="group relative inline-flex h-[42px] items-center justify-center overflow-hidden rounded-[4px] bg-[#B96D3B] px-8 font-sans text-[14px] font-medium text-white transition-all duration-200 ease-out cursor-pointer select-none border-0 outline-none hover:bg-[#c87a46] active:scale-[0.98] active:bg-[#a8612f] focus-visible:ring-2 focus-visible:ring-[#B96D3B]/70 focus-visible:ring-offset-0"
              style={{
                boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 0 rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Depth gradient overlay */}
              <span
                className="pointer-events-none absolute inset-0 z-0 opacity-80"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(0, 0, 0, 0.12) 100%)",
                }}
                aria-hidden="true"
              />
              {/* Micro-texture overlay */}
              <span
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
                aria-hidden="true"
              />
              <span className="relative z-20 select-none tracking-normal">start your project</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
