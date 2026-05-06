import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Radio, Calendar, Users, Newspaper, Play, List, X, Phone, ChatCircle, Envelope, MapPin, Headphones, Info } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { STATION_CONFIG, STREAM_URL } from '@/data/config'
import { useState } from 'react'
import ShowProfilePage from '@/components/ShowProfilePage'
import PresenterProfilePage from '@/components/PresenterProfilePage'
import ScheduleImageGenerator from '@/components/ScheduleImageGenerator'
import WaysToListenPage from '@/components/WaysToListenPage'
import AboutPage from '@/components/AboutPage'
import HistoryPage from '@/components/HistoryPage'
import { shows } from '@/data/shows'
import { schedule } from '@/data/schedule'
import { presenters } from '@/data/presenters'
import stationLogo from '@/assets/images/station-logo.webp'
import SoundWave from '@/components/SoundWave'
import { AudioPlayerProvider, useAudioPlayer } from '@/components/AudioPlayerContext'
import FloatingAudioPlayer from '@/components/FloatingAudioPlayer'
import SocialLinks from '@/components/SocialLinks'
import CoverageMap from '@/components/CoverageMap'
import FrequencyInfo from '@/components/FrequencyInfo'
import MobileAppDownload from '@/components/MobileAppDownload'

export default function App() {
  return (
    <AudioPlayerProvider streamUrl={STREAM_URL}>
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col pb-20">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/shows" element={<ShowsPage />} />
              <Route path="/shows/:showId" element={<ShowProfilePage />} />
              <Route path="/presenters" element={<PresentersPage />} />
              <Route path="/presenters/:presenterId" element={<PresenterProfilePage />} />
              <Route path="/listen" element={<WaysToListenPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingAudioPlayer />
        </div>
      </BrowserRouter>
    </AudioPlayerProvider>
  )
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { togglePlay, isPlaying } = useAudioPlayer()

  const navItems = [
    { path: '/', label: 'Home', icon: Radio },
    { path: '/about', label: 'About', icon: Info },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/shows', label: 'Shows', icon: Play },
    { path: '/presenters', label: 'Presenters', icon: Users },
    { path: '/listen', label: 'Listen', icon: Headphones },
    { path: '/news', label: 'News', icon: Newspaper },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src={stationLogo} 
              alt={STATION_CONFIG.name}
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="gap-2 animate-pulse-subtle hover:animate-none"
              onClick={togglePlay}
            >
              <Play weight="fill" className="h-4 w-4" />
              {isPlaying ? 'Now Playing' : 'Listen Live'}
              {isPlaying && <SoundWave />}
            </Button>
          </nav>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <List className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                        isActive(item.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
                <Button 
                  className="gap-2 w-full animate-pulse-subtle hover:animate-none"
                  onClick={() => {
                    togglePlay()
                    setMobileMenuOpen(false)
                  }}
                >
                  <Play weight="fill" className="h-4 w-4" />
                  {isPlaying ? 'Now Playing' : 'Listen Live'}
                  {isPlaying && <SoundWave />}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function HomePage() {
  const { togglePlay, isPlaying } = useAudioPlayer()

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              LIVE NOW
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              {STATION_CONFIG.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {STATION_CONFIG.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2 animate-pulse-subtle hover:animate-none"
                onClick={togglePlay}
              >
                <Play weight="fill" className="h-5 w-5" />
                {isPlaying ? 'Now Playing' : 'Listen Live'}
                {isPlaying && <SoundWave />}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/schedule">View Schedule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Shows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video rounded-md bg-muted mb-4"></div>
                <h3 className="font-semibold text-lg mb-2">Show Title {i}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Description of the show goes here
                </p>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileAppDownload />
    </div>
  )
}

function SchedulePage() {
  const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">Weekly Schedule</h1>
          <p className="text-muted-foreground">
            Tune in to your favorite shows throughout the week
          </p>
        </div>
        <ScheduleImageGenerator />
      </div>

      <div className="grid gap-8">
        {weekDays.map((day) => {
          const daySchedule = schedule.filter(slot => slot.day === day)
          
          return (
            <div key={day} className="space-y-4">
              <h2 className="text-2xl font-bold capitalize">{day}</h2>
              <div className="grid gap-3">
                {daySchedule.map((slot, idx) => {
                  const show = shows.find(s => s.id === slot.showId)
                  if (!show) return null
                  
                  return (
                    <Link key={idx} to={`/shows/${show.id}`}>
                      <Card className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="font-mono text-sm font-semibold text-muted-foreground">
                              {slot.startTime} - {slot.endTime}
                            </div>
                          </div>
                          <div 
                            className="w-1 h-12 rounded-full flex-shrink-0"
                            style={{ backgroundColor: show.color }}
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg truncate">{show.name}</h3>
                            <p className="text-sm text-muted-foreground truncate">{show.genre}</p>
                          </div>
                          <Badge 
                            className="flex-shrink-0"
                            style={{ backgroundColor: show.color }}
                          >
                            {show.genre}
                          </Badge>
                        </div>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ShowsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Shows</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Discover the diverse range of programming on East Coast FM. From music and entertainment to news and specialist shows, there's something for everyone.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shows.map((show) => (
          <Link key={show.id} to={`/shows/${show.id}`}>
            <div className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div 
                className="aspect-video bg-muted relative"
                style={{
                  backgroundColor: show.color ? `${show.color}/20` : undefined
                }}
              >
                <img 
                  src={show.image} 
                  alt={show.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-2">
                  <span 
                    className="inline-block text-xs font-semibold px-2 py-1 rounded"
                    style={{
                      backgroundColor: show.color,
                      color: 'white'
                    }}
                  >
                    {show.genre}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{show.name}</h3>
                {show.schedule && (
                  <p className="text-sm text-muted-foreground mb-2">{show.schedule}</p>
                )}
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                  {show.description}
                </p>
                <Button variant="ghost" size="sm" className="mt-4 w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function PresentersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Meet Our Presenters</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Get to know the talented team behind East Coast FM. Our presenters bring passion, expertise, and personality to everything they do.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {presenters.map((presenter) => (
          <Link key={presenter.id} to={`/presenters/${presenter.id}`}>
            <div className="text-center hover:scale-105 transition-transform">
              <img
                src={presenter.image}
                alt={presenter.name}
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-border hover:border-primary transition-colors"
              />
              <h3 className="font-semibold text-xl mb-1">{presenter.name}</h3>
              {presenter.role && (
                <p className="text-sm text-muted-foreground mb-3">{presenter.role}</p>
              )}
              <p className="text-sm text-muted-foreground line-clamp-3 px-4">
                {presenter.bio}
              </p>
              <Button variant="link" className="mt-2">
                View Profile
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function NewsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      <p className="text-muted-foreground mb-8">Stay updated with station news</p>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-muted-foreground mb-8">{STATION_CONFIG.description}</p>
          <div className="grid gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ChatCircle className="h-6 w-6 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">Text Message</div>
                  <a 
                    href={`sms:${STATION_CONFIG.text}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {STATION_CONFIG.text}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">Phone</div>
                  <a 
                    href={`tel:${STATION_CONFIG.phone.replace(/\s/g, '')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {STATION_CONFIG.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Envelope className="h-6 w-6 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">Email</div>
                  <a 
                    href={`mailto:${STATION_CONFIG.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {STATION_CONFIG.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">Address</div>
                  <div className="text-muted-foreground">
                    {STATION_CONFIG.address.street}<br />
                    {STATION_CONFIG.address.city}<br />
                    {STATION_CONFIG.address.postcode}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <CoverageMap />
        </div>
      </div>

      <div className="border-t pt-12">
        <FrequencyInfo />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Radio className="h-6 w-6 text-primary-foreground" weight="bold" />
              </div>
              <div>
                <div className="font-bold">{STATION_CONFIG.name}</div>
                <div className="text-sm text-muted-foreground">{STATION_CONFIG.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              {STATION_CONFIG.description}
            </p>
            <div>
              <h4 className="font-semibold text-sm mb-2">Follow Us</h4>
              <SocialLinks />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/history" className="text-muted-foreground hover:text-foreground">History</Link></li>
              <li><Link to="/listen" className="text-muted-foreground hover:text-foreground">Ways to Listen</Link></li>
              <li><Link to="/schedule" className="text-muted-foreground hover:text-foreground">Schedule</Link></li>
              <li><Link to="/shows" className="text-muted-foreground hover:text-foreground">Shows</Link></li>
              <li><Link to="/presenters" className="text-muted-foreground hover:text-foreground">Presenters</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ChatCircle className="h-4 w-4 flex-shrink-0" />
                <span>{STATION_CONFIG.text}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{STATION_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Envelope className="h-4 w-4 flex-shrink-0" />
                <span>{STATION_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{STATION_CONFIG.address.city}, {STATION_CONFIG.address.postcode}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {STATION_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
