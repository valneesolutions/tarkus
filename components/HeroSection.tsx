import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[750px] flex flex-col justify-between overflow-hidden">
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
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Bottom dark gradient overlay for text readability (neutral black gradient, not blue) */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Floating Navbar */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 w-full px-6 pt-10 pb-8 md:px-16 md:pb-10 lg:pb-8 lg:pt-0 mt-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-8">
          
          {/* Left Column: Title, Description, and Actions */}
          <div className="max-w-2xl flex flex-col gap-6 text-white lg:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              Your Child Is Getting<br className="hidden sm:inline" />
              Good Grades. Are They<br className="hidden sm:inline" />
              Getting Ready For Life?
            </h1>
            
            <p className="text-lg sm:text-xl font-light leading-relaxed text-zinc-200 max-w-xl">
              Live, hands-on training in public speaking, confidence, and leadership — delivered right at your child's school.
            </p>
            
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full sm:w-auto">
                <button className="flex-1 sm:flex-initial bg-white text-zinc-950 font-semibold px-8 py-3.5 rounded-full hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm md:text-base shadow-lg cursor-pointer">
                  Offline Training
                </button>
                <button className="flex-1 sm:flex-initial bg-white text-zinc-950 font-semibold px-8 py-3.5 rounded-full hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm md:text-base shadow-lg cursor-pointer">
                  Online Session
                </button>
              </div>
              <p className="text-zinc-300 text-xs md:text-sm font-light mt-1 text-left w-full">
                Takes 30 seconds. We'll reach out to your school directly.
              </p>
            </div>
          </div>

          {/* Right Column: Glassmorphism Container with Pills and Stat */}
          <div className="w-full lg:w-[560px] lg:flex-shrink-0 bg-white/[0.14] backdrop-blur-xl border border-white/20 rounded-[24px] p-6 sm:p-7 flex flex-col gap-6 shadow-2xl lg:ml-auto">
            {/* Pill Tags */}
            <div className="flex flex-row justify-between items-center gap-1.5 sm:gap-2 w-full overflow-x-auto scrollbar-none">
              <span className="px-2.5 sm:px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.08] text-zinc-300 text-[10px] sm:text-[11px] tracking-wide font-mono whitespace-nowrap text-center">
                Speak with confidence
              </span>
              <span className="px-2.5 sm:px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.08] text-zinc-300 text-[10px] sm:text-[11px] tracking-wide font-mono whitespace-nowrap text-center">
                Lead with presence
              </span>
              <span className="px-2.5 sm:px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.08] text-zinc-300 text-[10px] sm:text-[11px] tracking-wide font-mono whitespace-nowrap text-center">
                Think under pressure
              </span>
            </div>

            {/* Statistics Block */}
            <div className="flex items-center gap-4">
              <span className="text-5xl sm:text-6xl font-light text-white tracking-tighter leading-none whitespace-nowrap">
                88%
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-[1.4] text-left">
                of parents saw improved confidence and classroom participation within one term.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
