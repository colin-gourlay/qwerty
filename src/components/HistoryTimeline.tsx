import { historyMilestones } from '@/data/history'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Broadcast, Buildings, HandHeart, Lightbulb, TrendUp } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const categoryIcons = {
  founding: Buildings,
  technical: Lightbulb,
  programming: Broadcast,
  community: HandHeart,
  award: Trophy,
  expansion: TrendUp
}

const categoryColors = {
  founding: 'bg-primary text-primary-foreground',
  technical: 'bg-accent text-accent-foreground',
  programming: 'bg-secondary text-secondary-foreground',
  community: 'bg-chart-4 text-foreground',
  award: 'bg-chart-1 text-foreground',
  expansion: 'bg-chart-2 text-foreground'
}

export default function HistoryTimeline() {
  const sortedMilestones = [...historyMilestones].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year
    if (!a.month || !b.month) return 0
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(b.month) - months.indexOf(a.month)
  })

  return (
    <div className="relative">
      <div className="absolute left-[47px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />
      
      <div className="space-y-8">
        {sortedMilestones.map((milestone, index) => {
          const Icon = categoryIcons[milestone.category]
          const isEven = index % 2 === 0
          
          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
            >
              <div className="flex items-start gap-6 md:gap-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center ${categoryColors[milestone.category]} shadow-lg`}>
                      <Icon className="w-10 h-10" weight="duotone" />
                    </div>
                    <div className="text-center">
                      <div className="font-mono font-bold text-lg">{milestone.year}</div>
                      {milestone.month && (
                        <div className="text-xs text-muted-foreground">{milestone.month}</div>
                      )}
                    </div>
                  </div>
                </div>

                <Card className={`flex-1 p-6 hover:shadow-lg transition-shadow ${isEven ? 'md:mr-0' : 'md:ml-0'}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold">{milestone.title}</h3>
                    <Badge variant="outline" className="capitalize flex-shrink-0">
                      {milestone.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </Card>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
