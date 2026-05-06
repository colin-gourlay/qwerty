import HistoryTimeline from '@/components/HistoryTimeline'
import { Clock } from '@phosphor-icons/react'

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Clock className="w-8 h-8 text-primary" weight="duotone" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From our first broadcast in 2008 to becoming East Lothian's voice, discover the milestones that shaped East Coast FM into the community station it is today.
          </p>
        </div>

        <HistoryTimeline />
      </div>
    </div>
  )
}
