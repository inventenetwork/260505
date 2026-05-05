import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Lightbulb, 
  Users, 
  ArrowRight, 
  Rocket, 
  Brain, 
  Briefcase, 
  Wrench,
  Calendar,
  Globe
} from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from '../components/Logo';

export default function Education() {
  const programs = [
    {
      title: 'AI & Future Skills',
      desc: 'Master the tools of tomorrow with our comprehensive AI and machine learning courses.',
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'STEM & Space Science',
      desc: 'Explore the final frontier through hands-on satellite and aerospace engineering programs.',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Entrepreneurship & Innovation',
      desc: 'Learn how to turn ideas into scalable businesses with our startup incubator programs.',
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: 'Technical Skills',
      desc: 'Hands-on training in robotics, electronics, and advanced manufacturing.',
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  const events = [
    {
      title: 'Space Science Weekend',
      date: 'OCT 12-14, 2026',
      location: 'UNIMAS Campus',
      img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'AI Innovation Summit',
      date: 'NOV 05, 2026',
      location: 'Swinburne University',
      img: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'STEM School Tour',
      date: 'DEC 01-15, 2026',
      location: 'International Schools',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-[#3d2b1f] text-[#f5f2ed] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3d2b1f]/50 to-[#3d2b1f]" />
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <Logo size="xl" className="items-center mb-12" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#b38b3f] text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-[#cdaa6d] transition-all"
            >
              Join a Program <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Programs & Courses</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-none mb-12">
            Architecting <span className="text-[#b38b3f]">Knowledge</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-[#b38b3f]/30 transition-all duration-500 group"
            >
              <div className="text-[#b38b3f] mb-8 group-hover:scale-110 transition-transform duration-500">
                {prog.icon}
              </div>
              <h4 className="text-lg font-serif font-bold mb-4">{prog.title}</h4>
              <p className="text-xs text-[#f5f2ed]/50 leading-relaxed">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-8">Upcoming Events</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-none">
                Learning in <span className="text-[#b38b3f]">Action</span>.
              </h3>
            </div>
            <button className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40 hover:text-[#b38b3f] transition-colors">
              View All Events →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10"
              >
                <img 
                  src={event.img} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] mb-2">
                    <Calendar className="w-3 h-3" /> {event.date}
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50">
                    <Globe className="w-3 h-3" /> {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-16">Our Partners & Institutions</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['UNIMAS', 'Swinburne', 'UiTM', 'International Schools'].map((partner) => (
              <span key={partner} className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#f5f2ed]">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-[#b38b3f]">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white leading-none mb-12">
            Start Your <span className="text-black">Innovation Journey</span> Today.
          </h3>
          <button className="px-12 py-6 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
