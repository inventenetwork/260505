import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface PillarCardProps {
  pillarNumber: string;
  pillarName: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeIcon?: React.ReactNode;
  highlights: string[];
  link: string;
  linkText?: string;
  accentColor?: 'gold' | 'amber';
  theme?: 'dark' | 'light';
  subLinks?: { name: string; path: string }[];
}

export default function PillarCard({
  pillarNumber,
  pillarName,
  title,
  subtitle,
  description,
  badge,
  badgeIcon,
  highlights,
  link,
  linkText = "Explore Pillar",
  theme = 'light',
  subLinks = []
}: PillarCardProps) {
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-[2rem] p-10 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group",
        isLight 
          ? "bg-[#f5f5f7]" 
          : "bg-[#161617] text-white"
      )}
    >
      <div>
        {/* Top Header info */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <span className={cn(
            "text-xs font-semibold tracking-wide",
            isLight ? "text-black/60" : "text-white/60"
          )}>
            {pillarName}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn(
          "text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight",
          isLight ? "text-black" : "text-white"
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className={cn(
          "text-base leading-relaxed mb-8",
          isLight ? "text-black/70" : "text-white/70"
        )}>
          {description}
        </p>

        {/* Highlights */}
        <div className="space-y-4 mb-10">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className={cn("w-5 h-5 shrink-0", isLight ? "text-black" : "text-white")} />
              <span className={cn(
                "text-sm",
                isLight ? "text-black/80" : "text-white/80"
              )}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Primary CTA */}
      <Link
        to={link}
        className={cn(
          "text-base font-medium flex items-center gap-2",
          isLight ? "text-[#0066cc] hover:text-[#004a99]" : "text-[#2997ff] hover:text-[#51aaff]"
        )}
      >
        <span>{linkText}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
