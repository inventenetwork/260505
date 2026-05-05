import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Cpu, Settings, ArrowLeft, Terminal, Shield, Network, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechnicalCourses() {
  const courses = [
    {
      title: 'Robotics Engineering',
      desc: 'Build and program autonomous systems from scratch.',
      icon: <Terminal className="w-8 h-8" />,
      level: 'Advanced'
    },
    {
      title: 'Embedded Systems',
      desc: 'Mastering microcontrollers and IoT hardware interfaces.',
      icon: <Cpu className="w-8 h-8" />,
      level: 'Intermediate'
    },
    {
      title: 'Cybersecurity Fundamentals',
      desc: 'Securing critical infrastructure and IoT networks.',
      icon: <Shield className="w-8 h-8" />,
      level: 'Beginner'
    },
    {
      title: 'Network Architecture',
      desc: 'Design and deployment of high-bandwidth industrial networks.',
      icon: <Network className="w-8 h-8" />,
      level: 'Professional'
    }
  ];

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
            Technical <span className="text-[#b38b3f]">Courses</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#f5f2ed]/60 max-w-2xl leading-relaxed"
          >
            Professional-grade training modules designed to bridge the gap between academic theory and industrial application.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-[#b38b3f]/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  {course.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b38b3f] px-3 py-1 rounded-full border border-[#b38b3f]/30">
                  {course.level}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{course.title}</h3>
              <p className="text-sm text-[#f5f2ed]/50 leading-relaxed max-w-sm">
                {course.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <section className="bg-gold p-12 md:p-20 rounded-[3rem] text-black">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Need custom workforce training?</h2>
              <p className="text-lg opacity-80 leading-relaxed mb-10 max-w-xl">
                We design bespoke technical programs tailored to your organization's specific technology stack and operational goals.
              </p>
              <Link 
                to="/contact"
                className="px-10 py-4 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-white hover:text-black transition-all inline-block"
              >
                Inquire About Workshops
              </Link>
            </div>
            <div className="w-full md:w-1/3 flex justify-center bg-black/5 p-12 rounded-[2.5rem]">
              <Settings className="w-32 h-32 animate-spin-slow opacity-20" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
