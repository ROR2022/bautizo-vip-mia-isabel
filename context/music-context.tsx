"use client"

import { createContext, useContext, useState, useRef, useEffect, type ReactNode } from "react"
import { useIsClient } from "@/hooks/useIsClient"

type MusicContextType = {
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  togglePlay: () => void
  isClient: boolean
  currentTrack: string
  setCurrentTrack: (track: string) => void
  volume: number
  setVolume: (volume: number) => void
  // 🎵 Nuevas funciones para música mexicana tradicional
  availableTracks: Array<{title: string, file: string, description: string}>
  switchToNextTrack: () => void
  currentTrackInfo: {title: string, description: string}
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: ReactNode }) {
  // 🎵 Configuración de canciones mexicanas tradicionales para Mia Isabel
  const availableTracks = [
    {
      title: "Cielito Lindo",
      file: "/music/cielito-lindo-mia-isabel.mp3",
      description: "Canción principal elegida especialmente para Mia Isabel"
    },
    {
      title: "La Bikina - Mariachi Vargas de Tecalitlán",
      file: "/images/custom/LA BIKINA MARIACHI VARGAS DE TECALITLAN.mp3",
      description: "Clásico mariachi mexicano para la celebración familiar"
    }
  ]

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [currentTrack, setCurrentTrack] = useState(availableTracks[0].file)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isClient = useIsClient()

  // Función para cambiar a la siguiente canción
  const switchToNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % availableTracks.length
    setCurrentTrackIndex(nextIndex)
    setCurrentTrack(availableTracks[nextIndex].file)
  }

  // Información de la canción actual
  const currentTrackInfo = availableTracks[currentTrackIndex]

  useEffect(() => {
    if (isClient && !audioRef.current) {
      audioRef.current = new Audio(currentTrack)
      audioRef.current.loop = true
      audioRef.current.volume = volume
    }
  }, [isClient, currentTrack, volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current && audioRef.current.src !== currentTrack) {
      const wasPlaying = isPlaying
      if (isPlaying) {
        audioRef.current.pause()
      }
      audioRef.current.src = currentTrack
      if (wasPlaying) {
        audioRef.current.play().catch(console.error)
      }
    }
  }, [currentTrack, isPlaying])

  const togglePlay = () => {
    if (!isClient || !audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
    }
  }

  const safeSetIsPlaying = (playing: boolean) => {
    if (!isClient || !audioRef.current) return
    
    if (playing && !isPlaying) {
      audioRef.current.play().catch(console.error)
    } else if (!playing && isPlaying) {
      audioRef.current.pause()
    }
    setIsPlaying(playing)
  }

  const safeSetCurrentTrack = (track: string) => {
    if (!isClient) return
    setCurrentTrack(track)
  }

  const safeSetVolume = (vol: number) => {
    if (!isClient) return
    setVolume(vol)
  }

  return (
    <MusicContext.Provider value={{ 
      isPlaying, 
      setIsPlaying: safeSetIsPlaying, 
      togglePlay,
      isClient,
      currentTrack,
      setCurrentTrack: safeSetCurrentTrack,
      volume,
      setVolume: safeSetVolume,
      // 🎵 Nuevas funciones para música mexicana tradicional
      availableTracks,
      switchToNextTrack,
      currentTrackInfo
    }}>
      {children}
    </MusicContext.Provider>
  )
}

export function useMusicContext() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error("useMusicContext must be used within a MusicProvider")
  }
  return context
}
