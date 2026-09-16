import React from 'react';
import type { BlogPost } from '../types';
import { X, Calendar, User, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

interface BlogModalProps {
  blog: BlogPost | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose, onInquire }) => {
  if (!blog) return null;

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
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-slate-950/80 hover:bg-white text-white hover:text-slate-950 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 group backdrop-blur-md"
          aria-label="Close modal"
          title="Cancel / Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform group-hover:scale-110" />
        </button>

        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/70"></div>

          <div className="absolute bottom-6 left-6 right-14 text-white">
            <span className="text-xs font-bold uppercase tracking-wider bg-red-700 text-white px-3 py-1 rounded-full border border-red-500">
              {blog.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2 leading-tight font-display">
              {blog.title}
            </h2>
          </div>
        </div>

        {/* Post Metadata Strip */}
        <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <User className="w-3.5 h-3.5 text-ocean-600" />
              <span>{blog.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-ocean-600" />
              <span>{blog.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-ocean-600" />
              <span>{blog.readTime}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Fact-Checked</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed max-h-[50vh] overflow-y-auto">
          <div className="font-medium text-slate-900 text-lg border-l-4 border-red-700 pl-4 py-1 italic bg-stone-100 rounded-r-lg">
            {blog.excerpt}
          </div>

          {blog.content.map((para, idx) => (
            <p key={idx} className="text-slate-700 leading-relaxed">
              {para}
            </p>
          ))}

          {/* Expert Recommendation Box */}
          <div className="bg-stone-100 border border-stone-300 rounded-2xl p-5 mt-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 text-sm">
                  Sadguru Enterprises Technical Advice
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Have doubts about your tap water's purity or TDS level? Book our certified technician for an in-home digital water test with zero obligation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Published under Sadguru Educational Clean Water Initiative.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Cancel / Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire(`Article consultation: ${blog.title}`);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-semibold text-sm shadow-md shadow-ocean-600/20 transition-all"
            >
              Book Free Water Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
