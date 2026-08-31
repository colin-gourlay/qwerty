# Sundown Radio audit against current Sundown Sessions principles

## Scope

This audit reviews the current `qwerty` station site as implemented in this repository. It uses the issue brief as the Sundown Sessions baseline:

- Sundown Radio should feel **broader** while Sundown Sessions feels **deeper**
- both sites should read as one brand family
- reuse established Sessions patterns where they solve the same problem well
- avoid metadata, interaction, or page depth simply because the data exists
- keep live radio, schedule, presenter, and multi-show discovery flows where they are genuinely station-specific
- prefer the smallest coherent follow-up changes rather than a full redesign

## Evidence reviewed

- Route map and shared chrome: `/home/runner/work/qwerty/qwerty/src/App.tsx`
- Player and live state: `/home/runner/work/qwerty/qwerty/src/components/AudioPlayerContext.tsx`, `/home/runner/work/qwerty/qwerty/src/components/FloatingAudioPlayer.tsx`, `/home/runner/work/qwerty/qwerty/src/hooks/use-current-show.ts`
- Visual system: `/home/runner/work/qwerty/qwerty/src/index.css`
- Station pages: `/home/runner/work/qwerty/qwerty/src/components/*.tsx`
- Content/data model: `/home/runner/work/qwerty/qwerty/src/data/*.ts`
- Historical documentation: `/home/runner/work/qwerty/qwerty/README.md`, `/home/runner/work/qwerty/qwerty/PRD.md`

## Headline judgement

The current site already has a credible **radio-first information architecture** and a strong set of **station-specific utilities**. The main divergence from current Sundown Sessions principles is not the existence of those radio-specific surfaces, but the amount of **Spark-era decorative styling, placeholder depth, and over-produced metadata** layered onto them.

In short:

- keep the **Listen → now playing → schedule → shows** core
- keep station-specific utilities such as coverage, reception and volunteer/donor information
- reduce legacy gradient-heavy presentation, placeholder richness and artificial depth
- add more deliberate cross-site journeys into deeper Show properties where relevant

## Area-by-area audit

