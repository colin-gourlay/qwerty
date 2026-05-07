# East Coast FM - Community Radio Station Website

A modern, production-ready web platform for East Coast FM, a UK community radio station, delivering live streaming, show schedules, presenter profiles, news content, and listener engagement features.

**Experience Qualities**:
1. **Professional** - Conveys credibility and broadcast-quality presentation befitting a real radio station
2. **Accessible** - Inclusive design following WCAG standards, ensuring all listeners can engage with content
3. **Dynamic** - Live, real-time feeling with persistent audio streaming and current schedule awareness

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
The site includes multiple interconnected pages (home, schedule, shows, presenters, news, listen again, contact), persistent audio player state, real-time schedule parsing, content collections, and sophisticated routing - all requiring coordinated state management and data architecture.

## Essential Features

### Live Audio Streaming (Floating Player)
- **Functionality**: Persistent HTML5 audio player with play/pause/volume/mute controls that floats at bottom of viewport
- **Purpose**: Core value proposition - enables listeners to tune in from anywhere while browsing the site
- **Trigger**: Click "Listen Live" button in header, hero section, or any page
- **Progression**: User clicks CTA → Floating player appears at bottom → Stream loads → Audio plays → Player persists across all page navigation → Can minimize to compact button or close temporarily
- **Success criteria**: Audio streams reliably, controls respond immediately, playback state persists across page navigation, player can be minimized/expanded, volume settings are preserved

### On Air Now Display
- **Functionality**: Dynamic show indicator matching current time against schedule data
- **Purpose**: Keeps listeners informed about current programming and creates connection with presenters
- **Trigger**: Page load and every minute thereafter
- **Progression**: App loads → Client reads schedule JSON → Matches current time to show slot → Displays show name, presenter, and thumbnail
- **Success criteria**: Correct show displays within 60 seconds of schedule change, handles gaps gracefully

### Weekly Schedule Grid
- **Functionality**: Visual timetable showing all shows by day and time
- **Purpose**: Helps listeners plan when to tune in for favorite shows
- **Trigger**: Navigate to Schedule page
- **Progression**: User clicks Schedule → Grid renders with days as columns → Shows fill time slots → User can click show for details → Can generate shareable schedule images
- **Success criteria**: Schedule is scannable, time slots are clear, works on mobile with horizontal scroll or stacked layout, image generation produces high-quality graphics

### Show Schedule Image Generator
- **Functionality**: Generate shareable social media images for show schedules with custom branding
- **Purpose**: Enable listeners and station staff to create professional graphics for promoting shows on social media
- **Trigger**: Click "Create Share Image" button on schedule page or individual show pages
- **Progression**: User clicks button → Dialog opens with show/day selectors → User selects show and day → Clicks generate → Canvas renders branded image with gradient background, station logo, show details, and schedule → User can download or share via native share API
- **Success criteria**: Images are 1200x630px (optimal for social media), include all relevant information, maintain brand consistency, download and share functions work reliably

### Show Profiles
- **Functionality**: Dedicated pages for each radio show with description, presenter links, air times
- **Purpose**: Builds show identity and helps listeners discover new content
- **Trigger**: Click show card from home page, schedule, or shows list
- **Progression**: User clicks show → Page loads with hero image → Description, schedule, and presenter info display → Related episodes/listen again links shown
- **Success criteria**: All shows have rich profiles, navigation between show and presenter pages works seamlessly

### Presenter Profiles
- **Functionality**: Individual pages for radio personalities with bio, photo, social links, associated shows
- **Purpose**: Builds personality connection and community around station talent
- **Trigger**: Click presenter card from presenters page, show page, or on-air widget
- **Progression**: User clicks presenter → Profile loads with photo → Bio and show list display → Social links enable further engagement
- **Success criteria**: Professional presentation, all presenters represented, links work correctly

