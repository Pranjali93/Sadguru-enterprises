import type { PageTab } from '../types';

export const TAB_TO_PATH: Record<PageTab, string> = {
  home: '/',
  about: '/about',
  products: '/products',
  contact: '/contact',
  blogs: '/blogs',
  privacy: '/privacy-policy',
  terms: '/terms-and-conditions',
};

export const getTabFromPath = (pathname: string): PageTab => {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '') || '/';

  switch (normalized) {
    case '/':
    case '/home':
      return 'home';
    case '/about':
    case '/about-us':
      return 'about';
    case '/products':
    case '/product':
    case '/services':
      return 'products';
    case '/contact':
    case '/contact-us':
      return 'contact';
    case '/blogs':
    case '/blog':
      return 'blogs';
    case '/privacy':
    case '/privacy-policy':
      return 'privacy';
    case '/terms':
    case '/terms-and-conditions':
    case '/terms-of-service':
      return 'terms';
    default:
      return 'home';
  }
};
