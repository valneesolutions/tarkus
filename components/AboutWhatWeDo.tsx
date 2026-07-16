import Link from "next/link";

export default function AboutWhatWeDo() {
  return (
    <section className="relative w-full bg-white pt-6 pb-3 px-4 md:pt-8 md:pb-4 lg:pt-10 lg:pb-5 md:px-6 overflow-hidden">
      <div className="w-full bg-[#0b0742] rounded-[24px] py-16 md:py-24 lg:py-28 px-8 md:px-12 lg:px-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="text-4xl md:text-[44px] lg:text-[48px] font-bold text-white tracking-tight leading-tight mb-4">
              What We Do:
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-sm">
              Three hands-on programs,<br />
              chosen by your school:
            </p>
          </div>

          {/* Right Column: Three Cards */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              
              {/* Card 1: Public Speaking */}
              <div className="rounded-xl bg-[#f4f3ff] p-8 flex flex-col justify-end min-h-[280px] md:min-h-[320px] transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0b0742] leading-tight mb-2">
                    Public Speaking
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 leading-normal font-light">
                    articulation, persuasion, presence
                  </p>
                </div>
              </div>

              {/* Card 2: Personality Development */}
              <div className="rounded-xl bg-[#e2f6e9] p-8 flex flex-col justify-end min-h-[280px] md:min-h-[320px] transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0b0742] leading-tight mb-2">
                    Personality Development
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 leading-normal font-light">
                    confidence, communication, social presence
                  </p>
                </div>
              </div>

              {/* Card 3: Model UN */}
              <div className="rounded-xl bg-[#e6f2ff] p-8 flex flex-col justify-end min-h-[280px] md:min-h-[320px] transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0b0742] leading-tight mb-2">
                    Model UN
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 leading-normal font-light">
                    diplomacy, debate, critical thinking
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
