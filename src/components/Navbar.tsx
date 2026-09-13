import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Education', 
      path: '/education',
      dropdown: [
        { name: 'Train-the-Trainer (TTT)', path: '/education#ttt' },
        { name: 'STE(A)M Education', path: '/education#stem' },
        { name: 'Education Project References', path: '/education#references' },
      ]
    },
    { 
      name: 'Engineering', 
      path: '/engineering',
      dropdown: [
        { name: 'M&E (Mechanical & Electrical)', path: '/engineering#me' },
        { name: 'ICT (Info & Comms Tech)', path: '/engineering#ict' },
        { name: 'Smart IoT', path: '/engineering#blyten' },
        { name: 'Software & App Dev', path: '/engineering#blynd' },
        { name: 'Engineering Project References', path: '/engineering#references' },
      ]
    },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-3 border-b",
      scrolled ? "bg-black/70 backdrop-blur-lg border-white/10" : "bg-transparent border-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo showTagline={false} className="items-center" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  (location.pathname === link.path || 
                   (link.path === '/engineering' && location.pathname === '/products') ||
                   link.dropdown?.some(sub => sub.path === location.pathname))
                    ? "text-white" 
                    : "text-white/60"
                )}
              >
                {link.name}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[#1f1712]/90 border border-white/10 rounded-2xl p-6 backdrop-blur-xl w-64 shadow-2xl">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link 
            to="/contact"
            className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-xs uppercase tracking-widest font-bold text-[#f5f2ed]"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-4 ml-4 flex flex-col gap-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="text-[10px] uppercase tracking-widest text-[#f5f2ed]/50"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
