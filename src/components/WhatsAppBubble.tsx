import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBubble() {
  const phoneNumber = '601140351391';
  const message = 'Hello Inventé Network! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 h-[120px] w-[200px] pointer-events-none">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="bg-white text-black px-4 py-2 rounded-2xl rounded-br-none shadow-xl text-[10px] font-bold whitespace-nowrap uppercase tracking-widest pointer-events-auto"
      >
        Hello! How can we help?
      </motion.div>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/40 hover:bg-[#20ba5a] transition-colors pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[#25D366] text-[10px] font-bold items-center justify-center">1</span>
        </span>
      </motion.a>
    </div>
  );
}
