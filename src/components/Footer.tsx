import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-[#f5f2ed] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Logo className="items-start mb-8" />
            <p className="text-xs text-[#f5f2ed]/50 leading-relaxed uppercase tracking-widest font-medium mb-8">
              ideas.engineered. Empowering innovation through Education, Smart IoT, and Experiential Tourism.
            </p>
            <div className="flex flex-col gap-4 text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40">
              <p className="hover:text-[#b38b3f] transition-colors">hello@inventenetwork.com</p>
              <p className="hover:text-[#b38b3f] transition-colors">+60 11 4035 1391</p>
              <p className="leading-relaxed">
                Level 15, DPulze Cyberjaya, <br />
                Lingkaran Cyber Point Timur, Cyber 12, <br />
                63000 Cyberjaya, Selangor
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b38b3f] mb-8">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'Products & Services', 'About', 'Contact'].map((link) => (
                <Link 
                  key={link} 
                  to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' & ', '-')}`}
                  className="text-[10px] uppercase tracking-widest text-[#f5f2ed]/60 hover:text-[#b38b3f] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b38b3f] mb-8">Connect</h4>
            <div className="flex gap-6 mb-8">
              <a href="https://www.facebook.com/inventenetwork/" target="_blank" rel="noopener noreferrer" className="text-[#f5f2ed]/40 hover:text-[#b38b3f] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/inventenetwork/" target="_blank" rel="noopener noreferrer" className="text-[#f5f2ed]/40 hover:text-[#b38b3f] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@inventenetwork?si=-9KqeLL8xy5_COWV" target="_blank" rel="noopener noreferrer" className="text-[#f5f2ed]/40 hover:text-[#b38b3f] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b38b3f] mb-6">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-[10px] uppercase tracking-widest focus:outline-none focus:border-[#b38b3f] transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#b38b3f] rounded-full flex items-center justify-center hover:bg-[#cdaa6d] transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b38b3f] mb-8">Legal</h4>
            <div className="flex flex-col gap-4">
              <Link 
                to="/privacy-policy"
                className="text-[10px] uppercase tracking-widest text-[#f5f2ed]/60 hover:text-[#b38b3f] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-conditions"
                className="text-[10px] uppercase tracking-widest text-[#f5f2ed]/60 hover:text-[#b38b3f] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <div className="text-[10px] uppercase tracking-[0.3em] font-brand font-black text-[#f5f2ed]/30">
            © 2026 Inventé Network. All rights reserved.
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-brand font-black text-[#f5f2ed]/30">
            ideas.engineered.
          </div>
        </div>
      </div>
    </footer>
  );
}
