# GitHub Copilot Instructions - East Coast FM

## Project Purpose

This is a modern, production-ready website for **East Coast FM**, a UK community radio station. The site enables listeners to:
- Stream live radio 24/7
- View weekly schedules and show information
- Discover presenters and their shows
- Read station news and updates
- Access archived shows (listen again)
- Contact the station and learn about advertising

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Component Library**: shadcn/ui v4
- **Icons**: Phosphor Icons
- **Routing**: React Router v7
- **State Management**: React hooks + useKV for persistence
- **Animation**: Framer Motion (sparingly)

## Coding Standards

### Accessibility First
- All interactive elements must have proper ARIA labels
- Maintain WCAG AA contrast ratios (4.5:1 minimum for text)
- Support keyboard navigation throughout
- Provide text alternatives for audio/visual content
- Use semantic HTML elements

### Component Architecture
- **One component per file** in `/src/components/[category]/`
- Use functional components with TypeScript
- Prefer composition over prop drilling
- Keep components under 200 lines; extract subcomponents if larger
- Export components as named exports when multiple exports exist, default for single

### Data-Driven UI
- Store static data in `/src/data/` as TypeScript or JSON
- Use content collections pattern for news/articles
- Keep presentation logic separate from data fetching
- Make components reusable by accepting data as props

### Clean Code Practices
- No comments unless documenting complex algorithms or external integrations
- Use descriptive variable and function names
- Prefer early returns over nested conditionals
- Extract magic numbers/strings to constants
- Use TypeScript strictly; avoid `any`

## Project Structure

```
src/
├── components/
│   ├── audio/          # Audio player components
│   ├── layout/         # Header, Footer, Navigation
│   ├── schedule/       # Schedule grid and related
│   ├── shows/          # Show cards and displays
│   ├── presenters/     # Presenter cards and profiles
│   ├── news/           # News/article components
│   └── ui/             # shadcn components (DO NOT EDIT)
├── data/
│   ├── schedule.ts     # Weekly show schedule
│   ├── shows.ts        # Show metadata
│   ├── presenters.ts   # Presenter profiles
│   └── config.ts       # Site configuration
├── pages/              # Route components
├── lib/                # Utilities and helpers
├── hooks/              # Custom React hooks
├── types/              # TypeScript interfaces
└── assets/             # Images, icons, media
```

## Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `AudioPlayer.tsx`)
- Utilities: `kebab-case.ts` (e.g., `format-time.ts`)
- Data files: `kebab-case.ts` (e.g., `schedule-data.ts`)
- Types: `PascalCase.ts` or within component files

### Components
- React components: `PascalCase` (e.g., `OnAirWidget`)
- Custom hooks: `useCamelCase` (e.g., `useCurrentShow`)
- Utility functions: `camelCase` (e.g., `getCurrentShow`)

### CSS Classes
- Use Tailwind utilities; avoid custom CSS when possible
- Custom classes: `kebab-case` in `index.css`
- Component-specific: prefix with component name

### Data Keys
- useKV keys: `kebab-case` (e.g., `audio-player-volume`)
- Object properties: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`

## Preferred Patterns

### Adding a New Show

1. Add show data to `/src/data/shows.ts`:
```typescript
{
  id: 'morning-vibes',
  name: 'Morning Vibes',
  description: 'Start your day with...',
  presenter: ['alex-chen'], // matches presenter IDs
  genre: 'music',
  image: '/images/shows/morning-vibes.jpg'
}
```

2. Add to schedule in `/src/data/schedule.ts`:
```typescript
{
  day: 'monday',
  startTime: '06:00',
  endTime: '09:00',
  showId: 'morning-vibes'
}
```

3. Show automatically appears in:
   - Schedule grid
   - Shows listing page
   - Presenter's show list
   - "On Air Now" when scheduled

### Adding a Presenter

1. Add to `/src/data/presenters.ts`:
```typescript
{
  id: 'alex-chen',
  name: 'Alex Chen',
  bio: 'Alex has been...',
  image: '/images/presenters/alex-chen.jpg',
  social: {
    twitter: '@alexchen',
    instagram: 'alexchen_radio'
  }
}
```

2. Reference in show data using the ID
3. Presenter profile page generates automatically

### Adding News Article

1. Create markdown file in `/src/content/news/`:
```markdown
---
title: "Station Wins Award"
date: 2024-01-15
author: "Station Team"
excerpt: "East Coast FM wins..."
image: "/images/news/award.jpg"
---

Full article content here...
```

2. Article appears automatically in news feed

### Creating Reusable Components

```typescript
interface ShowCardProps {
  show: Show
  variant?: 'compact' | 'full'
}

export function ShowCard({ show, variant = 'full' }: ShowCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      {/* implementation */}
    </Card>
  )
}
```

### Persistent State

```typescript
// For data that survives page refresh
import { useKV } from '@github/spark/hooks'
const [volume, setVolume] = useKV('audio-volume', 0.7)

// For temporary UI state
import { useState } from 'react'
const [isPlaying, setIsPlaying] = useState(false)
```

### Time/Schedule Logic

```typescript
// Use helper functions from lib/
import { getCurrentShow } from '@/lib/schedule-utils'

const currentShow = getCurrentShow(schedule)
```

## Common Tasks Examples

### Update Station Branding
- Colors: `/src/index.css` (CSS variables)
- Logo: Replace `/src/assets/images/logo.svg`
- Station info: `/src/data/config.ts`

### Change Schedule Layout
- Desktop grid: `/src/components/schedule/ScheduleGrid.tsx`
- Mobile view: Same component with responsive classes

### Customize Audio Player
- Player UI: `/src/components/audio/AudioPlayer.tsx`
- Stream URL: `/src/data/config.ts`
- Persistent state: Uses `useKV` for volume/preferences

## Testing Guidance

When writing or modifying code:
- Ensure all routes render without errors
- Test mobile responsive behavior
- Verify schedule "current show" logic across time boundaries
- Check keyboard navigation on interactive elements
- Validate color contrast for any new text/background combinations

## Don't

- ❌ Edit files in `/src/components/ui/` (shadcn managed)
- ❌ Use inline styles; prefer Tailwind utilities
- ❌ Add backend dependencies or API calls
- ❌ Implement authentication or user accounts
- ❌ Use `localStorage` directly; use `useKV` instead
- ❌ Add large dependencies without justification
- ❌ Create CSS files for individual components

## Do

- ✅ Use shadcn components from `/src/components/ui/`
- ✅ Follow existing component patterns
- ✅ Keep data separate from presentation
- ✅ Make components reusable and prop-driven
- ✅ Use TypeScript types for all data structures
- ✅ Test responsive behavior on mobile
- ✅ Consider accessibility in all interactions
- ✅ Use semantic HTML elements
- ✅ Keep bundle size minimal
