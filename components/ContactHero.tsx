"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "./Navbar";

export default function ContactHero() {
  const [preferredMode, setPreferredMode] = useState<"offline" | "online">("offline");
  const [grade, setGrade] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"success" | "error" | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "offline" || mode === "online") {
      setPreferredMode(mode);
    }
  }, [searchParams]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData(event.currentTarget);
    formData.append("preferred_mode", preferredMode);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "238fe2bd-8089-4c82-8cc8-4f7944b9eaf4";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitResult("success");
      } else {
        setSubmitResult("error");
      }
    } catch (error) {
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#0b0742] overflow-hidden">
      {/* Navbar overlay */}
      <div className="relative z-30 w-full">
        <Navbar />
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 w-full px-6 pt-6 pb-12 md:px-16 lg:pt-10 lg:pb-16 flex-grow flex items-start">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.15] max-w-xl text-left">
              Let's Bring Real-World<br />Skills Training to Your School
            </h1>
            <p className="text-zinc-300 text-base md:text-lg lg:text-base xl:text-lg font-light leading-relaxed max-w-md mt-4 xl:mt-6 text-left">
              Tell us about your school and what you're looking for — we'll get back to you with a tailored proposal.
            </p>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7 w-full flex justify-start lg:justify-end">
            {submitResult === "success" ? (
              <div className="bg-white rounded-3xl p-8 xl:p-10 shadow-2xl text-[#0b0742] w-full max-w-[700px] flex flex-col items-center justify-center text-center gap-6 min-h-[500px]">
                <div className="w-16 h-16 bg-[#e2f6e9] rounded-full flex items-center justify-center text-[#15803d] shrink-0">
                  <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Proposal Request Received!</h3>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-sm">
                  Thank you for reaching out. We have received your school details and will get back to you with a tailored proposal shortly.
                </p>
                <button
                  onClick={() => setSubmitResult(null)}
                  className="bg-[#0b0742] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-opacity-95 transition-all cursor-pointer shadow-md"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form 
                onSubmit={onSubmit}
                className="bg-white rounded-3xl p-8 xl:p-10 shadow-2xl text-[#0b0742] w-full max-w-[700px] flex flex-col gap-4 text-left"
              >
                
                {/* Preferred Mode Selector */}
                <div>
                  <label className="text-xs md:text-sm font-bold text-[#0b0742] mb-2 block">
                    Preferred mode *
                  </label>
                  <div className="flex flex-row gap-4 w-full">
                    {/* Offline Option */}
                    <button
                      type="button"
                      onClick={() => setPreferredMode("offline")}
                      className={`flex-1 py-3 px-5 rounded-full flex items-center gap-3 font-semibold text-sm cursor-pointer border transition-all duration-200 ${
                        preferredMode === "offline"
                          ? "bg-[#0b0742] text-white border-transparent"
                          : "bg-zinc-50 text-zinc-500 border-zinc-100 hover:bg-zinc-100"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        preferredMode === "offline" ? "border-white" : "border-zinc-400"
                      }`}>
                        {preferredMode === "offline" && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                      Offline
                    </button>

                    {/* Online Option */}
                    <button
                      type="button"
                      onClick={() => setPreferredMode("online")}
                      className={`flex-1 py-3 px-5 rounded-full flex items-center gap-3 font-semibold text-sm cursor-pointer border transition-all duration-200 ${
                        preferredMode === "online"
                          ? "bg-[#0b0742] text-white border-transparent"
                          : "bg-zinc-50 text-zinc-500 border-zinc-100 hover:bg-zinc-100"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        preferredMode === "online" ? "border-white" : "border-zinc-400"
                      }`}>
                        {preferredMode === "online" && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                      Online
                    </button>
                  </div>
                </div>

                {/* Additional Details Header */}
                <h2 className="text-base font-bold text-[#0b0742] border-b border-zinc-100 pb-2 mt-2">
                  Additional Details
                </h2>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-600 mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@institute.com"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-3 px-5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-600 mb-1.5 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-3 px-5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* School Name */}
                <div>
                  <label className="text-xs font-semibold text-zinc-600 mb-1.5 block">
                    School Name *
                  </label>
                  <input
                    type="text"
                    name="school_name"
                    required
                    placeholder="Your school name"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-3 px-5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all"
                  />
                </div>

                {/* Child's Grade Dropdown */}
                <div>
                  <label className="text-xs font-semibold text-zinc-600 mb-1.5 block">
                    Child's Grade *
                  </label>
                  <div className="relative">
                    <select
                      name="grade"
                      required
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-3 pl-5 pr-12 text-sm text-zinc-800 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="grade-5">Grade 5</option>
                      <option value="grade-6">Grade 6</option>
                      <option value="grade-7">Grade 7</option>
                      <option value="grade-8">Grade 8</option>
                      <option value="grade-9">Grade 9</option>
                      <option value="grade-10">Grade 10</option>
                      <option value="grade-11">Grade 11</option>
                      <option value="grade-12">Grade 12</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-zinc-500">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-zinc-600 mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your needs and how we can help you..."
                    rows={2}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-3 px-5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all resize-none h-[90px] xl:h-[110px]"
                  />
                </div>

                {/* Error Banner */}
                {submitResult === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg font-medium">
                    Something went wrong while submitting. Please try again.
                  </div>
                )}

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-2.5 mt-2">
                  <input
                    type="checkbox"
                    name="agreed"
                    id="agree-checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 rounded border-zinc-300 text-[#0b0742] focus:ring-[#0b0742] cursor-pointer mt-0.5 shrink-0"
                  />
                  <label htmlFor="agree-checkbox" className="text-zinc-500 text-xs leading-normal cursor-pointer select-none">
                    I agree to receive communications from Tarkus and understand that I can unsubscribe at any time.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !agreed}
                  className={`w-full bg-[#0b0742] text-white py-3.5 rounded-full font-semibold text-sm mt-3 shadow-md text-center flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    (isSubmitting || !agreed) ? "opacity-60 cursor-not-allowed" : "hover:bg-opacity-95 hover:scale-[1.01] active:scale-[0.99]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Elevating Training...
                    </>
                  ) : (
                    "Let's Elevate Your Training Experience"
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
