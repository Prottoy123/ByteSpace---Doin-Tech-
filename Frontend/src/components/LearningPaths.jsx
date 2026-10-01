import React from 'react';
import { Compass, Code, Monitor, Building2, Megaphone, Camera } from 'lucide-react';

export default function LearningPaths({ onSelectPath }) {
  const paths = [
    { name: 'Design', icon: Compass },
    { name: 'Development', icon: Code },
    { name: 'IT & Software', icon: Monitor },
    { name: 'Business', icon: Building2 },
    { name: 'Marketing', icon: Megaphone },
    { name: 'Photography', icon: Camera }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.name}
                onClick={() => onSelectPath && onSelectPath(path.name)}
                className="group bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-[#CCFF00] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Lime Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#CCFF00] flex items-center justify-center text-[#0F172A] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>
                
                {/* Label */}
                <span className="mt-4 text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1355FF] transition-colors">
                  {path.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
