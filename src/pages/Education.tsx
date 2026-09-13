import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Rocket, 
  Brain, 
  BookOpen, 
  Calendar, 
  Building2, 
  Sparkles,
  Presentation,
  Target,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Education() {
  const [activeTab, setActiveTab] = useState<'all' | 'stem' | 'ttt'>('all');

  const tttCompetencies = [
    {
      icon: <Brain className="w-6 h-6 text-gold" />,
      title: "Adult Learning & Andragogy",
      desc: "Deep dive into adult learning psychology, motivational drivers, and learner-centered facilitation methods that maximize active engagement."
    },
    {
      icon: <Target className="w-6 h-6 text-gold" />,
      title: "Training Needs Analysis (TNA)",
      desc: "Methodologies for identifying operational skill gaps, diagnostic assessments, and designing measurable learning objectives aligned with business ROI."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-gold" />,
      title: "Instructional Design & Modular Architecture",
      desc: "Structure high-impact curricula using microlearning, experiential simulation, hands-on labs, and adult-friendly materials."
    },
    {
      icon: <Presentation className="w-6 h-6 text-gold" />,
      title: "High-Impact Facilitation & Delivery",
      desc: "Master dynamic stage presence, room psychology, question handling, vocal modulation, and managing varied participant personas."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "AI & EdTech Tools in Training",
      desc: "Incorporate modern generative AI assistants, interactive digital whiteboards, and blended learning workflows to boost retention 10x."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: "Kirkpatrick Evaluation & ROI Tracking",
      desc: "Establish rigorous post-training assessment frameworks across reactions, learning acquisition, workplace behavior change, and business results."
    }
  ];

  const tttAudiences = [
    {
      role: "Corporate Trainers & HR Talent Teams",
      detail: "Empower internal subject experts to design and deliver structured, results-driven professional development sessions."
    },
    {
      role: "University Lecturers & Educators",
      detail: "Transition traditional instructional lectures into student-centric, highly collaborative active learning environments."
    },
    {
      role: "TVET & Technical Instructors",
      detail: "Translate complex engineering, industrial, and ICT concepts into digestible, hands-on practical masterclasses."
    },
    {
      role: "Industry Domain Consultants & SMEs",
      detail: "Convert years of specialized field knowledge into scalable, commercially viable training curricula."
    }
  ];

  const steamTracks = [
    {
      badge: "Aerospace & Space Science",
      title: "Satellite & Rocketry Exploration",
      desc: "Experiential programs introducing youth and students to aerospace principles, orbital mechanics, micro-satellite payloads, and atmospheric probes.",
      tags: ["CanSat Labs", "Telemetry Basics", "Orbital Physics"]
    },
    {
      badge: "Robotics & Microcontrollers",
      title: "Embedded Systems & IoT Hardware",
      desc: "Custom educational kits and workshops centered on Arduino, ESP32, sensors, and actuators—teaching real-world programming and physical computing.",
      tags: ["Hands-on Kits", "Robotics Kits", "Firmware & Sensors"]
    },
    {
      badge: "AI & Future Skills",
      title: "Applied AI, Vision & Automation",
      desc: "Hands-on literacy workshops introducing foundational machine learning concepts, computer vision basics, and responsible generative AI usage.",
      tags: ["Computer Vision", "AI Literacy", "Prompt & Logic"]
    },
    {
      badge: "School Tours & Hackathons",
      title: "Innovation Challenges & STEM Labs",
      desc: "Turnkey STEM events, inter-school innovation showcases, and pop-up innovation labs that inspire the next generation of engineers.",
      tags: ["Rapid Prototyping", "Design Thinking", "Showcase Day"]
    }
  ];

  const educationProjects = [
    {
      title: "Swinburne University of Technology",
      type: "stem",
      category: "Space Science & Aerospace",
      year: "2024",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
      description: "Delivered an immersive multi-day space science and rocketry masterclass for engineering undergraduates, incorporating satellite sensor telemetry.",
      outcomes: ["120+ Undergraduates Trained", "Hands-on Telemetry Modules", "University Engineering Partnership"]
    },
    {
      title: "Corporate HRD Corp Trainer Cohorts",
      type: "ttt",
      category: "Professional Accreditation",
      year: "2024",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      description: "Certified Train-the-Trainer intakes led by our accredited HRD Corp Certified Trainer, upskilling enterprise technical heads into certified facilitators.",
      outcomes: ["100% HRD Corp Levy Claimable", "Micro-teaching Evaluations", "Certified Facilitator Graduates"]
    },
    {
      title: "University Malaya (UM)",
      type: "stem",
      category: "Higher Education Workshop",
      year: "2023",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
      description: "Campus-wide technical integration sessions on IoT embedded systems, sensor networks, and data instrumentation for faculty and researchers.",
      outcomes: ["Faculty & Post-Grad Cohorts", "Hardware Prototyping", "Real-world IoT Integration"]
    },
    {
      title: "UniMAP & Universiti Malaysia Pahang (UMP)",
      type: "stem",
      category: "Technical Bootcamps",
      year: "2023",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      description: "Intensive engineering bootcamps covering industrial controller integration, sensor telemetry, and microcomputer programming for engineering students.",
      outcomes: ["Inter-University Collaboration", "Practical Hardware Labs", "Cap-Stone Project Showcases"]
    },
    {
      title: "International Schools STE(A)M Roadshow",
      type: "stem",
      category: "K-12 STEM Education",
      year: "2024",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      description: "Mobile STEM workshops across premier international secondary schools, featuring hands-on robotics kits, rocketry models, and algorithmic coding challenges.",
      outcomes: ["450+ Young Innovators Reached", "Interactive Kit Deployments", "Educator Enablement Kits"]
    },
    {
      title: "Technical Institute Educator Up-skilling",
      type: "ttt",
      category: "TVET Facilitation",
      year: "2023",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      description: "Pedagogical transformation program for TVET engineering lecturers, bridging classroom theory with current industrial automation practices.",
      outcomes: ["TVET Instructors Certified", "Practical Mock-Teach Assessments", "Curriculum Redesign"]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? educationProjects 
    : educationProjects.filter(p => p.type === activeTab);

  return (
    <div className="bg-[#faf7f2] text-[#1f1712] min-h-screen">
      
      {/* 1. HERO SECTION (Dark Brown Anchor) */}
      <section className="bg-[#1f1712] text-[#f5f2ed] pt-36 pb-24 px-6 relative overflow-hidden border-b border-gold/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gold">
                Pillar 01 — Education
              </span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-paper/80">
              <Award className="w-3.5 h-3.5 text-gold" />
              HRD Corp Certified Trainer
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-paper mb-6 leading-[1.05]"
          >
            Empowering Minds. <br />
            <span className="text-gold">Certifying Leaders.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-paper/70 max-w-3xl leading-relaxed mb-10"
          >
            At Inventé Network, <strong>Education</strong> is the engine that drives industrial progress. We unite accredited <strong>Train-the-Trainer (TTT)</strong> professional certifications with cutting-edge <strong>STE(A)M</strong> experiential curricula—bridging theoretical classrooms with real-world engineering excellence.
          </motion.p>

          {/* Quick-Jump Navigation Tabs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#ttt"
              className="px-8 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-lg shadow-gold/20"
            >
              Train-the-Trainer (TTT) <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="#stem"
              className="px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-paper/90"
            >
              STE(A)M Education
            </a>
            <a 
              href="#references"
              className="px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-paper/90"
            >
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
              Our Educational Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] mb-6 leading-tight">
              Transforming Learners into <span className="text-gold">Makers & Mentors</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#1f1712]/70 leading-relaxed mb-6">
              True innovation cannot occur without human capability. Malaysia’s evolving technology landscape demands both certified leaders who can facilitate knowledge seamlessly and youths who are fluent in engineering principles before they even graduate.
            </p>
            <p className="text-sm sm:text-base text-[#1f1712]/70 leading-relaxed mb-8">
              Under our Education pillar, we deliberately maintain two structured tracks:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-[#1f1712]/10 shadow-sm">
                <Award className="w-6 h-6 text-gold mb-3" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1f1712] mb-1">01. Train-the-Trainer</h4>
                <p className="text-[11px] text-[#1f1712]/60">Accredited andragogy, instructional design, and HRD Corp claimable programs.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#1f1712]/10 shadow-sm">
                <Rocket className="w-6 h-6 text-gold mb-3" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1f1712] mb-1">02. STE(A)M Education</h4>
                <p className="text-[11px] text-[#1f1712]/60">Aerospace, robotics kits, IoT hardware, and experiential workshops.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-[2.5rem] overflow-hidden border border-[#1f1712]/10 shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
                alt="Education Training Session"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay Credential Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 p-6 rounded-2xl bg-[#1f1712] text-paper border border-gold/40 shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gold">Official Credential</span>
              </div>
              <p className="text-xs font-bold text-paper">HRD Corp Certified Trainer</p>
              <p className="text-[10px] text-paper/60 mt-1">Human Resource Development Corporation Malaysia</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUB-SECTION: TRAIN-THE-TRAINER (TTT) */}
      <section id="ttt" className="py-24 px-6 bg-white border-y border-[#1f1712]/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase tracking-widest text-[#8a6828] mb-4">
                <Award className="w-3.5 h-3.5 text-gold" />
                Track 01 • Professional Certification
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] leading-none">
                Train-the-Trainer <span className="text-gold">(TTT)</span>
              </h2>
              <p className="text-sm sm:text-base text-[#1f1712]/70 max-w-2xl mt-4 leading-relaxed">
                Led by an accredited <strong>HRD Corp Certified Trainer</strong>, our Train-the-Trainer program transforms internal specialists, academics, and technical leads into confident, high-retention facilitators.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-gold/10 border border-gold/30 text-xs font-bold text-[#8a6828] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" /> HRD Corp Claimable
              </div>
              <Link 
                to="/contact?pillar=Education" 
                className="px-6 py-3 bg-[#1f1712] text-paper text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gold hover:text-white transition-all shadow-md"
              >
                Inquire for Intake
              </Link>
            </div>
          </div>

          {/* 6 Core Competency Modules */}
          <div className="mb-20">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-[#1f1712]/40 mb-8">
              The 6 Core Competency Modules
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tttCompetencies.map((comp, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-[#faf7f2] border border-[#1f1712]/10 hover:border-gold/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#1f1712]/5 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                      {comp.icon}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-black text-gold block mb-2">Module 0{idx + 1}</span>
                    <h4 className="text-lg font-bold uppercase tracking-tight text-[#1f1712] mb-3">{comp.title}</h4>
                    <p className="text-xs text-[#1f1712]/65 leading-relaxed">{comp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audiences for TTT */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#1f1712] text-paper border border-gold/30">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-3 block">
                  Target Audience
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-paper mb-4 leading-tight">
                  Who Benefits from TTT Certification?
                </h3>
                <p className="text-xs sm:text-sm text-paper/70 leading-relaxed mb-6">
                  Whether you manage internal corporate up-skilling or lecture in tertiary engineering programs, this framework equips you with structured facilitation mastery.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-xs text-paper/80 font-medium">Available for In-House Corporate Cohorts & Public Runs</span>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {tttAudiences.map((aud, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-[10px] font-bold mb-3">
                      0{i + 1}
                    </span>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-paper mb-2">{aud.role}</h5>
                    <p className="text-[11px] text-paper/60 leading-relaxed">{aud.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SUB-SECTION: STE(A)M EDUCATION */}
      <section id="stem" className="py-24 px-6 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase tracking-widest text-[#8a6828] mb-4">
              <Rocket className="w-3.5 h-3.5 text-gold" />
              Track 02 • Experiential STEM & Aerospace
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1712] leading-none">
              STE(A)M <span className="text-gold">Programs & Kits</span>
            </h2>
            <p className="text-sm sm:text-base text-[#1f1712]/70 max-w-2xl mt-4 leading-relaxed">
              Science, Technology, Engineering, Aerospace, and Mathematics. We develop hands-on modular kits, school hackathons, and immersive science labs that ignite curiosity and engineering discipline.
            </p>
          </div>

          <Link 
            to="/contact?pillar=Education" 
            className="px-6 py-3 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#1f1712] transition-all shadow-md self-start md:self-auto"
          >
            Request STEM Kit Catalog
          </Link>
        </div>

        {/* 4 STEAM Focus Tracks */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steamTracks.map((track, i) => (
            <div 
              key={i}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-[#1f1712]/10 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest font-black text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-6">
                  {track.badge}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#1f1712] mb-4">
                  {track.title}
                </h3>
                <p className="text-sm text-[#1f1712]/70 leading-relaxed mb-8">
                  {track.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1f1712]/10">
                  {track.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase font-bold text-[#1f1712]/60 px-3 py-1 rounded-lg bg-[#faf7f2] border border-[#1f1712]/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STEM Audience & Deployment */}
        <div className="p-8 rounded-3xl bg-[#faf7f2] border border-[#1f1712]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#1f1712]">Who We Partner With for STE(A)M</h4>
              <p className="text-xs text-[#1f1712]/60">Public & International Schools • STEM Centers • Universities • State Education Departments</p>
            </div>
          </div>
          <Link 
            to="/contact?pillar=Education" 
            className="text-xs uppercase tracking-widest font-black text-gold hover:text-[#1f1712] transition-colors whitespace-nowrap"
          >
            Schedule a School Tour Demo →
          </Link>
        </div>

      </section>

      {/* 5. SUB-SECTION: EDUCATION PROJECT REFERENCES */}
      <section id="references" className="py-24 px-6 bg-[#1f1712] text-paper border-t border-gold/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase tracking-widest text-gold mb-4">
                <BookOpen className="w-3.5 h-3.5 text-gold" />
                Track Record & Proof of Execution
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-paper leading-none">
                Education <span className="text-gold">Project References</span>
              </h2>
              <p className="text-sm sm:text-base text-paper/70 max-w-2xl mt-4 leading-relaxed">
                Explore our documented delivery track record across university partnerships, school innovation tours, and corporate trainer cohorts in Malaysia.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex p-1.5 rounded-full bg-white/5 border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'all' ? 'bg-gold text-white shadow-md' : 'text-paper/60 hover:text-white'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveTab('stem')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'stem' ? 'bg-gold text-white shadow-md' : 'text-paper/60 hover:text-white'
                }`}
              >
                STE(A)M
              </button>
              <button
                onClick={() => setActiveTab('ttt')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'ttt' ? 'bg-gold text-white shadow-md' : 'text-paper/60 hover:text-white'
                }`}
              >
                Train-the-Trainer
              </button>
            </div>
          </div>

          {/* Projects Grid */}
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
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{proj.year}</span>
                      <span className="text-[10px] uppercase tracking-wider text-paper/70 font-semibold">
                        {proj.type === 'ttt' ? 'TTT Certification' : 'STE(A)M Engagement'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-paper mb-3 group-hover:text-gold transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-paper/60 leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/5">
                      {proj.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span className="text-[11px] text-paper/80">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to="/contact?pillar=Education"
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-gold text-paper hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    Inquire Similar Program <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Verified Partner Institutions */}
          <div className="text-center pt-12 border-t border-white/10">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold block mb-6">
              Participating Institutions & Partners
            </span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {['Swinburne University', 'University Malaya', 'UniMAP', 'Universiti Malaysia Pahang', 'UiTM', 'HRD Corp Registered'].map((inst, i) => (
                <span key={i} className="text-sm md:text-lg font-black uppercase tracking-wider text-paper/80">
                  {inst}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-20 px-6 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 bg-gradient-to-r from-[#1f1712] via-[#2d1f16] to-[#1f1712] text-paper border border-gold/30 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gold mb-4 block">
              Partner With Our Education Division
            </span>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-paper mb-6 leading-tight">
              Ready to Upgrade Your Training or Deploy STEM at Your Campus?
            </h3>
            <p className="text-sm text-paper/70 leading-relaxed mb-8">
              Connect with our team to discuss HRD Corp levy claims, book custom in-house corporate Train-the-Trainer intakes, or arrange hands-on STEM student workshops.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact?pillar=Education"
                className="px-10 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20"
              >
                Inquire Now
              </Link>
              <Link 
                to="/engineering"
                className="px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all text-paper/80"
              >
                View Engineering Pillar →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
