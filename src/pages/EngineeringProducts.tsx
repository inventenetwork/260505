import React from 'react';
import { motion } from 'motion/react';
import { Zap, ExternalLink, ArrowLeft, Cpu, ArrowRight, Network, Factory, Anchor, Radio, Video, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EngineeringPreview } from '../components/AnimatedPreviews';

interface Brand {
  name: string;
  description: string;
  products?: string[];
  link: string;
}

const engineeringProducts: Brand[] = [
  {
    name: 'Shihlin Electric',
    description: 'Reliable power infrastructure solutions for industrial and commercial applications.',
    products: ['EV Chargers', 'Switchgears'],
    link: 'https://en.seec.com.tw/'
  },
  {
    name: 'Schneider Electric',
    description: 'Advanced building management systems for energy efficiency and automation.',
    products: ['BMS Systems', 'Smart Panels'],
    link: 'https://www.se.com/'
  },
  {
    name: 'Honeywell',
    description: 'Smart facility control and automation for high-performance buildings.',
    products: ['BMS Controllers', 'Sensors'],
    link: 'https://www.honeywell.com/'
  }
];

export default function EngineeringProducts() {
  return (
    <div className="bg-[#2a1d15] text-[#f5f2ed] min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-[#b38b3f] text-[10px] uppercase tracking-widest font-bold mb-16 hover:text-[#cdaa6d] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        {/* Featured Hero: Blyten IoT */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-black/40 border border-gold/20 rounded-[3rem] p-8 md:p-20 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[100px] -z-10" />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mb-10"
                >
                  <Cpu className="w-8 h-8 text-gold" />
                </motion.div>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                  BLYTEN <span className="text-gold">IoT</span>.
                </h1>
                <p className="text-xl text-paper/60 leading-relaxed mb-12 max-w-lg">
                  As the authorized provider for Blyten Infrastructure, we deliver the future of smart automation. From facilities to farming, our IoT solutions bridge the gap between physical infrastructure and digital intelligence.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  {['Smart Nodes', 'Environmental Sensors', 'Industrial Controllers'].map(p => (
                    <span key={p} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold">
                      {p}
                    </span>
                  ))}
                </div>
                <Link 
                  to="/blyten" 
                  className="inline-flex items-center gap-4 px-10 py-5 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all"
                >
                  Configure Solution <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full animate-pulse" />
                <div className="relative bg-[#020202] rounded-[2.5rem] border border-white/5 p-4 md:p-8">
                  <EngineeringPreview />
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-2xl font-black text-gold">28°C</p>
                      <p className="text-[8px] uppercase tracking-widest text-paper/40 font-bold">Cloudy • Temperature</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-2xl font-black text-gold">UV 4</p>
                      <p className="text-[8px] uppercase tracking-widest text-paper/40 font-bold">Moderate • UV Index</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-2xl font-black text-gold">12%</p>
                      <p className="text-[8px] uppercase tracking-widest text-paper/40 font-bold">Low • Rain Chance</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 overflow-hidden relative">
                      <p className="text-2xl font-black text-gold">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                      <p className="text-[8px] uppercase tracking-widest text-paper/40 font-bold">Live • Data Timeline</p>
                      <motion.div 
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-2 right-2 w-2 h-2 bg-gold rounded-full shadow-[0_0_8px_rgba(179,139,63,1)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Solutions Portfolio Section */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-2 h-12 bg-gold rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-paper">
              Solutions <span className="text-gold">Portfolio</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: 'ICT Network Communication', icon: <Network className="w-8 h-8 text-gold" /> },
              { title: 'IoT System Design', icon: <Cpu className="w-8 h-8 text-gold" /> },
              { title: 'ELV System Design', icon: <Zap className="w-8 h-8 text-gold" /> },
              { title: 'High Bandwidth Wireless', icon: <Radio className="w-8 h-8 text-gold" /> },
              { title: 'SCADA System Communication', icon: <Factory className="w-8 h-8 text-gold" /> },
              { title: 'City Surveillance Systems', icon: <Video className="w-8 h-8 text-gold" /> },
              { title: 'Offshore Platform Comms', icon: <Anchor className="w-8 h-8 text-gold" /> },
              { title: 'Microwave PTP Solutions', icon: <Satellite className="w-8 h-8 text-gold" /> }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-paper/80 group-hover:text-gold transition-colors">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Strategic Partners</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12">
            Strategic Electrical <span className="text-gold">& Infrastructure</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineeringProducts.map((brand) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#b38b3f]/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-black text-[#f5f2ed] mb-4 uppercase tracking-tighter">{brand.name}</h3>
                <p className="text-sm text-[#f5f2ed]/50 leading-relaxed mb-8">{brand.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {brand.products?.map((p) => (
                    <span key={p} className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={brand.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] hover:text-[#cdaa6d] transition-colors"
              >
                Explore Brand <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
