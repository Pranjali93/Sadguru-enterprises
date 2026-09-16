import React, { useEffect, useState } from 'react';
import type { PageTab, Product } from '../types';
import { productsData } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  Home as HomeIcon, 
  Building2, 
  Factory, 
  HelpCircle, 
  ShoppingCart,
  Layers,
  Search,
  SlidersHorizontal,
  RotateCcw,
  Tag,
  X
} from 'lucide-react';

interface ProductsPageProps {
  setActiveTab?: (tab: PageTab) => void;
  onViewSpecs: (product: Product) => void;
  onInquire: (productName: string) => void;
  initialSegment?: 'all' | 'domestic' | 'commercial' | 'industrial';
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  setActiveTab,
  onViewSpecs,
  onInquire,
  initialSegment = 'all',
}) => {
  const [activeSegment, setActiveSegment] = useState<'all' | 'domestic' | 'commercial' | 'industrial'>(initialSegment);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under-7k' | '7k-10k'>('all');
  const [techFilter, setTechFilter] = useState<'all' | 'copper' | 'smart-led'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  useEffect(() => {
    document.title = "Water Purifiers for Domestic, Commercial & Industrial Use | Pune";
  }, []);

  useEffect(() => {
    if (initialSegment) {
      setActiveSegment(initialSegment);
    }
  }, [initialSegment]);

  const handleSegmentChange = (segment: 'all' | 'domestic' | 'commercial' | 'industrial') => {
    setActiveSegment(segment);
    setTimeout(() => {
      const targetId = segment === 'all'
        ? 'products-section'
        : `${segment}-section`;
      const el = document.getElementById(targetId) || document.getElementById('products-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setPriceFilter('all');
    setTechFilter('all');
    setSortBy('featured');
    setActiveSegment('all');
  };

  const navigateTo = (tab: PageTab) => {
    if (setActiveTab) {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isFiltered = searchQuery !== '' || priceFilter !== 'all' || techFilter !== 'all' || sortBy !== 'featured';

  const domesticProducts = productsData.filter(p => p.category === 'Domestic RO' || p.category === 'Alkaline & Copper');

  // Filtered products based on search, price, tech, and sort
  const filteredProducts = productsData.filter((product) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchTech = product.purificationTech.toLowerCase().includes(q);
      const matchTag = product.tagline.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      if (!matchName && !matchTech && !matchTag && !matchDesc) return false;
    }

    if (priceFilter === 'under-7k' && product.price > 7000) return false;
    if (priceFilter === '7k-10k' && (product.price < 7000 || product.price > 10000)) return false;

    if (techFilter === 'copper' && !product.purificationTech.toLowerCase().includes('copper') && !product.name.toLowerCase().includes('copper')) return false;
    if (techFilter === 'smart-led' && !product.name.toLowerCase().includes('smart led')) return false;

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="space-y-16 pb-20 bg-stone-50">
      
      {/* ========================================================
          1. HERO SECTION - MATCHING HOME & ABOUT PAGE DESIGN
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
            Water Purification Solutions for <span className="text-red-600">Domestic, Commercial & Industrial Requirements</span>
          </h1>

          {/* Clean, Concise Subheading */}
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            Explore certified RO water purifiers, commercial systems, and industrial treatment plants designed for peak reliability in Pune.
          </p>

          {/* Quick Category Filters */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleSegmentChange('all')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-bold transition-all ${
                activeSegment === 'all'
                  ? 'bg-red-700 text-white shadow-sm ring-2 ring-red-500/50'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
              }`}
            >
              All Products & Offers
            </button>
            <button
              type="button"
              onClick={() => handleSegmentChange('domestic')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-bold transition-all ${
                activeSegment === 'domestic'
                  ? 'bg-red-700 text-white shadow-sm ring-2 ring-red-500/50'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
              }`}
            >
              Domestic Purifiers (Special Offer)
            </button>
            <button
              type="button"
              onClick={() => handleSegmentChange('commercial')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-bold transition-all ${
                activeSegment === 'commercial'
                  ? 'bg-red-700 text-white shadow-sm ring-2 ring-red-500/50'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
              }`}
            >
              Commercial Systems
            </button>
            <button
              type="button"
              onClick={() => handleSegmentChange('industrial')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-bold transition-all ${
                activeSegment === 'industrial'
                  ? 'bg-red-700 text-white shadow-sm ring-2 ring-red-500/50'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
              }`}
            >
              Industrial Plants
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          PURIFICATION GUIDANCE & SYSTEM SELECTION OVERVIEW
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded inline-block">
                Selection Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display mt-2">
                Choosing the Right Water Purification Solution
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Choosing an appropriate water purification solution depends on several factors, including the source of water, its quality characteristics, daily water requirements, and the purpose for which the water will be used.
            </p>

            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded text-xs sm:text-sm text-stone-800">
              💡 Water from sources such as borewells, municipal supply, or private tankers may require different purification approaches depending on dissolved impurities and minerals present in the water.
            </div>

            {/* Product Keyword Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="font-bold text-stone-500 uppercase tracking-wider mr-1 text-[11px]">System Capabilities:</span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ RO Water Purifier
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Domestic Water Purifier
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Commercial Water Purifier
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Industrial Water Purification Systems
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Water Purifier Dealer Pune
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-200 font-semibold shadow-xs">
                ✓ Genuine Spares & Membrane Support
              </span>
            </div>
          </div>

          {/* Quick Helpline Box */}
          <div className="lg:col-span-4 bg-white border-2 border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-red-700 font-bold">
                Need System Sizing Help?
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


      {/* Anchor for products section scroll target */}
      <div id="products-section" className="scroll-mt-24" />

      {/* ========================================================
          PRODUCT FILTER & SEARCH SECTION
         ======================================================== */}
      <section id="products-filter-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-stone-200 shadow-sm p-4 sm:p-6 space-y-4">
          
          {/* Top Bar: Title & Results Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-stone-900 font-display">
                  Filter & Search Products
                </h3>
                <p className="text-xs text-stone-500">
                  Find the ideal water purifier model by price, technology & application
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Model Available' : 'Models Available'}
              </span>
              {isFiltered && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-xs font-bold text-red-700 hover:text-red-800 flex items-center gap-1 hover:underline transition-all ml-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              )}
            </div>
          </div>

          {/* Filter Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* 1. Keyword Search */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600">
                Search Model / Tech
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Copper, Smart LED, RO..."
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-stone-900 bg-stone-50/50"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* 2. Category / Segment */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600">
                Category
              </label>
              <select
                value={activeSegment}
                onChange={(e) => handleSegmentChange(e.target.value as any)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-stone-900 bg-stone-50/50 font-medium"
              >
                <option value="all">All Products & Offers</option>
                <option value="domestic">Domestic RO Purifiers</option>
                <option value="commercial">Commercial Systems</option>
                <option value="industrial">Industrial Plants</option>
              </select>
            </div>

            {/* 3. Price Filter */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600">
                Price Range
              </label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as any)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-stone-900 bg-stone-50/50 font-medium"
              >
                <option value="all">All Price Ranges</option>
                <option value="under-7k">Budget: Under ₹7,000 (Offer ₹5,990)</option>
                <option value="7k-10k">Smart Series: ₹7,000 - ₹10,000 (Offer ₹8,990)</option>
              </select>
            </div>

            {/* 4. Technology Filter */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600">
                Technology / Feature
              </label>
              <select
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value as any)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-600/40 text-stone-900 bg-stone-50/50 font-medium"
              >
                <option value="all">All Purification Tech</option>
                <option value="copper">Copper Alkaline Bio-Mineral</option>
                <option value="smart-led">Smart LED Digital Indicator</option>
              </select>
            </div>

          </div>

          {/* Quick Filter Tags & Sort Control */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-stone-100">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3 text-stone-400" />
              Quick Filters:
            </span>

            <button
              type="button"
              onClick={() => setPriceFilter(priceFilter === 'under-7k' ? 'all' : 'under-7k')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                priceFilter === 'under-7k'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Mega Offer: ₹5,990
            </button>

            <button
              type="button"
              onClick={() => setTechFilter(techFilter === 'smart-led' ? 'all' : 'smart-led')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                techFilter === 'smart-led'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Smart LED Series
            </button>

            <button
              type="button"
              onClick={() => setTechFilter(techFilter === 'copper' ? 'all' : 'copper')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                techFilter === 'copper'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Copper Alkaline RO
            </button>

            <div className="ml-auto flex items-center gap-2">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-2.5 py-1 text-xs rounded-lg border border-stone-300 text-stone-800 bg-white font-medium focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. ALL WATER PURIFICATION SYSTEMS (When 'all' is selected)
         ======================================================== */}
      {activeSegment === 'all' && (
        <section id="all-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                Verified Water Purification Solutions
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2 flex items-center gap-3">
                <Layers className="w-7 h-7 text-red-700" />
                <span>Water Purification Systems</span>
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                Explore our certified domestic RO water purifier with special limited-time pricing, plus custom commercial and industrial turnkey treatment setups in Pune.
              </p>
            </div>

            {/* Quick Segment Filter Pills directly on catalog */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-1 hidden sm:inline">
                Filter:
              </span>
              <button
                type="button"
                onClick={() => handleSegmentChange('domestic')}
                className="px-3 py-1.5 rounded text-xs font-bold bg-white text-stone-700 hover:bg-stone-100 hover:text-red-700 border border-stone-300 transition-colors"
              >
                Domestic
              </button>
              <button
                type="button"
                onClick={() => handleSegmentChange('commercial')}
                className="px-3 py-1.5 rounded text-xs font-bold bg-white text-stone-700 hover:bg-stone-100 hover:text-red-700 border border-stone-300 transition-colors"
              >
                Commercial
              </button>
              <button
                type="button"
                onClick={() => handleSegmentChange('industrial')}
                className="px-3 py-1.5 rounded text-xs font-bold bg-white text-stone-700 hover:bg-stone-100 hover:text-red-700 border border-stone-300 transition-colors"
              >
                Industrial
              </button>
            </div>
          </div>

          {/* Products Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewSpecs={onViewSpecs}
                  onInquire={onInquire}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border-2 border-stone-200 space-y-4">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                No matching water purifiers found
              </h3>
              <p className="text-stone-500 text-sm max-w-md mx-auto">
                No products match your current search or filter criteria. Try adjusting your filters or resetting them.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      )}

      {/* ========================================================
          3. DOMESTIC WATER PURIFIERS
         ======================================================== */}
      {activeSegment === 'domestic' && (
        <section id="domestic-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                Residential Systems ({domesticProducts.length} Models)
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2 flex items-center gap-3">
                <HomeIcon className="w-7 h-7 text-red-700" />
                <span>Domestic Water Purifiers</span>
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                Domestic water purifiers are designed for residential water purification requirements.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSegmentChange('all')}
              className="px-3 py-1.5 rounded text-xs font-bold bg-white text-stone-700 hover:bg-stone-100 hover:text-red-700 border border-stone-300 transition-colors self-start md:self-auto"
            >
              ← Show All Categories ({productsData.length})
            </button>
          </div>

          {/* Key Considerations Box */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              If you are looking for a water purifier for your home, it is important to consider:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Water source</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Water quality</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Daily water usage</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Available installation space</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5 sm:col-span-2 md:col-span-1">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Purification requirements</span>
              </div>
            </div>

            {/* RO Water Purifier Solutions text */}
            <div className="pt-4 border-t border-stone-100 space-y-2">
              <h4 className="text-base font-bold text-red-700">
                RO Water Purifier Solutions
              </h4>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                RO water purification is commonly considered for water containing dissolved impurities and depending on the characteristics of the water supply. Contact Sadguru Enterprises to discuss your home water purification requirement.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-bold text-stone-900 text-sm sm:text-base">
                Need a Water Purifier for Your Home?
              </span>
              <button
                type="button"
                onClick={() => onInquire('Domestic Water Purifier Inquiry')}
                className="px-6 py-2.5 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0 flex items-center gap-2"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Domestic Machine Cards or Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewSpecs={onViewSpecs}
                  onInquire={onInquire}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border-2 border-stone-200 space-y-4">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                No matching domestic purifiers found
              </h3>
              <p className="text-stone-500 text-sm max-w-md mx-auto">
                No models match your current filter criteria. Try adjusting your filters or search keywords.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      )}

      {/* ========================================================
          4. COMMERCIAL WATER PURIFIERS
         ======================================================== */}
      {activeSegment === 'commercial' && (
        <section id="commercial-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                Commercial Water Purifiers
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2 flex items-center gap-3">
                <Building2 className="w-7 h-7 text-red-700" />
                <span>Commercial Water Purifiers & Plants</span>
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                Commercial establishments require reliable water purification capacity engineered for higher daily demand. Sadguru Enterprises designs, delivers, and maintains commercial RO plants across Pune.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSegmentChange('all')}
              className="px-3 py-1.5 rounded text-xs font-bold bg-white text-stone-700 hover:bg-stone-100 hover:text-red-700 border border-stone-300 transition-colors self-start md:self-auto"
            >
              ← Show All Categories
            </button>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display">
                We Cater to Diverse Commercial Facilities
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Custom purification setups engineered for high-demand business, hospitality, and institutional spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-red-600 hover:bg-white transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-200/70 text-red-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-semibold text-stone-800 text-sm">Offices & Workspaces</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-red-600 hover:bg-white transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-200/70 text-red-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-semibold text-stone-800 text-sm">Hotels & Hospitality</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-red-600 hover:bg-white transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-200/70 text-red-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-semibold text-stone-800 text-sm">Restaurants & Cafes</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-red-600 hover:bg-white transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-200/70 text-red-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-semibold text-stone-800 text-sm">Educational Institutions</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-red-600 hover:bg-white transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-200/70 text-red-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-semibold text-stone-800 text-sm">Retail & Shopping Spaces</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-red-600 hover:bg-white transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-200/70 text-red-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-semibold text-stone-800 text-sm">Other Commercial Facilities</span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-stone-600 text-sm leading-relaxed max-w-xl">
                Contact us to discuss your water usage, daily capacity, and commercial water purification requirements.
              </p>
              <button
                type="button"
                onClick={() => onInquire('Commercial Water Purifier Requirement')}
                className="px-6 py-2.5 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0 flex items-center gap-2"
              >
                <span>Discuss Commercial Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Commercial Consultation Notice */}
          <div className="bg-stone-50 rounded-2xl border-2 border-dashed border-stone-300 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-700 flex items-center justify-center mx-auto border border-red-200">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-display">
              Commercial Systems Configured to Requirement
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed max-w-lg mx-auto">
              Commercial RO setups are customized based on raw water test results, required daily flow rate, and facility installation space. Contact our team to discuss your capacity needs.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onInquire('Commercial Water Purifier Requirement')}
                className="px-6 py-3 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all inline-flex items-center gap-2"
              >
                <span>Request Commercial Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          5. INDUSTRIAL WATER PURIFICATION SYSTEMS
         ======================================================== */}
      {activeSegment === 'industrial' && (
        <section id="industrial-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
                High Capacity Industrial Plants
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2 flex items-center gap-3">
                <Factory className="w-7 h-7 text-red-700" />
                <span>Industrial Water Purification Systems</span>
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                Industrial applications demand custom-engineered water purification plants based on raw water TDS, daily volume, and manufacturing standards. Sadguru Enterprises delivers end-to-end industrial plants in Pune.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSegmentChange('all')}
              className="px-3 py-1.5 rounded text-xs font-bold bg-white text-stone-700 hover:bg-stone-100 hover:text-red-700 border border-stone-300 transition-colors self-start md:self-auto"
            >
              ← Show All Categories
            </button>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              Key Engineering Parameters for Industrial Sizing:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Raw water TDS & hardness</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Hourly & daily peak flow</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Production process requirement</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Boiler / chiller / bottling use</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5 sm:col-span-2 md:col-span-1">
                <Check className="w-4 h-4 text-red-700 shrink-0 stroke-[3]" />
                <span className="text-sm font-semibold text-stone-800">Skid footprint & power rating</span>
              </div>
            </div>

            {/* Industrial CTA */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-stone-600 text-sm leading-relaxed max-w-xl">
                Sadguru Enterprises provides turnkey engineering support for high-capacity industrial water purification and treatment systems.
              </p>
              <button
                type="button"
                onClick={() => onInquire('Industrial RO Plant Requirement')}
                className="px-6 py-2.5 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0 flex items-center gap-2"
              >
                <span>Discuss Industrial Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Industrial Consultation Notice */}
          <div className="bg-stone-50 rounded-2xl border-2 border-dashed border-stone-300 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-700 flex items-center justify-center mx-auto border border-red-200">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-display">
              Industrial Plants Engineered to Facility Requirements
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed max-w-lg mx-auto">
              High-capacity industrial water purification and treatment plants are engineered turnkey based on water chemical analysis and daily production demands. Contact our engineering team for on-site consultation and proposals.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onInquire('Industrial RO Plant Requirement')}
                className="px-6 py-3 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all inline-flex items-center gap-2"
              >
                <span>Request Industrial Engineering Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          5. WATER PURIFIER SALES & NEED HELP CHOOSING
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Sales guidance card */}
        <div className="bg-stone-900 text-white p-8 sm:p-10 rounded-2xl border-l-8 border-red-700 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShoppingCart className="w-4 h-4" />
            <span>Buyer Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
            Water Purifier Sales
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            Looking for a water purifier? Sadguru Enterprises provides sales support for customers with domestic, commercial and industrial water purification requirements.
          </p>
          <div className="p-4 bg-stone-800 rounded-xl border border-stone-700 text-amber-200 text-sm font-medium">
            💡 Before selecting a solution, we encourage customers to consider their actual requirements instead of choosing only based on appearance or general features.
          </div>
        </div>

        {/* Need Help Choosing the Right Solution? */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-stone-200 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
              FAQ & Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display mt-2 flex items-center gap-2.5">
              <HelpCircle className="w-7 h-7 text-red-700" />
              <span>Need Help Choosing the Right Solution?</span>
            </h3>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Choosing the right water purification system can sometimes be confusing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="text-xs font-bold text-red-700 uppercase">Question 1</span>
              <p className="font-bold text-stone-900 text-sm">Do I need an RO water purifier?</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="text-xs font-bold text-red-700 uppercase">Question 2</span>
              <p className="font-bold text-stone-900 text-sm">Which water purifier is suitable for my home?</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="text-xs font-bold text-red-700 uppercase">Question 3</span>
              <p className="font-bold text-stone-900 text-sm">What type of system is suitable for commercial use?</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="text-xs font-bold text-red-700 uppercase">Question 4</span>
              <p className="font-bold text-stone-900 text-sm">What capacity is required?</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1 sm:col-span-2 lg:col-span-2">
              <span className="text-xs font-bold text-red-700 uppercase">Question 5</span>
              <p className="font-bold text-stone-900 text-sm">What service and maintenance support may be needed?</p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-stone-700 font-medium text-sm">
              Contact Sadguru Enterprises to discuss your requirement.
            </p>
            <button
              type="button"
              onClick={() => onInquire('Purifier Selection Guidance')}
              className="px-6 py-2.5 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              Get Free Recommendation
            </button>
          </div>
        </div>

      </section>

      {/* ========================================================
          6. PRODUCT & SERVICE ENQUIRY (MATCHING HOME & ABOUT CTA)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border-2 border-stone-200 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
              Contact Desk
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-display mt-2">
              Product & Service Enquiry
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Reach out directly for domestic, commercial, or industrial purifier sales and service:
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-sm text-stone-800">
            <div className="font-bold text-stone-900 text-base">Sadguru Enterprises</div>
            <div className="flex items-center gap-2">
              <span className="text-stone-500">Address:</span>
              <span className="font-semibold text-stone-900">Shreenath Heights, Near Hotel Extra Tonic, Shewalewadi, Pune - 412307</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="font-bold text-stone-900 text-base">Phone:</span>
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
                onClick={() => navigateTo('contact')}
                className="text-red-700 hover:text-red-800 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Contact Us</span>
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
            </div>

            <button
              type="button"
              onClick={() => onInquire('General Product Inquiry')}
              className="px-6 py-2.5 rounded bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              Book Free Site Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
