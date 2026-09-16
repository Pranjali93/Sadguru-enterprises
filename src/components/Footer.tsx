import React from 'react';
import type { PageTab } from '../types';
import { TAB_TO_PATH } from '../utils/navigation';
import {
  Droplets,
  Phone,
  MapPin,
  Lock,
  FileText,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenInquiry?: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
}) => {
  const navigateTo = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="hidden md:block bg-stone-950 text-stone-300 pt-12 pb-8 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* ========================================================
            FOOTER CTA: LOOKING FOR WATER PURIFIER SALES OR SERVICE?
           ======================================================== */}
        <div className="bg-stone-900 border-2 border-red-700 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Doorstep Service in Pune
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Looking for Water Purifier Sales or Service?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Contact Sadguru Enterprises today to discuss your domestic, commercial or industrial water purification requirement.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-white text-sm">Call:</span>
            <a
              href="tel:+917588215263"
              className="px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm rounded transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 7588215263</span>
            </a>
            <a
              href="tel:+919503497312"
              className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 font-bold text-xs sm:text-sm rounded transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9503497312</span>
            </a>
          </div>
        </div>

        {/* ========================================================
            MAIN FOOTER GRID
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-4 pb-8 border-b border-stone-800">

          {/* Column 1: Company Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-red-700 flex flex-col items-center justify-center text-white shrink-0">
                  <span className="text-[7px] font-extrabold text-white">॥सद्गुरू॥</span>
                  <Droplets className="w-2.5 h-2.5" />
                </div>
                <span className="text-lg font-black text-white font-display tracking-tight uppercase">
                  Sadguru Enterprises
                </span>
              </div>

              <div className="text-xs font-bold text-amber-300">
                Water Purifier Sales & Services for Domestic, Commercial & Industrial Requirements
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-md">
              Sadguru Enterprises provides complete water purification solutions, including sales, installation, genuine filter replacement, repair, and regular maintenance support across Pune and surrounding areas.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Pune, Maharashtra • Fast Doorstep Support</span>
            </div>

            {/* Social Media Links (Unclickable for now) */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider block">
                Connect With Us:
              </span>
              <div className="flex items-center gap-2.5">
                <div
                  title="Instagram"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 flex items-center justify-center cursor-default select-none"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div
                  title="Facebook"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 flex items-center justify-center cursor-default select-none"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Legal Links (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3">
              <h3 className="text-white font-bold text-xs uppercase tracking-wider font-display border-l-2 border-red-600 pl-2">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={TAB_TO_PATH['home']}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('home');
                    }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-red-500" />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href={TAB_TO_PATH['about']}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('about');
                    }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-red-500" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href={TAB_TO_PATH['products']}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('products');
                    }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-red-500" />
                    <span>Products</span>
                  </a>
                </li>
                <li>
                  <a
                    href={TAB_TO_PATH['blogs']}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('blogs');
                    }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-red-500" />
                    <span>Blogs</span>
                  </a>
                </li>
                <li>
                  <a
                    href={TAB_TO_PATH['contact']}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('contact');
                    }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-red-500" />
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-3 pt-2 border-t border-stone-800/80">
              <h3 className="text-white font-bold text-xs uppercase tracking-wider font-display border-l-2 border-red-600 pl-2">
                Legal Links
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={TAB_TO_PATH['privacy']}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('privacy');
                    }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Lock className="w-3 h-3 text-red-500" />
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a
                    href={TAB_TO_PATH['terms']}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('terms');
                    }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <FileText className="w-3 h-3 text-red-500" />
                    <span>Terms & Conditions</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Us (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider font-display border-l-2 border-red-600 pl-2">
              Contact Us
            </h3>

            <div className="space-y-3 text-xs text-stone-300">
              <div>
                <div className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider">Phone Numbers:</div>
                <div className="mt-1 space-y-1.5">
                  <a href="tel:+917588215263" className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors font-bold text-sm">
                    <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>+91 7588215263</span>
                  </a>
                  <a href="tel:+919503497312" className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors font-bold text-sm">
                    <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>+91 9503497312</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider">Address:</div>
                <div className="flex items-start gap-2 mt-1 text-stone-400 leading-relaxed text-xs">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Shreenath Heights, Near Hotel Extra Tonic, Shewalewadi, Pune - 412307</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            BOTTOM COPYRIGHT BAR
           ======================================================== */}
        <div className="text-center text-xs text-stone-400 font-medium">
          © 2026 Sadguru Enterprises. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};
