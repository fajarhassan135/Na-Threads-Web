import { ThreadPatternBackground } from './ThreadElements';
import { ServiceCard } from './shared/Cards';
import { servicesData } from './data/constants';

export default function Services() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Dimmed Background Elements */}
      <ThreadPatternBackground />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C1C27] mb-6">
            What We <span className="text-[#D4AF37]">Do?</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in transforming high-quality yarn into precision-engineered threads for various textile applications. Our comprehensive services include:
          </p>
          
          {/* Simple divider */}
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-lg border border-slate-200 shadow-sm">
            <div className="text-slate-600 font-medium">
              Precision Manufacturing • Quality Threads • Global Standards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}