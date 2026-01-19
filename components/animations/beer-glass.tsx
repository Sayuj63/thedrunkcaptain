'use client';

import { useMemo } from 'react';

interface BeerGlassProps {
  fillPercentage: number;
  className?: string;
}

export default function BeerGlass({ fillPercentage, className = '' }: BeerGlassProps) {
  const fillHeight = useMemo(() => (fillPercentage / 100) * 400, [fillPercentage]);

  const foamBubbles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => {
        const offset = (i - 3.5) * 16;
        const yOffset = Math.abs(offset) * 0.25;
        const r = 5 + ((i * 7) % 4);
        const opacity = 0.85 - Math.abs(offset) * 0.01;
        return { id: i, offset, yOffset, r, opacity };
      }),
    []
  );

  return (
    <svg
      viewBox="0 0 300 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="beerGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#f4d03f" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffeb99" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="foamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fffef7" stopOpacity="1" />
          <stop offset="50%" stopColor="#fff8dc" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffe4b5" stopOpacity="0.9" />
        </linearGradient>
        <filter id="glassShine">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="glassClip">
          <path d="M 80 50 L 100 450 Q 150 470 200 450 L 220 50 Z" />
        </clipPath>
      </defs>

      {/* Glass outline */}
      <path
        d="M 80 50 L 100 450 Q 150 470 200 450 L 220 50 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="3"
        filter="url(#glassShine)"
      />
      
      {/* Glass body with slight transparency */}
      <path
        d="M 80 50 L 100 450 Q 150 470 200 450 L 220 50 Z"
        fill="rgba(255, 255, 255, 0.05)"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="2"
      />

      {/* Beer liquid */}
      <g clipPath="url(#glassClip)">
        <rect
          x="80"
          y={450 - fillHeight}
          width="140"
          height={fillHeight}
          fill="url(#beerGradient)"
          opacity="0.95"
        />
        
        {/* Liquid wobble effect - subtle wave */}
        {fillPercentage > 5 && (
          <path
            d={`M 80 ${450 - fillHeight} Q 130 ${450 - fillHeight - 5} 180 ${450 - fillHeight} T 280 ${450 - fillHeight}`}
            fill="url(#beerGradient)"
            opacity="0.6"
          />
        )}
      </g>

      {/* Foam layer */}
      {fillPercentage > 70 && (
        <g clipPath="url(#glassClip)">
          <ellipse
            cx="150"
            cy={450 - fillHeight}
            rx="60"
            ry="20"
            fill="url(#foamGradient)"
            opacity="0.9"
          />
          
          {/* Foam bubbles */}
          {foamBubbles.map((bubble) => (
            <circle
              key={bubble.id}
              cx={150 + bubble.offset}
              cy={450 - fillHeight - 10 + bubble.yOffset}
              r={bubble.r}
              fill="url(#foamGradient)"
              opacity={bubble.opacity}
            />
          ))}
        </g>
      )}

      {/* Glass highlights */}
      <path
        d="M 85 60 L 95 400"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 215 60 L 205 400"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Handle */}
      <path
        d="M 220 150 Q 260 200 220 250"
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="8"
        strokeLinecap="round"
        filter="url(#glassShine)"
      />
      <path
        d="M 220 150 Q 260 200 220 250"
        fill="none"
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="4"
      />
    </svg>
  );
}
