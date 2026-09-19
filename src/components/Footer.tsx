import { Linkedin, Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import logoImage from '/images/company/892ab86a-6dff-4030-8254-fccff10d90b1.png';

export default function Footer() {
  return (
    <footer className="relative bg-[#0C1C27] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-start mb-8 ml-4">
              <img
                src={logoImage}
                alt="NA Threads Manufacturing Industry"
                className="h-20 w-auto"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="200"
                height="80"
              />
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 mb-6">
              <p className="text-[#D4AF37] text-xl italic leading-relaxed mb-4 text-center">
                "Weaving the future, one thread at a time"
              </p>
              <div className="w-full h-px bg-[#D4AF37]/30 mb-4"></div>
              <p className="text-gray-300 leading-relaxed text-center">
                Premium quality threads and manufacturing solutions that connect businesses worldwide.
                Experience excellence in every fiber.
              </p>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[#D4AF37] font-bold mb-1">Business Hours</p>
                <p className="text-gray-300 text-sm">Monday to Saturday</p>
                <p className="text-gray-300 text-sm">9:00 AM to 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              Contact Info
            </h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#D4AF37] font-bold mb-1">Head Office</p>
                  <p className="text-gray-300">Sattar Square Motor Market, Faisalabad</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#D4AF37] font-bold mb-1">Email</p>
                  <a href="mailto:natraders2011@gmail.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">natraders2011@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#D4AF37] font-bold mb-1">Phone</p>
                  <div className="text-gray-300 space-y-1">
                    <a href="tel:+923008652405" className="block hover:text-[#D4AF37] transition-colors duration-200">+92 300 8652405</a>
                    <a href="tel:+923312071431" className="block hover:text-[#D4AF37] transition-colors duration-200">+92 331 20714315</a>
                    <a href="tel:+923067160967" className="block hover:text-[#D4AF37] transition-colors duration-200">+92 306 7160967</a>
                    <a href="tel:+923167018214" className="block hover:text-[#D4AF37] transition-colors duration-200">+92 316 7018214</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social and Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">@</span>
              </div>
              Connect With Us
            </h4>

            <div className="flex gap-4 mb-10">
              <a
                href="https://www.linkedin.com/in/na-threads"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-600/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/923067160967"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-600/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>

            <div className="space-y-4">
              <h5 className="text-[#D4AF37] font-bold text-lg mb-4">Quick Links</h5>
              {[
                { text: 'About Us', href: '#about-us' },
                { text: 'Manufacturing and Products', href: '#manufacturing-products' },
                { text: 'Contact', href: '#contact-us' }
              ].map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="block p-3 rounded-lg text-gray-300 hover:text-[#D4AF37] hover:bg-slate-800/30 transition-all duration-200"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Cities Strip */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <p className="text-center text-slate-400 text-sm mb-4">Serving clients across Pakistan</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Faisalabad', 'Lahore', 'Karachi', 'Sialkot', 'Multan', 'Peshawar'].map((city) => (
              <span key={city} className="px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} NA Threads Manufacturing Industry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}