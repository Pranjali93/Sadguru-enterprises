import React from 'react';
import type { PageTab, Product } from '../types';
import { productsData } from '../data/products';
import { companyInfo } from '../data/company';
import { ProductCard } from '../components/ProductCard';
import {
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Home as HomeIcon,
  Building2,
  Factory,
  Check
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onViewSpecs: (product: Product) => void;
  onInquire: (title?: string) => void;
  onExploreCategory?: (category: 'all' | 'domestic' | 'commercial' | 'industrial') => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onViewSpecs,
  onInquire,
  onExploreCategory,
}) => {
  const [selectedOfferIndex, setSelectedOfferIndex] = React.useState(0);
  const featuredProduct = productsData[selectedOfferIndex] || productsData[0];
  const discountPercent = Math.round(
    ((featuredProduct.originalPrice - featuredProduct.price) / featuredProduct.originalPrice) * 100
  );

  return (
    <div className="space-y-16 pb-20 bg-stone-50">

      {/* ========================================================
          1. HERO SECTION - CLEAN, PROFESSIONAL & HIGH-IMPACT
         ======================================================== */}
      <section className="relative pt-12 pb-16 bg-stone-900 text-white border-b-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Location & Segment Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800/90 border border-stone-700 text-stone-200 text-xs font-semibold shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Shewalewadi, Pune</span>
            </div>

            <span className="hidden sm:inline-block text-stone-600 font-light">|</span>

            {/* Service Segments Badges */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Domestic
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Commercial
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Industrial
              </span>
            </div>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-display">
            Water Purifier Sales & <span className="text-red-600">Services in Pune</span>
          </h1>

          {/* Clean, Concise Subheading */}
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            Sadguru Enterprises provides complete water purifier sales, professional installation, routine service, and timely maintenance solutions in Shewalewadi, Pune.
          </p>

          {/* Primary Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-6 py-3 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <button
              type="button"
              onClick={() => onInquire('Home Page Inquiry')}
              className="px-6 py-3 rounded bg-stone-800 hover:bg-stone-700 border border-stone-600 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              <span>Contact Us</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (onExploreCategory) {
                  onExploreCategory('all');
                } else {
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 rounded bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 text-red-700" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          OVERVIEW & CORE SERVICE HIGHLIGHTS SECTION
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded inline-block">
                Trusted Local Provider
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display mt-2">
                Reliable Water Solutions for Homes, Offices & Industries
              </h2>
            </div>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Clean water is an essential part of everyday life, whether at home, in an office, at a commercial establishment, or in an industrial facility. Whether you are planning to install a new water purifier or need reliable support for an existing unit, our team is ready to help you find the right solution.
            </p>

            {/* Service Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="font-bold text-stone-500 uppercase tracking-wider mr-1 text-[11px]">Core Capabilities:</span>
              <span className="px-3 py-1 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ RO Water Purifiers
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Doorstep Service & Repair
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Professional Installation
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Commercial & Industrial Systems
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Genuine Spares & Maintenance
              </span>
            </div>
          </div>

          {/* Quick Helpline Box */}
          <div className="lg:col-span-4 bg-white border-2 border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-red-700 font-bold">
                Looking for Sales or Service?
              </div>
              <div className="text-base font-extrabold text-stone-900 mt-0.5">
                Call Sadguru Enterprises:
              </div>
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full py-2.5 px-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm rounded transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`tel:${companyInfo.secondaryPhone}`}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 font-bold text-xs sm:text-sm rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>{companyInfo.secondaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SPECIAL LIMITED TIME MEGA OFFER SPOTLIGHT
         ======================================================== */}
      {featuredProduct && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 rounded-3xl p-6 sm:p-10 text-white border-4 border-red-700 shadow-2xl relative overflow-hidden space-y-6">
            {/* Background Decorative Glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Offer Switcher Tabs */}
            {productsData.length > 1 && (
              <div className="relative z-10 flex flex-wrap items-center gap-2.5 pb-4 border-b border-stone-800">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-400 mr-1">
                  Featured Offers:
                </span>
                {productsData.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedOfferIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                      selectedOfferIndex === idx
                        ? 'bg-red-700 text-white shadow-md ring-2 ring-red-500/50 scale-[1.02]'
                        : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700 border border-stone-700'
                    }`}
                  >
                    <span>Deal {idx + 1}: ₹{item.price.toLocaleString('en-IN')}/-</span>
                    <span className="text-[10px] opacity-80 hidden sm:inline">({item.id.includes('aiqua') ? 'Ai QUA Smart LED' : 'Copper Alkaline'})</span>
                  </button>
                ))}
              </div>
            )}

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Product Photo Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative bg-white rounded-2xl p-4 sm:p-6 shadow-xl border-2 border-stone-700 max-w-sm w-full flex items-center justify-center">
                  <span className="absolute -top-3.5 left-4 bg-red-700 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    🔥 {discountPercent}% Discount
                  </span>
                  <img
                    src={featuredProduct.imageUrl}
                    alt={featuredProduct.name}
                    className="w-full h-64 sm:h-72 object-contain"
                  />
                </div>
              </div>

              {/* Offer Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-red-700 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Mega Deal Of The Month
                  </span>
                  <span className="bg-stone-800 text-amber-400 border border-stone-700 text-xs font-bold px-3 py-1 rounded-full">
                    Pune Doorstep Delivery & Installation
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
                  {featuredProduct.name}
                </h2>

                {/* Product Overview & Features */}
                <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700/80 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg text-xs font-bold">
                      RO + UV Purification
                    </span>
                    <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-bold">
                      TDS Controller
                    </span>
                    <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-bold">
                      Copper Alkaline
                    </span>
                    {featuredProduct.name.includes('Smart LED') && (
                      <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg text-xs font-bold">
                        Smart LED Panel
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-stone-300 leading-relaxed">
                    {featuredProduct.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex flex-wrap items-baseline gap-4 pt-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                      Offer Price:
                    </span>
                    <span className="text-3xl sm:text-5xl font-black text-red-500 font-display">
                      ₹{featuredProduct.price.toLocaleString('en-IN')}/-
                    </span>
                  </div>
                  <div className="text-sm sm:text-base text-stone-400 line-through">
                    MRP ₹{featuredProduct.originalPrice.toLocaleString('en-IN')}/-
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs sm:text-sm">
                    Save ₹{(featuredProduct.originalPrice - featuredProduct.price).toLocaleString('en-IN')} ({discountPercent}% OFF)
                  </span>
                </div>

                {/* 4 Inclusions Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700 text-center">
                    <span className="text-emerald-400 font-bold block">✓ Pre-Filter FREE</span>
                    <span className="text-[10px] text-stone-400">Bowl + Spun Candle</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700 text-center">
                    <span className="text-emerald-400 font-bold block">✓ 1 Yr Warranty</span>
                    <span className="text-[10px] text-stone-400">Electric Parts</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700 text-center">
                    <span className="text-emerald-400 font-bold block">✓ 3 Free Services</span>
                    <span className="text-[10px] text-stone-400">Doorstep Maintenance</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700 text-center">
                    <span className="text-emerald-400 font-bold block">✓ Free Installation</span>
                    <span className="text-[10px] text-stone-400">Anywhere in Pune</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onInquire(featuredProduct.name)}
                    className="px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-red-700/50 flex items-center gap-2 transition-all active:scale-95"
                  >
                    <span>Grab This Offer (₹{featuredProduct.price.toLocaleString('en-IN')})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onViewSpecs(featuredProduct)}
                    className="px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white border border-stone-600 font-bold text-xs sm:text-sm transition-colors"
                  >
                    <span>View Specifications</span>
                  </button>
                  <a
                    href="tel:+917588215263"
                    className="px-6 py-3 rounded-xl bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-700" />
                    <span>+91 7588215263</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          2. COMPLETE WATER PURIFICATION SOLUTIONS FOR EVERY REQUIREMENT
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
            Our Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
            Complete Water Purification Solutions for Every Requirement
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Water quality requirements can differ depending on the source of water and where the system will be used. That is why choosing the right purification solution is important.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Domestic Water Purifiers */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Domestic Water Purifiers
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Water purification solutions for homes and residential requirements. Whether you need a new water purifier or support for an existing unit, we can help you understand your available options based on your requirements.
              </p>
              
              <ul className="space-y-2 pt-2 border-t border-stone-100 text-xs sm:text-sm text-stone-800">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Water purifier sales</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>RO water purifier solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Installation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Service and maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Repair support</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onInquire('Domestic Water Purifier Inquiry')}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors"
            >
              Inquire Domestic RO
            </button>
          </div>

          {/* Commercial Water Purifiers */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Commercial Water Purifiers
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Commercial spaces often require water purification systems based on their water usage and operational requirements. Sadguru Enterprises provides support for commercial water purification requirements for suitable applications:
              </p>
              
              <ul className="space-y-2 pt-2 border-t border-stone-100 text-xs sm:text-sm text-stone-800">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Offices</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Shops</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Restaurants</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Hotels</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Educational institutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Other commercial establishments</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onInquire('Commercial Water Purifier Inquiry')}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors"
            >
              Inquire Commercial System
            </button>
          </div>

          {/* Industrial Water Purification Systems */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Industrial Water Purification Systems
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Industrial water requirements can vary depending on the application, water source and required capacity. Sadguru Enterprises provides support for customers looking for industrial water purification solutions based on their requirements.
              </p>

              <div className="bg-stone-50 p-3.5 rounded border border-stone-200 text-xs text-stone-700 space-y-2">
                <div className="font-bold text-stone-900">Custom Engineering Available:</div>
                <p>High-flow multi-membrane plants (100 LPH, 250 LPH, 500 LPH to 1000+ LPH) built with stainless steel skids and high-pressure booster pumps.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onInquire('Industrial RO Plant Inquiry')}
              className="w-full py-2.5 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs transition-colors"
            >
              Get Industrial Quote
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. OUR WATER PURIFIER SERVICES (8 Key Service Pillars)
         ======================================================== */}
      <section className="bg-stone-900 text-white py-16 border-y-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-stone-800 border border-stone-700 px-3 py-1 rounded">
              Comprehensive Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display mt-2">
              Our Water Purifier Services
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2 leading-relaxed">
              At Sadguru Enterprises, our focus is not limited to water purifier sales. We also understand that proper installation, regular servicing and timely maintenance are important for the smooth functioning of a water purification system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Water purifier sales",
              "Water purifier installation",
              "Water purifier service",
              "Water purifier repair",
              "Water purifier maintenance",
              "Domestic water purifier solutions",
              "Commercial water purifier solutions",
              "Industrial water purification solutions"
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-stone-800 border border-stone-700 hover:border-red-600 p-4 rounded-xl flex items-center gap-3 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-red-700 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-bold text-stone-100">{service}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. FEATURED WATER PURIFIER MACHINES (Catalog Preview)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
              Product Catalog
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
              Featured Water Purifier Machines
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Select domestic, alkaline, and commercial machines engineered for high TDS water.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-bold text-red-700 hover:text-red-800 flex items-center gap-1 w-max"
          >
            <span>View All Machines & Filters</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewSpecs={onViewSpecs}
              onInquire={onInquire}
            />
          ))}
        </div>
      </section>

      {/* ========================================================
          5. WHY CHOOSE SADGURU ENTERPRISES?
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
            Our Commitments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
            Why Choose Sadguru Enterprises?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-red-600 shadow-sm transition-colors space-y-3">
            <div className="w-10 h-10 rounded bg-red-700 text-white flex items-center justify-center font-black">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Local Business Support</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We are based in <strong className="text-stone-900">Shewalewadi, Pune</strong>, making Sadguru Enterprises a convenient local option for customers in and around the area.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-red-600 shadow-sm transition-colors space-y-3">
            <div className="w-10 h-10 rounded bg-red-700 text-white flex items-center justify-center font-black">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Solutions for Different Requirements</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We work with domestic, commercial and industrial water purification requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-red-600 shadow-sm transition-colors space-y-3">
            <div className="w-10 h-10 rounded bg-red-700 text-white flex items-center justify-center font-black">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Sales and Service Support</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Customers can contact us for both water purifier requirements and service-related assistance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-red-600 shadow-sm transition-colors space-y-3">
            <div className="w-10 h-10 rounded bg-red-700 text-white flex items-center justify-center font-black">
              04
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Customer-Focused Approach</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We believe in understanding the customer's requirement before suggesting the appropriate solution.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          6. WATER PURIFIER INSTALLATION & SERVICE SUPPORT
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-2xl p-8 sm:p-12 text-white border-2 border-red-700 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-stone-800 border border-stone-700 px-3 py-1 rounded">
                Installation & Maintenance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
                Water Purifier Installation & Service Support
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Proper installation plays an important role in the functioning of a water purifier. Regular servicing and maintenance can also help identify issues that may require attention.
              </p>

              <div className="pt-2">
                <p className="text-amber-300 font-bold text-sm mb-3">
                  Contact Sadguru Enterprises to discuss your requirement.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {companyInfo.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onInquire('Service Support Request')}
                    className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 border border-stone-600 text-white font-bold text-xs rounded transition-colors"
                  >
                    Request Callback
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-800 border border-stone-700 rounded-xl p-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 border-b border-stone-700 pb-2">
                Service Scope in Pune
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Water purifier installation in Pune</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>RO water purifier service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Water purifier repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Water purifier maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Local water purifier service in Shewalewadi</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          7. SERVING SHEWALEWADI & PUNE
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-stone-200 p-6 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded bg-red-50 text-red-700 border border-red-200 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                Serving Shewalewadi & Pune
              </h2>
              <div className="text-sm font-bold text-red-700">
                {companyInfo.address}
              </div>
              <p className="text-xs sm:text-sm text-stone-600 pt-1 leading-relaxed max-w-3xl">
                We aim to provide accessible water purifier sales and service support for customers looking for local water purification solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. NEED A WATER PURIFIER OR SERVICE? (FINAL CALLOUT)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-800 rounded-2xl p-8 sm:p-12 text-white shadow-xl space-y-6 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-black font-display uppercase">
                Need a Water Purifier or Service?
              </h2>
              <p className="text-red-100 text-sm sm:text-base leading-relaxed">
                Whether you need a new water purification solution or support for an existing system, Sadguru Enterprises is ready to assist.
              </p>
              <div className="text-xs sm:text-sm text-amber-200 font-semibold pt-1">
                Address: {companyInfo.address}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-stone-100 text-red-800 font-black text-sm rounded shadow transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {companyInfo.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => onInquire('Final CTA Inquiry')}
                className="w-full sm:w-auto px-6 py-3.5 bg-red-950 hover:bg-stone-900 text-white border border-red-700 font-bold text-sm rounded transition-colors"
              >
                Contact Us
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-red-900/60 hover:bg-red-900 text-amber-300 border border-amber-400/40 font-bold text-sm rounded transition-colors"
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* Internal Links Strip as specified in Document */}
          <div className="pt-6 border-t border-red-700/80 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-red-200">
            <span className="font-bold text-white uppercase tracking-wider">Quick Navigation:</span>
            <button
              type="button"
              onClick={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white underline-offset-2 hover:underline"
            >
              About Us
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white underline-offset-2 hover:underline"
            >
              Products
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                const footer = document.querySelector('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white underline-offset-2 hover:underline"
            >
              Blogs
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white underline-offset-2 hover:underline"
            >
              Contact Us
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
