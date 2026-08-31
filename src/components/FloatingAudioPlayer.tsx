import { Play, Pause, SpeakerHigh, SpeakerSlash, SpinnerGap } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { useAudioPlayer } from './AudioPlayerContext'
import { STATION_CONFIG } from '@/data/config'
import { useCurrentShow } from '@/hooks/use-current-show'

export default function FloatingAudioPlayer() {
  const { isPlaying, isBuffering, hasError, volume, isMuted, togglePlay, setVolume, toggleMute } = useAudioPlayer()
  const { currentShow, currentSlot } = useCurrentShow()

  const playbackLabel = isBuffering
    ? 'Buffering…'
    : hasError
      ? 'Stream unavailable'
      : isPlaying
        ? 'Now on air'
        : 'Ready to play'

  const ariaLiveStatus = isBuffering
    ? 'Buffering stream'
    : hasError
      ? 'Stream unavailable. Press play to retry.'
      : isPlaying
        ? `Playing ${currentShow ? currentShow.name : STATION_CONFIG.name}`
        : undefined

  return (
    <div
      role="region"
      aria-label={`${STATION_CONFIG.name} player`}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/60 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75 shadow-2xl"
    >
      {/* Subtle brand accent line */}
      <div className="h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-3 min-h-[60px]">

          {/* Station identity + live status */}
          <div className="flex items-center gap-2.5 flex-shrink-0 min-w-0 flex-1 sm:flex-none">
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm leading-tight text-foreground tracking-tight truncate">
                  {STATION_CONFIG.name}
                </span>
                {isPlaying && !hasError && (
                  <span
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-primary text-primary-foreground flex-shrink-0"
                    aria-label="Live"
                  >
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-foreground" />
                    </span>
                    LIVE
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground truncate mt-0.5 leading-tight">
                {hasError ? (
                  <span className="text-destructive">Stream unavailable — tap play to retry</span>
                ) : currentShow ? (
                  <span className="truncate">{currentShow.name}</span>
                ) : (
                  <span>{playbackLabel}</span>
                )}
              </div>
            </div>
          </div>

          {/* Programme info (medium+ screens) */}
          {currentShow && currentSlot && !hasError && (
            <div className="hidden md:flex flex-col min-w-0 flex-1 px-4 border-l border-border/50">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">On Air</span>
              <span className="text-sm font-medium truncate text-foreground">{currentShow.name}</span>
              <span className="text-xs text-muted-foreground">{currentSlot.startTime}–{currentSlot.endTime}</span>
            </div>
          )}

          {/* Spacer on small screens so play button stays centred */}
          <div className="flex-1 sm:hidden" aria-hidden="true" />

          {/* Play / Pause button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              size="icon"
              onClick={togglePlay}
              aria-label={isBuffering ? 'Buffering' : isPlaying ? `Pause ${STATION_CONFIG.name}` : `Play ${STATION_CONFIG.name} live`}
              aria-pressed={isPlaying}
              disabled={isBuffering}
              className="h-11 w-11 rounded-full shadow-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex-shrink-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {isBuffering ? (
                <SpinnerGap className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : isPlaying ? (
                <Pause weight="fill" className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Play weight="fill" className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>

            {/* Mute toggle */}
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              aria-pressed={isMuted}
              className="hidden sm:flex h-9 w-9 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {isMuted ? (
                <SpeakerSlash className="h-4 w-4" aria-hidden="true" />
              ) : (
                <SpeakerHigh className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>

            {/* Volume slider */}
            <div className="hidden md:block w-24" aria-label="Volume control">
              <Slider
                value={[isMuted ? 0 : volume * 100]}
                onValueChange={(value) => setVolume(value[0] / 100)}
                max={100}
                step={1}
                aria-label="Volume"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Live status for screen readers — polite so it doesn't interrupt */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {ariaLiveStatus ?? ''}
      </span>
    </div>
  )
}
