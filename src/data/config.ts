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
  }
}

export const STREAM_URL = STATION_CONFIG.streamUrl
