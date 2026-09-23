import { ArrowRight, Award, Package, MapPin, Clock, Layers } from 'lucide-react';
import { ThreadPatternBackground, ThreadLines } from './ThreadElements';
import { useCountUp } from '../hooks/useCountUp';

import sewingThread from '../assets/SEWING-THREAD.jpg';
import drawcord from '../assets/Drawcord.jpg';
import polyesterThread from '../assets/POLYESTER-THREAD.jpg';
import zips from '../assets/ZIPS.jpg';
import drawcords from '../assets/Drawcords.jpg';
import zip from '../assets/zip.jpg';
import vt3Buttons from '../assets/VT3-BUTTONS.jpg';

const reelImages = [
  sewingThread, drawcord, polyesterThread, zips, drawcords, zip, vt3Buttons,
  sewingThread, drawcord, polyesterThread, zips, drawcords, zip, vt3Buttons,
];

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  accent?: boolean;
}

function StatCard({ icon, value, label, accent = false }: StatCardProps) {
  return (
    <div
      className="relative flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941F]/5 border-[#D4AF37]/40"
    >
      <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#B8941F]" />
      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center shadow-md flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent leading-tight">
          {value}
        </div>
        <div className="text-xs text-slate-500 font-semibold tracking-wide mt-0.5">{label}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const citiesCount = useCountUp({ end: 5, duration: 5000 });
  const yearsCount = useCountUp({ end: 30, duration: 5000 });
  const conesCount = useCountUp({ end: 1800000, duration: 5000 });

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
        <ThreadPatternBackground />
        <ThreadLines className="opacity-5" />

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#0C1C27]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-8 lg:px-16 pt-2 pb-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

            {/* Left - Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#0C1C27] via-[#1a2f3d] to-[#0C1C27] bg-clip-text text-transparent">
                <span className="block">NA THREADS</span>
                <span className="block text-[#D4AF37] drop-shadow-lg">MANUFACTURING</span>
                <span className="block">INDUSTRY</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mb-8 mx-auto lg:mx-0 rounded-full shadow-lg" />
              <a
                href="#about-us"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              >
                <span>ABOUT US</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col justify-center w-full space-y-4">
              <p className="text-xs font-semibold text-slate-400 tracking-widest text-center lg:text-left mb-1">
                BY THE NUMBERS
              </p>
              <StatCard
                icon={<MapPin className="w-5 h-5 text-white" />}
                value={`${citiesCount}+`}
                label="Cities Served"
                accent
              />
              <StatCard
                icon={<Clock className="w-5 h-5 text-white" />}
                value={`${yearsCount}+`}
                label="Years of Experience"
              />
              <StatCard
                icon={<Layers className="w-5 h-5 text-white" />}
                value={`${(conesCount / 1000000).toFixed(1)}M+`}
                label="Cones Produced Per Year"
                accent
              />
            </div>
          </div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .reel-track {
              display: flex;
              width: max-content;
              animation: marquee 20s linear infinite;
            }
          `}</style>

          <div className="mb-16 -mx-8 lg:-mx-16">
            <div style={{ overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
              <div className="reel-track">
                {reelImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    style={{ width: '224px', height: '200px', objectFit: 'cover', display: 'block', flexShrink: 0 }}
                    loading="eager"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center space-y-6 mb-20">
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Welcome to <span className="text-[#D4AF37] font-semibold">NA Thread Manufacturing Industry</span> – Pakistan's leading thread manufacturer, renowned for delivering high-quality threads, thread cones, dyeing, and doubling services. With a strong focus on quality, customization, and timely delivery, we cater to the diverse needs of our clients across various industries.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Our expertise spans thread manufacturing, cone production, dyeing, and doubling, ensuring precision and consistency at every stage. At NA Thread Manufacturing, we are committed to providing exceptional quality, innovative solutions, and outstanding customer service, with the goal of building long-term partnerships based on trust and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] flex items-center justify-center shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0C1C27] mb-3">Innovative Approach</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We deliver innovative thread solutions that meet the evolving needs of the textile world. Our focus on quality, customization, and performance empowers designers and manufacturers to achieve excellence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0C1C27] to-[#1a2f3d] flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0C1C27] mb-3">Sustainability</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe in responsible manufacturing. Our eco-friendly practices include sustainable raw materials, low-impact dyeing processes, and waste reduction strategies. Sustainability is not a choice for us, it is a commitment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#0C1C27] flex items-center justify-center shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0C1C27] mb-3">Craftsmanship</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We blend the rich heritage of traditional thread-making with modern technology. Our skilled technicians and automated systems produce threads that are durable, precise, and carry the character of true craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}