import React from 'react';
import { motion } from 'motion/react';
import { Layers, Target, Eye, Users, Award, Globe } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Uncompromising Quality', icon: <Award className="w-6 h-6" />, desc: 'Setting the gold standard in every project we undertake.' },
    { title: 'Relentless Innovation', icon: <Target className="w-6 h-6" />, desc: 'Continuously pushing boundaries to redefine technical possibilities.' },
    { title: 'Technical Leadership', icon: <Layers className="w-6 h-6" />, desc: 'Providing strategic technical leadership at every stage of the project life cycle.' },
    { title: 'Absolute Connectivity', icon: <Globe className="w-6 h-6" />, desc: 'Redefining the standards of industrial communication solutions.' }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-black text-[#f5f2ed] uppercase tracking-tighter leading-none mb-8">
            Ideas. <span className="text-[#b38b3f]">Engineered</span>.
          </h1>
          <p className="text-lg text-[#f5f2ed]/60 max-w-3xl leading-relaxed">
            <span className="font-brand font-black text-[#f5f2ed]">Inventé Network</span> is a parent brand dedicated to the pursuit of innovation. We operate at the intersection of technology, education, and experience, building a future where ideas are not just imagined, but engineered for impact.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 border border-white/10 rounded-3xl"
          >
            <div className="text-[#b38b3f] mb-8"><Target className="w-10 h-10" /></div>
            <h3 className="text-2xl font-bold text-[#f5f2ed] mb-6 uppercase tracking-tight">Our Mission</h3>
            <p className="text-[#f5f2ed]/60 leading-relaxed">
              To deliver advanced technical solutions that redefine reliability and connectivity across industrial sectors.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 border border-white/10 rounded-3xl"
          >
            <div className="text-[#b38b3f] mb-8"><Eye className="w-10 h-10" /></div>
            <h3 className="text-2xl font-bold text-[#f5f2ed] mb-6 uppercase tracking-tight">Our Vision</h3>
            <p className="text-[#f5f2ed]/60 leading-relaxed">
              To be Malaysia's leading partner for high-bandwidth communication and integrated smart systems.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Our Core Values</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              The <span className="text-[#b38b3f]">Principles</span> That Drive Us.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#b38b3f]/30 transition-all duration-500">
                <div className="text-[#b38b3f] mb-6">{val.icon}</div>
                <h4 className="text-lg font-bold text-[#f5f2ed] mb-4 uppercase tracking-tight">{val.title}</h4>
                <p className="text-xs text-[#f5f2ed]/50 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team / Culture Placeholder */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Team"
            width={2000}
            height={1125}
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter text-center px-6">
              Driven by <span className="text-[#b38b3f]">Passion</span>.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