### News/Blog System
- **Functionality**: Article listing with full article pages using markdown content
- **Purpose**: Station news, community updates, music features, event coverage
- **Trigger**: Navigate to News page or click article card
- **Progression**: User visits news → Articles load in reverse chronological order → Click article → Full content renders with formatted text and images
- **Success criteria**: Articles are readable, properly formatted, images load, pagination or filtering works if needed

### Listen Again Archive
- **Functionality**: Browse and play previous show recordings (UI only, no actual audio backend)
- **Purpose**: Catch up on missed shows and build content library value
- **Trigger**: Navigate to Listen Again page, browse by show or date
- **Progression**: User clicks Listen Again → Shows/episodes list → Select episode → Playback UI displays (placeholder audio)
- **Success criteria**: Browsing is intuitive, playback controls are familiar, layout mimics real podcast/audio archive

### Contact/Advertise Pages
- **Functionality**: Static information pages with contact details, advertising information, and interactive coverage area map
- **Purpose**: Facilitate listener feedback, commercial partnerships, and demonstrate broadcast reach
- **Trigger**: Navigate from footer or main navigation
- **Progression**: User clicks Contact → Page displays station address, email, phone, social links alongside interactive coverage area map → Map visualizes primary and secondary broadcast coverage zones centered on Haddington → Shows major towns within coverage area
- **Success criteria**: Information is clear, accessible, professional, and map accurately represents coverage area with smooth animations

### Coverage Area Map
- **Functionality**: Interactive D3-powered visualization showing the station's broadcast coverage zones
- **Purpose**: Visually communicate broadcast reach to listeners and potential advertisers, building geographic identity
- **Trigger**: Automatically loads on Contact page
- **Progression**: Map renders → Primary coverage area (inner circle) and secondary coverage area (outer circle) display with gradient fills → Station location (Haddington) marked with pulsing animation → Major towns within coverage labeled → Legend explains coverage zones → Map responsively scales to container
- **Success criteria**: Map is visually clear, animations are smooth, coverage zones are distinguishable, responsive on all screen sizes, loads quickly without performance issues

### Frequency Information & Reception Tips
- **Functionality**: Comprehensive guide showing FM frequency (107.9 MHz), DAB digital radio availability, and online streaming options, with location-specific reception quality indicators and practical tuning advice
- **Purpose**: Help listeners find the best way to tune in based on their location and available equipment, reducing technical support requests
- **Trigger**: Displayed on Contact page below contact information and coverage map
- **Progression**: User views contact page → Three tuning method cards display (FM/DAB/Online) → User selects "Reception by Location" tab → List of major towns shows expected reception quality with color-coded badges → User can switch to "Reception Tips" tab → Category-specific troubleshooting guides appear for FM, DAB, online streaming, and general troubleshooting
- **Success criteria**: All frequency information is accurate and clearly displayed, reception quality indicators are intuitive (excellent/good with appropriate colors), tips are practical and actionable, tabs switch smoothly, responsive layout works on all devices

## Edge Case Handling

- **Schedule Gaps** - Display "Music Mix" or station name when no specific show is scheduled
- **Missing Presenter Data** - Show placeholder image and "East Coast FM" as fallback presenter name
- **Invalid Audio Stream** - Display error message with retry button and troubleshooting tips
- **Mobile Navigation** - Collapse to hamburger menu, ensure all pages remain accessible
- **Slow Image Loading** - Use skeleton loaders and properly sized placeholders
- **Client Timezone Handling** - Schedule operates in UK time (GMT/BST), consider displaying timezone indicator
- **Simultaneous Show/Presenter Deletion** - Handle 404s gracefully with helpful navigation back to working sections
- **Empty States** - When no news articles or listen again content exists, show friendly placeholder prompting content creation

## Design Direction

The design should evoke a sense of vibrant community radio with professional broadcast quality - energetic but not overwhelming, modern but approachable. Users should feel they're engaging with a living, locally-rooted media organization that balances grassroots authenticity with technical sophistication.

