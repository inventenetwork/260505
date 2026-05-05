import React from 'react';
import { motion } from 'motion/react';
import { Building2, Users, Wind, Lightbulb, Activity, BarChart3, Smartphone, ArrowRight } from 'lucide-react';
import BlytenAsterisk from '../components/BlytenAsterisk';

export default function SmartOffice() {
  const features = [
    {
      title: 'Occupancy Tracking',
      desc: 'Real-time monitoring of workspace usage to optimize office layout and energy.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Smart Meeting Rooms',
      desc: 'Automated booking and environmental control for productive collaboration.',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: 'Energy Management',
      desc: 'Intelligent HVAC and lighting control to reduce operational costs.',
      icon: <Wind className="w-8 h-8" />
    },
    {
      title: 'Workspace Analytics',
      desc: 'Data-driven insights into employee productivity and office efficiency.',
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
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"
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
                SMART <span className="text-[#f5f2ed]">OFFICE</span>
              </h1>
              <p className="text-[#f5f2ed]/60 font-sans uppercase tracking-[0.8em] text-xs md:text-sm font-bold mt-4">
                Workspace. Simplified.
              </p>
            </div>
            <p className="text-lg md:text-xl text-[#f5f2ed]/80 max-w-2xl mx-auto mb-12">
              Intelligent workspace management with occupancy tracking and automated HVAC/lighting for sustainable productivity.
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

      {/* Productivity Section */}
      <section className="py-32 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 relative aspect-video rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200" 
              alt="Smart Office Productivity"
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">The Productivity</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
              Sustainable <span className="text-[#b38b3f]">Efficiency</span>.
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-[#b38b3f]"><Lightbulb className="w-8 h-8" /></div>
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-widest mb-2">Adaptive Lighting</h5>
                  <p className="text-xs text-[#f5f2ed]/40 leading-relaxed">Lighting that adjusts based on natural light levels and occupancy to improve focus.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[#b38b3f]"><Smartphone className="w-8 h-8" /></div>
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-widest mb-2">Mobile Integration</h5>
                  <p className="text-xs text-[#f5f2ed]/40 leading-relaxed">Book rooms and control your workspace environment directly from your smartphone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            Optimize Your <span className="text-[#b38b3f]">Workspace</span> Today.
          </h3>
          <button className="px-12 py-6 bg-[#b38b3f] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#cdaa6d] transition-all">
            Inquire Now
          </button>
        </div>
      </section>
    </div>
  );
}
