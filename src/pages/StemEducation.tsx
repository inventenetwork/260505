import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Brain, Globe, ArrowLeft, Star, Telescope, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StemEducation() {
  return (
    <div className="bg-[#3d2b1f] text-[#f5f2ed] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/education" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] hover:text-[#f5f2ed] transition-colors mb-12">
          <ArrowLeft className="w-3 h-3" /> Back to Education
        </Link>
        
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8"
          >
            STEM <span className="text-[#b38b3f]">Education</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#f5f2ed]/60 max-w-2xl leading-relaxed"
          >
            Preparing the next generation of innovators through hands-on science, technology, engineering, and mathematics programs.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { 
              title: "Space Science", 
              desc: "Satellite construction, rocketry basics, and astronomy workshops.",
              icon: <Rocket className="w-10 h-10 text-[#b38b3f]" />
            },
            { 
              title: "Robotics & AI", 
              desc: "From basic circuits to advanced machine learning models.",
              icon: <Brain className="w-10 h-10 text-[#b38b3f]" />
            },
            { 
              title: "Global Collaboration", 
              desc: "Connecting local students with international space agencies and tech firms.",
              icon: <Globe className="w-10 h-10 text-[#b38b3f]" />
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-[#f5f2ed]/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="bg-black/20 rounded-[3rem] p-12 md:p-20 border border-white/5">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 italic">"We don't just teach technology; we teach the courage to use it to solve global problems."</h2>
              <div className="flex items-center gap-4">
                {[Star, Telescope, Zap].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-[#b38b3f]/10 flex items-center justify-center text-[#b38b3f]">
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#b38b3f] mb-6">Program Highlights</h4>
              <ul className="space-y-4">
                {['NASA-Inspired Curriculum', 'International STEM Competitions', 'Hands-on Labs & Prototyping', 'Mentorship from Industry Leaders'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#f5f2ed]/70">
                    <div className="w-1.5 h-1.5 bg-[#b38b3f] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
