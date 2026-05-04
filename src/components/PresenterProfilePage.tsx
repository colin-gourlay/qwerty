import { useParams, Link, Navigate } from 'react-router-dom'
import { getPresenterById } from '@/data/presenters'
import { getShowsByPresenterId } from '@/data/shows'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Play,
  Briefcase,
  CalendarBlank,
  MusicNotes,
  Lightbulb
} from '@phosphor-icons/react'
import ShareButton from '@/components/ShareButton'
import SocialLinks from '@/components/SocialLinks'
import { useAudioPlayer } from '@/components/AudioPlayerContext'

export default function PresenterProfilePage() {
  const { presenterId } = useParams<{ presenterId: string }>()
  
  if (!presenterId) {
    return <Navigate to="/presenters" replace />
  }
  
  const presenter = getPresenterById(presenterId)
  
  if (!presenter) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Presenter Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the presenter you're looking for.
          </p>
          <Button asChild>
            <Link to="/presenters">Back to Presenters</Link>
          </Button>
        </div>
      </div>
    )
  }
  
  const shows = getShowsByPresenterId(presenterId)
  const { togglePlay } = useAudioPlayer()
  
  return (
    <div>
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl font-bold mb-4">{presenter.name}</h1>
              {presenter.role && (
                <div className="flex items-center gap-2 text-lg text-muted-foreground mb-6">
                  <Briefcase className="h-5 w-5" />
                  {presenter.role}
                </div>
              )}
              <p className="text-xl text-muted-foreground mb-6">
                {presenter.bio}
              </p>
              
              {presenter.social && (
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-2">Connect with {presenter.name.split(' ')[0]}</div>
                  <SocialLinks
                    variant="large"
                    twitter={presenter.social.twitter}
                    facebook={presenter.social.facebook}
                    instagram={presenter.social.instagram}
                  />
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" onClick={togglePlay}>
                  <Play weight="fill" className="h-5 w-5" />
                  Listen Live
                </Button>
                {shows.length > 0 && (
                  <Button size="lg" variant="outline" asChild>
                    <a href="#shows">View Shows</a>
                  </Button>
                )}
                <ShareButton 
                  title={`${presenter.name} - East Coast FM`}
                  description={presenter.bio}
                  size="lg"
                />
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <img
                src={presenter.image}
                alt={presenter.name}
                className="rounded-full shadow-2xl w-80 h-80 object-cover border-8 border-background"
              />
            </div>
          </div>
        </div>
      </section>

      {presenter.fullBio && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About {presenter.name.split(' ')[0]}</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                {presenter.fullBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Quick Facts</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {presenter.yearsExperience && (
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CalendarBlank className="h-6 w-6 text-accent flex-shrink-0" weight="fill" />
                    <div>
                      <div className="font-semibold mb-1">Experience</div>
                      <p className="text-sm text-muted-foreground">
                        {presenter.yearsExperience} years in broadcasting
                      </p>
                    </div>
                  </div>
                </Card>
              )}
              
              {presenter.joinedDate && (
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CalendarBlank className="h-6 w-6 text-accent flex-shrink-0" weight="fill" />
                    <div>
                      <div className="font-semibold mb-1">Joined East Coast FM</div>
                      <p className="text-sm text-muted-foreground">
                        {new Date(presenter.joinedDate).toLocaleDateString('en-GB', { 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </Card>
              )}
              
              {presenter.favoriteGenres && presenter.favoriteGenres.length > 0 && (
                <Card className="p-6 sm:col-span-2">
                  <div className="flex items-start gap-3">
                    <MusicNotes className="h-6 w-6 text-accent flex-shrink-0" weight="fill" />
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Favorite Music Genres</div>
                      <div className="flex flex-wrap gap-2">
                        {presenter.favoriteGenres.map((genre, index) => (
                          <Badge key={index} variant="secondary">{genre}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {presenter.funFacts && presenter.funFacts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Fun Facts</h2>
              <div className="space-y-4">
                {presenter.funFacts.map((fact, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-accent flex-shrink-0 mt-1" weight="fill" />
                      <p className="text-sm">{fact}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {shows.length > 0 && (
        <>
          <Separator />
          <section id="shows" className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">
                  {shows.length === 1 ? 'Show' : 'Shows'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {shows.map((show) => (
                    <Link key={show.id} to={`/shows/${show.id}`}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                        <div 
                          className="h-32 bg-gradient-to-br from-primary/20 to-accent/20"
                          style={{
                            backgroundColor: show.color ? `${show.color}/20` : undefined
                          }}
                        >
                          <img
                            src={show.image}
                            alt={show.name}
                            className="w-full h-full object-cover opacity-60"
                          />
                        </div>
                        <div className="p-6">
                          <Badge className="mb-3" style={{ backgroundColor: show.color }}>
                            {show.genre}
                          </Badge>
                          <h3 className="font-semibold text-lg mb-2">{show.name}</h3>
                          {show.schedule && (
                            <p className="text-sm text-muted-foreground mb-3">{show.schedule}</p>
                          )}
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {show.description}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
