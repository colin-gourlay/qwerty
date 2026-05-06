export interface HistoryMilestone {
  id: string
  year: number
  month?: string
  title: string
  description: string
  category: 'founding' | 'technical' | 'programming' | 'community' | 'award' | 'expansion'
  image?: string
}

export const historyMilestones: HistoryMilestone[] = [
  {
    id: '1',
    year: 2009,
    month: 'November',
    title: 'First Broadcast on FM',
    description: 'East Coast FM made its first broadcast on St. Andrews Day (30th November) on an FM Restricted Service License (RSL). This historic 4-week broadcast brought community radio to Haddington and the surrounding area of East Lothian, Scotland, for the first time.',
    category: 'founding',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    year: 2009,
    month: 'December',
    title: 'Transition to Online Broadcasting',
    description: 'Following the conclusion of the initial 4-week RSL broadcast, East Coast FM transitioned to online streaming, ensuring the community could continue to access local radio programming via the Internet.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    year: 2011,
    month: 'December',
    title: 'Return to FM Broadcasting',
    description: 'East Coast FM secured a second FM Restricted Service License, allowing the station to broadcast once again on FM frequency from 9th December 2011 to 6th January 2012. This provided another opportunity to reach the local community over the airwaves during the festive season.',
    category: 'expansion',
    image: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    year: 2012,
    month: 'January',
    title: 'Continued Internet Service',
    description: 'After the second RSL period concluded, East Coast FM resumed its focus on Internet broadcasting, developing its online presence and building a dedicated listener base across Haddington and East Lothian.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop'
  }
]
