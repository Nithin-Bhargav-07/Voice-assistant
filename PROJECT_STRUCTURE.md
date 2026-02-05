# Voice-Enabled Pharmacy Ecommerce App

A modern, high-end React + Tailwind UI for a voice-first pharmacy ecommerce application designed for seniors and caregivers.

## Design Philosophy

- **Voice-First**: Voice interaction is the primary interface, with browsing as secondary
- **Senior-Friendly**: Large typography (min 18px), high contrast, generous spacing
- **Premium Design**: Dark glassmorphism, soft gradients, calm futuristic aesthetic
- **AI Health Companion**: Feels like an intelligent assistant, not a marketplace

## Color System

- **Primary**: #0F172A (Midnight Blue)
- **Gradient**: Deep Indigo → Midnight
- **Glass Surface**: rgba(255,255,255,0.06)
- **Accent**: #14B8A6 (Teal)
- **Highlight**: #6366F1 (Indigo)
- **CTA**: #FF6B6B (Coral)

## Project Structure

```
src/
├── components/
│   ├── GlassMorphCard.tsx       # Reusable glassmorphism card
│   ├── VoiceMicrophoneOrb.tsx   # Animated voice microphone with states
│   ├── MedicineCard.tsx         # Medicine product card
│   ├── DeviceCard.tsx           # Smart device product card
│   ├── NavigationBar.tsx        # Floating bottom navigation
│   ├── SearchBar.tsx            # Glassmorphism search bar
│   ├── TrustBadge.tsx           # Trust/safety badge component
│   └── BiometricPrompt.tsx      # Voice authentication prompt
│
├── screens/
│   ├── LoginScreen.tsx          # Premium authentication screen
│   ├── RegisterScreen.tsx       # User registration screen
│   ├── HomeScreen.tsx           # Main landing with voice hero
│   ├── VoiceScreen.tsx          # Voice interaction interface
│   ├── StoreScreen.tsx          # Browse medicines & devices
│   ├── CheckoutScreen.tsx       # Secure checkout flow
│   └── CaregiverScreen.tsx      # Caregiver dashboard
│
├── data/
│   └── medicines.ts             # Medicine & device data
│
├── App.tsx                      # Main app orchestration
└── index.css                    # Global styles & animations
```

## Key Features

### Authentication Flow
- Premium glassmorphism login/register screens
- HIPAA-grade security messaging
- Password visibility toggle
- Caregiver registration option
- Voice biometric prompt

### Home Screen
- Large glowing microphone orb (idle/listening/processing states)
- "Just Speak. We'll Handle the Rest" hero message
- Trust badges: Doctor Trusted, Safety Verified, Caregiver Connected
- Voice CTA primary, Browse secondary
- Horizontal scrolling medicine cards
- Premium device showcase

### Voice Screen
- Center-stage microphone with waveform animations
- Conversation interface with AI responses
- Real-time transcript display
- AI intelligence indicators (checking safety, comparing options)
- Large action buttons (Order, Repeat, Explain)
- Emergency caregiver alert

### Store Screen
- Full-width search with instant filtering
- Grid layout for browsing
- Voice order buttons on every item
- Clear categorization (Medicines vs Devices)

### Checkout Screen
- Banking-level trust messaging
- Voice confirmation option
- Order summary with large readable text
- Secure payment form
- HIPAA compliance badges

### Caregiver Dashboard
- Professional, supportive tone
- Remote assist functionality
- Alert monitoring
- Recent order tracking
- Health insights dashboard
- Non-controlling support interface

### Navigation
- Floating glassmorphism pill at bottom
- 5 main sections: Home, Voice, Store, Checkout, Caregiver
- Active state with glow effect
- Smooth transitions

## Components API

### VoiceMicrophoneOrb
```tsx
<VoiceMicrophoneOrb 
  state="idle" | "listening" | "processing"
  onClick={() => {}}
  size="sm" | "md" | "lg"
/>
```

### GlassMorphCard
```tsx
<GlassMorphCard hover className="p-6">
  {children}
</GlassMorphCard>
```

### TrustBadge
```tsx
<TrustBadge 
  text="Doctor Trusted"
  variant="teal" | "indigo" | "violet" | "rose" | "amber"
/>
```

## Design Patterns

### Typography Scale
- Hero: 6xl-7xl (60-72px)
- Section Title: 4xl-5xl (36-48px)
- Card Title: 2xl-3xl (24-30px)
- Body: lg-xl (18-20px)
- Small: base (16px)

### Spacing Scale
- Component padding: 6-8 (24-32px)
- Section spacing: 12-16 (48-64px)
- Card gaps: 4-6 (16-24px)

### Border Radius
- Cards: 2xl (16px)
- Buttons: xl (12px)
- Pills: full (9999px)

### Shadows
- Subtle: shadow-2xl shadow-black/20
- Glow: hover:shadow-indigo-500/50

## Accessibility Features

- Large touch targets (min 44px)
- High contrast text
- Clear visual hierarchy
- Voice-first interaction
- Senior-friendly language
- Emergency caregiver access

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- Lucide Icons
- Framer Motion (available if needed)
- Vite

## Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Type check
pnpm run tscgo --noEmit

# Build
pnpm build
```

## Future Enhancements

- Voice recognition integration (Web Speech API)
- Real-time caregiver notifications
- Medication reminder system
- Health data visualization
- Prescription upload via camera
- Multi-language support
- Offline mode for emergency access
