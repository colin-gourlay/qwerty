import { Plant, Car, Scales, FirstAid, BeerBottle, Tooth } from '@phosphor-icons/react'

interface AdvertiserLogoProps {
  type?: string
  companyName: string
}

export default function AdvertiserLogo({ type, companyName }: AdvertiserLogoProps) {
  const getLogoContent = () => {
    switch (type) {
      case 'garden-centre':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <Plant className="h-10 w-10 text-green-600" weight="duotone" />
          </div>
        )
      case 'automotive':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <Car className="h-10 w-10 text-blue-600" weight="duotone" />
          </div>
        )
      case 'legal':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <Scales className="h-10 w-10 text-amber-700" weight="duotone" />
          </div>
        )
      case 'healthcare':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <FirstAid className="h-10 w-10 text-red-600" weight="duotone" />
          </div>
        )
      case 'hospitality':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <BeerBottle className="h-10 w-10 text-orange-600" weight="duotone" />
          </div>
        )
      case 'dental':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <Tooth className="h-10 w-10 text-cyan-600" weight="duotone" />
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center w-full h-full">
            <div className="text-xs font-bold text-muted-foreground text-center px-2">
              {companyName.split(' ').map(word => word[0]).join('').substring(0, 3)}
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-muted to-muted/50 border-2 border-border flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-colors">
      {getLogoContent()}
    </div>
  )
}
