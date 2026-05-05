import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className, showTagline = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: {
      text: 'text-lg',
      tagline: 'text-[6px]',
      mt: 'mt-0.5',
      negativeMargin: '-mt-1.5'
    },
    md: {
      text: 'text-2xl',
      tagline: 'text-[8px]',
      mt: 'mt-1',
      negativeMargin: '-mt-2.5'
    },
    lg: {
      text: 'text-4xl md:text-6xl',
      tagline: 'text-xs md:text-sm',
      mt: 'mt-2',
      negativeMargin: '-mt-4 md:-mt-6'
    },
    xl: {
      text: 'text-6xl md:text-9xl',
      tagline: 'text-xs md:text-sm',
      mt: 'mt-3',
      negativeMargin: '-mt-6 md:-mt-12'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <Link to="/" className={cn("flex flex-col group", className)}>
      <div className="flex flex-col">
        <span className={cn("font-brand font-black text-[#b38b3f] leading-none lowercase tracking-tighter group-hover:opacity-80 transition-opacity", currentSize.text)}>
          inventé
        </span>
        <span className={cn("font-brand font-black text-[#f5f2ed] leading-none tracking-tighter group-hover:opacity-80 transition-opacity", currentSize.negativeMargin, currentSize.text)}>
          Network
        </span>
        {showTagline && (
          <span className={cn("font-brand font-black text-white lowercase tracking-[0.2em] group-hover:opacity-80 transition-opacity", currentSize.tagline, currentSize.mt)}>
            ideas.engineered
          </span>
        )}
      </div>
    </Link>
  );
}
