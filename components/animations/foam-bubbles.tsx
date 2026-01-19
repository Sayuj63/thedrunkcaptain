'use client';

import { useMemo } from 'react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

interface FoamBubblesProps {
  isActive: boolean;
  fillPercentage: number;
}

// Pre-computed pseudo-random values for deterministic but varied bubbles
const BUBBLE_PATTERNS: Omit<Bubble, 'id'>[] = [
  { x: 25, size: 4.5, delay: 0.3, duration: 2.8 },
  { x: 45, size: 6.2, delay: 0.8, duration: 3.1 },
  { x: 65, size: 5.1, delay: 0.2, duration: 2.4 },
  { x: 35, size: 4.8, delay: 1.1, duration: 3.4 },
  { x: 55, size: 5.7, delay: 0.5, duration: 2.6 },
  { x: 75, size: 4.2, delay: 0.9, duration: 2.9 },
  { x: 30, size: 5.4, delay: 0.1, duration: 3.2 },
  { x: 60, size: 4.9, delay: 1.3, duration: 2.5 },
  { x: 50, size: 6.0, delay: 0.6, duration: 2.7 },
  { x: 70, size: 4.6, delay: 0.4, duration: 3.0 },
  { x: 40, size: 5.3, delay: 1.0, duration: 2.3 },
  { x: 58, size: 4.7, delay: 0.7, duration: 3.3 },
  { x: 38, size: 5.9, delay: 1.2, duration: 2.8 },
  { x: 68, size: 4.4, delay: 0.3, duration: 2.5 },
  { x: 48, size: 5.6, delay: 0.9, duration: 3.1 },
];

export default function FoamBubbles({ isActive, fillPercentage }: FoamBubblesProps) {
  const bubbles = useMemo<Bubble[]>(() => {
    if (!isActive || fillPercentage < 20) {
      return [];
    }

    return BUBBLE_PATTERNS.map((pattern, i) => ({
      ...pattern,
      id: i,
    }));
  }, [isActive, fillPercentage]);

  if (!isActive || fillPercentage < 20) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-0 rounded-full bg-white/40 animate-bubble-rise"
          style={{
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
