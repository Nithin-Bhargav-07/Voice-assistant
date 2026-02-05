# Customization Guide

Quick reference for customizing the Voice-Enabled Pharmacy App.

## Adding New Medicines

Edit `src/data/medicines.ts`:

```typescript
export const medicines: Medicine[] = [
  {
    id: 'unique-id',
    name: 'Medicine Name',
    description: 'What it does',
    badge: 'Trust Badge Text',
    price: 9.99,
    emoji: '💊'
  }
];
```

## Adding New Devices

Edit `src/data/medicines.ts`:

```typescript
export const devices: Device[] = [
  {
    id: 'unique-id',
    name: 'Device Name',
    description: 'What it does',
    badge: 'Badge Text',
    price: 99.99,
    emoji: '🩺'
  }
];
```

## Customizing Colors

### Background Gradient
In any screen file, modify:
```tsx
className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
```

### Accent Colors
- Teal: `text-teal-400`, `bg-teal-500/20`, `border-teal-400/30`
- Indigo: `text-indigo-400`, `bg-indigo-500/20`, `border-indigo-400/30`
- Purple: `text-purple-400`, `bg-purple-500/20`, `border-purple-400/30`
- Violet: `text-violet-400`, `bg-violet-500/20`, `border-violet-400/30`

### Button Gradients
```tsx
// Primary CTA
className="bg-gradient-to-r from-indigo-600 to-purple-600"

// Success/Confirm
className="bg-gradient-to-r from-teal-600 to-emerald-600"

// Premium/Device
className="bg-gradient-to-r from-violet-600 to-fuchsia-600"

// Alert/Emergency
className="bg-gradient-to-r from-rose-600 to-red-600"
```

## Adjusting Typography

### Font Sizes (Senior-Friendly)
```tsx
// Hero titles
className="text-6xl md:text-7xl"

// Section titles
className="text-4xl md:text-5xl"

// Card titles
className="text-2xl md:text-3xl"

// Body text (minimum 18px)
className="text-lg md:text-xl"
```

### Making Text Larger
Increase scale by one size:
- `text-lg` → `text-xl`
- `text-xl` → `text-2xl`
- `text-2xl` → `text-3xl`

## Customizing Voice Orb

Edit `src/components/VoiceMicrophoneOrb.tsx`:

### Change Orb Colors
```typescript
// Idle state
bg-gradient-to-br from-indigo-600 to-purple-700

// Listening state
bg-gradient-to-br from-emerald-600 to-teal-700

// Processing state
bg-gradient-to-br from-violet-600 to-fuchsia-700
```

### Change Orb Size
```typescript
const sizeClasses = {
  sm: 'w-16 h-16',    // Small
  md: 'w-24 h-24',    // Medium
  lg: 'w-32 h-32'     // Large (default)
};
```

## Customizing Cards

### Glassmorphism Intensity
Edit `src/components/GlassMorphCard.tsx`:

```tsx
// More transparent
bg-white/[0.03]

// More opaque
bg-white/[0.10]

// Current (balanced)
bg-white/[0.06]
```

### Border Glow
```tsx
// Subtle
border border-white/10

// More visible
border border-white/20

// Glowing
border border-indigo-400/30
```

## Trust Badge Variants

Edit `src/components/TrustBadge.tsx` to add new variants:

```typescript
const variants = {
  custom: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300'
};
```

## Navigation Icons

Edit `src/components/NavigationBar.tsx`:

```typescript
import { Home, Mic, ShoppingBag, CreditCard, Users } from 'lucide-react';

const items = [
  { id: 'home', icon: Home, label: 'Home' },
  // Add new items here
];
```

## Spacing Adjustments

### Increase Overall Spacing
Search and replace in screen files:
- `space-y-6` → `space-y-8`
- `space-y-8` → `space-y-12`
- `gap-4` → `gap-6`
- `gap-6` → `gap-8`

### Padding
- Small: `p-4` (16px)
- Medium: `p-6` (24px)
- Large: `p-8` (32px)
- Extra Large: `p-10` (40px)

## Animation Speed

Edit `src/index.css`:

```css
/* Slower animations */
.animate-spin-slow {
  animation: spin-slow 5s linear infinite; /* Increased from 3s */
}

/* Faster fade-in */
.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards; /* Decreased from 0.6s */
}
```

## Adding New Screens

1. Create screen file in `src/screens/YourScreen.tsx`
2. Import in `src/App.tsx`
3. Add to navigation in `src/components/NavigationBar.tsx`
4. Add state management in `src/App.tsx`

Example:

```tsx
// In App.tsx
type NavItem = 'home' | 'voice' | 'store' | 'checkout' | 'caregiver' | 'newscreen';

{activeScreen === 'newscreen' && <YourScreen />}
```

## Responsive Breakpoints

Tailwind breakpoints used:
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (laptop)
- `xl`: 1280px (desktop)

Example usage:
```tsx
className="text-2xl md:text-3xl lg:text-4xl"
```

## Voice States

Edit `src/screens/VoiceScreen.tsx`:

```typescript
type VoiceState = 'idle' | 'listening' | 'processing';

// Add new states
type VoiceState = 'idle' | 'listening' | 'processing' | 'error' | 'success';
```

## Trust Badge Colors

Quick color reference for badges:

```tsx
<TrustBadge text="Safe" variant="teal" />      // Green/teal for safety
<TrustBadge text="Popular" variant="indigo" /> // Blue for trust
<TrustBadge text="Premium" variant="violet" /> // Purple for premium
<TrustBadge text="Alert" variant="rose" />     // Red for warnings
<TrustBadge text="New" variant="amber" />      // Yellow for attention
```

## Glassmorphism Tips

Best practices for glassmorphism:
- Use dark backgrounds (slate-950, indigo-950)
- Keep glass opacity low (0.03-0.10)
- Use backdrop-blur (blur-xl, blur-2xl)
- Add subtle borders (border-white/10)
- Layer multiple glows for depth

## Performance Tips

- Use `backdrop-blur` sparingly on mobile
- Limit number of animated elements per screen
- Use CSS animations instead of JS when possible
- Optimize images (use emojis for icons when possible)
- Lazy load screens not currently visible

## Accessibility Enhancements

```tsx
// Add ARIA labels
<button aria-label="Order with voice">

// Keyboard navigation
<button tabIndex={0}>

// Screen reader text
<span className="sr-only">Hidden text for screen readers</span>

// Focus indicators
className="focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
```

## Testing Voice Features

Mock voice interaction:
```typescript
// In VoiceScreen.tsx, modify timeout values
setTimeout(() => {
  setTranscript('Test transcript');
  setVoiceState('processing');
}, 2000); // Adjust delay
```

## Common Modifications

### Larger Touch Targets
```tsx
// Change from
className="py-2 px-4"

// To
className="py-4 px-6"
```

### Higher Contrast
```tsx
// Change from
className="text-gray-300"

// To
className="text-gray-100"
```

### Bolder Text
```tsx
// Change from
className="font-medium"

// To
className="font-semibold"
```

## Environment Variables

Create `.env.local` for configuration:

```env
VITE_API_URL=https://api.yourpharmacy.com
VITE_VOICE_API_KEY=your-key-here
VITE_ENABLE_ANALYTICS=true
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```
