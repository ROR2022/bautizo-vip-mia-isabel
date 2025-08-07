"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Play, Pause } from "lucide-react"
import { motion } from "framer-motion"
import { useMusicContext } from "@/context/music-context"
import { vipDemoData } from "./data/vip-demo-data"
import { MiaIsabelBautizoData, miaIsabelBautizoData } from "./data/mia-isabel-data"
import { MiaIsabelTheme } from "@/lib/themes/mia-isabel-theme"

interface VipHeroProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function VipHero({ data = miaIsabelBautizoData, theme }: VipHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isPlaying, togglePlay, isClient } = useMusicContext()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${data.personalImages?.primary || data.hero.backgroundImage}')`,
          filter: "brightness(0.7)",
        }}
      />

      {/* Overlay mexicano tradicional con tema rosa pálido */}
      <div className={`absolute inset-0 ${theme ? 'bg-gradient-to-b from-pink-100/30 via-white/10 to-rose-100/20' : 'bg-gradient-to-b from-sky-100/30 via-white/10 to-pink-100/20'} z-1`}></div>

      {/* Music control button - temática celestial */}
      {isClient && (
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-sky-200/40 to-pink-200/40 backdrop-blur-sm flex items-center justify-center text-white hover:from-sky-300/50 hover:to-pink-300/50 transition-all duration-300 border-2 border-sky-300/60 shadow-2xl celestial-glow"
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>
          
          {/* Indicador de música celestial */}
          <div className="absolute -bottom-10 right-0 text-white/90 text-xs bg-gradient-to-r from-sky-400/80 to-pink-400/80 px-3 py-1 rounded-full backdrop-blur-sm font-medium border border-sky-300/40">
            🎵 Melodías Celestiales
          </div>
        </div>
      )}

      {/* Badge temática "Cielito Lindo" */}
      <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-sky-200 to-pink-200 text-sky-800 px-4 py-2 rounded-full text-sm font-bold shadow-2xl border-2 border-sky-300 celestial-shimmer">
        <div className="flex items-center gap-2">
          <span>☁️</span>
          <span>Cielito Lindo</span>
          <span>👼</span>
        </div>
      </div>

      {/* Contenido principal */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="z-10 text-center px-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white text-xl md:text-2xl mb-2 font-medium tracking-wider drop-shadow-lg"
          >
            {data.hero.subtitle}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="font-script text-6xl md:text-8xl text-white mb-6 celestial-text-gradient drop-shadow-2xl"
          >
            {data.hero.name}
          </motion.h1>
          
          {/* Mensaje celestial especial */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="bg-gradient-to-r from-sky-200/20 to-pink-200/20 backdrop-blur-sm rounded-2xl p-6 border border-sky-300/40 max-w-2xl mx-auto"
          >
            <p className="text-white text-lg md:text-xl font-light tracking-wide leading-relaxed">
              {theme ? 'Un día bendecido con tradición mexicana y amor infinito' : 'Un día bendecido lleno de amor y bendiciones celestiales'}
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sky-200 text-sm">
              <span className="flex items-center gap-1">
                <span>⛪</span>
                <span>Sacramento</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>{theme ? '🌸' : '👨‍👩‍👧‍👦'}</span>
                <span>Familia</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>🙏</span>
                <span>Bendiciones</span>
              </span>
            </div>
          </motion.div>

          {/* Información del evento */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 space-y-2"
          >
            <p className="text-xl md:text-2xl font-medium text-white">
              {data.event.date.full}
            </p>
            <p className="text-lg md:text-xl text-sky-100 opacity-90">
              {data.event.ceremony.venue}
            </p>
          </motion.div>

          {/* Detalles de los padres y padrinos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-6 space-y-1"
          >
            {/* Familia adaptada para madre soltera */}
            <p className="text-2xl md:text-3xl text-pink-200 opacity-90">
              Hija querida de {data.event.parents.mother}
            </p>
            <div className="mt-3 pt-3 border-t border-sky-300/30">
              <p className="text-white text-xl md:text-2xl mb-2 font-medium tracking-wider drop-shadow-lg">
                Padrinos: {data.event.godparents.godfather} y {data.event.godparents.godmother}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll indicator celestial */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-sky-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sky-300 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-5 h-5 text-sky-300 animate-bounce" />
        </div>
      </motion.div>

      {/* Efectos de brillo celestial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Nubes flotantes decorativas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-white/20 text-4xl"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-20 text-white/15 text-3xl"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-1/4 text-white/20 text-2xl"
        >
          ☁️
        </motion.div>
      </div>
    </section>
  )
}