import { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const preloadAppImages = () => {
  const criticalImages = [
    '/images/company/892ab86a-6dff-4030-8254-fccff10d90b1.png',
    '/photo 1.png',
    '/photo 2.png'
  ];
  const heroImages = [
    '/ChatGPT Image Aug 10, 2025, 12_28_17 AM.png',
    '/ChatGPT Image Aug 10, 2025, 12_27_30 AM.png',
    '/ChatGPT Image Aug 10, 2025, 12_25_33 AM.png',
    '/ChatGPT Image Aug 10, 2025, 12_22_29 AM.png',
    '/ChatGPT Image Aug 10, 2025, 12_11_16 AM.png',
    '/ChatGPT Image Aug 10, 2025, 12_16_13 AM.png',
    '/ChatGPT Image Aug 10, 2025, 12_19_05 AM.png'
  ];
  const productImages = [
    '/images/products/drawcord.png',
    '/images/products/drawcords.png',
    '/images/products/zip.png',
    '/images/products/zips.png',
    '/images/products/buttons.png',
    '/images/products/button.png',
    '/images/products/thread1.jpg',
    '/images/products/thread 2.jpg'
  ];
  const otherImages = ['/location.jpg'];

  const preloadImage = (src: string, priority: 'high' | 'auto' = 'high') => {
    const img = new Image();
    img.src = src;
    if (priority === 'high') img.fetchPriority = 'high';
    img.loading = 'eager';
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    if (priority === 'high') link.setAttribute('fetchpriority', 'high');
    if (src.endsWith('.png')) link.setAttribute('type', 'image/png');
    else if (src.endsWith('.jpg') || src.endsWith('.jpeg')) link.setAttribute('type', 'image/jpeg');
    document.head.appendChild(link);
  };

  criticalImages.forEach(src => preloadImage(src, 'high'));
  heroImages.forEach(src => preloadImage(src, 'high'));
  productImages.forEach(src => preloadImage(src, 'high'));
  otherImages.forEach(src => preloadImage(src, 'high'));
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => preloadAppImages(), { timeout: 0 });
  } else {
    setTimeout(preloadAppImages, 0);
  }
}

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Manufacturing = lazy(() => import('./components/Manufacturing'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (!hash || hash === '') {
        setCurrentPage('home');
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }
        return;
      }
      switch (hash) {
        case 'about-us':
          setCurrentPage('about');
          break;
        case 'manufacturing---products':
        case 'manufacturing-products':
          setCurrentPage('manufacturing');
          break;
        case 'contact-us':
          setCurrentPage('contact');
          break;
        default:
          setCurrentPage('home');
          window.history.replaceState(null, '', window.location.pathname);
          break;
      }
    };

    const initialHash = window.location.hash.slice(1);
    if (!initialHash || initialHash === '') {
      setCurrentPage('home');
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    } else {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'manufacturing':
        return <Manufacturing />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        {renderCurrentPage()}
      </Suspense>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923067160967"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}