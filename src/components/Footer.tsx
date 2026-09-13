import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, ArrowRight, Award, Zap, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#1f1712] text-[#f5f2ed] pt-24 pb-12 px-6 border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-4">
            <Logo className="items-start mb-6" showTagline={true} />
            <p className="text-xs text-[#f5f2ed]/60 leading-relaxed uppercase tracking-wider font-medium mb-6">
              ideas.engineered. Malaysia-based innovation & engineering group. Structured into two core pillars: Education & Engineering.
            </p>
            <div className="flex flex-col gap-2 text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/45">
              <p className="hover:text-gold transition-colors">hello@inventenetwork.com</p>
              <p className="hover:text-gold transition-colors">+60 11 4035 1391</p>
              <p className="leading-relaxed mt-2 text-[#f5f2ed]/60">
                Level 15, DPulze Cyberjaya, <br />
                Lingkaran Cyber Point Timur, Cyber 12, <br />
                63000 Cyberjaya, Selangor, Malaysia
              </p>
            </div>
          </div>

          {/* Pillar 01: Education */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-gold">
                Pillar 01 — Education
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/education" className="text-xs uppercase tracking-wider font-bold text-paper hover:text-gold transition-colors">
                Education Overview
              </Link>
              <Link to="/education#ttt" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors flex items-center justify-between">
                <span>Train the Trainer (TTT)</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold/15 text-gold">HRD Corp</span>
              </Link>
              <Link to="/education#stem" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">
                STE(A)M Education & Kits
              </Link>
              <Link to="/education#references" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">
                Education References
              </Link>
            </div>
          </div>

          {/* Pillar 02: Engineering */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-gold">
                Pillar 02 — Engineering
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/engineering" className="text-xs uppercase tracking-wider font-bold text-paper hover:text-gold transition-colors">
                Engineering Overview
              </Link>
              <Link to="/engineering#me" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">
                Mechanical & Electrical (M&E)
              </Link>
              <Link to="/engineering#ict" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">
                ICT Services & Networks
              </Link>
              <Link to="/engineering#iot" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors flex items-center justify-between">
                <span>Smart IoT</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold/15 text-gold">IoT</span>
              </Link>
              <Link to="/engineering#software" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">
                Software & Apps
              </Link>
              <Link to="/engineering#references" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">
                Engineering References
              </Link>
            </div>
          </div>

          {/* Company & Connect */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-gold mb-6">
              Company
            </h4>
            <div className="flex flex-col gap-3 mb-8">
              <Link to="/about" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">About Us</Link>
              <Link to="/contact" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">Contact Us</Link>
              <Link to="/privacy-policy" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="text-[11px] uppercase tracking-wider text-[#f5f2ed]/60 hover:text-gold transition-colors">Terms & Conditions</Link>
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/inventenetwork/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#f5f2ed]/60 hover:bg-gold hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/inventenetwork/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#f5f2ed]/60 hover:bg-gold hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@inventenetwork?si=-9KqeLL8xy5_COWV" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#f5f2ed]/60 hover:bg-gold hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4 text-[10px] uppercase tracking-[0.25em] text-[#f5f2ed]/40">
          <div>
            © 2020 – 2026 Inventé Network Sdn. Bhd. All rights reserved.
          </div>
          <div className="text-gold font-bold">
            ideas.engineered.
          </div>
        </div>
      </div>
    </footer>
  );
}
