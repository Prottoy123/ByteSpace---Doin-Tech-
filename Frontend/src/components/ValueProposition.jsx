import React from 'react';
import { CheckCircle2, TrendingUp, Star, BarChart2 } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="w-full py-16 md:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-36">

        {/* Feature Row 1: Professional Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Your Path to Professional<br className="hidden sm:inline" /> Growth Starts Here!
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Counter */}
            <div className="pt-6 grid grid-cols-3 gap-6 max-w-md border-t border-slate-100">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1355FF]">
                  12K
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  Students
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1355FF]">
                  70+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  Courses
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1355FF]">
                  16
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Right: Graphic Card Mockup */}
          <div className="lg:col-span-6 relative flex justify-center items-center px-4 sm:px-8">
            
            {/* Background Lime Glow & 3D Squiggle */}
            <div className="absolute -top-10 -right-4 w-72 h-72 bg-[#CCFF00]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-4 -right-2 w-24 h-24 pointer-events-none select-none z-0">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <path d="M20,20 Q60,10 50,50 T70,80" stroke="#CCFF00" strokeWidth="16" strokeLinecap="round" />
              </svg>
            </div>

            {/* Main Visual Frame */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg rounded-3xl shadow-2xl bg-white border border-slate-100 p-2 sm:p-3">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Student learning"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl"
              />

              {/* Floating Mini Card: Learn Figma */}
              <div className="absolute top-10 -left-2 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[210px] sm:max-w-[240px] text-left z-20">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Learn Figma from Basic
                </div>
                <div className="text-[11px] text-[#1355FF] font-medium mt-0.5">
                  by purepearl studio
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <BarChart2 className="w-3 h-3 text-slate-400" /> Beginner
                  </span>
                  <span className="font-extrabold text-[#1355FF]">$25</span>
                </div>
              </div>

              {/* Floating Progress Badge */}
              <div className="absolute -bottom-4 right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 w-44 sm:w-48 text-left">
                <div className="text-[11px] font-semibold text-slate-400">
                  Learning Progress
                </div>
                <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
                  55%
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#CCFF00] h-full rounded-full w-[55%]"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Feature Row 2: Creator Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Graphic Card Mockup with Creator & Revenue Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            
            {/* Background Glow */}
            <div className="absolute -bottom-10 -left-6 w-72 h-72 bg-[#1355FF]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-2 sm:p-3">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Creator managing courses"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />

              {/* Floating Badge 1: Total Revenue */}
              <div className="absolute top-6 left-3 sm:left-4 bg-[#1355FF] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl max-w-[190px] sm:max-w-[210px] text-left">
                <div className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
                  Total Revenue
                </div>
                <div className="text-[10px] text-white/60">
                  July 1-28
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  $120.29
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#CCFF00] h-full rounded-full w-[70%]"></div>
                </div>
              </div>

              {/* Floating Badge 2: Year to Date */}
              <div className="absolute top-36 left-3 sm:left-4 bg-[#0D45D8] text-white p-3 sm:p-3.5 rounded-2xl shadow-xl max-w-[180px] text-left">
                <div className="text-[10px] text-white/70 font-semibold">
                  Year to Date
                </div>
                <div className="text-[10px] text-white/60">
                  2023
                </div>
                <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  $1,200.38
                </div>
                <span className="inline-block mt-1.5 text-[10px] font-bold bg-[#CCFF00] text-slate-900 px-2 py-0.5 rounded-md">
                  +12%
                </span>
              </div>

              {/* Floating Badge 3: Happy Students */}
              <div className="absolute bottom-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Student" />
                  <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Student" />
                  <div className="h-6 w-6 rounded-full bg-[#CCFF00] text-[10px] font-bold text-slate-900 flex items-center justify-center ring-2 ring-white">
                    2K+
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">Happy Students</div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-600 font-semibold">
                    <span>4.5</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-slate-400 font-normal">(240)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Text & Checklist */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">
              <strong className="text-slate-800 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="pt-4 space-y-3.5 max-w-md">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1355FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-base font-bold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
