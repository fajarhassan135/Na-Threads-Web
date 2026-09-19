import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Factory, Cog, Package, Shield, CheckCircle, X, Star, Award, Truck, Settings } from 'lucide-react';
import { ThreadPatternBackground, ThreadTexture, ThreadLines } from './ThreadElements';
import { StatCard } from './shared/Cards';
import { divisionsData, productsData, manufacturingStatsData } from './data/constants';

const productDetails: Record<string, {
  tagline: string;
  overview: string;
  howWeHandle: string;
  features: string[];
  applications: string[];
  whyUs: string;
}> = {
  "Drawcords": {
    tagline: "Premium Drawcords for Every Textile Application",
    overview: "Our drawcords are crafted from the finest polyester and cotton blends, engineered for exceptional durability, smooth operation, and a premium finish. Available in round, flat, and braided styles across a full spectrum of colors.",
    howWeHandle: "At NA Threads, every drawcord passes through our dedicated production line where tension, thickness, and finish are precision-controlled. We use advanced braiding machines to ensure consistent diameter and strength throughout the entire length. Each batch undergoes tensile strength testing before dispatch.",
    features: ["Available in round, flat & braided styles", "Full custom color matching", "Consistent diameter & tensile strength", "Soft, smooth finish for comfort", "Resistant to fraying and wear"],
    applications: ["Hoodies & sweatshirts", "Joggers & track pants", "Bags & backpacks", "Sportswear", "Footwear"],
    whyUs: "With 30+ years of textile expertise, our drawcords meet international quality benchmarks. We offer custom lengths, colors, and tip finishes — all with fast turnaround and reliable delivery across Pakistan."
  },
  "Zips": {
    tagline: "Precision-Engineered Zippers for Every Industry",
    overview: "Our zippers are manufactured to withstand the demands of daily use while maintaining smooth operation and a refined aesthetic. We supply coil, metal, and plastic zippers in a wide range of sizes, colors, and finishes.",
    howWeHandle: "Each zipper at NA Threads is sourced and quality-checked through our strict procurement process. We work with trusted suppliers and perform rigorous testing — including pull-force tests, slider durability checks, and colorfastness assessments — before any product reaches our clients.",
    features: ["Coil, metal & plastic zipper types", "Sizes from #3 to #10", "Wide color & finish range", "Auto-lock & non-lock sliders", "Corrosion & weather resistant options"],
    applications: ["Garments & jackets", "Bags & luggage", "Upholstery & home textiles", "Sportswear", "Industrial workwear"],
    whyUs: "We offer bulk supply with consistent quality, competitive pricing, and fast delivery. Our team helps clients select the right zipper type and size for their specific end use — ensuring perfect integration with their products."
  },
  "VT3 Buttons": {
    tagline: "High-Grade Buttons for Professional Garment Finishing",
    overview: "Our VT3 Buttons are premium-quality fasteners designed for durability, consistent sizing, and an elegant finish. Available in a variety of materials, colors, and hole configurations to suit all garment types.",
    howWeHandle: "NA Threads sources VT3 Buttons from certified manufacturers and conducts in-house quality checks on every batch. We verify shank strength, colorfastness, and surface finish — ensuring each button performs flawlessly through washing, ironing, and everyday wear.",
    features: ["Consistent sizing & weight", "Multiple hole configurations (2-hole, 4-hole, shank)", "Available in matte, gloss & metallic finishes", "Colourfast & heat resistant", "Bulk packaging with sorting options"],
    applications: ["Formal shirts & trousers", "Jackets & coats", "Uniforms & workwear", "Denim & casualwear", "School & corporate uniforms"],
    whyUs: "We understand that even the smallest component affects the final product's quality. Our VT3 Buttons are trusted by garment manufacturers across Pakistan for their reliability, aesthetic appeal, and consistent availability in bulk quantities."
  },
  "Sewing Threads": {
    tagline: "Industrial-Strength Sewing Threads for Every Stitch",
    overview: "Our sewing threads are the backbone of our product range — engineered for strength, smoothness, and color consistency. We manufacture and supply polyester, cotton, and blended threads across all ticket numbers and twist directions.",
    howWeHandle: "Produced in our core manufacturing facility, our sewing threads go through spinning, doubling, dyeing, and cone-winding — all under one roof. This vertical integration gives us full quality control at every stage. Thread tension, twist per inch, and dye penetration are all monitored in real time on our production floor.",
    features: ["Polyester, cotton & blended options", "All ticket numbers available", "S & Z twist directions", "Vibrant, colourfast dyes", "Precision-wound cones for tangle-free operation"],
    applications: ["Garment manufacturing", "Bedsheets & home textiles", "Socks & hosiery", "Towels & terry cloth", "Industrial & technical textiles"],
    whyUs: "As Pakistan's dedicated thread manufacturer, we combine 30+ years of expertise with modern machinery to deliver sewing threads that run smoothly on all machine types — from domestic to high-speed industrial setups. Customization, consistency, and reliability are our core promises."
  }
};

