import React from 'react';
import { motion } from 'motion/react';
import { Layout, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Sibu Airport",
    client: "Airport Authority",
    category: "Security & Systems",
    year: "2024",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=1200",
    desc: "Integrated deployment of Security, Public Address, FIDS, and Network infrastructure."
  },
  {
    title: "Air Selangor",
    client: "Smart Water Management",
    category: "IT & Network",
    year: "2023",
    image: "https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?auto=format&fit=crop&q=80&w=1200",
    desc: "Deployment of a statewide Wireless Point-to-Point (PTP) network for utility monitoring."
  },
  {
    title: "KLIA 2",
    client: "International Hub",
    category: "Engineering Services",
    year: "2023",
    image: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?auto=format&fit=crop&q=80&w=1200",
    desc: "Advanced Lighting Control System implementation for energy efficiency and operational scale."
  },
  {
    title: "Sunway Velocity",
    client: "Commercial District",
    category: "IT & Network",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    desc: "GMS, high-density Wi-Fi infrastructure, and surveillance system integration."
  },
  {
    title: "Dyson Manufacturing",
    client: "Industrial Partner",
    category: "Industrial Solutions",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    desc: "Comprehensive Network and Security systems for high-precision manufacturing facility."
  },
  {
    title: "Terengganu Govt",
    client: "State Government",
    category: "IT & Network",
    year: "2022",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
    desc: "Implementation of a Wireless Wide Area Network to connect government municipalities."
  },
  {
    title: "University Malaya",
    client: "Higher Education",
    category: "Security & IT",
    year: "2023",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    desc: "Advanced surveillance systems and robust network infrastructure for campus safety."
  },
  {
    title: "Kedah Govt",
    client: "State Government",
    category: "IT & Network",
    year: "2023",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    desc: "Strategic Wireless Wide Area Network deployment connecting state departments."
  },
  {
    title: "Design Village",
    client: "Retail Hub",
    category: "Multimedia & Network",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
    desc: "Comprehensive AV, PA systems, smart car park management, and site-wide network."
  },
  {
    title: "UniMAP / UMP",
    client: "University Consortium",
    category: "Security & Network",
    year: "2023",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    desc: "Full security implementation and campus-wide high-bandwidth network infrastructure."
  },
  {
    title: "Alamanda Mall",
    client: "Retail Management",
    category: "IT & Network",
    year: "2022",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1200",
    desc: "Site-wide security refresh and high-bandwidth network infrastructure upgrade."
  },
  {
    title: "MRT Putrajaya",
    client: "MRT Corp",
    category: "Engineering Services",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558489580-f149a033c727?auto=format&fit=crop&q=80&w=1200",
    desc: "Full execution of electrical works for IVS2 and ECS3 packages across the Putrajaya line."
  }
];

export default function ProjectReferences() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] font-brand font-black text-gold mb-8"
          >
            Project Portfolio
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-paper uppercase tracking-tighter leading-none mb-12"
          >
            Ideas. <span className="text-gold">Proven.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-paper/60 leading-relaxed"
          >
            Explore our history of successful deliveries across engineering, education, and IoT integration.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5 mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="px-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-paper/30">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-paper mb-4 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-paper/40 mb-2 font-bold">{project.client}</p>
                <p className="text-sm text-paper/60 leading-relaxed mb-8 max-w-md">
                  {project.desc}
                </p>
                <div className="h-px bg-white/5 w-full mb-8" />
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 p-12 md:p-24 bg-white/5 rounded-[4rem] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <h2 className="text-3xl md:text-6xl font-black text-paper uppercase tracking-tighter mb-8">
            Ready to start your <br /><span className="text-gold">Next Breakthrough?</span>
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
            Consult With Our Engineers <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
