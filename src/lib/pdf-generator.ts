export function generateAdvertisingRatesPDF() {
  const content = `
EAST COAST FM - ADVERTISING RATES
Broadcasting from the heart of East Lothian
107.6 FM | www.eastcoastfm.co.uk

═══════════════════════════════════════════════════════════════════

BROADCAST ADVERTISING PACKAGES

Standard Advertising (Minimum Plays Per Day)
────────────────────────────────────────────
• 30 Second Spot:
  - 5 plays per day:  £150/week  |  £500/month
  - 10 plays per day: £250/week  |  £900/month
  - 15 plays per day: £350/week  |  £1,200/month

• 60 Second Spot:
  - 5 plays per day:  £250/week  |  £900/month
  - 10 plays per day: £400/week  |  £1,500/month
  - 15 plays per day: £550/week  |  £2,000/month

Show Sponsorship Packages
────────────────────────────────────────────
• Single Show Sponsorship:     £200/week  |  £700/month
• Multiple Show Bundle (3+):   £150/week per show
• Weekend Shows:               £175/week  |  £600/month
• Prime Time Shows:            £250/week  |  £900/month

WEBSITE ADVERTISING

Banner Advertising (Top Rotation)
────────────────────────────────────────────
• Daily Rate:    £25/day
• Weekly Rate:   £150/week (Save 14%)
• Monthly Rate:  £500/month (Save 33%)

Static Block Advertisements
────────────────────────────────────────────
• Homepage Block:     £300/month
• Show Page Block:    £200/month
• Multiple Blocks:    Contact for custom pricing

ADDITIONAL SERVICES

• Situations Vacant:           FREE
• Event Promotion:             £100/event
• Sponsored Outside Broadcast: From £500
• Custom Jingle Production:    From £200

═══════════════════════════════════════════

All prices exclude VAT where applicable.
Long-term contracts (6+ months) eligible for discounts.

Contact: advertising@eastcoastfm.co.uk
Phone: 01620 826444
Address: 2B Station Yards, Haddington, EH41 3PP

═══════════════════════════════════════════
East Coast FM - Charity Registration No. SC042784
`
  return content
}

export function generateBookingFormPDF() {
  const content = `
EAST COAST FM - ADVERTISING BOOKING FORM
═══════════════════════════════════════════════════════════════════

CONTACT INFORMATION
────────────────────────────────────────────
Company Name:    _________________________________________________

Contact Person:  _________________________________________________

Address:         _________________________________________________
                 _________________________________________________
                 _________________________________________________

Phone:           _________________________________________________

Email:           _________________________________________________

Website:         _________________________________________________


ADVERTISING PACKAGE SELECTION
────────────────────────────────────────────

☐ BROADCAST ADVERTISING
  ☐ 30 Second Spot - ___ plays per day
  ☐ 60 Second Spot - ___ plays per day
  ☐ Show Sponsorship - Show name: _____________________________
  ☐ Multiple Show Bundle (please specify shows below)

☐ WEBSITE ADVERTISING
  ☐ Banner Advertising (Rotating)
  ☐ Static Block Advertisement - Location: ____________________

☐ OTHER SERVICES
  ☐ Event Promotion
  ☐ Sponsored Outside Broadcast
  ☐ Custom Jingle Production


CAMPAIGN DETAILS
────────────────────────────────────────────
Start Date:      _________________________________________________

Duration:        ☐ 1 Week  ☐ 1 Month  ☐ 3 Months  ☐ 6 Months  ☐ Other: ________

Target Audience: _________________________________________________

Special Requirements: ____________________________________________
_________________________________________________________________
_________________________________________________________________


CREATIVE MATERIALS
────────────────────────────────────────────
☐ I will provide finished advertisement copy
☐ I need assistance creating advertisement copy
☐ I need jingle/audio production services

Preferred Delivery Method:
☐ Email  ☐ USB Drive  ☐ File Transfer  ☐ Other: ______________


PAYMENT INFORMATION
────────────────────────────────────────────
☐ Invoice me (payment terms: net 30 days)
☐ Direct bank transfer
☐ Cheque (payable to East Coast FM)
☐ Other: ________________________________________________________


TERMS & CONDITIONS
────────────────────────────────────────────
I agree to East Coast FM's advertising terms and conditions.
I understand that payment is due within 30 days of invoice date.
I confirm the information provided is accurate and complete.

Signature: __________________________  Date: ___________________

Print Name: _____________________________________________________


═══════════════════════════════════════════

Please return completed form to:
Email: advertising@eastcoastfm.co.uk
Mail:  East Coast FM, 2B Station Yards, Haddington, EH41 3PP
Phone: 01620 826444

═══════════════════════════════════════════
East Coast FM - Charity Registration No. SC042784
`
  return content
}

