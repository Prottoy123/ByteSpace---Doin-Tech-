import React from 'react';

export default function CreatorCTA({ onJoin }) {
  return (
    <section id="creators" className="relative w-full cta-grid-bg text-white py-20 md:py-28 overflow-hidden">
      
      {/* 3D Decorative Floating Vector Shapes */}
      {/* Top Left Lime Squiggle */}
      <div className="absolute top-6 left-6 md:left-14 w-20 h-20 md:w-28 md:h-28 pointer-events-none select-none opacity-90">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-lg">
          <path d="M15,20 Q40,5 60,25 T90,30 T50,75 T15,65" stroke="#CCFF00" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Bottom Left Lime Torus */}
      <div className="absolute -bottom-10 left-4 md:left-16 w-28 h-28 md:w-36 md:h-36 pointer-events-none select-none opacity-95">
        <div className="w-full h-full rounded-full border-[18px] md:border-[24px] border-[#CCFF00] shadow-2xl transform -rotate-12"></div>
      </div>

      {/* Mid Left White Wedge/Cone */}
      <div className="absolute top-1/2 left-4 md:left-24 -translate-y-1/2 w-14 h-16 md:w-20 md:h-24 pointer-events-none select-none opacity-85">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
          <polygon points="50,15 90,85 10,85" fill="#FFFFFF" fillOpacity="0.95" />
          <polygon points="50,15 90,85 50,85" fill="#E2E8F0" />
        </svg>
      </div>

      {/* Top Right Lime Cylinder/Cone */}
      <div className="absolute top-8 right-6 md:right-20 w-16 h-20 md:w-24 md:h-28 pointer-events-none select-none opacity-90">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-xl transform rotate-12">
          <polygon points="50,10 90,85 10,85" fill="#CCFF00" />
          <polygon points="50,10 90,85 50,85" fill="#B4E600" />
        </svg>
      </div>

      {/* Mid Right White Cylinder / Can */}
      <div className="absolute top-12 right-24 md:right-40 w-16 h-24 md:w-20 md:h-32 pointer-events-none select-none opacity-90 transform rotate-45">
        <div className="w-full h-full bg-gradient-to-b from-white via-slate-100 to-slate-200 rounded-[28px] shadow-2xl"></div>
      </div>

      {/* Bottom Right Lime Squiggle */}
      <div className="absolute bottom-6 right-6 md:right-16 w-20 h-20 md:w-28 md:h-28 pointer-events-none select-none opacity-90">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
          <path d="M15,25 Q50,10 40,50 T60,85" stroke="#CCFF00" strokeWidth="16" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-sm sm:text-base text-white/85 max-w-2xl mx-auto font-normal leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={() => onJoin && onJoin()}
            className="bg-[#CCFF00] hover:bg-[#BAEB00] text-[#0F172A] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer inline-flex items-center gap-2"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
