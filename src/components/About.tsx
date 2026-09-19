import { useState } from 'react';
import { Quote, Target, Users, Globe, X, Linkedin, Github, ExternalLink } from 'lucide-react';
import { ThreadPatternBackground, ThreadLines, ThreadTexture } from './ThreadElements';
import { missionData, coreValuesData } from './data/constants';

const leaders = [
  {
    name: 'Najam Ul Hassan Warriach',
    title: 'Chief Executive Officer',
    gradient: 'from-[#D4AF37] to-[#B8941F]',
    badgeBg: 'bg-[#D4AF37]',
    icon: <Users className="w-10 h-10 text-white" />,
    bio: 'With over 30 years of experience in Pakistan\'s textile industry, Najam Ul Hassan Warriach founded NA Threads Manufacturing Industry with a vision to set new benchmarks in thread quality and manufacturing excellence. Under his leadership, the company has grown into one of Pakistan\'s most trusted thread manufacturers, serving clients across Faisalabad, Lahore, Karachi, Multan, Sialkot, and Peshawar. He drives the company\'s strategic direction, client relationships, and long-term growth with an unwavering commitment to quality and customer satisfaction.',
    expertise: ['Strategic Leadership', 'Business Development', 'Textile Industry', 'Client Relations'],
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/na-threads', icon: 'linkedin' },
    ]
  },
  {
    name: 'Abdullah Hassan Warriach',
    title: 'Chief Operating Officer',
    gradient: 'from-[#0C1C27] to-[#1a2f3d]',
    badgeBg: 'bg-[#0C1C27]',
    icon: <Target className="w-10 h-10 text-white" />,
    bio: 'Abdullah Hassan Warriach oversees the day-to-day operations of NA Threads Manufacturing Industry, ensuring that every division from thread manufacturing and cone winding to dyeing and doubling runs with precision and efficiency. His operational expertise has been instrumental in scaling the company\'s production capacity while maintaining the strict quality standards that NA Threads is known for. Abdullah is dedicated to building streamlined processes, managing supplier relationships, and ensuring timely delivery to clients across Pakistan.',
    expertise: ['Operations Management', 'Supply Chain', 'Quality Control', 'Process Optimization'],
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullahwarriach/', icon: 'linkedin' },
    ]
  },
  {
    name: 'Fajar Hassan Warriach',
    title: 'Chief Technology Officer',
    gradient: 'from-[#D4AF37] to-[#0C1C27]',
    badgeBg: 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F]',
    icon: <Globe className="w-10 h-10 text-white" />,
    bio: 'Fajar Hassan Warriach leads the technology vision at NA Threads Manufacturing Industry, driving the company\'s digital transformation and online presence. As a full-stack developer and AI engineer, Fajar brings cutting-edge technical expertise to a traditional industry. She is responsible for building and maintaining the company\'s digital infrastructure, e-commerce capabilities, and technology-driven solutions that give NA Threads a competitive edge in the modern textile market.',
    expertise: ['Full-Stack Development', 'AI Engineering', 'Digital Transformation', 'Web Architecture'],
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/fajarwarriach', icon: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/fajarhassan135', icon: 'github' },
    ]
  }
];

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leaders[0] | null>(null);

  return (
    <>
      {/* Leader Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedLeader.gradient} px-8 py-8 rounded-t-2xl relative`}>
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/30">
                  {selectedLeader.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedLeader.name}</h2>
                  <p className="text-white/80 font-medium mt-1">{selectedLeader.title}</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-3">About</h3>
                <p className="text-slate-600 leading-relaxed">{selectedLeader.bio}</p>
              </div>

              <div className="w-full h-px bg-slate-100" />

              {/* Expertise */}
              <div>
                <h3 className="text-lg font-bold text-[#0C1C27] mb-3">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedLeader.expertise.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-semibold border border-[#D4AF37]/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Socials */}
              {selectedLeader.socials.length > 0 && (
                <>
                  <div className="w-full h-px bg-slate-100" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0C1C27] mb-3">Connect</h3>
                    <div className="flex gap-3">
                      {selectedLeader.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[#0C1C27] hover:bg-[#1a2f3d] text-white rounded-lg text-sm font-semibold transition-all duration-200"
                        >
                          {social.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
                          {social.icon === 'github' && <Github className="w-4 h-4" />}
                          {social.label}
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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

      <section className="relative py-20 bg-slate-50">
        <ThreadTexture />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Message from Our <span className="text-[#D4AF37]">CEO</span>
            </h2>
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#D4AF37]/20" />
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 font-serif">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">At NA Thread Manufacturing Industry, we believe that a thread is never just a thread it is the beginning of something greater. It is a foundation upon which creativity is built, industries are empowered, and progress is made.</p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">For decades, we've stood not only as thread manufacturers but as partners in innovation and growth. Our work supports the vision of textile exporters, the precision of garment manufacturers, and the creativity of designers across Pakistan and beyond. Every cone we produce is crafted with care, consistency, and a commitment to excellence.</p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">We see ourselves as enablers of dreams the silent strength behind every stitch, the connector that binds diverse industries, and the bridge that links tradition with technology.</p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">As we move forward, we remain dedicated to sustainable practices, customized solutions, and world-class service. We are proud of what we have built, but even more excited for what lies ahead.</p>
                <p className="text-lg text-slate-600 leading-relaxed italic">Because at NA Thread Manufacturing Industry, we don't just spin thread <strong className="text-[#D4AF37]">we weave futures</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white overflow-hidden">
        <ThreadPatternBackground />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Our <span className="text-[#D4AF37]">Leadership</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders driving NA Threads Manufacturing Industry toward excellence and innovation. Click on any card to learn more.
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* CEO and COO */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {leaders.slice(0, 2).map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {leader.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C1C27] mb-2">{leader.name}</h3>
                  <div className={`inline-block ${leader.badgeBg} text-white px-4 py-2 rounded-lg font-semibold mb-4`}>
                    {leader.title}
                  </div>
                  <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>
                  <p className="text-xs text-[#D4AF37] font-semibold tracking-wide uppercase">Click to view profile</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTO centered */}
          <div className="flex justify-center">
            <div
              className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group w-full max-w-sm"
              onClick={() => setSelectedLeader(leaders[2])}
            >
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${leaders[2].gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {leaders[2].icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0C1C27] mb-2">{leaders[2].name}</h3>
                <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-4 py-2 rounded-lg font-semibold mb-4">
                  {leaders[2].title}
                </div>
                <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>
                <p className="text-xs text-[#D4AF37] font-semibold tracking-wide uppercase">Click to view profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { city: 'Multan', color: 'from-[#D4AF37] to-[#B8941F]' },
              { city: 'Sialkot', color: 'from-[#0C1C27] to-[#1a2f3d]' },
              { city: 'Lahore', color: 'from-[#D4AF37] to-[#B8941F]' },
              { city: 'Karachi', color: 'from-[#0C1C27] to-[#1a2f3d]' },
              { city: 'Peshawar', color: 'from-[#D4AF37] to-[#B8941F]' },
            ].map(({ city, color }) => (
              <div key={city} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0C1C27] mb-2">{city}</h3>
                  <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white overflow-hidden">
        <ThreadPatternBackground />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">Our <span className="text-[#D4AF37]">Legacy</span></h2>
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

      <section className="relative py-20 bg-slate-50">
        <ThreadLines />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">Why We <span className="text-[#D4AF37]">Exist</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Driven by purpose, guided by values, and committed to excellence in everything we do.</p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {missionData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-2">
                <div className="text-center p-8">
                  <div className="relative mb-6 flex justify-center">
                    <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-lg`}>{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C1C27] mb-4">{item.title}</h3>
                  <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-[#0C1C27] mb-12">Our Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {coreValuesData.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                  <div className={`flex justify-center text-white mb-3 p-3 rounded-lg bg-gradient-to-r ${value.color}`}>{value.icon}</div>
                  <div className="font-semibold text-[#0C1C27]">{value.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <ThreadLines />
        <ThreadPatternBackground />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">Product <span className="text-[#D4AF37]">Portfolio</span></h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
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