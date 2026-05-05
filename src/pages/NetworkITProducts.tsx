import React from 'react';
import { motion } from 'motion/react';
import { Network, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Brand {
  name: string;
  description: string;
  products?: string[];
  link: string;
}

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

export default function NetworkITProducts() {
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
            <Network className="w-12 h-12 text-[#b38b3f]" />
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              IT & <span className="text-[#b38b3f]">Network Products</span>.
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#f5f2ed]/60 max-w-2xl leading-relaxed"
          >
            Comprehensive networking and IT infrastructure solutions for modern businesses. From high-speed wireless fabric to secure storage and specialized industry hardware.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itProducts.map((brand) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#b38b3f]/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-black text-[#f5f2ed] mb-4 uppercase tracking-tighter">{brand.name}</h3>
                <p className="text-sm text-[#f5f2ed]/50 leading-relaxed mb-8">{brand.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {brand.products?.map((p) => (
                    <span key={p} className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={brand.link} 
                target={brand.link.startsWith('http') ? "_blank" : "_self"}
                rel={brand.link.startsWith('http') ? "noopener noreferrer" : ""}
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#b38b3f] hover:text-[#cdaa6d] transition-colors"
              >
                Explore Brand <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
