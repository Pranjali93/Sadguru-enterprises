import React, { useEffect } from 'react';
import type { PageTab } from '../types';
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  Shield, 
  FileText, 
  Lock, 
  Globe, 
  Cpu,
  Layers,
  HelpCircle,
  Clock
} from 'lucide-react';

interface LegalPageProps {
  type: 'terms' | 'privacy';
  onNavigate: (tab: PageTab) => void;
  onOpenInquiry: (productName?: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  type,
  onNavigate,
  onOpenInquiry,
}) => {
  const isPrivacy = type === 'privacy';

  useEffect(() => {
    document.title = isPrivacy 
      ? "Privacy Policy | Sadguru Enterprises" 
      : "Terms & Conditions | Sadguru Enterprises";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isPrivacy]);

  return (
    <div className="space-y-16 pb-20 bg-stone-50">
      
      {/* ========================================================
          1. HERO SECTION - MATCHING HOME PAGE DESIGN
         ======================================================== */}
      <section className="relative pt-12 pb-16 bg-stone-900 text-white border-b-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Breadcrumb & Tab Toggle Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-300 hover:text-white transition-colors"
            >
              <span>← Back to Home</span>
            </button>

            <div className="flex items-center gap-2 bg-stone-800 p-1 rounded-lg border border-stone-700 text-xs">
              <button
                type="button"
                onClick={() => onNavigate('terms')}
                className={`px-3 py-1.5 rounded transition-all font-semibold ${
                  !isPrivacy 
                    ? 'bg-red-700 text-white shadow-sm' 
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Terms & Conditions
              </button>
              <button
                type="button"
                onClick={() => onNavigate('privacy')}
                className={`px-3 py-1.5 rounded transition-all font-semibold ${
                  isPrivacy 
                    ? 'bg-red-700 text-white shadow-sm' 
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Location & Legal Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800/90 border border-stone-700 text-stone-200 text-xs font-semibold shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Shewalewadi, Pune</span>
            </div>

            <span className="hidden sm:inline-block text-stone-600 font-light">|</span>

            {/* Policy Badge */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider">
                {isPrivacy ? <Lock className="w-3 h-3 text-amber-400 shrink-0" /> : <FileText className="w-3 h-3 text-amber-400 shrink-0" />}
                <span>Official Policy</span>
              </span>
            </div>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-display">
            {isPrivacy ? (
              <>Privacy <span className="text-red-600">Policy</span></>
            ) : (
              <>Terms & <span className="text-red-600">Conditions</span></>
            )}
          </h1>

          {/* Clean, Concise Subheading */}
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            {isPrivacy
              ? "Official policy explaining how visitor and customer enquiry data is responsibly handled by Sadguru Enterprises."
              : "Official terms and conditions governing equipment sales, doorstep installations, and service support."}
          </p>

          <div className="pt-1 flex items-center gap-3 text-xs text-stone-400">
            <span className="px-2.5 py-1 rounded bg-stone-800 text-amber-400 border border-stone-700 font-bold">
              Last Updated: January 2026
            </span>
            <span>•</span>
            <span>Sadguru Enterprises, Pune</span>
          </div>

        </div>
      </section>

      {/* ========================================================
          POLICY OVERVIEW & LEGAL DESK CONTACT SECTION
         ======================================================== */}
      {/* ========================================================
          POLICY OVERVIEW & LEGAL DESK CONTACT SECTION
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded inline-block">
                Official Statement
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display mt-2">
                {isPrivacy ? "Commitment to Customer Privacy & Transparency" : "General Commercial & Service Terms"}
              </h2>
            </div>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {isPrivacy ? (
                "Sadguru Enterprises respects the privacy of visitors to our website. This Privacy Policy explains how information may be collected and used when you visit our website or contact us through online forms, phone calls, or other communication channels."
              ) : (
                "Welcome to Sadguru Enterprises. By accessing or using this website or requesting equipment sales and services, you agree to these Terms & Conditions. Please review them carefully."
              )}
            </p>

            {/* Scope Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="font-bold text-stone-500 uppercase tracking-wider mr-1 text-[11px]">Scope:</span>
              {isPrivacy ? (
                <>
                  <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                    ✓ Customer Privacy Protection
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                    ✓ Responsible Data Handling
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                    ✓ Enquiry Information Security
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                    ✓ No Unauthorized Third-Party Sharing
                  </span>
                </>
              ) : (
                <>
                  <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                    ✓ Equipment Sales & Supply
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                    ✓ Doorstep Installation Terms
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                    ✓ Routine Maintenance & Warranty
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                    ✓ Pune Legal Jurisdiction
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Quick Helpline Box */}
          <div className="lg:col-span-4 bg-white border-2 border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-red-700 font-bold">
                Questions About Policy?
              </div>
              <div className="text-base font-extrabold text-stone-900 mt-0.5">
                Contact Legal & Support Desk:
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
          BODY CONTENT ACCORDING TO USER'S EXACT DOCUMENTS
         ======================================================== */}
      {isPrivacy ? (
        // ================= PRIVACY POLICY SECTIONS =================
        <>
          {/* Section: Information We May Collect */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                Data Collection
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
                Information We May Collect
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                Depending on how you interact with our website, we may receive information such as:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-display">Name</h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Customer full name provided for communication and consultation scheduling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-display">Phone Number</h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Primary contact number used for telephone confirmation and doorstep service coordination.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-display">Email Address</h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Used for sending quotation summaries, service logs, or email communications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-display">Location</h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Locality in Pune (e.g. Shewalewadi, Hadapsar) to dispatch nearby certified technicians.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center font-bold text-sm">
                  05
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-display">Service Requirement</h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Selected option such as purifier purchase, installation, maintenance, or repair.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center font-bold text-sm">
                  06
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-display">Message or Enquiry Details</h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Specific water source characteristics (borewell/tanker) or existing model information.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border-2 border-stone-200 shadow-sm text-stone-700 text-sm sm:text-base leading-relaxed">
              We only request information that is relevant to responding to customer enquiries and providing information about our services.
            </div>
          </section>

          {/* Section: How We May Use Your Information */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                Purpose & Usage
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
                How We May Use Your Information
              </h2>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Respond to Your Enquiry</h4>
                    <p className="text-xs text-stone-600 mt-1">Promptly addressing your specific water purification questions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Contact Regarding Request</h4>
                    <p className="text-xs text-stone-600 mt-1">Contact you regarding your request, schedule, or technician visit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Provide Product Information</h4>
                    <p className="text-xs text-stone-600 mt-1">Provide transparent information about our products or services.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Understand Customer Requirements</h4>
                    <p className="text-xs text-stone-600 mt-1">Understand individual water usage, hardness, and installation needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100 md:col-span-2 lg:col-span-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Improve Website & Customer Communication</h4>
                    <p className="text-xs text-stone-600 mt-1">Enhance support clarity, service response time, and user satisfaction.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section: Contact Information & Cookies */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Contact Information
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  If you contact Sadguru Enterprises through the phone numbers displayed on our website, your communication may be handled through the relevant communication method you choose.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Cookies and Website Technologies
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Our website may use cookies or similar technologies depending on the website features, analytics tools or services implemented by the website developer. Cookies may help improve website functionality and understand general website usage. You may be able to manage cookies through your browser settings.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Third-Party Services & Data Security */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Third-Party Services
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Our website may include links or integrations with third-party services such as maps, social media platforms or analytics services. Sadguru Enterprises does not control the privacy practices of external websites. We recommend reviewing the privacy policies of third-party websites before providing personal information.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Data Security
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  We take reasonable steps to handle customer information responsibly. However, no method of internet communication or electronic storage can be considered completely secure.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Changes to This Privacy Policy */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-stone-900 text-white p-8 sm:p-10 rounded-2xl border-l-8 border-red-700 shadow-md space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-stone-800 border border-stone-700 px-3 py-1 rounded inline-block">
                Policy Revisions
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display">
                Changes to This Privacy Policy
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Sadguru Enterprises may update this Privacy Policy when necessary. Any updated version may be posted on this page.
              </p>
            </div>
          </section>
        </>
      ) : (
        // ================= TERMS & CONDITIONS SECTIONS (EXACT DOCUMENT) =================
        <>
          {/* Section 1: Website Information & Product and Service Enquiries */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Website Information */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Website Information
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The information provided on this website is intended to provide general information about Sadguru Enterprises and our water purification-related products and services.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  We make reasonable efforts to keep website information clear and useful. However, product availability, specifications, service availability and other details may change. Customers are encouraged to contact Sadguru Enterprises directly to confirm their specific requirements.
                </p>
              </div>

              {/* Product and Service Enquiries */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Product and Service Enquiries
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Information submitted through the website may be treated as an enquiry. Submitting an enquiry does not automatically create a purchase agreement or service agreement. Product and service requirements may need to be discussed and confirmed separately.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenInquiry('General Product Enquiry')}
                    className="px-4 py-2 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    Submit an Enquiry
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* Section 2: Product Information (Factors to Consider Grid) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                Requirements Assessment
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
                Product Information
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                Water purification requirements can vary based on factors such as:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-xl bg-white border-2 border-stone-200 shadow-sm flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Water source</span>
              </div>
              <div className="p-4 rounded-xl bg-white border-2 border-stone-200 shadow-sm flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Water quality</span>
              </div>
              <div className="p-4 rounded-xl bg-white border-2 border-stone-200 shadow-sm flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Usage</span>
              </div>
              <div className="p-4 rounded-xl bg-white border-2 border-stone-200 shadow-sm flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Capacity requirements</span>
              </div>
              <div className="p-4 rounded-xl bg-white border-2 border-stone-200 shadow-sm flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Installation location</span>
              </div>
              <div className="p-4 rounded-xl bg-white border-2 border-stone-200 shadow-sm flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Application</span>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border-2 border-stone-200 shadow-sm text-stone-700 text-sm sm:text-base leading-relaxed">
              Customers should discuss their specific requirements with Sadguru Enterprises before making a decision.
            </div>
          </section>

          {/* Section 3: Service Availability & Website Content */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Service Availability */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Service Availability
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Service and installation requirements may depend on the nature of the enquiry, location, system type and other relevant factors. Please contact Sadguru Enterprises directly to discuss your requirement.
                </p>
              </div>

              {/* Website Content */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-red-700 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Website Content
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  All website content, including text, media, graphics, and other materials created specifically for Sadguru Enterprises, is intended for general informational and promotional purposes.
                </p>
              </div>

            </div>
          </section>

          {/* Section 4: Third-Party Links, Changes to Website & Changes to Terms */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Third-Party Links */}
              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 font-display">Third-Party Links</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Our website may include links to third-party websites or services. Sadguru Enterprises is not responsible for the content, availability or policies of external websites.
                </p>
              </div>

              {/* Changes to the Website */}
              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 font-display">Changes to the Website</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Sadguru Enterprises may update, modify or remove website content when required.
                </p>
              </div>

              {/* Changes to These Terms */}
              <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-stone-900 font-display">Changes to These Terms</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  These Terms & Conditions may be updated from time to time. The updated version may be published on this page.
                </p>
              </div>

            </div>
          </section>
        </>
      )}

      {/* ========================================================
          CONTACT US - MATCHING HOME & ABOUT CTA BANNER
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border-2 border-stone-200 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
              Contact Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
              Sadguru Enterprises
            </h2>
            <div className="flex items-center gap-2 text-stone-700 text-sm mt-2 font-medium">
              <MapPin className="w-4 h-4 text-red-700 shrink-0" />
              <span>Shreenath Heights, Near Hotel Extra Tonic, Shewalewadi, Pune - 412307</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="tel:+917588215263"
              className="px-5 py-3 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7588215263</span>
            </a>
            <a
              href="tel:+919503497312"
              className="px-5 py-3 bg-stone-900 hover:bg-stone-950 text-white font-bold text-sm rounded transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 9503497312</span>
            </a>
          </div>

          {/* Internal Navigation Links */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <span className="font-bold text-stone-900">Explore Website:</span>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Home</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-stone-300">|</span>
              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-stone-300">|</span>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-stone-300">|</span>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => onOpenInquiry('Terms & Conditions Inquiry')}
              className="px-6 py-2.5 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
