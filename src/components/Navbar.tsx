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
      name: 'Products & Services', 
      path: '/products',
      dropdown: [
        { name: 'Engineering Products', path: '/engineering-products' },
        { name: 'IT & Network Products', path: '/network-it-products' },
        { name: 'Professional Services', path: '/professional-services' },
      ]
    },
    { 
      name: 'Education', 
      path: '/education',
      dropdown: [
        { name: 'STEM Education', path: '/stem-education' },
        { name: 'Educate the Educator', path: '/educate-the-educator' },
        { name: 'Technical Courses', path: '/technical-courses' },
      ]
    },
    { name: 'Project References', path: '/project-references' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 border-b",
      scrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"
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
                  "text-[10px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-[#b38b3f]",
                  location.pathname === link.path ? "text-[#b38b3f]" : "text-[#f5f2ed]/70"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="inline-block ml-1 w-3 h-3" />}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black/90 border border-white/10 rounded-xl p-4 backdrop-blur-xl">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block py-2 text-[10px] uppercase tracking-widest text-[#f5f2ed]/60 hover:text-[#b38b3f] transition-colors whitespace-nowrap"
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
            className="px-6 py-2 bg-[#b38b3f] text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-[#cdaa6d] transition-colors"
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
