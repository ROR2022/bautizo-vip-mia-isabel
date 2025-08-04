"use client"

import { useState, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Sparkles } from 'lucide-react'
import { useMusicContext } from '@/context/music-context'
import { vipDemoData } from './data/vip-demo-data'
import { MiaIsabelBautizoData } from './data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

interface VipPlaylistProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function VipPlaylist({ data = vipDemoData, theme: _theme }: VipPlaylistProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const { isPlaying, togglePlay, isClient, currentTrack: currentAudioTrack, setCurrentTrack, volume, setVolume } = useMusicContext()

  const currentCategory = data.playlist.categories[currentCategoryIndex]
  const currentTrack = currentCategory?.tracks[currentTrackIndex]

  // Establecer la primera canción al montar el componente
  useEffect(() => {
    if (isClient && currentTrack?.file && currentAudioTrack !== currentTrack.file) {
      setCurrentTrack(currentTrack.file)
    }
  }, [isClient, currentTrack?.file, currentAudioTrack, setCurrentTrack])

  const handlePlayPause = () => {
    togglePlay()
  }

  const handlePrevious = () => {
    let newCategoryIndex = currentCategoryIndex
    let newTrackIndex = currentTrackIndex
    
    if (currentTrackIndex > 0) {
      newTrackIndex = currentTrackIndex - 1
    } else if (currentCategoryIndex > 0) {
      newCategoryIndex = currentCategoryIndex - 1
      newTrackIndex = data.playlist.categories[newCategoryIndex].tracks.length - 1
    } else {
      newCategoryIndex = data.playlist.categories.length - 1
      newTrackIndex = data.playlist.categories[newCategoryIndex].tracks.length - 1
    }
    
    setCurrentCategoryIndex(newCategoryIndex)
    setCurrentTrackIndex(newTrackIndex)
    
    const selectedTrack = data.playlist.categories[newCategoryIndex]?.tracks[newTrackIndex]
    if (selectedTrack?.file) {
      setCurrentTrack(selectedTrack.file)
    }
  }

  const handleNext = () => {
    let newCategoryIndex = currentCategoryIndex
    let newTrackIndex = currentTrackIndex
    
    if (currentTrackIndex < currentCategory.tracks.length - 1) {
      newTrackIndex = currentTrackIndex + 1
    } else if (currentCategoryIndex < data.playlist.categories.length - 1) {
      newCategoryIndex = currentCategoryIndex + 1
      newTrackIndex = 0
    } else {
      newCategoryIndex = 0
      newTrackIndex = 0
    }
    
    setCurrentCategoryIndex(newCategoryIndex)
    setCurrentTrackIndex(newTrackIndex)
    
    const selectedTrack = data.playlist.categories[newCategoryIndex]?.tracks[newTrackIndex]
    if (selectedTrack?.file) {
      setCurrentTrack(selectedTrack.file)
    }
  }

  const handleTrackSelect = (categoryIndex: number, trackIndex: number) => {
    setCurrentCategoryIndex(categoryIndex)
    setCurrentTrackIndex(trackIndex)
    const selectedTrack = data.playlist.categories[categoryIndex]?.tracks[trackIndex]
    if (selectedTrack?.file) {
      setCurrentTrack(selectedTrack.file)
    }
  }

  const formatTime = (timeString: string) => {
    return timeString
  }

  if (!isClient) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-sky-300 to-pink-300 text-sky-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2 border-sky-300">
              <div className="flex items-center gap-2">
                <span>👼</span>
                <span>Música Celestial Especial</span>
                <span>☁️</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
              🎵 MELODÍAS CELESTIALES
            </h2>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
              <Heart className="w-8 h-8 text-sky-500 fill-current" />
              <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
            </div>
            
            <p className="text-lg text-sky-700 max-w-2xl mx-auto leading-relaxed">
              Cargando música celestial...
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-sky-300 to-pink-300 text-sky-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2 border-sky-300">
            <div className="flex items-center gap-2">
              <span>👼</span>
              <span>Música Celestial Especial</span>
              <span>☁️</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            🎵 MELODÍAS CELESTIALES
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
            <Heart className="w-8 h-8 text-sky-500 fill-current" />
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
          </div>
          
          <p className="text-lg text-sky-700 max-w-3xl mx-auto leading-relaxed">
            Una selección especial de música sagrada y melodías tiernas para acompañar 
            cada momento del bautismo de Sofia Valentina. Desde himnos angelicales hasta 
            canciones de cuna celestiales.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de categorías */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-sky-800 mb-6">Categorías Musicales</h3>
            
            {data.playlist.categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  currentCategoryIndex === categoryIndex
                    ? `bg-gradient-to-r ${category.color} border-sky-300 shadow-lg`
                    : 'bg-white border-sky-200 hover:border-sky-300 hover:shadow-md'
                }`}
                onClick={() => {
                  setCurrentCategoryIndex(categoryIndex)
                  setCurrentTrackIndex(0)
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{category.icon}</div>
                  <div>
                    <h4 className="font-bold text-sky-800">{category.name}</h4>
                    <p className="text-sm text-gray-600">{category.tracks.length} canciones</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Player principal y lista de tracks */}
          <div className="lg:col-span-2 space-y-6">
            {/* Player principal */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-sky-100 p-8">
              {currentTrack && (
                <div className="space-y-6">
                  {/* Info del track actual */}
                  <div className="text-center">
                    <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${currentCategory.color} mb-4`}>
                      <div className="text-4xl">{currentCategory.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-sky-800">{currentTrack.title}</h3>
                    <p className="text-lg text-pink-600">{currentTrack.artist}</p>
                    <p className="text-sm text-gray-600">{currentCategory.name}</p>
                  </div>

                  {/* Controles principales */}
                  <div className="flex items-center justify-center gap-6">
                    <button
                      onClick={handlePrevious}
                      className="w-12 h-12 rounded-full bg-sky-100 hover:bg-sky-200 flex items-center justify-center text-sky-700 transition-colors"
                    >
                      <SkipBack className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={handlePlayPause}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-pink-500 hover:from-sky-600 hover:to-pink-600 flex items-center justify-center text-white shadow-lg transition-all transform hover:scale-105"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="w-12 h-12 rounded-full bg-sky-100 hover:bg-sky-200 flex items-center justify-center text-sky-700 transition-colors"
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Barra de progreso simulada */}
                  <div className="space-y-2">
                    <div className="w-full bg-sky-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-sky-400 to-pink-400 h-2 rounded-full w-1/3"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>1:23</span>
                      <span>{formatTime(currentTrack.duration)}</span>
                    </div>
                  </div>

                  {/* Control de volumen */}
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-sky-600" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="flex-1 accent-sky-500"
                    />
                    <span className="text-sm text-gray-600 w-10">{Math.round(volume * 100)}%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Lista de tracks de la categoría actual */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-sky-100 p-6">
              <h4 className="text-xl font-bold text-sky-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">{currentCategory.icon}</span>
                {currentCategory.name}
              </h4>
              
              <div className="space-y-2">
                {currentCategory.tracks.map((track, trackIndex) => (
                  <div
                    key={trackIndex}
                    className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      currentTrackIndex === trackIndex
                        ? `bg-gradient-to-r ${currentCategory.color} border border-sky-300`
                        : 'hover:bg-sky-50'
                    }`}
                    onClick={() => handleTrackSelect(currentCategoryIndex, trackIndex)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold">
                      {currentTrackIndex === trackIndex && isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h5 className="font-medium text-sky-800">{track.title}</h5>
                      <p className="text-sm text-gray-600">{track.artist}</p>
                    </div>
                    
                    <div className="text-sm text-gray-500">{track.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-16 bg-gradient-to-r from-sky-100 to-pink-100 rounded-2xl p-8 border border-sky-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <h3 className="text-2xl font-bold text-sky-800">Sobre Nuestra Música</h3>
              <Sparkles className="w-6 h-6 text-pink-500" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">✨</div>
                <h4 className="font-semibold text-sky-700">Música Sacra</h4>
                <p className="text-sm text-gray-600">Himnos y cantos celestiales para la ceremonia religiosa</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">🎵</div>
                <h4 className="font-semibold text-sky-700">Melodías Familiares</h4>
                <p className="text-sm text-gray-600">Canciones tiernas para la celebración con seres queridos</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">☁️</div>
                <h4 className="font-semibold text-sky-700">Ambiente Angelical</h4>
                <p className="text-sm text-gray-600">Instrumentales suaves que crean una atmósfera celestial</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-sky-700">
                <strong>Nota:</strong> Todas las melodías han sido cuidadosamente seleccionadas para crear 
                una atmósfera de paz, amor y bendición durante el sacramento de Sofia Valentina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}