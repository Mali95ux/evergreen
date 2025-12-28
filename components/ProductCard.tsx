
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.15)] transition-all duration-500 border border-slate-100/50 flex flex-col hover:-translate-y-1">
      <div 
        className="relative h-72 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-5 left-5 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-800 shadow-sm border border-white/50">
          {product.category}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); /* Wishlist logic */ }}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 
            className="text-lg font-bold text-slate-800 hover:text-emerald-600 transition-colors cursor-pointer leading-tight"
            onClick={() => onViewDetails(product)}
          >
            {product.name}
          </h3>
          <span className="text-xl font-black text-emerald-600">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-slate-400 line-clamp-2 mb-6 flex-grow font-medium leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center gap-3 mt-auto">
          <button 
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm tracking-wide hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-slate-200 hover:shadow-emerald-200"
          >
            Add to Bag
          </button>
          <button 
            onClick={() => onViewDetails(product)}
            className="p-4 rounded-2xl border border-slate-100 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 hover:border-emerald-100 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};
