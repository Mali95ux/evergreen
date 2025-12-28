
import React, { useState } from 'react';
import { PaymentMethod, CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  items: CartItem[];
  onComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, total, items, onComplete }) => {
  const [method, setMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xl animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-6xl bg-white rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col md:flex-row max-h-[94vh]">
        
        {/* Payment Flow */}
        <div className="md:w-[60%] p-14 md:p-20 overflow-y-auto bg-white">
          <div className="flex items-center gap-3 mb-10">
             <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black">E</div>
             <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Finalize Legacy</h2>
          </div>
          
          <div className="mb-14">
            <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6">Payment Method</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { id: 'card', name: 'Secure Card', icon: '💳' },
                { id: 'paypal', name: 'PayPal', icon: '🅿️' },
                { id: 'googlepay', name: 'Google Pay', icon: '🤖' },
                { id: 'applepay', name: 'Apple Pay', icon: '🍎' },
                { id: 'bank', name: 'Transfer', icon: '🏦' },
                { id: 'crypto', name: 'Digital Coin', icon: '💎' }
              ].map((m) => (
                <button 
                  key={m.id}
                  onClick={() => setMethod(m.id as PaymentMethod)}
                  className={`flex flex-col items-center justify-center p-6 rounded-[32px] border-2 transition-all duration-300 ${
                    method === m.id ? 'border-emerald-600 bg-emerald-50/50 shadow-xl shadow-emerald-100 scale-105' : 'border-slate-50 hover:border-emerald-100 bg-slate-50/30'
                  }`}
                >
                  <span className="text-3xl mb-2 grayscale group-hover:grayscale-0">{m.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{m.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {method === 'card' && (
              <div className="grid grid-cols-1 gap-8 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Card Holder Name</label>
                  <input type="text" placeholder="ALEX RIVERA" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-[24px] focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-800 font-bold uppercase tracking-widest" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Card Number</label>
                  <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-[24px] focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-800 font-bold tracking-widest" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-[24px] focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-800 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">CVV / CVC</label>
                    <input type="text" placeholder="123" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-[24px] focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-800 font-bold" />
                  </div>
                </div>
              </div>
            )}

            {method === 'bank' && (
              <div className="p-10 bg-emerald-50 rounded-[40px] border border-emerald-100 animate-fade-in">
                <h4 className="text-sm font-black text-emerald-900 uppercase tracking-widest mb-6">Legacy Bank Details</h4>
                <div className="space-y-4 text-sm font-bold text-emerald-800">
                  <div className="flex justify-between border-b border-emerald-100 pb-2"><span>Account</span><span>Evergreen Global Ltd.</span></div>
                  <div className="flex justify-between border-b border-emerald-100 pb-2"><span>IBAN</span><span>US90 1255 1980 4321 00</span></div>
                  <div className="flex justify-between border-b border-emerald-100 pb-2"><span>Swift</span><span>EVGNUS44</span></div>
                </div>
                <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-emerald-600/60 leading-relaxed italic">Your order will process as soon as we confirm the transfer.</p>
              </div>
            )}

            {(method !== 'card' && method !== 'bank') && (
              <div className="text-center py-20 bg-slate-50 rounded-[40px] animate-fade-in border-2 border-dashed border-slate-100">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                   <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2">Synchronizing...</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connect your digital wallet securely</p>
              </div>
            )}

            <div className="pt-6">
              <button 
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full py-7 bg-slate-900 text-white rounded-[32px] font-black text-2xl hover:bg-emerald-600 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4">
                  {isProcessing ? (
                    <>
                      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                      Securing...
                    </>
                  ) : (
                    `Complete Order • $${total.toFixed(2)}`
                  )}
                </span>
              </button>
              <div className="mt-8 flex items-center justify-center gap-6">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                   <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                   SSL Secure
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                   <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                   Ships Worldwide
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Side */}
        <div className="md:w-[40%] bg-[#fbfcfb] p-14 md:p-20 flex flex-col border-l border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="text-2xl font-black text-slate-900 mb-12 tracking-tighter relative z-10">Bag Summary</h3>
          <div className="flex-grow space-y-8 overflow-y-auto mb-12 pr-4 custom-scrollbar relative z-10">
            {items.map(item => (
              <div key={item.id} className="flex gap-6 items-center">
                <div className="relative">
                   <img src={item.image} alt={item.name} className="w-20 h-20 rounded-[20px] object-cover border-2 border-white shadow-sm" />
                   <span className="absolute -top-3 -right-3 bg-slate-900 text-white text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center ring-4 ring-[#fbfcfb] shadow-lg">
                     {item.quantity}
                   </span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-black text-slate-800 leading-tight mb-1">{item.name}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">${item.price.toFixed(2)}</p>
                </div>
                <div className="text-sm font-black text-slate-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-5 pt-8 border-t border-slate-100 relative z-10">
             <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
               <span>Essentials Subtotal</span>
               <span>${total.toFixed(2)}</span>
             </div>
             <div className="flex justify-between text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">
               <span>Carbon Offset Shipping</span>
               <span>Gratis</span>
             </div>
             <div className="flex justify-between text-4xl font-black text-slate-900 pt-6 tracking-tighter">
               <span>Total</span>
               <span>${total.toFixed(2)}</span>
             </div>
             <p className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] mt-6 leading-relaxed">By completing this order, you agree to our <br/> ethical sourcing and privacy protocols.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
