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
  },
  {
    id: '5',
    year: 2012,
    month: 'February',
    title: 'Full FM License Application Submitted',
    description: 'On 14th February 2012, East Coast FM submitted an application to OFCOM, the UK broadcasting regulator, for a full FM Community Radio License. This represented a major step toward establishing permanent FM broadcasting for Haddington and East Lothian.',
    category: 'expansion',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    year: 2012,
    month: 'September',
    title: 'Five-Year FM License Awarded',
    description: 'Success! On 20th September 2012, OFCOM awarded East Coast FM a 5-year Community Radio License, recognizing the station\'s commitment to serving the local community and providing a vital platform for local voices.',
    category: 'award',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop'
  },
  {
    id: '7',
    year: 2013,
    month: 'January',
    title: 'Frequency Allocation',
    description: 'On 11th January 2013, OFCOM allocated the frequency 107.6 FM to East Coast FM. This crucial technical milestone paved the way for the station to begin permanent FM broadcasting to the community.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop'
  },
  {
    id: '8',
    year: 2013,
    month: 'April',
    title: 'Official FM Launch on 107.6',
    description: 'At 8:00 AM BST on Saturday, 27th April 2013, East Coast FM officially launched its permanent FM broadcasting on 107.6. This historic moment marked the beginning of continuous community radio service for Haddington and the surrounding areas of East Lothian.',
    category: 'founding',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop'
  },
  {
    id: '9',
    year: 2018,
    month: 'February',
    title: 'License Extended for Five More Years',
    description: 'East Coast FM\'s application for a 5-year license extension was approved by OFCOM in February 2018, demonstrating the station\'s continued value to the community and ensuring FM broadcasting would continue serving East Lothian.',
    category: 'expansion',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
  }
]
