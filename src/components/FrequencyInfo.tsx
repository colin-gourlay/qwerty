import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Radio, Broadcast, Globe, CheckCircle, Info, Warning, WaveformSlash } from '@phosphor-icons/react'
import { STATION_CONFIG, RECEPTION_TIPS } from '@/data/config'

export default function FrequencyInfo() {
  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent':
        return 'bg-accent text-accent-foreground'
      case 'good':
        return 'bg-secondary text-secondary-foreground'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  const getQualityIcon = (quality: string) => {
    switch (quality) {
      case 'excellent':
        return <CheckCircle weight="fill" className="h-5 w-5 text-accent" />
      case 'good':
        return <CheckCircle weight="fill" className="h-5 w-5 text-secondary" />
      default:
        return <Info weight="fill" className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">How to Tune In</h2>
        <p className="text-muted-foreground mb-6">
          East Coast FM broadcasts across East Lothian on multiple platforms. Choose the option that works best for you.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Radio className="h-8 w-8 text-primary" weight="duotone" />
            </div>
            <h3 className="font-semibold text-xl mb-2">FM Radio</h3>
            <div className="text-3xl font-bold text-primary mb-2">
              {STATION_CONFIG.frequency?.fm} MHz
            </div>
            <p className="text-sm text-muted-foreground">
              Traditional FM broadcasting across East Lothian
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Broadcast className="h-8 w-8 text-primary" weight="duotone" />
            </div>
            <h3 className="font-semibold text-xl mb-2">DAB Digital</h3>
            <div className="text-3xl font-bold text-primary mb-2">
              {STATION_CONFIG.frequency?.dab}
            </div>
            <p className="text-sm text-muted-foreground">
              Crystal clear digital radio quality
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" weight="duotone" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Online</h3>
            <div className="text-lg font-semibold text-primary mb-2">
              {STATION_CONFIG.frequency?.online}
            </div>
            <p className="text-sm text-muted-foreground">
              Stream anywhere with internet access
            </p>
          </Card>

          {STATION_CONFIG.tunein && (
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-accent/20">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <WaveformSlash className="h-8 w-8 text-accent" weight="duotone" />
              </div>
              <h3 className="font-semibold text-xl mb-2">TuneIn Radio</h3>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                asChild
              >
                <a
                  href={STATION_CONFIG.tunein}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen on TuneIn
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Available worldwide via TuneIn app
              </p>
            </Card>
          )}
        </div>
      </div>

      <Tabs defaultValue="locations" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="locations">Reception by Location</TabsTrigger>
          <TabsTrigger value="tips">Reception Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="locations" className="space-y-4 mt-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Coverage Area</h3>
            <p className="text-muted-foreground">
              Check the expected reception quality in your area
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {RECEPTION_TIPS.locations.map((location) => (
              <Card key={location.name} className="p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getQualityIcon(location.quality)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg">{location.name}</h4>
                      <Badge className={getQualityColor(location.quality)}>
                        {location.quality}
                      </Badge>
                    </div>
                    <div className="font-mono text-sm text-muted-foreground mb-2">
                      {location.frequency}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {location.tips}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-5 bg-muted/50 border-dashed">
            <div className="flex items-start gap-3">
              <Warning className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" weight="duotone" />
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong>Outside our coverage area?</strong> No problem! You can always listen online at{' '}
                  <span className="font-semibold text-foreground">{STATION_CONFIG.frequency?.online}</span> or use our mobile app.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6 mt-6">
          {RECEPTION_TIPS.general.map((section) => (
            <Card key={section.title} className="p-6">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle 
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" 
                      weight="fill" 
                    />
                    <span className="text-muted-foreground leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
