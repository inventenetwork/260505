import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBubble() {
  const phoneNumber = '601140351391';
  const message = 'Hello Inventé Network! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-auto">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/20 hover:bg-[#20ba5a] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
