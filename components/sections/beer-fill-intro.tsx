'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import BeerGlass from '@/components/animations/beer-glass';
import FoamBubbles from '@/components/animations/foam-bubbles';
import PirateCaptainMascot from '@/components/animations/pirate-captain-mascot';

interface BeerFillIntroProps {
  onComplete?: () => void;
}

export default function BeerFillIntro({ onComplete }: BeerFillIntroProps) {
  const [fillPercentage, setFillPercentage] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    tl.to(
      {},
      {
        duration: 2.5,
        onUpdate: function () {
          const progress = this.progress();
          setFillPercentage(progress * 100);
        },
        ease: 'power2.inOut',
      }
    )
      .to(
        glassRef.current,
        {
          y: -10,
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)',
          yoyo: true,
          repeat: 1,
        },
        '-=0.5'
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
        },
        '-=0.3'
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.pointerEvents = 'none';
            }
          },
        },
        '+=0.5'
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (isSkipped) return;
    setIsSkipped(true);

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = 'none';
        }
        onComplete?.();
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
      style={{
        background: 'linear-gradient(180deg, #0a0e27 0%, #1a1e37 50%, #0a0e27 100%)',
      }}
    >
      {/* Dark overlay that fades as beer fills */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black transition-opacity"
        style={{ opacity: 1 - fillPercentage / 150 }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {/* Beer glass container */}
        <div
          ref={glassRef}
          className="relative w-full max-w-md aspect-[3/5] cursor-pointer"
          onClick={handleSkip}
        >
          <BeerGlass fillPercentage={fillPercentage} className="w-full h-full" />
          <FoamBubbles isActive={fillPercentage > 0} fillPercentage={fillPercentage} />
          
          {/* Mascot peeking from bottom */}
          <div
            ref={mascotRef}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 opacity-80"
            style={{
              transform: `translateX(-50%) scale(${Math.min(1, fillPercentage / 100)})`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <PirateCaptainMascot />
          </div>
        </div>

        {/* Skip hint */}
        {fillPercentage > 10 && fillPercentage < 90 && (
          <div className="absolute bottom-12 text-center">
            <p className="text-white/60 text-sm animate-pulse">
              Click the glass or scroll to skip
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