export function generateDemographicPDF(area: 'haddington' | 'east-lothian' | 'lothians' | 'south-scotland') {
  const demographics: Record<typeof area, { title: string; population: string; households: string; coverage: string; details: string }> = {
    'haddington': {
      title: 'HADDINGTON',
      population: '9,100',
      households: '3,800',
      coverage: 'Core coverage area - Strongest signal',
      details: `
Primary Broadcast Area
══════════════════════════════════════════════════════

Coverage Area: Haddington and immediate surroundings
Signal Strength: Excellent (107.6 FM)
Estimated Reach: 9,100 residents

KEY DEMOGRAPHICS
────────────────────────────────────────────
Total Population:        9,100
Number of Households:    3,800
Average Household Size:  2.4

Age Distribution:
• 0-15 years:    18%
• 16-29 years:   16%
• 30-44 years:   22%
• 45-64 years:   26%
• 65+ years:     18%

Employment Status:
• Employed:      68%
• Self-employed: 9%
• Retired:       15%
• Other:         8%

Household Income:
• Under £20k:    22%
• £20k-£40k:     38%
• £40k-£60k:     24%
• Over £60k:     16%

LOCAL CHARACTERISTICS
────────────────────────────────────────────
• Historic market town
• Strong sense of community
• Growing population
• Mix of traditional and new housing
• Good transport links to Edinburgh
• Active retail and hospitality sector

LISTENER PROFILE
────────────────────────────────────────────
Weekly Reach:            45% of population (~4,100 listeners)
Average Listening Time:  8.7 hours per week
Peak Listening Times:    7-9am, 12-2pm, 5-7pm
Primary Devices:         FM Radio (68%), Online (22%), Smart Speakers (10%)
`
    },
    'east-lothian': {
      title: 'EAST LOTHIAN',
      population: '106,000',
      households: '45,000',
      coverage: 'Secondary coverage area - Good signal',
      details: `
Secondary Broadcast Area
══════════════════════════════════════════════════════

Coverage Area: East Lothian (full region)
Signal Strength: Good to Excellent (107.6 FM)
Estimated Reach: 106,000 residents

KEY DEMOGRAPHICS
────────────────────────────────────────────
Total Population:        106,000
Number of Households:    45,000
Average Household Size:  2.4

Age Distribution:
• 0-15 years:    17%
• 16-29 years:   14%
• 30-44 years:   20%
• 45-64 years:   28%
• 65+ years:     21%

Employment Status:
• Employed:      65%
• Self-employed: 10%
• Retired:       18%
• Other:         7%

Household Income:
• Under £20k:    24%
• £20k-£40k:     36%
• £40k-£60k:     25%
• Over £60k:     15%

LOCAL CHARACTERISTICS
────────────────────────────────────────────
• Predominantly rural with several towns
• Popular tourist destination
• High quality of life
• Growing retirement population
• Strong agricultural sector
• Commuter belt for Edinburgh

MAJOR TOWNS
────────────────────────────────────────────
• Haddington (9,100)
• Musselburgh (21,900)
• Tranent (11,600)
• Prestonpans (10,200)
• North Berwick (7,800)
• Dunbar (8,900)

LISTENER PROFILE
────────────────────────────────────────────
Weekly Reach:            28% of population (~29,700 listeners)
Average Listening Time:  7.2 hours per week
Peak Listening Times:    7-9am, 12-2pm, 5-7pm
`
    },
    'lothians': {
      title: 'THE LOTHIANS',
      population: '899,000',
      households: '398,000',
      coverage: 'Extended coverage area - Variable signal',
      details: `
Extended Broadcast Area
══════════════════════════════════════════════════════

Coverage Area: East, West, and Midlothian
Signal Strength: Variable (107.6 FM + Online)
Estimated Reach: 899,000 residents

KEY DEMOGRAPHICS
────────────────────────────────────────────
Total Population:        899,000
Number of Households:    398,000
Average Household Size:  2.3

REGIONAL BREAKDOWN
────────────────────────────────────────────
East Lothian:    106,000 (12%)
Midlothian:      92,000 (10%)
Edinburgh:       524,000 (58%)
West Lothian:    177,000 (20%)

Age Distribution (Overall):
• 0-15 years:    16%
• 16-29 years:   21%
• 30-44 years:   22%
• 45-64 years:   24%
• 65+ years:     17%

Employment Status:
• Employed:      68%
• Self-employed: 8%
• Retired:       15%
• Students:      6%
• Other:         3%

Household Income:
• Under £20k:    22%
• £20k-£40k:     32%
• £40k-£60k:     26%
• Over £60k:     20%

LOCAL CHARACTERISTICS
────────────────────────────────────────────
• Mix of urban and rural
• Major economic center (Edinburgh)
• Strong cultural scene
• Excellent education facilities
• Growing tech sector
• Popular tourist region

LISTENER PROFILE
────────────────────────────────────────────
Weekly Reach:            12% of population (~108,000 listeners)
Average Listening Time:  5.8 hours per week
Primary Access:          Online streaming (45%), FM (40%), Apps (15%)
`
    },
    'south-scotland': {
      title: 'SOUTH SCOTLAND',
      population: '1,400,000',
      households: '615,000',
      coverage: 'Online reach - Internet streaming',
      details: `
Online Streaming Reach
══════════════════════════════════════════════════════

Coverage Area: South Scotland (Online streaming)
Signal Strength: N/A (Internet streaming)
Estimated Reach: 1,400,000 residents

KEY DEMOGRAPHICS
────────────────────────────────────────────
Total Population:        1,400,000
Number of Households:    615,000
Average Household Size:  2.3

REGIONAL BREAKDOWN
────────────────────────────────────────────
Lothians:           899,000 (64%)
Scottish Borders:   115,000 (8%)
Dumfries/Galloway:  148,000 (11%)
South Lanarkshire:  238,000 (17%)

Age Distribution:
• 0-15 years:    17%
• 16-29 years:   19%
• 30-44 years:   21%
• 45-64 years:   25%
• 65+ years:     18%

Employment Status:
• Employed:      66%
• Self-employed: 9%
• Retired:       17%
• Other:         8%

ONLINE LISTENER PROFILE
────────────────────────────────────────────
Weekly Online Reach:     8% of population (~112,000 listeners)
Average Listening Time:  4.5 hours per week
Access Methods:
  • Website Player:      42%
  • Mobile Apps:         35%
  • Smart Speakers:      15%
  • TuneIn:             8%

Peak Streaming Times:    7-9am, 12-2pm, 5-7pm

Device Breakdown:
  • Mobile:             55%
  • Desktop:            28%
  • Smart Speaker:      12%
  • Smart TV:           5%

GEOGRAPHIC DISTRIBUTION
────────────────────────────────────────────
Our online audience extends beyond traditional FM
coverage, reaching listeners across South Scotland
and occasionally beyond.

Strong Online Listening Areas:
• Edinburgh and suburbs
• East Lothian
• Midlothian
• Scottish Borders
• Parts of Fife
`
    }
  }

  const data = demographics[area]
  
  return `
EAST COAST FM - DEMOGRAPHIC INFORMATION
${data.title}
═══════════════════════════════════════════════════════════════════

Population: ${data.population}
Households: ${data.households}
Coverage: ${data.coverage}

${data.details}

ADVERTISING OPPORTUNITIES
────────────────────────────────────────────
Our diverse audience provides excellent opportunities
for businesses to reach potential customers across
${data.title.toLowerCase()} and beyond.

Contact us to discuss how we can help reach your
target audience effectively.

═══════════════════════════════════════════

Contact: advertising@eastcoastfm.co.uk
Phone: 01620 826444
Address: 2B Station Yards, Haddington, EH41 3PP

═══════════════════════════════════════════
East Coast FM - Charity Registration No. SC042784
Broadcasting from the heart of East Lothian on 107.6 FM
`
}

export function downloadTextAsPDF(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
