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
    year: 2008,
    month: 'March',
    title: 'Station Launch',
    description: 'East Coast FM launched its first broadcast, bringing community radio to East Lothian. Starting with just 20 hours of weekly programming, the station began its journey to serve the local community.',
    category: 'founding',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    year: 2009,
    month: 'June',
    title: 'Expanded Coverage',
    description: 'Upgraded transmission equipment to reach a wider audience across East Lothian, extending coverage to North Berwick, Dunbar, and surrounding areas.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    year: 2010,
    month: 'November',
    title: 'Community Radio Award',
    description: 'Received recognition for outstanding community engagement from the Community Media Association, celebrating our commitment to local voices and stories.',
    category: 'award',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    year: 2012,
    month: 'April',
    title: '24/7 Broadcasting Begins',
    description: 'Transitioned to round-the-clock broadcasting, providing listeners with continuous programming including overnight music mixes and automated shows.',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    year: 2014,
    month: 'September',
    title: 'Digital Studio Upgrade',
    description: 'Complete renovation of studio facilities with state-of-the-art digital broadcasting equipment, enabling higher quality production and remote broadcasting capabilities.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    year: 2015,
    month: 'January',
    title: 'Website Relaunch',
    description: 'Launched redesigned website with live streaming capabilities, bringing East Coast FM to online listeners worldwide.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: '7',
    year: 2016,
    month: 'July',
    title: 'Youth Training Programme',
    description: 'Established youth broadcasting training programme in partnership with local schools, providing radio skills training to young people in East Lothian.',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
  },
  {
    id: '8',
    year: 2017,
    month: 'December',
    title: '50+ Active Volunteers',
    description: 'Reached milestone of over 50 active volunteer presenters and producers, showcasing the breadth of community involvement in station operations.',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop'
  },
  {
    id: '9',
    year: 2018,
    month: 'March',
    title: '10 Year Anniversary',
    description: 'Celebrated a decade of broadcasting with special programming, live events, and recognition from local dignitaries. Reflecting on 10 years of serving East Lothian.',
    category: 'founding',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
  },
  {
    id: '10',
    year: 2019,
    month: 'May',
    title: 'Mobile App Launch',
    description: 'Released official mobile apps for iOS and Android, making it easier than ever for listeners to tune in on the go.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
  },
  {
    id: '11',
    year: 2020,
    month: 'March',
    title: 'Remote Broadcasting Innovation',
    description: 'Rapidly adapted to enable remote broadcasting during the pandemic, ensuring uninterrupted service to the community when it was needed most.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop'
  },
  {
    id: '12',
    year: 2020,
    month: 'April',
    title: 'Community Lifeline Award',
    description: 'Special recognition from East Lothian Council for providing vital community connection and information during lockdown.',
    category: 'award',
    image: 'https://images.unsplash.com/photo-1531537571171-a707bf2683da?w=800&h=600&fit=crop'
  },
  {
    id: '13',
    year: 2021,
    month: 'August',
    title: 'DAB Digital Radio',
    description: 'Launched on DAB digital radio, significantly expanding reach and improving signal quality across the region.',
    category: 'expansion',
    image: 'https://images.unsplash.com/photo-1609084727167-99c7f5d43663?w=800&h=600&fit=crop'
  },
  {
    id: '14',
    year: 2022,
    month: 'February',
    title: 'New Studio Complex',
    description: 'Moved to purpose-built studio facilities at Haddington Station Industrial Site, featuring two broadcast studios and production suites.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop'
  },
  {
    id: '15',
    year: 2023,
    month: 'June',
    title: 'Smart Speaker Integration',
    description: 'Enabled voice-activated listening through Amazon Alexa and Google Assistant, bringing East Coast FM to smart speakers across homes.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&h=600&fit=crop'
  },
  {
    id: '16',
    year: 2023,
    month: 'November',
    title: '100,000 Weekly Listeners',
    description: 'Reached landmark of 100,000 weekly listeners across FM, DAB, and online platforms, cementing position as East Lothian\'s primary community radio station.',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop'
  },
  {
    id: '17',
    year: 2024,
    month: 'January',
    title: 'Podcast Network Launch',
    description: 'Launched dedicated podcast platform featuring listen-again content and exclusive podcast series produced by local creators.',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?w=800&h=600&fit=crop'
  }
]
