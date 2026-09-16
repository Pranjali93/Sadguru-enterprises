import React, { useState, useEffect } from 'react';
import type { PageTab } from '../types';
import { companyInfo } from '../data/company';
import { TAB_TO_PATH } from '../utils/navigation';
import {
  Droplets,
  Phone,
  Menu,
  X,
  MapPin,
  ChevronRight
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Desktop Navbar Links
  const desktopNavItems: { id: PageTab; label: string }[] = [
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Mobile Menu Links: Simple list of page names only
  const mobileNavPages: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300 shadow-sm">
        {/* Top Utility Bar: Compact & clean on mobile, full detail on tablet/desktop */}
        <div className="bg-red-800 text-white text-xs py-1.5 sm:py-2 border-b border-red-900 w-full">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">

            {/* Left: Invocation & Location */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="font-extrabold text-amber-300 tracking-wider text-[11px] sm:text-xs whitespace-nowrap">
                {companyInfo.invocation}
              </span>
              <span className="hidden sm:inline-block text-red-600">|</span>
              <span className="hidden sm:flex items-center gap-1.5 text-white whitespace-nowrap text-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Shewalewadi, Pune</span>
              </span>
            </div>

            {/* Right: Mobile quick phone link vs Desktop dual numbers + CTA */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs">
              {/* Mobile Direct Dial */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="sm:hidden flex items-center gap-1 text-amber-300 hover:text-white font-bold whitespace-nowrap text-[11px]"
                aria-label={`Call ${companyInfo.phone}`}
              >
                <Phone className="w-3 h-3 text-amber-300 shrink-0" />
                <span>{companyInfo.phone}</span>
              </a>

              {/* Desktop & Tablet Dual Numbers */}
              <div className="hidden sm:flex items-center gap-2">
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

              <span className="hidden md:inline text-red-600">|</span>

              <button
                type="button"
                onClick={() => onOpenInquiry('Free Water Testing Request')}
                className="hidden sm:inline-block text-xs bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded px-2.5 py-1 shadow-sm transition-all whitespace-nowrap"
              >
                Book Free Water Test
              </button>
            </div>
          </div>
        </div>

        {/* Main Solid Navbar */}
        <nav className="bg-white border-b-2 border-red-700 w-full relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:min-h-[4.5rem] py-2 gap-2 sm:gap-4">

              {/* Brand Logo & Name */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className="group flex items-center gap-2.5 sm:gap-3 text-left outline-none focus:outline-none shrink-0 cursor-pointer select-none"
                aria-label="Sadguru Enterprises Home"
              >
                {/* Flat Square Emblem */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-700 rounded-sm flex flex-col items-center justify-center shrink-0 text-white shadow-sm">
                  <span className="text-[7.5px] sm:text-[8px] font-extrabold leading-none">॥सद्गुरू॥</span>
                  <Droplets className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white mt-0.5" />
                </div>

                <div>
                  <span className="text-base sm:text-xl font-black tracking-tight text-red-700 font-display uppercase whitespace-nowrap">
                    Sadguru Enterprises
                  </span>
                </div>
              </a>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-1 lg:gap-2">
                {desktopNavItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <a
                      key={item.id}
                      href={TAB_TO_PATH[item.id]}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={`relative px-3 lg:px-4 py-2 rounded text-sm font-bold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-red-700 bg-red-50 border-b-2 border-red-700'
                          : 'text-stone-800 hover:text-red-700 hover:bg-stone-50'
                      }`}
                    >
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Right Action Call Button for Desktop */}
              <div className="hidden lg:flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs lg:text-sm px-3.5 lg:px-4 py-2 lg:py-2.5 rounded-lg shadow-sm hover:shadow transition-all tracking-wide whitespace-nowrap"
                >
                  <Phone className="w-3.5 lg:w-4 h-3.5 lg:h-4 text-white shrink-0" />
                  <span className="font-extrabold">{companyInfo.phone}</span>
                </a>
              </div>

              {/* Mobile Actions: Quick Inquire Button & Hamburger Toggle */}
              <div className="flex md:hidden items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenInquiry('Quick Inquiry')}
                  className="text-xs bg-red-700 hover:bg-red-800 text-white font-bold px-2.5 sm:px-3 py-1.5 rounded shadow-sm transition-colors"
                >
                  Inquire
                </button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-stone-700 hover:text-red-700 hover:bg-stone-100 border border-stone-200 transition-colors focus:outline-none"
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6 text-red-700" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>

          {/* Clean Mobile Menu extending solid white to the bottom to completely cover all background page content */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 w-full min-h-[100dvh] h-[100dvh] bg-white border-t border-stone-200 md:hidden overflow-y-auto">
              <div className="py-2 divide-y divide-stone-100 bg-white">
                {mobileNavPages.map((page) => {
                  const isActive = activeTab === page.id;
                  return (
                    <a
                      key={page.id}
                      href={TAB_TO_PATH[page.id]}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(page.id);
                      }}
                      className={`flex items-center justify-between px-6 py-4 text-base font-semibold transition-colors ${
                        isActive
                          ? 'text-red-700 bg-red-50/80 font-bold border-l-4 border-red-700'
                          : 'text-stone-800 hover:text-red-700 hover:bg-stone-50'
                      }`}
                    >
                      <span>{page.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${isActive ? 'text-red-700' : 'text-stone-400'}`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
