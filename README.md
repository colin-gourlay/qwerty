# 📻 Sundown Radio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with React](https://img.shields.io/badge/Built%20with-React%2019-61dafb)](https://react.dev)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38bdf8)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6)](https://www.typescriptlang.org/)

A modern, production-ready website for **Sundown Radio**, a UK community radio station. Stream live radio, explore show schedules, discover presenters, and stay connected with your local station.

## ✨ Features

- 📡 **Live Streaming** - Persistent audio player with volume control
- 📅 **Weekly Schedule** - Interactive grid showing all shows and presenters
- 🎙️ **Show Profiles** - Detailed pages for every show with presenter info
- 👥 **Presenter Profiles** - Meet the voices behind the station
- 📰 **News & Updates** - Station news and community content
- 🎧 **Listen Again** - Browse archived shows (UI ready for backend integration)
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation support
- 🌓 **Dark/Light Mode** - Toggle between themes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sundown-radio.git
cd sundown-radio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── audio/          # Audio player components
│   ├── layout/         # Header, Footer, Navigation
│   ├── schedule/       # Schedule grid and widgets
│   ├── shows/          # Show cards and displays
│   ├── presenters/     # Presenter components
│   ├── news/           # News/article components
│   └── ui/             # shadcn component library
├── data/
│   ├── schedule.ts     # Weekly programming schedule
│   ├── shows.ts        # Show metadata and descriptions
│   ├── presenters.ts   # Presenter profiles and bios
│   └── config.ts       # Station configuration
├── pages/              # Route components (Home, Schedule, etc.)
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── assets/             # Images and media files
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run type-check` | Run TypeScript type checking |

## 📝 Content Management

### Adding a New Show

1. Edit `/src/data/shows.ts` and add your show:

```typescript
{
  id: 'morning-vibes',
  name: 'Morning Vibes',
  description: 'Start your day with uplifting music',
  presenter: ['alex-chen'],
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

The show automatically appears in the schedule, shows page, and "On Air Now" widget.

### Adding a Presenter

Edit `/src/data/presenters.ts`:

```typescript
{
  id: 'alex-chen',
  name: 'Alex Chen',
  bio: 'Alex has been broadcasting for over 10 years...',
  image: '/images/presenters/alex-chen.jpg',
  social: {
    twitter: '@alexchen',
    instagram: 'alexchen_radio'
  }
}
```

### Adding News Articles

Create a new markdown file in `/src/content/news/`:

```markdown
---
title: "Station Wins Award"
date: 2024-01-15
author: "Station Team"
excerpt: "East Coast FM recognized for community service"
image: "/images/news/award.jpg"
---

Full article content goes here...
```

## 🎨 Customization

### Branding

- **Colors**: Edit `/src/index.css` (CSS custom properties)
- **Logo**: Replace `/src/assets/images/logo.svg`
- **Station Info**: Update `/src/data/config.ts`
- **Fonts**: Modify Google Fonts link in `/index.html`

### Audio Stream

Update the stream URL in `/src/data/config.ts`:

```typescript
export const STREAM_URL = 'https://your-stream-url.com/live'
```

## 🚢 Deployment

### GitHub Pages

This project includes automated deployment to GitHub Pages via GitHub Actions.

1. Enable GitHub Pages in repository settings (Source: GitHub Actions)
2. Push to `main` branch
3. Workflow automatically builds and deploys

### Manual Deployment

```bash
npm run build
# Upload /dist folder to your hosting provider
```

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build verification
npm run build
```

## 📋 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

All PRs must pass linting and build checks.

## 📚 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui v4
- **Icons**: Phosphor Icons
- **Routing**: React Router v7
- **Animation**: Framer Motion
- **State**: React Hooks + KV Storage

## 🔒 Security

- Automated dependency updates via Dependabot
- Hardened GitHub Actions workflows
- No backend dependencies or authentication
- Static site architecture

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Spark Template](https://github.com/github/spark)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Phosphor Icons](https://phosphoricons.com)

## 📧 Support

For questions or support, please open an issue or contact:
- Email: hello@eastcoastfm.radio
- Twitter: [@EastCoastFM](https://twitter.com/eastcoastfm)

---

Made with ❤️ for community radio
