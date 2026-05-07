import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  GraduationCap, 
  Cpu, 
  Compass, 
  Layers, 
  Box,
  Layout,
  Lightbulb,
  Zap,
  Globe,
  Smartphone,
  BookOpen,
  Gift,
  Trees,
  Map as MapIcon
} from 'lucide-react';
import { cn } from '../lib/utils';
import BlyndLogo from '../components/BlyndLogo';
import { EducationPreview, EngineeringPreview } from '../components/AnimatedPreviews';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden flex flex-col">
        {/* Navbar Protection Gradient */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

        {/* Animated Panels Background */}
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          {/* Panel 1: Engineering Services */}
          <motion.div 
            whileHover={{ flex: 1.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full flex-1 group overflow-hidden border-r border-white/5 bg-cocoa"
          >
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=60&w=1200" 
              alt="Engineering Services"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-30 group-hover:opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12 z-20 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-2">Engineering Services</span>
              <p className="text-[10px] text-white/60 uppercase tracking-widest font-medium">Design & Solutions</p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full"
              >
                <EngineeringPreview />
              </motion.div>
            </div>
          </motion.div>

          {/* Panel 2: Education */}
          <motion.div 
            whileHover={{ flex: 1.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full flex-1 group overflow-hidden border-r border-white/5 bg-cocoa"
          >
            <div className="absolute inset-0 bg-paper/5 z-10 group-hover:bg-transparent transition-colors duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=60&w=1200" 
              alt="Education"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-30 group-hover:opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12 z-20 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-2">Education</span>
              <p className="text-[10px] text-white/60 uppercase tracking-widest font-medium">Knowledge & Training</p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full"
              >
                <EducationPreview />
              </motion.div>
            </div>
          </motion.div>

          {/* Panel 3: Technical Partnerships */}
          <motion.div 
            whileHover={{ flex: 1.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full flex-1 group overflow-hidden bg-black"
          >
            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-transparent transition-colors duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=60&w=1200" 
              alt="Blyten IoT"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-30 group-hover:opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12 z-20 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Featured Product</span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter">Blyten IoT</h4>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-medium text-white/60">Smart Automation Systems</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-30 flex-1 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl pointer-events-auto"
          >
            <h1 className="text-4xl md:text-8xl font-brand font-black text-paper uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Inventé Network <br />
              <span className="text-gold font-brand font-black">ideas.engineered.</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 1 }} // Set opacity to 1 for initial paint
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-2xl font-medium text-paper/80 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md"
            >
              Empowering innovation through STEM Education, Smart IoT, and Experiential Tourism
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link 
                to="/products"
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gold text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all hover:pr-16"
              >
                <span className="relative z-10">Explore Our Ecosystem</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5f2ed] font-bold">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#b38b3f] to-transparent"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-brand font-black text-[#b38b3f] mb-8">About Inventé Network</h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#f5f2ed] uppercase tracking-tighter leading-none mb-12">
              Empowering the <span className="text-[#b38b3f]">Next Wave</span> of Innovation.
            </h3>
            <p className="text-lg text-[#f5f2ed]/60 leading-relaxed mb-12">
              <span className="font-brand font-black text-[#f5f2ed]">Inventé Network</span> is a future-focused innovation company bridging education, technology, and real-world experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <div className="w-8 h-[1px] bg-[#b38b3f]" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">Innovation-driven</h4>
                <p className="text-[10px] text-[#f5f2ed]/40 uppercase tracking-widest">Engineering the future</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-[1px] bg-[#b38b3f]" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">Technology-enabled</h4>
                <p className="text-[10px] text-[#f5f2ed]/40 uppercase tracking-widest">Smart IoT solutions</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-[1px] bg-[#b38b3f]" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">Experience-focused</h4>
                <p className="text-[10px] text-[#f5f2ed]/40 uppercase tracking-widest">Real-world impact</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                alt="Innovation"
                width={1000}
                height={1000}
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 p-12 bg-[#b38b3f] rounded-3xl hidden md:block">
              <Layers className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-brand font-black text-gold mb-8">01. Engineering Excellence</h2>
              <h3 className="text-4xl md:text-7xl font-black text-paper uppercase tracking-tighter leading-none mb-8">
                Precision <span className="text-gold">Engineered</span> Solutions.
              </h3>
              <p className="text-lg text-paper/60 leading-relaxed">
                From advanced lighting design to complex technical project management, we provide the backbone for modern infrastructure.
              </p>
            </div>
            <Link to="/professional-services" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors mb-4 md:mb-10">
              View Services <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Project Management', desc: 'Technical oversight for complex installations.', icon: <Layers /> },
              { title: 'Digital Design', desc: '3D modeling and additive manufacturing.', icon: <Box /> },
              { title: 'Energy Solutions', desc: 'Solar and smart power infrastructure.', icon: <Zap /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-gold/30 transition-all duration-500"
              >
                <div className="text-gold mb-8">{item.icon}</div>
                <h4 className="text-xl font-bold uppercase tracking-tighter text-paper mb-4">{item.title}</h4>
                <p className="text-[10px] uppercase tracking-widest text-paper/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 px-6 bg-cocoa overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-brand font-black text-gold mb-8">02. Education & Consultancy</h2>
              <h3 className="text-4xl md:text-7xl font-black text-paper uppercase tracking-tighter leading-none mb-12">
                Knowledge <br /> as a <span className="text-gold">Catalyst</span>.
              </h3>
              <p className="text-lg text-paper/70 leading-relaxed mb-12">
                We don't just build technology; we build the people who drive it. Our educational programs bridge the gap between classroom theory and industry reality.
              </p>
              <div className="space-y-6">
                {['Innovation Programs', 'Technical Training', 'Future Skills Workshops'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gold group-hover:bg-white" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/education" className="inline-block mt-16 px-12 py-6 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
                Explore Programs
              </Link>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                  alt="Education"
                  className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold rounded-full flex items-center justify-center p-8 text-center rotate-12">
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Empowering Future Innovants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Brands Section */}
      <section className="py-32 px-6 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-brand font-black text-gold mb-8">03. Proprietary Brands</h2>
            <h3 className="text-4xl md:text-7xl font-black text-paper uppercase tracking-tighter leading-none">
              The <span className="text-gold">Innovation</span> Core.
            </h3>
          </div>

          <div className="grid md:grid-cols-1 max-w-4xl mx-auto">
            {/* Blyten Block */}
            <a href="https://www.blyten.com" target="_blank" rel="noopener noreferrer" className="group relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 p-12 flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Blyten"
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Cpu className="text-gold" />
                  </div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter">Blyten IoT</h4>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-paper/40 mb-6 font-medium max-w-md">Our authorized IoT solutions for smart infrastructure and automated environments.</p>
                <div className="flex gap-6 mb-8">
                  <div>
                    <p className="text-lg font-black text-gold">28°C</p>
                    <p className="text-[8px] uppercase tracking-widest text-paper/30">Temp</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <p className="text-lg font-black text-gold">UV 4</p>
                    <p className="text-[8px] uppercase tracking-widest text-paper/30">UV Index</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <p className="text-lg font-black text-gold">12%</p>
                    <p className="text-[8px] uppercase tracking-widest text-paper/30">Rain</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold group-hover:text-white transition-colors">Deploy Smart Solutions →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Partnership Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-brand font-black text-gold/50 mb-16">Other Strategic Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Schneider', 'Shihlin', 'Honeywell', 'Aruba', 'TP-Link', 'Dell'].map((brand) => (
              <span key={brand} className="text-xl md:text-3xl font-black uppercase tracking-tighter text-paper">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Ecosystem Overview */}
      <section className="py-32 px-6 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-8">Integrated Impact</h2>
            <h3 className="text-4xl md:text-6xl font-black text-paper uppercase tracking-tighter leading-none">
              A Seamless <span className="text-gold">Ecosystem</span>.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Main Pillar 1: Engineering & Blyten */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 p-12 bg-white/5 border border-white/10 rounded-[3rem] group hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-paper">Engineering & Blyten</h4>
                  <p className="text-[10px] uppercase tracking-widest text-paper/40">Smart IoT Infrastructure</p>
                </div>
              </div>
              <div className="w-full">
                <EngineeringPreview />
              </div>
            </motion.div>

            {/* Main Pillar 2: Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 p-12 bg-white/5 border border-white/10 rounded-[3rem] group hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-paper">Education</h4>
                  <p className="text-[10px] uppercase tracking-widest text-paper/40">Consultancy & Training</p>
                </div>
              </div>
              <div className="w-full">
                <EducationPreview />
              </div>
            </motion.div>

            {/* Support Pillar 1: Impact Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-gold/30 transition-all duration-500 text-center flex flex-col items-center justify-center"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                <Layout className="w-10 h-10" />
              </div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-paper mb-2">Impact Portfolio</h4>
              <p className="text-[10px] uppercase tracking-widest text-paper/40">Proven Deliveries</p>
            </motion.div>

            {/* Support Pillar 2: Technical Brands */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-gold/30 transition-all duration-500 text-center flex flex-col items-center justify-center"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-10 h-10" />
              </div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-paper mb-2">Technical Brands</h4>
              <p className="text-[10px] uppercase tracking-widest text-paper/40">Global Partnerships</p>
            </motion.div>

            {/* Support Pillar 3: Technical Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-gold/30 transition-all duration-500 text-center flex flex-col items-center justify-center"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-paper mb-2">Technical Leadership</h4>
              <p className="text-[10px] uppercase tracking-widest text-paper/40">Strategic Frontier</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STEM Mission Section - THE FINAL FOCUS */}
      <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-brand font-black text-gold mb-12">Our Mission</h2>
            <h3 className="text-4xl md:text-8xl font-black text-paper uppercase tracking-tighter leading-none mb-12">
              ideas.<br /><span className="text-gold">engineered.</span>
            </h3>
            <p className="text-xl text-paper/60 leading-relaxed mb-16 max-w-2xl mx-auto">
              To deliver advanced technical solutions that redefine reliability and connectivity across industrial sectors, fostering an ecosystem of strategic technical leadership.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-black text-gold">10k+</p>
                <p className="text-[8px] uppercase tracking-widest text-paper/40">Students Reached</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-black text-gold">50+</p>
                <p className="text-[8px] uppercase tracking-widest text-paper/40">Innovations Deployed</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-black text-gold">∞ </p>
                <p className="text-[8px] uppercase tracking-widest text-paper/40">Potential Unlocked</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#b38b3f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-12">
            Ready to <span className="text-black">Engineer</span> Your Ideas?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="px-12 py-6 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all"
            >
              Get in Touch
            </Link>
            <Link 
              to="/products"
              className="px-12 py-6 bg-transparent border-2 border-black text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
