import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Calendar, 
  GraduationCap, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const milestones = [
    {
      year: "11 Sept 2020",
      title: "Founding of Inventé Network",
      desc: "Incorporated with a founding vision to bridge deep engineering execution with transformative technical learning."
    },
    {
      year: "2021 – 2022",
      title: "Major Infrastructure & PTP Deployments",
      desc: "Delivered mission-critical wireless networks and security systems for Air Selangor, airport terminals, and state utilities."
    },
    {
      year: "2023",
      title: "Smart IoT & Railway Packages",
      desc: "Launched proprietary Smart IoT agrotech solutions; executed electrical packages for the MRT Putrajaya transit line."
    },
    {
      year: "2024 – 2026",
      title: "6 Years & Two Pillars Evolution",
      desc: "Solidified organization around two clear divisions: Education (HRD Corp TTT & STE(A)M) and Engineering (M&E, ICT, Smart IoT, Software)."
    }
  ];

  const values = [
    { 
      title: 'Precision Execution', 
      desc: 'No shortcuts in engineering or andragogy. We build for longevity, zero downtime, and real operational impact.' 
    },
    { 
      title: 'Real-World Pedagogy', 
      desc: 'Our education programs are taught by practicing engineers and certified trainers who work directly in industry.' 
    },
    { 
      title: 'Two Pillars Cohesion', 
      desc: 'Physical power, wireless connectivity, intelligent sensors, and human capability reinforce one another.' 
    },
    { 
      title: 'Malaysian Excellence', 
      desc: 'Proudly headquartered in Cyberjaya, delivering high-reliability solutions across public and private sectors.' 
    }
  ];

  return (
    <div className="bg-[#faf7f2] text-[#1f1712] min-h-screen">
      
      {/* Hero Section (Dark Brown Anchor) */}
      <section className="bg-[#1f1712] text-paper pt-36 pb-24 px-6 border-b border-gold/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md mb-8">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-paper/90">
              Est. 11 September 2020 • 6 Years of Excellence
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-6">
            Ideas. <span className="text-gold">Engineered</span>.
          </h1>

          <p className="text-base sm:text-lg text-paper/75 max-w-3xl leading-relaxed">
            <strong>Inventé Network</strong> is a Malaysian innovation and engineering group. Over six years, we have grown from a bold technical concept into an established partner delivering both critical infrastructure and accredited knowledge transfer across two dedicated pillars.
          </p>

        </div>
      </section>

      {/* Two Pillars Core Mission (Light Cream Background) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#8a6828] mb-3 block">
            The Two Pillars of Inventé
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] mb-4">
            Structured for Clarity & Impact
          </h2>
          <p className="text-sm sm:text-base text-[#1f1712]/70 leading-relaxed">
            We avoid scattered services by aligning our capabilities into two complementary pillars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Pillar 1 */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-[#1f1712]/10 shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
              <GraduationCap className="w-7 h-7" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-black text-gold block mb-1">Pillar 01</span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#1f1712] mb-3">Education</h3>
            <p className="text-xs sm:text-sm text-[#1f1712]/70 leading-relaxed mb-6">
              Focusing on human capital development through certified trainer development and practical STEM immersion:
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2.5 text-xs text-[#1f1712]/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span><strong>Train-the-Trainer (TTT)</strong>: Certified by HRD Corp, focusing on adult learning theories, TNA, and interactive corporate training.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#1f1712]/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span><strong>STE(A)M Programs</strong>: Hands-on rocketry, satellite electronics, IoT kits, and robotics for schools and universities.</span>
              </div>
            </div>
            <Link to="/education" className="text-xs uppercase tracking-widest font-bold text-gold hover:text-[#1f1712] flex items-center gap-2">
              Explore Education Pillar →
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-[#1f1712]/10 shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
              <Zap className="w-7 h-7" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-black text-gold block mb-1">Pillar 02</span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#1f1712] mb-3">Engineering</h3>
            <p className="text-xs sm:text-sm text-[#1f1712]/70 leading-relaxed mb-6">
              Delivering precision infrastructure, smart automated systems, and enterprise software:
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2.5 text-xs text-[#1f1712]/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span><strong>M&E & ICT Services</strong>: High-reliability switchgear, airport FIDS/PA, and state-wide wireless PTP utility networks.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#1f1712]/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span><strong>Smart IoT & Software</strong>: Proprietary Smart IoT telemetry (farming, home, office) and digital software development.</span>
              </div>
            </div>
            <Link to="/engineering" className="text-xs uppercase tracking-widest font-bold text-gold hover:text-[#1f1712] flex items-center gap-2">
              Explore Engineering Pillar →
            </Link>
          </div>

        </div>

        {/* 6-Year Timeline */}
        <div className="p-10 sm:p-14 rounded-[3rem] bg-[#1f1712] text-paper border border-gold/30 shadow-2xl">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-3 block">
            Milestone Timeline
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-paper mb-10">
            6 Years of Building & Innovating
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((item, i) => (
              <div key={i} className="border-l-2 border-gold/40 pl-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-gold block mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-base font-bold uppercase tracking-tight text-paper mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-paper/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white border-y border-[#1f1712]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#8a6828] mb-2 block">
              Core Principles
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#1f1712]">
              How We Operate
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#faf7f2] border border-[#1f1712]/10">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-tight text-[#1f1712] mb-2">{v.title}</h4>
                <p className="text-xs text-[#1f1712]/65 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8a6828] mb-4">
          <MapPin className="w-4 h-4 text-gold" />
          <span>Headquarters: Cyberjaya, Selangor, Malaysia</span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] mb-6">
          Connect With Our Team
        </h3>
        <p className="text-sm text-[#1f1712]/70 max-w-xl mx-auto mb-8 leading-relaxed">
          Reach out to discuss HRD Corp training programs, school STE(A)M curriculums, M&E engineering tenders, or IoT integration.
        </p>
        <Link 
          to="/contact" 
          className="px-10 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#1f1712] transition-all shadow-md inline-block"
        >
          Contact Inventé Network
        </Link>
      </section>

    </div>
  );
}
