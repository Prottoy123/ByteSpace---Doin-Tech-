import React, { useState } from 'react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 space-y-4 max-w-md">
            {/* Logo */}
            <div 
              onClick={() => onNavigate && onNavigate('home')} 
              className="flex items-center gap-2.5 cursor-pointer group w-fit"
            >
              <div className="w-8 h-8 rounded-xl bg-[#CCFF00] flex items-center justify-center font-extrabold text-[#1355FF] text-lg shadow-sm">
                b
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                ByteSpace
              </span>
            </div>

            <p className="text-sm text-slate-600 font-medium">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#F1F5F9] text-slate-800 text-sm px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#1355FF]/20 placeholder-slate-400 font-medium"
              />
              <button
                type="submit"
                className="bg-[#CCFF00] hover:bg-[#BAEB00] text-[#0F172A] font-bold text-sm px-6 py-3 rounded-full transition-all shrink-0 cursor-pointer shadow-sm hover:shadow"
              >
                {subscribed ? 'Subscribed!' : 'Search'}
              </button>
            </form>

            <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            
            {/* Col 1 */}
            <div className="space-y-3.5">
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Featured Courses</a></li>
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Featured Categories</a></li>
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Business</a></li>
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">IT</a></li>
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Design</a></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="space-y-3.5">
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Development</a></li>
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Marketing</a></li>
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Photography</a></li>
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Finance</a></li>
                <li><a href="#courses" className="hover:text-[#1355FF] transition-colors">Sport</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3.5">
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#creators" className="hover:text-[#1355FF] transition-colors">Become a Creator</a></li>
                <li><a href="#creators" className="hover:text-[#1355FF] transition-colors">Affiliate Program</a></li>
                <li><a href="#contact" className="hover:text-[#1355FF] transition-colors">Contact</a></li>
                <li><a href="#help" className="hover:text-[#1355FF] transition-colors">Help</a></li>
                <li><a href="#about" className="hover:text-[#1355FF] transition-colors">About</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            @ 2023 ByteSpace. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-600 transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
