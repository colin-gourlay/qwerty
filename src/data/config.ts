import type { StationConfig } from '@/types'

export const STATION_CONFIG: StationConfig = {
  name: 'East Coast FM',
  tagline: 'Your Voice on the Coast',
  description: 'Broadcasting from the heart of the East Coast, bringing you the best in music, talk, and community programming 24/7.',
  streamUrl: 'https://stream.eastcoastfm.radio/live',
  phone: '+44 1234 567890',
  email: 'hello@eastcoastfm.radio',
  address: {
    street: '123 Harbour Road',
    city: 'Coastal Town',
    postcode: 'CT1 2AB'
  },
  social: {
    twitter: '@EastCoastFM',
    facebook: 'EastCoastFM',
    instagram: 'eastcoastfm',
    youtube: '@EastCoastFM'
  }
}

export const STREAM_URL = STATION_CONFIG.streamUrl
