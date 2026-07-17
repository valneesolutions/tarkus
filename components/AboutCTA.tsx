import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:py-28 md:px-16 overflow-hidden border-t border-zinc-100">
      <div className="w-full mx-auto flex flex-col items-center text-center">
        
        {/* Main CTA Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0b0742] leading-[1.3] w-full tracking-tight">
          Excellence isn't accidental, it's cultivated. We don't prepare students<br />
          for exams. We prepare them for the rooms that matter
        </h2>

        {/* Buttons Group */}
        <div className="flex flex-row gap-4 mt-8 md:mt-10">
          <Link 
            href="/contact-us?mode=offline"
            className="bg-[#0b0742] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm md:text-base shadow-md cursor-pointer text-center"
          >
            Offline Training
          </Link>
          <Link 
            href="/contact-us?mode=online"
            className="bg-[#0b0742] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm md:text-base shadow-md cursor-pointer text-center"
          >
            Online Session
          </Link>
        </div>

        {/* Subtext */}
        
      </div>
    </section>
  );
}
