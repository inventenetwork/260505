import React from 'react';
import { cn } from '../lib/utils';

interface BlytenAsteriskProps {
  className?: string;
}

export default function BlytenAsterisk({ className }: BlytenAsteriskProps) {
  return (
    <div className={cn("relative -mb-4 md:-mb-8", className)}>
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24 fill-[#fcc419]">
        {/* 6-pointed asterisk/star */}
        <rect x="42" y="10" width="16" height="80" rx="8" />
        <rect x="42" y="10" width="16" height="80" rx="8" transform="rotate(60 50 50)" />
        <rect x="42" y="10" width="16" height="80" rx="8" transform="rotate(120 50 50)" />
      </svg>
    </div>
  );
}
