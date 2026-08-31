import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Envelope, MapPin, Users, Microphone, Wrench, CurrencyDollar, FileText, Coffee, Heart, GraduationCap, Smiley } from '@phosphor-icons/react'
import { STATION_CONFIG } from '@/data/config'

export default function GetInvolvedPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-muted-foreground">
            Join our friendly team of volunteers and help make a difference in East Lothian
          </p>
        </div>

        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" weight="duotone" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Everyone's Welcome</h2>
              <p className="text-lg text-muted-foreground">
                Sundown Radio relies entirely on its team of volunteers. We are a friendly, mixed bunch, of all ages and abilities and we are always looking for new members.
              </p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground ml-16">
            Presenting, technical, fundraising, helping with the paperwork… everyone's welcome.
          </p>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Join as a Member?</h2>
          <Card className="p-6 mb-6">
            <p className="text-lg mb-4">
              You don't have to be a Member to support the Station, but if you do join then <strong>you get a say in how it's run</strong>.
            </p>
            <p className="text-muted-foreground">
              And being a Member doesn't have to mean that you will be heard on the radio! An organisation like ours needs lots more than just Presenters.
            </p>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ways to Get Involved</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <Microphone className="h-8 w-8 text-primary flex-shrink-0" weight="duotone" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Presenting</h3>
                  <p className="text-sm text-muted-foreground">
                    Host your own show and share your passion with the community
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <Wrench className="h-8 w-8 text-primary flex-shrink-0" weight="duotone" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Technical Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Help maintain studio equipment and outside broadcast gear
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <CurrencyDollar className="h-8 w-8 text-primary flex-shrink-0" weight="duotone" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Fundraising</h3>
                  <p className="text-sm text-muted-foreground">
                    Support fundraising efforts and find advertisers
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="h-8 w-8 text-primary flex-shrink-0" weight="duotone" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Administration</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep accounts in order and help with paperwork
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <Phone className="h-8 w-8 text-primary flex-shrink-0" weight="duotone" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Man the telephones and help with listener queries
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <Coffee className="h-8 w-8 text-primary flex-shrink-0" weight="duotone" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">General Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Even just making the tea helps keep the station running!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-muted/50">
            <p className="text-muted-foreground">
              For those with the desire to get more involved, shows need producers to help with keeping them running smoothly; the equipment we have in our studios and for outside broadcasts needs to be maintained; and occasionally we find ourselves needing unusual skills for particular jobs (like a rigger to climb up the transmission mast!).
            </p>
          </Card>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="flex items-start gap-3 mb-3">
                <GraduationCap className="h-10 w-10 text-accent flex-shrink-0" weight="duotone" />
                <h3 className="text-2xl font-bold">Learn New Skills</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                If you don't have the skills you'd like to have, we can help you get them. We have an ever increasing list of former members who have gone on from volunteering at Sundown Radio to study media at university, or to work for commercial stations and the BBC.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex items-start gap-3 mb-3">
                <Smiley className="h-10 w-10 text-primary flex-shrink-0" weight="duotone" />
                <h3 className="text-2xl font-bold">It's Fun!</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Most importantly, it's fun and you will be giving something back to the community in East Lothian.
              </p>
            </Card>
          </div>
        </section>

        <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-12">
          <div className="text-center mb-6">
            <Heart className="h-12 w-12 mx-auto mb-4" weight="duotone" />
            <h2 className="text-3xl font-bold mb-3">Whatever You Can Bring</h2>
            <p className="text-lg opacity-95">
              If you'd like to gain experience, no matter what your age, regardless of any additional need you might have, you will be made very welcome at Sundown Radio.
            </p>
          </div>
        </Card>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Ready to Join Us?</h2>
          <p className="text-center text-lg text-muted-foreground mb-8">
            We're looking forward to meeting you! Get in touch and we'll happily answer any questions you might have.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Envelope className="h-6 w-6 text-primary" weight="duotone" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a 
                href={`mailto:${STATION_CONFIG.email}`}
                className="text-sm text-primary hover:underline break-all"
              >
                {STATION_CONFIG.email}
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-primary" weight="duotone" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a 
                href={`tel:${STATION_CONFIG.phone.replace(/\s/g, '')}`}
                className="text-sm text-primary hover:underline"
              >
                {STATION_CONFIG.phone}
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-primary" weight="duotone" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                {STATION_CONFIG.address.street}<br />
                {STATION_CONFIG.address.city}
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="gap-2" asChild>
              <a href={`mailto:${STATION_CONFIG.email}`}>
                <Envelope className="h-5 w-5" weight="duotone" />
                Get in Touch
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
