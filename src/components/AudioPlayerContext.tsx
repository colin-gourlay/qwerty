import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'

interface AudioPlayerContextType {
  isPlaying: boolean
  isBuffering: boolean
  hasError: boolean
  volume: number
  isMuted: boolean
  play: () => void
  pause: () => void
  togglePlay: () => void
  setVolume: (volume: number) => void
  toggleMute: () => void
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined)

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext)
  if (!context) {
    throw new Error('useAudioPlayer must be used within AudioPlayerProvider')
  }
  return context
}

interface AudioPlayerProviderProps {
  children: ReactNode
  streamUrl: string
}

export function AudioPlayerProvider({ children, streamUrl }: AudioPlayerProviderProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [volume, setVolumeState] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(streamUrl)
    audio.volume = volume
    audioRef.current = audio

    const handleWaiting = () => setIsBuffering(true)
    const handlePlaying = () => {
      setIsBuffering(false)
      setHasError(false)
    }
    const handleError = () => {
      setIsBuffering(false)
      setHasError(true)
      setIsPlaying(false)
    }
    const handleStalled = () => setIsBuffering(true)
    const handleCanPlay = () => setIsBuffering(false)

    audio.addEventListener('waiting', handleWaiting)
    audio.addEventListener('playing', handlePlaying)
    audio.addEventListener('error', handleError)
    audio.addEventListener('stalled', handleStalled)
    audio.addEventListener('canplay', handleCanPlay)

    return () => {
      audio.removeEventListener('waiting', handleWaiting)
      audio.removeEventListener('playing', handlePlaying)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('stalled', handleStalled)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.pause()
      audio.src = ''
    }
  }, [streamUrl])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const play = () => {
    if (audioRef.current) {
      setHasError(false)
      setIsBuffering(true)
      setIsPlaying(true)
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error)
        setIsBuffering(false)
        setHasError(true)
        setIsPlaying(false)
      })
    }
  }

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
      setIsBuffering(false)
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlaying,
        isBuffering,
        hasError,
        volume,
        isMuted,
        play,
        pause,
        togglePlay,
        setVolume,
        toggleMute,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  )
}
