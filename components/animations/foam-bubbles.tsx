'use client';

import { useEffect, useState } from 'react';

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

export default function FoamBubbles({ isActive, fillPercentage }: FoamBubblesProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    if (!isActive || fillPercentage < 20) {
      setBubbles([]);
      return;
    }

    const newBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60,
      size: 3 + Math.random() * 6,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));

    setBubbles(newBubbles);
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
