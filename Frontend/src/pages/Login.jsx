import React, { useState } from 'react';
import { Star, BarChart2 } from 'lucide-react';
import card2Img from '../assets/card2.png';
import card3Img from '../assets/card3.png';
import people1 from '../assets/people1.png';
import people2 from '../assets/people2.png';
import people3 from '../assets/people3.png';

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
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
              Sign in with ease
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-md font-normal leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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
                Sign In
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-1">
                Welcome Back
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                  Sign In
                </button>
              </div>
            </form>

            {/* "or" Divider */}
            <div className="relative my-7 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200/80"></div>
              </div>
              <span className="relative bg-white px-3 text-xs text-slate-400 font-medium lowercase">
                or
              </span>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook */}
              <button 
                type="button"
                className="w-11 h-11 rounded-full bg-[#F1F5F9] hover:bg-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                title="Sign in with Facebook"
              >
                <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              {/* Google */}
              <button 
                type="button"
                className="w-11 h-11 rounded-full bg-[#F1F5F9] hover:bg-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                title="Sign in with Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.04c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.26 21.36 7.34 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.28c-.25-.72-.38-1.49-.38-2.28s.13-1.56.38-2.28V6.59H1.26C.46 8.19 0 10.04 0 12s.46 3.81 1.26 5.41l4.02-3.13z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.26 6.59l4.02 3.13c.95-2.83 3.6-4.97 6.72-4.97z"/>
                </svg>
              </button>
            </div>

            {/* Bottom Navigation Link */}
            <div className="mt-8 text-center text-xs text-slate-500 font-medium">
              New user?{' '}
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('signup')}
                className="font-bold text-[#1355FF] hover:underline cursor-pointer"
              >
                Create an account
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
