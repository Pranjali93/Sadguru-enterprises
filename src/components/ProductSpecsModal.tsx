import React from 'react';
import type { Product } from '../types';
import { X, Check, Droplets } from 'lucide-react';

interface ProductSpecsModalProps {
  product: Product | null;
  onClose: () => void;
  onInquire?: (productName: string) => void;
}

export const ProductSpecsModal: React.FC<ProductSpecsModalProps> = ({
  product,
  onClose,
  onInquire,
}) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6 py-6 sm:py-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent Always-Visible Cut/Cancel Button at Right Corner */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white group"
          aria-label="Close modal"
          title="Cancel / Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform group-hover:scale-110" />
        </button>

        {/* Header */}
        <div className="bg-stone-900 text-white p-6 sm:p-7 pr-14 relative border-b-4 border-red-700">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 text-red-400 border border-stone-700 text-xs font-semibold mb-2">
            <Droplets className="w-3.5 h-3.5 text-red-500" />
            <span>{product.category}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-display pr-6">
            {product.name}
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            {product.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Machine Image & Price Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="sm:col-span-5 h-48 sm:h-56 bg-white rounded-xl p-2 border border-slate-200 flex items-center justify-center overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="sm:col-span-7 space-y-3">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-1">
                <div className="text-[11px] font-black uppercase tracking-wider text-amber-800">
                  ✨ All-Inclusive Offer Package
                </div>
                <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Offer Pricing</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-red-700 font-display">
                    ₹{product.price.toLocaleString('en-IN')}/-
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-sm text-slate-400 line-through">
                        MRP ₹{product.originalPrice.toLocaleString('en-IN')}/-
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>
                <div className="text-xs text-emerald-700 font-semibold">
                  ✓ Includes Free Installation + 1-Yr Electric Warranty + 3 Free Services
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications Table */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Technical Specifications
            </h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
              <div className="grid grid-cols-3 p-3 bg-white">
                <span className="font-semibold text-slate-500">Membrane Technology</span>
                <span className="col-span-2 text-slate-800 font-medium">{product.specifications.membraneType}</span>
              </div>
              <div className="grid grid-cols-3 p-3 bg-slate-50/50">
                <span className="font-semibold text-slate-500">TDS Reduction</span>
                <span className="col-span-2 text-slate-800 font-medium">{product.specifications.tdsReduction}</span>
              </div>
              <div className="grid grid-cols-3 p-3 bg-white">
                <span className="font-semibold text-slate-500">Chassis & Body</span>
                <span className="col-span-2 text-slate-800 font-medium">{product.specifications.bodyMaterial}</span>
              </div>
              <div className="grid grid-cols-3 p-3 bg-slate-50/50">
                <span className="font-semibold text-slate-500">Power Rating</span>
                <span className="col-span-2 text-slate-800 font-medium">{product.specifications.powerConsumption}</span>
              </div>
              <div className="grid grid-cols-3 p-3 bg-white">
                <span className="font-semibold text-slate-500">Mounting Style</span>
                <span className="col-span-2 text-slate-800 font-medium">{product.specifications.mounting}</span>
              </div>
              <div className="grid grid-cols-3 p-3 bg-slate-50/50">
                <span className="font-semibold text-slate-500">Warranty Coverage</span>
                <span className="col-span-2 text-emerald-700 font-semibold">{product.specifications.warranty}</span>
              </div>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Key Features & Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            Close
          </button>

          {onInquire && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire(product.name);
              }}
              className="px-6 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
            >
              Grab This Offer (₹{product.price.toLocaleString('en-IN')})
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
