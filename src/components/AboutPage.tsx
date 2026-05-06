import { Card } from '@/components/ui/card'
import { Radio, Heart, Users, Broadcast } from '@phosphor-icons/react'
import { STATION_CONFIG } from '@/data/config'
import stationLogo from '@/assets/images/station-logo.webp'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img 
            src={stationLogo} 
            alt={STATION_CONFIG.name}
            className="h-24 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">About {STATION_CONFIG.name}</h1>
          <p className="text-xl text-muted-foreground">
            {STATION_CONFIG.tagline}
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-muted-foreground mb-4">
              East Coast FM is East Lothian's community radio station, broadcasting on 107.9 FM, DAB digital radio, and online. We're passionate about serving our local community with a diverse mix of music, talk shows, news, and entertainment that reflects the vibrant character of East Lothian.
            </p>
            <p className="text-muted-foreground">
              Since our launch, we've been dedicated to giving a voice to the people of East Lothian, showcasing local talent, supporting community initiatives, and keeping our listeners informed and entertained around the clock.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" weight="duotone" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community First</h3>
                  <p className="text-sm text-muted-foreground">
                    We're run by the community, for the community. Our programming reflects the diverse interests, cultures, and voices of East Lothian.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" weight="duotone" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Local Talent</h3>
                  <p className="text-sm text-muted-foreground">
                    Our volunteer presenters bring passion and expertise to every show, creating programming that's authentic and engaging.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Broadcast className="h-6 w-6 text-primary" weight="duotone" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Always On Air</h3>
                  <p className="text-sm text-muted-foreground">
                    Broadcasting 24/7 on FM, DAB, and online, we're here whenever you need us with music, talk, and companionship.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Radio className="h-6 w-6 text-primary" weight="duotone" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Diverse Programming</h3>
                  <p className="text-sm text-muted-foreground">
                    From breakfast shows to specialist music programs, local news to community features - there's something for everyone.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Our mission is to be the beating heart of East Lothian's media landscape, providing a platform for local voices, celebrating our community's diversity, and keeping our listeners connected, informed, and entertained.
            </p>
            <p className="text-muted-foreground">
              We believe in the power of radio to bring people together, spark conversations, showcase talent, and make a positive difference in our community. Every show, every song, and every word is broadcast with love for East Lothian.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-muted-foreground mb-4">
              East Coast FM is always looking for volunteers, whether you want to present a show, work behind the scenes, or contribute your skills in other ways. We provide full training and support to help you get started.
            </p>
            <p className="text-muted-foreground mb-6">
              If you're interested in volunteering, have an idea for a show, or want to support the station in any way, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${STATION_CONFIG.email}`}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
              >
                Contact Us
              </a>
              <a 
                href={`tel:${STATION_CONFIG.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
              >
                Call {STATION_CONFIG.phone}
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
