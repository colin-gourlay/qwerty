import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Radio } from '@phosphor-icons/react'
import { postcodeAreas, signalStrengthConfig } from '@/data/postcodes'

interface CoverageMapProps {
  className?: string
}

export default function CoverageMap({ className = '' }: CoverageMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const [hoveredPostcode, setHoveredPostcode] = useState<string | null>(null)

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

    postcodeAreas.forEach(area => {
      const coords = projection([area.longitude, area.latitude])
      if (!coords) return

      const config = signalStrengthConfig[area.signalStrength]
      const radius = area.signalStrength === 'excellent' ? width * 0.12 : 
                     area.signalStrength === 'good' ? width * 0.10 :
                     area.signalStrength === 'fair' ? width * 0.08 : width * 0.06

      g.append('circle')
        .attr('cx', coords[0])
        .attr('cy', coords[1])
        .attr('r', radius)
        .attr('fill', config.color)
        .attr('opacity', config.opacity)
        .style('filter', 'blur(3px)')
        .style('cursor', 'pointer')
        .on('mouseenter', () => setHoveredPostcode(area.postcode))
        .on('mouseleave', () => setHoveredPostcode(null))

      g.append('circle')
        .attr('cx', coords[0])
        .attr('cy', coords[1])
        .attr('r', 5)
        .attr('fill', config.color)
        .attr('stroke', 'white')
        .attr('stroke-width', 2)
        .style('cursor', 'pointer')
        .on('mouseenter', () => setHoveredPostcode(area.postcode))
        .on('mouseleave', () => setHoveredPostcode(null))

      g.append('text')
        .attr('x', coords[0])
        .attr('y', coords[1] - 12)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('font-weight', '700')
        .attr('fill', 'oklch(0.25 0.02 240)')
        .attr('font-family', 'JetBrains Mono, monospace')
        .style('pointer-events', 'none')
        .text(area.postcode)
    })

    const stationCoords = projection([centerLon, centerLat])
    if (stationCoords) {
      const pulseCircle = g.append('circle')
        .attr('cx', stationCoords[0])
        .attr('cy', stationCoords[1])
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
        .attr('cx', stationCoords[0])
        .attr('cy', stationCoords[1])
        .attr('r', 8)
        .attr('fill', 'oklch(0.65 0.18 35)')
        .attr('stroke', 'white')
        .attr('stroke-width', 3)

      g.append('text')
        .attr('x', stationCoords[0])
        .attr('y', stationCoords[1] + 30)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('font-weight', '700')
        .attr('fill', 'oklch(0.65 0.18 35)')
        .attr('font-family', 'Space Grotesk, sans-serif')
        .text('📻 Transmitter')
    }

    const legend = g.append('g')
      .attr('transform', `translate(20, ${height - 110})`)

    const legendData = [
      { label: 'Excellent', config: signalStrengthConfig.excellent },
      { label: 'Good', config: signalStrengthConfig.good },
      { label: 'Fair', config: signalStrengthConfig.fair },
      { label: 'Limited', config: signalStrengthConfig.limited }
    ]

    legendData.forEach((item, i) => {
      const legendItem = legend.append('g')
        .attr('transform', `translate(0, ${i * 25})`)

      legendItem.append('circle')
        .attr('cx', 8)
        .attr('cy', 0)
        .attr('r', 8)
        .attr('fill', item.config.color)
        .attr('opacity', item.config.opacity)
        .attr('stroke', item.config.color)
        .attr('stroke-width', 1)

      legendItem.append('text')
        .attr('x', 22)
        .attr('y', 4)
        .attr('font-size', '12px')
        .attr('font-weight', '500')
        .attr('fill', 'oklch(0.25 0.02 240)')
        .attr('font-family', 'Inter, sans-serif')
        .text(`${item.label} ${item.config.icon}`)
    })

  }, [dimensions])

  const hoveredArea = hoveredPostcode ? postcodeAreas.find(a => a.postcode === hoveredPostcode) : null

  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Radio className="h-5 w-5 text-primary" weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">Signal Strength by Postcode</h3>
            <p className="text-sm text-muted-foreground">
              107.6 FM coverage across East Lothian
            </p>
          </div>
        </div>
      </div>
      
      <div ref={containerRef} className="bg-muted/20 p-6 relative">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-auto"
          style={{ maxHeight: '600px' }}
        />
        {hoveredArea && (
          <div className="absolute top-8 right-8 bg-card border rounded-lg p-4 shadow-lg max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: signalStrengthConfig[hoveredArea.signalStrength].color }}
              />
              <span className="font-mono font-bold text-lg">{hoveredArea.postcode}</span>
            </div>
            <div className="text-sm font-semibold text-muted-foreground mb-1">
              {hoveredArea.area}
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-xs font-medium">
                {signalStrengthConfig[hoveredArea.signalStrength].label}
              </span>
              <span className="text-xs text-muted-foreground">
                {signalStrengthConfig[hoveredArea.signalStrength].icon}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {hoveredArea.description}
            </p>
          </div>
        )}
      </div>

      <div className="p-6 border-t bg-card space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-3">Postcode Areas</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {postcodeAreas.map((area) => {
              const config = signalStrengthConfig[area.signalStrength]
              return (
                <Badge 
                  key={area.postcode}
                  variant="outline" 
                  className="gap-1.5 cursor-pointer hover:bg-accent/50 transition-colors justify-start"
                  onMouseEnter={() => setHoveredPostcode(area.postcode)}
                  onMouseLeave={() => setHoveredPostcode(null)}
                >
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: config.color }}
                  />
                  <span className="text-xs font-mono">{area.postcode}</span>
                </Badge>
              )
            })}
          </div>
        </div>
        <div className="pt-3 border-t">
          <p className="text-xs text-muted-foreground">
            💡 Hover over postcode areas for detailed signal information. Signal strength may vary based on terrain, buildings, and weather conditions.
          </p>
        </div>
      </div>
    </Card>
  )
}
