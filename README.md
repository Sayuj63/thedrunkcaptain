# 🏴‍☠️ THE DRUNK CAPTAIN 🍺

A scroll-driven pirate odyssey through the digital seas. An immersive web experience combining cinematic animations, smooth scrolling, and a lovable drunk pirate captain mascot.

## 🎯 Phase 1: Foundation & Beer Fill Intro Animation

This phase establishes the project foundation with an iconic fullscreen beer fill animation that sets the tone for the entire experience.

## 🚀 Tech Stack

- **Framework**: Next.js 15+ with React 19
- **Styling**: Tailwind CSS + custom CSS animations
- **Animation**: GSAP (with ScrollTrigger ready for Phase 2)
- **Smooth Scrolling**: Lenis
- **Language**: TypeScript
- **Hosting**: Vercel-ready

## 📁 Project Structure

```
/app
  - layout.tsx         # Root layout with Lenis provider
  - page.tsx           # Main page with beer intro
  - globals.css        # Global styles and animations
/components
  /animations
    - beer-glass.tsx           # Animated beer glass SVG
    - foam-bubbles.tsx         # Bubble particle effects
    - pirate-captain-mascot.tsx # Drunk captain mascot SVG
  /ui
    - smooth-scroll-provider.tsx # Lenis smooth scroll wrapper
  /sections
    - beer-fill-intro.tsx      # Hero beer fill animation
    - hero-content.tsx         # Main hero content section
/lib                   # Utility functions (future)
/public
  /svg                 # SVG assets
  /audio               # Sound effects (optional)
```

## 🎨 Features

### ✅ Implemented

- **Beer Fill Intro Animation**: 3-4 second cinematic intro with:
  - Beer glass filling from bottom to top
  - Foam bubbles rising and dissipating
  - Smooth liquid physics with subtle wobble
  - Content fade-in reveal beneath
  - Skip functionality (click or scroll)
  
- **Smooth Scrolling**: Buttery smooth Lenis integration
  
- **Pirate Captain Mascot**: Static SVG character featuring:
  - Round asymmetrical head with drunk expression
  - Ship-like lower body blended with character
  - Beer mug in hand
  - Ready for Phase 3 animations
  
- **Dark Theme**: Navy ocean (#0a0e27) to golden beer (#d4af37) color palette
  
- **Mobile Responsive**: Touch-friendly, scales appropriately
  
- **Performance Optimized**: 
  - Next.js image optimization
  - React 19 with compiler
  - Clean 60fps animations

## 🎮 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the beer fill intro in action.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 🎭 Animation Details

### Beer Fill Timeline

1. **0s**: Glass empty, dark overlay at full opacity
2. **0-2.5s**: Beer liquid fills smoothly from bottom, foam begins to form
3. **2.5-3s**: Final foam bubbles rise, subtle glass wobble
4. **3-3.5s**: Dark overlay fades, content beneath becomes visible
5. **3.5s+**: Auto-advance or user can skip anytime

### Skip Functionality

Users can skip the intro by:
- Clicking anywhere on the beer glass
- Scrolling down
- Touch/swipe on mobile

## 🎨 Color Palette

- **Background Dark**: `#0a0e27` (Navy ocean)
- **Background Mid**: `#1a1e37` (Deep sea)
- **Accent Gold**: `#d4af37` (Beer/treasure)
- **Accent Gold Light**: `#f4d03f` (Foam/shine)
- **Foreground**: `#ededed` (White text)

## 📋 Acceptance Criteria Status

- ✅ Project boots cleanly with `npm run dev`
- ✅ Beer fill animation triggers on load (3-4 seconds)
- ✅ Foam bubbles rise and dissipate naturally
- ✅ Content fades in beneath beer as it fills
- ✅ Skip button works (click glass or scroll)
- ✅ SVG mascot visible at bottom (static, no animations)
- ✅ Lenis smooth scrolling active and responsive
- ✅ Mobile responsive (glass scales, touch-friendly)
- ✅ Performance: 60fps on animation
- ✅ Dark theme with navy + golden accents

## 🚢 Next Phases

### Phase 2: Scroll-Driven Parallax & Ship Navigation
- GSAP ScrollTrigger integration
- Parallax ocean layers
- Ship camera control
- Wave animations

### Phase 3: Character Animation & Interaction
- Mascot expressions and reactions
- Idle animations
- Hover states
- Lottie integration for complex sequences

### Phase 4: Full Scroll Story
- Multi-section narrative
- Interactive elements
- Sound design integration
- Easter eggs

## 🛠️ Development Notes

- GSAP is installed and ready for ScrollTrigger in Phase 2
- Lenis smooth scroll is configured globally
- Mascot SVG is designed to be easily animated in Phase 3
- All animations are performance-optimized for 60fps
- Mobile-first responsive approach

## 📝 License

This is a creative project. All rights reserved.

---

**"Ahoy! May your scrolls be smooth and your beers be full!"** 🏴‍☠️🍺
