import React from 'react';
import { motion } from 'motion/react';
import { Building2, Lightbulb, Box, Smartphone, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Engineering & Design',
    items: ['Lighting Design', 'Solar System Design & Installation'],
    icon: <Lightbulb className="w-10 h-10" />
  },
  {
    title: 'Digital & Creative',
    items: ['3D Modelling', '3D Printing'],
    icon: <Box className="w-10 h-10" />
  },
  {
    title: 'Software Development',
    items: ['App Development (Android & iOS)', 'Website Design (UI/UX)'],
    icon: <Smartphone className="w-10 h-10" />
  },
  {
    title: 'Project & Technical Services',
    items: ['Project Management', 'WiFi Heatmap Simulation'],
    icon: <Building2 className="w-10 h-10" />
  }
];

export default function ProfessionalServices() {
  return (
    <div className="bg-[#2a1d15] text-[#f5f2ed] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-[#b38b3f] text-[10px] uppercase tracking-widest font-bold mb-12 hover:text-[#cdaa6d] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <Building2 className="w-12 h-12 text-[#b38b3f]" />
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Professional <span className="text-[#b38b3f]">Services</span>.
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#f5f2ed]/60 max-w-2xl leading-relaxed"
          >
            End-to-end engineering and digital solutions tailored to your unique requirements. From conceptual design and 3D modeling to full-scale project management and software development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="p-12 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#b38b3f]/30 transition-all duration-500"
            >
              <div className="text-[#b38b3f] mb-8">{service.icon}</div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{service.title}</h3>
              <ul className="space-y-4 mb-12">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-base text-[#f5f2ed]/60">
                    <div className="w-2 h-2 rounded-full bg-[#b38b3f]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#b38b3f] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#cdaa6d] transition-all flex items-center gap-2">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="px-8 py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-all">
                  Start Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
