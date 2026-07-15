import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col z-10">
      {/* Upper Footer Area */}
      <div className="bg-[#f2ebff] w-full px-6 py-12 md:px-16 md:py-16 flex flex-col md:flex-row md:justify-between gap-10 md:gap-6 items-start md:items-end">
        
        {/* Left Column: Logo and Description */}
        <div className="flex flex-col gap-6 items-start">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Tarkus Logo"
              width={180}
              height={180}
              className="h-20 w-auto md:h-24"
              style={{
                // CSS filter to color the white embedded PNG logo to rich navy blue (#0b0742)
                filter: "brightness(0) saturate(100%) invert(10%) sepia(85%) saturate(4975%) hue-rotate(242deg) brightness(62%) contrast(124%)"
              }}
              priority
            />
          </Link>
          <p className="text-base sm:text-lg md:text-[20px] font-semibold text-[#0b0742] leading-relaxed max-w-md text-left">
            Live, hands-on training in public<br />
            speaking, confidence, and leadership<br />
            delivered right at your child's school.
          </p>
        </div>

        {/* Right Column: Navigation Links aligned horizontally at bottom-right */}
        <div className="flex flex-col items-start gap-2 mt-2">
          <span className="text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider">
            Company
          </span>
          <div className="flex flex-row gap-5 sm:gap-6 md:gap-8 items-center flex-wrap mt-1">
            <Link href="/about" className="font-bold text-base md:text-lg text-[#0b0742] hover:opacity-80 transition-opacity">
              About
            </Link>
            <Link href="/contact-us" className="font-bold text-base md:text-lg text-[#0b0742] hover:opacity-80 transition-opacity">
              Contact
            </Link>
            <Link href="/brochure" className="font-bold text-base md:text-lg text-[#0b0742] hover:opacity-80 transition-opacity">
              Brochure
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Text Strip */}
      <div className="bg-[#080227] w-full px-6 py-4 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-400 font-light border-t border-[#16103a]">
        <div>
          © 2026 Tarkus. All rights reserved.
        </div>
        <div className="flex flex-row gap-4 sm:gap-6 items-center">
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
