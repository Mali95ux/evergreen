
import React, { useState, useMemo } from 'react';
import { Product, Category, CartItem, User } from './types';
import { PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { AIAssistant } from './components/AIAssistant';
import { AuthModal } from './components/AuthModal';
import { Dashboard } from './components/Dashboard';
import { CheckoutModal } from './components/CheckoutModal';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleCheckoutComplete = () => {
    setIsCheckoutOpen(false);
    setCart([]);
    // In a real app, we'd trigger a success modal here
    alert("Order Confirmed! Welcome to the Evergreen family.");
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f8faf9] flex flex-col text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-2xl border-b border-emerald-100/50">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedCategory('All')}>
            <div className="w-12 h-12 bg-emerald-600 rounded-[18px] flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-emerald-200 rotate-3 group-hover:rotate-0 transition-all duration-500">E</div>
            <div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 block leading-none">Evergreen</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Shop • Premium</span>
            </div>
          </div>

          <div className="flex-grow max-w-xl mx-12 hidden lg:block">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Find your perfect essential..."
                className="w-full bg-slate-100/50 border-2 border-transparent rounded-[20px] py-4 px-14 focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 text-slate-700 font-semibold transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsAIModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-slate-200"
            >
              <span className="animate-pulse w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="hidden md:inline">AI Assistant</span>
            </button>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative group p-2 text-slate-700 hover:text-emerald-600 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block"></div>

            {user ? (
              <button 
                onClick={() => setIsDashboardOpen(true)}
                className="flex items-center gap-3 p-1.5 pl-5 rounded-2xl border border-slate-100 hover:border-emerald-200 bg-white hover:bg-emerald-50 transition-all duration-300 group shadow-sm"
              >
                <span className="text-sm font-black text-slate-700 hidden sm:inline">{user.name.split(' ')[0]}</span>
                <img src={user.avatar} className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-50 group-hover:ring-emerald-200 transition-all" alt="Avatar" />
              </button>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="text-slate-900 font-black text-sm uppercase tracking-widest hover:text-emerald-600 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20 relative h-[500px] md:h-[600px] rounded-[60px] overflow-hidden group shadow-2xl shadow-emerald-900/10">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop" 
            alt="Nature Inspired Living" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
          <div className="relative z-10 px-12 md:px-24 h-full flex flex-col justify-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-emerald-400 font-black text-xs uppercase tracking-widest mb-8 w-fit">
              New Season Arrival
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">Live with <br/><span className="text-emerald-400">Intention.</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium max-w-xl">The Summer Collection has arrived. Curated essentials designed for longevity and effortless style.</p>
            <div className="flex flex-wrap gap-5">
               <button className="bg-emerald-500 text-white px-10 py-5 rounded-[24px] font-black text-lg hover:bg-emerald-400 transition-all hover:translate-y-[-4px] shadow-2xl shadow-emerald-500/40">
                Explore Collection
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-[24px] font-black text-lg border border-white/20 hover:bg-white/20 transition-all">
                Our Philosophy
              </button>
            </div>
          </div>
        </section>

        {/* Dynamic Nav */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-600 mb-4">The Selection</h2>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => setSelectedCategory('All')}
                className={`px-8 py-4 rounded-[22px] font-black text-xs uppercase tracking-widest transition-all duration-500 ${
                  selectedCategory === 'All' 
                    ? 'bg-slate-900 text-white shadow-2xl shadow-slate-300 -translate-y-1' 
                    : 'bg-white text-slate-400 border border-slate-100 hover:border-emerald-100 hover:text-emerald-600 shadow-sm'
                }`}
              >
                All Goods
              </button>
              {Object.values(Category).map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-4 rounded-[22px] font-black text-xs uppercase tracking-widest transition-all duration-500 ${
                    selectedCategory === cat 
                      ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-200 -translate-y-1' 
                      : 'bg-white text-slate-400 border border-slate-100 hover:border-emerald-100 hover:text-emerald-600 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-bold text-slate-400 bg-white p-2 rounded-2xl shadow-sm border border-slate-50">
            <span className="pl-4">Sort By:</span>
            <select className="bg-transparent border-none focus:ring-0 text-slate-800 font-black cursor-pointer pr-8">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>

        {/* Active Filters Bar */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="mb-12 flex items-center justify-between p-6 bg-emerald-50 rounded-[28px] border border-emerald-100 animate-fade-in">
             <div className="flex items-center gap-4">
               <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
               </span>
               <h2 className="text-xl font-black text-emerald-900">
                 {filteredProducts.length} Results for {selectedCategory !== 'All' ? selectedCategory : 'Everything'}
                 {searchQuery && <span className="text-emerald-600/60 ml-2 italic">"{searchQuery}"</span>}
               </h2>
             </div>
             <button onClick={() => {setSearchQuery(''); setSelectedCategory('All');}} className="px-5 py-2.5 bg-white text-emerald-600 font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm border border-emerald-100">Reset Search</button>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              onViewDetails={setViewingProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[60px] shadow-sm border border-slate-50">
            <div className="inline-block p-12 bg-slate-50 rounded-[40px] mb-10 text-slate-200 animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Silence in the Forest.</h2>
            <p className="text-slate-400 max-w-md mx-auto text-lg font-medium leading-relaxed">We couldn't find items matching your criteria. Our AI Concierge might be able to find something special for you.</p>
            <button onClick={() => setIsAIModalOpen(true)} className="mt-10 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-emerald-600 transition-all">Ask AI Concierge</button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 rounded-t-[60px] mt-20">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
             <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-900/40">E</div>
                  <span className="text-2xl font-black tracking-tighter uppercase">Evergreen</span>
                </div>
                <p className="text-slate-500 leading-relaxed font-medium mb-10">Crafting a more sustainable world through curated premium essentials for the modern intentional life.</p>
                <div className="flex gap-4">
                  {['IG', 'TW', 'FB', 'LI'].map(social => (
                    <div key={social} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-xs hover:bg-emerald-600 hover:border-emerald-500 transition-all cursor-pointer">{social}</div>
                  ))}
                </div>
             </div>

             <div className="md:col-span-1">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">Collections</h4>
                <ul className="space-y-4 text-slate-400 font-bold">
                  {Object.values(Category).map(c => <li key={c} className="hover:text-white transition-colors cursor-pointer">{c}</li>)}
                  <li className="hover:text-white transition-colors cursor-pointer">Gift Cards</li>
                </ul>
             </div>

             <div className="md:col-span-1">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">Company</h4>
                <ul className="space-y-4 text-slate-400 font-bold">
                  <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Sustainability</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Transparency</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Journal</li>
                </ul>
             </div>

             <div className="md:col-span-1">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">Join the Family</h4>
                <p className="text-slate-500 mb-8 font-medium">Subscribe for early access and seasonal guides.</p>
                <div className="flex gap-3">
                  <input type="email" placeholder="email@evergreen.com" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 flex-grow focus:outline-none focus:border-emerald-500 transition-all text-sm font-bold" />
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">Join</button>
                </div>
             </div>
           </div>

           <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
             <p>© 2024 Evergreen Shop • All Rights Reserved</p>
             <div className="flex gap-12 mt-6 md:mt-0">
               <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
               <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
               <span className="hover:text-white transition-colors cursor-pointer">Shipping</span>
               <span className="hover:text-white transition-colors cursor-pointer">Accessibility</span>
             </div>
           </div>
        </div>
      </footer>

      {/* Cart Drawer - Revamped */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity" onClick={() => setIsCartOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-full max-w-lg bg-white shadow-[-40px_0_80px_-40px_rgba(0,0,0,0.1)] flex flex-col animate-slide-in-right">
            <div className="p-10 border-b border-slate-50 flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Your Bag</h2>
                <p className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em] mt-1">{cartCount} Essentials</p>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 rounded-full transition-colors border border-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-10 space-y-10">
              {cart.length === 0 ? (
                <div className="text-center py-24 flex flex-col items-center">
                  <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 text-emerald-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Quiet in here.</h3>
                  <p className="text-slate-400 font-medium mb-12 max-w-[240px]">Your bag is currently empty. Let's find something worth keeping.</p>
                  <button onClick={() => setIsCartOpen(false)} className="bg-slate-900 text-white px-12 py-5 rounded-[22px] font-black text-sm uppercase tracking-widest shadow-2xl shadow-slate-200">Start Exploring</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-8 items-center group">
                    <img src={item.image} alt={item.name} className="w-32 h-32 rounded-[28px] object-cover border border-slate-50 group-hover:scale-105 transition-all duration-500 shadow-sm" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-black text-slate-900 text-xl leading-tight group-hover:text-emerald-600 transition-colors">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-slate-200 hover:text-rose-500 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>
                      <p className="text-sm text-emerald-600 font-black mb-6 uppercase tracking-widest">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 bg-slate-50 px-4 py-1.5 rounded-2xl border border-slate-100/50 shadow-inner">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-slate-400 hover:text-slate-900 font-black text-lg">×</button>
                          <span className="font-black text-slate-900 min-w-[24px] text-center text-lg">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-slate-400 hover:text-slate-900 font-black text-lg">+</button>
                        </div>
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">In Stock</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-10 bg-[#fbfcfb] border-t border-slate-100 space-y-6">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-slate-400 font-black uppercase text-[10px] tracking-widest">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600 font-black uppercase text-[10px] tracking-widest">
                    <span>Shipping</span>
                    <span>Complimentary</span>
                  </div>
                  <div className="flex justify-between text-3xl font-black text-slate-900 pt-4">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full bg-emerald-600 text-white py-6 rounded-[28px] font-black text-xl hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
                >
                  Checkout Now
                </button>
                <div className="flex justify-center gap-4">
                  {['VISA', 'MASTER', 'AMEX', 'PAYPAL'].map(p => <span key={p} className="text-[10px] font-black text-slate-300 border border-slate-100 px-2 py-1 rounded-md">{p}</span>)}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {viewingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl animate-fade-in" onClick={() => setViewingProduct(null)} />
          <div className="relative w-full max-w-5xl bg-white rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] animate-fade-in flex flex-col md:flex-row max-h-[92vh]">
            <div className="md:w-[55%] relative h-[400px] md:h-auto overflow-hidden">
              <img src={viewingProduct.image} alt={viewingProduct.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">Collection • Summer 24</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black">${viewingProduct.price.toFixed(2)}</span>
                    <span className="text-xs bg-emerald-500 px-3 py-1 rounded-full font-black uppercase tracking-widest">Verified Quality</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[45%] p-14 overflow-y-auto flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                   <span className="text-emerald-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">{viewingProduct.category}</span>
                   <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">{viewingProduct.name}</h2>
                </div>
                <button 
                  onClick={() => setViewingProduct(null)}
                  className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-300 hover:text-slate-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>

              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-50">
                 <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < Math.floor(viewingProduct.rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                 </div>
                 <span className="text-sm font-black text-slate-900">{viewingProduct.rating}</span>
                 <span className="text-sm font-bold text-slate-300">({viewingProduct.reviews} Verified Reviews)</span>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-6">Description</h4>
                <p className="text-slate-500 leading-[1.8] text-lg font-medium mb-12">{viewingProduct.description}</p>
                
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-6">Key Specifications</h4>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-16">
                  {viewingProduct.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                       <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-10 border-t border-slate-50">
                <button 
                  onClick={() => { addToCart(viewingProduct); setViewingProduct(null); }}
                  className="flex-grow bg-slate-900 text-white py-6 rounded-[28px] font-black text-lg hover:bg-emerald-600 transition-all shadow-2xl shadow-slate-200"
                >
                  Add to Bag
                </button>
                <button className="w-20 h-20 border border-slate-100 rounded-[28px] flex items-center justify-center text-slate-300 hover:text-rose-500 hover:border-rose-100 transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth & Other Modals */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={setUser}
      />

      <AIAssistant 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />

      {user && isDashboardOpen && (
        <Dashboard 
          user={user} 
          onClose={() => setIsDashboardOpen(false)} 
          onLogout={() => { setUser(null); setIsDashboardOpen(false); }}
        />
      )}

      {isCheckoutOpen && (
        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          total={cartTotal}
          items={cart}
          onComplete={handleCheckoutComplete}
        />
      )}

      {/* Global AI Float Trigger */}
      <div className="fixed bottom-10 right-10 z-40">
         <button 
          onClick={() => setIsAIModalOpen(true)}
          className="w-20 h-20 bg-emerald-600 text-white rounded-[32px] shadow-2xl shadow-emerald-300/50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 group relative"
        >
          <div className="absolute inset-0 bg-emerald-400 rounded-[32px] animate-ping opacity-20"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform relative z-10"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>

      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default App;