export default function Manufacturing() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const activeProduct = selectedProduct ? productDetails[selectedProduct] : null;
  const activeProductData = selectedProduct ? productsData.find(p => p.name === selectedProduct) : null;

  return (
    <>
      {/* Modal */}
      {selectedProduct && activeProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-gradient-to-r from-[#0C1C27] to-[#1E293B] px-8 py-6 rounded-t-2xl">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedProduct}</h2>
                  <p className="text-[#D4AF37] text-sm font-medium mt-0.5">{activeProduct.tagline}</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {activeProductData && (
                <div className="grid grid-cols-2 gap-3 rounded-xl overflow-hidden">
                  <img src={activeProductData.image1} alt={selectedProduct} className="w-full h-48 object-cover" />
                  <img src={activeProductData.image2} alt={selectedProduct} className="w-full h-48 object-cover" />
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-lg font-bold text-[#0C1C27]">Product Overview</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{activeProduct.overview}</p>
              </div>

              <div className="w-full h-px bg-slate-100" />

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-lg font-bold text-[#0C1C27]">How We Handle It</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{activeProduct.howWeHandle}</p>
              </div>

              <div className="w-full h-px bg-slate-100" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                    <h3 className="text-lg font-bold text-[#0C1C27]">Key Features</h3>
                  </div>
                  <ul className="space-y-2">
                    {activeProduct.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Truck className="w-5 h-5 text-[#D4AF37]" />
                    <h3 className="text-lg font-bold text-[#0C1C27]">Applications</h3>
                  </div>
                  <ul className="space-y-2">
                    {activeProduct.applications.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0C1C27] mt-2 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100" />

              <div className="bg-gradient-to-r from-[#0C1C27] to-[#1E293B] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-lg font-bold text-white">Why Choose NA Threads</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-sm">{activeProduct.whyUs}</p>
              </div>

              <div className="text-center pt-2">
                <a
                  href="#contact-us"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enquire About This Product
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {manufacturingStatsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
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
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {divisionsData.map((division, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${division.bgColor}`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
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
              Click on any product to learn more about how we manufacture and handle it.
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {productsData.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedProduct(product.name)}
              >
                <div className="px-4 py-4 bg-gradient-to-r from-[#0C1C27] to-[#1E293B] text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold truncate">{product.name}</h3>
                      <p className="text-white/80 text-xs leading-tight">{product.description}</p>
                    </div>
                    <span className="text-xs text-[#D4AF37] font-semibold border border-[#D4AF37]/40 rounded px-2 py-1 group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-200 flex-shrink-0">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2" style={{ height: '400px' }}>
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image1}
                      alt={`${product.name} - View 1`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  </div>
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image2}
                      alt={`${product.name} - View 2`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
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
              Our threads are trusted by a wide range of industries within the textile value chain.
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: <Factory className="w-8 h-8 text-white" />,
                label: "Textile Mills",
                color: "from-[#D4AF37] to-[#B8941F]",
                desc: "We supply high-tenacity sewing and doubling threads to large-scale textile mills running high-speed industrial machines around the clock."
              },
              {
                icon: <Cog className="w-8 h-8 text-white" />,
                label: "Hosiery Sector",
                color: "from-[#0C1C27] to-[#1a2f3d]",
                desc: "Our fine-count threads are trusted by hosiery manufacturers for seamless knitting operations, delivering softness and strength in every stitch."
              },
              {
                icon: <Package className="w-8 h-8 text-white" />,
                label: "Towel Producers",
                color: "from-[#D4AF37] to-[#B8941F]",
                desc: "Towel manufacturers rely on our colourfast, absorbency-compatible threads to maintain structural integrity through repeated industrial washing."
              },
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                label: "Sock Manufacturers",
                color: "from-[#0C1C27] to-[#1a2f3d]",
                desc: "From ankle socks to compression wear, our elastic-compatible threads provide the flexibility and durability sock producers demand at scale."
              },
            ].map(({ icon, label, color, desc }) => (
              <div key={label} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0C1C27] mb-2">{label}</h3>
                  <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-3"></div>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}