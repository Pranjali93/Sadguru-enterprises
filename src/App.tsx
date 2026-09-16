import { useState, useEffect, useCallback } from 'react';
import type { PageTab, Product } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { InquiryModal } from './components/InquiryModal';
import { ProductSpecsModal } from './components/ProductSpecsModal';
import { LegalPage } from './pages/LegalPage';
import { BlogPage } from './pages/BlogPage';
import { TAB_TO_PATH, getTabFromPath } from './utils/navigation';

export function App() {
  // Navigation state initialized from browser URL path
  const [activeTab, setActiveTabState] = useState<PageTab>(() => {
    if (typeof window !== 'undefined') {
      return getTabFromPath(window.location.pathname);
    }
    return 'home';
  });

  // Function to navigate and update browser URL path
  const setActiveTab = useCallback((tab: PageTab, pushHistory: boolean = true) => {
    setActiveTabState(tab);
    if (pushHistory && typeof window !== 'undefined') {
      const targetPath = TAB_TO_PATH[tab] || '/';
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ tab }, '', targetPath);
      }
    }
  }, []);

  // Listen to browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const currentTab = getTabFromPath(window.location.pathname);
      setActiveTabState(currentTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync initial URL path if alias was used
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const matchingTab = getTabFromPath(currentPath);
      const canonicalPath = TAB_TO_PATH[matchingTab];
      if (currentPath !== canonicalPath && (currentPath.length > 1)) {
        window.history.replaceState({ tab: matchingTab }, '', canonicalPath);
      }
    }
  }, []);

  // Modals state
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryDefaultProduct, setInquiryDefaultProduct] = useState('');
  const [selectedProductSpecs, setSelectedProductSpecs] = useState<Product | null>(null);

  // Category filter state for ProductsPage
  const [productSegment, setProductSegment] = useState<'all' | 'domestic' | 'commercial' | 'industrial'>('all');

  const handleExploreCategory = (category: 'all' | 'domestic' | 'commercial' | 'industrial' = 'all') => {
    setProductSegment(category);
    setActiveTab('products');

    setTimeout(() => {
      const targetId = category !== 'all' ? `${category}-section` : 'products-section';
      const el = document.getElementById(targetId) || document.getElementById('products-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const handleOpenInquiry = (productName?: string) => {
    setInquiryDefaultProduct(productName || '');
    setInquiryModalOpen(true);
  };

  const handleViewSpecs = (product: Product) => {
    setSelectedProductSpecs(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-red-700 selection:text-white w-full max-w-full overflow-x-hidden">
      
      {/* Top Sticky Navbar (Home link is excluded as requested) */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          if (tab === 'products') {
            setProductSegment('all');
          }
          setActiveTab(tab);
        }} 
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Pages */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage 
            setActiveTab={setActiveTab}
            onViewSpecs={handleViewSpecs}
            onInquire={handleOpenInquiry}
            onExploreCategory={handleExploreCategory}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage 
            setActiveTab={setActiveTab}
            onInquire={handleOpenInquiry}
            onExploreCategory={handleExploreCategory}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage 
            setActiveTab={setActiveTab}
            onViewSpecs={handleViewSpecs}
            onInquire={handleOpenInquiry}
            initialSegment={productSegment}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}

        {(activeTab === 'terms' || activeTab === 'privacy') && (
          <LegalPage 
            type={activeTab}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {activeTab === 'blogs' && (
          <BlogPage 
            setActiveTab={setActiveTab}
            onInquire={handleOpenInquiry}
          />
        )}
      </main>

      {/* Footer with required Blog Section, Privacy Policy, and Terms & Conditions */}
      <Footer 
        setActiveTab={setActiveTab}
        onOpenInquiry={handleOpenInquiry}
      />

      <InquiryModal 
        isOpen={inquiryModalOpen}
        defaultProduct={inquiryDefaultProduct}
        onClose={() => setInquiryModalOpen(false)}
      />

      <ProductSpecsModal 
        product={selectedProductSpecs}
        onClose={() => setSelectedProductSpecs(null)}
        onInquire={handleOpenInquiry}
      />

    </div>
  );
}

export default App;
