import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'

interface AudioPlayerContextType {
  isPlaying: boolean
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
  const [volume, setVolumeState] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(streamUrl)
    audio.volume = volume
    audioRef.current = audio

    return () => {
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
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error)
      })
      setIsPlaying(true)
    }
  }

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
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
