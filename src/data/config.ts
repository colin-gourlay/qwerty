import type { StationConfig } from '@/types'

export const STATION_CONFIG: StationConfig = {
  name: 'Sundown Radio',
  tagline: 'Alternative Music After Dark',
  description: 'Broadcasting from the heart of East Lothian, bringing you the best in music, talk, and community programming 24/7.',
  broadcastLabel: '107.6 FM',
  coverageArea: 'East Lothian',
  streamUrl: 'http://radio.canstream.co.uk:8117/live.mp3',
  phone: '07555 610 811',
  whatsapp: '07555610811',
  email: 'studio@sundownradio.co.uk',
  address: {
    street: '2B Haddington Station Industrial Site',
    city: 'Haddington',
    postcode: 'EH41 3PP'
  },
  social: {
    x: 'https://x.com/SundownRadio',
    facebook: 'https://facebook.com/SundownRadio',
    instagram: 'https://instagram.com/sundownradio',
    youtube: 'https://youtube.com/@SundownRadio'
  },
  frequency: {
    fm: '107.6',
    online: 'sundownradio.co.uk/listen'
  },
  apps: {
    android: 'https://play.google.com/store/apps/details?id=com.appsidious.sundownradio'
  },
  tunein: 'https://tunein.com/radio/Sundown-Radio-s116429/'
}

export const STREAM_URL = STATION_CONFIG.streamUrl

export const RECEPTION_TIPS = {
  locations: [
    {
      name: 'Haddington',
      quality: 'excellent',
      frequency: '107.6 FM',
      tips: 'Strongest signal in the area. Should receive clearly on most FM radios indoors and outdoors.'
    },
    {
      name: 'North Berwick',
      quality: 'excellent',
      frequency: '107.6 FM',
      tips: 'Excellent reception throughout the town. Position your radio near a window for best results.'
    },
    {
      name: 'Dunbar',
      quality: 'excellent',
      frequency: '107.6 FM',
      tips: 'Strong FM signal. Coastal areas may experience slight interference during adverse weather.'
    },
    {
      name: 'Musselburgh',
      quality: 'good',
      frequency: '107.6 FM',
      tips: 'Good reception in most areas. For best results, position antenna near a window.'
    },
    {
      name: 'Tranent',
      quality: 'good',
      frequency: '107.6 FM',
      tips: 'Generally good signal. Higher elevations will receive stronger signal.'
    },
    {
      name: 'Prestonpans',
      quality: 'good',
      frequency: '107.6 FM',
      tips: 'Good coverage. Buildings may reduce signal strength - try adjusting your antenna.'
    },
    {
      name: 'East Linton',
      quality: 'good',
      frequency: '107.6 FM',
      tips: 'Reliable reception. Rural areas benefit from outdoor or car antenna.'
    },
    {
      name: 'Gullane',
      quality: 'good',
      frequency: '107.6 FM',
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
      title: 'Online Streaming',
      tips: [
        'Visit sundownradio.co.uk and click "Listen Live"',
        'Works on all devices with internet connection',
        'Ideal for areas outside FM coverage',
        'Recommended for best audio quality'
      ]
    },
    {
      title: 'Troubleshooting',
      tips: [
        'If signal is weak, try repositioning your antenna',
        'Check you\'re tuned to exactly 107.6 FM',
        'Switch to online stream for guaranteed reception',
        'Contact us if you have persistent reception issues'
      ]
    }
  ]
}
