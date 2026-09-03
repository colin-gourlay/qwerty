import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Radio, Calendar, Users, Newspaper, Play, List, X, Phone, ChatCircle, Envelope, MapPin, Headphones, Info, Heart, HandHeart, ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { STATION_CONFIG, STREAM_URL } from '@/data/config'
import { useState, useEffect } from 'react'
import ShowProfilePage from '@/components/ShowProfilePage'
import PresenterProfilePage from '@/components/PresenterProfilePage'
import ScheduleImageGenerator from '@/components/ScheduleImageGenerator'
import WaysToListenPage from '@/components/WaysToListenPage'
import AboutPage from '@/components/AboutPage'
import HistoryPage from '@/components/HistoryPage'
import DonatePage from '@/components/DonatePage'
import GetInvolvedPage from '@/components/GetInvolvedPage'
import AdvertisingPage from '@/components/AdvertisingPage'
import { shows } from '@/data/shows'
import { schedule } from '@/data/schedule'
import { presenters } from '@/data/presenters'
import { hasUpcomingGigs, upcomingGigs } from '@/data/gigs'
import stationLogo from '@/assets/images/sundown-radio-logo.svg'
import SoundWave from '@/components/SoundWave'
import { AudioPlayerProvider, useAudioPlayer } from '@/components/AudioPlayerContext'
import FloatingAudioPlayer from '@/components/FloatingAudioPlayer'
import SocialLinks from '@/components/SocialLinks'
import CoverageMap from '@/components/CoverageMap'
import FrequencyInfo from '@/components/FrequencyInfo'
import MobileAppDownload from '@/components/MobileAppDownload'
import SundownHeroPanel from '@/components/layout/SundownHeroPanel'
import { FeaturedShowCard } from '@/components/shows/FeaturedShowCard'
import { getGenreColors } from '@/lib/genre-colors'
import { getTimeSlotColors, getTimeOfDayPeriods } from '@/lib/time-slot-colors'

const MAX_HOMEPAGE_SHOWS = 3
const HOMEPAGE_TITLE = `${STATION_CONFIG.name} | ${STATION_CONFIG.tagline}`
const STATION_TITLE_SUFFIX = `| ${STATION_CONFIG.name}`
const STATIC_PAGE_TITLES: Record<string, string> = {
  '/about': 'About',
  '/history': 'History',
  '/schedule': 'Schedule',
  '/shows': 'Shows',
  '/presenters': 'Presenters',
  '/listen': 'Listen Live',
  '/get-involved': 'Get Involved',
  '/news': 'News',
  '/contact': 'Contact',
  '/donate': 'Donate',
  '/advertise': 'Advertise',
}

function formatPageTitle(pageTitle: string): string {
  const trimmedPageTitle = pageTitle.trim()
  if (trimmedPageTitle.toLowerCase().includes(STATION_CONFIG.name.toLowerCase())) {
    return trimmedPageTitle
  }

  return `${trimmedPageTitle} ${STATION_TITLE_SUFFIX}`
}

function resolveDocumentTitle(pathname: string): string {
  if (pathname === '/') {
    return HOMEPAGE_TITLE
  }

  const showPathMatch = pathname.match(/^\/shows\/([^/]+)$/)
  if (showPathMatch) {
    const showId = decodeURIComponent(showPathMatch[1])
    const show = shows.find((entry) => entry.id === showId)
    return formatPageTitle(show?.name ?? 'Show Not Found')
  }

  const presenterPathMatch = pathname.match(/^\/presenters\/([^/]+)$/)
  if (presenterPathMatch) {
    const presenterId = decodeURIComponent(presenterPathMatch[1])
    const presenter = presenters.find((entry) => entry.id === presenterId)
    return formatPageTitle(presenter?.name ?? 'Presenter Not Found')
  }

  const staticPageTitle = STATIC_PAGE_TITLES[pathname]
  if (staticPageTitle) {
    return formatPageTitle(staticPageTitle)
  }

  return STATION_CONFIG.name
}

