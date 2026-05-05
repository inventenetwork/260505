import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Lightbulb, ArrowLeft, CheckCircle2, Layout, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EducateTheEducator() {
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
            Educate the <span className="text-[#b38b3f]">Educator</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#f5f2ed]/60 max-w-2xl leading-relaxed"
          >
            Empowering teachers and trainers with modern pedagogical tools and technological literacy to lead the classroom of the future.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="p-10 bg-white/5 border border-white/10 rounded-3xl group hover:border-[#b38b3f]/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Pedagogical Innovation</h3>
              <p className="text-sm text-[#f5f2ed]/50 leading-relaxed">
                Workshops focused on project-based learning, flipped classrooms, and gamified education strategies.
              </p>
            </div>

            <div className="p-10 bg-white/5 border border-white/10 rounded-3xl group hover:border-[#b38b3f]/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Tech Integration</h3>
              <p className="text-sm text-[#f5f2ed]/50 leading-relaxed">
                Training on using AI, AR/VR, and collaborative digital platforms to enhance student engagement.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 p-12 rounded-[3rem] border border-white/5"
          >
            <h3 className="text-2xl font-serif font-bold mb-8">Core Modules</h3>
            <div className="space-y-6">
              {[
                { title: 'Digital Literacy for Teachers', desc: 'Navigating modern EdTech ecosystems.' },
                { title: 'Curriculum Design', desc: 'Crafting future-proof lessons.' },
                { title: 'AI in the Classroom', desc: 'Leveraging Gemini and other tools responsibly.' },
                { title: 'Student-Centric Delivery', desc: 'Moving from lecturers to facilitators.' },
                { title: 'STEM Program Management', desc: 'Running innovation labs effectively.' }
              ].map((module, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-[#b38b3f] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#f5f2ed] mb-1">{module.title}</h4>
                    <p className="text-[11px] text-[#f5f2ed]/40">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <section className="py-20 text-center">
          <div className="flex justify-center gap-12 mb-12">
            {[Layout, BookOpen, Lightbulb].map((Icon, i) => (
              <div key={i} className="text-[#b38b3f]/20">
                <Icon className="w-16 h-16" />
              </div>
            ))}
          </div>
          <h4 className="text-2xl md:text-4xl font-serif font-bold text-[#f5f2ed]/80 max-w-4xl mx-auto">
            Inspiring the people who inspire the next generation.
          </h4>
        </section>
      </div>
    </div>
  );
}
