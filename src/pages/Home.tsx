import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  GraduationCap, 
  Zap, 
  Cpu, 
  Network, 
  Award, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  Layers, 
  Code2, 
  ChevronRight, 
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';
import Logo from '../components/Logo';
import PillarCard from '../components/PillarCard';
import BlyndLogo from '../components/BlyndLogo';

export default function Home() {
  const highlightCards = [
    {
      title: "Smart IoT",
      pillar: "Engineering Pillar",
      category: "Electrical / Control",
      desc: "Proprietary IoT platform delivering smart farming telemetry, home automation, and smart office controls.",
      link: "/engineering#iot",
      icon: <Cpu className="w-6 h-6 text-gold" />,
      badge: "Smart. Simplified."
    },
    {
      title: "STE(A)M Education",
      pillar: "Education Pillar",
      category: "Experiential Youth Learning",
      desc: "Aerospace rocketry, satellite telemetry kits, robotics, and applied AI labs inspiring Malaysia's future engineers.",
      link: "/education#stem",
      icon: <Rocket className="w-6 h-6 text-gold" />,
      badge: "K-12 & Tertiary"
    },
    {
      title: "Train-the-Trainer (TTT)",
      pillar: "Education Pillar",
      category: "HRD Corp Certified Program",
      desc: "Accredited andragogy, TNA, and high-impact facilitation workshops led by an HRD Corp Certified Trainer.",
      link: "/education#ttt",
      icon: <Award className="w-6 h-6 text-gold" />,
      badge: "HRD Corp Claimable"
    },
    {
      title: "Software Dev",
      pillar: "Engineering Pillar",
      category: "Web & App Development",
      desc: "Full-stack software development for mobile, web, and custom APIs tailored to enterprise needs.",
      link: "/engineering#software",
      icon: <Code2 className="w-6 h-6 text-gold" />,
      badge: "Digital Platform"
    }
  ];

  const trustedClients = [
    { name: "Airport Authority", detail: "Sibu Airport FIDS & Systems" },
    { name: "Air Selangor", detail: "Statewide Wireless PTP Network" },
    { name: "KLIA 2", detail: "Advanced Lighting Control System" },
    { name: "MRT Putrajaya", detail: "IVS2 & ECS3 Electrical Works" },
    { name: "Sunway Group", detail: "High-Density Managed Wi-Fi" },
    { name: "Dyson Manufacturing", detail: "Industrial Network & Security" },
    { name: "Swinburne University", detail: "Space Science & Aerospace Labs" },
    { name: "University Malaya", detail: "IoT & Surveillance Infrastructure" },
    { name: "UiTM", detail: "Future Skills & Tech Seminars" },
    { name: "HRD Corp", detail: "Registered & Certified Trainer" }
  ];

  return (
    <div className="w-full bg-[#faf7f2] text-[#1f1712]">
      
      {/* 1. HERO SECTION (Dark Theme) */}
      <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">
        
        {/* ISS Hero Graphic - positioned more subtly */}
        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
          <img 
            src="/src/assets/images/iss_hero_graphic_1789264346383.jpg" 
            alt="International Space Station" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-10"
          >
            Where Bold Ideas <br />
            <motion.span 
              animate={{ color: ["#d9b35b", "#ffffff", "#d9b35b"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Are Engineered.
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16"
          >
            Inventé Network unites certified human capability with hardened technical infrastructure.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            <a 
              href="#pillars" 
              className="px-8 py-3 bg-white text-black text-base font-medium rounded-full hover:bg-white/90 transition-all"
            >
              Explore Pillars
            </a>
            <Link 
              to="/contact" 
              className="text-base font-medium text-white/80 hover:text-white transition-all flex items-center gap-2"
            >
              Get in Touch →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. TWO-PILLAR OVERVIEW SECTION (Light Section for Contrast & Readability) */}
      <section id="pillars" className="py-24 px-6 max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8a6828]">
              Our Business Structure
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] mb-4">
            Two Strategic Pillars. <br />
            <span className="text-gold">One Unified Standard.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1f1712]/70 leading-relaxed">
            Every product, service, and brand in the Inventé Network ecosystem is engineered under one of our two primary divisions.
          </p>
        </div>

        {/* Two Large Pillar Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Education */}
          <PillarCard 
            pillarNumber="Pillar 01"
            pillarName="Education"
            title="Knowledge & Enablement"
            subtitle="Pedagogy, Aerospace & Future Skills"
            description="Cultivating human capability through accredited trainer mastery and hands-on STE(A)M programs that bridge theoretical science with real-world engineering."
            badge="HRD Corp Certified"
            badgeIcon={<Award className="w-3.5 h-3.5 text-gold" />}
            highlights={[
              "Train-the-Trainer (TTT) — HRD Corp Certified & Claimable",
              "STE(A)M Education — Space science, rocketry, IoT kits & robotics",
              "Education Project References — Higher ed & international school tours"
            ]}
            link="/education"
            linkText="Explore Education Pillar"
            subLinks={[
              { name: "TTT Programs", path: "/education#ttt" },
              { name: "STE(A)M Kits", path: "/education#stem" },
              { name: "Project References", path: "/education#references" }
            ]}
          />

          {/* Pillar 2: Engineering */}
          <PillarCard 
            pillarNumber="Pillar 02"
            pillarName="Engineering"
            title="Infrastructure & Systems"
            subtitle="M&E, ICT, Smart IoT & Software"
            description="End-to-end technical execution: heavy electrical switchgears, enterprise wireless data networks, Blyten smart automation, and bespoke software development."
            badge="Enterprise Grade"
            badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-gold" />}
            highlights={[
              "M&E Services — Industrial power distribution & lighting control",
              "ICT Services — Long-range wireless PTP, switching & surveillance",
              "Blyten Smart IoT — Smart farming, smart home & smart office",
              "Blynd — Custom software & experiential mobile platforms",
              "Engineering Project References — Rail transit, airports & utilities"
            ]}
            link="/engineering"
            linkText="Explore Engineering Pillar"
            subLinks={[
              { name: "M&E Services", path: "/engineering#me" },
              { name: "ICT Infrastructure", path: "/engineering#ict" },
              { name: "Blyten IoT", path: "/engineering#blyten" },
              { name: "Blynd Software", path: "/engineering#blynd" },
              { name: "Project References", path: "/engineering#references" }
            ]}
          />

        </div>

      </section>

      {/* 3. HIGHLIGHTS / FEATURED PRODUCTS STRIP */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <h3 className="text-4xl font-semibold tracking-tight text-black mb-16 text-center">
            Key Programs & Solutions
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlightCards.map((card, idx) => (
              <Link 
                key={idx}
                to={card.link}
                className="group p-8 rounded-3xl bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    {card.icon}
                  </div>

                  <h4 className="text-xl font-semibold text-black mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <span className="text-sm font-medium text-[#0066cc] group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT LOGOS / TRUST SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <h3 className="text-4xl font-semibold tracking-tight text-black mb-16 text-center">
            Trusted Across Malaysia
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {trustedClients.map((client, i) => (
              <div 
                key={i}
                className="text-center"
              >
                <h5 className="text-base font-semibold text-black mb-1">
                  {client.name}
                </h5>
                <p className="text-sm text-black/60">
                  {client.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT CTA BANNER */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">
            Ready to Engineer Your Ideas?
          </h2>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">
            Whether for training or enterprise engineering, our specialists are ready to consult.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-black text-base font-medium rounded-full hover:bg-white/90 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
