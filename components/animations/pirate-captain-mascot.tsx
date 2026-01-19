'use client';

interface PirateCaptainMascotProps {
  className?: string;
}

export default function PirateCaptainMascot({ className = '' }: PirateCaptainMascotProps) {
  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shipGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a2a1a" />
          <stop offset="100%" stopColor="#1a0e08" />
        </linearGradient>
        <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f4c8a0" />
          <stop offset="100%" stopColor="#d9a584" />
        </linearGradient>
      </defs>

      {/* Ship-like lower body */}
      <path
        d="M 40 200 Q 30 220 35 250 L 50 280 Q 100 295 150 280 L 165 250 Q 170 220 160 200 Z"
        fill="url(#shipGradient)"
        stroke="#1a0e08"
        strokeWidth="2"
      />
      
      {/* Ship deck details */}
      <line x1="50" y1="210" x2="150" y2="210" stroke="#2a1a0a" strokeWidth="2" />
      <line x1="55" y1="225" x2="145" y2="225" stroke="#2a1a0a" strokeWidth="2" />
      
      {/* Wood planks */}
      <line x1="45" y1="240" x2="155" y2="240" stroke="#2a1a0a" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="255" x2="150" y2="255" stroke="#2a1a0a" strokeWidth="1.5" opacity="0.6" />
      <line x1="55" y1="270" x2="145" y2="270" stroke="#2a1a0a" strokeWidth="1.5" opacity="0.6" />

      {/* Torso/Coat */}
      <path
        d="M 60 140 L 50 200 L 160 200 L 140 140 Q 100 135 60 140 Z"
        fill="#1a3a5c"
        stroke="#0a1a2c"
        strokeWidth="2"
      />
      
      {/* Coat buttons */}
      <circle cx="90" cy="160" r="3" fill="#d4af37" />
      <circle cx="90" cy="175" r="3" fill="#d4af37" />
      <circle cx="90" cy="190" r="3" fill="#d4af37" />

      {/* Head - slightly asymmetrical, drunk tilt */}
      <ellipse
        cx="95"
        cy="90"
        rx="38"
        ry="42"
        fill="url(#skinGradient)"
        stroke="#c08060"
        strokeWidth="2"
        transform="rotate(-5 95 90)"
      />

      {/* Pirate hat */}
      <path
        d="M 50 70 Q 55 50 100 48 Q 145 50 150 70 L 145 85 L 55 85 Z"
        fill="#1a1a1a"
        stroke="#0a0a0a"
        strokeWidth="2"
        transform="rotate(-5 100 70)"
      />
      <path
        d="M 60 85 Q 100 88 140 85"
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
        transform="rotate(-5 100 85)"
      />
      
      {/* Hat skull emblem */}
      <circle cx="100" cy="65" r="8" fill="#f0f0f0" opacity="0.9" />
      <line x1="94" y1="70" x2="106" y2="70" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />

      {/* Face features */}
      {/* Eyes - slightly squinted, drunk look */}
      <ellipse cx="80" cy="85" rx="6" ry="8" fill="#2a2a2a" transform="rotate(-10 80 85)" />
      <ellipse cx="110" cy="88" rx="6" ry="7" fill="#2a2a2a" transform="rotate(5 110 88)" />
      
      {/* Eye highlights */}
      <circle cx="82" cy="83" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="112" cy="86" r="2" fill="#ffffff" opacity="0.8" />

      {/* Rosy drunk cheeks */}
      <ellipse cx="70" cy="100" rx="10" ry="8" fill="#ff6b6b" opacity="0.4" />
      <ellipse cx="120" cy="100" rx="10" ry="8" fill="#ff6b6b" opacity="0.4" />

      {/* Nose - slightly bulbous */}
      <ellipse cx="95" cy="95" rx="5" ry="7" fill="#d9a584" />
      <circle cx="95" cy="98" r="3" fill="#c08060" />

      {/* Mouth - tilted smile */}
      <path
        d="M 80 110 Q 95 118 110 112"
        fill="none"
        stroke="#8a4a3a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Beard stubble - few short lines */}
      <line x1="75" y1="115" x2="75" y2="120" stroke="#4a3a2a" strokeWidth="1.5" opacity="0.6" />
      <line x1="82" y1="118" x2="82" y2="124" stroke="#4a3a2a" strokeWidth="1.5" opacity="0.6" />
      <line x1="90" y1="120" x2="90" y2="126" stroke="#4a3a2a" strokeWidth="1.5" opacity="0.6" />
      <line x1="98" y1="120" x2="98" y2="126" stroke="#4a3a2a" strokeWidth="1.5" opacity="0.6" />
      <line x1="108" y1="118" x2="108" y2="123" stroke="#4a3a2a" strokeWidth="1.5" opacity="0.6" />

      {/* Arms */}
      <path
        d="M 60 145 Q 30 150 25 170 L 22 185"
        fill="none"
        stroke="#1a3a5c"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M 140 145 Q 170 155 175 175"
        fill="none"
        stroke="#1a3a5c"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Hands */}
      <circle cx="22" cy="190" r="8" fill="url(#skinGradient)" />
      <circle cx="175" cy="180" r="8" fill="url(#skinGradient)" />

      {/* Beer mug in hand (right side) */}
      <g transform="translate(160, 165)">
        <rect x="0" y="0" width="20" height="28" rx="2" fill="#f4d03f" opacity="0.8" stroke="#d4af37" strokeWidth="1.5" />
        <rect x="0" y="0" width="20" height="8" rx="1" fill="#fffef7" opacity="0.7" />
        <path d="M 20 8 Q 28 14 20 20" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
