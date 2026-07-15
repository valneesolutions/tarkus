export default function AboutWhyItWorks() {
  return (
    <section className="relative w-full bg-white py-16 px-6 md:py-24 md:px-16 overflow-hidden border-t border-zinc-100">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Heading and Subtitle */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h2 className="text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#0b0742] tracking-tight leading-tight mb-4">
            Why It Works
          </h2>
          <p className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed max-w-sm">
            Three hands-on programs,<br />
            chosen by your school:
          </p>
        </div>

        {/* Right Column: List of items */}
        <div className="lg:col-span-7 w-full flex justify-start lg:justify-end">
          <div className="flex flex-col gap-8 md:gap-10 w-full max-w-[640px]">
            
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              {/* Badge Checkmark SVG */}
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#0b0742] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7 3.1 5.52l.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.2 3.4-1.46 3.4 1.46 1.89-3.2 3.61-.82-.34-3.69L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <p className="text-zinc-900 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl text-left">
                No lectures — students speak, lead, and debate every session
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#0b0742] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7 3.1 5.52l.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.2 3.4-1.46 3.4 1.46 1.89-3.2 3.61-.82-.34-3.69L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <p className="text-zinc-900 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl text-left">
                Assessed on live performance, not exams — with video portfolios and trainer feedback
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#0b0742] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7 3.1 5.52l.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.2 3.4-1.46 3.4 1.46 1.89-3.2 3.61-.82-.34-3.69L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <p className="text-zinc-900 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl text-left">
                We handle everything; schools just provide the venue
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
