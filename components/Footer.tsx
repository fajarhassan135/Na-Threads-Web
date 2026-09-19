import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logoImage from '/images/company/892ab86a-6dff-4030-8254-fccff10d90b1.png';

export default function Footer() {
  return (
    <footer className="relative bg-[#0C1C27] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <img
                src={logoImage}
                alt="NA Threads Manufacturing Industry"
                className="h-20 w-auto"
              />
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
              <p className="text-[#D4AF37] text-xl italic leading-relaxed mb-4 text-center">
                "Weaving the future, one thread at a time"
              </p>
              <div className="w-full h-px bg-[#D4AF37]/30 mb-4"></div>
              <p className="text-gray-300 leading-relaxed text-center">
                Premium quality threads and manufacturing solutions that connect businesses across Pakistan.
                Experience excellence in every fiber.
              </p>
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
              <a
                href="https://maps.google.com/?q=Sattar+Square+Motor+Market+Faisalabad+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#D4AF37] font-bold mb-1">Head Office</p>
                  <p className="text-gray-300">Sattar Square Motor Market, Faisalabad</p>
                </div>
              </a>

              <a
                href="mailto:natraders2011@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#D4AF37] font-bold mb-1">Email</p>
                  <p className="text-gray-300">natraders2011@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-[#D4AF37]/50 transition-all duration-300">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#D4AF37] font-bold mb-1">Phone</p>
                  <a href="https://wa.me/923008652405" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">+92 300 8652405</a>
                  <a href="https://wa.me/923312071435" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">+92 331 20714315</a>
                  <a href="https://wa.me/923067160967" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">+92 306 7160967</a>
                </div>
              </div>
            </div>
          </div>

          {/* Social + Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">@</span>
              </div>
              Follow Us
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
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-600/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                title="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            <div className="space-y-4">
              <h5 className="text-[#D4AF37] font-bold text-lg mb-4">Quick Links</h5>
              {[
                { text: 'Home', href: '#' },
                { text: 'About Us', href: '#about-us' },
                { text: 'Manufacturing & Products', href: '#manufacturing-products' },
                { text: 'Contact Us', href: '#contact-us' },
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

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} NA Threads Manufacturing Industry. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center">
            Designed & Developed by <span className="text-[#D4AF37] font-semibold">Fajar Hassan Warriach</span>
          </p>
        </div>
      </div>
    </footer>
  );
}