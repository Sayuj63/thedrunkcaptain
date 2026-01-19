'use client';

import { useState } from 'react';
import BeerFillIntro from '@/components/sections/beer-fill-intro';
import HeroContent from '@/components/sections/hero-content';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative">
      {!introComplete && (
        <BeerFillIntro onComplete={() => setIntroComplete(true)} />
      )}
      
      <HeroContent />
      
      {/* Placeholder for future scroll sections */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0e27] to-[#1a1e37]">
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-[#d4af37] mb-4">
            Next Phase Coming Soon
          </h2>
          <p className="text-xl text-[#d4af37]/60">
            Scroll-driven parallax and ship navigation await...
          </p>
        </div>
      </section>
    </main>
  );
}
