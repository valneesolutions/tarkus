export default function AboutProblem() {
  return (
    <section className="relative w-full bg-white py-16 px-6 md:py-24 md:px-16 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start">
        
        {/* Left Side: Section Title */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#0b0742] tracking-tight leading-tight">
            The Problem
          </h2>
        </div>

        {/* Right Side: Stat and Description */}
        <div className="flex flex-col items-start w-full max-w-[600px] lg:ml-auto">
          <div className="flex items-center gap-6 md:gap-8 justify-start w-full">
            <span className="text-7xl sm:text-8xl lg:text-[104px] font-light text-[#0b0742] tracking-tighter leading-none whitespace-nowrap select-none">
              75%
            </span>
            <p className="text-sm sm:text-base lg:text-lg text-black max-w-[285px] sm:max-w-[335px] lg:max-w-[380px] font-mono leading-[1.4] text-left">
              of career-critical skills are learned outside the classroom. Most schools aren't built to teach them. <span className="font-bold">We are.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
