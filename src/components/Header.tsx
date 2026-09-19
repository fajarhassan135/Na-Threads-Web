import { Menu, X } from 'lucide-react';
import { useState, useMemo, useCallback, useEffect } from 'react';
import logoImage from '/images/company/892ab86a-6dff-4030-8254-fccff10d90b1.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#');

  const navItems = useMemo(() => [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#about-us' },
    { name: 'MANUFACTURING & PRODUCTS', href: '#manufacturing-products' },
    { name: 'CONTACT US', href: '#contact-us' }
  ], []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (href: string) => {
    if (href === '#') return activeHash === '#' || activeHash === '';
    return activeHash === href;
  };

  const handleHomeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.replaceState(null, '', window.location.pathname);
    window.location.hash = '';
    setActiveHash('#');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setActiveHash(href);
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="bg-[#0C1C27] border-b border-slate-700/50 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ml-12">
            <a href="#" onClick={handleHomeClick} className="flex items-center group">
              <div className="relative">
                <img
                  src={logoImage}
                  alt="NA Threads Manufacturing Industry"
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="200"
                  height="64"
                />
                <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 mr-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`relative px-4 py-2 transition-all duration-300 font-medium group ${
                      isActive(item.href) ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                    }`}
                    onClick={item.href === '#' ? handleHomeClick : () => handleNavClick(item.href)}
                  >
                    {item.name}
                    {/* Permanent underline for active, animated for hover */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                      isActive(item.href) ? 'w-full' : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-all duration-200 hover:bg-white/10 rounded-lg"
            onClick={toggleMenu}
          >
            <div className="relative">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-slate-700/50">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block px-4 py-3 transition-all duration-200 font-medium rounded-lg ${
                      isActive(item.href)
                        ? 'text-[#D4AF37] bg-slate-800/50'
                        : 'text-white hover:text-[#D4AF37] hover:bg-slate-800/30'
                    }`}
                    onClick={item.href === '#' ? handleHomeClick : () => handleNavClick(item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}