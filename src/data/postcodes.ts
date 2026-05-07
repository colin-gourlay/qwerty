export interface PostcodeArea {
  postcode: string
  area: string
  latitude: number
  longitude: number
  signalStrength: 'excellent' | 'good' | 'fair' | 'limited'
  description: string
}

export const postcodeAreas: PostcodeArea[] = [
  {
    postcode: 'EH41',
    area: 'Haddington',
    latitude: 55.9574,
    longitude: -2.7807,
    signalStrength: 'excellent',
    description: 'Excellent signal strength - Primary coverage area'
  },
  {
    postcode: 'EH32',
    area: 'Prestonpans/Tranent',
    latitude: 55.9459,
    longitude: -2.9537,
    signalStrength: 'good',
    description: 'Good signal strength - Clear reception expected'
  },
  {
    postcode: 'EH33',
    area: 'Tranent/Ormiston',
    latitude: 55.9459,
    longitude: -2.9537,
    signalStrength: 'good',
    description: 'Good signal strength - Clear reception expected'
  },
  {
    postcode: 'EH39',
    area: 'North Berwick',
    latitude: 56.0583,
    longitude: -2.7195,
    signalStrength: 'good',
    description: 'Good signal strength - Clear reception expected'
  },
  {
    postcode: 'EH40',
    area: 'East Linton/Dunbar',
    latitude: 55.9897,
    longitude: -2.6565,
    signalStrength: 'excellent',
    description: 'Excellent signal strength - Primary coverage area'
  },
  {
    postcode: 'EH42',
    area: 'Dunbar',
    latitude: 56.0023,
    longitude: -2.5158,
    signalStrength: 'good',
    description: 'Good signal strength - Clear reception expected'
  },
  {
    postcode: 'EH21',
    area: 'Musselburgh',
    latitude: 55.9429,
    longitude: -3.0547,
    signalStrength: 'fair',
    description: 'Fair signal strength - May require good aerial positioning'
  },
  {
    postcode: 'EH22',
    area: 'Dalkeith',
    latitude: 55.8927,
    longitude: -3.0599,
    signalStrength: 'fair',
    description: 'Fair signal strength - May require good aerial positioning'
  },
  {
    postcode: 'EH34',
    area: 'Gorebridge',
    latitude: 55.8488,
    longitude: -3.0438,
    signalStrength: 'limited',
    description: 'Limited signal strength - Consider online streaming'
  },
  {
    postcode: 'EH35',
    area: 'Pathhead',
    latitude: 55.8488,
    longitude: -2.9968,
    signalStrength: 'fair',
    description: 'Fair signal strength - May require good aerial positioning'
  },
  {
    postcode: 'EH36',
    area: 'Humbie',
    latitude: 55.8793,
    longitude: -2.8368,
    signalStrength: 'good',
    description: 'Good signal strength - Clear reception expected'
  },
  {
    postcode: 'EH37',
    area: 'Pencaitland',
    latitude: 55.9135,
    longitude: -2.8893,
    signalStrength: 'good',
    description: 'Good signal strength - Clear reception expected'
  },
  {
    postcode: 'EH38',
    area: 'Gifford',
    latitude: 55.9111,
    longitude: -2.7329,
    signalStrength: 'excellent',
    description: 'Excellent signal strength - Primary coverage area'
  }
]

export const signalStrengthConfig = {
  excellent: {
    color: 'oklch(0.70 0.20 145)',
    label: 'Excellent',
    icon: '●●●●',
    opacity: 0.8
  },
  good: {
    color: 'oklch(0.65 0.18 35)',
    label: 'Good',
    icon: '●●●○',
    opacity: 0.6
  },
  fair: {
    color: 'oklch(0.75 0.15 85)',
    label: 'Fair',
    icon: '●●○○',
    opacity: 0.4
  },
  limited: {
    color: 'oklch(0.60 0.15 25)',
    label: 'Limited',
    icon: '●○○○',
    opacity: 0.3
  }
}
