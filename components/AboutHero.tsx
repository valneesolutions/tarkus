import Image from "next/image";
import Navbar from "./Navbar";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[108vh] min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#0b0742]">
      {/* Centered Watermark Background Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none px-6 md:px-16 select-none -translate-y-12 md:-translate-y-16 lg:-translate-y-20">
        <div className="relative w-full aspect-[4/1] opacity-100">
          <Image
            src="/aboutlogo.svg"
            alt="Tarkus Watermark Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Floating Navbar */}
      <div className="relative z-30 w-full">
        <Navbar />
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 w-full px-6 pb-12 md:px-16 md:pb-16 lg:pb-20 mt-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 w-full">
          
          {/* Left Column: Heading */}
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight">
              We Teach The Skills Report<br />
              Cards Don't Measure
            </h1>
          </div>

          {/* Right Column: Description Text */}
          <div className="max-w-[520px] lg:text-left">
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              Tarkus partners with schools (Grades 5–12)<br />to build real communication, leadership, and<br />confidence — through practice, not lectures.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
