import React, { useEffect } from 'react';
import type { PageTab } from '../types';
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  Home as HomeIcon, 
  Building2, 
  Factory, 
  ShoppingCart, 
  Settings, 
  Wrench, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
  onInquire: (topic?: string) => void;
  onExploreCategory?: (category: 'all' | 'domestic' | 'commercial' | 'industrial') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  setActiveTab, 
  onInquire, 
  onExploreCategory 
}) => {
  useEffect(() => {
    document.title = "About Sadguru Enterprises | Water Purifier Sales & Service in Pune";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateTo = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-20 bg-stone-50">
      
      {/* ========================================================
          1. HERO SECTION - MATCHING HOME PAGE DESIGN
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
            About <span className="text-red-600">Sadguru Enterprises</span>
          </h1>

          {/* Clean, Concise Subheading */}
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            Your trusted local provider for domestic, commercial, and industrial water purification solutions in Shewalewadi, Pune.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onInquire('About Page Consultation')}
              className="px-6 py-3 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Our Team</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (onExploreCategory) {
                  onExploreCategory('all');
                } else {
                  navigateTo('products');
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
          ABOUT OVERVIEW & LOCAL WATER EXPERTISE SECTION
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded inline-block">
                Company Profile
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display mt-2">
                Dedicated Water Purification Solutions Provider
              </h2>
            </div>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              <strong className="text-stone-900 font-semibold">Sadguru Enterprises</strong> is a water purifier sales and service business located in <strong className="text-stone-900 font-semibold">Shewalewadi, Pune</strong>. We provide water purification solutions for <strong className="text-stone-900 font-semibold">domestic, commercial and industrial requirements</strong>, with complete sales, professional installation, routine servicing, repair and maintenance support.
            </p>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
              We understand that every customer has distinct water quality and volume requirements. A home, office, commercial establishment and industrial facility require different approaches. Our aim is to guide customers and connect them with the most effective, reliable water purification systems.
            </p>

            {/* Specialization Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="font-bold text-stone-500 uppercase tracking-wider mr-1 text-[11px]">Specializations:</span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Water Purifier Dealer Pune
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ RO Water Purifier Service
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Water Purification Solutions
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Domestic Water Purifier
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Commercial Water Purifier
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Industrial Water Purification
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Water Purifier Installation Pune
              </span>
            </div>
          </div>

          {/* Quick Helpline Box */}
          <div className="lg:col-span-4 bg-white border-2 border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-red-700 font-bold">
                Looking for Guidance?
              </div>
              <div className="text-base font-extrabold text-stone-900 mt-0.5">
                Call Sadguru Enterprises:
              </div>
            </div>
            <div className="space-y-2">
              <a
                href="tel:+917588215263"
                className="w-full py-2.5 px-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm rounded transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 7588215263</span>
              </a>
              <a
                href="tel:+919503497312"
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 font-bold text-xs sm:text-sm rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>+91 9503497312</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WHAT WE DO (MATCHING HOME PAGE SERVICE GRID)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
            What We Do
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            From assisting you in selecting the right system to providing professional installation and ongoing maintenance, we offer end-to-end water purification support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Water Purifier Sales */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display">
                Water Purifier Sales
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We help customers looking for water purification solutions for residential, commercial and industrial requirements.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onInquire('Water Purifier Sales Inquiry')}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors"
            >
              Inquire Sales
            </button>
          </div>

          {/* Card 2: Water Purifier Installation */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display">
                Water Purifier Installation
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Installation is an important step after selecting a suitable water purification system. We provide installation support based on the customer’s requirement.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onInquire('Water Purifier Installation Inquiry')}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors"
            >
              Book Installation
            </button>
          </div>

          {/* Card 3: Water Purifier Service */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display">
                Water Purifier Service
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Regular service can help keep a water purification system functioning properly and identify issues that may need attention.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onInquire('Water Purifier Service Inquiry')}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors"
            >
              Request Service
            </button>
          </div>

          {/* Card 4: Water Purifier Repair & Maintenance */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display">
                Repair & Maintenance
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                If an existing water purifier requires attention, customers can contact Sadguru Enterprises to discuss their service and maintenance requirements.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onInquire('Purifier Repair & Maintenance Inquiry')}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors"
            >
              Book Repair
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. SERVING DOMESTIC, COMMERCIAL & INDUSTRIAL REQUIREMENTS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
            Target Segments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
            Serving Domestic, Commercial & Industrial Requirements
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            We tailor water purification setups to the specific volume, pressure, and purity requirements of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Domestic */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Domestic
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Water purification solutions for homes and residential users. Ensuring healthy, safe, and mineral-balanced drinking water for families.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (onExploreCategory) {
                  onExploreCategory('domestic');
                } else {
                  navigateTo('products');
                }
              }}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore Domestic</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>

          {/* Commercial */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Commercial
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Solutions for offices and commercial establishments with water purification requirements, catering to daily staff and visitor hydration.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (onExploreCategory) {
                  onExploreCategory('commercial');
                } else {
                  navigateTo('products');
                }
              }}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore Commercial</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>

          {/* Industrial */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Industrial
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Support for customers looking for industrial water purification systems and solutions based on their application requirements.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (onExploreCategory) {
                  onExploreCategory('industrial');
                } else {
                  navigateTo('products');
                }
              }}
              className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore Industrial</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          4. OUR APPROACH (MATCHING COMMITMENT SECTION STYLE)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
            Customer First
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
            Our Approach
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            At Sadguru Enterprises, we believe good customer service starts with understanding the requirement.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Understanding Requirements</h4>
                <p className="text-xs text-stone-600 mt-1">Understanding the customer’s water purification requirement.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Clear Information</h4>
                <p className="text-xs text-stone-600 mt-1">Providing clear information without misleading jargon.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Sales & Installation</h4>
                <p className="text-xs text-stone-600 mt-1">Supporting sales and installation requirements diligently.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Service & Maintenance</h4>
                <p className="text-xs text-stone-600 mt-1">Assisting with service and maintenance needs promptly.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100 md:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Local Customer Support</h4>
                <p className="text-xs text-stone-600 mt-1">Offering local contact and customer support whenever needed.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHY LOCAL SUPPORT MATTERS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-stone-900 text-white p-8 sm:p-10 rounded-2xl border-l-8 border-red-700 shadow-md space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-stone-800 border border-stone-700 px-3 py-1 rounded inline-block">
            Local Reliability
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
            Why Local Support Matters
          </h2>
          
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            When customers search for a <strong className="text-white font-semibold">water purifier dealer near me</strong> or <strong className="text-white font-semibold">water purifier service near me</strong>, having access to a local business can make communication easier.
          </p>

          <div className="p-4 bg-stone-800 rounded-xl border border-stone-700 flex items-start gap-3 max-w-3xl">
            <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-stone-400 uppercase font-semibold">Our Registered Address</div>
              <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                Sadguru Enterprises is based in Shreenath Heights, Near Hotel Extra Tonic, Shewalewadi, Pune - 412307.
              </div>
            </div>
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Customers can contact us directly to discuss water purifier sales or service requirements.
          </p>
        </div>
      </section>

      {/* ========================================================
          6. TALK TO SADGURU ENTERPRISES & INTERNAL LINKS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border-2 border-stone-200 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
              Talk to Sadguru Enterprises
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              Whether you are looking for a domestic water purifier, commercial water purification solution, industrial system or service support, contact Sadguru Enterprises.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="font-bold text-stone-900 text-base">Call:</span>
            <a
              href="tel:+917588215263"
              className="px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7588215263</span>
            </a>
            <a
              href="tel:+919503497312"
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-950 text-white font-bold text-sm rounded transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 9503497312</span>
            </a>
          </div>

          {/* Internal Links Navigation Row */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <span className="font-bold text-stone-900">Internal Links:</span>
              <button
                type="button"
                onClick={() => navigateTo('products')}
                className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-stone-300">|</span>
              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => onInquire('General Consultation')}
              className="px-6 py-2.5 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              Submit Online Inquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
