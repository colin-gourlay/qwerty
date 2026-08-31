import { FacebookLogo, TwitterLogo, InstagramLogo, YoutubeLogo, RadioButton } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { STATION_CONFIG } from '@/data/config'

interface SocialLinksProps {
  variant?: 'default' | 'large'
  className?: string
  x?: string
  twitter?: string
  facebook?: string
  instagram?: string
  youtube?: string
  tiktok?: string
  linkedin?: string
  pinterest?: string
  threads?: string
  bluesky?: string
  mastodon?: string
  showTuneIn?: boolean
  showRadioGarden?: boolean
}

export default function SocialLinks({ 
  variant = 'default', 
  className = '',
  x = STATION_CONFIG.social.x,
  twitter = STATION_CONFIG.social.twitter,
  facebook = STATION_CONFIG.social.facebook,
  instagram = STATION_CONFIG.social.instagram,
  youtube = STATION_CONFIG.social.youtube,
  tiktok = STATION_CONFIG.social.tiktok,
  linkedin = STATION_CONFIG.social.linkedin,
  pinterest = STATION_CONFIG.social.pinterest,
  threads = STATION_CONFIG.social.threads,
  bluesky = STATION_CONFIG.social.bluesky,
  mastodon = STATION_CONFIG.social.mastodon,
  showTuneIn = true,
  showRadioGarden = true
}: SocialLinksProps) {
  const iconSize = variant === 'large' ? 24 : 20
  const buttonSize = variant === 'large' ? 'default' : 'icon'
  const normalizeUrl = (value: string | undefined, baseUrl: string): string | undefined => {
    if (!value) return undefined
    if (value.startsWith('http://') || value.startsWith('https://')) return value
    return `${baseUrl}/${value.replace('@', '')}`
  }

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FacebookLogo,
      url: normalizeUrl(facebook, 'https://facebook.com'),
      handle: facebook ?? 'Facebook',
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'X',
      icon: TwitterLogo,
      url: normalizeUrl(x ?? twitter, 'https://x.com'),
      handle: x ?? twitter ?? 'X',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'Instagram',
      icon: InstagramLogo,
      url: normalizeUrl(instagram, 'https://instagram.com'),
      handle: instagram ?? 'Instagram',
      color: 'hover:text-[#E4405F]'
    },
    ...(youtube ? [{
      name: 'YouTube',
      icon: YoutubeLogo,
      url: youtube,
      handle: youtube,
      color: 'hover:text-[#FF0000]'
    }] : []),
    ...(showTuneIn ? [{
      name: 'TuneIn',
      icon: RadioButton,
      url: STATION_CONFIG.tunein,
      handle: 'TuneIn',
      color: 'hover:text-[#14D8CC]'
    }] : []),
    ...(showRadioGarden && STATION_CONFIG.radioGarden ? [{
      name: 'Radio Garden',
      icon: RadioButton,
      url: STATION_CONFIG.radioGarden,
      handle: 'Radio Garden',
      color: 'hover:text-[#5CD65C]'
    }] : []),
    ...(tiktok ? [{
      name: 'TikTok',
      icon: RadioButton,
      url: tiktok,
      handle: 'TikTok',
      color: 'hover:text-foreground'
    }] : []),
    ...(linkedin ? [{
      name: 'LinkedIn',
      icon: RadioButton,
      url: linkedin,
      handle: 'LinkedIn',
      color: 'hover:text-[#0A66C2]'
    }] : []),
    ...(pinterest ? [{
      name: 'Pinterest',
      icon: RadioButton,
      url: pinterest,
      handle: 'Pinterest',
      color: 'hover:text-[#E60023]'
    }] : []),
    ...(threads ? [{
      name: 'Threads',
      icon: RadioButton,
      url: threads,
      handle: 'Threads',
      color: 'hover:text-foreground'
    }] : []),
    ...(bluesky ? [{
      name: 'Bluesky',
      icon: RadioButton,
      url: bluesky,
      handle: 'Bluesky',
      color: 'hover:text-[#1185FE]'
    }] : []),
    ...(mastodon ? [{
      name: 'Mastodon',
      icon: RadioButton,
      url: mastodon,
      handle: 'Mastodon',
      color: 'hover:text-[#6364FF]'
    }] : [])
  ].filter((social) => Boolean(social.url))

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((social) => {
        if (!social.url) return null
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
