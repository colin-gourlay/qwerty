import type { Show } from '@/types'

export const shows: Show[] = [
  {
    id: 'breakfast-club',
    name: 'The Breakfast Club',
    description: 'Start your day right with Sarah\'s mix of the latest music, entertainment news, and local chat. Wake up calls, shout-outs, and the best way to begin your morning on the East Coast.',
    presenters: ['sarah-jenkins'],
    genre: 'Music & Talk',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    color: 'oklch(0.75 0.15 60)',
    fullDescription: 'The Breakfast Club has been East Coast FM\'s flagship morning show since 2015, consistently rated as the region\'s favorite way to start the day. Host Sarah Jenkins brings her infectious energy and genuine warmth to every broadcast, creating a show that feels less like radio and more like having coffee with a friend who happens to have great taste in music.\n\nEach morning from 6 AM to 10 AM, The Breakfast Club delivers the perfect blend of entertainment, information, and interaction. From breaking news and traffic updates to celebrity interviews and listener competitions, every show is packed with content designed to inform, entertain, and energize your morning routine.',
    schedule: 'Monday to Friday, 6:00 AM - 10:00 AM',
    features: [
      'Wake Up Call Service - We\'ll call you to make sure you\'re up!',
      'Birthday Shout-Outs - Celebrating our listeners every day',
      'Traffic & Travel Updates - Every 15 minutes during peak hours',
      'What\'s Trending - The hottest stories from social media',
      'Mystery Voice Competition - Win prizes by identifying celebrity voices',
      'Live Music Sessions - Local and touring artists drop by the studio'
    ],
    highlights: [
      'Winner of Best Breakfast Show 2023 - UK Community Radio Awards',
      'Over 45,000 weekly listeners',
      'Featured guest interviews with major artists and celebrities',
      'Raised over £50,000 for local charities through listener campaigns'
    ],
    contact: {
      phone: '01234 567 891',
      email: 'breakfast@eastcoastfm.radio',
      social: 'Use #ECFMBreakfast to get involved'
    }
  },
  {
    id: 'drive-time',
    name: 'Drive Time',
    description: 'Marcus keeps you company on your commute home with the biggest hits, traffic updates, and what\'s happening tonight across the region. The perfect soundtrack for your journey home.',
    presenters: ['marcus-wright'],
    genre: 'Chart & Pop',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    color: 'oklch(0.65 0.18 35)',
    fullDescription: 'Drive Time with Marcus Wright is the soundtrack to your journey home. Broadcasting every weekday from 4 PM to 7 PM, Marcus combines the biggest chart hits with local news, traffic updates, and a healthy dose of humor to make your commute fly by.\n\nWith a finger firmly on the pulse of popular music and local events, Marcus creates the perfect atmosphere for unwinding after a busy day while staying connected to what\'s happening in your community. Whether you\'re stuck in traffic or cruising along the coast road, Drive Time is your companion.',
    schedule: 'Monday to Friday, 4:00 PM - 7:00 PM',
    features: [
      'Live Traffic Updates - Real-time reports every 10 minutes',
      'What\'s On Tonight - Your guide to local events and nightlife',
      'Chart Countdown - The top 10 trending tracks',
      'Carpool Karaoke - Listeners call in to sing along',
      'Community Spotlight - Highlighting local businesses and initiatives',
      'Request Line - Dedicate a song to someone special'
    ],
    highlights: [
      'Most popular drivetime show in the region',
      'Partnership with local traffic services for accurate updates',
      'Featured in regional press for community engagement',
      'Regular appearances from local celebrities and politicians'
    ],
    contact: {
      phone: '01234 567 892',
      email: 'drivetime@eastcoastfm.radio',
      social: 'Tweet us using #ECFMDriveTime'
    }
  },
  {
    id: 'weekend-grooves',
    name: 'Weekend Grooves',
    description: 'Jenny brings the weekend vibes with soul, funk, and disco classics. Get ready to dance your way through Saturday and Sunday with feel-good music from across the decades.',
    presenters: ['jenny-patel'],
    genre: 'Soul, Funk & Disco',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
    color: 'oklch(0.68 0.15 300)',
    fullDescription: 'Weekend Grooves is where the party starts on the East Coast. DJ Jenny Patel, with over 15 years of experience spinning records at clubs and festivals across the UK, brings her expertise to the airwaves every Saturday and Sunday afternoon.\n\nThis show is a celebration of the best groove-based music from the 1970s to today. Expect rare soul cuts, disco classics, funk workouts, and contemporary artists keeping these traditions alive. Jenny\'s infectious enthusiasm and deep knowledge of the music creates an irresistible atmosphere that gets listeners moving, whatever they\'re doing.',
    schedule: 'Saturday & Sunday, 2:00 PM - 6:00 PM',
    features: [
      'Vinyl Vault - Rare and classic records from Jenny\'s collection',
      'Dance Floor Memories - Listeners share their favorite club stories',
      'New Groove Discoveries - Fresh tracks keeping the funk alive',
      'Live DJ Mixes - Jenny blends tracks for seamless listening',
      'Artist Profiles - Deep dives into soul and funk legends',
      'Weekend Event Guide - Where to keep dancing after the show'
    ],
    highlights: [
      'Nominated for Best Specialist Show 2024',
      'Guest mixes from renowned DJs and producers',
      'Featured on BBC Radio 6 Music\'s "Best of Community Radio"',
      'Annual sold-out club night featuring the show\'s music'
    ],
    contact: {
      email: 'jenny@eastcoastfm.radio',
      social: 'Follow @DJJennyPatel and use #WeekendGrooves'
    }
  },
  {
    id: 'community-matters',
    name: 'Community Matters',
    description: 'Tom explores the stories that matter to our listeners. Local news, interviews with community leaders, and discussions about the issues affecting the East Coast.',
    presenters: ['tom-harrison'],
    genre: 'News & Talk',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
    color: 'oklch(0.55 0.10 240)',
    fullDescription: 'Community Matters is East Coast FM\'s flagship current affairs program, bringing you the stories that shape our region. Veteran journalist Tom Harrison applies his decades of experience to uncover the truth behind local headlines and give voice to those who might otherwise go unheard.\n\nEach week, Tom and his guests tackle everything from local planning decisions and education policy to environmental issues and community projects. The show combines hard-hitting journalism with accessible discussion, ensuring listeners understand the issues that affect their daily lives and have the information they need to engage with their community.',
    schedule: 'Wednesday, 7:00 PM - 8:00 PM & Sunday, 10:00 AM - 11:00 AM',
    features: [
      'Investigative Reports - In-depth coverage of local issues',
      'Political Panels - Representatives from all parties discuss policy',
      'Community Heroes - Profiles of local volunteers and activists',
      'Phone-In Discussions - Listeners join the conversation',
      'Expert Analysis - Specialists explain complex issues',
      'Campaign Coverage - Following local campaigns for change'
    ],
    highlights: [
      'Winner Best News Programming 2023',
      'Investigations leading to real community impact',
      'Trusted source cited by local and regional media',
      'Partnership with journalism schools for training'
    ],
    contact: {
      phone: '01234 567 893',
      email: 'tom@eastcoastfm.radio',
      social: 'Share your story with #CommunityMatters'
    }
  },
  {
    id: 'late-night-sessions',
    name: 'Late Night Sessions',
    description: 'Dave guides you through the quiet hours with smooth sounds and mellow vibes. Perfect for night owls, shift workers, and anyone who appreciates music after dark.',
    presenters: ['dave-thompson'],
    genre: 'Chill & Ambient',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    color: 'oklch(0.40 0.08 260)',
    fullDescription: 'Late Night Sessions offers sanctuary in the quiet hours. Broadcasting from 11 PM to 2 AM every night, Dave Thompson creates a sonic cocoon of ambient, downtempo, and chill music perfect for unwinding, studying, or keeping company during late shifts.\n\nWith 15 years of late-night broadcasting experience, Dave understands the unique rhythm of the nocturnal world. His carefully curated selections create a consistent atmosphere that feels like a friend keeping you company through the quiet hours, whether you\'re unable to sleep, working the night shift, or simply enjoying the peace.',
    schedule: 'Every Night, 11:00 PM - 2:00 AM',
    features: [
      'Ambient Soundscapes - Extended instrumental passages',
      'Midnight Messages - Dedications for night workers and insomniacs',
      'Chill Classics - Downtempo favorites from across the decades',
      'New Age Explorations - Discovering ambient pioneers',
      'Sleep Sounds - Special selections for listeners drifting off',
      'Night Shift Roll Call - Shout-outs to essential workers'
    ],
    highlights: [
      'Longest-running late night show in the region',
      'Trusted companion for thousands of night workers',
      'Featured in studies about radio\'s role in wellbeing',
      'Cult following among ambient music enthusiasts'
    ],
    contact: {
      email: 'latenight@eastcoastfm.radio',
      social: 'Message us using #LateNightSessions'
    }
  },
  {
    id: 'music-discovery',
    name: 'Music Discovery',
    description: 'Lisa takes you on a journey through specialist sounds from around the world. Jazz, electronic, world music, and everything in between. Expand your musical horizons.',
    presenters: ['lisa-chen'],
    genre: 'Specialist',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    color: 'oklch(0.70 0.12 180)',
    fullDescription: 'Music Discovery with Lisa Chen is a passport to the world\'s musical cultures. Every Thursday evening, Lisa shares her encyclopedic knowledge and genuine passion for music that pushes boundaries, crosses borders, and defies categorization.\n\nFrom Afrobeat to Zydeco, free jazz to footwork, Lisa\'s show celebrates music in all its diversity. Whether introducing listeners to traditional instruments from distant lands or the latest experimental electronic producers, each episode is a carefully crafted journey designed to expand horizons and challenge preconceptions about what music can be.',
    schedule: 'Thursday, 8:00 PM - 10:00 PM',
    features: [
      'Genre Deep Dives - Monthly focus on specific styles',
      'Artist Interviews - Conversations with boundary-pushing musicians',
      'Recommended Listening - Curated playlists for further exploration',
      'Live Sessions - In-studio performances from touring artists',
      'Global Charts - What\'s hot in music scenes worldwide',
      'Listener Discoveries - Sharing hidden gems from our audience'
    ],
    highlights: [
      'Finalist Best Specialist Music Show UK Radio Awards',
      'Featured artists have gone on to major festival slots',
      'Collaboration with international music networks',
      'Music library of over 10,000 specialist recordings'
    ],
    contact: {
      email: 'discovery@eastcoastfm.radio',
      social: 'Share discoveries with #ECFMDiscovery'
    }
  },
  {
    id: 'sunday-chill',
    name: 'Sunday Chill',
    description: 'The perfect Sunday afternoon soundtrack. Relaxed, easy-going music to help you unwind before the week ahead. Coffee, newspaper, and good music.',
    presenters: ['lisa-chen', 'jenny-patel'],
    genre: 'Easy Listening',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    color: 'oklch(0.72 0.08 120)',
    fullDescription: 'Sunday Chill is the sonic equivalent of a lazy Sunday morning. Hosted alternately by Lisa Chen and Jenny Patel, this show creates the perfect backdrop for your Sunday afternoon - whether you\'re cooking, reading, pottering in the garden, or simply relaxing.\n\nThe music selection spans gentle jazz, acoustic folk, soft rock classics, and contemporary singer-songwriters. Nothing too demanding, nothing too sleepy - just beautifully curated music that creates a warm, comfortable atmosphere perfect for the last hours of the weekend.',
    schedule: 'Sunday, 1:00 PM - 4:00 PM',
    features: [
      'Sunday Papers Review - Highlights from the weekend press',
      'Acoustic Sessions - Stripped-back versions of favorite songs',
      'Recipe of the Week - Shared by listeners',
      'Book Club - Monthly literary discussions',
      'Nature Sounds - Field recordings mixed with music',
      'Reflective Listening - Space to think and breathe'
    ],
    highlights: [
      'Highest listener satisfaction ratings',
      'Featured in "best Sunday radio" roundups',
      'Popular with families and multi-generational audiences',
      'Inspired successful podcast spin-off'
    ],
    contact: {
      email: 'sundaychill@eastcoastfm.radio',
      social: 'Share your Sunday with #SundayChill'
    }
  },
  {
    id: 'afternoon-mix',
    name: 'Afternoon Mix',
    description: 'A diverse selection of music to get you through your afternoon. From classic hits to modern favorites, there\'s something for everyone.',
    presenters: ['sarah-jenkins', 'marcus-wright'],
    genre: 'Mixed',
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800',
    color: 'oklch(0.68 0.12 80)',
    fullDescription: 'Afternoon Mix is East Coast FM\'s most eclectic show, where anything goes. Hosted by various presenters including Sarah Jenkins and Marcus Wright, this show bridges the gap between morning energy and evening wind-down with a perfectly balanced musical selection.\n\nExpect to hear everything from 80s pop classics to current chart hits, indie rock to R&B, with the occasional curveball thrown in to keep things interesting. It\'s radio for people who love all kinds of music and aren\'t confined to a single genre.',
    schedule: 'Monday to Friday, 12:00 PM - 4:00 PM',
    features: [
      'Eclectic Mix - Genre-hopping music selection',
      'Lunch Hour Shout-Outs - Midday dedications',
      'Time Machine - A random year, three classic tracks',
      'One Hit Wonders - Celebrating songs that burned bright',
      'Listener Playlists - Your music, your show',
      'Afternoon Quiz - Daily trivia with prizes'
    ],
    highlights: [
      'Most diverse playlist on East Coast FM',
      'Popular with workplaces and offices',
      'Gateway show for new listeners',
      'Successful training ground for new presenters'
    ],
    contact: {
      phone: '01234 567 890',
      email: 'afternoon@eastcoastfm.radio',
      social: 'Request tracks with #AfternoonMix'
    }
  }
]

export const getShowById = (id: string): Show | undefined => {
  return shows.find(show => show.id === id)
}

export const getShowsByPresenterId = (presenterId: string): Show[] => {
  return shows.filter(show => show.presenters.includes(presenterId))
}

export const getShowsByGenre = (genre: string): Show[] => {
  return shows.filter(show => show.genre.toLowerCase().includes(genre.toLowerCase()))
}
