import React, { useEffect, useState } from 'react';
import type { PageTab } from '../types';
import { 
  Phone, 
  ArrowRight, 
  MapPin, 
  ChevronUp 
} from 'lucide-react';

interface BlogPageProps {
  setActiveTab: (tab: PageTab) => void;
  onInquire: (topic?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ setActiveTab, onInquire }) => {
  useEffect(() => {
    document.title = "Water Purifier Tips & Water Purification Blogs | Sadguru Enterprises";
    
    // Set meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Read helpful articles about water purifiers, RO systems, water purifier maintenance, installation, servicing and water purification solutions from Sadguru Enterprises.'
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const navigateTo = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 6 Exact Guides from Screenshot 1 & 2
  const blogGuides = [
    {
      id: 1,
      title: "How to Choose the Right Water Purifier for Your Home",
      desc: "Choosing a water purifier depends on more than just the appearance of the unit. Water source, water quality, family requirements and available space can all play a role.",
      slug: "/blog/how-to-choose-water-purifier-pune",
      keyword: "Water purifier for home in Pune",
      fullText: "When choosing a water purifier for your home, the most critical factor is your raw water source (borewell, tanker, or municipal tap) and its Total Dissolved Solids (TDS) level. High TDS water with brackish taste requires Reverse Osmosis (RO) with TDS balancer and mineral replenishment. For municipal corporation supply with lower TDS, advanced UV + UF purifiers are often optimal. Furthermore, assess your family's daily drinking consumption to choose the right tank capacity (typically 8 to 12 litres) and consider whether a wall-mounted or under-sink unit fits your kitchen space best."
    },
    {
      id: 2,
      title: "What Is an RO Water Purifier and How Does It Work?",
      desc: "RO is one of the most commonly discussed water purification technologies. Learn about the general purpose of RO water purification and why understanding your water source is important before choosing a system.",
      slug: "/blog/ro-water-purifier-guide",
      keyword: "RO water purifier",
      fullText: "Reverse Osmosis (RO) is a membrane-based water treatment method that uses a high-pressure booster pump to force water molecules through a semi-permeable composite thin-film membrane with pores as small as 0.0001 microns. This process rejects dissolved chemical impurities, heavy metals like lead, mercury and arsenic, fluoride, excess salts, and microbial cysts. Knowing your raw water TDS and hardness helps determine if an RO system is necessary or if additional pre-filtration (like antiscalant cartridges or iron filters) is required."
    },
    {
      id: 3,
      title: "When Does Your Water Purifier Need Service?",
      desc: "A water purifier may require regular attention depending on usage and system requirements. Learn about common reasons customers look for water purifier servicing and maintenance.",
      slug: "/blog/water-purifier-service-signs",
      keyword: "Water purifier service",
      fullText: "Common warning indicators that your purifier needs urgent service include: significantly slower purified water dispensing rate, unusual foul smell or bitter taste in the drinking water, water leakage from filter housings or base fittings, continuous motor vibration or buzzing sound, or automated filter-change alarm beeps. In Pune areas with hard borewell supply, periodic membrane descaling and sediment flushing prevent internal pump overload and ensure drinking safety."
    },
    {
      id: 4,
      title: "Why Professional Water Purifier Installation Matters",
      desc: "Proper installation can be important for the smooth operation of a water purification system. This article explains important considerations before installing a water purifier.",
      slug: "/blog/water-purifier-installation-matters",
      keyword: "Water purifier installation",
      fullText: "Correct installation ensures steady inlet water pressure (optimal 0.3 to 3.0 bar), proper reject water tube routing without back-pressure, leak-free food-grade tubing connections, and safe electrical grounding for the SMPS power adapter and booster pump. Certified technicians also test TDS before and after the initial flush, calibrate the mineral modulator, and inspect the electrical auto-shutoff valve so your unit operates reliably from day one."
    },
    {
      id: 5,
      title: "Domestic vs Commercial Water Purifiers",
      desc: "Homes and commercial establishments can have different water usage requirements. Understand some of the important differences between domestic and commercial water purification requirements.",
      slug: "/blog/commercial-water-purifier-guide",
      keyword: "Commercial water purifier",
      fullText: "Domestic purifiers typically provide 12 to 15 litres per hour output with integrated 8 to 12 litre storage tanks suited for 4 to 8 family members. Commercial water purification systems range from 25 to 500+ LPH output, utilizing heavy-duty continuous-duty rotary pumps, dual membranes, commercial-grade jumbo pre-filtration housings, and external storage connections to handle all-day hydration for offices, cafes, clinics, schools, and restaurants."
    },
    {
      id: 6,
      title: "Basic Water Purifier Maintenance Tips",
      desc: "Regular care and timely attention can help customers identify when professional servicing may be required. Read practical water purifier maintenance tips.",
      slug: "/blog/water-purifier-maintenance-tips",
      keyword: "Water purifier maintenance",
      fullText: "Key maintenance habits: 1. Replace the external spun polypropylene pre-filter candle every 3 to 4 months to prevent dirt and sediment from choking internal filters. 2. Clean and sanitize the internal storage tank every 6 months. 3. Ensure the reject water drain line remains unkinked and free-flowing. 4. Never run the RO system without an active tap water supply to avoid burning out the booster pump. 5. Schedule an annual comprehensive health check to verify TDS rejection efficiency."
    }
  ];

  // 6 Recommended Individual Blog URLs for SEO (from Screenshot 2)
  const recommendedSeoUrls = [
    {
      title: "How to Choose the Right Water Purifier for Your Home in Pune",
      slug: "/blog/how-to-choose-water-purifier-pune",
      keyword: "Water purifier for home in Pune"
    },
    {
      title: "RO Water Purifier: What You Should Know Before Choosing One",
      slug: "/blog/ro-water-purifier-guide",
      keyword: "RO water purifier"
    },
    {
      title: "Signs Your Water Purifier May Need Service",
      slug: "/blog/water-purifier-service-signs",
      keyword: "Water purifier service"
    },
    {
      title: "Water Purifier Maintenance Tips for Home Users",
      slug: "/blog/water-purifier-maintenance-tips",
      keyword: "Water purifier maintenance"
    },
    {
      title: "Choosing a Water Purification Solution for Commercial Use",
      slug: "/blog/commercial-water-purifier-guide",
      keyword: "Commercial water purifier"
    },
    {
      title: "Understanding Industrial Water Purification Requirements",
      slug: "/blog/industrial-water-purification-guide",
      keyword: "Industrial water purification systems"
    }
  ];

  return (
    <div className="space-y-16 pb-20 bg-stone-50">
      
      {/* ========================================================
          1. HERO SECTION - MATCHING HOME PAGE DESIGN EXACTLY
         ======================================================== */}
      <section className="relative pt-12 pb-16 bg-stone-900 text-white border-b-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Location & Topic Badges */}
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
                Water Purifier Blog
              </span>
              <span className="px-2.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 text-xs font-mono">
                /blogs
              </span>
            </div>
          </div>

          {/* Main H1 Title (Exact from Screenshot 1) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-display">
            Water Purifier Guides, <span className="text-red-600">Tips & Helpful Information</span>
          </h1>

          {/* Clean, Concise Subheading - Matching Other Pages */}
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            Welcome to the Sadguru Enterprises blog. Here we share practical advice on water purifiers, servicing, and purification solutions for Pune homes and businesses.
          </p>

          {/* Primary Action CTAs - Matching Home Page Design */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="tel:+917588215263"
              className="px-6 py-3 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <button
              type="button"
              onClick={() => onInquire('Water Purifier Consultation from Blog')}
              className="px-6 py-3 rounded bg-stone-800 hover:bg-stone-700 border border-stone-600 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              <span>Contact Us</span>
            </button>

            <a
              href="#latest-guides"
              className="px-6 py-3 rounded bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Guides</span>
              <ArrowRight className="w-4 h-4 text-red-700" />
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================
          OVERVIEW & KNOWLEDGE HUB SECTION - MATCHING HOME PAGE DESIGN
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded inline-block">
                Knowledge Hub
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display mt-2">
                Understanding Your Water Purification Needs
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Here we share useful information about water purifiers, water purification systems, maintenance, servicing and choosing solutions for domestic, commercial and industrial requirements.
            </p>

            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
              Our goal is to provide information that helps customers better understand their water purification needs. Whether you are dealing with high TDS borewell water or planning an installation, explore our curated guides below.
            </p>

            {/* Keyword Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="font-bold text-stone-500 uppercase tracking-wider mr-1 text-[11px]">Key Topics:</span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ RO Water Purifier Guide
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Water Purifier Maintenance
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Water Purifier Service Tips
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Water Purification Information
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ RO Maintenance Tips
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Water Purifier Installation
              </span>
            </div>
          </div>

          {/* Quick Helpline Box */}
          <div className="lg:col-span-4 bg-white border-2 border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-red-700 font-bold">
                Need Expert Guidance?
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
          2. LATEST WATER PURIFIER GUIDES (EXACT ARTICLES FROM SCREENSHOT 1)
         ======================================================== */}
      <section id="latest-guides" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
            Articles & Guidance
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
            Latest Water Purifier Guides
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Here we share useful information about water purifiers, water purification systems, maintenance, servicing and choosing solutions for domestic, commercial and industrial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogGuides.map((guide) => {
            const isExpanded = expandedArticle === guide.id;
            return (
              <article
                key={guide.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded">
                      Guide #{guide.id}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">Sadguru Tech Desk</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-display hover:text-red-700 transition-colors leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {guide.desc}
                  </p>

                  {/* Expandable full article section */}
                  {isExpanded && (
                    <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 animate-in fade-in duration-200">
                      <p>{guide.fullText}</p>
                      <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
                        <span className="text-stone-500">Focus: <strong className="text-stone-800">{guide.keyword}</strong></span>
                        <button
                          type="button"
                          onClick={() => onInquire(`Question on: ${guide.title}`)}
                          className="text-red-700 font-bold hover:underline"
                        >
                          Ask Our Expert →
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setExpandedArticle(isExpanded ? null : guide.id)}
                    className="text-red-700 hover:text-red-800 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onInquire(`Consultation regarding: ${guide.title}`)}
                    className="text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    Inquire Topic
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. NEED PROFESSIONAL ASSISTANCE? (EXACT CONTENT FROM SCREENSHOT 2)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white p-8 sm:p-12 rounded-2xl border-l-8 border-red-700 shadow-md space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-stone-800 border border-stone-700 px-3 py-1 rounded inline-block">
              Expert Guidance
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display mt-3">
              Need Professional Assistance?
            </h2>
          </div>

          <div className="space-y-3 text-stone-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            <p>
              Blogs can help you understand water purification, but every installation and service requirement can be different.
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              For water purifier sales or service requirements, contact <strong className="text-white font-semibold">Sadguru Enterprises</strong> directly.
            </p>
          </div>

          {/* Contact Helpline Callout (from Screenshot 2) */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="font-bold text-white text-base">
              Contact:
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
              <button
                type="button"
                onClick={() => onInquire('Direct Assistance from Blog Page')}
                className="px-5 py-3 bg-white hover:bg-stone-100 text-stone-900 font-bold text-sm rounded transition-colors inline-flex items-center gap-2"
              >
                <span>Book Service / Consultation</span>
                <ArrowRight className="w-4 h-4 text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. RECOMMENDED INDIVIDUAL BLOG URLS FOR SEO (EXACT FROM SCREENSHOT 2)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
            SEO Index & URLs
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display mt-2">
            Recommended Individual Blog URLs for SEO
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Standard permalink structure and focus search keywords:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recommendedSeoUrls.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-white border-2 border-stone-200 hover:border-red-600 transition-all shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 text-base leading-snug">
                  {item.title}
                </h4>
                <div className="text-xs font-mono text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                  <span className="text-stone-400 font-sans">Slug: </span>
                  <span className="text-stone-900 font-semibold">{item.slug}</span>
                </div>
              </div>

              <div className="text-xs text-stone-600 pt-2 border-t border-stone-100 flex items-center justify-between">
                <span>Keyword:</span>
                <strong className="text-red-700 font-bold">{item.keyword}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Page Configuration Card from Screenshot 1 */}
        <div className="bg-white rounded-2xl border-2 border-stone-200 p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3 flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
              SEO Page Configuration (Blogs Hub)
            </span>
            <span className="text-xs font-mono text-stone-600 bg-stone-100 px-2.5 py-1 rounded border border-stone-200">
              Suggested URL: <strong className="text-stone-900">/blogs</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-stone-900 block mb-0.5">SEO Title:</span>
              <p className="text-stone-700 font-medium">Water Purifier Tips & Water Purification Blogs | Sadguru Enterprises</p>
            </div>
            <div>
              <span className="font-bold text-stone-900 block mb-0.5">Primary Keyword:</span>
              <p className="text-red-700 font-bold">Water Purifier Blog</p>
            </div>
            <div className="md:col-span-2">
              <span className="font-bold text-stone-900 block mb-0.5">Meta Description:</span>
              <p className="text-stone-600 leading-relaxed">
                Read helpful articles about water purifiers, RO systems, water purifier maintenance, installation, servicing and water purification solutions from Sadguru Enterprises.
              </p>
            </div>
            <div className="md:col-span-2 pt-2 border-t border-stone-100">
              <span className="font-bold text-stone-900 block mb-1">Secondary Keywords:</span>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  'RO water purifier guide',
                  'Water purifier maintenance',
                  'Water purifier service tips',
                  'Water purification information',
                  'RO maintenance tips',
                  'Water purifier installation'
                ].map((kw, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200 font-medium">
                    ✓ {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. BOTTOM CTA BANNER & WEBSITE EXPLORATION
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                Sadguru Enterprises
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display mt-2">
                Have Questions or Need Doorstep Water Testing?
              </h3>
              <p className="text-stone-600 text-sm mt-1">
                Our technicians are ready to assess your water quality and recommend the ideal purifier.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onInquire('Water Purifier Consultation from Blog')}
              className="px-6 py-3 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap"
            >
              Book Doorstep Visit
            </button>
          </div>

          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2 text-sm text-stone-600">
            <span className="font-bold text-stone-900">Explore Website:</span>
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-stone-300">|</span>
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
              onClick={() => navigateTo('about')}
              className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>About Us</span>
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
        </div>
      </section>

    </div>
  );
};
