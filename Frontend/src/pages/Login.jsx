import React, { useState } from 'react';

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
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
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          Or{' '}
          <button 
            onClick={() => onNavigate && onNavigate('signup')} 
            className="font-medium text-[#1355FF] hover:underline cursor-pointer"
          >
            create a new account
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-3xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
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

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-slate-300 text-[#1355FF] focus:ring-[#1355FF]" />
                <span className="ml-2 text-slate-600">Remember me</span>
              </label>
              <a href="#forgot" className="font-semibold text-[#1355FF] hover:underline">
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-[#0F172A] bg-[#CCFF00] hover:bg-[#BAEB00] focus:outline-none transition-all cursor-pointer"
              >
                Sign In
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
