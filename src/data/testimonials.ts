export interface Testimonial {
  id: string
  company: string
  industry: string
  contact: string
  role: string
  quote: string
  logo?: string
  adType: 'broadcast' | 'website' | 'sponsorship' | 'combined'
  since: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'haddington-garden-centre',
    company: 'Haddington Garden Centre',
    industry: 'Retail & Garden Services',
    contact: 'Sarah Mitchell',
    role: 'Marketing Manager',
    quote: "Advertising with East Coast FM has helped us connect with local customers in a genuine way. We've seen a noticeable increase in foot traffic, especially during our seasonal promotions. The team at ECFM are professional and always willing to work with us to create ads that really resonate with the community.",
    adType: 'broadcast',
    since: '2015',
    logo: 'garden-centre'
  },
  {
    id: 'lothian-motors',
    company: 'Lothian Motors',
    industry: 'Automotive Sales & Service',
    contact: 'James Davidson',
    role: 'Owner',
    quote: "We've been sponsoring the breakfast show for over three years now, and it's been one of our best marketing decisions. The audience engagement is fantastic, and we regularly have customers mentioning they heard about us on East Coast FM. It's great value for money and reaches exactly the right audience for our business.",
    adType: 'sponsorship',
    since: '2018',
    logo: 'automotive'
  },
  {
    id: 'maitlands-solicitors',
    company: 'Maitlands Solicitors',
    industry: 'Legal Services',
    contact: 'Eleanor Sinclair',
    role: 'Senior Partner',
    quote: "As a local law firm, it's important for us to maintain a presence in the community. East Coast FM provides the perfect platform to reach local residents with important legal information and updates about our services. The professionalism of the station reflects well on our brand, and we've built strong relationships through our partnership.",
    adType: 'combined',
    since: '2016',
    logo: 'legal'
  },
  {
    id: 'east-lothian-physio',
    company: 'East Lothian Physiotherapy',
    industry: 'Healthcare',
    contact: 'Dr. Mark Henderson',
    role: 'Clinical Director',
    quote: "East Coast FM has been instrumental in helping us reach patients across East Lothian. The targeted nature of community radio means our message reaches people who are genuinely interested in local healthcare services. We've seen a steady increase in new patient enquiries since we started advertising.",
    adType: 'broadcast',
    since: '2019',
    logo: 'healthcare'
  },
  {
    id: 'victoria-inn',
    company: 'The Victoria Inn',
    industry: 'Hospitality',
    contact: 'Michael O\'Brien',
    role: 'Proprietor',
    quote: "We've been advertising our events and live music nights on East Coast FM for several years. It's the best way to reach local people who are looking for things to do in the area. The response has been brilliant, and the station team are always supportive of local businesses.",
    adType: 'broadcast',
    since: '2014',
    logo: 'hospitality'
  },
  {
    id: 'haddington-dental',
    company: 'Haddington Dental Practice',
    industry: 'Healthcare',
    contact: 'Dr. Jennifer Ross',
    role: 'Practice Principal',
    quote: "Community radio is the perfect fit for a community dental practice. East Coast FM helps us communicate with existing and potential patients in a friendly, accessible way. We appreciate the station's commitment to serving the local area, and we're proud to be associated with them.",
    adType: 'website',
    since: '2017',
    logo: 'dental'
  }
]