| Area | Current behaviour / pattern | Classification | Comparison with Sundown Sessions principle | Change warranted? | Recommended direction | Priority / impact |
| --- | --- | --- | --- | --- | --- | --- |
| Global brand expression | Purple/teal palette is applied consistently across the site and broadly fits the station identity (`src/index.css`). | **Aligned** | Shared palette supports a coherent brand family without forcing duplication. | No major change. | Retain the core palette and token approach. | Low / protects continuity |
| Decorative visual language | Many pages use bespoke animated gradients, overlays and patterned hero treatments (`gradient-hero`, `gradient-schedule`, `gradient-presenters`, etc. in `src/index.css`; multiple page sections in `src/App.tsx` and page components). | **Legacy / divergent** | Sessions principles favour coherence and restraint; the current implementation often feels generated and page-theme-driven rather than editorially led. | Yes. | Reduce the number of unique hero treatments, simplify backgrounds, and let content hierarchy do more of the work. | High / biggest visual divergence |
| Typography | Space Grotesk + Inter + mono utility are consistently defined and used in the CSS base layer. | **Aligned** | The system is readable and gives the product a contemporary editorial feel. | No major change. | Keep the type pairing; tune only where headings feel oversized against simplified layouts. | Low |
| Colour usage in dark mode | `.dark` token values diverge sharply from the main brand palette and appear warmer/louder than the default theme, while the README still advertises a dark/light mode toggle that is not surfaced in the current app. | **Legacy / divergent** | This feels more like Spark experimentation than a stable family system. | Probably. | Reassess whether dark mode is needed at all; if kept, align it more tightly to the main brand system and document the actual behaviour accurately. | Medium |
| Spacing and page rhythm | Core spacing is generally generous and readable, but many pages rely on repeated hero + large card stacks, making rhythm feel padded and samey. | **Legacy / divergent** | Sessions baseline suggests smaller coherent changes and stronger editorial rhythm rather than repeated section formulas. | Yes, selectively. | Keep spacing scale, but simplify page templates and reduce repetitive section framing. | Medium |
| Header and primary navigation | The sticky header exposes the primary visitor journeys clearly: Listen, Schedule, Shows, Presenters, News, About, Get Involved, plus Donate (`src/App.tsx`). | **Aligned** | Supports the station’s broader remit while keeping listening/discovery prominent. | Minor only. | Retain the IA; revisit wording and visual weight after broader visual cleanup. | Low |
| Footer | Footer is clear and serviceable, with quick links, social links and contact information (`src/App.tsx`). | **Station-specific** | A station needs richer utility/footer content than a single-show property. | No major change. | Keep the denser utility footer. | Low |
| Homepage hierarchy | The hero foregrounds listening, but the remainder of the page falls into generic “featured shows” placeholders and “upcoming gigs” rather than a tight radio-first flow (`HomePage` in `src/App.tsx`). | **Legacy / divergent** | The brief says radio’s primary journey is Listen → what is playing → schedule → shows. The current homepage signals that in the hero but not consistently afterwards. | Yes. | Reorder around live state, current show, immediate schedule cues and curated show discovery; demote generic placeholder sections. | High |
| Persistent player | The floating player is persistent, global and integrated with current show state (`FloatingAudioPlayer.tsx`, `AudioPlayerContext.tsx`). | **Station-specific** | This is a legitimate station-level surface that a dedicated Show site would not need in the same way. | Keep. | Retain the persistent player as a core differentiator. | High / core product value |
| On Air Now / current programme treatment | Current show state is computed from schedule data and surfaced inside the player, but the homepage hero uses a static “LIVE NOW” label rather than actual programme information (`use-current-show.ts`, `FloatingAudioPlayer.tsx`, `HomePage`). | **Legacy / divergent** | Sessions-style editorial clarity would surface the real current item where “live now” is claimed. | Yes. | Promote actual current-show information into homepage/top-level listening surfaces. | High |
| Schedule | The schedule route is real, useful and radio-specific, with day grouping and time-of-day cues (`SchedulePage` in `src/App.tsx`, `src/data/schedule.ts`). | **Station-specific** | This is a genuine station need and should not be flattened just for cross-site consistency. | Keep with refinement. | Preserve the schedule as a major station journey. | High |
| Schedule styling and metadata | The schedule adds time-of-day colour legends, genre colour rails and a “Create Share Image” tool (`SchedulePage`, `ScheduleImageGenerator`, `time-slot-colors.ts`, `genre-colors.ts`). | **Legacy / divergent** | Much of this feels like feature and styling inflation rather than listener need. | Yes. | Keep scanability, but simplify legends/badges and reassess whether image generation belongs in the primary visitor flow. | Medium |
| Show discovery | The all-shows page is a straightforward grid and supports browsing well (`ShowsPage` in `src/App.tsx`). | **Aligned** | This fits the “broader station, lighter depth” principle. | Minor only. | Keep the browsing surface, but reduce decorative hero treatment and tighten metadata. | Medium |
| Show profile pages | Show profiles are very deep: long descriptions, features, highlights, contact data, share actions and schedule image generation (`ShowProfilePage.tsx`). | **Legacy / divergent** | The brief explicitly warns against duplicating deep Show content on the station site when a dedicated Show property is better. | Yes. | Keep concise station-level show summaries and schedule/presenter context; move deeper show storytelling and heavy metadata behind dedicated Show-property journeys. | High |
| Presenter discovery | Presenter index is easy to scan and belongs on the station site (`PresentersPage` in `src/App.tsx`). | **Station-specific** | Presenter discovery is more important for a station than for a single-show site. | Keep. | Retain presenter listing as a core browse route. | Medium |
| Presenter profile pages | Presenter profiles are very expanded, with long bios, fun facts, favourite genres and multiple fact cards (`PresenterProfilePage.tsx`, `src/data/presenters.ts`). | **Legacy / divergent** | This is richer than the station’s primary journeys require and reads more like generated filler than curated editorial depth. | Yes. | Keep essential presenter identity and linked shows; trim novelty metadata unless it supports a real editorial objective. | High |
| News / editorial | `NewsPage` is effectively a stub with only a heading and intro (`src/App.tsx`), while the README and PRD describe a fuller article system. | **Legacy / divergent** | Historical docs are preserving intent rather than current reality. | Yes. | Either add a genuinely curated lightweight news surface later or deliberately de-emphasise/remove the route until content exists. | High |
| Listen Again | The issue asks for Listen Again review, the README/PRD describe it, but there is no current route or implemented archive experience in the app. | **Legacy / divergent** | This is a gap between historical ambition and present implementation. | Yes. | Treat Listen Again as an explicit follow-up product decision: either build a modest archive surface or remove stale claims from docs/navigation planning. | High |
| About / history / contact / involvement | These sections communicate the station’s public-service role, geography, charity status and volunteer model (`AboutPage.tsx`, `HistoryPage.tsx`, `GetInvolvedPage.tsx`, `ContactPage` in `App.tsx`). | **Station-specific** | These are valid differences from a deeper single-show site. | Keep. | Preserve these areas; they are part of the broader station remit. | Medium |
| Coverage map and reception guidance | Coverage map, reception tabs and postcode-based frequency finder are substantial service features (`CoverageMap.tsx`, `FrequencyInfo.tsx`, `FrequencyFinder.tsx`). | **Station-specific** | Exactly the kind of functionality that should remain distinct from Show properties. | Keep. | Retain as a differentiating station utility; visual simplification can happen later without reducing scope. | Medium |
| Calls to action | Listen Live and Donate are consistently promoted, but many pages accumulate extra share/download/action affordances. | **Legacy / divergent** | Sessions principles caution against surfacing functionality simply because it exists. | Yes. | Focus CTA hierarchy around listening, schedule discovery, show exploration and a small number of support actions. | Medium |
| Cross-site journeys | I found no explicit route from station-level show pages into a deeper Sundown Sessions or other dedicated Show property. | **Legacy / divergent** | The brief specifically asks the station site to avoid duplicating deep show content when a natural cross-site journey would be better. | Yes. | Add explicit “visit the full show site” style pathways where a dedicated Show property exists. | High |
| Responsive/mobile behaviour | The site uses responsive grids, a mobile sheet menu and a compactened player (`App.tsx`, `FloatingAudioPlayer.tsx`, page components). | **Aligned** | The mobile behaviour is materially considered rather than desktop-only. | No major structural change. | Keep the responsive foundations. | Low |
| Accessibility basics | There is a skip link, labelled nav, labelled controls, keyboardable postcode badges and live region support in the map (`App.tsx`, `CoverageMap.tsx`, player controls). | **Aligned** | These are solid foundations and should be retained. | Keep. | Preserve and extend. | Low |
| Reduced-motion behaviour | I found no `prefers-reduced-motion` handling despite widespread animation and motion (`src/index.css`, `FloatingAudioPlayer.tsx`, `HistoryTimeline.tsx`). | **Legacy / divergent** | This directly conflicts with the issue’s accessibility and reduced-motion requirement. | Yes. | Add reduced-motion fallbacks before any further motion-heavy styling work. | High |
| Imagery and artwork treatment | Shows, presenters and history all use remote stock-style imagery from Unsplash (`src/data/shows.ts`, `src/data/presenters.ts`, `src/data/history.ts`). | **Legacy / divergent** | This weakens editorial credibility and brand-family distinctiveness. | Yes. | Shift toward controlled station/show artwork and reduce dependence on generic stock imagery. | Medium |
| Editorial tone | Some copy is grounded and station-specific, but much of the show/presenter copy is highly embellished and metadata-heavy. | **Legacy / divergent** | Sessions-style maturity usually comes from selective, confident editorial choices rather than exhaustive bios/facts. | Yes. | Tighten copy to what helps listeners choose, trust and move onward. | High |
| Historical docs | The README and PRD still describe unshipped or over-specified structures such as `src/pages/`, markdown news content, a richer Listen Again system and an expansive Spark brief (`README.md`, `PRD.md`). | **Legacy / divergent** | These files are useful evidence of past intent, but should not keep steering current decisions. | Yes. | Treat them as historical context and update repository docs when implementation direction is clarified. | Medium |