## Color Selection

The palette draws from coastal themes - sea, sky, sunrise - reflecting the station's "East Coast" identity with warm, energetic accents.

- **Primary Color**: Deep Ocean Blue (oklch(0.45 0.12 240)) - Conveys trustworthiness, broadcast professionalism, and coastal connection
- **Secondary Colors**: 
  - Sunrise Coral (oklch(0.68 0.15 30)) - Energetic accent for CTAs and highlights
  - Sky Blue (oklch(0.72 0.08 230)) - Supporting color for secondary actions and info callouts
- **Accent Color**: Vibrant Coral (oklch(0.65 0.18 35)) - Attention-grabbing highlight for "Listen Live" CTAs and important elements
- **Foreground/Background Pairings**:
  - Primary (Deep Ocean Blue): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent (Vibrant Coral): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓
  - Background (Soft Cream oklch(0.98 0.01 85)): Dark text (oklch(0.25 0.02 240)) - Ratio 11.5:1 ✓
  - Card (White oklch(1 0 0)): Foreground text (oklch(0.25 0.02 240)) - Ratio 12.1:1 ✓

## Font Selection

Typography should balance readability for long-form content with distinctive character that reinforces brand identity - clean without being sterile, modern without being trendy. The chosen fonts work together to create a professional yet approachable broadcast aesthetic.

- **Primary Font (Headings)**: Space Grotesk - Geometric sans with technical precision and subtle personality, perfect for headings and UI elements. Its unique character adds distinctiveness without sacrificing legibility.
- **Secondary Font (Body)**: Inter - Highly optimized sans-serif designed specifically for screen readability. Its generous x-height and open letterforms ensure excellent legibility at all sizes.
- **Accent Font (Technical)**: JetBrains Mono - Professional monospace font for schedule times, frequencies, and technical elements. Adds visual interest and reinforces the technical/broadcast nature of radio.

**Typographic Hierarchy**:
- **H1 (Page Titles)**: Space Grotesk Bold / 48px (mobile: 36px) / -0.02em letter spacing / 1.1 line height
- **H2 (Section Headings)**: Space Grotesk SemiBold / 36px (mobile: 30px) / -0.01em / 1.2 line height
- **H3 (Card Titles/Subsections)**: Space Grotesk Medium / 24px (mobile: 20px) / 0 / 1.3 line height
- **H4 (Minor Headings)**: Space Grotesk SemiBold / 20px / 0 / 1.4 line height
- **H5 (List Headings)**: Space Grotesk SemiBold / 18px / 0 / 1.4 line height
- **H6 (Micro Headings)**: Space Grotesk SemiBold / 16px / 0 / 1.5 line height
- **Body Text**: Inter Regular / 16px (mobile: 15px) / 0 / 1.6 line height
- **Small/Meta**: Inter Regular / 14px / 0 / 1.5 line height
- **Schedule Times/Frequencies**: JetBrains Mono Medium / 14px / 0 / 1.4 line height
- **Buttons**: Space Grotesk SemiBold / 16px / 0.01em / 1

**Implementation Notes**:
- All three fonts are loaded from Google Fonts with weights 400, 500, 600, 700 (where available)
- Font loading uses `display=swap` for optimal performance
- Mobile typography scales down by approximately 25% for better readability on smaller screens
- Line heights are generous (1.6 for body text) to improve readability and create breathing room
- Letter spacing is slightly tightened on larger headings (-0.02em, -0.01em) for visual tightness
- Buttons use the heading font for consistency with CTAs and UI elements

## Animations

Animations should create a sense of liveness and broadcast energy without distracting from content - purposeful micro-interactions that reward engagement and guide attention to real-time elements like the live player and on-air status.

