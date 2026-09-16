import React, { useEffect, useState } from 'react';
import {
  Phone,
  MapPin,
  Check,
  CheckCircle2,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

import { companyInfo } from '../data/company';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Sadguru Enterprises | Water Purifier Service in Pune";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    location: '',
    serviceRequired: 'Water Purifier Purchase',
    message: ''
  });

  const [formStep, setFormStep] = useState<'form' | 'waiting' | 'confirmed'>('form');

  const sendToWhatsApp = () => {
    const cleanPhone = companyInfo.whatsappNumber.replace(/[^0-9]/g, '');
    const messageLines = [
      `*New Enquiry - Sadguru Enterprises (Contact Page)*`,
      `• *Name:* ${formData.fullName}`,
      `• *Phone:* ${formData.phoneNumber}`,
      formData.emailAddress ? `• *Email:* ${formData.emailAddress}` : '',
      `• *Location:* ${formData.location}`,
      `• *Service Required:* ${formData.serviceRequired}`,
      formData.message ? `• *Message:* ${formData.message}` : ''
    ].filter(Boolean).join('\n');

    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(messageLines)}`;
    window.open(waUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp();
    setFormStep('waiting');
  };

  const serviceOptions = [
    'Water Purifier Purchase',
    'Water Purifier Installation',
    'Water Purifier Service',
    'Water Purifier Repair',
    'Water Purifier Maintenance',
    'Commercial Water Purification',
    'Industrial Water Purification',
    'Other'
  ];

  const servicesCovered = [
    'Water purifier sales',
    'RO water purifier requirements',
    'Water purifier installation',
    'Water purifier service',
    'Water purifier repair',
    'Water purifier maintenance',
    'Commercial water purification',
    'Industrial water purification requirements'
  ];

  return (
    <div className="space-y-16 pb-20 bg-stone-50">

      {/* ========================================================
          1. HERO SECTION - MATCHING HOME, ABOUT & PRODUCTS DESIGN
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
            Contact <span className="text-red-600">Sadguru Enterprises</span>
          </h1>

          {/* Clean, Concise Subheading */}
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            Looking for a new water purifier or need reliable service support? Reach out to our certified team in Shewalewadi, Pune.
          </p>

          {/* Primary Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="tel:+917588215263"
              className="px-6 py-3 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91 7588215263</span>
            </a>

            <a
              href="#inquiry-form"
              className="px-6 py-3 rounded bg-stone-800 hover:bg-stone-700 border border-stone-600 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              <span>Send Message Below</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. CONTACT DETAILS & SEND US YOUR REQUIREMENT FORM
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Contact Info & Covered Services (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Service Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded inline-block">
                Prompt Local Service
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
                <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 font-semibold border border-stone-200 shadow-xs">
                  ✓ RO Service Pune
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 font-semibold border border-stone-200 shadow-xs">
                  ✓ Water Purifier Repair Pune
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 font-semibold border border-stone-200 shadow-xs">
                  ✓ Installation in Shewalewadi
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 font-semibold border border-stone-200 shadow-xs">
                  ✓ Maintenance & Filter Replacement
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 font-semibold border border-stone-200 shadow-xs">
                  ✓ Commercial Purifier Pune
                </span>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                  Reach Us
                </span>
                <h2 className="text-2xl font-extrabold text-stone-900 font-display mt-2">
                  Contact Information
                </h2>
                <div className="text-lg font-bold text-stone-900 mt-2">
                  Sadguru Enterprises
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-stone-100">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase">Phone Numbers</div>
                    <div className="mt-1 space-y-1">
                      <a href="tel:+917588215263" className="block text-base font-bold text-stone-900 hover:text-red-700 transition-colors">
                        +91 7588215263
                      </a>
                      <a href="tel:+919503497312" className="block text-base font-bold text-stone-900 hover:text-red-700 transition-colors">
                        +91 9503497312
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase">Address</div>
                    <div className="text-sm font-semibold text-stone-800 mt-1 leading-relaxed">
                      Shreenath Heights, Near Hotel Extra Tonic,<br />
                      Shewalewadi, Pune - 412307
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Covered Checklist Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                  Scope of Support
                </span>
                <h3 className="text-xl font-extrabold text-stone-900 font-display mt-2">
                  What We Support
                </h3>
              </div>

              <ul className="space-y-2.5 pt-2 text-sm text-stone-800">
                {servicesCovered.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Send Us Your Requirement Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border-2 border-stone-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                  Online Inquiry
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display mt-2">
                  Send Us Your Requirement
                </h2>
                <p className="text-stone-600 text-sm mt-1">
                  You can use the website contact form to share your requirement.
                </p>
              </div>

              {formStep === 'confirmed' ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-stone-900 font-display">
                    Thank You! Your Enquiry Has Been Received
                  </h3>
                  <p className="text-sm text-stone-700 max-w-md mx-auto leading-relaxed">
                    Our team from Sadguru Enterprises, Shewalewadi will contact you shortly on <strong>{formData.phoneNumber}</strong> to assist with your {formData.serviceRequired}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormStep('form');
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        emailAddress: '',
                        location: '',
                        serviceRequired: 'Water Purifier Purchase',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : formStep === 'waiting' ? (
                <div className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-200 text-center space-y-5 animate-in fade-in duration-200">
                  <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-500/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <MessageSquare className="w-8 h-8 text-emerald-600" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
                      Step 2: Send in WhatsApp
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 font-display">
                      Please Tap "Send" in WhatsApp
                    </h3>
                    <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                      We've opened WhatsApp with your requirement addressed to <strong className="text-stone-900">+91 7588215263</strong>.
                      Please tap the <strong>Send (➤)</strong> button in WhatsApp, then confirm below:
                    </p>
                  </div>

                  <div className="pt-2 space-y-2.5 max-w-sm mx-auto">
                    <button
                      type="button"
                      onClick={() => setFormStep('confirmed')}
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all active:scale-98"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>✓ I Have Sent The Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={sendToWhatsApp}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      <span>Didn't open? Open WhatsApp Again</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormStep('form')}
                      className="text-xs text-slate-400 hover:text-slate-600 font-medium underline block mx-auto pt-1"
                    >
                      Back to edit details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-bold uppercase text-stone-700">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patil"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-red-700 focus:ring-1 focus:ring-red-700 text-stone-900 text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phoneNumber" className="text-xs font-bold uppercase text-stone-700">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        placeholder="e.g. 98901 23456"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-red-700 focus:ring-1 focus:ring-red-700 text-stone-900 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="emailAddress" className="text-xs font-bold uppercase text-stone-700">
                        Email Address
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-red-700 focus:ring-1 focus:ring-red-700 text-stone-900 text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Location */}
                    <div className="space-y-1.5">
                      <label htmlFor="location" className="text-xs font-bold uppercase text-stone-700">
                        Location <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        required
                        placeholder="e.g. Shewalewadi, Hadapsar, Pune"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-red-700 focus:ring-1 focus:ring-red-700 text-stone-900 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Required Options */}
                  <div className="space-y-1.5">
                    <label htmlFor="serviceRequired" className="text-xs font-bold uppercase text-stone-700">
                      Service Required <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-red-700 focus:ring-1 focus:ring-red-700 text-stone-900 text-sm outline-none transition-colors bg-white"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase text-stone-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your water source (borewell/tanker), purifier model or requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-red-700 focus:ring-1 focus:ring-red-700 text-stone-900 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Suggested Form Button: Submit Your Enquiry */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. LOOKING FOR WATER PURIFIER SERVICE NEAR YOU?
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white p-8 sm:p-12 rounded-2xl border-l-8 border-red-700 shadow-md space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-stone-800 border border-stone-700 px-3 py-1 rounded inline-block">
              Nearby Support
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display mt-3">
              Looking for Water Purifier Service Near You?
            </h2>
          </div>

          <div className="space-y-3 text-stone-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            <p>
              If you are located in or around <strong className="text-white font-semibold">Shewalewadi, Pune</strong>, contact Sadguru Enterprises to discuss your water purifier sales or service requirement.
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              We will help you with the next steps based on the information you provide.
            </p>
          </div>

          {/* CTA: Call Sadguru Enterprises Now */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="font-bold text-white text-base">
              Call Sadguru Enterprises Now:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+917588215263"
                className="px-5 py-3 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 7588215263</span>
              </a>
              <a
                href="tel:+919503497312"
                className="px-5 py-3 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 font-bold text-sm rounded transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9503497312</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
