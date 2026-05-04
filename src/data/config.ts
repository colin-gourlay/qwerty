import type { StationConfig } from '@/types'

export const STATION_CONFIG: StationConfig = {
  name: 'East Coast FM',
  tagline: 'Your Voice on the Coast',
  description: 'Broadcasting from the heart of East Lothian, bringing you the best in music, talk, and community programming 24/7.',
  streamUrl: 'https://stream.eastcoastfm.radio/live',
  phone: '01620 826444',
  text: '07835 90 20 30',
  email: 'studio@eastcoastfm.co.uk',
  address: {
    street: '2B Haddington Station Industrial Site',
    city: 'Haddington',
    postcode: 'EH41 3PP'
  },
  social: {
    twitter: '@EastCoastFM',
    facebook: 'EastCoastFM',
    instagram: 'eastcoastfm',
    youtube: '@EastCoastFM'
  },
  frequency: {
    fm: '107.9',
    dab: 'East Coast FM',
    online: 'eastcoastfm.co.uk/listen'
  },
  apps: {
    ios: 'https://apps.apple.com/app/east-coast-fm',
    android: 'https://play.google.com/store/apps/details?id=uk.co.eastcoastfm'
  }
}

export const STREAM_URL = STATION_CONFIG.streamUrl

export const RECEPTION_TIPS = {
  locations: [
    {
      name: 'Haddington',
      quality: 'excellent',
      frequency: '107.9 FM',
      tips: 'Strongest signal in the area. Should receive clearly on most FM radios indoors and outdoors.'
    },
    {
      name: 'North Berwick',
      quality: 'excellent',
      frequency: '107.9 FM',
      tips: 'Excellent reception throughout the town. Try DAB for crystal clear digital quality.'
    },
    {
      name: 'Dunbar',
      quality: 'excellent',
      frequency: '107.9 FM',
      tips: 'Strong FM signal. Coastal areas may experience slight interference during adverse weather.'
    },
    {
      name: 'Musselburgh',
      quality: 'good',
      frequency: '107.9 FM',
      tips: 'Good reception in most areas. For best results, position antenna near a window.'
    },
    {
      name: 'Tranent',
      quality: 'good',
      frequency: '107.9 FM',
      tips: 'Generally good signal. Higher elevations will receive stronger signal.'
    },
    {
      name: 'Prestonpans',
      quality: 'good',
      frequency: '107.9 FM',
      tips: 'Good coverage. Buildings may reduce signal strength - try adjusting your antenna.'
    },
    {
      name: 'East Linton',
      quality: 'good',
      frequency: '107.9 FM',
      tips: 'Reliable reception. Rural areas benefit from outdoor or car antenna.'
    },
    {
      name: 'Gullane',
      quality: 'good',
      frequency: '107.9 FM',
      tips: 'Good signal strength. Coastal position may affect reception in stormy conditions.'
    }
  ],
  general: [
    {
      title: 'FM Radio Tips',
      tips: [
        'Extend your antenna fully for best reception',
        'Position radio near a window, preferably facing south',
        'Avoid placing radio near electronic devices that may cause interference',
        'Higher floors typically receive better signal'
      ]
    },
    {
      title: 'DAB Digital Radio',
      tips: [
        'Look for "East Coast FM" in your DAB station list',
        'Requires a DAB+ compatible radio',
        'Crystal clear sound with no interference',
        'May require initial scan to find the station'
      ]
    },
    {
      title: 'Online Streaming',
      tips: [
        'Visit eastcoastfm.co.uk and click "Listen Live"',
        'Works on all devices with internet connection',
        'Ideal for areas outside FM coverage',
        'Recommended for best audio quality'
      ]
    },
    {
      title: 'Troubleshooting',
      tips: [
        'If signal is weak, try repositioning your antenna',
        'Check you\'re tuned to exactly 107.9 FM',
        'Switch to DAB or online stream for guaranteed reception',
        'Contact us if you have persistent reception issues'
      ]
    }
  ]
}
