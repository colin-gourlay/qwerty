import { FacebookLogo, TwitterLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { STATION_CONFIG } from '@/data/config'

interface SocialLinksProps {
  variant?: 'default' | 'large'
  className?: string
  twitter?: string
  facebook?: string
  instagram?: string
  youtube?: string
}

export default function SocialLinks({ 
  variant = 'default', 
  className = '',
  twitter = STATION_CONFIG.social.twitter,
  facebook = STATION_CONFIG.social.facebook,
  instagram = STATION_CONFIG.social.instagram,
  youtube = STATION_CONFIG.social.youtube
}: SocialLinksProps) {
  const iconSize = variant === 'large' ? 24 : 20
  const buttonSize = variant === 'large' ? 'default' : 'icon'

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FacebookLogo,
      url: `https://facebook.com/${facebook?.replace('@', '')}`,
      handle: facebook,
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'Twitter',
      icon: TwitterLogo,
      url: `https://twitter.com/${twitter?.replace('@', '')}`,
      handle: twitter,
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'Instagram',
      icon: InstagramLogo,
      url: `https://instagram.com/${instagram?.replace('@', '')}`,
      handle: instagram,
      color: 'hover:text-[#E4405F]'
    },
    ...(youtube ? [{
      name: 'YouTube',
      icon: YoutubeLogo,
      url: `https://youtube.com/${youtube}`,
      handle: youtube,
      color: 'hover:text-[#FF0000]'
    }] : [])
  ]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <Button
            key={social.name}
            variant="ghost"
            size={buttonSize}
            asChild
            className={`transition-colors ${social.color}`}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.name}`}
            >
              <Icon size={iconSize} weight="fill" />
              {variant === 'large' && <span className="ml-2">{social.handle}</span>}
            </a>
          </Button>
        )
      })}
    </div>
  )
}
