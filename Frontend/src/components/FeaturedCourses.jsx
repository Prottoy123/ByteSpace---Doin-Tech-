import React, { useState } from 'react';
import { Star, BarChart2, BookOpen, Clock, MessageSquare } from 'lucide-react';
import { CATEGORIES, COURSES } from '../data/mockData';

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState('Featured');

  const filteredCourses = activeCategory === 'Featured'
    ? COURSES
    : COURSES.filter(course => course.category === activeCategory || course.isFeatured);

  return (
    <section id="courses" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#CCFF00] text-[#0F172A] shadow-sm scale-105'
                    : 'bg-[#F1F5F9] text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(19,85,255,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Metadata Pills */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1 text-[11px] font-medium text-white">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
                    {course.lessons}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
                    {course.duration}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="pt-4 px-1">
                {/* Title & Rating */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1355FF] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-800 shrink-0">
                    <span>{course.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                {/* Author */}
                <div className="mt-1 text-xs text-slate-400 font-medium">
                  by <span className="text-[#1355FF] hover:underline cursor-pointer">{course.author}</span>
                </div>

                {/* Level & Enrolled Avatars */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.level}</span>
                  </div>

                  {/* Student Avatars Stack */}
                  <div className="flex -space-x-1.5 items-center">
                    <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Student" />
                    <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Student" />
                    <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&q=80" alt="Student" />
                    <div className="h-6 w-6 rounded-full bg-[#CCFF00] text-[10px] font-bold text-slate-900 flex items-center justify-center ring-2 ring-white">
                      {course.enrolledCount}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1 text-left">
                  <span className="text-xl font-extrabold text-[#1355FF]">
                    {course.price}
                  </span>
                  <span className="text-xs text-slate-400 font-normal">
                    {course.period}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
