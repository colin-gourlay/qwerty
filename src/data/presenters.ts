import type { Presenter } from '@/types'

export const presenters: Presenter[] = [
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Breakfast Show Host',
    bio: 'Sarah has been waking up the East Coast for over 8 years with her energetic breakfast show. A lover of indie music and terrible puns, she\'s the perfect start to your day.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    social: {
      twitter: '@sarahjenkins',
      instagram: 'sarahjenkins_radio'
    },
    fullBio: 'Sarah Jenkins is the voice that thousands of East Coast residents wake up to every weekday morning. With eight years of broadcasting experience and an infectious enthusiasm that never seems to wane, Sarah has become one of the region\'s most beloved radio personalities.\n\nBefore joining Sundown Radio in 2015, Sarah cut her teeth in hospital radio while studying Media and Communications at the University of Brighton. After graduation, she worked her way up through local commercial stations before finding her home at Sundown Radio, where she immediately connected with the community radio ethos.\n\nKnown for her quick wit, genuine warmth, and ability to make even 6 AM feel like a party, Sarah has transformed The Breakfast Club into the region\'s top-rated morning show. Her interviews with everyone from Hollywood celebrities to local school children display the same level of interest and respect, reflecting her belief that everyone has a story worth telling.\n\nOutside the studio, Sarah is an avid runner (though she\'ll tell you she\'s not very good at it), a self-proclaimed foodie who can\'t cook, and a dedicated supporter of local music venues. She lives in Coastal Town with her rescue dog, Radio (yes, really), and an impressive collection of vintage band t-shirts.\n\nSarah\'s work extends beyond the airwaves. She\'s a passionate advocate for mental health awareness, regularly hosting fundraising events and speaking at schools about the importance of talking about feelings. In 2023, she was awarded the Community Champion Award by the local council for her charity work.',
    yearsExperience: 8,
    favoriteGenres: ['Indie Rock', 'Alternative', 'Pop', '80s Classics'],
    funFacts: [
      'Has interviewed over 200 celebrities but still gets starstruck',
      'Once accidentally called the Prime Minister "Prime Minster" on air',
      'Collects vinyl but admits she rarely plays them',
      'Her dog Radio has his own Instagram following',
      'Can\'t start the day without at least three cups of coffee'
    ],
    joinedDate: '2015-09-01'
  },
  {
    id: 'marcus-wright',
    name: 'Marcus Wright',
    role: 'Drive Time Host',
    bio: 'Marcus brings the energy on your commute home with the latest hits and chart music. When he\'s not behind the mic, you\'ll find him at local gigs discovering new talent.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    social: {
      twitter: '@marcuswright',
      instagram: 'marcuswright_sundown',
      facebook: 'MarcusWrightRadio'
    },
    fullBio: 'Marcus Wright brings energy, enthusiasm, and an encyclopedic knowledge of pop music to Drive Time every weekday. Since joining Sundown Radio three years ago, Marcus has established himself as the go-to voice for your commute home, perfectly balancing entertainment with essential traffic and travel information.\n\nMarcus\'s journey into radio began unexpectedly. After studying Business Management at university, he was working in marketing when he started a music blog that quickly gained a following. His sharp writing and genuine passion for discovering new artists caught the attention of a local radio station, who offered him a weekend show. He never looked back.\n\nWhat sets Marcus apart is his genuine connection to the local music scene. Most weekends, you\'ll find him at gigs, festivals, and open mic nights across the region, often giving unsigned artists their first radio play on Monday\'s show. Several acts he\'s championed have gone on to major label deals and national recognition.\n\nBeyond music, Marcus is known for his infectious laugh, his terrible dad jokes (despite not having children), and his ability to find the positive angle in any traffic jam. He\'s turned "being stuck on the A27" into a running joke that has listeners calling in with their own traffic delay stories.\n\nMarcus is actively involved in music education programs, visiting schools to run workshops on music production and radio broadcasting. He\'s also a mentor for the station\'s youth training program, helping young people develop the skills and confidence to pursue careers in media.',
    yearsExperience: 5,
    favoriteGenres: ['Pop', 'Chart Music', 'Indie', 'R&B'],
    funFacts: [
      'Has a spreadsheet tracking every song he\'s played on air',
      'Once got stuck in a traffic jam so bad he hosted an hour from his car',
      'His Spotify playlists have over 50,000 followers',
      'Competed on a radio quiz show and came second',
      'Makes his own granola (and won\'t stop talking about it)'
    ],
    joinedDate: '2021-03-15'
  },
  {
    id: 'jenny-patel',
    name: 'Jenny Patel',
    role: 'Weekend Specialist',
    bio: 'Jenny\'s weekend shows are legendary on the East Coast. From soul to funk to disco, she brings the feel-good vibes every Saturday and Sunday.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    social: {
      instagram: 'djjennypatel',
      email: 'jenny@sundownradio.radio'
    },
    fullBio: 'DJ Jenny Patel is a force of nature on the decks and behind the mic. With over 15 years of experience in clubs, festivals, and radio, Jenny brings an unmatched level of expertise and passion to Weekend Grooves, Sundown Radio\'s premier soul, funk, and disco show.\n\nJenny\'s love affair with groove-based music began in her parents\' record shop in Brighton, where she spent her childhood surrounded by vinyl. By age 16, she was DJing at youth clubs. By 19, she was playing at some of the South Coast\'s most respected venues. Her reputation for finding the perfect track at the perfect moment and her seamless mixing style quickly made her one of the region\'s most sought-after DJs.\n\nHer radio career began with guest spots on various stations, but Weekend Grooves, which she launched at Sundown Radio in 2018, has become her spiritual home. The show perfectly combines her skills as a DJ with her deep knowledge of music history, creating an experience that educates as much as it entertains.\n\nJenny\'s personal vinyl collection numbers in the thousands, with a focus on rare soul and funk pressings from the 1970s. She\'s known for dropping tracks that haven\'t been heard on radio for decades, often leading to listeners desperately trying to identify songs for their own collections.\n\nOutside radio, Jenny is a respected figure in the UK dance music scene, regularly playing at festivals and running workshops on DJ technique and music history. She\'s also involved in community projects that use music to bring people together, including weekly sessions for older residents where she shares music from their youth.',
    yearsExperience: 15,
    favoriteGenres: ['Soul', 'Funk', 'Disco', 'Rare Groove', 'House'],
    funFacts: [
      'Owns over 5,000 vinyl records (and counting)',
      'Once played a 12-hour DJ set without repeating a single artist',
      'Her record digging trips have taken her to 15 countries',
      'Featured in a documentary about UK soul music',
      'Can identify most 1970s funk tracks within three seconds'
    ],
    joinedDate: '2018-05-20'
  },
  {
    id: 'tom-harrison',
    name: 'Tom Harrison',
    role: 'News & Talk',
    bio: 'Tom heads up our news and community programming, keeping listeners informed about what matters on the East Coast. A former newspaper journalist, he knows how to get to the heart of the story.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    social: {
      twitter: '@tomharrisonnews',
      email: 'tom@sundownradio.radio'
    },
    fullBio: 'Tom Harrison brings over 20 years of journalism experience to Sundown Radio, where he heads up the station\'s news and current affairs programming. As host of Community Matters, Tom has established himself as a trusted voice on local issues and a fearless interviewer who asks the questions listeners want answered.\n\nTom\'s career began in print journalism, working for regional newspapers where he covered everything from local council meetings to major investigations. His reporting won several regional press awards, including an investigation into housing conditions that led to significant policy changes. However, he felt the need to connect more directly with communities, leading him to make the switch to radio in 2016.\n\nAt Sundown Radio, Tom has found the perfect platform to pursue the kind of in-depth, community-focused journalism that larger media often overlooks. His approach combines rigorous fact-checking and holding power to account with a genuine empathy for ordinary people\'s experiences. Whether interviewing politicians or community activists, Tom\'s preparation and listening skills consistently draw out insights that matter.\n\nTom\'s show has broken several local stories that were later picked up by regional and even national media. His commitment to giving voice to underrepresented communities has earned him widespread respect, even from those who might disagree with specific editorial positions.\n\nOutside work, Tom is a school governor, a volunteer with a local literacy charity, and an obsessive reader of non-fiction. He\'s known for his collection of notebooks, his preference for face-to-face interviews over phone calls, and his ability to remember seemingly every conversation he\'s ever had.',
    yearsExperience: 20,
    favoriteGenres: ['Talk', 'News', 'Documentary', 'Jazz'],
    funFacts: [
      'Has filled over 200 notebooks with interview notes',
      'Once doorstepped a minister at a garden party (they still speak)',
      'His filing system is legendary but understood only by him',
      'Prefers tea to coffee (controversial in the station)',
      'Won a regional journalism award three years running'
    ],
    joinedDate: '2016-11-01'
  },
  {
    id: 'lisa-chen',
    name: 'Lisa Chen',
    role: 'Music Specialist',
    bio: 'Lisa curates our specialist music shows, from jazz to electronic to world music. Her encyclopedic knowledge and passion for music discovery makes every show a journey.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    social: {
      instagram: 'lisa_chen_music',
      twitter: '@lisachenmusic'
    },
    fullBio: 'Lisa Chen is Sundown Radio\'s resident musical explorer, taking listeners on journeys through sounds from across the globe and across genres. As host of Music Discovery, Lisa has introduced countless listeners to music they never knew existed, expanding horizons and challenging preconceptions about what radio can be.\n\nLisa\'s musical education began with classical piano lessons as a child, but her taste quickly expanded in every direction imaginable. By university, where she studied Ethnomusicology, she was as likely to be found at a free jazz show as a Ghanaian highlife night or an experimental electronic gig. This omnivorous approach to music continues to define her work today.\n\nBefore radio, Lisa worked in music libraries, festival programming, and music journalism, building an extraordinary breadth of knowledge and a network of contacts spanning the global music community. She joined Sundown Radio in 2017 with a mission to create a show that would treat specialist music with the same respect and airtime that mainstream shows give to chart hits.\n\nMusic Discovery has become exactly that - a destination for listeners who want their horizons expanded. Lisa\'s ability to contextualize music, explaining not just what you\'re hearing but why it matters and how it connects to other sounds, has earned her a devoted following and recognition from music industry professionals.\n\nLisa also curates the station\'s music library, writes for music publications, and lectures occasionally at universities about music broadcasting and global music trends. She speaks three languages and is learning two more, believing that to truly understand music, you need to understand the cultures it comes from.',
    yearsExperience: 10,
    favoriteGenres: ['Jazz', 'Electronic', 'World Music', 'Experimental', 'Classical'],
    funFacts: [
      'Has attended music festivals on six continents',
      'Her music library contains over 30,000 tracks',
      'Speaks Mandarin, Spanish, and is learning Portuguese',
      'Once interviewed a legendary composer entirely in French',
      'Her "perfect day" playlist would last 8 hours'
    ],
    joinedDate: '2017-08-10'
  },
  {
    id: 'dave-thompson',
    name: 'Dave Thompson',
    role: 'Late Night Host',
    bio: 'Dave keeps you company through the night with smooth sounds and late-night conversations. A self-confessed night owl, he\'s been in radio for 15 years.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    social: {
      twitter: '@davethompsonfm'
    },
    fullBio: 'Dave Thompson is Sundown Radio\'s guardian of the late hours, broadcasting from 11 PM to 2 AM every night. For over seven years, Dave has been the companion to night workers, insomniacs, and anyone who finds peace in the quiet hours, creating a sonic sanctuary of ambient, downtempo, and chill music.\n\nDave\'s radio career spans 15 years, but he found his true calling when he started hosting Late Night Sessions. A natural night owl who has always felt most creative after dark, Dave intuitively understands the unique rhythm and needs of nocturnal life. His show isn\'t just about playing music; it\'s about creating a consistent, reliable presence for people during hours that can feel isolating.\n\nBefore focusing on late-night radio, Dave had diverse experience across different formats and day parts, but nothing felt quite right until he found the graveyard shift. Here, the usual pressures of radio - keeping energy high, packing in content, constant interaction - give way to something more contemplative and genuine.\n\nWhat makes Dave special is his understanding that Late Night Sessions serves a different purpose than daytime radio. For many listeners, it\'s not background music but active companionship. Dave reads every message sent in, remembers regular listeners\' names and situations, and creates a genuine sense of community among people who might otherwise feel alone at these hours.\n\nDave is an advocate for better support for shift workers, regularly hosting discussions about the health and social impacts of night work. He\'s also passionate about sleep health, partnering with local health services to provide information and support for people struggling with insomnia.\n\nOutside broadcasting, Dave is (appropriately) a keen amateur astronomer, a hobby that perfectly suits his nocturnal schedule.',
    yearsExperience: 15,
    favoriteGenres: ['Ambient', 'Downtempo', 'Chill', 'New Age', 'Drone'],
    funFacts: [
      'Has never set an alarm clock in his adult life',
      'Owns three telescopes and can name most visible constellations',
      'His show has been mentioned in academic papers about radio and wellbeing',
      'Celebrates "sunrise" rather than "sunrise" at the end of his shift',
      'Once stayed awake for 48 hours to understand shift workers better'
    ],
    joinedDate: '2017-02-14'
  }
]

export const getPresenterById = (id: string): Presenter | undefined => {
  return presenters.find(presenter => presenter.id === id)
}

export const getPresentersByIds = (ids: string[]): Presenter[] => {
  return ids.map(id => getPresenterById(id)).filter((p): p is Presenter => p !== undefined)
}
