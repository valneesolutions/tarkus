"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const isLight = theme === "light";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 md:px-16 md:py-8 relative z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
        <Image
          src="/logo.svg"
          alt="Tarkus Logo"
          width={180}
          height={180}
          className="h-20 w-auto md:h-24"
          style={
            isLight
              ? {
                  // CSS filter to color the white logo to rich navy blue (#0b0742)
                  filter: "brightness(0) saturate(100%) invert(10%) sepia(85%) saturate(4975%) hue-rotate(242deg) brightness(62%) contrast(124%)"
                }
              : undefined
          }
          priority
        />
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-6 md:gap-10">
        <Link
          href="/contact-us"
          className={`text-sm md:text-base font-medium transition-colors ${
            isLight ? "text-[#0b0742] hover:text-opacity-80" : "text-white hover:text-zinc-300"
          }`}
        >
          Contact Us
        </Link>
        <Link
          href="/about"
          className={`text-sm md:text-base font-medium transition-colors ${
            isLight ? "text-[#0b0742] hover:text-opacity-80" : "text-white hover:text-zinc-300"
          }`}
        >
          Company
        </Link>
        <Link
          href="/contact-us"
          className={`px-6 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md ${
            isLight
              ? "bg-[#0b0742] text-white hover:bg-opacity-90"
              : "bg-white text-zinc-950 hover:bg-zinc-100"
          }`}
        >
          Talk to us
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg md:hidden focus:outline-none transition-colors cursor-pointer ${
          isLight ? "text-[#0b0742] hover:bg-zinc-100" : "text-white hover:bg-white/10"
        }`}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu Container (Full Width, Top Docked) */}
      {isOpen && (
        <div 
          className={`absolute top-0 left-0 right-0 w-full z-50 px-6 py-4 md:px-16 md:py-8 flex flex-col shadow-2xl border-b transition-all duration-300 ${
            isLight 
              ? "bg-white border-zinc-100 text-[#0b0742]" 
              : "bg-[#0b0742] border-white/10 text-white shadow-2xl"
          }`}
        >
          {/* Header inside dropdown */}
          <div className="flex items-center justify-between w-full mb-8">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:opacity-90">
              <Image
                src="/logo.svg"
                alt="Tarkus Logo"
                width={180}
                height={180}
                className="h-20 w-auto"
                style={
                  isLight
                    ? {
                        filter: "brightness(0) saturate(100%) invert(10%) sepia(85%) saturate(4975%) hue-rotate(242deg) brightness(62%) contrast(124%)"
                      }
                    : undefined
                }
                priority
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-2 rounded-lg focus:outline-none transition-colors cursor-pointer ${
                isLight ? "text-[#0b0742] hover:bg-zinc-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links inside dropdown */}
          <div className="flex flex-col items-center gap-6 pb-6 w-full">
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:opacity-85 transition-opacity"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:opacity-85 transition-opacity"
            >
              Company
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className={`px-8 py-3 rounded-full font-bold text-base text-center w-full max-w-[280px] transition-all shadow-md mt-2 ${
                isLight
                  ? "bg-[#0b0742] text-white hover:bg-opacity-90"
                  : "bg-white text-[#0b0742] hover:bg-zinc-100"
              }`}
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
