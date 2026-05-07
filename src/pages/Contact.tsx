import React, { useState } from 'react'; // Added useState
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Loader2, MessageCircle } from 'lucide-react';

export default function Contact() {
  // 1. Create the state for form data
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // REPLACE THIS URL with your Google Apps Script Web App URL (the one ending in /exec)
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
    <div className="pt-32 pb-24 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-black text-[#f5f2ed] uppercase tracking-tighter leading-none mb-8">
            Get in <span className="text-[#b38b3f]">Touch</span>.
          </h1>
          <p className="text-lg text-[#f5f2ed]/60 max-w-3xl leading-relaxed">
            Whether you're looking for a consultation, interested in our programs, or want to explore a partnership, we're here to help you engineer your next big idea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 border border-white/10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-[#f5f2ed] mb-12 uppercase tracking-tight flex items-center gap-4">
              <MessageSquare className="text-[#b38b3f]" /> Send a Message
            </h3>
            
            {/* 2. Added onSubmit handler */}
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40">Full Name</label>
                  <input 
                    type="text" 
                    name="Full_Name" // Added name
                    required
                    placeholder="YOUR NAME" 
                    className="bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-[#b38b3f] transition-colors text-white"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40">Email Address</label>
                  <input 
                    type="email" 
                    name="Email" // Added name
                    required
                    placeholder="YOUR EMAIL" 
                    className="bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-[#b38b3f] transition-colors text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40">Subject</label>
                <select 
                  name="Subject" // Added name
                  className="bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-[#b38b3f] transition-colors appearance-none text-white"
                >
                  <option className="bg-black" value="General Inquiry">GENERAL INQUIRY</option>
                  <option className="bg-black" value="Blyten Consultation">BLYTEN CONSULTATION</option>
                  <option className="bg-black" value="STEM Education">STEM EDUCATION</option>
                  <option className="bg-black" value="Blynd Experience">BLYND EXPERIENCE</option>
                  <option className="bg-black" value="Partnership">PARTNERSHIP</option>
                </select>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40">Message</label>
                <textarea 
                  name="Message" // Added name
                  rows={4} 
                  required
                  placeholder="YOUR MESSAGE" 
                  className="bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-[#b38b3f] transition-colors resize-none text-white"
                />
              </div>

              {/* 3. Added status feedback to button */}
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="mt-8 px-12 py-6 bg-[#b38b3f] text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-3 hover:bg-[#cdaa6d] transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info (Remains the same as your code) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-16"
          >
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f] mb-12">Contact Information</h3>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b38b3f] group-hover:bg-[#b38b3f]/10 transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40 mb-2">Email</h4>
                    <p className="text-sm font-bold text-[#f5f2ed] tracking-widest">HELLO@INVENTENETWORK.COM</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b38b3f] group-hover:bg-[#b38b3f]/10 transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40 mb-2">Phone</h4>
                    <p className="text-sm font-bold text-[#f5f2ed] tracking-widest">+60 11 4035 1391</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open('https://wa.me/601140351391?text=Hello%20Invent%C3%A9%20Network!%20I%20would%20like%20to%20know%20more%20about%20your%20services.', '_blank')}>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/10 transition-all duration-500">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40 mb-2">WhatsApp</h4>
                    <p className="text-sm font-bold text-[#f5f2ed] tracking-widest uppercase">Chat with us</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b38b3f] group-hover:bg-[#b38b3f]/10 transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40 mb-2">Location</h4>
                    <p className="text-sm font-bold text-[#f5f2ed] tracking-widest uppercase leading-relaxed">
                      Level 15, DPulze Cyberjaya, <br />
                      Lingkaran Cyber Point Timur, Cyber 12, <br />
                      63000 Cyberjaya, Selangor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map"
                className="w-full h-full object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#b38b3f]">
                  <Globe className="inline-block mr-2 w-3 h-3" /> View on Google Maps
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}