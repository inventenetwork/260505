import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Loader2, MessageCircle, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedSubject, setSelectedSubject] = useState('General Inquiry');

  useEffect(() => {
    const pillar = searchParams.get('pillar');
    if (pillar === 'Education') {
      setSelectedSubject('Education: Train the Trainer (TTT HRD Corp)');
    } else if (pillar === 'Engineering') {
      setSelectedSubject('Engineering: M&E or ICT Infrastructure');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx6zzAjjWK_KpIGmv3O2iGyBdBNEw656jZKh3cI6p_idHsduXMNKokDkXrdSqSz4f5_/exec"; 

    try {
      await Promise.all([
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
        fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        })
      ]);
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#faf7f2] text-[#1f1712] min-h-screen">
      
      {/* Hero Header (Dark Brown Anchor) */}
      <section className="bg-[#1f1712] text-[#f5f2ed] pt-36 pb-20 px-6 border-b border-gold/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gold">
              Get in Touch
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-paper leading-[1.05] mb-6">
            Let's Engineer <br />
            <span className="text-gold">Your Next Project.</span>
          </h1>

          <p className="text-base sm:text-lg text-paper/75 max-w-2xl leading-relaxed">
            Whether you are commissioning corporate Train-the-Trainer workshops, procuring STEM learning kits, planning M&E installations, or integrating Smart IoT systems, our engineering team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-[#1f1712]/10 shadow-lg">
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#1f1712] mb-2 flex items-center gap-3">
                <MessageSquare className="text-gold w-6 h-6" /> Send Us an Inquiry
              </h3>
              <p className="text-xs text-[#1f1712]/60 mb-8">
                Complete the details below. Our team in Cyberjaya will review and reply within 1 business day.
              </p>

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1f1712]/60">Full Name *</label>
                    <input 
                      type="text" 
                      name="Full_Name" 
                      required
                      placeholder="e.g. Ahmad Razif" 
                      className="bg-[#faf7f2] border border-[#1f1712]/15 rounded-xl px-4 py-3.5 text-xs text-[#1f1712] focus:outline-none focus:border-gold transition-colors placeholder:text-[#1f1712]/30 font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1f1712]/60">Email Address *</label>
                    <input 
                      type="email" 
                      name="Email" 
                      required
                      placeholder="e.g. ahmad@company.com" 
                      className="bg-[#faf7f2] border border-[#1f1712]/15 rounded-xl px-4 py-3.5 text-xs text-[#1f1712] focus:outline-none focus:border-gold transition-colors placeholder:text-[#1f1712]/30 font-medium"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1f1712]/60">Contact / Phone Number</label>
                    <input 
                      type="tel" 
                      name="Phone" 
                      placeholder="e.g. +60 12 345 6789" 
                      className="bg-[#faf7f2] border border-[#1f1712]/15 rounded-xl px-4 py-3.5 text-xs text-[#1f1712] focus:outline-none focus:border-gold transition-colors placeholder:text-[#1f1712]/30 font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1f1712]/60">Organization / Company</label>
                    <input 
                      type="text" 
                      name="Company" 
                      placeholder="e.g. University / Enterprise Sdn Bhd" 
                      className="bg-[#faf7f2] border border-[#1f1712]/15 rounded-xl px-4 py-3.5 text-xs text-[#1f1712] focus:outline-none focus:border-gold transition-colors placeholder:text-[#1f1712]/30 font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-[#1f1712]/60">Inquiry Pillar / Subject *</label>
                  <select 
                    name="Subject"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="bg-[#faf7f2] border border-[#1f1712]/15 rounded-xl px-4 py-3.5 text-xs text-[#1f1712] focus:outline-none focus:border-gold transition-colors font-medium cursor-pointer"
                  >
                    <optgroup label="Pillar 01 — Education">
                      <option value="Education: Train the Trainer (TTT HRD Corp)">Train the Trainer (TTT HRD Corp Claimable)</option>
                      <option value="Education: STE(A)M Programs & Kits">STE(A)M Education, Workshops & Labs</option>
                    </optgroup>
                    <optgroup label="Pillar 02 — Engineering">
                      <option value="Engineering: M&E or ICT Infrastructure">Mechanical & Electrical (M&E) / ICT Infrastructure</option>
                      <option value="Engineering: Smart IoT">Smart IoT (Farming / Home / Office)</option>
                      <option value="Engineering: Software & App Development">Software & App Development</option>
                    </optgroup>
                    <optgroup label="General">
                      <option value="General Inquiry">General Consultation & Partnership</option>
                    </optgroup>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-[#1f1712]/60">Project Scope or Message *</label>
                  <textarea 
                    name="Message" 
                    rows={4} 
                    required
                    placeholder="Tell us about your requirements, timeline, or training cohort size..." 
                    className="bg-[#faf7f2] border border-[#1f1712]/15 rounded-xl px-4 py-3.5 text-xs text-[#1f1712] focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-[#1f1712]/30 font-medium"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 w-full sm:w-auto px-10 py-4 bg-[#1f1712] text-paper text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-3 hover:bg-gold hover:text-white transition-all disabled:opacity-50 shadow-md"
                >
                  {status === 'submitting' ? (
                    <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : status === 'success' ? (
                    <>Inquiry Received <CheckCircle2 className="w-4 h-4 text-white" /></>
                  ) : (
                    <>Submit Inquiry <Send className="w-4 h-4" /></>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                    Thank you! Your inquiry has been submitted. Our team will contact you shortly.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                    Submission notice: System recorded your request. Feel free to contact us on WhatsApp directly for immediate response.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-[#1f1712] text-paper border border-gold/30 shadow-xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gold mb-6 block">
                Direct Channels
              </span>

              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-paper/50 font-bold block mb-1">Email Inquiries</span>
                    <a href="mailto:hello@inventenetwork.com" className="text-xs sm:text-sm font-bold text-paper hover:text-gold transition-colors">
                      hello@inventenetwork.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-paper/50 font-bold block mb-1">Direct Call</span>
                    <a href="tel:+601140351391" className="text-xs sm:text-sm font-bold text-paper hover:text-gold transition-colors">
                      +60 11 4035 1391
                    </a>
                  </div>
                </div>

                <div 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-all cursor-pointer"
                  onClick={() => window.open('https://wa.me/601140351391?text=Hello%20Invent%C3%A9%20Network!%20I%20would%20like%20to%20know%20more%20about%20your%20services.', '_blank')}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">Fast Response WhatsApp</span>
                    <span className="text-xs font-bold text-white block">
                      Chat with Inventé Engineers →
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-paper/50 font-bold block mb-1">HQ Location</span>
                    <p className="text-xs text-paper/80 leading-relaxed font-medium">
                      Level 15, DPulze Cyberjaya, <br />
                      Lingkaran Cyber Point Timur, Cyber 12, <br />
                      63000 Cyberjaya, Selangor, Malaysia
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Two Pillars Summary Box */}
            <div className="p-6 rounded-3xl bg-white border border-[#1f1712]/10">
              <span className="text-[10px] uppercase tracking-widest font-black text-[#8a6828] mb-3 block">
                Two Pillars Verification
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#1f1712]/5">
                  <Award className="w-4 h-4 text-gold mb-1" />
                  <span className="font-bold block text-[#1f1712]">Education</span>
                  <span className="text-[10px] text-[#1f1712]/60">HRD Corp TTT & STEM</span>
                </div>
                <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#1f1712]/5">
                  <ShieldCheck className="w-4 h-4 text-gold mb-1" />
                  <span className="font-bold block text-[#1f1712]">Engineering</span>
                  <span className="text-[10px] text-[#1f1712]/60">M&E, ICT & Smart Systems</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
