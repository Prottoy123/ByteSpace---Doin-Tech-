import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import people1 from '../assets/people1.png';
import people2 from '../assets/people2.png';
import people3 from '../assets/people3.png';

const peopleMap = {
  1: people1,
  2: people2,
  3: people3,
};

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#1355FF]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid: Two Columns (Title Left, Intro Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Discover What Our<br />Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => {
            const avatarImg = peopleMap[testimonial.id] || testimonial.avatar;
            return (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left"
              >
                {/* Avatar at Top */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-slate-100 mb-5 shrink-0 ring-2 ring-slate-100 shadow-sm">
                  <img
                    src={avatarImg}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author & Role */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#1355FF] mt-1">
                    {testimonial.role}
                  </p>
                </div>

                {/* Quote Content */}
                <p className="text-sm text-slate-600 leading-relaxed mt-4 font-normal">
                  {testimonial.content}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
