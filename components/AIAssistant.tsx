
import React, { useState, useRef, useEffect } from 'react';
import { getShoppingAssistantResponse } from '../services/geminiService';
import { PRODUCTS } from '../constants';
import { ChatMessage } from '../types';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Welcome to Evergreen Shop. I'm your curated concierge. Looking for something specific to elevate your daily life?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getShoppingAssistantResponse(userMsg, PRODUCTS, messages);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-white h-full shadow-[-40px_0_100px_rgba(0,0,0,0.1)] flex flex-col animate-slide-in-right">
        <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-slate-950 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/20 rotate-6">E</div>
            <div>
              <h2 className="text-xl font-black tracking-tight">AI Concierge</h2>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400/80">Evergreen Intelligence</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-grow overflow-y-auto p-10 space-y-8 bg-[#f9fbfb] scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[88%] p-6 rounded-[28px] ${
                m.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-tr-none shadow-xl shadow-slate-200' 
                  : 'bg-white text-slate-700 border border-slate-100/50 rounded-tl-none shadow-sm'
              }`}>
                <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{m.content}</p>
                <p className={`text-[8px] font-black uppercase tracking-[0.2em] mt-3 opacity-30 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {m.role === 'user' ? 'You' : 'Concierge'} • Just Now
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-6 rounded-[28px] rounded-tl-none shadow-sm flex gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
              </div>
            </div>
          )}
        </div>

        <div className="p-10 bg-white border-t border-slate-50">
          <div className="flex gap-4 p-2 bg-slate-50 rounded-[32px] border border-slate-100 shadow-inner group-focus-within:border-emerald-200 transition-all">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How can I assist your lifestyle today?"
              className="flex-grow p-4 bg-transparent border-none focus:outline-none focus:ring-0 text-slate-800 font-bold placeholder:text-slate-300 transition-all text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all disabled:opacity-20 shadow-xl shadow-slate-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[1px] -translate-y-[1px]"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
          <div className="flex justify-center gap-6 mt-6">
             {['Sustainability', 'Top Rated', 'New Arrivals'].map(tag => (
               <button 
                key={tag} 
                onClick={() => setInput(tag)}
                className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-emerald-600 transition-colors"
               >
                 #{tag}
               </button>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
