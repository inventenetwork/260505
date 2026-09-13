import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Briefcase, 
  BookOpen, 
  Brain, 
  Target,
  Sparkles,
  Building2,
  Presentation
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrainTheTrainer() {
  const coreCompetencies = [
    {
      icon: <Brain className="w-8 h-8 text-gold" />,
      title: "Adult Learning & Andragogy",
      desc: "Deep dive into adult learning psychology, motivational triggers, and learner-centered facilitation methods that drive active engagement."
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Training Needs Analysis (TNA)",
      desc: "Identify organizational skill gaps, conduct diagnostic assessments, and formulate measurable learning objectives aligned with business goals."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: "Instructional Design & Course Architecture",
      desc: "Structure impactful, modular curricula with practical activities, microlearning modules, and experiential exercises."
    },
    {
      icon: <Presentation className="w-8 h-8 text-gold" />,
      title: "High-Impact Delivery & Facilitation",
      desc: "Master dynamic vocal delivery, room management, non-verbal cues, and real-time handling of challenging participants."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: "EdTech & AI Integration in Training",
      desc: "Harness modern generative AI tools, interactive digital whiteboards, and blended learning techniques to 10x classroom retention."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      title: "Evaluation & Kirkpatrick Framework",
      desc: "Implement rigorous post-training evaluations, tracking knowledge retention, behavioral shift, and tangible return on investment (ROI)."
    }
  ];

  const targetAudiences = [
    {
      title: "Corporate Trainers & HR Professionals",
      desc: "Upskill internal training teams to deliver structured, results-oriented employee development programs."
    },
    {
      title: "Educators, Lecturers & Teachers",
      desc: "Transition from traditional instructional teaching to modern, student-centric, and tech-enabled facilitation."
    },
    {
      title: "TVET & Technical Instructors",
      desc: "Transform complex engineering and STEM technical knowledge into digestible, hands-on masterclasses."
    },
    {
      title: "Subject Matter Experts (SMEs)",
      desc: "Turn years of industry domain expertise into commercially viable, high-demand training courses."
    }
  ];

  return (
    <div className="bg-[#1f1712] text-[#f5f2ed] min-h-screen pt-32 pb-24 selection:bg-gold/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Breadcrumb */}
        <Link 
          to="/education" 
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gold hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Education Pillar
        </Link>
        
        {/* Hero Header */}
        <header className="relative mb-24">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Official Credential Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold/50 bg-gold/10 backdrop-blur-md">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gold">
                HRD Corp Certified Trainer
              </span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-paper/70">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              HRD Corp Claimable
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tight text-paper mb-6 leading-none"
          >
            Train the <span className="text-gold">Trainer</span> (TTT).
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#f5f2ed]/70 max-w-3xl leading-relaxed mb-8"
          >
            Led by an accredited <strong>HRD Corp Certified Trainer</strong>, our Train the Trainer programs equip educators, corporate trainers, and technical leaders with world-class adult learning methodologies, AI-empowered facilitation tools, and certified instructional mastery.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-lg shadow-gold/20"
            >
              Request Training Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="#curriculum"
              className="px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all"
            >
              Explore Core Modules
            </a>
          </div>
        </header>

        {/* HRD Corp Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-gradient-to-r from-black/80 via-[#2d2017] to-black/80 border border-gold/30 p-8 md:p-12 mb-32 overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-gold" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Corporate & Institutional Enablement</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-paper mb-4">
                Elevate Your Workforce with HRD Corp Accredited Excellence
              </h2>
              <p className="text-sm text-paper/70 leading-relaxed max-w-2xl">
                Organizations registered under HRD Corp (Human Resource Development Corporation Malaysia) can maximize their training levy with our customized, high-impact Train the Trainer workshops. We combine rigorous pedagogy with real-world engineering and tech industry pragmatism.
              </p>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs uppercase tracking-wider font-bold text-paper">HRD Corp Levy Claimable</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs uppercase tracking-wider font-bold text-paper">Certified Competency Framework</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs uppercase tracking-wider font-bold text-paper">Practical Mock-Teach Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs uppercase tracking-wider font-bold text-paper">Customizable In-House Cohorts</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Curriculum Grid */}
        <section id="curriculum" className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Comprehensive Syllabus</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-paper">
              The 6 Pillars of Trainer Mastery
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCompetencies.map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-gold/40 hover:bg-white/[0.07] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {comp.icon}
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-paper mb-3">{comp.title}</h4>
                  <p className="text-xs text-paper/60 leading-relaxed">{comp.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-gold font-bold">
                  <span>Module 0{i + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">Certified Unit →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Who Should Attend</h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-paper mb-8 leading-tight">
                Designed for Catalysts of Learning & Leadership.
              </h3>
              <p className="text-sm text-paper/60 leading-relaxed mb-8">
                Whether you lead internal corporate training, mentor engineering teams, or lecture in universities, this certification builds the foundational muscle to facilitate with authority, empathy, and measurable impact.
              </p>
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-paper">Direct Trainer Access</h5>
                  <p className="text-[11px] text-paper/50">Personalized feedback, micro-teaching reviews, and post-workshop advisory.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {targetAudiences.map((aud, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-paper mb-1">{aud.title}</h4>
                      <p className="text-xs text-paper/50 leading-relaxed">{aud.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Your Trainer */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center p-12 rounded-[2.5rem] bg-white/5 border border-white/10">
            <div className="lg:col-span-8">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Meet Your Trainer</h3>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-paper mb-6">
                Ts. Billy Sia Kee Haan
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-gold mb-6">
                Professional Technologist (MBOT) | HRD Corp Certified Trainer
              </p>
              <p className="text-sm text-paper/70 leading-relaxed mb-6">
                Ts. Billy Sia Kee Haan is a Professional Technologist registered with the Malaysia Board of Technologists (MBOT). With over 15 years of industry experience across the APAC & EMEA regions, Ts. Billy specializes in enterprise solutions spanning Operational Technology (OT), Industrial IoT (IIoT), AI/ML analytics, and critical infrastructure cyber-resilience.
              </p>
              <p className="text-sm text-paper/70 leading-relaxed">
                As a certified corporate trainer, Ts. Billy bridges advanced technical architectures with practical workplace execution. He specializes in upskilling technical, operational, and corporate management teams in Industrial IoT condition monitoring, AI integration for workflow optimization, smart energy systems, and root-cause engineering problem-solving.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Users className="w-20 h-20 text-gold" />
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center py-20 px-8 rounded-[3rem] bg-gradient-to-b from-white/5 to-black border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-[10px] uppercase tracking-widest text-gold font-bold mb-6">
              <Award className="w-3.5 h-3.5" /> HRD Corp Certified Trainer
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-paper mb-6">
              Ready to Upgrade Your Training Capabilities?
            </h3>
            <p className="text-sm text-paper/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Contact us today to receive our detailed course outline, schedule an in-house corporate session, or discuss HRD Corp claim arrangements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-gold/20"
              >
                Inquire for Next Intake
              </Link>
              <Link 
                to="/education" 
                className="px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:border-white transition-all text-paper/80"
              >
                View Education Pillar
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
