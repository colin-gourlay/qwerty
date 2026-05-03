import { Play, Pause, SpeakerHigh, SpeakerSlash, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { useAudioPlayer } from './AudioPlayerContext'
import { STATION_CONFIG } from '@/data/config'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SoundWave from './SoundWave'
import stationLogo from '@/assets/images/station-logo.webp'
import { useCurrentShow } from '@/hooks/use-current-show'

export default function FloatingAudioPlayer() {
  const { isPlaying, volume, isMuted, togglePlay, setVolume, toggleMute } = useAudioPlayer()
  const { currentShow, currentSlot } = useCurrentShow()
  const [isMinimized, setIsMinimized] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  if (isMinimized) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all"
          onClick={() => setIsMinimized(false)}
        >
          {isPlaying ? (
            <>
              <SoundWave />
              <Pause weight="fill" className="h-6 w-6" />
            </>
          ) : (
            <Play weight="fill" className="h-6 w-6" />
          )}
        </Button>
      </motion.div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-2xl"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-3">
            <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
              <img 
                src={stationLogo} 
                alt={STATION_CONFIG.name}
                className="h-10 w-auto object-contain flex-shrink-0"
              />
              <div className="hidden sm:block min-w-0">
                {currentShow ? (
                  <>
                    <div className="font-semibold text-sm truncate">{currentShow.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      {isPlaying ? (
                        <>
                          <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                          </span>
                          <span className="truncate">Now Playing</span>
                        </>
                      ) : (
                        <span className="truncate">Ready to play</span>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-semibold text-sm">{STATION_CONFIG.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      {isPlaying ? (
                        <>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                          </span>
                          Now Playing
                        </>
                      ) : (
                        'Ready to play'
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-1 justify-center">
              <Button
                size="icon"
                variant="ghost"
                onClick={togglePlay}
                className="h-12 w-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-all flex-shrink-0"
              >
                {isPlaying ? (
                  <Pause weight="fill" className="h-6 w-6" />
                ) : (
                  <Play weight="fill" className="h-6 w-6" />
                )}
              </Button>

              {isPlaying && currentShow && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="hidden lg:flex flex-col items-center min-w-0"
                >
                  <div className="text-xs text-muted-foreground">Now Playing</div>
                  <div className="font-medium text-sm truncate max-w-xs">{currentShow.name}</div>
                  {currentSlot && (
                    <div className="text-xs text-muted-foreground">
                      {currentSlot.startTime} - {currentSlot.endTime}
                    </div>
                  )}
                </motion.div>
              )}

              {isPlaying && !currentShow && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="hidden md:flex items-center gap-1"
                >
                  <SoundWave />
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleMute}
                className="hidden sm:flex"
              >
                {isMuted ? (
                  <SpeakerSlash className="h-5 w-5" />
                ) : (
                  <SpeakerHigh className="h-5 w-5" />
                )}
              </Button>

              <div className="hidden md:block w-24">
                <Slider
                  value={[isMuted ? 0 : volume * 100]}
                  onValueChange={(value) => setVolume(value[0] / 100)}
                  max={100}
                  step={1}
                  className="cursor-pointer"
                />
              </div>

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsMinimized(true)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
