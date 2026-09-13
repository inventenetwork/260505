import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Network, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Server, 
  Wifi, 
  Home as HomeIcon, 
  Sprout, 
  Building, 
  Compass, 
  ChevronRight,
  ExternalLink,
  Sliders,
  Laptop,
  Hotel
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Engineering() {
  const [projectFilter, setProjectFilter] = useState<'all' | 'me' | 'ict' | 'iot'>('all');

  const meServices = [
    {
      title: "Power Distribution & Switchgear",
      desc: "Industrial-grade electrical panels, main distribution switchboards, and protection relays engineered for maximum uptime."
    },
    {
      title: "Intelligent Lighting Control",
      desc: "Architectural and functional lighting automation optimized for energy efficiency, DALI protocols, and centralized scheduling."
    },
    {
      title: "Transit & Infrastructure Electrification",
      desc: "Comprehensive electrical works for rail and transport nodes, including emergency power, ECS, and auxiliary systems."
    },
    {
      title: "Energy Management & Solar Solutions",
      desc: "Smart power meters, renewable energy integration, battery storage, and proactive load balancing for industrial plants."
    }
  ];

  const ictServices = [
    {
      icon: <Wifi className="w-5 h-5 text-gold" />,
      title: "Wireless WAN & PTP Infrastructure",
      desc: "Long-range Point-to-Point (PTP) and Point-to-Multipoint (PTMP) links connecting remote utility sites, water reservoirs, and municipal offices."
    },
    {
      icon: <Network className="w-5 h-5 text-gold" />,
      title: "Enterprise Switching & Structured Cabling",
      desc: "Multi-gigabit fiber backbones, high-density patch fields, and core campus switching matrices designed for zero-packet-drop reliability."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "Surveillance, FIDS & Public Address (PA)",
      desc: "Mission-critical security cameras, access control, airport Flight Information Display Systems (FIDS), and acoustic-tuned PA systems."
    },
    {
      icon: <Server className="w-5 h-5 text-gold" />,
      title: "Server, Edge Compute & Storage Racks",
      desc: "On-premise edge computing nodes, resilient NAS/SAN storage arrays, and precision cooling containment for server rooms."
    }
  ];

  const engineeringProjects = [
    {
      title: "The Seven Stars Hotel KL",
      client: "Hospitality Group",
      pillarCategory: "me",
      tag: "Hospitality Infrastructure",
      year: "2025",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      desc: "Full-scale electrical system overhaul, lighting controls, and integrated network infrastructure for a 5-star hotel property.",
      link: "https://thesevenstarshotelkl.com/"
    },
    {
      title: "Sibu Airport",
      client: "Airport Authority",
      pillarCategory: "ict",
      tag: "Security & Airport Systems",
      year: "2024",
      image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=800",
      desc: "Integrated deployment of Flight Information Display Systems (FIDS), CCTV surveillance, Public Address (PA), and mission-critical network fabric."
    },
    {
      title: "Air Selangor",
      client: "Smart Water Management",
      pillarCategory: "ict",
      tag: "Wireless PTP Infrastructure",
      year: "2023",
      image: "https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?auto=format&fit=crop&q=80&w=800",
      desc: "Statewide Wireless Point-to-Point (PTP) network enabling real-time telemetry, pump monitoring, and water quality data transmission."
    },
    {
      title: "KLIA 2",
      client: "International Airport Hub",
      pillarCategory: "me",
      tag: "Lighting Control Systems",
      year: "2023",
      image: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?auto=format&fit=crop&q=80&w=800",
      desc: "Advanced architectural lighting control system implementation engineered for 24/7 reliability, automated lux dimming, and energy efficiency."
    },
    {
      title: "MRT Putrajaya Line",
      client: "MRT Corp",
      pillarCategory: "me",
      tag: "M&E Electrical Works",
      year: "2024",
      image: "https://images.unsplash.com/photo-1558489580-f149a033c727?auto=format&fit=crop&q=80&w=800",
      desc: "Full execution of electrical works for IVS2 and ECS3 packages across passenger stations on the Putrajaya rail transit line."
    },
    {
      title: "Dyson Manufacturing Facility",
      client: "Industrial Partner",
      pillarCategory: "ict",
      tag: "Industrial ICT & Security",
      year: "2023",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      desc: "Comprehensive enterprise network and security systems for high-precision manufacturing and R&D facilities."
    },
    {
      title: "Sunway Velocity District",
      client: "Commercial District",
      pillarCategory: "ict",
      tag: "High-Density Wi-Fi & Surveillance",
      year: "2024",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      desc: "Gigabit Managed Services (GMS), high-density wireless infrastructure, and comprehensive commercial surveillance integration."
    },
    {
      title: "Statewide Municipal WAN",
      client: "Terengganu & Kedah State Govts",
      pillarCategory: "ict",
      tag: "Wireless WAN Network",
      year: "2023",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      desc: "Strategic long-haul wireless wide-area infrastructure linking municipal councils and state departmental databases."
    }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? engineeringProjects 
    : engineeringProjects.filter(p => p.pillarCategory === projectFilter);

  return (
    <div className="bg-[#faf7f2] text-[#1f1712] min-h-screen">
      
      {/* 1. HERO SECTION (Dark Brown Anchor) */}
      <section className="bg-[#1f1712] text-[#f5f2ed] pt-36 pb-24 px-6 relative overflow-hidden border-b border-gold/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gold">
                Pillar 02 — Engineering
              </span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-paper/80">
              <Zap className="w-3.5 h-3.5 text-gold" />
              M&E • ICT • Smart IoT • Software
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-paper mb-6 leading-[1.05]"
          >
            Precision Engineered. <br />
            <span className="text-gold">Intelligently Connected.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-paper/70 max-w-3xl leading-relaxed mb-10"
          >
            Inventé Network provides end-to-end technical capabilities. We consolidate <strong>Mechanical & Electrical (M&E)</strong> engineering, enterprise <strong>ICT infrastructure</strong>, proprietary <strong>Smart IoT</strong>, and bespoke <strong>Software & App Development</strong> under one unified engineering discipline.
          </motion.p>

          {/* Quick Jump Navigation */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#me" className="px-6 py-3 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-lg shadow-gold/20">
              M&E Services <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#iot" className="px-6 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-paper/90">
              Smart IoT
            </a>
            <a href="#ict" className="px-6 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-paper/90">
              ICT Services
            </a>
            <a href="#software" className="px-6 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-paper/90">
              Software Dev
            </a>
            <a href="#references" className="px-6 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-paper/90">
              Project References
            </a>
          </div>

        </div>
      </section>

      {/* 2. PILLAR INTRO (Light Section for Contrast & Readability) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#8a6828] mb-3 block">
              Engineering Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] mb-6 leading-tight">
              From Heavy Industrial Power to <span className="text-gold">Intelligent Code</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#1f1712]/70 leading-relaxed mb-6">
              Modern infrastructure cannot survive in silos. A high-efficiency building requires dependable electrical power, multi-gigabit wireless telemetry, smart IoT sensors that self-regulate, and robust digital platforms that give operators full visibility.
            </p>
            <p className="text-sm sm:text-base text-[#1f1712]/70 leading-relaxed mb-8">
              At Inventé Network, our engineering division connects every layer of the physical and digital stack.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#1f1712]/10 shadow-sm">
                <Zap className="w-5 h-5 text-gold mb-2" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1f1712] mb-1">M&E Engineering</h4>
                <p className="text-[11px] text-[#1f1712]/60">Power switchgear, rail electrification, and intelligent lighting.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#1f1712]/10 shadow-sm">
                <Network className="w-5 h-5 text-gold mb-2" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1f1712] mb-1">ICT Infrastructure</h4>
                <p className="text-[11px] text-[#1f1712]/60">Enterprise fiber backbones, PTP wireless, and security systems.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#1f1712]/10 shadow-sm">
                <Cpu className="w-5 h-5 text-gold mb-2" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1f1712] mb-1">Smart IoT</h4>
                <p className="text-[11px] text-[#1f1712]/60">Smart farming, home automation, and smart office systems.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#1f1712]/10 shadow-sm">
                <Code2 className="w-5 h-5 text-gold mb-2" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1f1712] mb-1">Software & Apps</h4>
                <p className="text-[11px] text-[#1f1712]/60">Digital platforms, web applications, and immersive mobile apps.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-[#1f1712]/10 shadow-2xl aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt="Engineering Precision"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gold block mb-1">Tested In Critical Environments</span>
                  <p className="text-sm font-bold text-white">Airports • Transit Lines • Utilities • Industrial Plants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUB-SECTION: M&E (MECHANICAL & ELECTRICAL) */}
      <section id="me" className="py-24 px-6 bg-white border-y border-[#1f1712]/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase tracking-widest text-[#8a6828] mb-4">
                <Zap className="w-3.5 h-3.5 text-gold" />
                Section 01 • Infrastructure Power & Electrical
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] leading-none">
                Mechanical & Electrical <span className="text-gold">(M&E)</span>
              </h2>
              <p className="text-sm sm:text-base text-[#1f1712]/70 max-w-2xl mt-4 leading-relaxed">
                Industrial-grade electrical engineering, power distribution, energy management, and transit infrastructure. From high-voltage switchgear to architectural lighting control systems.
              </p>
            </div>

            <Link 
              to="/contact?pillar=Engineering"
              className="px-6 py-3 bg-[#1f1712] text-paper text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gold hover:text-white transition-all shadow-md self-start md:self-auto"
            >
              Consult M&E Engineers
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {meServices.map((svc, i) => (
              <div 
                key={i}
                className="p-8 rounded-2xl bg-[#faf7f2] border border-[#1f1712]/10 hover:border-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold mb-6 font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight text-[#1f1712] mb-3">{svc.title}</h4>
                  <p className="text-xs text-[#1f1712]/65 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs font-bold text-[#1f1712]">
                Key M&E Reference: MRT Putrajaya Line (IVS2 & ECS3 Packages) & KLIA 2 Advanced Lighting Control
              </span>
            </div>
            <a href="#references" className="text-xs font-black uppercase tracking-widest text-[#8a6828] hover:text-[#1f1712]">
              View Project Details →
            </a>
          </div>

        </div>
      </section>

      {/* 4. SUB-SECTION: SMART IOT / ELECTRICAL / CONTROL */}
      <section id="iot" className="py-24 px-6 bg-[#1f1712] text-paper border-t border-gold/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase tracking-widest text-gold mb-4">
                <Cpu className="w-3.5 h-3.5 text-gold" />
                Section 02 • Smart IoT & Automation
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-tight text-paper leading-none">
                  Smart IoT & Automation
                </h2>
              </div>
              <p className="text-sm sm:text-base text-paper/70 max-w-2xl mt-4 leading-relaxed">
                Inventé Network provides intelligent sensor telemetry, micro-climate controls, and automated facilities across four core suites:
              </p>
            </div>

            <Link 
              to="/contact?pillar=Engineering"
              className="px-8 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20 self-start md:self-auto flex items-center gap-2"
            >
              Consult IoT Specialist <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Smart Automation Suites */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Smart Farming */}
            <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:border-gold/50 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                  <Sprout className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-paper mb-4">Smart Farming</h3>
                <p className="text-xs text-paper/60 leading-relaxed mb-6">
                  Precision agriculture: automated irrigation, soil sensing, and climate control.
                </p>
              </div>
              <a 
                href="https://www.blyten.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase font-bold tracking-widest text-gold hover:text-white transition-colors flex items-center justify-between pt-4 border-t border-white/10"
              >
                <span>Inquire Now</span> <span>→</span>
              </a>
            </div>

            {/* Smart Hotel */}
            <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:border-gold/50 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                  <Hotel className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-paper mb-4">Smart Hotel</h3>
                <p className="text-xs text-paper/60 leading-relaxed mb-6">
                  Guest experience automation: room controls, energy efficiency, and check-in integration.
                </p>
              </div>
              <a 
                href="https://www.blyten.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase font-bold tracking-widest text-gold hover:text-white transition-colors flex items-center justify-between pt-4 border-t border-white/10"
              >
                <span>Inquire Now</span> <span>→</span>
              </a>
            </div>

            {/* Smart Home */}
            <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:border-gold/50 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-paper mb-4">Smart Home</h3>
                <p className="text-xs text-paper/60 leading-relaxed mb-6">
                  Integrated residential automation: lighting, climate, security, and voice control.
                </p>
              </div>
              <a 
                href="https://www.blyten.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase font-bold tracking-widest text-gold hover:text-white transition-colors flex items-center justify-between pt-4 border-t border-white/10"
              >
                <span>Inquire Now</span> <span>→</span>
              </a>
            </div>

            {/* Smart Office */}
            <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:border-gold/50 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                  <Building className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-paper mb-4">Smart Office</h3>
                <p className="text-xs text-paper/60 leading-relaxed mb-6">
                  Intelligent workspaces: occupancy tracking, meeting room automation, and energy zoning.
                </p>
              </div>
              <a 
                href="https://www.blyten.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase font-bold tracking-widest text-gold hover:text-white transition-colors flex items-center justify-between pt-4 border-t border-white/10"
              >
                <span>Inquire Now</span> <span>→</span>
              </a>
            </div>

          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Sliders className="w-5 h-5 text-gold" />
              <span className="text-xs text-paper/80 font-medium">
                Looking for tailored IoT sensors, custom telemetry firmware, or hardware prototypes?
              </span>
            </div>
            <Link 
              to="/contact?pillar=Engineering" 
              className="text-xs font-bold uppercase tracking-widest text-gold hover:text-white"
            >
              Request Custom IoT Consultation →
            </Link>
          </div>

        </div>
      </section>

      {/* 3. SUB-SECTION: ICT (INFORMATION & COMMUNICATIONS TECHNOLOGY) */}
      <section id="ict" className="py-24 px-6 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase tracking-widest text-[#8a6828] mb-4">
              <Network className="w-3.5 h-3.5 text-gold" />
              Section 03 • Enterprise Data & Networking
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] leading-none">
              ICT Services <span className="text-gold">& Networks</span>
            </h2>
            <p className="text-sm sm:text-base text-[#1f1712]/70 max-w-2xl mt-4 leading-relaxed">
              We design and execute robust communication backbones: long-range wireless Point-to-Point (PTP), campus structured cabling, high-bandwidth switching, and integrated airport surveillance/FIDS.
            </p>
          </div>

          <Link 
            to="/contact?pillar=Engineering"
            className="px-6 py-3 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#1f1712] transition-all shadow-md self-start md:self-auto"
          >
            Request ICT Proposal
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ictServices.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-[#1f1712]/10 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-[#1f1712] mb-3">{item.title}</h4>
                <p className="text-xs sm:text-sm text-[#1f1712]/65 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#1f1712]/10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
            <span className="text-xs font-bold text-[#1f1712]">
              Key ICT References: Air Selangor Statewide PTP Network, Sibu Airport Systems & Sunway Velocity Managed Services
            </span>
          </div>
          <a href="#references" className="text-xs font-black uppercase tracking-widest text-gold hover:text-[#1f1712]">
            View Case Studies →
          </a>
        </div>

      </section>

      {/* 6. SUB-SECTION: SERVICES / SOFTWARE & APP DEVELOPMENT */}
      <section id="software" className="py-24 px-6 bg-white border-y border-[#1f1712]/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase tracking-widest text-[#8a6828] mb-4">
                <Code2 className="w-3.5 h-3.5 text-gold" />
                Section 04 • Software & App Development
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] mb-4 leading-tight">
                Software & App <br />
                <span className="text-gold">Development</span>
              </h2>
              <p className="text-sm sm:text-base text-[#1f1712]/70 leading-relaxed mb-6">
                Grouped under Engineering, our software division builds scalable web platforms, telemetry interfaces, mobile apps, and interactive digital products.
              </p>
              <p className="text-sm sm:text-base text-[#1f1712]/70 leading-relaxed mb-8">
                We deliver robust digital products tailored to your operational needs—ranging from real-time IoT dashboards to consumer-facing mobile experiences.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#1f1712]/10 flex items-start gap-4">
                  <Laptop className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#1f1712]">Custom Enterprise Web & Mobile Apps</h5>
                    <p className="text-[11px] text-[#1f1712]/60">Full-stack React, mobile native/cross-platform, and real-time backend API integration.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#1f1712]/10 flex items-start gap-4">
                  <Compass className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#1f1712]">Software Platform Architecture</h5>
                    <p className="text-[11px] text-[#1f1712]/60">Algorithmic mystery itineration, automated booking logic, and seamless mobile tourism discovery.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact?pillar=Engineering"
                  className="px-8 py-4 bg-[#1f1712] text-paper text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gold hover:text-white transition-all shadow-md flex items-center gap-2"
                >
                  Consult Software Team <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/contact?pillar=Engineering"
                  className="px-8 py-4 border border-[#1f1712]/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-[#1f1712]"
                >
                  Commission Software
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[2.5rem] bg-[#1f1712] p-8 md:p-12 text-paper border border-gold/30 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">Custom Software</h3>
                  <span className="text-[9px] uppercase tracking-widest font-black text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                    Proprietary Software
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000" 
                    alt="Custom Software Development" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <p className="text-xs text-paper/90 font-medium">Delivering scalable digital solutions for enterprise needs.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-gold font-bold uppercase block mb-1">Architecture</span>
                    <p className="text-xs text-paper">Enterprise Scalable Backends</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-gold font-bold uppercase block mb-1">UX/UI</span>
                    <p className="text-xs text-paper">User-Centric Interfaces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SUB-SECTION: ENGINEERING PROJECT REFERENCES */}
      <section id="references" className="py-24 px-6 bg-[#1f1712] text-paper border-t border-gold/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase tracking-widest text-gold mb-4">
                <Layers className="w-3.5 h-3.5 text-gold" />
                Track Record & Proof of Execution
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-paper leading-none">
                Engineering <span className="text-gold">Project References</span>
              </h2>
              <p className="text-sm sm:text-base text-paper/70 max-w-2xl mt-4 leading-relaxed">
                Review our documented history of enterprise deployments across international airports, state utilities, rail transit lines, and high-tech manufacturing plants.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex p-1.5 rounded-full bg-white/5 border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setProjectFilter('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  projectFilter === 'all' ? 'bg-gold text-white shadow-md' : 'text-paper/60 hover:text-white'
                }`}
              >
                All Engineering
              </button>
              <button
                onClick={() => setProjectFilter('me')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  projectFilter === 'me' ? 'bg-gold text-white shadow-md' : 'text-paper/60 hover:text-white'
                }`}
              >
                M&E
              </button>
              <button
                onClick={() => setProjectFilter('ict')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  projectFilter === 'ict' ? 'bg-gold text-white shadow-md' : 'text-paper/60 hover:text-white'
                }`}
              >
                ICT
              </button>
              <button
                onClick={() => setProjectFilter('iot')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  projectFilter === 'iot' ? 'bg-gold text-white shadow-md' : 'text-paper/60 hover:text-white'
                }`}
              >
                Smart IoT
              </button>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-gold/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-black bg-black/70 backdrop-blur-md text-gold border border-gold/30">
                        {proj.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{proj.client}</span>
                      <span className="text-xs font-bold text-gold uppercase tracking-wider">{proj.year}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-paper mb-3 group-hover:text-gold transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-paper/60 leading-relaxed mb-4">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to="/contact?pillar=Engineering"
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-gold text-paper hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    Consult for Similar Scope <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Logos / Key Partners Strip */}
          <div className="text-center pt-12 border-t border-white/10">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold block mb-6">
              Major Infrastructure & Industrial Clients
            </span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-70">
              {['Airport Authority', 'Air Selangor', 'KLIA 2', 'MRT Putrajaya', 'Dyson Manufacturing', 'Sunway Group'].map((client, i) => (
                <span key={i} className="text-sm md:text-lg font-black uppercase tracking-wider text-paper/80">
                  {client}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="py-20 px-6 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 bg-gradient-to-r from-[#1f1712] via-[#2d1f16] to-[#1f1712] text-paper border border-gold/30 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gold mb-4 block">
              Consult Our Engineering Division
            </span>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-paper mb-6 leading-tight">
              Ready to Architect Your Next Infrastructure or IoT Solution?
            </h3>
            <p className="text-sm text-paper/70 leading-relaxed mb-8">
              Whether you require M&E engineering, wireless network deployment, smart automation, or custom software development, our engineers are ready to assist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact?pillar=Engineering"
                className="px-10 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20"
              >
                Inquire With Engineers
              </Link>
              <Link 
                to="/education"
                className="px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-paper/80"
              >
                Explore Education Pillar →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