function TitleManager() {
  const location = useLocation()

  useEffect(() => {
    const documentTitle = resolveDocumentTitle(location.pathname)
    document.title = documentTitle
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <AudioPlayerProvider streamUrl={STREAM_URL}>
      <BrowserRouter>
        <TitleManager />
        <div className="min-h-screen bg-background flex flex-col pb-20">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
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
              <Route path="/get-involved" element={<GetInvolvedPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/advertise" element={<AdvertisingPage />} />
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
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { togglePlay, isPlaying } = useAudioPlayer()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/listen', label: 'Listen', icon: Headphones },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/shows', label: 'Shows', icon: Play },
    { path: '/presenters', label: 'Presenters', icon: Users },
    { path: '/news', label: 'News', icon: Newspaper },
    { path: '/about', label: 'About', icon: Info },
    { path: '/get-involved', label: 'Get Involved', icon: HandHeart },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-8 lg:gap-6 xl:gap-8 transition-all duration-300 ${isScrolled ? 'py-2 lg:py-1.5' : 'py-4 lg:py-3'}`}>
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src={stationLogo} 
              alt={STATION_CONFIG.name}
              className={`w-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110 drop-shadow-md ${isScrolled ? 'h-12 opacity-90' : 'h-14 opacity-100'}`}
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-4 xl:gap-4 2xl:gap-6 flex-wrap justify-end">
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
              className="gap-2 animate-pulse-subtle hover:animate-none bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={togglePlay}
              aria-pressed={isPlaying}
            >
              <Play weight="fill" className="h-4 w-4" aria-hidden="true" />
              {isPlaying ? 'Now Playing' : 'Listen Live'}
              {isPlaying && <SoundWave />}
            </Button>
            <Button 
              size="sm" 
              variant="default"
              className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/donate">
                <Heart weight="fill" className="h-4 w-4" aria-hidden="true" />
                Donate
              </Link>
            </Button>
          </nav>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <List className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-4 mt-8">
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
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
                <Button 
                  className="gap-2 w-full animate-pulse-subtle hover:animate-none bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => {
                    togglePlay()
                    setMobileMenuOpen(false)
                  }}
                  aria-pressed={isPlaying}
                >
                  <Play weight="fill" className="h-4 w-4" aria-hidden="true" />
                  {isPlaying ? 'Now Playing' : 'Listen Live'}
                  {isPlaying && <SoundWave />}
                </Button>
                <Button 
                  className="gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                    <Heart weight="fill" className="h-4 w-4" aria-hidden="true" />
                    Donate
                  </Link>
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
  const homepageShows = shows.filter((show) => show.featured).slice(0, MAX_HOMEPAGE_SHOWS)

  return (
    <div>
      <section className="relative overflow-hidden gradient-hero py-12 page-section">
        <div className="absolute inset-0 pattern-radio-waves opacity-20"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" aria-hidden="true"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/45 backdrop-blur-sm px-3 py-1 text-sm font-medium text-amber-100 mb-4 border border-amber-200/30">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-200"></span>
                </span>
                LIVE NOW
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                {STATION_CONFIG.name}
              </h1>
              <p className="text-xl text-amber-50/90 mb-6 drop-shadow-md">
                {STATION_CONFIG.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gap-2 animate-pulse-subtle hover:animate-none bg-amber-200 hover:bg-amber-100 text-slate-950 shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={togglePlay}
                  aria-pressed={isPlaying}
                >
                  <Play weight="fill" className="h-5 w-5" aria-hidden="true" />
                  {isPlaying ? 'Now Playing' : 'Listen Live'}
                  {isPlaying && <SoundWave />}
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-slate-950/20 backdrop-blur-sm border-amber-100/40 text-white hover:bg-amber-100/15 shadow-lg">
                  <Link to="/schedule">View Schedule</Link>
                </Button>
              </div>
            </div>

            <SundownHeroPanel />
          </div>
        </div>
      </section>

      <section className="py-16 page-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Programme discovery</p>
              <h2 className="text-3xl font-bold">On {STATION_CONFIG.name}</h2>
            </div>
            <Link to="/shows" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
              Browse all shows
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageShows.map((show) => (
              <FeaturedShowCard key={show.id} show={show} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 page-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Upcoming Gigs</h2>
          {hasUpcomingGigs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingGigs.map((gig) => (
                <Card key={gig.id} className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{gig.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{gig.date}</p>
                  <p className="text-sm text-muted-foreground">{gig.venue}, {gig.city}</p>
                  {gig.ticketUrl && (
                    <Button variant="outline" size="sm" asChild className="mt-4">
                      <a href={gig.ticketUrl} target="_blank" rel="noopener noreferrer">Get Tickets</a>
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-6 bg-muted/40 border-dashed">
              <p className="text-muted-foreground">No upcoming gigs currently scheduled.</p>
            </Card>
          )}
        </div>
      </section>

      <MobileAppDownload />
    </div>
  )
}

function SchedulePage() {
  const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const timeOfDayPeriods = getTimeOfDayPeriods()
  
  return (
    <div>
      <section className="relative overflow-hidden gradient-schedule py-20 page-section">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Weekly Schedule</h1>
                <p className="text-xl text-white/90 drop-shadow-md">
                  Tune in to your favorite shows throughout the week
                </p>
              </div>
              <ScheduleImageGenerator />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="mb-8">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Time of Day</h3>
        <div className="flex flex-wrap gap-3">
          {timeOfDayPeriods.map((period) => (
            <div key={period.label} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full border-2"
                style={{ 
                  backgroundColor: period.color,
                  borderColor: period.color
                }}
              />
              <div className="text-sm">
                <span className="font-medium">{period.label}</span>
                <span className="text-muted-foreground ml-1.5 font-mono text-xs">
                  {period.range}
                </span>
              </div>
            </div>
          ))}
        </div>
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
                  
                  const genreColors = getGenreColors(show.genre)
                  const timeColors = getTimeSlotColors(slot.startTime)
                  
                  return (
                    <Link key={idx} to={`/shows/${show.id}`}>
                      <Card 
                        className="p-4 hover:shadow-md transition-all duration-200 border-l-4"
                        style={{ 
                          borderLeftColor: timeColors.accent,
                          backgroundColor: `color-mix(in oklch, ${timeColors.bg} 30%, white)`
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div 
                              className="font-mono text-sm font-semibold px-3 py-1.5 rounded-md"
                              style={{
                                backgroundColor: timeColors.bg,
                                color: timeColors.text
                              }}
                            >
                              {slot.startTime} - {slot.endTime}
                            </div>
                          </div>
                          <div 
                            className="w-1 h-12 rounded-full flex-shrink-0"
                            style={{ backgroundColor: genreColors.bg }}
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg truncate">{show.name}</h3>
                            <p className="text-sm text-muted-foreground truncate">{show.genre}</p>
                          </div>
                          <Badge 
                            className="flex-shrink-0 border"
                            style={{ 
                              backgroundColor: genreColors.bg,
                              color: genreColors.text,
                              borderColor: genreColors.border
                            }}
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
    </div>
  )
}

function ShowsPage() {
  return (
    <div>
      <section className="relative overflow-hidden gradient-shows py-20 page-section">
        <div className="absolute inset-0 pattern-circles opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Our Shows</h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Discover the diverse range of programming on Sundown Radio. From music and entertainment to news and specialist shows, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shows.map((show) => {
          const genreColors = getGenreColors(show.genre)
          
          return (
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
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md border"
                      style={{
                        backgroundColor: genreColors.bg,
                        color: genreColors.text,
                        borderColor: genreColors.border
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
          )
        })}
        </div>
      </div>
    </div>
  )
}

function PresentersPage() {
  return (
    <div>
      <section className="relative overflow-hidden gradient-presenters py-20 page-section">
        <div className="absolute inset-0 pattern-diagonal-lines opacity-15"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Meet Our Presenters</h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Get to know the talented team behind Sundown Radio. Our presenters bring passion, expertise, and personality to everything they do.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
  const whatsappNumber = STATION_CONFIG.whatsapp.replace(/\s/g, '').replace(/^\+/, '')
  const whatsappInternationalNumber = whatsappNumber.startsWith('0')
    ? `44${whatsappNumber.slice(1)}`
    : whatsappNumber.startsWith('0044')
      ? whatsappNumber.slice(2)
      : whatsappNumber.startsWith('44') && whatsappNumber.length === 12
      ? whatsappNumber
      : `44${whatsappNumber}`

  return (
    <div>
      <section className="relative overflow-hidden gradient-contact py-20 page-section">
        <div className="absolute inset-0 pattern-grid opacity-15"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Contact Us</h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              {STATION_CONFIG.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="grid gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ChatCircle className="h-6 w-6 text-primary" weight="duotone" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">WhatsApp</div>
                  <a 
                    href={`https://wa.me/${whatsappInternationalNumber}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {STATION_CONFIG.whatsapp}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" weight="duotone" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">Phone</div>
                  <a 
                    href={`tel:+44${STATION_CONFIG.phone.replace(/[^0-9]/g, '').slice(1)}`}
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
                  <Envelope className="h-6 w-6 text-primary" weight="duotone" aria-hidden="true" />
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
                  <MapPin className="h-6 w-6 text-primary" weight="duotone" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">Address</div>
                  <div className="text-muted-foreground">
                    {STATION_CONFIG.address.street}<br />
                    {STATION_CONFIG.address.city}
                    {STATION_CONFIG.address.postcode ? (
                      <>
                        <br />
                        {STATION_CONFIG.address.postcode}
                      </>
                    ) : null}
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
                <Radio className="h-6 w-6 text-primary-foreground" weight="bold" aria-hidden="true" />
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
            <ul aria-label="Quick links" className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/history" className="text-muted-foreground hover:text-foreground">History</Link></li>
              <li><Link to="/listen" className="text-muted-foreground hover:text-foreground">Ways to Listen</Link></li>
              <li><Link to="/schedule" className="text-muted-foreground hover:text-foreground">Schedule</Link></li>
              <li><Link to="/shows" className="text-muted-foreground hover:text-foreground">Shows</Link></li>
              <li><Link to="/presenters" className="text-muted-foreground hover:text-foreground">Presenters</Link></li>
              <li><Link to="/get-involved" className="text-muted-foreground hover:text-foreground">Get Involved</Link></li>
              <li><Link to="/donate" className="text-muted-foreground hover:text-foreground">Donate</Link></li>
              <li><Link to="/advertise" className="text-muted-foreground hover:text-foreground">Advertise</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul aria-label="Contact information" className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ChatCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>{STATION_CONFIG.whatsapp}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>{STATION_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Envelope className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>{STATION_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {STATION_CONFIG.address.city}
                  {STATION_CONFIG.address.postcode ? `, ${STATION_CONFIG.address.postcode}` : ''}
                </span>
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
