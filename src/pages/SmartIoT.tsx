import React from 'react';
import { motion } from 'motion/react';
import { Network, Database, Cpu, Activity, ArrowRight, ShieldCheck, Globe, BarChart3 } from 'lucide-react';
import BlytenAsterisk from '../components/BlytenAsterisk';

export default function SmartIoT() {
  const features = [
    {
      title: 'Edge Computing',
      desc: 'Local data processing for ultra-low latency and enhanced security.',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: 'Asset Tracking',
      desc: 'Real-time monitoring of high-value assets across global networks.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Predictive Maintenance',
      desc: 'AI-driven insights to prevent equipment failure before it occurs.',
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: 'Data Analytics',
      desc: 'Comprehensive visualization of industrial data for operational excellence.',
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-[#2a1d15] text-[#f5f2ed] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2a1d15]/40 to-[#2a1d15] z-10" />
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2 }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 flex flex-col items-center relative">
              <BlytenAsterisk />
              <h1 className="font-sans text-5xl md:text-8xl font-black text-[#b38b3f] tracking-tighter uppercase leading-none">
                SMART <span className="text-[#f5f2ed]">IoT</span>
              </h1>
              <p className="text-[#f5f2ed]/60 font-sans uppercase tracking-[0.8em] text-xs md:text-sm font-bold mt-4">
                Connectivity. Simplified.
              </p>
            </div>
            <p className="text-lg md:text-xl text-[#f5f2ed]/80 max-w-2xl mx-auto mb-12">
              Custom industrial connectivity solutions and edge computing platforms for data-driven operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-[#b38b3f]/30 transition-all duration-500 group"
            >
              <div className="text-[#b38b3f] mb-8 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold uppercase tracking-tight mb-4">{feature.title}</h4>
              <p className="text-xs text-[#f5f2ed]/50 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-32 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Industrial Excellence</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
              Future-Proof <span className="text-[#b38b3f]">Connectivity</span>.
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-[#b38b3f]"><ShieldCheck className="w-8 h-8" /></div>
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-widest mb-2">Secure Architecture</h5>
                  <p className="text-xs text-[#f5f2ed]/40 leading-relaxed">End-to-end encryption and robust security protocols for industrial data protection.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[#b38b3f]"><Database className="w-8 h-8" /></div>
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-widest mb-2">Scalable Infrastructure</h5>
                  <p className="text-xs text-[#f5f2ed]/40 leading-relaxed">Easily expand your IoT network with our modular and flexible platform.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
              alt="Smart IoT Infrastructure"
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            Ready to <span className="text-[#b38b3f]">Connect</span> Your Industry?
          </h3>
          <button className="px-12 py-6 bg-[#b38b3f] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#cdaa6d] transition-all">
            Inquire Now
          </button>
        </div>
      </section>
    </div>
  );
}
