import { Navbar } from "@/components/navbar"
import { ContactButton } from "@/components/contact-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1F2D]">
      <header className="relative flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-8 md:px-12 py-4 sm:py-5 w-full">
        {/* Left balance spacer ensuring the center nav is mathematically centered */}
        <div className="hidden sm:flex sm:flex-1 justify-start" aria-hidden="true" />

        {/* Centered compact segmented navbar */}
        <div className="flex justify-center flex-1 sm:flex-initial">
          <Navbar />
        </div>

        {/* Right contact button */}
        <div className="flex sm:flex-1 justify-end shrink-0">
          <ContactButton />
        </div>
      </header>
    </main>
  )
}

