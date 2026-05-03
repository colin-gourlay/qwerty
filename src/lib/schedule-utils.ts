import { schedule } from '@/data/schedule'
import { getShowById } from '@/data/shows'
import type { ScheduleSlot, Show } from '@/types'

export interface CurrentShow {
  show: Show | null
  slot: ScheduleSlot | null
}

export const getCurrentShow = (): CurrentShow => {
  const now = new Date()
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const currentDay = dayNames[now.getDay()]
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

  const todaySlots = schedule.filter(slot => slot.day === currentDay)

  for (const slot of todaySlots) {
    if (isTimeInRange(currentTime, slot.startTime, slot.endTime)) {
      const show = getShowById(slot.showId)
      return {
        show: show || null,
        slot
      }
    }
  }

  return {
    show: null,
    slot: null
  }
}

const isTimeInRange = (current: string, start: string, end: string): boolean => {
  const toMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
  }

  const currentMins = toMinutes(current)
  const startMins = toMinutes(start)
  let endMins = toMinutes(end)

  if (endMins < startMins) {
    endMins += 24 * 60
    if (currentMins < startMins) {
      return currentMins + 24 * 60 >= startMins && currentMins + 24 * 60 < endMins
    }
  }

  return currentMins >= startMins && currentMins < endMins
}

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const displayHours = hours % 12 || 12
  return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`
}

export const formatTimeRange = (startTime: string, endTime: string): string => {
  return `${formatTime(startTime)} - ${formatTime(endTime)}`
}
