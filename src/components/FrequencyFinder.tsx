import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { MapPin, Radio, Globe, Broadcast, CheckCircle, MagnifyingGlass, Warning, DeviceMobile, Headphones } from '@phosphor-icons/react'
import { STATION_CONFIG } from '@/data/config'

interface ReceptionResult {
  quality: 'excellent' | 'good' | 'moderate' | 'poor' | 'none'
  location: string
  recommendations: {
    method: string
    icon: typeof Radio
    title: string
    description: string
    priority: number
    link?: string
  }[]
  distance?: number
}

const COVERAGE_POSTCODES = {
  excellent: [
    'EH41',
    'EH32',
    'EH39',
    'EH40',
    'EH42'
  ],
  good: [
    'EH21',
    'EH22',
    'EH33',
    'EH34',
    'EH35',
    'EH36'
  ],
  moderate: [
    'EH6',
    'EH7',
    'EH15',
    'EH31',
    'EH37',
    'EH38',
    'TD13'
  ]
}

const POSTCODE_LOCATIONS: Record<string, string> = {
  'EH41': 'Haddington',
  'EH32': 'Prestonpans',
  'EH21': 'Musselburgh',
  'EH22': 'Dalkeith',
  'EH33': 'Tranent',
  'EH34': 'Tranent',
  'EH35': 'Tranent',
  'EH36': 'Humbie',
  'EH39': 'North Berwick',
  'EH40': 'East Linton',
  'EH42': 'Dunbar',
  'EH6': 'Leith',
  'EH7': 'Edinburgh',
  'EH15': 'Portobello',
  'EH31': 'Gullane',
  'EH37': 'Pathhead',
  'EH38': 'Heriot',
  'TD13': 'Cockburnspath'
}

