import React, { useState } from 'react';

export default function Signup({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt:', { name, email, password });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* Logo */}
        <div 
          onClick={() => onNavigate && onNavigate('home')} 
          className="inline-flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#CCFF00] flex items-center justify-center font-extrabold text-[#1355FF] text-xl shadow-sm">
            b
          </div>
          <span className="text-3xl font-extrabold tracking-tight text-slate-900">
            ByteSpace
          </span>
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-slate-900">
          Create your ByteSpace account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <button 
            onClick={() => onNavigate && onNavigate('login')} 
            className="font-medium text-[#1355FF] hover:underline cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-3xl sm:px-10 border border-slate-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#1355FF] focus:outline-none focus:ring-2 focus:ring-[#1355FF]/20 text-sm"
                  placeholder="Jane Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Email address
              </label>
              <div className="mt-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#1355FF] focus:outline-none focus:ring-2 focus:ring-[#1355FF]/20 text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="mt-1.5">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#1355FF] focus:outline-none focus:ring-2 focus:ring-[#1355FF]/20 text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="text-xs text-slate-500">
              By creating an account, you agree to our{' '}
              <a href="#terms" className="text-[#1355FF] underline">Terms of Service</a> and{' '}
              <a href="#privacy" className="text-[#1355FF] underline">Privacy Policy</a>.
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-[#0F172A] bg-[#CCFF00] hover:bg-[#BAEB00] focus:outline-none transition-all cursor-pointer"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors font-medium"
            >
              &larr; Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
