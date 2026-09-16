import React from 'react';
import type { Product } from '../types';
import { Eye, MessageSquare, Tag, Check, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewSpecs: (product: Product) => void;
  onInquire: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewSpecs,
  onInquire,
}) => {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group bg-white rounded-2xl border-2 border-red-600/30 hover:border-red-600 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative">
      {/* Mega Offer Ribbon */}
      <div className="bg-red-700 text-white text-xs font-black uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1.5 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
        <span>Special Limited Time Mega Offer!</span>
      </div>

      {/* Product Image & Badges */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-b from-stone-50 to-white flex items-center justify-center p-4">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold bg-white/95 text-stone-900 px-2.5 py-1 rounded-md shadow-sm border border-stone-200">
            {product.category}
          </span>
        </div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-3 right-3 bg-red-700 text-white font-extrabold text-xs px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
            <Tag className="w-3 h-3 text-amber-300" />
            <span>{discountPercent}% OFF</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Machine Name */}
          <h3 className="text-base sm:text-lg font-extrabold text-stone-900 group-hover:text-red-700 transition-colors">
            {product.name}
          </h3>

          {/* Purification Tech Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200/80 rounded-md text-[11px] font-extrabold tracking-wide">
              RO + UV
            </span>
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-md text-[11px] font-extrabold tracking-wide">
              TDS Control
            </span>
            <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200/80 rounded-md text-[11px] font-extrabold tracking-wide">
              Copper Alkaline
            </span>
            {product.name.includes('Smart LED') && (
              <span className="px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-200/80 rounded-md text-[11px] font-extrabold tracking-wide">
                Smart LED
              </span>
            )}
          </div>

          {/* Complimentary Mega Offer Inclusions Box */}
          <div className="p-3 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-400/40 rounded-xl space-y-2">
            <div className="text-[11px] font-black uppercase tracking-wider text-amber-800 flex items-center justify-between">
              <span>All-Inclusive Package</span>
              <span className="text-[10px] bg-amber-400 text-stone-900 font-extrabold px-1.5 py-0.5 rounded">100% FREE</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-xs text-stone-800 font-bold">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                <span>Pre-Filter Kit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                <span>Free Fitting</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                <span>1 Yr Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                <span>3 Free Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-stone-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Offer Price:</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-red-700 font-display">
                  ₹{product.price.toLocaleString('en-IN')}/-
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xs text-stone-400 line-through">
                    MRP ₹{product.originalPrice.toLocaleString('en-IN')}/-
                  </span>
                )}
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded">
              Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewSpecs(product)}
              className="px-3 py-2.5 rounded-lg border border-stone-300 hover:border-stone-400 hover:bg-stone-50 text-stone-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-stone-600" />
              <span>Full Specs</span>
            </button>

            <button
              type="button"
              onClick={() => onInquire(product.name)}
              className="px-3 py-2.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              <span>Grab Offer Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
