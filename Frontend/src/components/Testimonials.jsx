import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

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
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Review Text */}
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#1355FF]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
