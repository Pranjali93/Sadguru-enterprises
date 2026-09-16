import React from 'react';
import { X, Shield, FileText, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6 py-6 sm:py-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto"
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
        <div className="bg-stone-900 text-white p-6 sm:p-7 pr-14 flex items-center justify-between relative border-b-4 border-red-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center">
              {isPrivacy ? <Shield className="w-5 h-5 text-red-500" /> : <FileText className="w-5 h-5 text-red-500" />}
            </div>
            <div>
              <h2 className="text-xl font-bold font-display">
                {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
              </h2>
              <p className="text-xs text-stone-300">
                Sadguru Enterprises • Last Updated: January 2026
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text Content */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          {isPrivacy ? (
            <>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">1. Commitment to Privacy</h3>
                <p>
                  At {companyInfo.name}, we value your trust and are committed to safeguarding the personal information of our domestic, commercial, and industrial clients. This Privacy Policy governs how we collect, store, and utilize data provided via our website, service hotline, or during on-site water quality assessments.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">2. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Contact Details:</strong> Full name, phone number, email address, installation/delivery address, and postal code.</li>
                  <li><strong>Water Quality Parameters:</strong> Raw inlet TDS, water source (borewell/municipal/tanker), and daily consumption volume to specify the correct purifier machine.</li>
                  <li><strong>Equipment Records:</strong> Machine serial numbers, installation dates, membrane replacement cycles, and Annual Maintenance Contract (AMC) logs.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">3. How Your Information Is Used</h3>
                <p>
                  We utilize your information solely to schedule water tests, deliver and install water purifier machines, coordinate periodic maintenance visits, and process warranty/AMC claims. We do not sell, rent, or trade your contact records to third-party telemarketers.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">4. Data Security & Storage</h3>
                <p>
                  All customer records are maintained on secure, encrypted databases accessible strictly by authorized service personnel. Payment transactions for purifier sales or AMC contracts are processed through compliant Indian banking channels.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">5. Contact Our Data Desk</h3>
                <p>
                  If you wish to review, update, or remove your contact data from our reminder register, please email us at <span className="font-semibold text-ocean-700">{companyInfo.supportEmail}</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">1. Scope of Products & Services</h3>
                <p>
                  {companyInfo.name} manufactures, supplies, and services residential, commercial, and industrial Reverse Osmosis (RO), Ultra-Filtration (UF), and Ultraviolet (UV) water purification systems across India.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">2. Standard Warranty Terms</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Electrical Components:</strong> All domestic and commercial machines include a 1-Year Comprehensive Warranty covering the booster pump, SMPS/power supply, solenoid valve, and float switch.</li>
                  <li><strong>Consumables:</strong> Sediment filters, activated carbon cartridges, and RO membranes are consumable components whose lifespan depends directly on the inlet water TDS, turbidity, and usage volume.</li>
                  <li><strong>Damage Exclusion:</strong> Warranties do not cover damage caused by abnormal electrical surges without stabilizer, physical mishandling, dry running without inlet water, or service by unauthorized personnel.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">3. Installation & Pre-Requisites</h3>
                <p>
                  Standard installation for domestic purifiers is completed within 24 to 48 hours of order confirmation. The customer must ensure an active water inlet line (minimum 0.3 bar pressure) and an earthing-protected 230V electrical plug point adjacent to the mounting position.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">4. Annual Maintenance Contracts (AMC)</h3>
                <p>
                  AMC plans become active upon fee settlement and include scheduled quarterly inspection, free labor on breakdowns, and replacement of specified consumable filters as per the selected tier (Comprehensive vs Standard).
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">5. Jurisdiction</h3>
                <p>
                  Any dispute or claim arising out of equipment sales, service, or warranty shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra.
                </p>
              </div>
            </>
          )}

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-600">
              By purchasing equipment or submitting an inquiry to {companyInfo.name}, you acknowledge and accept our service protocols and quality guidelines.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
          >
            Cancel / Close
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-semibold text-xs shadow-md transition-all"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
