import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1355FF] text-white sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate && onNavigate('home')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#CCFF00] flex items-center justify-center font-extrabold text-[#1355FF] text-xl shadow-sm group-hover:scale-105 transition-transform">
            b
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a 
            href="#home" 
            className="text-white hover:text-[#CCFF00] transition-colors"
          >
            Home
          </a>
          <a 
            href="#courses" 
            className="text-white/80 hover:text-white transition-colors"
          >
            Courses
          </a>
          <a 
            href="#creators" 
            className="text-white/80 hover:text-white transition-colors"
          >
            Creators
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-5">
          <button 
            onClick={() => onNavigate && onNavigate('login')}
            className="text-sm font-medium text-white/90 hover:text-white px-3 py-2 transition-colors cursor-pointer"
          >
            Sign In
          </button>
          
          <button 
            onClick={() => onNavigate && onNavigate('signup')}
            className="text-sm font-semibold text-[#0F172A] bg-[#CCFF00] hover:bg-[#BAEB00] px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow hover:scale-[1.02] cursor-pointer"
          >
            Join Us
          </button>

          <button 
            aria-label="Shopping Cart"
            className="text-white/90 hover:text-white p-2 transition-colors relative cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button 
            aria-label="Shopping Cart"
            className="text-white p-2"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D45D8] border-t border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Home
            </a>
            <a 
              href="#courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
            >
              Courses
            </a>
            <a 
              href="#creators" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
            >
              Creators
            </a>
          </nav>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate && onNavigate('login');
              }}
              className="w-full text-center py-2.5 text-sm font-medium border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate && onNavigate('signup');
              }}
              className="w-full text-center py-2.5 text-sm font-bold bg-[#CCFF00] text-[#0F172A] rounded-full hover:bg-[#BAEB00] transition-colors"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
