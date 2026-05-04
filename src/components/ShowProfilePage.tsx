import { useParams, Link, Navigate } from 'react-router-dom'
import { getShowById } from '@/data/shows'
import { getPresentersByIds } from '@/data/presenters'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Play, Phone, EnvelopeSimple, Hash, Clock, CheckCircle, Star } from '@phosphor-icons/react'
import ShareButton from '@/components/ShareButton'
import { useAudioPlayer } from '@/components/AudioPlayerContext'

export default function ShowProfilePage() {
  const { showId } = useParams<{ showId: string }>()
  
  if (!showId) {
    return <Navigate to="/shows" replace />
  }
  
  const show = getShowById(showId)
  
  if (!show) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Show Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the show you're looking for.
          </p>
          <Button asChild>
            <Link to="/shows">Back to Shows</Link>
          </Button>
        </div>
      </div>
    )
  }
  
  const presenters = getPresentersByIds(show.presenters)
  const { togglePlay } = useAudioPlayer()
  
  return (
    <div>
      <section 
        className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10"
        style={{
          backgroundColor: show.color ? `${show.color}/10` : undefined
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" style={{ backgroundColor: show.color }}>{show.genre}</Badge>
              <h1 className="text-5xl font-bold mb-6">{show.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {show.description}
              </p>
              {show.schedule && (
                <div className="flex items-center gap-2 text-sm font-medium mb-6">
                  <Clock className="h-5 w-5" />
                  {show.schedule}
                </div>
              )}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" onClick={togglePlay}>
                  <Play weight="fill" className="h-5 w-5" />
                  Listen Live
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/schedule">View Full Schedule</Link>
                </Button>
                <ShareButton 
                  title={`${show.name} - East Coast FM`}
                  description={show.description}
                  size="lg"
                />
              </div>
            </div>
            
            <div className="relative">
              <img
                src={show.image}
                alt={show.name}
                className="rounded-xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About the Show</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              {show.fullDescription?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {show.features && show.features.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Show Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {show.features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" weight="fill" />
                      <p className="text-sm">{feature}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {show.highlights && show.highlights.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Highlights & Achievements</h2>
              <div className="space-y-4">
                {show.highlights.map((highlight, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-3">
                      <Star className="h-6 w-6 text-accent flex-shrink-0 mt-1" weight="fill" />
                      <p className="text-sm font-medium">{highlight}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {presenters.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                {presenters.length === 1 ? 'Meet Your Host' : 'Meet Your Hosts'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {presenters.map((presenter) => (
                  <Link key={presenter.id} to={`/presenters/${presenter.id}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                      <div className="flex items-start gap-4">
                        <img
                          src={presenter.image}
                          alt={presenter.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{presenter.name}</h3>
                          {presenter.role && (
                            <p className="text-sm text-muted-foreground mb-2">{presenter.role}</p>
                          )}
                          <p className="text-sm text-muted-foreground line-clamp-3">{presenter.bio}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {show.contact && (
        <>
          <Separator />
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <Card className="p-8">
                  <p className="text-muted-foreground mb-6">
                    Want to get involved with the show? Here's how to reach us:
                  </p>
                  <div className="space-y-4">
                    {show.contact.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-semibold text-sm">Phone</div>
                          <a href={`tel:${show.contact.phone}`} className="text-sm text-muted-foreground hover:text-foreground">
                            {show.contact.phone}
                          </a>
                        </div>
                      </div>
                    )}
                    {show.contact.email && (
                      <div className="flex items-center gap-3">
                        <EnvelopeSimple className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-semibold text-sm">Email</div>
                          <a href={`mailto:${show.contact.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                            {show.contact.email}
                          </a>
                        </div>
                      </div>
                    )}
                    {show.contact.social && (
                      <div className="flex items-center gap-3">
                        <Hash className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-semibold text-sm">Social Media</div>
                          <p className="text-sm text-muted-foreground">{show.contact.social}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
