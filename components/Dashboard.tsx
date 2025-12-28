
import React from 'react';
import { User, Order } from '../types';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  onClose: () => void;
}

const MOCK_ORDERS: Order[] = [
  { id: 'EVG-0081', date: '2024-05-12', total: 1199.99, status: 'Processing', items: [] },
  { id: 'EVG-0074', date: '2024-04-28', total: 245.00, status: 'Delivered', items: [] },
  { id: 'EVG-0032', date: '2024-03-05', total: 89.99, status: 'Delivered', items: [] },
];

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex flex-col bg-[#fbfcfb] animate-fade-in">
      {/* Dynamic Header */}
      <div className="bg-slate-950 text-white p-8 md:px-16 flex justify-between items-center relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]"></div>
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 bg-emerald-600 rounded-3xl flex items-center justify-center font-black text-2xl shadow-2xl shadow-emerald-900/40 rotate-12">E</div>
          <div>
            <h1 className="text-3xl font-black tracking-tighter">Evergreen Member</h1>
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Elite Status • Platinum Tier</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300 relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-8 md:p-20 scroll-smooth">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Side Panel */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-white p-12 rounded-[48px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col items-center text-center">
              <div className="relative mb-8">
                 <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-[36px] object-cover ring-[12px] ring-emerald-50 border-4 border-white" />
                 <div className="absolute bottom-[-10px] right-[-10px] w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white border-4 border-white shadow-xl">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                 </div>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">{user.name}</h2>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-10">{user.email}</p>
              
              <div className="w-full space-y-4 mb-10">
                <div className="bg-[#f9fbfb] p-6 rounded-3xl border border-slate-50 flex justify-between items-center group hover:bg-emerald-50 transition-colors">
                  <div className="text-left">
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Rewards</div>
                    <div className="text-2xl font-black text-emerald-600">{user.loyaltyPoints} pts</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">💎</div>
                </div>
              </div>

              <div className="w-full grid grid-cols-1 gap-4">
                 <button className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all">Profile Settings</button>
                 <button 
                  onClick={onLogout}
                  className="w-full py-5 rounded-2xl border-2 border-slate-50 text-slate-400 font-black text-xs uppercase tracking-[0.2em] hover:bg-rose-50 hover:text-rose-500 hover:border-rose-100 transition-all"
                >
                  Sign Out
                </button>
              </div>
            </div>

            <div className="bg-emerald-600 p-10 rounded-[48px] text-white shadow-2xl shadow-emerald-200 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-3 leading-tight tracking-tight">Eco-Impact Score</h3>
                <p className="text-emerald-100 text-sm font-medium mb-10 opacity-80">Your sustainable choices have saved approximately 42kg of CO2 this year.</p>
                <div className="h-4 bg-white/10 rounded-full mb-3 overflow-hidden border border-white/10">
                  <div className="h-full bg-white rounded-full group-hover:bg-emerald-200 transition-colors" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-emerald-100">
                  <span>Novice</span>
                  <span className="text-white">65% to Guardian</span>
                </div>
              </div>
              <div className="absolute top-[-30px] right-[-30px] w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Active Shipments', val: '01', icon: '📦' },
                { label: 'Saved Favorites', val: '24', icon: '🌿' },
                { label: 'Total Legacy', val: '12', icon: '✨' }
              ].map((s, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[40px] border border-slate-50 shadow-sm flex items-center justify-between group hover:border-emerald-200 transition-all">
                  <div>
                    <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter group-hover:text-emerald-600 transition-colors">{s.val}</div>
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{s.label}</div>
                  </div>
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
                </div>
              ))}
            </div>

            {/* Detailed Orders */}
            <div className="bg-white p-14 rounded-[56px] shadow-sm border border-slate-50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Your Legacy Orders</h3>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">Review your lifetime essentials</p>
                </div>
                <button className="bg-slate-50 text-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all shadow-sm">Explore All</button>
              </div>

              <div className="space-y-6">
                {MOCK_ORDERS.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-8 rounded-[32px] border border-slate-50 hover:bg-[#fbfcfb] hover:border-emerald-100 transition-all cursor-pointer group">
                    <div className="flex items-center gap-8">
                      <div className="w-20 h-20 bg-slate-50 rounded-[24px] flex items-center justify-center text-slate-400 group-hover:bg-white transition-all shadow-inner group-hover:shadow-emerald-100 border border-transparent group-hover:border-emerald-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-emerald-500 transition-colors"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                      </div>
                      <div>
                        <div className="font-black text-slate-900 text-xl tracking-tight mb-1">{order.id}</div>
                        <div className="text-xs font-black text-slate-300 uppercase tracking-widest">{order.date} • Standard Shipping</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-2xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">${order.total.toFixed(2)}</div>
                      <div className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full inline-block border ${
                        order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                        order.status === 'Processing' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-slate-50 text-slate-400 border-slate-100'
                      }`}>
                        {order.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: 'Security', desc: 'Secure Legacy', color: 'slate' },
                 { title: 'Addresses', desc: 'Manage Havens', color: 'emerald' },
                 { title: 'Payments', desc: 'Digital Vault', color: 'slate' },
                 { title: 'Support', desc: '24/7 Concierge', color: 'emerald' }
               ].map((action, i) => (
                 <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-50 shadow-sm text-center cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200 transition-all group">
                    <div className={`w-14 h-14 rounded-2xl bg-${action.color}-50 text-${action.color}-600 mx-auto mb-6 flex items-center justify-center font-black group-hover:bg-emerald-500 group-hover:text-white transition-all`}>
                      {i === 0 ? '🔒' : i === 1 ? '📍' : i === 2 ? '💳' : '💬'}
                    </div>
                    <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-widest">{action.title}</h4>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{action.desc}</p>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