## Patterns already worth protecting

These are the strongest examples of the current site behaving like the right kind of station product:

1. **Persistent listening is first-class** via the global player.
2. **Schedule, presenters and reception information** are treated as core product surfaces, not afterthoughts.
3. **Navigation is broad and station-shaped**, which is appropriate for Sundown Radio.
4. **Accessibility foundations exist** even if motion handling still needs work.

## Legacy assumptions most likely to mislead future work

1. More page-specific gradients and motion automatically means a stronger brand.
2. Every show and presenter needs deep standalone content on the station site.
3. Extra badges, legends, facts, downloads and sharing tools inherently improve discoverability.
4. README/PRD descriptions of unshipped features should still be treated as the target state.

## Recommended follow-up issues

Do not turn this audit into one large redesign. Open focused issues instead:

1. **Refocus homepage on live listening and current programme discovery**  
   Replace placeholder homepage sections with real current-show, next-up and curated show discovery modules.

2. **Introduce reduced-motion support across gradients, player transitions and timeline animations**  
   Add `prefers-reduced-motion` handling and tone down non-essential motion.

3. **Simplify station-level show and presenter pages**  
   Reduce filler metadata, keep only information that helps listeners decide where to go next, and add outbound journeys to dedicated Show properties where they exist.

4. **Define the station-to-show-property linking model**  
   Decide when the station site should summarise versus hand off to Sundown Sessions or other Show destinations.

5. **Decide the future of News and Listen Again**  
   Either implement modest real versions of these surfaces or remove stale claims from project documentation until they exist.

6. **Reduce decorative hero variance and align dark mode to the core brand system**  
   Create a smaller, calmer set of reusable page treatments.

7. **Replace generic stock imagery with controlled station/show artwork**  
   Improve trust, distinctiveness and ecosystem coherence.

8. **Refresh repository documentation to match the implemented product**  
   Update README and related docs once the intended product scope is confirmed.

## Overall recommendation

Sundown Radio does **not** need wholesale convergence with Sundown Sessions. It should keep the parts that are unmistakably station-specific: persistent listening, schedule intelligence, presenter discovery, reception guidance, contact, volunteering and supporter journeys.

The main opportunity is to remove the remaining Spark-era tendency toward **ornament, placeholder depth and feature inflation**, then make the station site a clearer front door into both the live service and the deeper Show ecosystem.
