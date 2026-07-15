import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Tarkus Hero - Teacher presenting in front of classroom"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overall Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/25" />
        
        {/* Bottom dark gradient overlay for text readability (neutral black gradient, not blue) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      </div>

      {/* Floating Navbar */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 w-full px-6 pb-12 md:px-16 md:pb-20 mt-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          
          {/* Left: Heading */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Your Child Is Getting<br className="hidden sm:inline" />
              Good Grades. Are They<br className="hidden sm:inline" />
              Getting Ready For Life?
            </h1>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col items-start lg:items-end gap-3 text-white">
            <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full sm:w-auto">
              <button className="flex-1 sm:flex-initial bg-white text-zinc-950 font-semibold px-8 py-3.5 rounded-full hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm md:text-base shadow-lg cursor-pointer">
                Offline Training
              </button>
              <button className="flex-1 sm:flex-initial bg-white text-zinc-950 font-semibold px-8 py-3.5 rounded-full hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm md:text-base shadow-lg cursor-pointer">
                Online Session
              </button>
            </div>
            <p className="text-zinc-300 text-xs md:text-sm font-light mt-1 max-w-sm text-left lg:text-right w-full">
              Takes 30 seconds. We'll reach out to your school directly.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
