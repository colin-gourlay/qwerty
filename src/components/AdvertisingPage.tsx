import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Radio, Globe, MapTrifold, Briefcase, FileText, FilePdf, DownloadSimple, Megaphone, Target, ChartBar, Envelope, Quotes } from '@phosphor-icons/react'
import { 
  generateAdvertisingRatesPDF, 
  generateBookingFormPDF, 
  generateDemographicPDF,
  downloadTextAsPDF 
} from '@/lib/pdf-generator'
import { testimonials } from '@/data/testimonials'

export default function AdvertisingPage() {
  const handleDownloadRates = () => {
    const content = generateAdvertisingRatesPDF()
    downloadTextAsPDF('East-Coast-FM-Advertising-Rates.txt', content)
  }

  const handleDownloadBookingForm = () => {
    const content = generateBookingFormPDF()
    downloadTextAsPDF('East-Coast-FM-Booking-Form.txt', content)
  }

  const handleDownloadDemographic = (area: 'haddington' | 'east-lothian' | 'lothians' | 'south-scotland') => {
    const content = generateDemographicPDF(area)
    const areaName = area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')
    downloadTextAsPDF(`East-Coast-FM-Demographics-${areaName}.txt`, content)
  }
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent mb-6">
            <Megaphone className="h-5 w-5" weight="duotone" />
            ADVERTISING SOLUTIONS
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Advertise With Us</h1>
          <p className="text-xl text-muted-foreground">
            East Coast FM offers a diverse mix of advertising solutions either for broadcast on the station or on our website.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Radio className="h-7 w-7 text-primary" weight="duotone" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Broadcast Advertising</h2>
                <p className="text-muted-foreground">
                  Reach listeners throughout the day with our flexible broadcast advertising packages
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" weight="duotone" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Standard Advertising Packages</h3>
                    <p className="text-muted-foreground">
                      We offer several packages for broadcast advertising. Your ad can be played throughout the day on all shows. This is charged on a <span className="font-semibold text-foreground">"Minimum Plays Per Day"</span> basis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <ChartBar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" weight="duotone" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Show Sponsorship</h3>
                    <p className="text-muted-foreground">
                      We also offer <span className="font-semibold text-foreground">"Show Sponsorship"</span> deals that are incredibly flexible and can be targeted at a more specific audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Globe className="h-7 w-7 text-secondary" weight="duotone" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Website Advertising</h2>
                <p className="text-muted-foreground">
                  Extend your reach with banner and static block advertisements on our website
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Banner Advertising</h3>
                <p className="text-muted-foreground mb-3">
                  We have a <span className="font-semibold text-foreground">Banner Area</span> at the top of our website. These banners rotate on a random basis that equals out over time so that all ads get an equal number of impressions.
                </p>
                <p className="text-muted-foreground">
                  Your advertisement can be displayed on a <span className="font-semibold text-foreground">"Per Day"</span> basis or for longer periods of time.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Static Block Advertisements</h3>
                <p className="text-muted-foreground">
                  We are also developing areas of the site suitable for static block advertisements. In this case, your ad will be visible at all times in its own area of the page.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-accent" weight="duotone" />
              </div>
              <div className="flex-1">
                <Badge className="mb-3 bg-accent text-accent-foreground">FREE SERVICE</Badge>
                <h2 className="text-2xl font-bold mb-2">Situations Vacant</h2>
                <p className="text-muted-foreground">
                  We offer <span className="font-semibold text-foreground">free Situations Vacant advertising</span> to any company regardless of other advertising products.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="h-7 w-7 text-primary" weight="duotone" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Media Presentation</h2>
                <p className="text-muted-foreground mb-6">
                  Click on the icon below to view our comprehensive media presentation
                </p>
                <Button size="lg" className="gap-2">
                  <DownloadSimple className="h-5 w-5" weight="bold" />
                  View Media Presentation
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <FilePdf className="h-7 w-7 text-primary" weight="duotone" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Rates and Bookings</h2>
                <p className="text-muted-foreground mb-6">
                  To inquire further, download and complete these PDF documents:
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={handleDownloadRates}
                  >
                    <DownloadSimple className="h-5 w-5" weight="duotone" />
                    Advertising Rates
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={handleDownloadBookingForm}
                  >
                    <DownloadSimple className="h-5 w-5" weight="duotone" />
                    Advertising Booking Form
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <MapTrifold className="h-7 w-7 text-secondary" weight="duotone" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Our Demographics</h2>
                <p className="text-muted-foreground mb-6">
                  To view our demographic areas please see the following PDF documents:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="gap-2 justify-start"
                    onClick={() => handleDownloadDemographic('haddington')}
                  >
                    <DownloadSimple className="h-5 w-5" weight="duotone" />
                    Haddington
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2 justify-start"
                    onClick={() => handleDownloadDemographic('east-lothian')}
                  >
                    <DownloadSimple className="h-5 w-5" weight="duotone" />
                    East Lothian
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2 justify-start"
                    onClick={() => handleDownloadDemographic('lothians')}
                  >
                    <DownloadSimple className="h-5 w-5" weight="duotone" />
                    The Lothians
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2 justify-start"
                    onClick={() => handleDownloadDemographic('south-scotland')}
                  >
                    <DownloadSimple className="h-5 w-5" weight="duotone" />
                    South Scotland
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
                <Quotes className="h-5 w-5" weight="duotone" />
                ADVERTISER TESTIMONIALS
              </div>
              <h2 className="text-3xl font-bold mb-3">What Our Advertisers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Hear from local businesses who have experienced the benefits of advertising with East Coast FM.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Quotes className="h-6 w-6 text-accent" weight="duotone" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{testimonial.company}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.industry}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.adType === 'broadcast' && 'Broadcast'}
                          {testimonial.adType === 'website' && 'Website'}
                          {testimonial.adType === 'sponsorship' && 'Sponsorship'}
                          {testimonial.adType === 'combined' && 'Broadcast & Web'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Since {testimonial.since}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm">{testimonial.contact}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Envelope className="h-8 w-8 text-primary" weight="duotone" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Interested in Advertising?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                If you are interested or want to know more, drop us an email and we'll be happy to discuss your advertising needs.
              </p>
              <Button size="lg" asChild className="gap-2">
                <a href="mailto:advertising@eastcoastfm.co.uk">
                  <Envelope className="h-5 w-5" weight="bold" />
                  advertising@eastcoastfm.co.uk
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
