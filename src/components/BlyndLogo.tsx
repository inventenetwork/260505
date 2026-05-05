import React from 'react';
import { cn } from '../lib/utils';

interface BlyndLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  taglineClassName?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function BlyndLogo({ 
  className, 
  iconClassName, 
  textClassName, 
  taglineClassName,
  showTagline = true,
  size = 'md' 
}: BlyndLogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-12 h-12',
      text: 'text-2xl',
      tagline: 'text-[8px]',
      gap: 'gap-1',
      negMargin: '-mb-2'
    },
    md: {
      icon: 'w-20 h-20',
      text: 'text-4xl',
      tagline: 'text-[10px]',
      gap: 'gap-2',
      negMargin: '-mb-4'
    },
    lg: {
      icon: 'w-32 h-32',
      text: 'text-6xl md:text-7xl',
      tagline: 'text-xs md:text-sm',
      gap: 'gap-3',
      negMargin: '-mb-6'
    },
    xl: {
      icon: 'w-48 h-48',
      text: 'text-8xl md:text-[10rem]',
      tagline: 'text-sm md:text-xl',
      gap: 'gap-4',
      negMargin: '-mb-8'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Stylized Two Paper Planes Logo */}
      <div className={cn("relative", currentSize.negMargin, currentSize.icon, iconClassName)}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          {/* Top Paper Plane (Flying Up-Right) - Shifted up to center */}
          <path 
            d="M42 43 L85 10 L72 43 L60 37 Z" 
            fill="#EAB308" 
          />
          {/* Bottom Paper Plane (Flying Down-Left) - Shifted up to center */}
          <path 
            d="M58 47 L15 80 L28 47 L40 53 Z" 
            fill="#EAB308" 
          />
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <h2 className={cn(
          "font-brand font-black text-white uppercase tracking-tight leading-none", 
          currentSize.text, 
          textClassName
        )}>
          BLYND
        </h2>
        {showTagline && (
          <p className={cn(
            "font-brand font-black text-[#f5f2ed]/60 lowercase tracking-tight mt-2", 
            currentSize.tagline, 
            taglineClassName
          )}>
            travel.unscripted
          </p>
        )}
      </div>
    </div>
  );
}
