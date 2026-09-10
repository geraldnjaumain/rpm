import { Navbar } from "@/components/navbar"
import { BookCallButton } from "@/components/book-call-button"

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0D1F2D]">
      <header className="relative w-full max-w-full px-4 sm:px-8 md:px-12 py-4 sm:py-5 overflow-hidden">
        <div className="relative mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-7xl">
          {/* Left balance spacer ensuring the center nav is mathematically centered on desktop */}
          <div className="hidden sm:block sm:w-32 md:w-36 shrink-0" aria-hidden="true" />

          {/* Centered segmented navbar */}
          <div className="flex flex-1 justify-center w-full min-w-0">
            <Navbar />
          </div>

          {/* Right book a call button */}
          <div className="flex sm:w-32 md:w-36 shrink-0 justify-center sm:justify-end">
            <BookCallButton />
          </div>
        </div>
      </header>
    </main>
  )
}

