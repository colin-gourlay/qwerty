import { DeviceMobile, AppleLogo, GooglePlayLogo, Radio, SpeakerHigh } from '@phosphor-icons/react'
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
              How do you want to listen? Choose the option that matches your device and follow the next step.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <AppleLogo className="h-7 w-7 text-primary" weight="fill" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Listen on iPhone or iPad</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use the {STATION_CONFIG.name} app for listening on Apple mobile devices.
                  </p>
                </div>
              </div>
              {STATION_CONFIG.apps?.ios ? (
                <Button 
                  className="w-full gap-2 h-12 text-base"
                  asChild
                >
                  <a 
                    href={STATION_CONFIG.apps.ios} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Download the ${STATION_CONFIG.name} iPhone and iPad app from the App Store (opens in a new tab)`}
                  >
                    <AppleLogo className="h-5 w-5" weight="fill" />
                    Download on the App Store
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              ) : (
                <div
                  className="w-full gap-2 h-12 text-base rounded-md border border-input bg-muted/40 text-muted-foreground inline-flex items-center justify-center"
                  role="status"
                >
                  <AppleLogo className="h-5 w-5" weight="fill" />
                  App Store link coming soon
                </div>
              )}
              {!STATION_CONFIG.apps?.ios && (
                <p className="text-xs text-muted-foreground mt-3">
                  The App Store listing is being reactivated and will be published here once available.
                </p>
              )}
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GooglePlayLogo className="h-7 w-7 text-primary" weight="fill" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Listen on Android</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Install the {STATION_CONFIG.name} app from Google Play on your Android phone or tablet.
                  </p>
                </div>
              </div>
              {STATION_CONFIG.apps?.android ? (
                <Button 
                  className="w-full gap-2 h-12 text-base"
                  asChild
                >
                  <a 
                    href={STATION_CONFIG.apps.android} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Get the ${STATION_CONFIG.name} Android app on Google Play (opens in a new tab)`}
                  >
                    <GooglePlayLogo className="h-5 w-5" weight="fill" />
                    Get it on Google Play
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              ) : (
                <div
                  className="w-full gap-2 h-12 text-base rounded-md border border-input bg-muted/40 text-muted-foreground inline-flex items-center justify-center"
                  role="status"
                >
                  <GooglePlayLogo className="h-5 w-5" weight="fill" />
                  Google Play link coming soon
                </div>
              )}
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <SpeakerHigh className="h-7 w-7 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Listen with Alexa</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ask your Echo or Alexa-enabled speaker to play {STATION_CONFIG.name} via TuneIn.
                  </p>
                </div>
              </div>
              <blockquote className="rounded-lg bg-muted/60 p-4 text-sm mb-4" role="note">
                <span className="sr-only">Voice command example: </span>
                {`“Alexa, play ${STATION_CONFIG.name} on TuneIn”`}
              </blockquote>
              {STATION_CONFIG.tunein ? (
                <Button
                  variant="outline"
                  className="w-full gap-2 h-12 text-base"
                  asChild
                >
                  <a
                    href={STATION_CONFIG.tunein}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open the ${STATION_CONFIG.name} TuneIn listing for Alexa setup (opens in a new tab)`}
                  >
                    <Radio className="h-5 w-5" />
                    Open TuneIn listing
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              ) : (
                <div
                  className="w-full gap-2 h-12 text-base rounded-md border border-input bg-muted/40 text-muted-foreground inline-flex items-center justify-center"
                  role="status"
                >
                  <Radio className="h-5 w-5" />
                  TuneIn listing coming soon
                </div>
              )}
            </Card>
          </div>

          {STATION_CONFIG.radioGarden && (
            <div className="text-center text-sm text-muted-foreground">
              Prefer a radio directory?{' '}
              <a
                href={STATION_CONFIG.radioGarden}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:text-primary/80"
                aria-label={`Open the ${STATION_CONFIG.name} Radio Garden listing (opens in a new tab)`}
              >
                Open {STATION_CONFIG.name} in Radio Garden
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
