import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden flex flex-col justify-between bg-navy-950 text-white">
      {/* Floating Navbar */}
      <div className="relative z-30 w-full">
        <Navbar theme="dark" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex items-center w-full px-6 py-6 md:px-16 lg:py-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Title, Description, and Actions */}
          <div className="lg:col-span-5 max-w-2xl flex flex-col justify-center gap-6 md:gap-8 text-white lg:h-full lg:justify-between py-2">
            {/* Top Text Group */}
            <div className="flex flex-col gap-4 md:gap-5">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold leading-[1.15] tracking-tight">
                Your Child Is Getting<br />
                <span className="italic font-bold">Good Grades.</span><br />
                Are They Getting<br />
                Ready For Life?
              </h1>
              
              <p className="text-base sm:text-lg md:text-[19px] font-normal leading-relaxed text-zinc-300 max-w-xl">
                Live, hands-on training in public speaking, confidence, and leadership delivered right at your child's school.
              </p>
            </div>
            
            {/* Bottom Button Group */}
            <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full sm:w-auto mt-6 lg:mt-0">
              <Link 
                href="/contact-us?mode=offline"
                className="flex-1 sm:flex-initial text-center bg-white text-black font-[550] px-8 py-3.5 rounded-full hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-base sm:text-lg shadow-lg cursor-pointer"
              >
                Offline Training
              </Link>
              <Link 
                href="/contact-us?mode=online"
                className="flex-1 sm:flex-initial text-center bg-white text-black font-[550] px-8 py-3.5 rounded-full hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-base sm:text-lg shadow-lg cursor-pointer"
              >
                Online Session
              </Link>
            </div>
          </div>

          {/* Right Column: Graphic, Pills, and Stat */}
          <div className="lg:col-span-7 w-full flex flex-col items-center max-w-[700px] lg:ml-auto lg:translate-x-10">
            {/* Logo Graphic */}
            <div className="relative w-full max-w-[460px] xl:max-w-[560px] 2xl:max-w-[650px] mb-4" style={{ aspectRatio: "3068 / 1416" }}>
              <Image
                src="/herosectionlogo.png"
                alt="Tarkus Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>

            {/* Bottom Group: Pills and Stat */}
            <div className="w-full flex flex-col gap-4 xl:gap-6 max-w-[480px]">
              {/* Pill Tags */}
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-2 w-full">
                <span className="px-3 py-1.5 md:flex-1 rounded-full bg-[#EEE9FF]/30 border border-tint-lavender text-white text-[10px] md:text-[11px] tracking-wide font-mono font-semibold whitespace-nowrap text-center">
                  Speak with confidence
                </span>
                <span className="px-3 py-1.5 md:flex-1 rounded-full bg-[#EEE9FF]/30 border border-tint-lavender text-white text-[10px] md:text-[11px] tracking-wide font-mono font-semibold whitespace-nowrap text-center">
                  Lead with presence
                </span>
                <span className="px-3 py-1.5 md:flex-1 rounded-full bg-[#EEE9FF]/30 border border-tint-lavender text-white text-[10px] md:text-[11px] tracking-wide font-mono font-semibold whitespace-nowrap text-center">
                  Think under pressure
                </span>
              </div>

              {/* Statistics Block */}
              <div className="flex items-center gap-4 w-full px-2">
                <span className="text-4xl sm:text-[40px] font-light text-white tracking-tighter leading-none whitespace-nowrap">
                  88%
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-[1.4] text-left flex-grow">
                  of parents saw improved confidence and<br />classroom participation within one term.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Stripline */}
      <div className="w-full bg-white text-[#160F53] text-center py-3 text-[10px] sm:text-[11px] font-semibold uppercase select-none">
        BUILDING THE LEADERS OF TOMORROW
      </div>
    </section>
  );
}
