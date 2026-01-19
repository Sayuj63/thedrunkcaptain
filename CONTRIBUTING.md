# Contributing to The Drunk Captain

## Development Workflow

### Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### Code Style

#### TypeScript
- Use explicit interface definitions for all component props
- Prefer functional components over class components
- Use meaningful variable names (e.g., `fillPercentage` not `fp`)

#### React Patterns
- Add `'use client'` directive for components using:
  - useState, useEffect, useRef
  - Browser APIs (window, document)
  - Event handlers
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

#### Styling
- Use Tailwind utility classes first
- Custom CSS animations in globals.css
- Follow mobile-first responsive approach
- Use CSS custom properties for theming

#### Animation Best Practices
- Target 60fps for all animations
- Provide skip/dismiss options for long animations
- Test on mobile devices (touch interactions)
- Use GSAP for complex timelines
- CSS animations for simple, repeatable effects

### File Organization

```
/components
  /animations  - Animation-specific components (SVGs, particles)
  /ui          - Reusable UI components (buttons, cards, providers)
  /sections    - Page section components (hero, features, footer)
```

### Naming Conventions
- Components: PascalCase (e.g., `BeerFillIntro.tsx`)
- Files: kebab-case (e.g., `beer-fill-intro.tsx`)
- Props interfaces: ComponentNameProps (e.g., `BeerGlassProps`)
- CSS classes: Follow Tailwind conventions

### Performance Guidelines
- Lazy load components below the fold
- Optimize SVG assets with SVGO
- Use Next.js Image component for images
- Profile animations with Chrome DevTools
- Test on mid-range devices, not just high-end

### Testing
Before submitting:
1. Run `npm run build` to ensure production build works
2. Check TypeScript: `npx tsc --noEmit`
3. Test on mobile (Chrome DevTools responsive mode)
4. Verify 60fps animations (Chrome DevTools Performance)

### Git Workflow
- Create feature branches: `feat/your-feature-name`
- Write clear commit messages
- Keep commits focused and atomic
- Test before pushing

### Phase-Specific Notes

#### Phase 2: Scroll-Driven Parallax
- Use GSAP ScrollTrigger
- Register ScrollTrigger with GSAP
- Update Lenis to work with ScrollTrigger
- Test scroll performance extensively

#### Phase 3: Character Animation
- Consider Lottie for complex mascot animations
- Keep file sizes small
- Create reusable animation components
- Document animation triggers

## Questions?
Check the README.md for project overview and architecture details.
