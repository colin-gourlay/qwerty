import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Radio } from '@phosphor-icons/react'

interface CoverageMapProps {
  className?: string
}

export default function CoverageMap({ className = '' }: CoverageMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth
        const height = Math.min(width * 0.75, 600)
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const { width, height } = dimensions
    const centerLat = 55.9574
    const centerLon = -2.7807

    const projection = d3.geoMercator()
      .center([centerLon, centerLat])
      .scale(width * 50)
      .translate([width / 2, height / 2])

    const haddingtonCoords = projection([centerLon, centerLat])
    if (!haddingtonCoords) return

    const g = svg.append('g')

    const gradient = svg.append('defs')
      .append('radialGradient')
      .attr('id', 'coverage-gradient')
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', '50%')

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'oklch(0.65 0.18 35)')
      .attr('stop-opacity', 0.4)

    gradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', 'oklch(0.45 0.12 240)')
      .attr('stop-opacity', 0.2)

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'oklch(0.72 0.08 230)')
      .attr('stop-opacity', 0.05)

    const primaryRadius = width * 0.3
    const secondaryRadius = width * 0.45

    g.append('circle')
      .attr('cx', haddingtonCoords[0])
      .attr('cy', haddingtonCoords[1])
      .attr('r', secondaryRadius)
      .attr('fill', 'url(#coverage-gradient)')
      .attr('opacity', 0.3)
      .style('filter', 'blur(2px)')

    g.append('circle')
      .attr('cx', haddingtonCoords[0])
      .attr('cy', haddingtonCoords[1])
      .attr('r', primaryRadius)
      .attr('fill', 'url(#coverage-gradient)')
      .attr('opacity', 0.5)

    const pulseCircle = g.append('circle')
      .attr('cx', haddingtonCoords[0])
      .attr('cy', haddingtonCoords[1])
      .attr('r', 10)
      .attr('fill', 'none')
      .attr('stroke', 'oklch(0.65 0.18 35)')
      .attr('stroke-width', 2)
      .attr('opacity', 1)

    const animatePulse = () => {
      pulseCircle
        .attr('r', 10)
        .attr('opacity', 1)
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr('r', 40)
        .attr('opacity', 0)
        .on('end', animatePulse)
    }
    animatePulse()

    g.append('circle')
      .attr('cx', haddingtonCoords[0])
      .attr('cy', haddingtonCoords[1])
      .attr('r', 8)
      .attr('fill', 'oklch(0.65 0.18 35)')
      .attr('stroke', 'white')
      .attr('stroke-width', 3)

    const locations = [
      { name: 'Haddington', coords: [centerLon, centerLat], primary: true },
      { name: 'North Berwick', coords: [-2.7195, 56.0583] },
      { name: 'Dunbar', coords: [-2.5158, 56.0023] },
      { name: 'Musselburgh', coords: [-3.0547, 55.9429] },
      { name: 'Tranent', coords: [-2.9537, 55.9459] },
      { name: 'East Linton', coords: [-2.6565, 55.9897] }
    ]

    locations.forEach(location => {
      if (location.primary) return
      
      const coords = projection(location.coords as [number, number])
      if (!coords) return

      g.append('circle')
        .attr('cx', coords[0])
        .attr('cy', coords[1])
        .attr('r', 4)
        .attr('fill', 'oklch(0.45 0.12 240)')
        .attr('stroke', 'white')
        .attr('stroke-width', 2)

      g.append('text')
        .attr('x', coords[0])
        .attr('y', coords[1] - 12)
        .attr('text-anchor', 'middle')
        .attr('font-size', '11px')
        .attr('font-weight', '500')
        .attr('fill', 'oklch(0.25 0.02 240)')
        .attr('font-family', 'Inter, sans-serif')
        .text(location.name)
    })

    g.append('text')
      .attr('x', haddingtonCoords[0])
      .attr('y', haddingtonCoords[1] - 15)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '700')
      .attr('fill', 'oklch(0.65 0.18 35)')
      .attr('font-family', 'Space Grotesk, sans-serif')
      .text('East Coast FM')

    const legendData = [
      { label: 'Primary Coverage', color: 'oklch(0.65 0.18 35)', opacity: 0.4 },
      { label: 'Secondary Coverage', color: 'oklch(0.45 0.12 240)', opacity: 0.2 }
    ]

    const legend = g.append('g')
      .attr('transform', `translate(20, ${height - 60})`)

    legendData.forEach((item, i) => {
      const legendItem = legend.append('g')
        .attr('transform', `translate(0, ${i * 25})`)

      legendItem.append('circle')
        .attr('cx', 8)
        .attr('cy', 0)
        .attr('r', 8)
        .attr('fill', item.color)
        .attr('opacity', item.opacity)
        .attr('stroke', item.color)
        .attr('stroke-width', 1)

      legendItem.append('text')
        .attr('x', 22)
        .attr('y', 4)
        .attr('font-size', '12px')
        .attr('fill', 'oklch(0.25 0.02 240)')
        .attr('font-family', 'Inter, sans-serif')
        .text(item.label)
    })

  }, [dimensions])

  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Radio className="h-5 w-5 text-primary" weight="duotone" />
          </div>
          <h3 className="text-xl font-bold">Coverage Area</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Broadcasting across East Lothian and surrounding areas
        </p>
      </div>
      
      <div ref={containerRef} className="bg-muted/20 p-6">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-auto"
          style={{ maxHeight: '600px' }}
        />
      </div>

      <div className="p-6 border-t bg-card">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1.5">
            <MapPin className="h-3 w-3" weight="fill" />
            <span className="text-xs">Haddington</span>
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="text-xs">North Berwick</span>
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="text-xs">Dunbar</span>
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="text-xs">Musselburgh</span>
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="text-xs">Tranent</span>
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="text-xs">East Linton</span>
          </Badge>
        </div>
      </div>
    </Card>
  )
}
