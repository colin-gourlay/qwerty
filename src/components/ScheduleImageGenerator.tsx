import { useRef, useState } from 'react'
import { Download, Share, Image as ImageIcon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { shows } from '@/data/shows'
import { schedule } from '@/data/schedule'
import { STATION_CONFIG } from '@/data/config'
import stationLogo from '@/assets/images/sundown-radio-logo.svg'
import { toast } from 'sonner'

interface ScheduleImageGeneratorProps {
  showId?: string
  day?: string
}

export default function ScheduleImageGenerator({ showId, day }: ScheduleImageGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedShow, setSelectedShow] = useState(showId || shows[0].id)
  const [selectedDay, setSelectedDay] = useState(day || 'monday')
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  const generateImage = async () => {
    setIsGenerating(true)
    
    try {
      const show = shows.find(s => s.id === selectedShow)
      if (!show) return

      const daySchedule = schedule.filter(s => s.day === selectedDay && s.showId === selectedShow)
      
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = 1200
      canvas.height = 630

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      
      const parseOklch = (oklchStr: string) => {
        const match = oklchStr.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/)
        if (!match) return { l: 0.5, c: 0.1, h: 240 }
        return { l: parseFloat(match[1]), c: parseFloat(match[2]), h: parseFloat(match[3]) }
      }

      const oklchToRgb = (l: number, c: number, h: number) => {
        const hRad = (h * Math.PI) / 180
        const a = c * Math.cos(hRad)
        const b = c * Math.sin(hRad)
        
        let lRgb = l + 0.3963377774 * a + 0.2158037573 * b
        let mRgb = l - 0.1055613458 * a - 0.0638541728 * b
        let sRgb = l - 0.0894841775 * a - 1.2914855480 * b
        
        lRgb = lRgb ** 3
        mRgb = mRgb ** 3
        sRgb = sRgb ** 3
        
        let r = +4.0767416621 * lRgb - 3.3077115913 * mRgb + 0.2309699292 * sRgb
        let g = -1.2684380046 * lRgb + 2.6097574011 * mRgb - 0.3413193965 * sRgb
        let blue = -0.0041960863 * lRgb - 0.7034186147 * mRgb + 1.7076147010 * sRgb
        
        r = Math.max(0, Math.min(1, r))
        g = Math.max(0, Math.min(1, g))
        blue = Math.max(0, Math.min(1, blue))
        
        return {
          r: Math.round(r * 255),
          g: Math.round(g * 255),
          b: Math.round(blue * 255)
        }
      }

      const showColor = parseOklch(show.color || 'oklch(0.5 0.1 240)')
      const rgb1 = oklchToRgb(showColor.l, showColor.c, showColor.h)
      const rgb2 = oklchToRgb(Math.max(0.15, showColor.l - 0.2), showColor.c * 0.8, showColor.h + 20)
      
      gradient.addColorStop(0, `rgb(${rgb1.r}, ${rgb1.g}, ${rgb1.b})`)
      gradient.addColorStop(1, `rgb(${rgb2.r}, ${rgb2.g}, ${rgb2.b})`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const logo = new Image()
      logo.crossOrigin = 'anonymous'
      
      await new Promise((resolve, reject) => {
        logo.onload = resolve
        logo.onerror = reject
        logo.src = stationLogo
      })

      const logoHeight = 60
      const logoWidth = (logo.width / logo.height) * logoHeight
      ctx.drawImage(logo, 50, 40, logoWidth, logoHeight)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
      ctx.font = 'bold 72px "Space Grotesk", sans-serif'
      ctx.fillText(show.name, 50, 220)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
      ctx.font = '500 36px "Inter", sans-serif'
      ctx.fillText(show.genre, 50, 280)

      if (daySchedule.length > 0) {
        const times = daySchedule.map(s => `${s.startTime} - ${s.endTime}`).join(', ')
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'
        ctx.font = '500 32px "JetBrains Mono", monospace'
        const dayCapitalized = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)
        ctx.fillText(`${dayCapitalized}s • ${times}`, 50, 340)
      }

      const maxWidth = 1100
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.font = '400 28px "Inter", sans-serif'
      
      const words = show.description.split(' ')
      let line = ''
      let y = 420
      const lineHeight = 40
      let lineCount = 0
      const maxLines = 3

      for (let i = 0; i < words.length && lineCount < maxLines; i++) {
        const testLine = line + words[i] + ' '
        const metrics = ctx.measureText(testLine)
        
        if (metrics.width > maxWidth && line !== '') {
          ctx.fillText(line, 50, y)
          line = words[i] + ' '
          y += lineHeight
          lineCount++
        } else {
          line = testLine
        }
      }
      
      if (lineCount < maxLines && line !== '') {
        ctx.fillText(line.trim() + (lineCount === maxLines - 1 && words.length > line.split(' ').length ? '...' : ''), 50, y)
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.font = '500 24px "Space Grotesk", sans-serif'
      ctx.fillText(STATION_CONFIG.tagline.toUpperCase(), 50, canvas.height - 50)

      const url = canvas.toDataURL('image/png')
      setPreviewUrl(url)
      
      toast.success('Schedule image generated!')
    } catch (error) {
      console.error('Error generating image:', error)
      toast.error('Failed to generate image')
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadImage = () => {
    if (!previewUrl) return

    const show = shows.find(s => s.id === selectedShow)
    const link = document.createElement('a')
    link.download = `${show?.name.replace(/\s+/g, '-').toLowerCase()}-${selectedDay}-schedule.png`
    link.href = previewUrl
    link.click()
    
    toast.success('Image downloaded!')
  }

  const shareImage = async () => {
    if (!previewUrl) return

    try {
      const blob = await (await fetch(previewUrl)).blob()
      const file = new File([blob], 'show-schedule.png', { type: 'image/png' })
      
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `${shows.find(s => s.id === selectedShow)?.name} Schedule`,
          text: `Check out this show on ${STATION_CONFIG.name}!`
        })
        toast.success('Shared successfully!')
      } else {
        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob
          })
        ])
        toast.success('Image copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
      toast.error('Failed to share image')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ImageIcon className="h-4 w-4" />
          Create Share Image
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Generate Schedule Share Image</DialogTitle>
          <DialogDescription>
            Create a beautiful shareable image for your favorite show's schedule
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="show-select">Select Show</Label>
              <Select value={selectedShow} onValueChange={setSelectedShow}>
                <SelectTrigger id="show-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {shows.map((show) => (
                    <SelectItem key={show.id} value={show.id}>
                      {show.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="day-select">Select Day</Label>
              <Select value={selectedDay} onValueChange={setSelectedDay}>
                <SelectTrigger id="day-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {days.map((day) => (
                    <SelectItem key={day} value={day}>
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={generateImage} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? 'Generating...' : 'Generate Image'}
          </Button>

          <canvas ref={canvasRef} className="hidden" />

          {previewUrl && (
            <Card className="overflow-hidden">
              <img 
                src={previewUrl} 
                alt="Generated schedule" 
                className="w-full h-auto"
              />
              <div className="p-4 flex gap-2">
                <Button 
                  onClick={downloadImage}
                  className="flex-1 gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button 
                  onClick={shareImage}
                  variant="secondary"
                  className="flex-1 gap-2"
                >
                  <Share className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
