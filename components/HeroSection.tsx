import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-white text-[#0b0742]">
      {/* Floating Navbar */}
      <div className="relative z-10 w-full">
        <Navbar theme="light" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex items-start w-full px-6 pt-2 pb-8 md:px-16 md:pt-4 md:pb-10 lg:pt-6 lg:pb-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Title, Description, and Actions */}
          <div className="lg:col-span-5 max-w-2xl flex flex-col justify-between text-[#0b0742] lg:h-full">
            {/* Top Text Group */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-bold leading-[1.15] tracking-tight">
                Your Child Is Getting<br />
                <span className="italic font-bold">Good Grades.</span><br />
                Are They Getting<br />
                <span className="italic font-bold">Ready For </span><span className="font-bold">Life?</span>
              </h1>
              
              <p className="text-lg sm:text-[20px] font-normal leading-relaxed text-zinc-600 max-w-xl">
                Live, hands-on training in public speaking, confidence, and leadership delivered right at your child's school.
              </p>
            </div>
            
            {/* Bottom Button Group */}
            <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full sm:w-auto mt-8 lg:mt-0">
              <button className="flex-1 sm:flex-initial bg-[#0b0742] text-white font-[550] px-8 py-3.5 rounded-full hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-[17px] sm:text-lg md:text-[19px] shadow-lg cursor-pointer">
                Offline Training
              </button>
              <button className="flex-1 sm:flex-initial bg-[#0b0742] text-white font-[550] px-8 py-3.5 rounded-full hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-[17px] sm:text-lg md:text-[19px] shadow-lg cursor-pointer">
                Online Session
              </button>
            </div>
          </div>

          {/* Right Column: Graphic, Pills, and Stat */}
          <div className="lg:col-span-7 w-full flex flex-col items-center max-w-[700px] lg:ml-auto">
            {/* Logo Graphic */}
            <div className="relative w-full max-w-[680px] mb-6" style={{ aspectRatio: "3068 / 1416" }}>
              <Image
                src="/herosectionlogo.png"
                alt="Tarkus graphic with foundations and roof"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Bottom Group: Pills and Stat */}
            <div className="w-full flex flex-col gap-6 max-w-[480px]">
              {/* Pill Tags */}
              <div className="flex flex-row justify-between items-center gap-1.5 sm:gap-2 w-full">
                <span className="flex-1 px-1 sm:px-2 py-2 rounded-full border border-purple-100/60 bg-[#f4f3ff] text-[#0b0742] text-[9.5px] sm:text-[10px] md:text-[11px] tracking-wide font-mono whitespace-nowrap text-center">
                  Speak with confidence
                </span>
                <span className="flex-1 px-1 sm:px-2 py-2 rounded-full border border-purple-100/60 bg-[#f4f3ff] text-[#0b0742] text-[9.5px] sm:text-[10px] md:text-[11px] tracking-wide font-mono whitespace-nowrap text-center">
                  Lead with presence
                </span>
                <span className="flex-1 px-1 sm:px-2 py-2 rounded-full border border-purple-100/60 bg-[#f4f3ff] text-[#0b0742] text-[9.5px] sm:text-[10px] md:text-[11px] tracking-wide font-mono whitespace-nowrap text-center">
                  Think under pressure
                </span>
              </div>

              {/* Statistics Block */}
              <div className="flex items-center gap-4 w-full px-2">
                <span className="text-4xl sm:text-[44px] font-light text-[#0b0742] tracking-tighter leading-none whitespace-nowrap">
                  88%
                </span>
                <p className="text-xs sm:text-sm text-black font-mono leading-[1.4] text-left flex-grow">
                  of parents saw improved confidence and<br />classroom participation within one term.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Stripline */}
      <div className="w-full bg-[#0b0742] text-white text-center py-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase select-none">
        BUILDING THE LEADERS OF TOMORROW
      </div>
    </section>
  );
}
