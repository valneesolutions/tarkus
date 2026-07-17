export default function InfoSection() {
  return (
    <section className="relative w-full bg-[#080227] py-10 px-6 md:py-14 md:px-16 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start">
        
        {/* Left Side: Training Description */}
        <div className="flex flex-col justify-start">
          <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-light text-zinc-100 leading-[1.4] max-w-xl">
            Live, hands-on training in public speaking, confidence, and leadership — delivered right at your child's school.
          </p>
        </div>

        {/* Right Side: Tags and Stats */}
        <div className="flex flex-col items-start w-full max-w-[540px] lg:ml-auto">
          {/* Pill Tags */}
          <div className="flex flex-wrap lg:flex-nowrap justify-between w-full gap-2 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-tint-lavender text-navy-950 text-[11px] tracking-wide font-mono font-semibold whitespace-nowrap">
              Speak with confidence
            </span>
            <span className="px-3.5 py-1 rounded-full bg-tint-lavender text-navy-950 text-[11px] tracking-wide font-mono font-semibold whitespace-nowrap">
              Lead with presence
            </span>
            <span className="px-3.5 py-1 rounded-full bg-tint-lavender text-navy-950 text-[11px] tracking-wide font-mono font-semibold whitespace-nowrap">
              Think under pressure
            </span>
          </div>

          {/* Statistics Block */}
          <div className="flex items-center justify-between w-full gap-4">
            <span className="text-5xl sm:text-6xl font-light text-white tracking-tighter leading-none whitespace-nowrap">
              88%
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-[410px] font-mono leading-[1.4] text-left">
              of parents saw improved confidence and classroom participation within one term.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
