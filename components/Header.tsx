import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/f0b36163114f4423dd7c3630766055e097578fa0.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#about-us' },
    { name: 'MANUFACTURING & PRODUCTS', href: '#manufacturing-products' },
    { name: 'CONTACT US', href: '#contact-us' }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#0C1C27] border-b border-slate-700/50 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="NA Threads Manufacturing Industry" 
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="relative px-4 py-2 text-white hover:text-[#D4AF37] transition-all duration-300 font-medium group"
                    onClick={handleNavClick}
                  >
                    {item.name}
                    {/* Subtle underline animation */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-all duration-200 hover:bg-white/10 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? <X className="w-6 h-6 transition-transform duration-200" /> : <Menu className="w-6 h-6 transition-transform duration-200" />}
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
                    className="block px-4 py-3 text-white hover:text-[#D4AF37] hover:bg-slate-800/30 transition-all duration-200 font-medium rounded-lg"
                    onClick={handleNavClick}
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