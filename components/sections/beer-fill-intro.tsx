'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import BeerGlass from '@/components/animations/beer-glass';
import FoamBubbles from '@/components/animations/foam-bubbles';
import PirateCaptainMascot from '@/components/animations/pirate-captain-mascot';

interface BeerFillIntroProps {
  onComplete?: () => void;
}

export default function BeerFillIntro({ onComplete }: BeerFillIntroProps) {
  const [fillPercentage, setFillPercentage] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const skippingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  const overlayOpacity = useMemo(() => {
    if (fillPercentage < 60) return 1;
    if (fillPercentage >= 80) return 0;
    return 1 - (fillPercentage - 60) / 20;
  }, [fillPercentage]);

  const finish = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    if (skippingRef.current) return;
    skippingRef.current = true;

    timelineRef.current?.kill();

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.out',
    });

    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: 'power2.out',
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = 'none';
        }
        finish();
      },
    });
  }, [finish]);

  useEffect(() => {
    const tl = gsap.timeline();
    timelineRef.current = tl;

    gsap.set(containerRef.current, { opacity: 1, pointerEvents: 'auto' });
    gsap.set(overlayRef.current, { opacity: 1 });
    gsap.set(glassRef.current, { opacity: 0, scale: 0.96, y: 8 });

    const fill = { value: 0 };

    tl.to(glassRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.45,
      ease: 'power2.out',
    })
      .to(
        fill,
        {
          value: 100,
          duration: 2.5,
          ease: 'power2.inOut',
          onUpdate: () => setFillPercentage(fill.value),
        },
        0.1
      )
      .to(
        glassRef.current,
        {
          rotation: -1.5,
          transformOrigin: '50% 90%',
          duration: 0.25,
          yoyo: true,
          repeat: 3,
          ease: 'sine.inOut',
        },
        '>-0.25'
      )
      .to(
        glassRef.current,
        {
          y: -10,
          duration: 0.35,
          ease: 'elastic.out(1, 0.55)',
          yoyo: true,
          repeat: 1,
        },
        '>-0.15'
      )
      .to({}, { duration: 0.6 })
      .add(() => handleSkip());

    return () => {
      tl.kill();
    };
  }, [handleSkip]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 2) handleSkip();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        handleSkip();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      const startY = touchStartYRef.current;
      if (startY === null) return;

      const currentY = e.touches[0]?.clientY ?? startY;
      if (startY - currentY > 40) {
        handleSkip();
        touchStartYRef.current = null;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [handleSkip]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          opacity: overlayOpacity,
          background:
            'linear-gradient(180deg, #0a0e27 0%, #1a1e37 50%, #0a0e27 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        <button
          ref={glassRef}
          type="button"
          className="relative w-full max-w-md aspect-[3/5] cursor-pointer bg-transparent border-0 p-0"
          onClick={handleSkip}
          aria-label="Skip intro"
        >
          <BeerGlass fillPercentage={fillPercentage} className="w-full h-full" />
          <FoamBubbles isActive={fillPercentage > 0} fillPercentage={fillPercentage} />

          <div
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 opacity-80"
            style={{
              transform: `translateX(-50%) scale(${Math.min(1, fillPercentage / 100)})`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <PirateCaptainMascot />
          </div>
        </button>

        {fillPercentage > 10 && fillPercentage < 95 && (
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
