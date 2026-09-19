import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

// Start image preloading immediately (before React renders)
// This ensures images start loading as early as possible
if (typeof window !== 'undefined') {
  // Use requestIdleCallback for non-blocking preload, but with 0 timeout for immediate execution
  const startPreload = () => {
    // Trigger any pending preloads from HTML
    const links = document.querySelectorAll('link[rel="preload"][as="image"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        // Also use Image() constructor for immediate loading
        const img = new Image();
        img.src = href;
        img.fetchPriority = 'high';
        img.loading = 'eager';
        // Force decode if supported
        img.decode?.().catch(() => {});
      }
    });
  };
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(startPreload, { timeout: 0 });
  } else {
    // Fallback: start immediately
    setTimeout(startPreload, 0);
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

