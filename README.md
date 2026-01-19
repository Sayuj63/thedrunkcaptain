# 🏴‍☠️ The Drunk Captain

> A cinematic, scroll-driven pirate odyssey through the digital seas

![Phase 1 Complete](https://img.shields.io/badge/Phase%201-Complete-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## 🎯 Project Overview

The Drunk Captain is an immersive web experience featuring a charismatic pirate captain whose ship serves as his lower body. Built with cutting-edge web technologies, this project combines cinematic animations with smooth scrolling to create an unforgettable digital journey.

## ✨ Phase 1: Foundation & Beer Fill Intro Animation

Phase 1 delivers a stunning fullscreen beer fill animation that serves as the perfect introduction to our pirate's world. This cinematic opener sets the tone for the entire experience with:

- **Smooth Beer Fill Animation** - Watch as golden beer fills from bottom to top with realistic physics
- **Dynamic Foam Bubbles** - Bubbles rise and dissipate naturally as the glass fills
- **Content Reveal** - Background gradually fades in as the beer reaches capacity
- **Multiple Skip Options** - Click, scroll, swipe, or use keyboard shortcuts to proceed
- **Responsive Design** - Perfect on desktop, tablet, and mobile devices
- **60fps Performance** - Buttery smooth animations powered by GSAP

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the magic!

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.3 | React framework with app router |
| **React** | 19.2.3 | UI library with React Compiler |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **GSAP** | 3.14.2 | Professional-grade animations |
| **Lenis** | 1.3.17 | Buttery smooth scrolling |
| **Turbopack** | Built-in | Fast builds and HMR |

## 📁 Project Structure

```
/app
  ├── layout.tsx          # Root layout with Lenis provider
  ├── page.tsx            # Main page with intro and hero
  └── globals.css         # Global styles and CSS animations

/components
  /animations             # Animation-specific components
    ├── beer-glass.tsx    # Animated SVG beer glass
    ├── foam-bubbles.tsx  # Rising bubble particles
    └── pirate-captain-mascot.tsx  # SVG mascot character
  /sections               # Page sections
    ├── beer-fill-intro.tsx  # Main intro animation
    └── hero-content.tsx     # Hero section content
  /ui                     # Reusable UI components
    └── smooth-scroll-provider.tsx  # Lenis smooth scroll wrapper

/lib                      # Utility functions
  └── utils.ts            # Helper functions

/public
  /svg                    # SVG assets
  /audio                  # Audio files (optional)
```

## 🎨 Animation Features

### Beer Fill Intro

The centerpiece of Phase 1 is a meticulously crafted beer fill animation:

**Timeline (3.5-4 seconds):**
1. **0-0.5s**: Glass fades in with subtle scale animation
2. **0.5-3s**: Beer fills smoothly from bottom to top with gradient colors
3. **2.5-3s**: Glass wobbles with elastic physics
4. **3-3.5s**: Background overlay fades out, revealing content
5. **3.5s+**: Auto-advance to main content

**Visual Effects:**
- Linear gradient from golden beer (#d4af37) to light gold (#f4d03f)
- Foam layer appears at 70%+ fill
- Dynamic foam bubbles rise throughout
- Glass highlights and reflections
- Subtle liquid wobble effect
- Background gradient from navy ocean to deep sea

**Interaction:**
- **Click**: Anywhere on the beer glass
- **Scroll**: Mouse wheel or trackpad
- **Touch**: Swipe up on mobile
- **Keyboard**: Arrow Down, Page Down, or Space

### Pirate Captain Mascot

Meet the star of the show:

- **Design**: Round, slightly asymmetrical head with a drunk tilt
- **Character**: Squinted eyes, rosy cheeks, tilted smile
- **Outfit**: Pirate hat with golden trim and skull emblem
- **Props**: Beer mug in hand
- **Unique Feature**: Ship hull integrated as lower body
- **Status**: Static in Phase 1, ready for animations in Phase 3

## 🎯 Performance Optimizations

- **Inline SVG**: Zero network requests for graphics
- **GSAP Animations**: Hardware-accelerated, 60fps performance
- **Optimized Gradients**: Reusable SVG definitions
- **Memoized Calculations**: React hooks optimize re-renders
- **Lazy Loading**: Below-the-fold content loads on demand
- **Next.js Image Optimization**: AVIF and WebP support
- **Production Build**: Console logs removed, code minified

## 🌊 Smooth Scrolling

Powered by Lenis with GSAP ScrollTrigger integration:

```typescript
// Configuration
duration: 1.2s
easing: Custom exponential decay
wheelMultiplier: 1x
touchMultiplier: 2x (enhanced for mobile)
```

**ScrollTrigger Ready**: Phase 2 parallax effects will seamlessly integrate with the existing smooth scroll system.

## 🎨 Theme & Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Ocean | `#0a0e27` | Primary background |
| Deep Sea | `#1a1e37` | Secondary background |
| Golden Beer | `#d4af37` | Primary accent |
| Light Gold | `#f4d03f` | Secondary accent |
| Foam White | `#fffef7` | Highlights |
| Foreground | `#ededed` | Text |

## 📱 Responsive Design

- **Mobile First**: Designed for touch interactions
- **Breakpoints**: Automatic scaling using Tailwind
- **Touch-Friendly**: 50px swipe threshold for skip
- **Aspect Ratios**: Maintained across all screen sizes
- **Font Scaling**: `text-4xl` to `text-8xl` responsive classes

## 🔮 Roadmap

### ✅ Phase 1: Foundation & Beer Fill Intro
- Project scaffolding
- Smooth scrolling engine
- Beer fill animation
- SVG mascot framework
- Basic page structure
- Performance optimizations

### 🚧 Phase 2: Parallax Ocean & Ship Navigation (Next)
- GSAP ScrollTrigger parallax layers
- Multi-depth ocean scenes
- Ship camera control
- Scroll-driven narrative sections

### 🔜 Phase 3: Mascot Animations
- Character expressions
- Idle animations
- Scroll-triggered movements
- Interactive states

## 🧪 Development

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Development with Turbopack
npm run dev
```

## 📦 Build Output

```
Route (app)
┌ ○ /              # Static (prerendered)
└ ○ /_not-found    # Static (prerendered)

○ (Static) prerendered as static content
```

## 🎓 Learning Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [GSAP Documentation](https://greensock.com/docs/)
- [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis)
- [Tailwind CSS v4](https://tailwindcss.com)

## 📝 Notes

- **Browser Support**: Modern browsers with ES2017+ support
- **Accessibility**: ARIA labels, keyboard navigation, skip controls
- **SEO**: Optimized metadata and static prerendering
- **Vercel Ready**: Optimized for Vercel deployment

## 🏴‍☠️ The Journey Begins

Phase 1 creates the perfect opening moment - a cinematic beer fill that immediately establishes the brand's playful yet polished personality. The drunk pirate captain awaits at the bottom of the glass, ready to spring to life in future phases.

**"Ahoy! The ship is seaworthy and ready to sail!"** 🍺

---

Made with 🍺 and ⚓ by The Drunk Captain crew
