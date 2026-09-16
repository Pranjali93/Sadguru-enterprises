export type PageTab = 'home' | 'about' | 'products' | 'contact' | 'terms' | 'privacy' | 'blogs';

export type ProductCategory = 
  | 'All'
  | 'Domestic RO'
  | 'Commercial RO'
  | 'Industrial RO'
  | 'Alkaline & Copper';

export type WaterSource = 
  | 'All Sources'
  | 'Borewell (High TDS)'
  | 'Municipal (Low/Mid TDS)'
  | 'Tanker & Mixed';

export interface Product {
  id: string;
  name: string;
  category: 'Domestic RO' | 'Commercial RO' | 'Industrial RO' | 'Alkaline & Copper';
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  capacity: string; // e.g., "15 LPH", "50 LPH", "500 LPH"
  capacityNumeric: number; // For filtering
  storageCapacity?: string; // e.g., "10 Litres Food Grade"
  purificationTech: string; // e.g., "RO + UV + UF + TDS Controller + Alkaline"
  waterSource: 'Borewell (High TDS)' | 'Municipal (Low/Mid TDS)' | 'Tanker & Mixed';
  stages: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  badge?: string;
  specifications: {
    membraneType: string;
    bodyMaterial: string;
    powerConsumption: string;
    tdsReduction: string;
    mounting: string;
    warranty: string;
  };
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  waterSource: string;
  productInterest: string;
  serviceType: 'New Purchase' | 'Free Water Testing' | 'RO Repair/Service' | 'AMC Inquiry';
  message: string;
}
