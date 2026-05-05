import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Smartphone, 
  Globe, 
  ArrowRight, 
  Database, 
  Sun, 
  Activity, 
  BarChart3,
  ShieldCheck,
  Hotel,
  Lightbulb,
  Settings,
  Layers,
  Wind,
  Key,
  Box,
  Sprout,
  Home,
  Network,
  Building2
} from 'lucide-react';
import { cn } from '../lib/utils';
import BlytenAsterisk from '../components/BlytenAsterisk';

// Blyten Smart Hotel Series Page
export default function Blyten() {
  const benefits = [
    {
      title: 'Enhanced Guest Experience',
      desc: 'Provides unparalleled atmospheric customization, directly impacting guest comfort and satisfaction.',
      icon: <Hotel className="w-8 h-8" />
    },
    {
      title: 'Improved Guest Well-being',
      desc: 'Ultra-deep dimming promotes better sleep and offers diverse mood lighting scenarios.',
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: 'Significant Energy Savings',
      desc: 'Precision light management dramatically reduces electricity consumption, leading to substantial operational cost reductions.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Tangible ROI',
      desc: 'A clear return on investment through energy efficiency and potential for higher guest satisfaction scores.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Future-Proof Technology',
      desc: 'Core ultra-deep dimming capabilities set a new standard for in-room control.',
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  const technicalHighlights = [
    { id: '01', title: 'Automotive-Grade Processor', desc: 'Ensures unparalleled reliability, rapid performance, and superior anti-interference.' },
    { id: '02', title: 'Proprietary Dual-Channel Wiring', desc: 'Industry-first innovation using a single network cable for two independent signals.' },
    { id: '03', title: 'Built-in System Redundancy', desc: 'Dual-circuit design with automatic backup takeover guarantees continuous service.' },
    { id: '04', title: 'Intelligent Fault Recovery', desc: 'Smart system management instantly activates backups for ultra-fast response.' },
    { id: '05', title: 'Intuitive Ultra-Deep Dimming Panel', desc: 'Elegant touch control with dynamic lighting feedback and full customization.' },
    { id: '06', title: 'Effortless User Interface', desc: 'True-color display and backlit buttons provide intuitive, efficient guest interaction.' },
    { id: '07', title: 'Advanced GBUS Architecture', desc: 'Ensures robust, high-speed, and reliable communication across all hotel room devices.' },
    { id: '08', title: 'Secure, High-Current Wiring', desc: 'Purpose-built terminals with protective covers prevent shorts and handle high loads safely.' },
    { id: '09', title: 'Passive Cooling System', desc: 'Optimized convective heat dissipation guarantees stable, maintenance-free performance.' }
  ];

  const otherSolutions = [
    {
      title: 'Smart Farming',
      desc: 'Precision agriculture powered by IoT sensors for real-time soil, crop, and livestock monitoring to maximize yield.',
      icon: <Sprout className="w-8 h-8" />,
      to: '/smart-farming'
    },
    {
      title: 'Smart Home',
      desc: 'Seamless home automation systems integrating security, climate, and entertainment for ultimate living comfort.',
      icon: <Home className="w-8 h-8" />,
      to: '/smart-home'
    },
    {
      title: 'Smart IoT',
      desc: 'Custom industrial connectivity solutions and edge computing platforms for data-driven operational excellence.',
      icon: <Network className="w-8 h-8" />,
      to: '/smart-iot'
    },
    {
      title: 'Smart Office',
      desc: 'Intelligent workspace management with occupancy tracking and automated HVAC/lighting for sustainable productivity.',
      icon: <Building2 className="w-8 h-8" />,
      to: '/smart-office'
    }
  ];

  return (
    <div className="bg-[#2a1d15] text-[#f5f2ed] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2a1d15]/40 to-[#2a1d15] z-10" />
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2 }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"
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
              <h1 className="font-brand text-6xl md:text-9xl font-black text-[#b38b3f] tracking-tighter uppercase leading-none">
                BLY<span className="text-[#f5f2ed]">TEN</span>
              </h1>
              <p className="text-[#f5f2ed]/60 font-brand uppercase tracking-[0.8em] text-xs md:text-sm font-black mt-4">
                Smart. Simplified.
              </p>
            </div>
            
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-[#f5f2ed] mb-12 leading-tight">
              Smart Hotel Series
            </h2>
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-[#b38b3f] mb-12">
              The Next Generation Premium Ambiance for Smart Hotels
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#b38b3f] text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-[#cdaa6d] transition-all"
            >
              Request Presentation <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">About Us</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
              The Future of <span className="text-[#b38b3f]">Hospitality</span>.
            </h3>
            <p className="text-lg text-[#f5f2ed]/60 leading-relaxed mb-12">
              Introducing the BLYTEN™ Hotel Ultra-Deep Dimming and Guest Room Control System. We are crafting the next generation of premium, intelligent guest rooms with our whole-house dimming and control solution.
            </p>
            <p className="text-sm text-[#f5f2ed]/40 leading-relaxed italic border-l-2 border-[#b38b3f] pl-6">
              "Our system is designed to seamlessly manage lighting and a full suite of in-room functions, creating a luxurious and immersive atmosphere."
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1200" 
              alt="Smart Hotel Room"
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d15] via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-white/5 rounded-3xl border border-white/10">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Our Mission</h4>
            <p className="text-lg font-bold uppercase tracking-tight mb-6">Advanced Technical Solutions</p>
            <p className="text-xs text-[#f5f2ed]/50 leading-relaxed">
              To deliver advanced technical solutions that redefine reliability and connectivity across industrial sectors.
            </p>
          </div>
          <div className="p-12 bg-white/5 rounded-3xl border border-white/10">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Our Vision</h4>
            <p className="text-lg font-bold uppercase tracking-tight mb-6">Strategic Technical Leadership</p>
            <p className="text-xs text-[#f5f2ed]/50 leading-relaxed">
              To be Malaysia's leading partner for high-bandwidth communication and integrated smart systems.
            </p>
          </div>
        </div>
      </section>

      {/* Product Intro: GTS-RCU */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">The Core Intelligence</h2>
          <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
            Introducing <span className="text-[#b38b3f]">GTS-RCU</span>.
          </h3>
          <p className="text-lg text-[#f5f2ed]/60 max-w-3xl mx-auto">
            The Room Control Unit (RCU) is the central intelligence behind our next-generation whole-room ambiance dimming system, setting new benchmarks in hospitality technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="text-center p-8">
            <div className="text-[#b38b3f] mb-6 flex justify-center"><Settings className="w-12 h-12" /></div>
            <h5 className="text-sm font-bold uppercase tracking-widest mb-4">Exceptional Performance</h5>
            <p className="text-[10px] text-[#f5f2ed]/40 uppercase tracking-widest leading-loose">Engineered for robust and reliable operation across all functions.</p>
          </div>
          <div className="text-center p-8">
            <div className="text-[#b38b3f] mb-6 flex justify-center"><Layers className="w-12 h-12" /></div>
            <h5 className="text-sm font-bold uppercase tracking-widest mb-4">Premium Materials</h5>
            <p className="text-[10px] text-[#f5f2ed]/40 uppercase tracking-widest leading-loose">Constructed with luxurious materials and exquisite attention to detail.</p>
          </div>
          <div className="text-center p-8">
            <div className="text-[#b38b3f] mb-6 flex justify-center"><Smartphone className="w-12 h-12" /></div>
            <h5 className="text-sm font-bold uppercase tracking-widest mb-4">Pinnacle of Design</h5>
            <p className="text-[10px] text-[#f5f2ed]/40 uppercase tracking-widest leading-loose">A refined appearance that becomes an integral part of high-end interiors.</p>
          </div>
        </div>

        {/* DeepDim Highlight */}
        <div className="relative p-12 md:p-24 bg-[#b38b3f] rounded-[3rem] overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
                0.01% Ultra <br />DeepDim™
              </h4>
              <p className="text-white/80 text-lg font-medium leading-relaxed">
                Our proprietary algorithm delivers industry-leading dimming precision, creating the ultimate ambiance for high-end hotel room automation.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full border-4 border-white/30 flex items-center justify-center animate-pulse">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white">Algorithm Powered</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-32 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Value Proposition</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Benefits for <span className="text-[#b38b3f]">Hoteliers</span>.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-[#b38b3f]/30 transition-all duration-500 group"
              >
                <div className="text-[#b38b3f] mb-8 group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight mb-4">{benefit.title}</h4>
                <p className="text-xs text-[#f5f2ed]/50 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights List */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8 sticky top-32">Technical Highlights</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter leading-none sticky top-48">
              Engineering <br /><span className="text-[#b38b3f]">Excellence</span>.
            </h3>
          </div>
          <div className="md:w-2/3 grid gap-12">
            {technicalHighlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <span className="text-2xl font-black text-[#b38b3f]/20 group-hover:text-[#b38b3f] transition-colors">{item.id}</span>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                  <p className="text-xs text-[#f5f2ed]/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Series Showcase */}
      <section className="py-32 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* G2 Series */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-12 bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden"
            >
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">G2 Series</h4>
              <h5 className="text-3xl font-black uppercase tracking-tighter mb-8">Ultra DeepDim™ Panel</h5>
              <p className="text-xs text-[#f5f2ed]/50 leading-relaxed mb-12">
                Integrated control panel for a superior luxury experience. Features Chroma Dynamic Indicator Lights, Precision Touch Control, and Anti-Fingerprint Tempered Glass.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-black/40 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">Brightness Control</span>
                <span className="px-4 py-2 bg-black/40 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">Curtain Control</span>
                <span className="px-4 py-2 bg-black/40 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">Scene Selection</span>
              </div>
            </motion.div>

            {/* G1 Series */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-12 bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden"
            >
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">G1 Series</h4>
              <h5 className="text-3xl font-black uppercase tracking-tighter mb-8">Washroom Solution</h5>
              <p className="text-xs text-[#f5f2ed]/50 leading-relaxed mb-12">
                Transform washroom environments with advanced ventilation control and ultra-deep dimming for a spa-like, relaxing glow.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-black/40 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] flex items-center gap-2"><Wind className="w-3 h-3" /> Ventilation</span>
                <span className="px-4 py-2 bg-black/40 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] flex items-center gap-2"><Lightbulb className="w-3 h-3" /> Spa Mode</span>
              </div>
            </motion.div>

            {/* Keycard & Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 group relative p-12 bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="md:w-1/2">
                <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Keycard & Status</h4>
                <h5 className="text-3xl font-black uppercase tracking-tighter mb-8">Streamlined Interaction</h5>
                <p className="text-xs text-[#f5f2ed]/50 leading-relaxed mb-8">
                  Our intuitive keycard system provides effortless room power-up while simultaneously activating energy-saving modes when unoccupied. The exterior door panel clearly conveys guest preferences.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[#b38b3f]"><Key className="w-5 h-5" /> <span className="text-[10px] font-bold uppercase tracking-widest">Smart Entry</span></div>
                  <div className="flex items-center gap-2 text-[#b38b3f]"><Box className="w-5 h-5" /> <span className="text-[10px] font-bold uppercase tracking-widest">Energy Saving</span></div>
                </div>
              </div>
              <div className="md:w-1/2 p-12 bg-black/40 rounded-3xl border border-white/5 text-center">
                <span className="text-4xl font-black text-[#b38b3f]">911</span>
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#f5f2ed]/40 mt-4">Room Status Active</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Industry Ecosystems */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Beyond Hospitality</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Multi-Industry <span className="text-[#b38b3f]">Ecosystems</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherSolutions.map((sol, i) => (
            <Link key={i} to={sol.to}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-[#b38b3f]/30 transition-all duration-500 group h-full"
              >
                <div className="text-[#b38b3f] mb-8 group-hover:scale-110 transition-transform duration-500">
                  {sol.icon}
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight mb-4">{sol.title}</h4>
                <p className="text-xs text-[#f5f2ed]/50 leading-relaxed">{sol.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            Elevate Your <span className="text-[#b38b3f]">Hospitality</span> Standard.
          </h3>
          <button className="px-12 py-6 bg-[#b38b3f] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#cdaa6d] transition-all">
            Contact for Project Inquiries
          </button>
        </div>
      </section>
    </div>
  );
}
