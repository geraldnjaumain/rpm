import { Navbar } from "@/components/navbar"
import { BookCallButton } from "@/components/book-call-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1F2D]">
      <header className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-8 md:px-12 py-4 sm:py-5 w-full">
        {/* Left balance spacer ensuring the center nav is mathematically centered on desktop */}
        <div className="hidden sm:flex sm:flex-1 justify-start" aria-hidden="true" />

        {/* Centered compact segmented navbar */}
        <div className="flex justify-center w-full sm:w-auto">
          <Navbar />
        </div>

        {/* Right book a call button */}
        <div className="flex sm:flex-1 justify-center sm:justify-end shrink-0 w-full sm:w-auto">
          <BookCallButton />
        </div>
      </header>
    </main>
  )
}

