import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Radio, Calendar, Users, Newspaper, Play, List, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { STATION_CONFIG } from '@/data/config'
import { useState } from 'react'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/shows" element={<ShowsPage />} />
            <Route path="/presenters" element={<PresentersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Radio },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/shows', label: 'Shows', icon: Play },
    { path: '/presenters', label: 'Presenters', icon: Users },
    { path: '/news', label: 'News', icon: Newspaper },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Radio className="h-6 w-6 text-primary-foreground" weight="bold" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg">{STATION_CONFIG.name}</div>
              <div className="text-xs text-muted-foreground">{STATION_CONFIG.tagline}</div>
            </div>
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
            <Button size="sm" className="gap-2">
              <Play weight="fill" className="h-4 w-4" />
              Listen Live
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
                <Button className="gap-2 w-full">
                  <Play weight="fill" className="h-4 w-4" />
                  Listen Live
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
              <Button size="lg" className="gap-2">
                <Play weight="fill" className="h-5 w-5" />
                Listen Live
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
    </div>
  )
}

function SchedulePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Weekly Schedule</h1>
      <p className="text-muted-foreground mb-8">Coming soon - full weekly schedule grid</p>
    </div>
  )
}

function ShowsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Shows</h1>
      <p className="text-muted-foreground mb-8">Explore all our radio shows</p>
    </div>
  )
}

function PresentersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Meet Our Presenters</h1>
      <p className="text-muted-foreground mb-8">The voices of East Coast FM</p>
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
      <div className="max-w-2xl">
        <p className="text-muted-foreground mb-6">{STATION_CONFIG.description}</p>
        <div className="space-y-4">
          <div>
            <div className="font-semibold">Phone</div>
            <div className="text-muted-foreground">{STATION_CONFIG.phone}</div>
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-muted-foreground">{STATION_CONFIG.email}</div>
          </div>
          <div>
            <div className="font-semibold">Address</div>
            <div className="text-muted-foreground">
              {STATION_CONFIG.address.street}<br />
              {STATION_CONFIG.address.city}<br />
              {STATION_CONFIG.address.postcode}
            </div>
          </div>
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
                <Radio className="h-6 w-6 text-primary-foreground" weight="bold" />
              </div>
              <div>
                <div className="font-bold">{STATION_CONFIG.name}</div>
                <div className="text-sm text-muted-foreground">{STATION_CONFIG.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              {STATION_CONFIG.description}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/schedule" className="text-muted-foreground hover:text-foreground">Schedule</Link></li>
              <li><Link to="/shows" className="text-muted-foreground hover:text-foreground">Shows</Link></li>
              <li><Link to="/presenters" className="text-muted-foreground hover:text-foreground">Presenters</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{STATION_CONFIG.phone}</li>
              <li>{STATION_CONFIG.email}</li>
              <li>{STATION_CONFIG.address.city}</li>
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
