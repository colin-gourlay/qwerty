import { useState, useEffect } from 'react'
import { schedule } from '@/data/schedule'
import { getShowById } from '@/data/shows'
import type { Show, ScheduleSlot } from '@/types'

export function useCurrentShow() {
  const [currentShow, setCurrentShow] = useState<Show | null>(null)
  const [currentSlot, setCurrentSlot] = useState<ScheduleSlot | null>(null)

  useEffect(() => {
    const updateCurrentShow = () => {
      const now = new Date()
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      const currentDay = days[now.getDay()]
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

      const todaySchedule = schedule.filter(slot => slot.day === currentDay)

      const slot = todaySchedule.find(slot => {
        const [startHours, startMinutes] = slot.startTime.split(':').map(Number)
        const [endHours, endMinutes] = slot.endTime.split(':').map(Number)
        
        const currentMinutes = now.getHours() * 60 + now.getMinutes()
        const startTotalMinutes = startHours * 60 + startMinutes
        let endTotalMinutes = endHours * 60 + endMinutes

        if (endTotalMinutes <= startTotalMinutes) {
          endTotalMinutes += 24 * 60
        }

        let adjustedCurrentMinutes = currentMinutes
        if (currentMinutes < startTotalMinutes && endTotalMinutes > 24 * 60) {
          adjustedCurrentMinutes += 24 * 60
        }

        return adjustedCurrentMinutes >= startTotalMinutes && adjustedCurrentMinutes < endTotalMinutes
      })

      if (slot) {
        const show = getShowById(slot.showId)
        if (show) {
          setCurrentShow(show)
          setCurrentSlot(slot)
        }
      }
    }

    updateCurrentShow()
    const interval = setInterval(updateCurrentShow, 60000)

    return () => clearInterval(interval)
  }, [])

  return { currentShow, currentSlot }
}
