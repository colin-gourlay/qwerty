import { DeviceMobile, AppleLogo, GooglePlayLogo, WaveformSlash } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { STATION_CONFIG } from '@/data/config'

export default function MobileAppDownload() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <DeviceMobile className="h-8 w-8 text-primary" weight="duotone" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Take {STATION_CONFIG.name} With You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download our free mobile app and listen anywhere, anytime. Get instant access to live streaming, 
              schedule updates, and exclusive content right in your pocket.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <AppleLogo className="h-7 w-7 text-white" weight="fill" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">iOS App</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Available for iPhone and iPad running iOS 13.0 or later. 
                    Optimized for all screen sizes with AirPlay support.
                  </p>
                </div>
              </div>
              <Button 
                className="w-full gap-2 h-12 text-base"
                asChild
              >
                <a 
                  href={STATION_CONFIG.apps?.ios} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AppleLogo className="h-5 w-5" weight="fill" />
                  Download on the App Store
                </a>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <GooglePlayLogo className="h-7 w-7 text-white" weight="fill" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Android App</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Available for Android devices running version 6.0 or higher. 
                    Chromecast ready and Android Auto compatible.
                  </p>
                </div>
              </div>
              <Button 
                className="w-full gap-2 h-12 text-base"
                asChild
              >
                <a 
                  href={STATION_CONFIG.apps?.android} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GooglePlayLogo className="h-5 w-5" weight="fill" />
                  Get it on Google Play
                </a>
              </Button>
            </Card>
          </div>

          {STATION_CONFIG.tunein && (
            <Card className="p-6 mb-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <WaveformSlash className="h-8 w-8 text-accent" weight="duotone" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-semibold text-xl mb-2">Listen on TuneIn</h3>
                  <p className="text-sm text-muted-foreground">
                    Already have TuneIn? Find {STATION_CONFIG.name} on TuneIn Radio and listen on any device, worldwide.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="gap-2 h-12 px-6 flex-shrink-0 border-accent/20 hover:bg-accent/5"
                  asChild
                >
                  <a
                    href={STATION_CONFIG.tunein}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WaveformSlash className="h-5 w-5" />
                    Open in TuneIn
                  </a>
                </Button>
              </div>
            </Card>
          )}

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="font-semibold text-lg mb-4">App Features</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Live Streaming</div>
                  <p className="text-xs text-muted-foreground">
                    Crystal clear audio streaming wherever you are
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Show Schedule</div>
                  <p className="text-xs text-muted-foreground">
                    See what's playing now and coming up next
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Push Notifications</div>
                  <p className="text-xs text-muted-foreground">
                    Get alerts when your favorite shows start
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Offline Mode</div>
                  <p className="text-xs text-muted-foreground">
                    Listen to podcasts and catch-up content offline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
