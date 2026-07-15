"use client";

import { useState } from "react";
import Navbar from "./Navbar";

export default function ContactHero() {
  const [preferredMode, setPreferredMode] = useState<"offline" | "online">("offline");
  const [grade, setGrade] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#080227] overflow-hidden">
      {/* Navbar overlay */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 w-full px-6 py-12 md:px-16 md:py-20 my-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-xl text-left">
              Let's Bring Real-World Skills Training to Your School
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-md mt-6 text-left">
              Tell us about your school and what you're looking for — we'll get back to you with a tailored proposal.
            </p>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7 w-full flex justify-start lg:justify-end">
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-[#0b0742] w-full max-w-[660px] flex flex-col gap-4 text-left"
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
                    className={`flex-1 py-3 px-4 rounded-lg flex items-center gap-3 font-semibold text-sm cursor-pointer border transition-all duration-200 ${
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
                    className={`flex-1 py-3 px-4 rounded-lg flex items-center gap-3 font-semibold text-sm cursor-pointer border transition-all duration-200 ${
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
                    Email address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@institute.com"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-lg py-2.5 px-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-600 mb-1.5 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-lg py-2.5 px-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* School Name */}
              <div>
                <label className="text-xs font-semibold text-zinc-600 mb-1.5 block">
                  School name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your school name"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-lg py-2.5 px-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all"
                />
              </div>

              {/* Child's Grade Dropdown */}
              <div>
                <label className="text-xs font-semibold text-zinc-600 mb-1.5 block">
                  Child's grade *
                </label>
                <div className="relative">
                  <select
                    required
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-lg py-2.5 px-4 text-sm text-zinc-800 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all appearance-none cursor-pointer"
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
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
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
                  placeholder="Tell us more about your needs and how we can help you..."
                  rows={3}
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-lg py-2.5 px-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all resize-none h-[100px]"
                />
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start gap-2.5 mt-2">
                <input
                  type="checkbox"
                  id="agree-checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 rounded border-zinc-300 text-[#0b0742] focus:ring-[#0b0742] cursor-pointer mt-0.5 shrink-0"
                />
                <label htmlFor="agree-checkbox" className="text-zinc-500 text-[10px] sm:text-xs leading-normal cursor-pointer select-none">
                  I agree to receive communications from Tarkus and understand that I can unsubscribe at any time.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0b0742] text-white py-3.5 rounded-full font-semibold text-sm mt-4 hover:bg-opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer shadow-md text-center"
              >
                Let's Elevate Your Training Experience
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