export default function FrequencyFinder() {
  const [postcode, setPostcode] = useState('')
  const [result, setResult] = useState<ReceptionResult | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validatePostcode = (postcode: string): boolean => {
    const cleanedPostcode = postcode.replace(/\s/g, '').toUpperCase()
    const ukPostcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i
    const ukOutwardRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?$/i
    
    return ukPostcodeRegex.test(cleanedPostcode) || ukOutwardRegex.test(cleanedPostcode)
  }

  const getReceptionQuality = (postcode: string): 'excellent' | 'good' | 'moderate' | 'poor' | 'none' => {
    const outward = postcode.replace(/\s/g, '').toUpperCase().match(/^[A-Z]{1,2}\d{1,2}[A-Z]?/)?.[0] || ''
    
    if (COVERAGE_POSTCODES.excellent.some(p => outward.startsWith(p))) {
      return 'excellent'
    }
    if (COVERAGE_POSTCODES.good.some(p => outward.startsWith(p))) {
      return 'good'
    }
    if (COVERAGE_POSTCODES.moderate.some(p => outward.startsWith(p))) {
      return 'moderate'
    }
    
    if (outward.startsWith('EH') || outward.startsWith('TD')) {
      return 'poor'
    }
    
    return 'none'
  }

  const getLocationName = (postcode: string): string => {
    const outward = postcode.replace(/\s/g, '').toUpperCase().match(/^[A-Z]{1,2}\d{1,2}[A-Z]?/)?.[0] || ''
    
    for (const [code, location] of Object.entries(POSTCODE_LOCATIONS)) {
      if (outward.startsWith(code)) {
        return location
      }
    }
    
    if (outward.startsWith('EH')) {
      return 'Edinburgh/Lothians area'
    }
    if (outward.startsWith('TD')) {
      return 'Scottish Borders area'
    }
    
    return 'Your location'
  }

  const getRecommendations = (quality: 'excellent' | 'good' | 'moderate' | 'poor' | 'none') => {
    const baseRecommendations = [
      {
        method: 'online',
        icon: Globe,
        title: 'Online Streaming',
        description: `Listen live at ${STATION_CONFIG.frequency?.online} - works anywhere with internet`,
        priority: 1,
        link: '/listen'
      },
      {
        method: 'app',
        icon: DeviceMobile,
        title: 'Mobile App',
        description: 'Download our free app for iOS or Android',
        priority: 2,
        link: '/listen'
      }
    ]

    if (quality === 'excellent') {
      return [
        {
          method: 'fm',
          icon: Radio,
          title: `FM Radio - ${STATION_CONFIG.frequency?.fm} MHz`,
          description: 'Excellent signal strength in your area. Tune your FM radio to 107.6',
          priority: 1
        },
        {
          method: 'dab',
          icon: Broadcast,
          title: 'DAB Digital Radio',
          description: 'Search for "East Coast FM" on your DAB radio for crystal clear quality',
          priority: 2
        },
        ...baseRecommendations
      ]
    }

    if (quality === 'good') {
      return [
        {
          method: 'fm',
          icon: Radio,
          title: `FM Radio - ${STATION_CONFIG.frequency?.fm} MHz`,
          description: 'Good signal in your area. Position antenna near a window for best results',
          priority: 1
        },
        {
          method: 'dab',
          icon: Broadcast,
          title: 'DAB Digital Radio',
          description: 'Recommended for consistent quality without interference',
          priority: 2
        },
        ...baseRecommendations
      ]
    }

    if (quality === 'moderate') {
      return [
        ...baseRecommendations.slice(0, 1),
        {
          method: 'fm',
          icon: Radio,
          title: `FM Radio - ${STATION_CONFIG.frequency?.fm} MHz`,
          description: 'FM signal may be weak. Try an outdoor antenna or elevated position',
          priority: 3
        },
        {
          method: 'dab',
          icon: Broadcast,
          title: 'DAB Digital Radio',
          description: 'May be available if you have a DAB radio',
          priority: 4
        },
        ...baseRecommendations.slice(1)
      ]
    }

    if (quality === 'poor') {
      return [
        ...baseRecommendations,
        {
          method: 'tunein',
          icon: Headphones,
          title: 'TuneIn Radio',
          description: 'Available worldwide via the TuneIn app',
          priority: 3,
          link: STATION_CONFIG.tunein
        }
      ]
    }

    return [
      ...baseRecommendations,
      {
        method: 'tunein',
        icon: Headphones,
        title: 'TuneIn Radio',
        description: 'Listen from anywhere in the world',
        priority: 3,
        link: STATION_CONFIG.tunein
      }
    ]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setResult(null)

    const trimmedPostcode = postcode.trim()

    if (!trimmedPostcode) {
      setError('Please enter a postcode')
      return
    }

    if (!validatePostcode(trimmedPostcode)) {
      setError('Please enter a valid UK postcode (e.g., EH41 4HA or EH41)')
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      const quality = getReceptionQuality(trimmedPostcode)
      const location = getLocationName(trimmedPostcode)
      const recommendations = getRecommendations(quality)

      setResult({
        quality,
        location,
        recommendations: recommendations.sort((a, b) => a.priority - b.priority)
      })
      setIsLoading(false)
    }, 500)
  }

  const getQualityBadge = (quality: string) => {
    switch (quality) {
      case 'excellent':
        return { label: 'Excellent Signal', className: 'bg-accent text-accent-foreground' }
      case 'good':
        return { label: 'Good Signal', className: 'bg-secondary text-secondary-foreground' }
      case 'moderate':
        return { label: 'Moderate Signal', className: 'bg-muted text-muted-foreground' }
      case 'poor':
        return { label: 'Weak Signal', className: 'bg-destructive/20 text-destructive' }
      case 'none':
        return { label: 'Outside Coverage', className: 'bg-muted text-muted-foreground' }
      default:
        return { label: 'Unknown', className: 'bg-muted text-muted-foreground' }
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" weight="duotone" />
          </div>
          <h3 className="text-xl font-bold">Find Your Best Way to Listen</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Enter your postcode to get personalized listening recommendations
        </p>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter UK postcode (e.g., EH41 4HA)"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                className="text-base"
                maxLength={8}
              />
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="gap-2"
            >
              <MagnifyingGlass className="h-4 w-4" weight="bold" />
              {isLoading ? 'Checking...' : 'Find'}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <Warning className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>

        {result && (
          <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" weight="fill" />
              <div className="flex-1">
                <div className="font-semibold">{result.location}</div>
                <div className="text-sm text-muted-foreground">
                  {postcode.toUpperCase()}
                </div>
              </div>
              <Badge className={getQualityBadge(result.quality).className}>
                {getQualityBadge(result.quality).label}
              </Badge>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" weight="fill" />
                Recommended Listening Options
              </h4>
              <div className="space-y-3">
                {result.recommendations.map((rec, index) => {
                  const Icon = rec.icon
                  return (
                    <Card 
                      key={rec.method} 
                      className={`p-4 hover:shadow-md transition-all ${
                        index === 0 ? 'border-primary/30 bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-primary/20' : 'bg-muted'
                        }`}>
                          <Icon 
                            className={`h-5 w-5 ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}
                            weight="duotone" 
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-semibold">{rec.title}</h5>
                            {index === 0 && (
                              <Badge variant="outline" className="text-xs">
                                Recommended
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {rec.description}
                          </p>
                          {rec.link && (
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="px-0 h-auto mt-2"
                              asChild
                            >
                              <a 
                                href={rec.link}
                                target={rec.link.startsWith('http') ? '_blank' : undefined}
                                rel={rec.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                Learn more →
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            {result.quality === 'moderate' || result.quality === 'poor' || result.quality === 'none' ? (
              <Alert>
                <Radio className="h-4 w-4" />
                <AlertDescription>
                  {result.quality === 'none' 
                    ? "You're outside our FM coverage area, but you can still enjoy East Coast FM through online streaming, our mobile app, or TuneIn Radio!"
                    : "FM reception may be limited in your area. We recommend our online streaming service or mobile app for the best listening experience."}
                </AlertDescription>
              </Alert>
            ) : null}
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-muted/30">
        <p className="text-xs text-muted-foreground text-center">
          Coverage information is based on typical reception patterns. Actual signal strength may vary depending on terrain, buildings, and weather conditions.
        </p>
      </div>
    </Card>
  )
}
