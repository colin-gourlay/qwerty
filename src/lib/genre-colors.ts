export const genreColorMap: Record<string, { bg: string; text: string; border: string }> = {
  'Music & Talk': {
    bg: 'oklch(0.75 0.15 60)',
    text: 'oklch(0.20 0.03 60)',
    border: 'oklch(0.65 0.18 60)'
  },
  'Chart & Pop': {
    bg: 'oklch(0.65 0.18 35)',
    text: 'oklch(1 0 0)',
    border: 'oklch(0.55 0.20 35)'
  },
  'Soul, Funk & Disco': {
    bg: 'oklch(0.68 0.15 300)',
    text: 'oklch(1 0 0)',
    border: 'oklch(0.58 0.18 300)'
  },
  'News & Talk': {
    bg: 'oklch(0.55 0.10 240)',
    text: 'oklch(1 0 0)',
    border: 'oklch(0.45 0.12 240)'
  },
  'Chill & Ambient': {
    bg: 'oklch(0.40 0.08 260)',
    text: 'oklch(1 0 0)',
    border: 'oklch(0.35 0.10 260)'
  },
  'Specialist': {
    bg: 'oklch(0.70 0.12 180)',
    text: 'oklch(0.25 0.05 180)',
    border: 'oklch(0.60 0.14 180)'
  },
  'Easy Listening': {
    bg: 'oklch(0.72 0.08 120)',
    text: 'oklch(0.25 0.04 120)',
    border: 'oklch(0.62 0.10 120)'
  },
  'Mixed': {
    bg: 'oklch(0.68 0.12 80)',
    text: 'oklch(0.20 0.03 80)',
    border: 'oklch(0.58 0.14 80)'
  }
}

export const getGenreColors = (genre: string) => {
  return genreColorMap[genre] || {
    bg: 'oklch(0.58 0.11 215)',
    text: 'oklch(1 0 0)',
    border: 'oklch(0.48 0.13 215)'
  }
}
