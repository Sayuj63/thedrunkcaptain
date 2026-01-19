# Animation Components

This directory contains all animation-specific components for The Drunk Captain project.

## Components

### `beer-glass.tsx`
Animated SVG beer glass component with liquid fill effect.

**Props:**
- `fillPercentage: number` - Percentage of beer fill (0-100)
- `className?: string` - Optional CSS classes

**Features:**
- Gradients for realistic beer color
- Glass shine effects with filters
- Foam layer appears at 70%+ fill
- Liquid wobble effect
- Glass handle with transparency

**Usage:**
```tsx
<BeerGlass fillPercentage={75} className="w-full h-full" />
```

---

### `foam-bubbles.tsx`
Particle effect component for rising foam bubbles.

**Props:**
- `isActive: boolean` - Whether bubbles should be generated
- `fillPercentage: number` - Current beer fill level (bubbles start at 20%)

**Features:**
- Randomly generated bubbles
- CSS animation for rising effect
- Staggered delays and durations
- Auto-cleanup when inactive

**Usage:**
```tsx
<FoamBubbles isActive={true} fillPercentage={50} />
```

---

### `pirate-captain-mascot.tsx`
Static SVG mascot of the drunk pirate captain.

**Props:**
- `className?: string` - Optional CSS classes

**Features:**
- Ship-like lower body design
- Asymmetrical drunk expression
- Rosy cheeks for character
- Beer mug in hand
- Ready for Phase 3 animations

**Design Notes:**
- Head is slightly tilted (-5deg) for drunk effect
- Eyes are asymmetrical and squinted
- Beard stubble for rugged pirate look
- Golden buttons on coat
- Ship hull integrated into body

**Usage:**
```tsx
<PirateCaptainMascot className="w-32" />
```

---

## Animation Guidelines

### Performance
- All SVG animations target 60fps
- Use CSS transforms for simple animations
- GSAP for complex timeline-based animations
- Keep SVG paths optimized (use SVGO if adding new graphics)

### Theming
Colors should use the project palette:
- Beer gold: `#d4af37`
- Foam white: `#fffef7`
- Ocean navy: `#0a0e27`

### Future Enhancements (Phase 3)
- Add Lottie support for complex mascot animations
- Implement expression changes (happy, surprised, drunk)
- Add idle animations (swaying, blinking)
- Hover states and interactions