- **Live Indicator**: Pulsing glow on "LIVE" badge creates urgency and draws eye to streaming status
- **Audio Player**: Subtle volume bar animation, smooth play/pause transitions, waveform visualization if space permits
- **Card Hover**: Gentle lift with shadow increase signals interactivity without excessive movement
- **Page Transitions**: Quick fade-in for content (200ms) maintains flow without delays
- **Now Playing**: Smooth slide-in when show changes, rotation of album artwork or show thumbnail
- **Navigation**: Mobile menu slides from edge with backdrop fade, desktop links have subtle underline animation
- **Schedule Highlight**: Current time slot subtly highlighted with animated border or background pulse

## Component Selection

- **Components**: 
  - Button (shadcn) - Primary/secondary variants for CTAs, especially "Listen Live"
  - Card (shadcn) - Foundation for show, presenter, and news article displays
  - Tabs (shadcn) - Schedule view (by day) and shows/presenters filtering
  - Sheet (shadcn) - Mobile navigation drawer
  - Avatar (shadcn) - Presenter headshots in on-air widget and cards
  - Badge (shadcn) - "LIVE" indicator, show genres/categories
  - Slider (shadcn) - Audio player volume control
  - Separator (shadcn) - Section dividers on long pages
  - Tooltip (shadcn) - Hover details on schedule grid items
  - Dialog (shadcn) - Potential use for contact forms or detailed show info
  
- **Customizations**:
  - FloatingAudioPlayer - Persistent player component that remains visible across all pages, with minimize/expand states, full playback controls, volume slider, and live status indicator
  - AudioPlayerContext - React Context provider managing global audio state (isPlaying, volume, mute) accessible throughout the app
  - ScheduleGrid - Custom responsive table/grid showing weekly programming
  - OnAirWidget - Real-time component matching schedule to current time
  - ShowCard - Extended Card with show-specific layout (image, time, presenter)
  - PresenterCard - Avatar-focused card with social links
  - NewsArticleCard - Card with image, headline, excerpt, date
  - Navigation - Custom responsive nav with active route highlighting integrated with audio player state
  
- **States**:
  - Buttons: Distinct hover (brightness increase), active (scale down slightly), focus (ring), disabled (reduced opacity)
  - Audio Player: Playing (animated waveform, pulsing indicators), paused (static), minimized (compact floating button), loading (spinner), error (alert icon), expanded (full controls with volume slider)
  - Cards: Default (subtle shadow), hover (elevated shadow + slight lift), active/selected (colored border)
  - Links: Underline on hover, color shift, focus visible ring
  
- **Icon Selection**:
  - Play/Pause: @phosphor-icons/react Play, Pause (audio player)
  - Volume: Speaker* icons for audio controls
  - Navigation: List, GridFour for view toggles; CaretDown for dropdowns
  - Social: InstagramLogo, TwitterLogo, FacebookLogo, EnvelopeSimple
  - Schedule: Clock, CalendarBlank
  - Live: Broadcast, WaveformSlash
  - News: Article, NewspaperClipping
  - Contact: Phone, EnvelopeSimple, MapPin
  
- **Spacing**: 
  - Card padding: p-6 (24px)
  - Section gaps: gap-12 (48px) desktop, gap-8 (32px) mobile
  - Grid gaps: gap-6 (24px) for card grids
  - Component spacing: space-y-4 (16px) for vertical stacks
  - Container padding: px-4 sm:px-6 lg:px-8
  - Hero padding: py-16 lg:py-24
  
- **Mobile**:
  - Navigation: Full-width sheet drawer replacing horizontal nav
  - Schedule Grid: Stack days vertically or enable horizontal scroll with sticky time column
  - Cards: Single column layout on mobile, 2-3 columns on tablet, 3-4 on desktop
  - Audio Player: Compact floating bar at bottom with essential controls (play/pause, mute, minimize), volume slider hidden on small screens, full controls visible on tablet/desktop
  - Hero: Reduced height, stacked text/image on mobile
  - Typography: Scale down by 20-25% on mobile (H1: 36px mobile vs 48px desktop)
