import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import boyImg from '../assets/boy.png';

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <section id="home" className="relative w-full hero-grid-bg text-white pt-12 pb-0 md:pt-16 overflow-hidden">
      
      {/* 3D Decorative Floating Vector Accents */}
      {/* Top Left Lime Squiggle */}
      <div className="absolute top-10 left-4 md:left-12 w-20 h-20 md:w-32 md:h-32 pointer-events-none select-none animate-pulse opacity-90">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full drop-shadow-lg">
          <path d="M20,30 Q40,5 60,30 T100,30 T60,80 T20,70" stroke="#CCFF00" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Mid Left White Coiled Spring */}
      <div className="absolute top-56 left-6 md:left-20 w-16 h-16 md:w-24 md:h-24 pointer-events-none select-none opacity-85">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
          <path d="M15,20 C35,10 65,10 75,30 C85,50 40,60 30,75 C20,90 60,95 85,85" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom Left White Torus Ring */}
      <div className="absolute bottom-16 left-2 md:left-14 w-24 h-24 md:w-36 md:h-36 pointer-events-none select-none opacity-90 z-0">
        <div className="w-full h-full rounded-full border-[18px] md:border-[24px] border-white shadow-2xl transform -rotate-12"></div>
      </div>

      {/* Top Right Lime Cylinder */}
      <div className="absolute top-10 right-4 md:right-16 w-20 h-28 md:w-28 md:h-40 pointer-events-none select-none opacity-95">
        <div className="w-full h-full bg-gradient-to-br from-[#CCFF00] via-[#BAEB00] to-[#88B800] rounded-[36px] shadow-2xl transform rotate-12"></div>
      </div>

      {/* Mid Right White 3D Cone / Pyramid */}
      <div className="absolute top-56 right-6 md:right-24 w-16 h-20 md:w-24 md:h-28 pointer-events-none select-none opacity-90">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-xl transform rotate-12">
          <polygon points="50,10 90,85 10,85" fill="#FFFFFF" fillOpacity="0.95" />
          <polygon points="50,10 90,85 50,85" fill="#E2E8F0" />
        </svg>
      </div>

      {/* Bottom Right White Zigzag */}
      <div className="absolute bottom-16 right-6 md:right-20 w-16 h-16 md:w-24 md:h-24 pointer-events-none select-none opacity-85">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
          <path d="M15,30 L45,45 L25,65 L70,80" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight md:leading-[1.15]">
          Get Access to Hundreds<br className="hidden sm:inline" /> Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form 
          onSubmit={handleSubmit}
          className="mt-8 max-w-xl mx-auto bg-white rounded-full p-2 pl-6 flex items-center shadow-xl shadow-blue-900/30 transition-all focus-within:ring-4 focus-within:ring-[#CCFF00]/40"
        >
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="w-full text-slate-800 text-sm md:text-base outline-none bg-transparent placeholder-slate-400 font-medium"
          />
          <button
            type="submit"
            className="ml-2 bg-[#CCFF00] hover:bg-[#BAEB00] text-[#0F172A] font-bold text-sm md:text-base px-6 sm:px-8 py-3 rounded-full transition-all shrink-0 cursor-pointer shadow-sm hover:shadow"
          >
            Search
          </button>
        </form>

        {/* Hero Visual Display with boy.png, Lime Circle Backdrop, and Floating UI Cards */}
        <div className="mt-8 sm:mt-12 relative mx-auto max-w-[620px] flex justify-center items-end">
          
          {/* Lime Green Circle Backdrop */}
          <div className="absolute bottom-0 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] rounded-full bg-[#CCFF00] -z-0 transform translate-y-8 sm:translate-y-12"></div>

          {/* Actual Transparent Boy Cutout Image from Assets */}
          <div className="relative z-10 w-[300px] sm:w-[410px] md:w-[460px] flex justify-center">
            <img
              src={boyImg}
              alt="ByteSpace student learning online"
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-xl"
            />
          </div>

          {/* Floating Card: UI/UX Design (Top Left) */}
          <div className="absolute top-12 left-0 sm:-left-4 md:-left-8 z-20 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col text-left transform -rotate-1 hover:rotate-0 transition-transform">
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              UI/UX Design
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
              200 Courses &bull; 1000+ Students
            </span>
          </div>

          {/* Floating Card: Learning Progress 55% (Top Right) */}
          <div className="absolute top-16 right-0 sm:-right-4 md:-right-6 z-20 bg-white/95 backdrop-blur-md text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col text-left transform rotate-2 hover:rotate-0 transition-transform w-40 sm:w-48">
            <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">
              Learning Progress
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
              55%
            </span>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-2.5 overflow-hidden">
              <div className="bg-[#CCFF00] h-full rounded-full w-[55%]"></div>
            </div>
          </div>

          {/* Floating Card: Happy Students (Bottom Left) */}
          <div className="absolute bottom-8 left-2 sm:-left-2 md:-left-4 z-20 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 text-left">
            <div>
              <div className="text-xs font-bold text-slate-900">Happy Students</div>
              <div className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold mt-0.5">
                <span>4.5</span>
                <span className="text-slate-400 font-normal">(240)</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400 ml-0.5" />
              </div>
              <div className="flex -space-x-1.5 items-center mt-2">
                <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Student" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Student" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&q=80" alt="Student" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="Student" />
                <div className="h-6 w-6 rounded-full bg-[#CCFF00] text-[10px] font-bold text-slate-900 flex items-center justify-center ring-2 ring-white">
                  2K+
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
