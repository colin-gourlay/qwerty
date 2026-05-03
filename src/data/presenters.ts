import type { Presenter } from '@/types'

export const presenters: Presenter[] = [
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Breakfast Show Host',
    bio: 'Sarah has been waking up the East Coast for over 8 years with her energetic breakfast show. A lover of indie music and terrible puns, she\'s the perfect start to your day.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    social: {
      twitter: '@sarahjenkins',
      instagram: 'sarahjenkins_radio'
    }
  },
  {
    id: 'marcus-wright',
    name: 'Marcus Wright',
    role: 'Drive Time Host',
    bio: 'Marcus brings the energy on your commute home with the latest hits and chart music. When he\'s not behind the mic, you\'ll find him at local gigs discovering new talent.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    social: {
      twitter: '@marcuswright',
      instagram: 'marcuswright_ecfm',
      facebook: 'MarcusWrightRadio'
    }
  },
  {
    id: 'jenny-patel',
    name: 'Jenny Patel',
    role: 'Weekend Specialist',
    bio: 'Jenny\'s weekend shows are legendary on the East Coast. From soul to funk to disco, she brings the feel-good vibes every Saturday and Sunday.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    social: {
      instagram: 'djjennypatel',
      email: 'jenny@eastcoastfm.radio'
    }
  },
  {
    id: 'tom-harrison',
    name: 'Tom Harrison',
    role: 'News & Talk',
    bio: 'Tom heads up our news and community programming, keeping listeners informed about what matters on the East Coast. A former newspaper journalist, he knows how to get to the heart of the story.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    social: {
      twitter: '@tomharrisonnews',
      email: 'tom@eastcoastfm.radio'
    }
  },
  {
    id: 'lisa-chen',
    name: 'Lisa Chen',
    role: 'Music Specialist',
    bio: 'Lisa curates our specialist music shows, from jazz to electronic to world music. Her encyclopedic knowledge and passion for music discovery makes every show a journey.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    social: {
      instagram: 'lisa_chen_music',
      twitter: '@lisachenmusic'
    }
  },
  {
    id: 'dave-thompson',
    name: 'Dave Thompson',
    role: 'Late Night Host',
    bio: 'Dave keeps you company through the night with smooth sounds and late-night conversations. A self-confessed night owl, he\'s been in radio for 15 years.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    social: {
      twitter: '@davethompsonfm'
    }
  }
]

export const getPresenterById = (id: string): Presenter | undefined => {
  return presenters.find(presenter => presenter.id === id)
}

export const getPresentersByIds = (ids: string[]): Presenter[] => {
  return ids.map(id => getPresenterById(id)).filter((p): p is Presenter => p !== undefined)
}
