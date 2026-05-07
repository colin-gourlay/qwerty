export interface TimeSlotColors {
  bg: string
  border: string
  text: string
  accent: string
  label: string
}

export const getTimeSlotColors = (time: string): TimeSlotColors => {
  const hour = parseInt(time.split(':')[0])
  
  if (hour >= 6 && hour < 12) {
    return {
      bg: 'oklch(0.95 0.05 60)',
      border: 'oklch(0.72 0.13 60)',
      text: 'oklch(0.35 0.08 60)',
      accent: 'oklch(0.75 0.15 60)',
      label: 'Morning'
    }
  }
  
  if (hour >= 12 && hour < 17) {
    return {
      bg: 'oklch(0.95 0.05 35)',
      border: 'oklch(0.65 0.15 35)',
      text: 'oklch(0.40 0.10 35)',
      accent: 'oklch(0.65 0.18 35)',
      label: 'Afternoon'
    }
  }
  
  if (hour >= 17 && hour < 22) {
    return {
      bg: 'oklch(0.92 0.08 285)',
      border: 'oklch(0.58 0.15 285)',
      text: 'oklch(0.38 0.15 285)',
      accent: 'oklch(0.58 0.11 215)',
      label: 'Evening'
    }
  }
  
  return {
    bg: 'oklch(0.88 0.05 260)',
    border: 'oklch(0.48 0.12 260)',
    text: 'oklch(0.35 0.08 260)',
    accent: 'oklch(0.40 0.08 260)',
    label: 'Late Night'
  }
}

export const getTimeOfDayPeriods = () => [
  { label: 'Morning', range: '6:00 - 12:00', color: 'oklch(0.75 0.15 60)' },
  { label: 'Afternoon', range: '12:00 - 17:00', color: 'oklch(0.65 0.18 35)' },
  { label: 'Evening', range: '17:00 - 22:00', color: 'oklch(0.58 0.11 215)' },
  { label: 'Late Night', range: '22:00 - 6:00', color: 'oklch(0.40 0.08 260)' }
]
