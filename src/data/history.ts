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
    category: 'founding'
  },
  {
    id: '2',
    year: 2009,
    month: 'June',
    title: 'Expanded Coverage',
    description: 'Upgraded transmission equipment to reach a wider audience across East Lothian, extending coverage to North Berwick, Dunbar, and surrounding areas.',
    category: 'technical'
  },
  {
    id: '3',
    year: 2010,
    month: 'November',
    title: 'Community Radio Award',
    description: 'Received recognition for outstanding community engagement from the Community Media Association, celebrating our commitment to local voices and stories.',
    category: 'award'
  },
  {
    id: '4',
    year: 2012,
    month: 'April',
    title: '24/7 Broadcasting Begins',
    description: 'Transitioned to round-the-clock broadcasting, providing listeners with continuous programming including overnight music mixes and automated shows.',
    category: 'programming'
  },
  {
    id: '5',
    year: 2014,
    month: 'September',
    title: 'Digital Studio Upgrade',
    description: 'Complete renovation of studio facilities with state-of-the-art digital broadcasting equipment, enabling higher quality production and remote broadcasting capabilities.',
    category: 'technical'
  },
  {
    id: '6',
    year: 2015,
    month: 'January',
    title: 'Website Relaunch',
    description: 'Launched redesigned website with live streaming capabilities, bringing East Coast FM to online listeners worldwide.',
    category: 'technical'
  },
  {
    id: '7',
    year: 2016,
    month: 'July',
    title: 'Youth Training Programme',
    description: 'Established youth broadcasting training programme in partnership with local schools, providing radio skills training to young people in East Lothian.',
    category: 'community'
  },
  {
    id: '8',
    year: 2017,
    month: 'December',
    title: '50+ Active Volunteers',
    description: 'Reached milestone of over 50 active volunteer presenters and producers, showcasing the breadth of community involvement in station operations.',
    category: 'community'
  },
  {
    id: '9',
    year: 2018,
    month: 'March',
    title: '10 Year Anniversary',
    description: 'Celebrated a decade of broadcasting with special programming, live events, and recognition from local dignitaries. Reflecting on 10 years of serving East Lothian.',
    category: 'founding'
  },
  {
    id: '10',
    year: 2019,
    month: 'May',
    title: 'Mobile App Launch',
    description: 'Released official mobile apps for iOS and Android, making it easier than ever for listeners to tune in on the go.',
    category: 'technical'
  },
  {
    id: '11',
    year: 2020,
    month: 'March',
    title: 'Remote Broadcasting Innovation',
    description: 'Rapidly adapted to enable remote broadcasting during the pandemic, ensuring uninterrupted service to the community when it was needed most.',
    category: 'technical'
  },
  {
    id: '12',
    year: 2020,
    month: 'April',
    title: 'Community Lifeline Award',
    description: 'Special recognition from East Lothian Council for providing vital community connection and information during lockdown.',
    category: 'award'
  },
  {
    id: '13',
    year: 2021,
    month: 'August',
    title: 'DAB Digital Radio',
    description: 'Launched on DAB digital radio, significantly expanding reach and improving signal quality across the region.',
    category: 'expansion'
  },
  {
    id: '14',
    year: 2022,
    month: 'February',
    title: 'New Studio Complex',
    description: 'Moved to purpose-built studio facilities at Haddington Station Industrial Site, featuring two broadcast studios and production suites.',
    category: 'technical'
  },
  {
    id: '15',
    year: 2023,
    month: 'June',
    title: 'Smart Speaker Integration',
    description: 'Enabled voice-activated listening through Amazon Alexa and Google Assistant, bringing East Coast FM to smart speakers across homes.',
    category: 'technical'
  },
  {
    id: '16',
    year: 2023,
    month: 'November',
    title: '100,000 Weekly Listeners',
    description: 'Reached landmark of 100,000 weekly listeners across FM, DAB, and online platforms, cementing position as East Lothian\'s primary community radio station.',
    category: 'community'
  },
  {
    id: '17',
    year: 2024,
    month: 'January',
    title: 'Podcast Network Launch',
    description: 'Launched dedicated podcast platform featuring listen-again content and exclusive podcast series produced by local creators.',
    category: 'programming'
  }
]
