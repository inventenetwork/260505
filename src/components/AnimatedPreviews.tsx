import React from 'react';
import { motion } from 'motion/react';

export const EngineeringPreview = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden rounded-xl bg-black/40 border border-white/5 mt-4 group">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Futuristic Grid/Interface Animation */}
        <div className="relative w-full h-full opacity-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gold/50"
              initial={{ width: 0, left: '50%', top: `${15 + i * 15}%` }}
              animate={{ 
                width: ['0%', '100%', '0%'],
                left: ['50%', '0%', '50%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px bg-gold/50"
              initial={{ height: 0, top: '50%', left: `${15 + i * 15}%` }}
              animate={{ 
                height: ['0%', '100%', '0%'],
                top: ['50%', '0%', '50%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4 + 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Abstract Tech Elements */}
        <div className="flex gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-gold/30 rounded-full border-t-gold flex items-center justify-center"
          >
            <div className="w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-gold rounded-full shadow-[0_0_8px_rgba(179,139,63,0.8)]"
              />
            </div>
          </motion.div>
          
          <div className="space-y-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`b-${i}`}
                initial={{ width: 0 }}
                animate={{ width: [0, 40, 20, 60, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                className="h-1 bg-gold/40 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle Scanline */}
      <motion.div
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-1 bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none"
      />
      
      {/* Expand on hover effect handled by parent but we add a local scale transition too */}
      <motion.div 
        className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
};

export const EducationPreview = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden rounded-xl bg-black/40 border border-white/5 mt-4 group">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Animated Illustration: Knowledge Network */}
        <svg className="w-48 h-24 overflow-visible" viewBox="0 0 200 100">
          {/* Connecting Lines */}
          <motion.path
            d="M 50 50 L 100 20 L 150 50 L 100 80 Z"
            fill="none"
            stroke="rgba(179,139,63,0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M 100 20 L 100 80 M 50 50 L 150 50"
            fill="none"
            stroke="rgba(179,139,63,0.1)"
            strokeWidth="1"
          />

          {/* Pulsing Nodes */}
          {[
            { x: 50, y: 50, delay: 0 },
            { x: 100, y: 20, delay: 0.5 },
            { x: 150, y: 50, delay: 1 },
            { x: 100, y: 80, delay: 1.5 },
            { x: 100, y: 50, delay: 0.75 }
          ].map((node, i) => (
            <g key={i}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="4"
                fill="#b38b3f"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
              />
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="8"
                fill="none"
                stroke="rgba(179,139,63,0.3)"
                strokeWidth="1"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
              />
            </g>
          ))}

          {/* Floating Leaves/Innovation Sparks */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={`spark-${i}`}
              r="1"
              fill="#b38b3f"
              initial={{ x: 100, y: 50, opacity: 0 }}
              animate={{ 
                x: 100 + (Math.random() - 0.5) * 100, 
                y: 50 + (Math.random() - 0.5) * 60,
                opacity: [0, 1, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
            />
          ))}
        </svg>

        {/* Central Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 bg-gold rounded-full blur-xl"
          />
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
};
