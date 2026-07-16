import Image from "next/image";

export default function AboutHowWeDo() {
  return (
    <section className="relative w-full bg-white pt-3 pb-3 px-4 md:pt-4 md:pb-4 lg:pt-5 lg:pb-5 md:px-6 overflow-hidden">
      <div className="w-full bg-[#0b0742] rounded-[24px] py-16 md:py-24 lg:py-28 px-8 md:px-12 lg:px-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="text-4xl md:text-[44px] lg:text-[48px] font-bold text-white tracking-tight leading-tight mb-4">
              How We Do:
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-sm">
              <span className="font-semibold text-white">32 sessions</span> delivered across the academic year, thoughtfully scheduled around the school's academic calendar, examinations, and key events.
            </p>
          </div>

          {/* Right Column: Three Stepper Columns */}
          <div className="lg:col-span-7 w-full flex flex-col justify-start">
            {/* Timeline Line & Dots */}
            <div className="relative w-full mb-4">
              <div className="absolute left-[6px] right-[calc(33.33%-6px)] top-[6px] h-[1px] bg-white/20 z-0" />
              <div className="grid grid-cols-3 gap-6 relative z-10">
                <div className="w-3 h-3 rounded-full border border-white bg-[#0b0742] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div className="w-3 h-3 rounded-full border border-white bg-[#0b0742] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div className="w-3 h-3 rounded-full border border-white bg-[#0b0742] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </div>
            </div>

            {/* Stepper Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
              {/* Step 1: Ignite */}
              <div className="flex flex-col -ml-[18px]">
                {/* Flame Icon */}
                <div className="relative w-12 h-12 mb-4">
                  <Image
                    src="/fire.svg"
                    alt="Tarkus Ignite"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Tarkus Ignite</h3>
                <span className="text-[11px] font-inter text-zinc-400 mb-4 tracking-wide uppercase">6 - Day Intensive Camp</span>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed text-justify">
                  Full-day sessions (6-7 total) during school holidays. Immersive experience with rapid skill building, ideal for holiday periods or off timetable weeks.
                </p>
              </div>

              {/* Step 2: Spark */}
              <div className="flex flex-col -ml-[18px]">
                {/* Lightning Icon */}
                <div className="relative w-12 h-12 mb-4">
                  <Image
                    src="/lightning.png"
                    alt="Tarkus Spark"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Tarkus Spark</h3>
                <span className="text-[11px] font-inter text-zinc-400 mb-4 tracking-wide uppercase">3 - Day Masterclass</span>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed text-justify">
                  Three extended sessions (3-4 hours each) for concentrated skill development. Perfect for half-term breaks or as a programme before committing to longer formats.
                </p>
              </div>

              {/* Step 3: Boost */}
              <div className="flex flex-col -ml-[18px]">
                {/* Boost Icon */}
                <div className="relative w-12 h-12 mb-4">
                  <Image
                    src="/boost.png"
                    alt="Tarkus Boost"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Tarkus Boost</h3>
                <span className="text-[11px] font-inter text-zinc-400 mb-4 tracking-wide uppercase">8 - Day Accelerator</span>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed text-justify">
                  Eight focused sessions (over 1-2 weeks) for deeper learning in a short span. Ideal before examinations, competitions, or key academic milestones.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
