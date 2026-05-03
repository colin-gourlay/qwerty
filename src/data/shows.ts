import type { Show } from '@/types'

export const shows: Show[] = [
  {
    id: 'breakfast-club',
    name: 'The Breakfast Club',
    description: 'Start your day right with Sarah\'s mix of the latest music, entertainment news, and local chat. Wake up calls, shout-outs, and the best way to begin your morning on the East Coast.',
    presenters: ['sarah-jenkins'],
    genre: 'Music & Talk',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    color: 'oklch(0.75 0.15 60)'
  },
  {
    id: 'drive-time',
    name: 'Drive Time',
    description: 'Marcus keeps you company on your commute with the biggest hits, traffic updates, and what\'s happening tonight across the region. The perfect soundtrack for your journey home.',
    presenters: ['marcus-wright'],
    genre: 'Chart & Pop',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    color: 'oklch(0.65 0.18 35)'
  },
  {
    id: 'weekend-grooves',
    name: 'Weekend Grooves',
    description: 'Jenny brings the weekend vibes with soul, funk, and disco classics. Get ready to dance your way through Saturday and Sunday with feel-good music from across the decades.',
    presenters: ['jenny-patel'],
    genre: 'Soul, Funk & Disco',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
    color: 'oklch(0.68 0.15 300)'
  },
  {
    id: 'community-matters',
    name: 'Community Matters',
    description: 'Tom explores the stories that matter to our listeners. Local news, interviews with community leaders, and discussions about the issues affecting the East Coast.',
    presenters: ['tom-harrison'],
    genre: 'News & Talk',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
    color: 'oklch(0.55 0.10 240)'
  },
  {
    id: 'late-night-sessions',
    name: 'Late Night Sessions',
    description: 'Dave guides you through the quiet hours with smooth sounds and mellow vibes. Perfect for night owls, shift workers, and anyone who appreciates music after dark.',
    presenters: ['dave-thompson'],
    genre: 'Chill & Ambient',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    color: 'oklch(0.40 0.08 260)'
  },
  {
    id: 'music-discovery',
    name: 'Music Discovery',
    description: 'Lisa takes you on a journey through specialist sounds from around the world. Jazz, electronic, world music, and everything in between. Expand your musical horizons.',
    presenters: ['lisa-chen'],
    genre: 'Specialist',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    color: 'oklch(0.70 0.12 180)'
  },
  {
    id: 'sunday-chill',
    name: 'Sunday Chill',
    description: 'The perfect Sunday afternoon soundtrack. Relaxed, easy-going music to help you unwind before the week ahead. Coffee, newspaper, and good music.',
    presenters: ['lisa-chen', 'jenny-patel'],
    genre: 'Easy Listening',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    color: 'oklch(0.72 0.08 120)'
  },
  {
    id: 'afternoon-mix',
    name: 'Afternoon Mix',
    description: 'A diverse selection of music to get you through your afternoon. From classic hits to modern favorites, there\'s something for everyone.',
    presenters: ['sarah-jenkins', 'marcus-wright'],
    genre: 'Mixed',
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800',
    color: 'oklch(0.68 0.12 80)'
  }
]

export const getShowById = (id: string): Show | undefined => {
  return shows.find(show => show.id === id)
}

export const getShowsByPresenterId = (presenterId: string): Show[] => {
  return shows.filter(show => show.presenters.includes(presenterId))
}

export const getShowsByGenre = (genre: string): Show[] => {
  return shows.filter(show => show.genre.toLowerCase().includes(genre.toLowerCase()))
}
