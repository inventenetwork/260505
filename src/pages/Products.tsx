import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Compass, 
  GraduationCap, 
  Zap, 
  Building2, 
  ShieldCheck, 
  Network, 
  Monitor, 
  ExternalLink,
  ArrowRight,
  Lightbulb,
  Sun,
  Box,
  Printer,
  Smartphone,
  Globe,
  Layout,
  Wifi,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import BlyndLogo from '../components/BlyndLogo';
import { EngineeringPreview } from '../components/AnimatedPreviews';

type FilterType = 'All' | 'Core Pillars' | 'Products' | 'Services';

interface Brand {
  name: string;
  description: string;
  logoUrl?: string;
  products?: string[];
  link: string;
}

interface Service {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const corePillars = [
  {
    id: 'blyten',
    title: 'Blyten',
    tagline: 'Smart. Simplified.',
    description: 'Smart IoT solutions, automation systems, and engineering technologies for modern infrastructure.',
    cta: 'Explore Blyten',
    link: '/blyten',
    icon: <Cpu className="w-12 h-12" />,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'blynd',
    title: 'Blynd',
    tagline: 'Travel.Unscripted',
    description: 'Curated blindbox travel experiences across Malaysia for unique and premium journeys.',
    cta: 'Discover Blynd',
    link: '/blynd',
    icon: <BlyndLogo size="sm" showTagline={false} />,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'education',
    title: 'STEM Education',
    tagline: 'ideas.engineered',
    description: 'Future-focused learning programs, STEM education, and innovation workshops.',
    cta: 'Explore STEM Education',
    link: '/education',
    icon: <GraduationCap className="w-12 h-12" />,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
  }
];

const engineeringProducts: Brand[] = [
  {
    name: 'Shihlin Electric',
    description: 'Reliable power infrastructure solutions for industrial and commercial applications.',
    products: ['EV Chargers', 'Switchgears'],
    link: 'https://en.seec.com.tw/'
  },
  {
    name: 'Schneider Electric',
    description: 'Advanced building management systems for energy efficiency and automation.',
    products: ['BMS Systems', 'Smart Panels'],
    link: 'https://www.se.com/'
  },
  {
    name: 'Honeywell',
    description: 'Smart facility control and automation for high-performance buildings.',
    products: ['BMS Controllers', 'Sensors'],
    link: 'https://www.honeywell.com/'
  }
];

const itProducts: Brand[] = [
  {
    name: 'Cambium Networks',
    description: 'Enterprise-grade wireless fabric and cloud-managed networking solutions.',
    products: ['Wireless Fabric', 'Cloud Management'],
    link: 'https://www.cambiumnetworks.com/'
  },
  {
    name: 'EnGenius',
    description: 'Cloud-managed networking solutions for business and hospitality.',
    products: ['Cloud Switches', 'Access Points'],
    link: 'https://www.engeniustech.com/'
  },
  {
    name: 'TP-Link',
    description: 'Professional networking and surveillance infrastructure.',
    products: ['Omada & Vigi', 'Switches', 'Wireless APs'],
    link: 'https://www.tp-link.com/'
  },
  {
    name: 'ASUS',
    description: 'Seamless whole-home and office wireless coverage.',
    products: ['Routers', 'Mesh Systems'],
    link: 'https://www.asus.com/'
  },
  {
    name: 'Dell',
    description: 'High-end workstations and enterprise computing.',
    products: ['Laptops', 'PCs', 'Servers'],
    link: 'https://www.dell.com/'
  },
  {
    name: 'Lenovo',
    description: 'Reliable business computing for productivity and security.',
    products: ['ThinkPad Series', 'ThinkCentre'],
    link: 'https://www.lenovo.com/'
  },
  {
    name: 'ASUSTOR',
    description: 'Innovative network attached storage (NAS) solutions for home and business.',
    products: ['NAS Systems', 'Storage Solutions'],
    link: 'https://www.asustor.com/'
  },
  {
    name: 'Synology',
    description: 'High-capacity storage and surveillance video management.',
    products: ['NAS Systems', 'Surveillance Station'],
    link: 'https://www.synology.com/'
  },
  {
    name: 'UGreen',
    description: 'Premium hubs, adapters, and cables for modern workspaces.',
    products: ['USB-C Hubs', 'Cables', 'Adapters'],
    link: 'https://www.ugreen.com/'
  },
  {
    name: 'Custom PC Systems',
    description: 'Tailor-made high-performance PC systems for specific needs.',
    products: ['Workstations', 'Gaming PCs'],
    link: '/contact'
  },
  {
    name: '🔌 Cables & Accessories',
    description: 'Essential networking components and structural cabling solutions.',
    products: ['Cat6/6A/7', 'Fiber Optic', 'Patch Panels', 'Racks & Cabinets', 'PDUs', 'Hubs'],
    link: '/contact'
  },
  {
    name: 'Specialized Industry Products',
    description: 'High-security and explosion-proof solutions for hazardous environments.',
    products: ["Ex'D", "Ex'E", 'Explosion Proof', 'Cybersecurity Systems'],
    link: '/contact'
  }
];

const services: Service[] = [
  {
    title: 'Project & Technical Services',
    items: ['Project Management', 'WiFi Heatmap Simulation'],
    icon: <Building2 className="w-10 h-10" />
  },
  {
    title: 'Engineering & Design',
    items: ['Lighting Design', 'Solar System Design & Installation'],
    icon: <Lightbulb className="w-10 h-10" />
  },
  {
    title: 'Software & Development',
    items: ['App Development (Android & iOS)', 'Website Design (UI/UX)'],
    icon: <Smartphone className="w-10 h-10" />
  },
  {
    title: 'Digital & Creative',
    items: ['3D Modelling', '3D Printing'],
    icon: <Box className="w-10 h-10" />
  }
];

export default function Products() {
  const [filter, setFilter] = useState<FilterType>('All');

  const filterButtons: FilterType[] = ['All', 'Core Pillars', 'Products', 'Services'];

  return (
    <div className="bg-[#2a1d15] text-[#f5f2ed] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8"
          >
            Products & <span className="text-[#b38b3f]">Services</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#f5f2ed]/60 max-w-2xl leading-relaxed"
          >
            We provide end-to-end engineering and digital solutions—from concept design to execution. Explore our diverse ecosystem of proprietary brands and professional services.
          </motion.p>
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap gap-4 mb-24">
          {filterButtons.map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={cn(
                "px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all duration-300",
                filter === btn 
                  ? "bg-[#b38b3f] border-[#b38b3f] text-white shadow-lg shadow-[#b38b3f]/20" 
                  : "bg-white/5 border-white/10 text-[#f5f2ed]/60 hover:border-[#b38b3f]/50"
              )}
            >
              {btn}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Section 1: Blyten IoT (FEATURED RESELLER) */}
            {(filter === 'All' || filter === 'Products') && (
              <div id="blyten" className="mb-32">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-1 bg-white/10" />
                  <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">01. Blyten Smart IoT Solutions</h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-8">
                        <Cpu className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-paper">Advanced <span className="text-gold">Automation</span> Units</h3>
                      <p className="text-lg text-paper/60 mb-8 leading-relaxed">Inventé Network is the official partner for Blyten Infrastructure. We provide the hardware and integration services for smart farming, home automation, and industrial IoT.</p>
                      <Link to="/blyten" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors">
                        View Blyten Specs <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="bg-black/40 rounded-[2rem] p-8 border border-white/5">
                      <EngineeringPreview />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Section 2: Professional Services & Engineering */}
            {(filter === 'All' || filter === 'Services') && (
              <div id="professional-services" className="mb-32">
                <div className="flex items-center justify-between mb-12">
                  <div className="h-px flex-1 bg-white/10" />
                  <h2 className="px-4 text-[10px] uppercase tracking-[0.5em] font-bold text-paper/40">02. Professional Services</h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service) => (
                    <motion.div
                      key={service.title}
                      whileHover={{ scale: 1.02 }}
                      className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-gold/30 transition-all duration-500"
                    >
                      <div className="text-gold mb-6">{service.icon}</div>
                      <h4 className="text-xl font-black uppercase tracking-tight mb-4">{service.title}</h4>
                      <p className="text-xs text-paper/50 mb-6">{service.items.join(' • ')}</p>
                      <Link to="/contact" className="text-[10px] font-bold uppercase tracking-widest text-gold hover:text-white">Get Started →</Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Education (PRIORITY 3) */}
            {(filter === 'All' || filter === 'Core Pillars') && (
              <div id="education-pillar" className="mb-32">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-1 bg-white/10" />
                  <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f]">03. Education & STEM</h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <Link to="/education" className="group">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="relative h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                      alt="STEM Education"
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d15] via-[#2a1d15]/40 to-transparent" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end max-w-2xl">
                      <div className="text-[#b38b3f] mb-6"><GraduationCap className="w-12 h-12" /></div>
                      <h3 className="text-5xl font-black uppercase tracking-tighter mb-4">Educational Transformation</h3>
                      <p className="text-[#b38b3f] text-xs font-bold uppercase tracking-widest mb-6">ideas.engineered</p>
                      <p className="text-lg text-[#f5f2ed]/60 leading-relaxed mb-10">
                        Future-focused learning programs and innovation workshops designed to bridge the gap between classroom theory and industry excellence.
                      </p>
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white group-hover:text-[#b38b3f] transition-colors">
                        Explore STEM Education <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            )}

            {/* Section 3: Proprietary Brands (PRIORITY 3) */}
            {(filter === 'All' || filter === 'Core Pillars') && (
              <div id="brands-pillar" className="mb-32">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-1 bg-white/10" />
                  <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f]">03. Proprietary Brands</h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {corePillars.filter(p => p.id !== 'education').map((pillar) => (
                    <Link to={pillar.link} key={pillar.id} className="group">
                      <motion.div 
                        whileHover={{ y: -10 }}
                        className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10"
                      >
                        <img 
                          src={pillar.image} 
                          alt={pillar.title}
                          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d15] via-[#2a1d15]/40 to-transparent" />
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                          <div className="text-[#b38b3f] mb-6">{pillar.icon}</div>
                          <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{pillar.title}</h3>
                          <p className="text-[#b38b3f] text-xs font-bold uppercase tracking-widest mb-4">{pillar.tagline}</p>
                          <p className="text-sm text-[#f5f2ed]/60 leading-relaxed mb-8">{pillar.description}</p>
                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white group-hover:text-[#b38b3f] transition-colors">
                            {pillar.cta} <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Section 4: External Brand Partnerships (PRIORITY 4) */}
            {(filter === 'All' || filter === 'Products') && (
              <div id="products" className="mb-32">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-1 bg-white/10" />
                  <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f]">04. Strategic IT Partnerships</h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                
                <div className="flex justify-between items-center mb-8">
                  <h3 id="engineering-products" className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[#b38b3f]" /> Power & Smart Building
                  </h3>
                  <Link to="/engineering-products" className="text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] hover:text-[#cdaa6d] transition-colors flex items-center gap-2">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {engineeringProducts.map((brand) => (
                    <div key={brand.name}>
                      <ProductCard brand={brand} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-8">
                  <h3 id="it-products" className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                    <Network className="w-6 h-6 text-[#b38b3f]" /> IT & Network Products
                  </h3>
                  <Link to="/network-it-products" className="text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] hover:text-[#cdaa6d] transition-colors flex items-center gap-2">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {itProducts.map((brand) => (
                    <div key={brand.name}>
                      <ProductCard brand={brand} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Sticky CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
          <Link 
            to="/contact"
            className="flex items-center gap-3 px-8 py-4 bg-[#b38b3f] text-white rounded-full shadow-2xl shadow-[#b38b3f]/40 hover:scale-105 transition-transform group"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Get a Consultation</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function ProductCard({ brand }: { brand: Brand }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#b38b3f]/30 transition-all duration-500 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5">
      <div className="flex-1">
        <h4 className="text-lg font-bold text-[#f5f2ed] mb-2 uppercase tracking-tight">{brand.name}</h4>
        <p className="text-xs text-[#f5f2ed]/50 leading-relaxed mb-6">{brand.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {brand.products?.map((p) => (
            <span key={p} className="px-3 py-1 bg-white/10 rounded-full text-[8px] uppercase tracking-widest font-bold text-[#b38b3f]">
              {p}
            </span>
          ))}
        </div>
      </div>
      <a 
        href={brand.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] hover:text-[#cdaa6d] transition-colors"
      >
        View Products <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
}
