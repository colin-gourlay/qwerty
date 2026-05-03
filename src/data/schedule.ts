import type { ScheduleSlot } from '@/types'

export const schedule: ScheduleSlot[] = [
  { day: 'monday', startTime: '06:00', endTime: '10:00', showId: 'breakfast-club' },
  { day: 'monday', startTime: '10:00', endTime: '14:00', showId: 'afternoon-mix' },
  { day: 'monday', startTime: '14:00', endTime: '16:00', showId: 'music-discovery' },
  { day: 'monday', startTime: '16:00', endTime: '19:00', showId: 'drive-time' },
  { day: 'monday', startTime: '19:00', endTime: '21:00', showId: 'community-matters' },
  { day: 'monday', startTime: '21:00', endTime: '06:00', showId: 'late-night-sessions' },

  { day: 'tuesday', startTime: '06:00', endTime: '10:00', showId: 'breakfast-club' },
  { day: 'tuesday', startTime: '10:00', endTime: '14:00', showId: 'afternoon-mix' },
  { day: 'tuesday', startTime: '14:00', endTime: '16:00', showId: 'music-discovery' },
  { day: 'tuesday', startTime: '16:00', endTime: '19:00', showId: 'drive-time' },
  { day: 'tuesday', startTime: '19:00', endTime: '21:00', showId: 'community-matters' },
  { day: 'tuesday', startTime: '21:00', endTime: '06:00', showId: 'late-night-sessions' },

  { day: 'wednesday', startTime: '06:00', endTime: '10:00', showId: 'breakfast-club' },
  { day: 'wednesday', startTime: '10:00', endTime: '14:00', showId: 'afternoon-mix' },
  { day: 'wednesday', startTime: '14:00', endTime: '16:00', showId: 'music-discovery' },
  { day: 'wednesday', startTime: '16:00', endTime: '19:00', showId: 'drive-time' },
  { day: 'wednesday', startTime: '19:00', endTime: '21:00', showId: 'community-matters' },
  { day: 'wednesday', startTime: '21:00', endTime: '06:00', showId: 'late-night-sessions' },

  { day: 'thursday', startTime: '06:00', endTime: '10:00', showId: 'breakfast-club' },
  { day: 'thursday', startTime: '10:00', endTime: '14:00', showId: 'afternoon-mix' },
  { day: 'thursday', startTime: '14:00', endTime: '16:00', showId: 'music-discovery' },
  { day: 'thursday', startTime: '16:00', endTime: '19:00', showId: 'drive-time' },
  { day: 'thursday', startTime: '19:00', endTime: '21:00', showId: 'community-matters' },
  { day: 'thursday', startTime: '21:00', endTime: '06:00', showId: 'late-night-sessions' },

  { day: 'friday', startTime: '06:00', endTime: '10:00', showId: 'breakfast-club' },
  { day: 'friday', startTime: '10:00', endTime: '14:00', showId: 'afternoon-mix' },
  { day: 'friday', startTime: '14:00', endTime: '16:00', showId: 'music-discovery' },
  { day: 'friday', startTime: '16:00', endTime: '19:00', showId: 'drive-time' },
  { day: 'friday', startTime: '19:00', endTime: '21:00', showId: 'community-matters' },
  { day: 'friday', startTime: '21:00', endTime: '06:00', showId: 'late-night-sessions' },

  { day: 'saturday', startTime: '06:00', endTime: '10:00', showId: 'weekend-grooves' },
  { day: 'saturday', startTime: '10:00', endTime: '14:00', showId: 'music-discovery' },
  { day: 'saturday', startTime: '14:00', endTime: '18:00', showId: 'weekend-grooves' },
  { day: 'saturday', startTime: '18:00', endTime: '22:00', showId: 'weekend-grooves' },
  { day: 'saturday', startTime: '22:00', endTime: '06:00', showId: 'late-night-sessions' },

  { day: 'sunday', startTime: '06:00', endTime: '10:00', showId: 'weekend-grooves' },
  { day: 'sunday', startTime: '10:00', endTime: '14:00', showId: 'sunday-chill' },
  { day: 'sunday', startTime: '14:00', endTime: '18:00', showId: 'sunday-chill' },
  { day: 'sunday', startTime: '18:00', endTime: '21:00', showId: 'music-discovery' },
  { day: 'sunday', startTime: '21:00', endTime: '06:00', showId: 'late-night-sessions' },
]

export const getDaySchedule = (day: string): ScheduleSlot[] => {
  return schedule.filter(slot => slot.day === day.toLowerCase())
}

export const getWeekSchedule = (): Record<string, ScheduleSlot[]> => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  return days.reduce((acc, day) => {
    acc[day] = getDaySchedule(day)
    return acc
  }, {} as Record<string, ScheduleSlot[]>)
}
