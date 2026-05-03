export interface Presenter {
  id: string
  name: string
  bio: string
  image: string
  role?: string
  social?: {
    twitter?: string
    instagram?: string
    facebook?: string
    email?: string
  }
}

export interface Show {
  id: string
  name: string
  description: string
  presenters: string[]
  genre: string
  image: string
  color?: string
}

export interface ScheduleSlot {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  startTime: string
  endTime: string
  showId: string
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category?: string
}

export interface ListenAgainEpisode {
  id: string
  showId: string
  title: string
  date: string
  duration: string
  audioUrl: string
  description?: string
}

export interface StationConfig {
  name: string
  tagline: string
  description: string
  streamUrl: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    postcode: string
  }
  social: {
    twitter: string
    facebook: string
    instagram: string
    youtube?: string
  }
}
