import React from 'react';
import { CheckCircle2, Star, BarChart2 } from 'lucide-react';
import boyImg from '../assets/boy.png';
import girlImg from '../assets/girl.png';
import course1Img from '../assets/course_1.png';

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

          {/* Right: Graphic Card Mockup with boy.png and Pure Layered UI */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Soft Ambient Background Glow */}
            <div className="absolute -top-10 -right-6 w-80 h-80 bg-[#CCFF00]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative w-full max-w-[460px] h-[380px] sm:h-[420px] flex items-end justify-center">
              
              {/* Layer 1: Background Course Card (Learn Figma from Basic) */}
              <div className="absolute top-2 left-0 sm:left-2 w-[240px] sm:w-[260px] bg-white rounded-3xl p-3.5 shadow-xl border border-slate-100 -rotate-2 z-0">
                <div className="relative w-full h-28 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={course1Img}
                    alt="Learn Figma from Basic"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white">
                    <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">17 Lessons</span>
                    <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">2 hours 16 mins</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-sm font-bold text-slate-900 leading-snug">
                    Learn Figma from Basic
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    by <span className="text-[#1355FF]">purepearl studio</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <span className="flex items-center gap-1 font-semibold text-slate-500">
                      <BarChart2 className="w-3.5 h-3.5 text-slate-400" /> Beginner
                    </span>
                    <span className="font-extrabold text-[#1355FF]">
                      $25<span className="text-[10px] text-slate-400 font-normal">/lifetime</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Layer 2: 3D Lime Squiggle behind boy's right shoulder */}
              <div className="absolute top-4 right-4 sm:right-8 w-20 h-24 sm:w-24 sm:h-28 z-10 pointer-events-none select-none">
                <svg viewBox="0 0 100 120" fill="none" className="w-full h-full drop-shadow-lg">
                  <path d="M20,20 Q60,10 50,45 T70,75 T40,105" stroke="#CCFF00" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Layer 3: The Actual Boy Transparent Cutout Image from Assets */}
              <div className="relative z-20 w-[270px] sm:w-[320px] mb-2 sm:mb-4">
                <img
                  src={boyImg}
                  alt="Student learning with ByteSpace"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
                />
              </div>

              {/* Layer 4: Floating Learning Progress Badge (in front of laptop) */}
              <div className="absolute top-16 right-0 sm:right-2 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 w-44 sm:w-48 text-left transform rotate-1">
                <div className="text-[11px] font-semibold text-slate-500">
                  Learning Progress
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  55%
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full mt-2.5 overflow-hidden">
                  <div className="bg-[#CCFF00] h-full rounded-full w-[55%]"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Feature Row 2: Creator Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Graphic Card Mockup with girl.png and Pure Layered UI */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            
            {/* Background Glow */}
            <div className="absolute -bottom-10 -left-6 w-80 h-80 bg-[#1355FF]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative w-full max-w-[460px] h-[400px] sm:h-[450px] flex items-end justify-center">
              
              {/* Layer 1: Floating Total Revenue Card (Top Left) */}
              <div className="absolute top-2 left-0 sm:left-4 z-10 bg-[#1355FF] text-white p-4 rounded-2xl shadow-xl max-w-[190px] sm:max-w-[210px] text-left transform -rotate-1">
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

              {/* Layer 2: Floating Year to Date Card (Mid Left) */}
              <div className="absolute top-32 left-0 sm:left-4 z-10 bg-[#0D45D8] text-white p-3.5 rounded-2xl shadow-xl max-w-[170px] sm:max-w-[180px] text-left transform -rotate-2">
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

              {/* Layer 3: 3D Lime Spiral behind girl's left shoulder */}
              <div className="absolute top-10 right-4 sm:right-8 w-20 h-28 sm:w-24 sm:h-32 z-10 pointer-events-none select-none">
                <svg viewBox="0 0 100 130" fill="none" className="w-full h-full drop-shadow-lg">
                  <path d="M20,20 Q60,10 50,45 T70,75 T40,110" stroke="#CCFF00" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Layer 4: The Actual Girl Transparent Cutout Image from Assets */}
              <div className="relative z-20 w-[260px] sm:w-[310px]">
                <img
                  src={girlImg}
                  alt="ByteSpace Course Creator"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
                />
              </div>

              {/* Layer 5: Floating Happy Students Card (in front of tablet) */}
              <div className="absolute bottom-6 right-0 sm:right-2 z-30 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 text-left">
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
