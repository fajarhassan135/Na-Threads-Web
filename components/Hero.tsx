import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Award, Package } from 'lucide-react';
import { ThreadPatternBackground, ThreadLines } from './ThreadElements';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Dimmed Background Elements */}
        <ThreadPatternBackground />
        <ThreadLines className="opacity-3" />
        
        <div className="container mx-auto px-4 py-16 relative">
          {/* Main Content Grid - Title Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left Column - Company Title */}
            <div className="text-left pt-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                <span className="text-[#0C1C27]">NA THREADS</span>
                <br />
                <span className="text-[#D4AF37]">MANUFACTURING</span>
                <br />
                <span className="text-[#0C1C27]">INDUSTRY</span>
              </h1>
              
              {/* Simple divider */}
              <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>
              
              {/* CTA Button */}
              <a 
                href="#about-us"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              >
                <span>ABOUT US</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column - Description */}
            <div className="text-left space-y-6 pt-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                Welcome to NA Thread Manufacturing Industry – Pakistan's leading thread manufacturer, renowned for delivering high-quality threads, thread cones, dyeing, and doubling services. With a strong focus on quality, customization, and timely delivery, we cater to the diverse needs of our clients across various industries.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expertise spans thread manufacturing, cone production, dyeing, and doubling, ensuring precision and consistency at every stage. At NA Thread Manufacturing, we are committed to providing exceptional quality, innovative solutions, and outstanding customer service, with the goal of building long-term partnerships based on trust and reliability.
              </p>
              
              {/* Statistics Section */}
              <div className="flex flex-col sm:flex-row gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-1">5+</div>
                  <div className="text-sm uppercase tracking-widest text-slate-600 font-semibold">Cities Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-1">30+</div>
                  <div className="text-sm uppercase tracking-widest text-slate-600 font-semibold">Year Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-1">1.8M+</div>
                  <div className="text-sm uppercase tracking-widest text-slate-600 font-semibold">Cones Per Year</div>
                </div>
              </div>
            </div>
          </div>



          {/* Core Values Section */}
          <div className="space-y-8">
            {/* Core Values showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Innovative Approach */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-2 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] flex items-center justify-center shadow-lg">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0C1C27] mb-3">Innovative Approach</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We deliver innovative thread solutions that meet the evolving needs of the textile world. Our focus on quality, customization, and performance empowers designers and manufacturers to achieve excellence.
                </p>
              </div>
              
              {/* Sustainability */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-2 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0C1C27] to-[#1a2f3d] flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0C1C27] mb-3">Sustainability</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We believe in responsible manufacturing. Our eco-friendly practices include the use of sustainable raw materials, low-impact dyeing processes, and waste reduction strategies. Sustainability isn't a choice for us — it's a commitment to future generations and the planet.
                </p>
              </div>

              {/* Craftsmanship */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-2 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#0C1C27] flex items-center justify-center shadow-lg">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0C1C27] mb-3">Craftsmanship</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We blend the rich heritage of traditional thread-making with modern advancements in technology. Our skilled technicians and automated systems work in harmony to produce threads that are not only durable and precise but also carry the character of true craftsmanship.
                </p>
              </div>
            </div>

            {/* Main Industrial Image */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="figma:asset/f4ed54a9ec29a297a498c220ce3b78495a98a1cc.png"
                alt="Industrial manufacturing machinery"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">State-of-the-Art Machinery</h3>
                <p className="text-white/90 text-lg">Precision engineering for superior thread quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}