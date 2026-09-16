import React, { useState } from 'react';
import { X, CheckCircle, Droplets, MessageSquare, ExternalLink } from 'lucide-react';
import { companyInfo } from '../data/company';

interface InquiryModalProps {
  isOpen: boolean;
  defaultProduct?: string;
  onClose: () => void;
}

type ModalStep = 'form' | 'waiting' | 'confirmed';

export const InquiryModal: React.FC<InquiryModalProps> = ({ 
  isOpen, 
  defaultProduct = '', 
  onClose 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Pune',
    waterSource: 'Borewell (High TDS)',
    productInterest: defaultProduct || 'Sadguru AquaPure Pro RO + UV + Alkaline',
    serviceType: 'New Purchase',
    message: ''
  });

  const [modalStep, setModalStep] = useState<ModalStep>('form');

  if (!isOpen) return null;

  const handleClose = () => {
    setModalStep('form');
    onClose();
  };

  const sendToWhatsApp = () => {
    const cleanPhone = companyInfo.whatsappNumber.replace(/[^0-9]/g, '');
    const messageLines = [
      `*New Water Purifier Inquiry - Sadguru Enterprises*`,
      `• *Name:* ${formData.fullName}`,
      `• *Phone:* ${formData.phone}`,
      `• *City:* ${formData.city}`,
      `• *Water Source:* ${formData.waterSource}`,
      `• *Requirement:* ${formData.serviceType}`,
      formData.productInterest ? `• *Product:* ${formData.productInterest}` : '',
      formData.message ? `• *Notes:* ${formData.message}` : ''
    ].filter(Boolean).join('\n');

    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(messageLines)}`;
    window.open(waUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp();
    setModalStep('waiting');
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6 py-6 sm:py-10 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent Always-Visible Cut/Cancel Button at Right Corner */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white group"
          aria-label="Close modal"
          title="Cancel / Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform group-hover:scale-110" />
        </button>

        {/* Header */}
        <div className="bg-stone-900 text-white p-6 sm:p-7 pr-14 relative border-b-4 border-red-700">
          <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Droplets className="w-4 h-4 text-red-500" />
            <span>Direct Factory Quote & Doorstep Test</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display">
            Inquire / Book Free Demo
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            Get personalized purifier recommendations & instant price quote from Sadguru engineers.
          </p>
        </div>

        {/* Content Body */}
        {modalStep === 'confirmed' ? (
          /* Step 3: Success Confirmation - Comes ONLY after user sends message */
          <div className="p-8 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">Inquiry Received!</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.fullName || 'Valued Customer'}</span>! Our senior water technician will call you on <span className="font-semibold text-red-700">{formData.phone}</span> within 2 business hours with full machine specifications and best discounted pricing.
            </p>

            <div className="pt-4 border-t border-slate-100 flex justify-center">
              <button
                type="button"
                onClick={handleClose}
                className="px-8 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-bold shadow-md transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : modalStep === 'waiting' ? (
          /* Step 2: User prompt to hit Send in WhatsApp */
          <div className="p-8 text-center space-y-5 animate-in fade-in duration-200">
            <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-500/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <MessageSquare className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
                Step 2 of 2: Send Message in WhatsApp
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Please Tap "Send" in WhatsApp
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
                We've opened WhatsApp with your inquiry details addressed to <strong className="text-slate-900">+91 7588215263</strong>.
                Please tap the <strong>Send (➤)</strong> button in WhatsApp, then confirm below:
              </p>
            </div>

            <div className="pt-2 space-y-2.5 max-w-sm mx-auto">
              <button
                type="button"
                onClick={() => setModalStep('confirmed')}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <CheckCircle className="w-4 h-4" />
                <span>✓ I Have Sent The Message</span>
              </button>

              <button
                type="button"
                onClick={sendToWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                <span>Didn't open? Open WhatsApp Again</span>
              </button>

              <button
                type="button"
                onClick={() => setModalStep('form')}
                className="text-xs text-slate-400 hover:text-slate-600 font-medium underline block mx-auto pt-1"
              >
                Back to edit information
              </button>
            </div>
          </div>
        ) : (
          /* Step 1: User fills the form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[calc(85vh-140px)] overflow-y-auto">
            
            {/* Selected Product Banner if any */}
            {formData.productInterest && (
              <div className="p-3 bg-ocean-50 border border-ocean-200 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-ocean-600 font-semibold">Interested Machine:</span>
                  <div className="font-bold text-slate-900 line-clamp-1">{formData.productInterest}</div>
                </div>
                <span className="text-[11px] bg-white px-2 py-1 rounded-md text-ocean-700 border border-ocean-200 font-medium">
                  Verified Model
                </span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input 
                type="text"
                required
                placeholder="e.g. Ramesh Patil"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Contact Number *
              </label>
              <input 
                type="tel"
                required
                placeholder="e.g. 98901 23456"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Location / Area in Pune
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Hadapsar / Shewalewadi"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Requirement
                </label>
                <select 
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-sm bg-white"
                >
                  <option value="New Purchase">New RO Purchase</option>
                  <option value="Free Water Testing">Free Doorstep Water Test</option>
                  <option value="Repair / Service">RO Repair / Service</option>
                  <option value="Filter Replacement">Filter & Membrane Change</option>
                  <option value="Commercial / Industrial">Commercial / Plant Setup</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Water Source (If Known)
              </label>
              <select 
                value={formData.waterSource}
                onChange={(e) => setFormData({ ...formData, waterSource: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-sm bg-white"
              >
                <option value="Borewell (High TDS)">Borewell (High TDS / Hard Water)</option>
                <option value="Municipal / Corporation">Municipal / Corporation Water</option>
                <option value="Tanker Supply">Tanker Water Supply</option>
                <option value="Mixed Source">Mixed / Not Sure</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Optional Message / Notes
              </label>
              <textarea 
                rows={2}
                placeholder="Number of members in family / office, or specific requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-sm"
              />
            </div>

            {/* Action Buttons: Submit to WhatsApp & Cancel */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 text-sm flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send</span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="py-3 px-6 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 font-bold rounded-xl text-sm transition-colors text-center"
                title="Cancel and close dialog"
              >
                Cancel
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
              <span>🔒 100% Privacy Assured</span>
              <span>•</span>
              <span>⚡ Fast Callback within 2 hrs</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
