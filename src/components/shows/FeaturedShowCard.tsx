import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import type { Show } from '@/types'
import { getGenreColors } from '@/lib/genre-colors'

const DEFAULT_PROGRAMME_COLOR = 'oklch(0.58 0.11 215)'
const PROGRAMME_ART_END_COLOR = 'oklch(0.16 0.05 260)'

interface FeaturedShowCardProps {
  show: Show
}

export function FeaturedShowCard({ show }: FeaturedShowCardProps) {
  const genreColors = getGenreColors(show.genre)
  const scheduleLabel = show.broadcastSummary ?? show.schedule
  const showLinkLabel = [show.name, show.strapline, scheduleLabel].filter(Boolean).join(' · ')

  return (
    <Link
      to={`/shows/${show.id}`}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={showLinkLabel}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${show.color ?? DEFAULT_PROGRAMME_COLOR} 0%, ${PROGRAMME_ART_END_COLOR} 100%)`
          }}
        >
          <div
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/25"
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-8 left-8 h-24 w-24 rounded-full border border-white/25"
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.22),transparent_26%),linear-gradient(0deg,rgba(15,23,42,0.72),transparent_60%)]" aria-hidden="true"></div>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <h3 className="text-2xl font-bold leading-tight drop-shadow-md">{show.name}</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="flex flex-wrap gap-2">
            <span
              className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: genreColors.bg,
                color: genreColors.text,
                borderColor: genreColors.border
              }}
            >
              {show.genre}
            </span>
            {scheduleLabel && (
              <span className="inline-flex rounded-full border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                {scheduleLabel}
              </span>
            )}
          </div>
          {show.strapline && (
            <p className="text-base font-semibold text-foreground">{show.strapline}</p>
          )}
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{show.description}</p>
          <div className="mt-auto flex items-center justify-end border-t pt-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary" aria-hidden="true">
              Explore
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
