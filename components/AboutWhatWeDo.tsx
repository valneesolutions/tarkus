import Link from "next/link";

export default function AboutWhatWeDo() {
  return (
    <section className="relative w-full bg-white py-16 px-6 md:py-24 md:px-16 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Heading and Subtitle */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h2 className="text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#0b0742] tracking-tight leading-tight mb-4">
            What We Do:
          </h2>
          <p className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed max-w-sm">
            Three hands-on programs,<br />
            chosen by your school:
          </p>
        </div>

        {/* Right Column: Staggered Cards */}
        <div className="lg:col-span-7 w-full flex justify-start lg:justify-end">
          <div className="flex flex-col md:flex-row items-stretch md:items-end gap-5 md:gap-6 w-full max-w-[640px] pb-12">
            
            {/* Card 2 (Left on Desktop, Middle on Mobile) */}
            <div className="order-2 md:order-1 flex-1 min-h-[205px] rounded-lg bg-[#eee9fc] p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
              <span className="text-2xl font-bold text-[#0b0742]">2</span>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0b0742] leading-tight mb-2">
                  Public Speaking
                </h3>
                <p className="text-xs md:text-sm text-zinc-600 leading-normal font-light">
                  articulation, persuasion, presence
                </p>
              </div>
            </div>

            {/* Card 1 (Middle on Desktop, Top on Mobile) */}
            <div className="order-1 md:order-2 flex-1 min-h-[230px] rounded-lg bg-[#e2f6e9] p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
              <span className="text-2xl font-bold text-[#0b0742]">1</span>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0b0742] leading-tight mb-2">
                  Personality Development
                </h3>
                <p className="text-xs md:text-sm text-zinc-600 leading-normal font-light">
                  confidence, communication, social presence
                </p>
              </div>
            </div>

            {/* Card 3 (Right on Desktop, Bottom on Mobile) */}
            <div className="order-3 md:order-3 flex-1 min-h-[180px] rounded-lg bg-[#e6f2ff] p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
              <span className="text-2xl font-bold text-[#0b0742]">3</span>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0b0742] leading-tight mb-2">
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
    </section>
  );
}
