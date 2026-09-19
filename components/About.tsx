import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Award, Target, Heart, Users, Globe, Lightbulb, Shield } from 'lucide-react';
import { ThreadPatternBackground, ThreadLines, ThreadTexture } from './ThreadElements';
import { StatCard } from './shared/Cards';
import { missionData, coreValuesData, productsData } from './data/constants';

export default function About() {
  return (
    <>
      {/* About Hero Section */}
      <section className="relative bg-white overflow-hidden py-20">
        <ThreadPatternBackground />
        <ThreadLines />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C1C27] mb-6 leading-tight">
              About <span className="text-[#D4AF37]">NA Threads</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind Pakistan's premier thread manufacturing industry and our commitment to excellence in every fiber.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Leadership Message Section */}
      <section className="relative py-20 bg-slate-50">
        <ThreadTexture />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
                Message from Our <span className="text-[#D4AF37]">CEO</span>
              </h2>
            </div>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#D4AF37]/20" />
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200" style={{fontFamily: 'Times New Roman, serif'}}>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  At NA Thread Manufacturing Industry, we believe that a thread is never just a thread — it is the beginning of something greater. It is a foundation upon which creativity is built, industries are empowered, and progress is made.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  For decades, we've stood not only as thread manufacturers but as partners in innovation and growth. Our work supports the vision of textile exporters, the precision of garment manufacturers, and the creativity of designers across Pakistan and beyond. Every cone we produce is crafted with care, consistency, and a commitment to excellence.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  We see ourselves as enablers of dreams — the silent strength behind every stitch, the connector that binds diverse industries, and the bridge that links tradition with technology. Our goal is to ensure that our threads contribute not only to the quality of a final product but to the success of every client we serve.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  As we move forward, we remain dedicated to sustainable practices, customized solutions, and world-class service. We are proud of what we have built, but even more excited for what lies ahead.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  Because at NA Thread Manufacturing Industry, we don't just spin thread — <strong className="text-[#D4AF37]">we weave futures</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <ThreadPatternBackground />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Our <span className="text-[#D4AF37]">Leadership</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders driving NA Threads Manufacturing Industry toward excellence and innovation.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0C1C27] mb-2">
                  Najam Ul Hassan Warriach
                </h3>
                
                <div className="inline-block bg-[#D4AF37] text-white px-4 py-2 rounded-lg font-semibold mb-4">
                  Chief Executive Officer
                </div>
                
                <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>

            {/* COO */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#0C1C27] to-[#1a2f3d] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0C1C27] mb-2">
                  Abdullah Hassan Warriach
                </h3>
                
                <div className="inline-block bg-[#0C1C27] text-white px-4 py-2 rounded-lg font-semibold mb-4">
                  Chief Operating Officer
                </div>
                
                <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographical Reach Section */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <ThreadTexture />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Geographical <span className="text-[#D4AF37]">Reach</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We proudly serve key textile hubs across Pakistan, ensuring timely delivery, localized support, and strong relationships with manufacturers and exporters throughout the country.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Multan</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0C1C27] to-[#1a2f3d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Sialkot</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Lahore</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0C1C27] to-[#1a2f3d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Karachi</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-2">Peshawar</h3>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Legacy Section - Single Paragraph */}
      <section className="relative py-20 bg-white overflow-hidden">
        <ThreadPatternBackground />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Our <span className="text-[#D4AF37]">Legacy</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center">
              <p className="text-lg text-slate-600 leading-relaxed">
                At NA Thread Manufacturing Industry, we deliver <strong>innovative thread solutions</strong> tailored to the evolving textile industry. Our <strong>sustainable practices</strong> ensure eco-friendly processes while maintaining superior quality. We value <strong>craftsmanship</strong>, blending traditional techniques with modern technology for exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-20 bg-slate-50">
        <ThreadLines />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Why We <span className="text-[#D4AF37]">Exist</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Driven by purpose, guided by values, and committed to excellence in everything we do.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {missionData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-2">
                <div className="text-center p-8">
                  <div className="relative mb-6 flex justify-center">
                    <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0C1C27] mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Values Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-[#0C1C27] mb-12">Our Core Values</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {coreValuesData.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                  <div className={`flex justify-center text-white mb-3 p-3 rounded-lg bg-gradient-to-r ${value.color}`}>
                    {value.icon}
                  </div>
                  <div className="font-semibold text-[#0C1C27]">{value.label}</div>
                </div>
              ))}
            </div>
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
              Product <span className="text-[#D4AF37]">Portfolio</span>
            </h2>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* Products Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0C1C27] mb-3">Thread Cones</h3>
                    <p className="text-slate-600 leading-relaxed">Precision-wound threads for efficient textile production</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0C1C27] mb-3">Applications</h3>
                    <p className="text-slate-600 leading-relaxed">Bedsheets, garments, socks, and other textile products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}