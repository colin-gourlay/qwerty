import { 
  Radio, 
  DeviceMobile, 
  Globe, 
  AppleLogo, 
  GooglePlayLogo, 
  WaveformSlash,
  Broadcast,
  Waveform,
  Play,
  Microphone,
  ChatCenteredText
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { STATION_CONFIG, RECEPTION_TIPS } from '@/data/config'
import { useAudioPlayer } from '@/components/AudioPlayerContext'
import SoundWave from '@/components/SoundWave'

export default function WaysToListenPage() {
  const { togglePlay, isPlaying } = useAudioPlayer()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Ways to Listen</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tune into {STATION_CONFIG.name} however you prefer. From traditional FM radio to modern streaming apps, 
            we've got you covered across East Lothian and beyond.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Broadcast className="h-8 w-8 text-primary" weight="duotone" />
            Traditional Radio
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Radio className="h-8 w-8 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <Badge className="mb-2">Most Popular</Badge>
                  <h3 className="font-semibold text-2xl mb-2">FM Radio</h3>
                  <div className="text-4xl font-bold text-primary mb-3">107.9 FM</div>
                  <p className="text-sm text-muted-foreground">
                    The classic way to listen. Simply tune your FM radio to 107.9 and enjoy crystal clear reception 
                    across East Lothian.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 border">
                <h4 className="font-semibold text-sm mb-2">Coverage Area</h4>
                <p className="text-xs text-muted-foreground">
                  Haddington, North Berwick, Dunbar, Musselburgh, Tranent, Prestonpans, East Linton, Gullane, 
                  and surrounding areas
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Waveform className="h-8 w-8 text-secondary-foreground" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-2xl mb-2">DAB Digital Radio</h3>
                  <div className="text-2xl font-bold text-secondary-foreground mb-3">East Coast FM</div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Superior digital quality with no interference. Look for "East Coast FM" on your DAB+ radio's station list.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Benefits</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    Crystal clear digital sound
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    No static or interference
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    On-screen station information
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className="h-8 w-8 text-primary" weight="duotone" />
            Online Streaming
          </h2>
          
          <Card className="p-8 mb-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <Play className="h-10 w-10 text-accent" weight="fill" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <Badge className="mb-3 bg-accent text-accent-foreground">Recommended</Badge>
                <h3 className="font-semibold text-2xl mb-2">Listen Live Online</h3>
                <p className="text-muted-foreground mb-4">
                  Stream {STATION_CONFIG.name} directly from our website. Works on any device with an internet connection—
                  perfect for listeners beyond our FM coverage area or anyone who wants guaranteed reception.
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available worldwide • High quality audio • No app required
                </div>
              </div>
              <Button
                size="lg"
                className="gap-2 animate-pulse-subtle hover:animate-none flex-shrink-0"
                onClick={togglePlay}
              >
                <Play weight="fill" className="h-5 w-5" />
                {isPlaying ? 'Now Playing' : 'Listen Live'}
                {isPlaying && <SoundWave />}
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <WaveformSlash className="h-8 w-8 text-secondary-foreground" weight="duotone" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-semibold text-xl mb-2">TuneIn Radio</h3>
                <p className="text-sm text-muted-foreground">
                  Already using TuneIn? Find {STATION_CONFIG.name} in the TuneIn directory and listen on any of your devices.
                  Available on web, mobile, smart speakers, and car systems.
                </p>
              </div>
              <Button
                variant="outline"
                className="gap-2 h-12 px-6 flex-shrink-0"
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
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Microphone className="h-8 w-8 text-primary" weight="duotone" />
            Listen on Smart Speakers
          </h2>
          <p className="text-muted-foreground mb-6">
            Control {STATION_CONFIG.name} with just your voice. Our station is available on both Amazon Alexa and Google Assistant devices.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-500/5 to-blue-600/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                  <Microphone className="h-8 w-8 text-white" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-2xl mb-2">Amazon Alexa</h3>
                  <p className="text-sm text-muted-foreground">
                    Available on Echo, Echo Dot, Echo Show, and all Alexa-enabled devices
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4 border-2 border-blue-500/20">
                  <div className="flex items-start gap-3 mb-3">
                    <ChatCenteredText className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" weight="duotone" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">Say to your Alexa device:</h4>
                      <div className="bg-muted rounded-md p-3 font-mono text-sm">
                        "Alexa, play East Coast FM"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-3">Other voice commands:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                      <span>"Alexa, ask TuneIn to play East Coast FM"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                      <span>"Alexa, open East Coast FM"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                      <span>"Alexa, resume East Coast FM"</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Tip:</strong> You can also enable the East Coast FM skill 
                    in the Alexa app for enhanced features and easier access.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-500/5 to-emerald-600/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Microphone className="h-8 w-8 text-white" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-2xl mb-2">Google Assistant</h3>
                  <p className="text-sm text-muted-foreground">
                    Available on Google Home, Nest speakers, and all Assistant-enabled devices
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4 border-2 border-green-500/20">
                  <div className="flex items-start gap-3 mb-3">
                    <ChatCenteredText className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" weight="duotone" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">Say to your Google device:</h4>
                      <div className="bg-muted rounded-md p-3 font-mono text-sm">
                        "Hey Google, play East Coast FM"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-3">Other voice commands:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-2" />
                      <span>"Hey Google, play East Coast FM on TuneIn"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-2" />
                      <span>"Hey Google, tune into 107.9 FM"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-2" />
                      <span>"Hey Google, play the radio"</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Tip:</strong> Set East Coast FM as your default radio 
                    station in the Google Home app for quick access with "Hey Google, play the radio".
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-muted">
            <h3 className="font-semibold text-lg mb-4">Smart Speaker Benefits</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Hands-Free Control</div>
                  <p className="text-xs text-muted-foreground">
                    Start listening without touching any buttons or screens
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Room-Filling Sound</div>
                  <p className="text-xs text-muted-foreground">
                    Enjoy quality audio throughout your home
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Multi-Room Audio</div>
                  <p className="text-xs text-muted-foreground">
                    Play on multiple speakers simultaneously
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Always Ready</div>
                  <p className="text-xs text-muted-foreground">
                    Your smart speaker is always listening for commands
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Voice Control</div>
                  <p className="text-xs text-muted-foreground">
                    Adjust volume, pause, and play with voice commands
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="font-medium text-sm mb-1">Easy Setup</div>
                  <p className="text-xs text-muted-foreground">
                    No app installation needed—just use your voice
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <DeviceMobile className="h-8 w-8 text-primary" weight="duotone" />
            Mobile Apps
          </h2>
          <p className="text-muted-foreground mb-6">
            Take {STATION_CONFIG.name} with you wherever you go. Our free mobile apps give you instant access to live streaming, 
            show schedules, and exclusive content right in your pocket.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <AppleLogo className="h-8 w-8 text-white" weight="fill" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">iOS App</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    For iPhone and iPad • iOS 13.0 or later
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">AirPlay Support</Badge>
                    <Badge variant="secondary" className="text-xs">CarPlay Ready</Badge>
                    <Badge variant="secondary" className="text-xs">Apple Watch</Badge>
                  </div>
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
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <GooglePlayLogo className="h-8 w-8 text-white" weight="fill" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Android App</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    For Android devices • Version 6.0 or higher
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Chromecast Ready</Badge>
                    <Badge variant="secondary" className="text-xs">Android Auto</Badge>
                    <Badge variant="secondary" className="text-xs">Wear OS</Badge>
                  </div>
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

          <Card className="p-6 mt-6 bg-muted">
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
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Reception Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {RECEPTION_TIPS.general.map((category, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Reception by Location</h2>
          <p className="text-muted-foreground mb-6">
            Check the expected reception quality in your area on 107.9 FM:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECEPTION_TIPS.locations.map((location, idx) => (
              <Card key={idx} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{location.name}</h3>
                  <Badge 
                    variant={location.quality === 'excellent' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {location.quality}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2 font-mono">{location.frequency}</p>
                <p className="text-xs text-muted-foreground">{location.tips}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
