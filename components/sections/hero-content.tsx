'use client';

export default function HeroContent() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#1a2a4a] to-[#0a0e27]" />
      
      {/* Ocean waves effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a3a5a]/40 to-transparent" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] mb-6 animate-fade-in">
          THE DRUNK CAPTAIN
        </h1>
        <p className="text-xl md:text-2xl text-[#d4af37]/80 mb-8 animate-fade-in-delay">
          A pirate's odyssey through the digital seas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <div className="px-8 py-4 bg-[#d4af37]/10 border-2 border-[#d4af37] rounded-lg hover:bg-[#d4af37]/20 transition-all cursor-pointer backdrop-blur-sm">
            <span className="text-[#d4af37] font-semibold text-lg">Begin the Voyage</span>
          </div>
          <div className="px-8 py-4 bg-transparent border-2 border-[#d4af37]/50 rounded-lg hover:border-[#d4af37] transition-all cursor-pointer backdrop-blur-sm">
            <span className="text-[#d4af37]/80 font-semibold text-lg hover:text-[#d4af37]">
              Explore the Ship
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
