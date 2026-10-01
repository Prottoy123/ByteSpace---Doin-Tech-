import React, { useState } from 'react';
import { Star, BarChart2 } from 'lucide-react';
import card2Img from '../assets/card2.png';
import card3Img from '../assets/card3.png';
import people1 from '../assets/people1.png';
import people2 from '../assets/people2.png';
import people3 from '../assets/people3.png';

export default function Signup({ onNavigate }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', { fullName, email, password });
  };

  return (
    <div className="min-h-screen hero-grid-bg relative text-white flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden selection:bg-[#CCFF00] selection:text-[#0F172A]">
      
      {/* Top Header / Logo */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-20">
        <div 
          onClick={() => onNavigate && onNavigate('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#CCFF00] flex items-center justify-center font-extrabold text-[#1355FF] text-xl sm:text-2xl shadow-sm group-hover:scale-105 transition-transform">
            b
          </div>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </div>

        <button
          onClick={() => onNavigate && onNavigate('home')}
          className="text-xs sm:text-sm font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all cursor-pointer"
        >
          &larr; Back to Home
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-6xl mx-auto my-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column: Heading, Subtext & Graphic Illustration */}
        <div className="lg:col-span-6 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sign up and come in
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-md font-normal leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
            </p>
          </div>

          {/* Graphical Card Mockup Composition matching Figma */}
          <div className="relative w-full max-w-[420px] h-[360px] sm:h-[400px] mt-4 select-none">
            
            {/* 3D Lime Torus (Top Left) */}
            <div className="absolute -top-4 left-4 sm:left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[14px] sm:border-[16px] border-[#CCFF00] -rotate-12 z-20 pointer-events-none drop-shadow-xl"></div>

            {/* 3D Lime Pyramid/Cone (Bottom Left) */}
            <div className="absolute bottom-2 -left-2 sm:left-0 w-14 h-16 sm:w-16 sm:h-20 z-20 pointer-events-none drop-shadow-xl">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform -rotate-12">
                <polygon points="50,10 90,85 10,85" fill="#CCFF00" />
                <polygon points="50,10 90,85 50,85" fill="#B4E600" />
              </svg>
            </div>

            {/* 3D White Ribbon / Squiggle (Mid Right) */}
            <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-16 h-20 sm:w-20 sm:h-24 z-20 pointer-events-none drop-shadow-lg">
              <svg viewBox="0 0 100 120" fill="none" className="w-full h-full">
                <path d="M20,20 Q60,10 50,45 T70,75 T40,105" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
              </svg>
            </div>

            {/* Background Course Card: Build Digital Asset (card2.png) */}
            <div className="absolute top-6 left-0 sm:left-2 w-[240px] sm:w-[260px] bg-white rounded-3xl p-3 shadow-xl -rotate-6 z-0 border border-slate-100 text-left">
              <div className="w-full h-28 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={card2Img}
                  alt="Build Digital Asset"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Build Digital Asset
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  by <span className="text-[#1355FF]">purepearl studio</span>
                </div>
                <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="flex items-center gap-1 font-semibold text-slate-500 text-[11px]">
                    <BarChart2 className="w-3 h-3 text-slate-400" /> Beginner
                  </span>
                  <span className="font-extrabold text-[#1355FF] text-xs">
                    $25<span className="text-[10px] text-slate-400 font-normal">/lifetime</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Foreground Course Card: the Power of Big Data (card3.png) */}
            <div className="absolute top-12 left-14 sm:left-20 w-[260px] sm:w-[285px] bg-white rounded-3xl p-3.5 shadow-2xl rotate-2 z-10 border border-slate-100 text-left">
              <div className="w-full h-32 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={card3Img}
                  alt="the Power of Big Data"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3">
                <div className="flex items-start justify-between gap-1">
                  <div className="text-sm font-bold text-slate-900 leading-snug">
                    the Power of Big Data
                  </div>
                  <div className="flex items-center gap-0.5 text-xs font-bold text-slate-800 shrink-0">
                    <span>4.5</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  by <span className="text-[#1355FF]">purepearl studio</span>
                </div>
                <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-slate-100 text-xs">
                  <span className="flex items-center gap-1 font-semibold text-slate-500 text-[11px]">
                    <BarChart2 className="w-3 h-3 text-slate-400" /> Beginner
                  </span>
                  <div className="flex -space-x-1.5 items-center">
                    <img className="h-5 w-5 rounded-full ring-2 ring-white object-cover" src={people1} alt="Student" />
                    <img className="h-5 w-5 rounded-full ring-2 ring-white object-cover" src={people2} alt="Student" />
                    <div className="h-5 w-5 rounded-full bg-[#CCFF00] text-[9px] font-bold text-slate-900 flex items-center justify-center ring-2 ring-white">
                      26+
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-left">
                  <span className="font-extrabold text-[#1355FF] text-base">
                    $25<span className="text-[11px] text-slate-400 font-normal">/lifetime</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Attached Floating Lime Happy Students Card */}
            <div className="absolute -bottom-2 right-2 sm:right-4 z-30 bg-[#CCFF00] text-[#0F172A] p-3 rounded-2xl shadow-xl w-44 sm:w-48 text-left transform rotate-1">
              <div className="text-xs font-bold text-slate-900">
                Happy Students
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-800 mt-0.5">
                <span>4.5</span>
                <span className="text-slate-600 font-normal">(240)</span>
                <Star className="w-3 h-3 fill-amber-500 text-amber-500 ml-0.5" />
              </div>
              <div className="flex -space-x-1.5 items-center mt-2">
                <img className="h-5 w-5 rounded-full ring-2 ring-white object-cover" src={people1} alt="Student" />
                <img className="h-5 w-5 rounded-full ring-2 ring-white object-cover" src={people2} alt="Student" />
                <img className="h-5 w-5 rounded-full ring-2 ring-white object-cover" src={people3} alt="Student" />
                <div className="h-5 w-5 rounded-full bg-slate-900 text-[9px] font-bold text-white flex items-center justify-center ring-2 ring-white">
                  2K+
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Clean White Form Box */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl text-slate-900 border border-slate-100">
            
            {/* Header */}
            <div>
              <span className="text-xs font-bold text-[#1355FF] tracking-wider uppercase">
                Create an Account
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-1">
                Welcome to ByteSpace
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="mt-2 w-full bg-[#F8FAFC] border border-slate-200/90 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1355FF] focus:ring-4 focus:ring-[#1355FF]/10 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="mt-2 w-full bg-[#F8FAFC] border border-slate-200/90 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1355FF] focus:ring-4 focus:ring-[#1355FF]/10 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="mt-2 w-full bg-[#F8FAFC] border border-slate-200/90 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1355FF] focus:ring-4 focus:ring-[#1355FF]/10 transition-all font-medium"
                />
              </div>

              {/* Submit Button (Right Aligned Lime Pill Button) */}
              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="bg-[#CCFF00] hover:bg-[#BAEB00] text-[#0F172A] font-bold text-sm px-8 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Bottom Navigation Link */}
            <div className="mt-8 text-center text-xs text-slate-500 font-medium pt-2">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('login')}
                className="font-bold text-[#1355FF] hover:underline cursor-pointer"
              >
                Login
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Footer copyright */}
      <div className="w-full text-center py-4 text-xs text-white/50 z-10">
        &copy; 2026 ByteSpace. All rights reserved.
      </div>

    </div>
  );
}
