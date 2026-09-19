import { ImageWithFallback } from './figma/ImageWithFallback';
import { Factory, Cog, Package, Shield, Award, CheckCircle } from 'lucide-react';
import { ThreadPatternBackground, ThreadTexture, ThreadLines } from './ThreadElements';
import { StatCard } from './shared/Cards';
import { divisionsData, productsData, manufacturingStatsData } from './data/constants';

export default function Manufacturing() {
  return (
    <>
      {/* Manufacturing Hero Section */}
      <section className="relative bg-white overflow-hidden py-20">
        <ThreadPatternBackground />
        <ThreadLines />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C1C27] mb-6 leading-tight">
              Manufacturing <span className="text-[#D4AF37]">&</span> Products
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our advanced manufacturing capabilities and comprehensive product range that sets industry standards for quality and innovation.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* Manufacturing Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {manufacturingStatsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <ThreadTexture />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Our <span className="text-[#D4AF37]">Divisions</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our Divisions at NA Thread Manufacturing Industry work together to deliver comprehensive thread solutions from manufacturing to finishing.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* Divisions Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {divisionsData.map((division, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${division.bgColor}`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 text-white">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/30">
                      {division.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{division.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-6">{division.description}</p>
                  
                  <div className="space-y-3">
                    {division.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-white/80">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-20 bg-white">
        <ThreadLines />
        <ThreadPatternBackground />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Our <span className="text-[#D4AF37]">Products</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of high-quality threads designed to meet diverse industry requirements and applications.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {productsData.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-2">
                {/* Product Header */}
                <div className="px-4 py-4 bg-gradient-to-r from-[#0C1C27] to-[#1E293B] text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold truncate">{product.name}</h3>
                      <p className="text-white/80 text-xs leading-tight">{product.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Images */}
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={product.image1}
                      alt={`${product.name} - View 1`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  </div>
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={product.image2}
                      alt={`${product.name} - View 2`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments Section */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <ThreadTexture />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Customer <span className="text-[#D4AF37]">Segments</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our threads are trusted by a wide range of industries within the textile value chain, ensuring quality and reliability across diverse applications.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* Customer Segments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Textile Mills</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0C1C27] to-[#1a2f3d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Hosiery Sector</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Towel Producers</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0C1C27] to-[#1a2f3d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Sock Manufacturers</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}