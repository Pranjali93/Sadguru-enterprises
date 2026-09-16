import React, { useState } from 'react';
import type { PageTab } from '../types';
import { companyInfo } from '../data/company';
import { TAB_TO_PATH } from '../utils/navigation';
import {
  Droplets,
  Phone,
  Menu,
  X,
  ChevronRight,
  MapPin,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenInquiry: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenInquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Home is explicitly NOT in navbar items as requested by user
  const navItems: { id: PageTab; label: string; description: string }[] = [
    { id: 'about', label: 'About Us', description: 'Our 15+ year purity legacy & certifications' },
    { id: 'products', label: 'Products', description: 'Domestic, Commercial & Industrial RO machines' },
    { id: 'contact', label: 'Contact Us', description: 'Doorstep water testing & service support' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 shadow-sm">
      {/* Top Solid Utility Bar with Visiting Card Inscription and Dual Phone Numbers */}
      <div className="bg-red-800 text-white text-xs py-2 border-b border-red-900 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">

          {/* Left: Invocation from Business Card & Location */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="font-extrabold text-amber-300 tracking-wider text-xs whitespace-nowrap">
              {companyInfo.invocation}
            </span>
            <span className="hidden sm:inline-block text-red-600">|</span>
            <span className="flex items-center gap-1.5 text-white whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Shewalewadi, Pune</span>
            </span>
          </div>

          {/* Right: Actual Dual Contact Numbers from Business Card */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <a
                href={`tel:${companyInfo.phone}`}
                className="font-bold text-white hover:underline transition-colors whitespace-nowrap"
              >
                {companyInfo.phone}
              </a>
              <span className="text-red-300">/</span>
              <a
                href={`tel:${companyInfo.secondaryPhone}`}
                className="font-bold text-white hover:underline transition-colors whitespace-nowrap"
              >
                {companyInfo.secondaryPhone}
              </a>
            </div>

            <span className="hidden sm:inline text-red-600">|</span>

            <button
              type="button"
              onClick={() => onOpenInquiry('Free Water Testing Request')}
              className="text-xs bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded px-2.5 py-1 shadow-sm transition-all whitespace-nowrap"
            >
              Book Free Water Test
            </button>
          </div>
        </div>
      </div>

      {/* Main Solid Navbar */}
      <nav className="bg-white border-b-2 border-red-700 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[4.5rem] py-2 gap-3 sm:gap-4">

            {/* Brand Logo & Name */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="group flex items-center gap-2.5 sm:gap-3 text-left outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 shrink-0 cursor-pointer select-none"
              aria-label="Sadguru Enterprises Home"
            >
              {/* Flat Square Emblem */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-700 rounded-sm flex flex-col items-center justify-center shrink-0 text-white">
                <span className="text-[7.5px] sm:text-[8px] font-extrabold leading-none">॥सद्गुरू॥</span>
                <Droplets className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white mt-0.5" />
              </div>

              <div>
                <span className="text-lg sm:text-xl font-black tracking-tight text-red-700 font-display uppercase whitespace-nowrap">
                  Sadguru Enterprises
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - HOME IS NOT INCLUDED */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={TAB_TO_PATH[item.id]}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`relative px-3 lg:px-4 py-2 rounded text-sm font-bold transition-colors whitespace-nowrap ${isActive
                      ? 'text-red-700 bg-red-50 border-b-2 border-red-700'
                      : 'text-stone-800 hover:text-red-700 hover:bg-stone-50'
                      }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Action Call Button matching Image 2 */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs lg:text-sm px-3.5 lg:px-4 py-2 lg:py-2.5 rounded-lg shadow-sm hover:shadow transition-all tracking-wide whitespace-nowrap"
              >
                <Phone className="w-3.5 lg:w-4 h-3.5 lg:h-4 text-white shrink-0" />
                <span className="font-extrabold">{companyInfo.phone}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenInquiry('Quick Inquiry')}
                className="text-xs bg-red-700 text-white font-bold px-3 py-1.5 rounded"
              >
                Inquire
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <div className="text-xs font-bold text-stone-400 uppercase tracking-wider px-3 pt-1">
              Menu Navigation
            </div>

            {/* Nav items on mobile (Home excluded per prompt) */}
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={TAB_TO_PATH[item.id]}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`w-full text-left px-4 py-3 rounded flex items-center justify-between text-base font-bold transition-colors ${isActive
                    ? 'bg-red-50 text-red-700 border-l-4 border-red-700'
                    : 'text-stone-700 hover:bg-stone-50'
                    }`}
                >
                  <div>
                    <div>{item.label}</div>
                    <div className="text-xs text-stone-500 font-normal">{item.description}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-stone-400" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-stone-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry('Doorstep Water Testing');
                }}
                className="w-full py-3 bg-red-700 text-white font-bold rounded text-center flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Book Free Water Quality Check</span>
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full py-2.5 border border-red-700 text-red-700 font-bold rounded text-center flex items-center justify-center gap-2 hover:bg-red-50"
              >
                <Phone className="w-4 h-4 text-red-700" />
                <span>Call Helpline: {companyInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
