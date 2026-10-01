import React from 'react';

export default function PartnerLogos() {
  const logos = [
    {
      name: 'Logoipsum 1',
      svg: (
        <svg className="h-7 w-auto fill-slate-400 hover:fill-slate-600 transition-colors" viewBox="0 0 140 32">
          <circle cx="16" cy="16" r="12" fill="currentColor" fillOpacity="0.8" />
          <path d="M12 16L18 10V22L12 16Z" fill="white" />
          <text x="36" y="21" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="currentColor">logoipsum</text>
        </svg>
      )
    },
    {
      name: 'Logoipsum 2',
      svg: (
        <svg className="h-7 w-auto fill-slate-400 hover:fill-slate-600 transition-colors" viewBox="0 0 140 32">
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <circle cx="16" cy="16" r="4" fill="currentColor" />
          <text x="36" y="21" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="currentColor">logoipsum</text>
        </svg>
      )
    },
    {
      name: 'Logoipsum 3',
      svg: (
        <svg className="h-7 w-auto fill-slate-400 hover:fill-slate-600 transition-colors" viewBox="0 0 140 32">
          <path d="M16 4L26 24H6L16 4Z" fill="currentColor" />
          <text x="36" y="21" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="currentColor">logoipsum</text>
        </svg>
      )
    },
    {
      name: 'Logoipsum 4',
      svg: (
        <svg className="h-7 w-auto fill-slate-400 hover:fill-slate-600 transition-colors" viewBox="0 0 140 32">
          <rect x="6" y="6" width="20" height="20" rx="6" fill="currentColor" />
          <circle cx="16" cy="16" r="4" fill="white" />
          <text x="36" y="21" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="currentColor">logoipsum</text>
        </svg>
      )
    },
    {
      name: 'Logoipsum 5',
      svg: (
        <svg className="h-7 w-auto fill-slate-400 hover:fill-slate-600 transition-colors" viewBox="0 0 140 32">
          <ellipse cx="16" cy="16" rx="12" ry="7" fill="currentColor" />
          <text x="36" y="21" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="currentColor">logoipsum</text>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] border-y border-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center">
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
