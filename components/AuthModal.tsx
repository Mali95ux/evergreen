
import React, { useState } from 'react';
import { User, AuthProvider } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [isLoading, setIsLoading] = useState<AuthProvider | null>(null);

  const simulateLogin = (provider: AuthProvider) => {
    setIsLoading(provider);
    setTimeout(() => {
      const mockUser: User = {
        id: 'u-123',
        name: 'Alex Rivera',
        email: 'alex.rivera@evergreen.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
        role: 'customer',
        loyaltyPoints: 1250,
        joinedDate: 'Jan 2024'
      };
      onLogin(mockUser);
      setIsLoading(null);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xl animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-white rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] animate-fade-in flex flex-col md:flex-row min-h-[600px]">
        
        {/* Visual Brand Side */}
        <div className="hidden md:flex w-[40%] bg-emerald-600 p-12 flex-col justify-between relative overflow-hidden">
           <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>
           
           <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 font-black text-2xl mb-8 shadow-xl shadow-emerald-900/20">E</div>
              <h2 className="text-3xl font-black text-white leading-tight tracking-tighter">Your <br/>Evergreen <br/>Journey.</h2>
           </div>
           
           <div className="relative z-10">
              <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Unlock exclusive seasonal <br/>guides and sustainable rewards.
              </p>
           </div>
        </div>

        {/* Form Side */}
        <div className="flex-grow p-12 md:p-14 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter">
              {tab === 'login' ? 'Welcome Back' : 'Join Evergreen'}
            </h3>
            <button onClick={onClose} className="p-3 hover:bg-slate-50 rounded-full transition-colors text-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <button 
              onClick={() => simulateLogin('google')}
              disabled={!!isLoading}
              className="flex flex-col items-center justify-center gap-2 py-4 border-2 border-slate-50 rounded-3xl hover:border-emerald-100 hover:bg-emerald-50 transition-all group"
            >
              {isLoading === 'google' ? (
                <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#EA4335" d="M24 12.27c0-.85-.07-1.53-.22-2.27H12v4.51h6.74c-.29 1.58-1.14 2.91-2.43 3.77v3.13h3.94c2.31-2.12 3.65-5.24 3.65-8.87z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.94-3.13c-1.1.74-2.5 1.18-3.99 1.18-3.07 0-5.67-2.08-6.6-4.88H1.31v3.11A11.992 11.992 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.4 14.26c-.24-.72-.37-1.48-.37-2.26s.13-1.54.37-2.26V6.63H1.31A11.977 11.977 0 0 0 0 12c0 1.92.45 3.74 1.31 5.37l4.09-3.11z"/><path fill="#4285F4" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.67 1.31 6.63l4.09 3.11c.93-2.8 3.53-4.99 6.6-4.99z"/></svg>
              )}
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-700">Google</span>
            </button>
            <button 
              onClick={() => simulateLogin('facebook')}
              disabled={!!isLoading}
              className="flex flex-col items-center justify-center gap-2 py-4 border-2 border-slate-50 rounded-3xl hover:border-emerald-100 hover:bg-emerald-50 transition-all group"
            >
              {isLoading === 'facebook' ? (
                <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg width="24" height="24" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              )}
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-700">Facebook</span>
            </button>
          </div>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-50"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.3em]"><span className="px-6 bg-white text-slate-300">Or with email</span></div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); simulateLogin('email'); }} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input type="email" required className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-[22px] focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-800 font-bold" placeholder="name@domain.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <input type="password" required className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-[22px] focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-800 font-bold" placeholder="••••••••" />
            </div>
            
            <button 
              type="submit"
              disabled={!!isLoading}
              className="w-full py-6 bg-slate-900 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-2xl shadow-slate-100 flex items-center justify-center disabled:opacity-50"
            >
              {isLoading === 'email' ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                tab === 'login' ? 'Enter Shop' : 'Create Legacy'
              )}
            </button>
          </form>

          <p className="mt-12 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            {tab === 'login' ? "New to Evergreen?" : "Already member?"} 
            <button 
              onClick={() => setTab(tab === 'login' ? 'register' : 'login')}
              className="ml-2 text-emerald-600 hover:underline"
            >
              {tab === 'login' ? 'Create Account' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
