import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-[#f5f2ed] font-sans selection:bg-[#b38b3f]/30">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
